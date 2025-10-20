const e = "Umbraco.Core.Templating", n = [
  {
    name: "Template Management Bundle",
    alias: "Umb.Bundle.TemplateManagement",
    type: "bundle",
    js: () => import("./manifests.js")
  },
  {
    name: "Template Management Backoffice Entry Point",
    alias: "Umb.BackofficeEntryPoint.TemplateManagement",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point.js")
  }
];
export {
  n as extensions,
  e as name
};
//# sourceMappingURL=umbraco-package.js.map
