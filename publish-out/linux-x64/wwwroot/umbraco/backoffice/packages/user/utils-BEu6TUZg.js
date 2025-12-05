const r = [
  { key: "All", color: "positive", look: "secondary" },
  { key: "Active", color: "positive", look: "primary" },
  { key: "Disabled", color: "danger", look: "primary" },
  { key: "LockedOut", color: "danger", look: "secondary" },
  { key: "Invited", color: "warning", look: "primary" },
  { key: "Inactive", color: "warning", look: "primary" }
], t = (e) => r.filter((o) => o.key === e).map((o) => ({
  ...o,
  key: "state" + o.key
}))[0], a = { dateStyle: "long", timeStyle: "short" };
export {
  a as T,
  t as g
};
//# sourceMappingURL=utils-BEu6TUZg.js.map
