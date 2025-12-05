import { UmbMediaCollectionRepository as C } from "./media-collection.repository-2HxoD88i.js";
import { U as D } from "./dropzone.element-mk7CY1SM.js";
import { p as b } from "./input-upload-field.element-DEgpG3Zz.js";
import "./media-url.repository-B5RzlWhD.js";
import { html as E, css as w, state as T, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbDataTypeDetailRepository as M } from "@umbraco-cms/backoffice/data-type";
import { UmbEntityContext as A } from "@umbraco-cms/backoffice/entity";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyEditorConfigCollection as I } from "@umbraco-cms/backoffice/property-editor";
import { UmbCollectionElement as O } from "@umbraco-cms/backoffice/collection";
var P = Object.defineProperty, R = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, f = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? R(e, o) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (r = (a ? m(e, o, r) : m(r)) || r);
  return a && r && P(e, o, r), r;
}, _ = (t, e, o) => e.has(t) || d("Cannot " + o), i = (t, e, o) => (_(t, e, "read from private field"), o ? o.call(t) : e.get(t)), n = (t, e, o) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), y = (t, e, o) => (_(t, e, "access private method"), o), p, l, h, u, v, g;
let s = class extends B {
  constructor() {
    super(), n(this, u), n(this, p, new M(this)), n(this, l, new A(this)), n(this, h, new C(this)), y(this, u, v).call(this), i(this, l).setEntityType(b), i(this, l).setUnique(null);
  }
  render() {
    if (this._routes)
      return E`<umb-router-slot id="router-slot" .routes=${this._routes}></umb-router-slot>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
v = async function() {
  const t = await i(this, h).getDefaultConfiguration();
  await i(this, p).requestByUnique(t.defaultDataTypeId), this.observe(
    await i(this, p).byUnique(t.defaultDataTypeId),
    (e) => {
      if (!e) return;
      const o = y(this, u, g).call(this, e);
      this._routes = [
        {
          path: "collection",
          component: () => {
            const a = new O();
            return a.alias = D, a.config = o, a;
          }
        },
        {
          path: "",
          pathMatch: "full",
          redirectTo: "collection"
        },
        {
          path: "**",
          component: async () => (await import("@umbraco-cms/backoffice/router")).UmbRouteNotFoundElement
        }
      ];
    },
    "_observeConfigDataType"
  );
};
g = function(t) {
  const e = new I(t.values), o = Number(e.getValueByAlias("pageSize"));
  return {
    unique: "",
    dataTypeId: "",
    layouts: e?.getValueByAlias("layouts"),
    orderBy: e?.getValueByAlias("orderBy") ?? "updateDate",
    orderDirection: e?.getValueByAlias("orderDirection") ?? "asc",
    pageSize: isNaN(o) ? 50 : o,
    userDefinedProperties: e?.getValueByAlias("includeProperties")
  };
};
s.styles = [
  w`
			:host {
				height: 100%;
			}

			#router-slot {
				height: calc(100% - var(--umb-header-layout-height));
			}
		`
];
f([
  T()
], s.prototype, "_routes", 2);
s = f([
  U("umb-media-dashboard")
], s);
const k = s;
export {
  s as UmbMediaDashboardElement,
  k as default
};
//# sourceMappingURL=media-dashboard.element-CVL81ueF.js.map
