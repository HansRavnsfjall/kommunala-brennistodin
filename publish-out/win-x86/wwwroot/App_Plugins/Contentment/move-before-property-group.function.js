function f(e) {
  var s, n, d, r, a, h, i, R;
  if (e) {
    const o = (s = e.getRootNode()) == null ? void 0 : s.host, t = (i = (h = (a = (r = (d = (n = o == null ? void 0 : o.getRootNode()) == null ? void 0 : n.host) == null ? void 0 : d.getRootNode()) == null ? void 0 : r.host) == null ? void 0 : a.getRootNode()) == null ? void 0 : h.host) == null ? void 0 : i.parentElement, c = t == null ? void 0 : t.getRootNode().host;
    o && t && c && ((R = c.shadowRoot) == null || R.insertBefore(e, t), o.style.display = "none");
  }
}
export {
  f as t
};
//# sourceMappingURL=move-before-property-group.function.js.map
