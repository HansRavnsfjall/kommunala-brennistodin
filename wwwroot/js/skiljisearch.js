(function () {
    const ENDPOINT = "/umbraco/api/sortsearch/find";
    const MIN_CHARS = 2;
    const DEBOUNCE_MS = 180;
  
    // --- helpers ---
    const debounce = (fn, ms) => {
      let t;
      return (...a) => { clearTimeout(t); t = setTimeout(() => fn.apply(null, a), ms); };
    };
  
    const esc = s =>
      (s || "").replace(/[&<>"']/g, m =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])
      );
  
    const iconCell = (url, text) => {
      if (url) return `<div class="icon-tile"><img src="${url}" alt="${esc(text || "")}"></div>`;
      if (text) return `<div class="icon-tile text"><span>${esc(text)}</span></div>`;
      return `<div class="icon-tile text"><span>—</span></div>`;
    };
  
    const findTemplate = startEl =>
      startEl.closest("section,div,main,form,article")?.querySelector("#sort-noresult-template") ||
      document.getElementById("sort-noresult-template");
  
    // --- renderer ---
    function renderResults(payload) {
      const count   = payload?.count ?? 0;
      const results = payload?.results ?? [];
      if (count === 0) return null;
  
      const pluralWord = count === 1 ? "úrslit funnið" : "úrslit funnin";
  
      const head = `
        <div class="count-title mb-3">
          <span class="count">${count}</span> ${pluralWord}
        </div>
        <table class="result-table w-100">
          <thead>
            <tr class="result-head">
              <th class="result-cell col-title">Heiti</th>
              <th class="result-cell col-icon">Heima</th>
              <th class="result-cell col-icon">Endurnýtslan</th>
            </tr>
          </thead>
          <tbody>`;
  
      const rows = results.map(r => {
        const title = esc(r.name || "");
        const url   = r.url || "#";
        const desc  = r.lysing || "";
        const heima = iconCell(r.heimaIconUrl, r.heimaText);
        const endur = iconCell(r.endurIconUrl, r.endurText);
  
        return `
          <tr class="result-row" data-href="${esc(url)}" role="link" tabindex="0" aria-label="${title}">
            <td class="result-cell col-title position-relative">
              <!-- Keep a real anchor for SEO and context menu -->
              <a class="row-primary-link stretched-link d-inline-block" href="${url}" aria-label="${title}"></a>
              <div class="item-title h5 mb-1">${title}</div>
              <div class="item-desc">${desc}</div>
            </td>
            <td class="result-cell col-icon">${heima}</td>
            <td class="result-cell col-icon">${endur}</td>
          </tr>`;
      }).join("");
  
      return `<div class="container">${head + rows + `</tbody></table>`}</div>`;
    }
  
    // --- click/keyboard delegation (bind once per mount) ---
    function ensureRowHandlers(mount) {
      if (mount._rowHandlersBound) return;
      mount._rowHandlersBound = true;
  
      const isInteractive = (el) => !!el.closest('a, button, input, textarea, select, [role="button"]');
  
      mount.addEventListener("click", (ev) => {
        const tr = ev.target.closest("tr.result-row");
        if (!tr || isInteractive(ev.target)) return;
        const href = tr.dataset.href || tr.querySelector(".row-primary-link")?.getAttribute("href");
        if (href && href !== "#") window.location.href = href;
      });
  
      mount.addEventListener("keydown", (ev) => {
        const tr = ev.target.closest("tr.result-row");
        if (!tr) return;
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          const href = tr.dataset.href || tr.querySelector(".row-primary-link")?.getAttribute("href");
          if (href && href !== "#") window.location.href = href;
        }
      });
    }
  
    // --- bind to all search boxes ---
    const inputs = [...document.querySelectorAll(".sort-search")];
    if (!inputs.length) return;
  
    inputs.forEach(input => {
      const mount =
        input.closest("section,div,main,form,article")?.querySelector(".sort-search-result") ||
        document.querySelector(".sort-search-result");
      if (!mount) return;
  
      ensureRowHandlers(mount); // bind once
  
      const tpl = findTemplate(input);
  
      const runSearch = debounce(async () => {
        const term = (input.value || "").trim();
  
        if (term.length < MIN_CHARS) {
          mount.innerHTML = "";
          return;
        }
  
        try {
          const url = new URL(ENDPOINT, window.location.origin);
          url.searchParams.set("term", term);
          url.searchParams.set("take", "25");
  
          const res = await fetch(url.toString(), { headers: { "Accept": "application/json" } });
          if (!res.ok) { mount.innerHTML = ""; return; }
  
          const data = await res.json();
          const html = renderResults(data);
  
          if (html) {
            mount.innerHTML = html;
          } else {
            mount.innerHTML = tpl ? `<div class="container">${tpl.innerHTML}</div>` : "";
          }
        } catch (err) {
          console.error(err);
          mount.innerHTML = "";
        }
      }, DEBOUNCE_MS);
  
      input.addEventListener("input", runSearch);
    });
  })();