import { when as m, ifDefined as c, html as h, repeat as E, css as C, property as y, state as r, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { p as d } from "./parse-boolean.function.js";
import { p as g } from "./parse-int.function.js";
import { tryExecute as w } from "@umbraco-cms/backoffice/resources";
import { umbHttpClient as b } from "@umbraco-cms/backoffice/http-client";
import { D as A } from "./sdk.gen.js";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as I } from "@umbraco-cms/backoffice/event";
import { UUIInputElement as S } from "@umbraco-cms/backoffice/external/uui";
var P = Object.defineProperty, V = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, i = (t, e, a, o) => {
  for (var p = o > 1 ? void 0 : o ? V(e, a) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (p = (o ? l(e, a, p) : l(p)) || p);
  return o && p && P(e, a, p), p;
}, U = (t, e, a) => e.has(t) || v("Cannot " + a), D = (t, e, a) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), _ = (t, e, a) => (U(t, e, "access private method"), a), u, f, x;
let s = class extends B {
  constructor() {
    super(...arguments), D(this, u), this._inputType = "text", this._items = [], this._maxChars = 500, this._autocomplete = !1, this._spellcheck = !1;
  }
  set config(t) {
    var e;
    t && (this._inputType = t.getValueByAlias("inputType") ?? "text", this._placeholderText = t.getValueByAlias("placeholderText"), this._dataSource = (e = t.getValueByAlias("dataSource")) == null ? void 0 : e[0], this._maxChars = g(t.getValueByAlias("maxChars")) || 500, this._autocomplete = d(t.getValueByAlias("autocomplete")), this._spellcheck = d(t.getValueByAlias("spellcheck")), this._prepend = t.getValueByAlias("prepend"), this._append = t.getValueByAlias("append"));
  }
  async firstUpdated() {
    await Promise.all([await _(this, u, f).call(this).catch(() => {
    })]);
  }
  render() {
    var e;
    const t = !!((e = this._items) != null && e.length);
    return h`
			${m(this._prepend, (a) => h`<umb-icon class="prepend" name=${a}></umb-icon>`)}
			<input
				type=${this._inputType}
				id="input"
				autocomplete=${this._autocomplete ? "on" : "off"}
				label=${this.name ?? "Text input"}
				list=${c(t ? "items" : void 0)}
				max=${this._maxChars}
				placeholder=${c(this._placeholderText)}
				.value=${this.value ?? ""}
				spellcheck=${this._spellcheck ? "true" : "false"}
				@input=${_(this, u, x)} />
			${m(this._append, (a) => h`<umb-icon class="append" name=${a}></umb-icon>`)}
			${m(
      t,
      () => h`
					<datalist id="items">
						${E(
        this._items,
        (a) => a.value,
        (a) => h`<option label=${a.name} value=${a.value}></option>`
      )}
					</datalist>
				`
    )}
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
f = async function() {
  this._items = await new Promise(async (t, e) => {
    var n, l;
    if (!this._dataSource) return e();
    const a = { dataSource: this._dataSource, listEditor: null }, { data: o } = await w(this, A.postDataListEditor({ client: b, body: a }));
    if (!o) return e();
    const p = ((l = (n = o.config) == null ? void 0 : n.find(($) => $.alias === "items")) == null ? void 0 : l.value) ?? [];
    t(p);
  });
};
x = function(t) {
  this.value = t.target.value, this.dispatchEvent(new I());
};
s.styles = [
  S.styles,
  C`
			:host {
				width: 100%;
			}

			umb-icon {
				display: flex;
				align-items: center;
				line-height: 1;
				height: 100%;
			}

			umb-icon.prepend {
				padding-left: var(--uui-size-space-2);
			}
			umb-icon.append {
				padding-right: var(--uui-size-space-2);
			}
		`
];
i([
  y()
], s.prototype, "name", 2);
i([
  y()
], s.prototype, "value", 2);
i([
  r()
], s.prototype, "_dataSource", 2);
i([
  r()
], s.prototype, "_inputType", 2);
i([
  r()
], s.prototype, "_items", 2);
i([
  r()
], s.prototype, "_maxChars", 2);
i([
  r()
], s.prototype, "_autocomplete", 2);
i([
  r()
], s.prototype, "_spellcheck", 2);
i([
  r()
], s.prototype, "_placeholderText", 2);
i([
  r()
], s.prototype, "_prepend", 2);
i([
  r()
], s.prototype, "_append", 2);
s = i([
  T("contentment-property-editor-ui-text-input")
], s);
export {
  s as ContentmentPropertyEditorUITextInputElement,
  s as element
};
//# sourceMappingURL=text-input.element.js.map
