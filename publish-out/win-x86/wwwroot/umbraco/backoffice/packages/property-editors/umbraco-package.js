const t = "Umbraco.Core.PropertyEditors", r = [
  {
    name: "Property Editors Bundle",
    alias: "Umb.Bundle.PropertyEditors",
    type: "bundle",
    js: () => import("./manifests.js")
  },
  {
    name: "Property Editors Entry Point",
    alias: "Umb.EntryPoint.PropertyEditors",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point.js")
  }
];
export {
  r as extensions,
  t as name
};
//# sourceMappingURL=umbraco-package.js.map
