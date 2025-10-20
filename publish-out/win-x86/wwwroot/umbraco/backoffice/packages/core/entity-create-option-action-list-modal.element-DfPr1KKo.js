import { UmbRefItemElement as E } from "@umbraco-cms/backoffice/components";
import { UmbExtensionsApiInitializer as w } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as C } from "@umbraco-cms/backoffice/extension-registry";
import { html as c, repeat as g, ifDefined as h, state as m, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as N } from "@umbraco-cms/backoffice/modal";
var O = Object.defineProperty, P = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, u = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? P(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && O(e, i, r), r;
}, T = (t, e, i) => e.has(t) || p("Cannot " + i), x = (t, e, i) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), l = (t, e, i) => (T(t, e, "access private method"), i), s, d, _, y, b, v;
let f = class extends N {
  constructor() {
    super(...arguments), x(this, s), this._apiControllers = [], this._hrefList = [];
  }
  updated(t) {
    super.updated(t), t.has("data") && l(this, s, d).call(this);
  }
  render() {
    return c`
			<umb-body-layout headline="${this.localize.term("general_create")}">
				<uui-box>
					${this._apiControllers.length === 0 ? c`<div>No create options available.</div>` : c`
								<uui-ref-list>
									${g(
      this._apiControllers,
      (t) => t.manifest?.alias,
      (t, e) => l(this, s, v).call(this, t, e)
    )}
								</uui-ref-list>
							`}
				</uui-box>
				<uui-button
					slot="actions"
					label=${this.localize.term("general_cancel")}
					@click=${this._rejectModal}></uui-button>
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
d = function() {
  const t = this.data;
  if (!t) throw new Error("No data found");
  if (!t.entityType) throw new Error("No entityType found");
  if (t.unique === void 0) throw new Error("No unique found");
  new w(
    this,
    C,
    "entityCreateOptionAction",
    (e) => [{ entityType: t.entityType, unique: t.unique, meta: e.meta }],
    (e) => e.forEntityTypes.includes(t.entityType),
    async (e) => {
      this._apiControllers = e;
      const i = this._apiControllers.map((n) => n.api?.getHref());
      this._hrefList = await Promise.all(i);
    }
  );
};
_ = async function(t, e) {
  if (t.stopPropagation(), !e.api)
    throw new Error("No API found");
  e.api.execute().then(() => {
    this._submitModal();
  }).catch(() => {
  });
};
y = async function(t, e) {
  if (t.composedPath().find((n) => n instanceof E)) {
    if (!e)
      throw new Error("No href found");
    this._submitModal();
  }
};
b = function(t) {
  return t && t.startsWith("http") ? "_blank" : "_self";
};
v = function(t, e) {
  const i = t.manifest;
  if (!i) throw new Error("No manifest found");
  const n = i.meta.label ? this.localize.string(i.meta.label) : i.name, r = i.meta.description ? this.localize.string(i.meta.description) : void 0, o = this._hrefList[e];
  return c`
			<umb-ref-item
				name=${n}
				detail=${h(r)}
				icon=${i.meta.icon}
				href=${h(o)}
				target=${l(this, s, b).call(this, o)}
				@open=${async (a) => await l(this, s, _).call(this, a, t).catch(() => {
  })}
				@click=${(a) => l(this, s, y).call(this, a, o)}>
			</umb-ref-item>
		`;
};
u([
  m()
], f.prototype, "_apiControllers", 2);
u([
  m()
], f.prototype, "_hrefList", 2);
f = u([
  $("umb-entity-create-option-action-list-modal")
], f);
export {
  f as UmbEntityCreateOptionActionListModalElement,
  f as element
};
//# sourceMappingURL=entity-create-option-action-list-modal.element-DfPr1KKo.js.map
