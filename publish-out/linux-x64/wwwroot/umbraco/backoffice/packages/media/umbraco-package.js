const e = "Umbraco.Core.MediaManagement", n = [
  {
    name: "Media Management Bundle",
    alias: "Umb.Bundle.MediaManagement",
    type: "bundle",
    js: () => import("./manifests.js")
  },
  {
    name: "Media Management Entry Point",
    alias: "Umb.EntryPoint.MediaManagement",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point.js")
  }
];
export {
  n as extensions,
  e as name
};
//# sourceMappingURL=umbraco-package.js.map
