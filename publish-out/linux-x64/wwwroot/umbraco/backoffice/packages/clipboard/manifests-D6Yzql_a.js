import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UMB_PROPERTY_ACTION_DEFAULT_KIND_MANIFEST as _ } from "@umbraco-cms/backoffice/property-action";
const I = "Umb.Repository.ClipboardCollection", T = "Umb.CollectionView.Clipboard.Table", i = "Umb.Collection.Clipboard", A = "Umb.Modal.ClipboardEntryPicker", E = "clipboard-entry", R = new o(
  "UmbClipboardEntryDetailStore"
), e = "Umb.Repository.ClipboardEntry.Detail", C = "Umb.Store.ClipboardEntry.Detail", n = new o(
  "UmbClipboardEntryItemStore"
), s = "Umb.Repository.ClipboardEntryItem", O = "Umb.Store.ClipboardEntryItem", p = "Umb.Workspace.ClipboardRoot", L = "clipboard-root", t = {
  type: "kind",
  alias: "Umb.Kind.PropertyAction.pasteFromClipboard",
  matchKind: "pasteFromClipboard",
  matchType: "propertyAction",
  manifest: {
    ..._.manifest,
    type: "propertyAction",
    kind: "pasteFromClipboard",
    api: () => import("./paste-from-clipboard.property-action-BPQNO_f2.js"),
    weight: 1190,
    meta: {
      icon: "icon-clipboard-paste",
      label: "Replace"
    }
  }
}, b = [
  t
];
export {
  e as U,
  s as a,
  E as b,
  p as c,
  L as d,
  i as e,
  C as f,
  R as g,
  O as h,
  n as i,
  A as j,
  I as k,
  T as l,
  t as m,
  b as n
};
//# sourceMappingURL=manifests-D6Yzql_a.js.map
