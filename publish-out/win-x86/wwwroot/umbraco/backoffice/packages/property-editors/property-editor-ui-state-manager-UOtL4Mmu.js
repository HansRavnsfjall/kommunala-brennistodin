function o(e, s, r = "selected") {
  const n = new Set(s);
  let a = !1;
  for (const t of e) {
    const c = n.has(t.value);
    if ((t[r] ?? !1) !== c) {
      a = !0;
      break;
    }
  }
  return a ? e.map((t) => ({
    ...t,
    [r]: n.has(t.value)
  })) : e;
}
function f(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
export {
  f as e,
  o as u
};
//# sourceMappingURL=property-editor-ui-state-manager-UOtL4Mmu.js.map
