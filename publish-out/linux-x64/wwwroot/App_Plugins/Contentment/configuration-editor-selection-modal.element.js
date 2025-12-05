import { CONTENTMENT_CONFIGURATION_EDITOR_WORKSPACE_MODAL as w } from "./configuration-editor-workspace-modal.element.js";
import { html as n, nothing as N, repeat as g, when as I, ifDefined as y, css as k, state as C, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { debounce as A } from "@umbraco-cms/backoffice/utils";
import { umbFocus as F } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as x, UmbModalBaseElement as D, UMB_MODAL_MANAGER_CONTEXT as U } from "@umbraco-cms/backoffice/modal";
var P = Object.defineProperty, z = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, r) => {
  for (var o = r > 1 ? void 0 : r ? z(e, i) : e, p = t.length - 1, m; p >= 0; p--)
    (m = t[p]) && (o = (r ? m(e, i, o) : m(o)) || o);
  return r && o && P(e, i, o), o;
}, v = (t, e, i) => e.has(t) || E("Cannot " + i), l = (t, e, i) => (v(t, e, "read from private field"), i ? i.call(t) : e.get(t)), d = (t, e, i) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), G = (t, e, i, r) => (v(t, e, "write to private field"), e.set(t, i), i), s = (t, e, i) => (v(t, e, "access private method"), i), h, u, b, a, f, M, O, $, T;
const V = new x("Umb.Contentment.Modal.ConfigurationEditor.Selection", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
});
let c = class extends D {
  constructor() {
    super(), d(this, a), d(this, h, (Math.random() + 1).toString(36).substring(7)), this._hideFilter = !1, d(this, u), d(this, b, A((t) => {
      if (!this.data) return;
      const e = t ? this.data.items.filter((i) => i.name.toLowerCase().includes(t)) : this.data.items;
      s(this, a, f).call(this, e);
    }, 500)), this.consumeContext(U, (t) => {
      G(this, u, t);
    });
  }
  connectedCallback() {
    var t, e;
    super.connectedCallback(), s(this, a, f).call(this, (t = this.data) == null ? void 0 : t.items), this._hideFilter = (((e = this.data) == null ? void 0 : e.items.length) ?? 0) <= 7;
  }
  render() {
    return n`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				${s(this, a, $).call(this)} ${s(this, a, T).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = function(t) {
  if (!t) return;
  const e = Object.groupBy(
    t,
    (r) => r.group ?? l(this, h)
  ), i = Object.entries(e);
  this._grouped = i.map(([r, o]) => ({ alias: r, items: o }));
};
M = async function(t) {
  var o;
  if (!((o = t.fields) != null && o.length)) {
    this.value = { key: t.key, value: {} }, this._submitModal();
    return;
  }
  if (!l(this, u)) return;
  const e = {
    key: t.key,
    value: t.defaultValues ?? {}
  }, r = await l(this, u).open(this, w, {
    data: { item: e, model: t }
  }).onSubmit().catch(() => {
  });
  r && (this.value = r, this._submitModal());
};
O = function(t) {
  const e = t.target.value || "";
  l(this, b).call(this, e.toLowerCase());
};
$ = function() {
  if (this._hideFilter) return N;
  const t = this.localize.term("placeholders_filter");
  return n`
			<uui-input type="search" id="filter" label=${t} placeholder=${t} @input=${s(this, a, O)} ${F()}>
				<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
			</uui-input>
		`;
};
T = function() {
  var t;
  return (t = this._grouped) != null && t.length ? n`
			<uui-box>
				${g(
    this._grouped,
    (e) => e.alias,
    (e) => n`
						${I(e.alias !== l(this, h), () => n`<h4>${e.alias}</h4>`)}
						<uui-ref-list>
							${g(
      e.items,
      (i) => i.key,
      (i) => n`
									<umb-ref-item
										name=${i.name}
										detail=${y(i.description ?? void 0)}
										icon=${y(i.icon ?? void 0)}
										@open=${() => s(this, a, M).call(this, i)}>
									</umb-ref-item>
								`
    )}
						</uui-ref-list>
					`
  )}
			</uui-box>
		` : n`<uui-box><p>No items found</p></uui-box>`;
};
c.styles = [
  k`
			h4 {
				margin-top: 0.5rem;
				margin-bottom: 0.5rem;
			}

			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				display: flex;
				color: var(--uui-color-border);
				height: 100%;
				padding-left: var(--uui-size-space-2);
			}
		`
];
_([
  C()
], c.prototype, "_grouped", 2);
_([
  C()
], c.prototype, "_hideFilter", 2);
c = _([
  S("contentment-property-editor-ui-configuration-editor-selection-modal")
], c);
export {
  V as CONTENTMENT_CONFIGURATION_EDITOR_SELECTION_MODAL,
  c as ContentmentPropertyEditorUIConfigurationEditorSelectionModalElement,
  c as element
};
//# sourceMappingURL=configuration-editor-selection-modal.element.js.map
