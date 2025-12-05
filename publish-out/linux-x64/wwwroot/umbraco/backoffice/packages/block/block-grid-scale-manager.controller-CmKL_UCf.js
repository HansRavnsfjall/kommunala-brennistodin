import { getAccumulatedValueOfIndex as S, getInterpolatedIndexOfPositionInWeightMap as g } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as C } from "@umbraco-cms/backoffice/class-api";
function R(p, a, i) {
  if (a.length > 0) {
    const o = a.reduce((e, n) => {
      if (e > i)
        return n;
      const l = Math.abs(e - p), u = Math.abs(n - p);
      return l === u ? e < n ? e : n : u < l ? n : e;
    });
    if (o)
      return o;
  }
}
async function M(p, a) {
  if (p.areas) {
    const i = p.contentKey;
    await Promise.all(
      p.areas.map(async (o) => {
        const e = o.key;
        await Promise.all(
          o.items.map(async (n) => {
            await a(n, i, e), await M(n, a);
          })
        );
      })
    );
  }
}
class E extends C {
  constructor(a) {
    super(a, "blockGridScaleManager"), this.#t = [], this.#e = [], this.#n = 0, this.#o = 0, this.onScaleMouseMove = (i) => {
      const o = this._entries?.getLayoutContainerElement();
      if (!o)
        return;
      const e = o.getBoundingClientRect(), n = this.getHostElement().getBoundingClientRect(), l = n.left - e.left, u = n.top - e.top, m = i.clientX - e.left, r = i.clientY - e.top, t = this.#i(l, u, m, r);
      if (!t) return;
      const h = this._host.getColumnSpan() !== t.columnSpan;
      h && (o.style.gridTemplateRows = ""), cancelAnimationFrame(this.#o), this.#o = requestAnimationFrame(() => {
        this.#s(o, e, n, h);
      }), this._host.setColumnSpan(t.columnSpan), this._host.setRowSpan(t.rowSpan);
    }, this.onScaleMouseUp = (i) => {
      const o = this._entries?.getLayoutContainerElement();
      if (!o)
        return;
      cancelAnimationFrame(this.#o), window.removeEventListener("mousemove", this.onScaleMouseMove), window.removeEventListener("mouseup", this.onScaleMouseUp), window.removeEventListener("mouseleave", this.onScaleMouseUp);
      const e = o.getBoundingClientRect(), n = this.getHostElement().getBoundingClientRect(), l = n.left - e.left, u = n.top - e.top, m = i.clientX - e.left, r = i.clientY - e.top, t = this.#i(l, u, m, r);
      o.style.gridTemplateRows = "", this.#n = 0, t && (this._host.setColumnSpan(t.columnSpan), this._host.setRowSpan(t.rowSpan));
    }, this._host = a;
  }
  #t;
  #e;
  #n;
  setEntriesContext(a) {
    this._entries = a;
  }
  // Scaling feature:
  #s(a, i, o, e) {
    if (!this._entries) return;
    const n = this._entries.getLayoutColumns() ?? 0, l = window.getComputedStyle(a), u = Number(l.columnGap.split("px")[0]) || 0, m = Number(l.rowGap.split("px")[0]) || 0;
    let r = l.gridTemplateColumns.trim().split("px").map((s) => Number(s)), t = l.gridTemplateRows.trim().split("px").map((s) => Number(s));
    r = r.filter((s) => s > 0), t = t.filter((s) => s > 0), (e || t.length > this.#n) && (this.#n = t.length, a.style.gridTemplateRows = l.gridTemplateRows);
    const h = r.length;
    r = r.map((s, c) => h === c ? s : s + u);
    const f = t.length;
    t = t.map((s, c) => f === c ? s : s + m);
    let d = r.length;
    const w = n - d;
    if (w > 0) {
      const s = S(d, r) || 0, c = (i.width - s) / w;
      for (; d++ < n; )
        r.push(c);
    }
    if (t.length === 0) {
      t.push(o.top - i.top);
      let s = 0;
      const c = o.height;
      for (; s++ < (this._host.getRowSpan() ?? 0); )
        t.push(c);
    }
    t.push(50), t.push(50), t.push(50), t.push(50), t.push(50), this.#t = r, this.#e = t;
  }
  // TODO: Rename to calc something.
  #i(a, i, o, e) {
    const n = this._entries?.getLayoutColumns();
    if (!n) return;
    const l = Math.round(g(a, this.#t)), u = Math.round(g(i, this.#e)), m = g(o, this.#t), r = g(e, this.#e);
    let t = Math.max(m - l, 1);
    const h = this._host.getRelevantColumnSpanOptions();
    if (!h) return;
    t = R(t, h, n - l) ?? n;
    const d = this._host.getMinMaxRowSpan();
    if (!d) return;
    const [w, s] = d;
    let c = Math.round(Math.max(r - u, w));
    return s != null && (c = Math.min(c, s)), { columnSpan: t, rowSpan: c, startCol: l, startRow: u };
  }
  onScaleMouseDown(a) {
    const i = this._entries?.getLayoutContainerElement();
    if (!i)
      return;
    a.preventDefault(), window.addEventListener("mousemove", this.onScaleMouseMove), window.addEventListener("mouseup", this.onScaleMouseUp), window.addEventListener("mouseleave", this.onScaleMouseUp);
    const o = this.getHostElement().getBoundingClientRect();
    this.#s(i, i.getBoundingClientRect(), o, !0);
  }
  #o;
}
export {
  E as U,
  R as c,
  M as f
};
//# sourceMappingURL=block-grid-scale-manager.controller-CmKL_UCf.js.map
