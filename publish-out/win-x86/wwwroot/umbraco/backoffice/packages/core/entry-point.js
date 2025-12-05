import { manifests as r } from "./manifests.js";
import { U as a } from "./auth.context.token-CFi72pnR.js";
import { U as p } from "./action-event.context-BeHwOgGP.js";
import { a as f, U as c } from "./view-loader.element-REL1MIYj.js";
import { b as l } from "./interaction-memory.context-CoQHsAWq.js";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/class-api";
import { UmbExtensionsApiInitializer as t } from "@umbraco-cms/backoffice/extension-api";
import { UmbModalManagerContext as C } from "@umbraco-cms/backoffice/modal";
import { UmbNotificationContext as w } from "@umbraco-cms/backoffice/notification";
import "./property-action-menu.element--L8-pHCY.js";
import "./menu-item-layout.element-DPT7Hbjy.js";
import "@umbraco-cms/backoffice/action";
import "./ref-manifest.element-U7BEJu6e.js";
import "./entity-item-ref.element-vN4hOP7r.js";
import "./entity-sign-bundle.element-hkC5dsoB.js";
const v = (o, n) => {
  new t(o, n, "globalContext", [o]), new t(o, n, "store", [o]), new t(o, n, "treeStore", [o]), new t(o, n, "itemStore", [o]), n.registerMany(r);
  const m = new f();
  o.shadowRoot?.appendChild(m);
  const e = new c();
  o.shadowRoot?.appendChild(e), new w(o), new C(o), new p(o), new l(o), o.consumeContext(a, (i) => {
    i?.setInitialized();
  });
};
export {
  v as onInit
};
//# sourceMappingURL=entry-point.js.map
