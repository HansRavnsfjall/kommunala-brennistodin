import { p as $ } from "./parse-int.function.js";
import { html as p, repeat as m, ifDefined as C, when as f, unsafeHTML as E, css as U, state as d, property as I, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { ContentmentDataListRepository as P } from "./data-list.repository.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as B } from "@umbraco-cms/backoffice/event";
var L = Object.defineProperty, A = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, l = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? A(e, i) : e, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (s = (o ? a(e, i, s) : a(s)) || s);
  return o && s && L(e, i, s), s;
}, y = (t, e, i) => e.has(t) || g("Cannot " + i), b = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), v = (t, e, i) => (y(t, e, "access private method"), i), c, h, x, w;
let n = class extends D {
  constructor() {
    super(...arguments), _(this, h), _(this, c, new P(this)), this._apis = [], this._loading = !0, this._options = [], this._promises = [];
  }
  set config(t) {
    var s, r, a;
    if (t && (this._apis = t.getValueByAlias("apis") ?? [], (s = this.value) != null && s.length || (this.value = [""]), (r = this.value) != null && r.length && ((a = this._apis) != null && a.length)))
      for (var e = 0; e < this.value.length; e++) {
        for (var i = this._apis[e], o = 0; o < e; o++)
          i = i.replace(`{${o}}`, this.value[o]);
        this._promises.push(b(this, c).getItemsByUrl(i));
      }
  }
  async firstUpdated() {
    this._options = await Promise.all(this._promises), this._loading = !1;
  }
  render() {
    return this._loading ? p`<uui-loader></uui-loader>` : p`${m(
      this._options,
      (t, e) => {
        var i;
        return p`
				<uui-combobox data-index=${e} required value=${C((i = this.value) == null ? void 0 : i[e])} @change=${v(this, h, x)}>
					<uui-combobox-list>
						${m(
          t,
          (o) => o.value,
          (o) => v(this, h, w).call(this, o)
        )}
					</uui-combobox-list>
				</uui-combobox>
			`;
      }
    )}`;
  }
};
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
x = async function(t) {
  if (t.target.nodeName !== "UUI-COMBOBOX") return;
  const e = $(t.target.dataset.index) || 0, i = e + 1, o = t.target.value, s = this.value ? this.value.slice(0, i) : [];
  if (s[e] = o, this.value = s, this.dispatchEvent(new B()), this._apis.length > i) {
    this._loading = !0;
    var r = this._apis[i].replace(/{(\d+)}/g, function(a, u) {
      return typeof s[u] < "u" ? s[u] : a;
    });
    typeof o != "number" && o ? this._options[i] = await b(this, c).getItemsByUrl(r) : this._options = this._options.splice(0, i), this._loading = !1, requestAnimationFrame(() => {
      var a, u;
      (u = (a = this.shadowRoot) == null ? void 0 : a.querySelector(`uui-combobox:nth-child(${i + 1})`)) == null || u.focus();
    });
  }
};
w = function(t) {
  return p`
			<uui-combobox-list-option display-value=${t.name} value=${t.value} ?disabled=${t.disabled}>
				<div class="outer">
					${f(t.icon, (e) => p`<umb-icon name=${e}></umb-icon>`)}
					<uui-form-layout-item>
						<span slot="label">${this.localize.string(t.name)}</span>
						${f(t.description, () => p`<span slot="description">${E(t.description)}</span>`)}
					</uui-form-layout-item>
				</div>
			</uui-combobox-list-option>
		`;
};
n.styles = [
  U`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-2);
			}

			.outer {
				display: flex;
				flex-direction: row;
				gap: 0.5rem;
				align-items: flex-start;
			}

			uui-combobox-list-option {
				padding-top: 5px;
			}

			uui-form-layout-item {
				margin-top: 3px;
				margin-bottom: 0;
			}

			umb-icon {
				font-size: 1.2rem;
			}
		`
];
l([
  d()
], n.prototype, "_apis", 2);
l([
  d()
], n.prototype, "_loading", 2);
l([
  d()
], n.prototype, "_options", 2);
l([
  d()
], n.prototype, "_promises", 2);
l([
  I({ type: Array })
], n.prototype, "value", 2);
n = l([
  O("contentment-property-editor-ui-cascading-dropdown-list")
], n);
export {
  n as ContentmentPropertyEditorUICascadingDropdownListElement,
  n as element
};
//# sourceMappingURL=cascading-dropdown-list.element.js.map
