const r = /:([^/]+)/g;
function o(t, u) {
  return u ? t.replace(r, (l, ...e) => {
    const n = u[e[0]];
    return n === void 0 ? `:${e[0]}` : n === null ? "null" : n.toString();
  }) : t;
}
export {
  o as u
};
//# sourceMappingURL=url-pattern-to-string.function-BAOMgyZQ.js.map
