function a(e) {
  var o, n;
  if (e) {
    const t = (o = e.parentElement) == null ? void 0 : o.parentElement;
    if (t) {
      t.setAttribute("orientation", "vertical");
      const r = (n = t.shadowRoot) == null ? void 0 : n.querySelector("#headerColumn");
      r && (r.style.display = "none");
    }
  }
}
export {
  a as t
};
//# sourceMappingURL=hide-label.function.js.map
