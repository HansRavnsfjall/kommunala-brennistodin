import { U as a, a as i } from "./constants-CH_iDk6H.js";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as t } from "@umbraco-cms/backoffice/section";
const n = [
  {
    type: "repository",
    alias: a,
    name: "Package Repository",
    api: () => import("./package.repository-DyWS8t6-.js")
  },
  {
    type: "store",
    alias: i,
    name: "Package Store",
    api: () => import("./package.store-BoQ5HfpI.js")
  }
], s = [
  {
    type: "workspace",
    alias: "Umb.Workspace.PackageBuilder",
    name: "Package Builder Workspace",
    element: () => import("./workspace-package-builder.element-CvmzvjzB.js"),
    meta: {
      entityType: "package-builder"
    }
  }
], c = [
  {
    type: "workspace",
    alias: "Umb.Workspace.Package",
    name: "Package Workspace",
    element: () => import("./workspace-package.element-DBPVhB1m.js"),
    meta: {
      entityType: "package"
    }
  }
], e = "Umb.Section.Packages", o = [
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
        alias: t,
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
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  },
  {
    type: "sectionView",
    alias: "Umb.SectionView.Packages.Installed",
    name: "Installed Packages Section View",
    element: () => import("./installed-packages-section-view.element-BrbjdLzX.js"),
    weight: 200,
    meta: {
      label: "#packager_installed",
      pathname: "installed",
      icon: "icon-box"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  },
  {
    type: "sectionView",
    alias: "Umb.SectionView.Packages.Builder",
    name: "Packages Builder Section View",
    element: () => import("./created-packages-section-view.element-B98yWbSC.js"),
    weight: 100,
    meta: {
      label: "#packager_created",
      pathname: "created",
      icon: "icon-files"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
], p = [
  ...n,
  ...s,
  ...c,
  ...o
];
export {
  p as manifests
};
//# sourceMappingURL=manifests.js.map
