import { U as t, a as i } from "./constants-CH_iDk6H.js";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as s, UMB_SECTION_ALIAS_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/section";
const c = [
  {
    type: "repository",
    alias: t,
    name: "Package Repository",
    api: () => import("./package.repository-Cg-nPSQY.js")
  },
  {
    type: "store",
    alias: i,
    name: "Package Store",
    api: () => import("./package.store-BoQ5HfpI.js")
  }
], n = [
  {
    type: "workspace",
    alias: "Umb.Workspace.PackageBuilder",
    name: "Package Builder Workspace",
    element: () => import("./workspace-package-builder.element-DqEOz4Kj.js"),
    meta: {
      entityType: "package-builder"
    }
  }
], o = [
  {
    type: "workspace",
    alias: "Umb.Workspace.Package",
    name: "Package Workspace",
    element: () => import("./workspace-package.element-DBPVhB1m.js"),
    meta: {
      entityType: "package"
    }
  }
], e = "Umb.Section.Packages", m = [
  {
    type: "section",
    alias: e,
    name: "Packages Section",
    weight: 700,
    meta: {
      label: "#sections_packages",
      pathname: "packages"
    },
    conditions: [
      {
        alias: s,
        match: e
      }
    ]
  },
  {
    type: "sectionView",
    alias: "Umb.SectionView.Packages.Marketplace",
    name: "Packages Marketplace Section View",
    element: () => import("./packages-marketplace-section-view.element-DkZEuy2Y.js"),
    weight: 300,
    meta: {
      label: "Packages",
      pathname: "packages",
      icon: "icon-cloud"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  },
  {
    type: "sectionView",
    alias: "Umb.SectionView.Packages.Installed",
    name: "Installed Packages Section View",
    element: () => import("./installed-packages-section-view.element-DomcSLwv.js"),
    weight: 200,
    meta: {
      label: "#packager_installed",
      pathname: "installed",
      icon: "icon-box"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  },
  {
    type: "sectionView",
    alias: "Umb.SectionView.Packages.Builder",
    name: "Packages Builder Section View",
    element: () => import("./created-packages-section-view.element-BCOXOtxs.js"),
    weight: 100,
    meta: {
      label: "#packager_created",
      pathname: "created",
      icon: "icon-files"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  }
], r = [
  ...c,
  ...n,
  ...o,
  ...m
];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map
