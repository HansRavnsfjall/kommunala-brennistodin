const t = Object.freeze({
  COPY: "Copy",
  CUSTOM: "Custom",
  DELETE: "Delete",
  MOVE: "Move",
  NEW: "New",
  OPEN: "Open",
  SAVE: "Save",
  SORT: "Sort",
  SYSTEM: "System"
});
function o(e) {
  switch (e) {
    case t.SAVE:
      return {
        style: { look: "primary", color: "default" },
        text: { label: "auditTrails_smallSave", desc: "auditTrails_save" }
      };
    default:
      return {
        style: { look: "placeholder", color: "danger" },
        text: { label: e, desc: "TODO" }
      };
  }
}
const a = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
export {
  a as T,
  o as g
};
//# sourceMappingURL=utils-Cn_XY6oh.js.map
