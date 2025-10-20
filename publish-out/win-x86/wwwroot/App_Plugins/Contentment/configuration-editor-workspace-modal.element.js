import { nothing as c, when as k, repeat as C, html as s, ifDefined as U, css as $, state as v, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalToken as M, UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as T } from "@umbraco-cms/backoffice/style";
import { p as A } from "./parse-boolean.function.js";
import { p as h } from "./parse-int.function.js";
var w = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, d = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? I(e, r) : e, l = t.length - 1, p; l >= 0; l--)
    (p = t[l]) && (i = (o ? p(e, r, i) : p(i)) || i);
  return o && i && w(e, r, i), i;
}, f = (t, e, r) => e.has(t) || y("Cannot " + r), W = (t, e, r) => (f(t, e, "read from private field"), r ? r.call(t) : e.get(t)), _ = (t, e, r) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), u = (t, e, r) => (f(t, e, "access private method"), r), m, a, b, E, g;
const R = new M("Umb.Contentment.Modal.ConfigurationEditor.Workspace", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
});
let n = class extends P {
  constructor() {
    super(...arguments), _(this, a), _(this, m, {
      "Umb.PropertyEditorUi.Integer": (t) => h(t),
      "Umb.PropertyEditorUi.Toggle": (t) => A(t),
      "Umb.Contentment.PropertyEditorUi.NumberInput": (t) => h(t)
    });
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data) return;
    this._item = this.data.model;
    const t = { ...this.data.item.value };
    (this._item.fields ?? []).forEach((e) => {
      if (!e.key) return;
      const r = t[e.key];
      if (!e.propertyEditorUiAlias) return;
      const o = W(this, m)[e.propertyEditorUiAlias];
      o && (t[e.key] = o(r));
    }), this._values = Object.entries(t).map(([e, r]) => ({ alias: e, value: r }));
  }
  render() {
    if (!this._item) return c;
    const t = this._item.fields ?? [];
    return this._values || (this._values = []), s`
			<umb-body-layout headline="Configure ${this._item.name}">
				<uui-box>
					${k(
      t.length,
      () => s`
							<umb-property-dataset .value=${this._values} @change=${u(this, a, b)}>
								${C(
        t,
        (e) => e.key,
        (e) => u(this, a, g).call(this, e)
      )}
							</umb-property-dataset>
						`,
      () => s`<p>There are no fields for this item.</p>`
    )}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${this._rejectModal}></uui-button>
					<uui-button
						color="positive"
						look="primary"
						label=${this.localize.term("bulk_done")}
						@click=${() => u(this, a, E).call(this, this._item)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
b = function(t) {
  this._values = t.target.value;
};
E = function(t) {
  var e;
  this.value = { key: t.key, value: Object.fromEntries(((e = this._values) == null ? void 0 : e.map((r) => [r.alias, r.value])) ?? []) }, this._submitModal();
};
g = function(t) {
  return t.key ? t.propertyEditorUiAlias ? s`
			<umb-property
				alias=${t.key}
				label=${t.name ?? t.key}
				description=${U(t.description ?? void 0)}
				.propertyEditorUiAlias=${t.propertyEditorUiAlias}
				.config=${t.config ? Object.entries(t.config).map(([e, r]) => ({ alias: e, value: r })) : []}>
			</umb-property>
		` : c : c;
};
n.styles = [
  T,
  $`
			umb-property {
				font-size: 14px;
			}
		`
];
d([
  v()
], n.prototype, "_item", 2);
d([
  v()
], n.prototype, "_values", 2);
n = d([
  O("contentment-property-editor-ui-configuration-editor-workspace-modal")
], n);
export {
  R as CONTENTMENT_CONFIGURATION_EDITOR_WORKSPACE_MODAL,
  n as ContentmentPropertyEditorUIConfigurationEditorWorkspaceModalElement,
  n as element
};
//# sourceMappingURL=configuration-editor-workspace-modal.element.js.map
