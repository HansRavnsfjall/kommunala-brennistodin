import { nothing as g, repeat as E, html as c, when as m, css as I, property as $, state as p, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as L } from "@umbraco-cms/backoffice/resources";
import { umbHttpClient as C } from "@umbraco-cms/backoffice/http-client";
import { D as P } from "./sdk.gen.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
var U = Object.defineProperty, z = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, n = (t, e, a, r) => {
  for (var i = r > 1 ? void 0 : r ? z(e, a) : e, l = t.length - 1, o; l >= 0; l--)
    (o = t[l]) && (i = (r ? o(e, a, i) : o(i)) || i);
  return r && i && U(e, a, i), i;
}, y = (t, e, a) => e.has(t) || _("Cannot " + a), A = (t, e, a) => (y(t, e, "read from private field"), a ? a.call(t) : e.get(t)), f = (t, e, a) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), d = (t, e, a) => (y(t, e, "access private method"), a), v, u, b, x, w;
let s = class extends D {
  constructor() {
    super(...arguments), f(this, u), f(this, v, ["color", "email", "number", "password", "tel", "text", "url"]), this._hideIcon = !1, this._hideLabel = !1, this._items = [];
  }
  set config(t) {
    if (!t) return;
    this._dataSource = t.getValueByAlias("dataSource"), this._defaultIcon = t.getValueByAlias("defaultIcon");
    const e = t.getValueByAlias("labelStyle") ?? "both";
    this._hideIcon = e === "text", this._hideLabel = e === "icon";
  }
  async firstUpdated() {
    await Promise.all([await d(this, u, b).call(this).catch(() => {
    })]);
  }
  render() {
    var t;
    return (t = this._items) != null && t.length ? c`
			<div id="wrapper">
				${E(
      this._items,
      (e) => e.value,
      (e) => d(this, u, w).call(this, e)
    )}
			</div>
		` : g;
  }
};
v = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
b = async function() {
  this._items = await new Promise(async (t, e) => {
    var l, o;
    if (!this._dataSource) return e();
    const a = { dataSource: this._dataSource[0], listEditor: null }, { data: r } = await L(this, P.postDataListEditor({ client: C, body: a }));
    if (!r) return e();
    const i = ((o = (l = r.config) == null ? void 0 : l.find((h) => h.alias === "items")) == null ? void 0 : o.value) ?? [];
    !this.value && i.length > 0 && (this.value = Object.fromEntries(i.map((h) => [h.value, ""]))), t(i);
  });
};
x = function(t, e) {
  this.value = { ...this.value, [t]: e.target.value }, this.dispatchEvent(new O());
};
w = function(t) {
  var e;
  return c`
			<div class="item">
				<uui-label for="item-${t.value}" title=${t.value}>
					${m(!this._hideIcon, () => c`<umb-icon .name=${t.icon || this._defaultIcon}></umb-icon>`)}
					${m(!this._hideLabel, () => c`<span>${t.name}</span>`)}
				</uui-label>
				<uui-input
					type=${A(this, v).includes(t.value) ? t.value : "text"}
					id="item-${t.value}"
					label=${t.name}
					.value=${((e = this.value) == null ? void 0 : e[t.value]) ?? ""}
					@input=${(a) => d(this, u, x).call(this, t.value, a)}></uui-input>
			</div>
		`;
};
s.styles = [
  I`
			#wrapper {
				display: flex;
				flex-direction: column;
				gap: 1px;
			}

			.item {
				background-color: var(--uui-color-surface-alt);
				display: flex;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-3) var(--uui-size-6);
			}

			uui-label {
				display: flex;
				gap: 1rem;
				flex: 0.2;
			}

			uui-label:has(umb-icon):not(:has(span)) {
				flex: 0 0 var(--uui-size-6);
			}

			uui-label:has(span):not(:has(umb-icon)) {
				flex: 0.1;
			}

			.item > uui-input {
				flex: 1;
			}
		`
];
n([
  $()
], s.prototype, "value", 2);
n([
  p()
], s.prototype, "_dataSource", 2);
n([
  p()
], s.prototype, "_defaultIcon", 2);
n([
  p()
], s.prototype, "_hideIcon", 2);
n([
  p()
], s.prototype, "_hideLabel", 2);
n([
  p()
], s.prototype, "_items", 2);
s = n([
  S("contentment-property-editor-ui-textbox-list")
], s);
export {
  s as ContentmentPropertyEditorUITextboxListElement,
  s as element
};
//# sourceMappingURL=textbox-list.element.js.map
