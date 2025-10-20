import { U as W } from "../constants-BdzGok2s.js";
import { UmbCultureRepository as U } from "../culture.repository-DzCkYKoo.js";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
import { html as u, ifDefined as d, repeat as L, property as v, state as C, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as O } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
var S = Object.defineProperty, I = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, n = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? I(t, r) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (o = (a ? h(t, r, o) : h(o)) || o);
  return a && o && S(t, r, o), o;
}, y = (e, t, r) => t.has(e) || b("Cannot " + r), l = (e, t, r) => (y(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r) => (y(e, t, "access private method"), r), p, s, g, w, x, m;
let i = class extends O($, "") {
  constructor() {
    super(...arguments), _(this, s), this.disabled = !1, this.readonly = !1, this._cultures = [], this._search = "", _(this, p, new U(this));
  }
  getFormElement() {
  }
  async firstUpdated() {
    const { data: e } = await l(this, p).requestCultures();
    e && (this._cultures = e.items);
  }
  render() {
    return u`
			<!-- TODO: comboxbox doesn't support disabled or readonly mode yet. This is a temp solution -->
			${this.disabled || this.readonly ? u`${l(this, s, m)?.englishName}` : u`
						<uui-combobox
							value=${d(l(this, s, m)?.name)}
							@change=${f(this, s, w)}
							@search=${f(this, s, g)}>
							<uui-combobox-list>
								${L(
      l(this, s, x),
      (e) => e.name,
      (e) => u`
										<uui-combobox-list-option value=${d(e.name)}
											>${e.englishName}</uui-combobox-list-option
										>
									`
    )}
							</uui-combobox-list>
						</uui-combobox>
					`}
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
g = function(e) {
  e.stopPropagation();
  const t = e.composedPath()[0];
  this._search = t.search;
};
w = function(e) {
  e.stopPropagation();
  const t = e.composedPath()[0];
  this.value = t.value;
  const r = this._cultures.find(
    (a) => a.name.toLowerCase() === this.value.toLowerCase()
  );
  this.selectedCultureName = r?.englishName, this.dispatchEvent(new E());
};
x = function() {
  return this._cultures.filter((e) => e.englishName?.toLowerCase().includes(this._search.toLowerCase()));
};
m = function() {
  return this._cultures.find((e) => e.name.toLowerCase() === this.value?.toLowerCase());
};
n([
  v({ type: Boolean, reflect: !0 })
], i.prototype, "disabled", 2);
n([
  v({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
n([
  C()
], i.prototype, "_cultures", 2);
n([
  C()
], i.prototype, "_search", 2);
i = n([
  P("umb-input-culture-select")
], i);
export {
  W as UMB_CULTURE_REPOSITORY_ALIAS,
  U as UmbCultureRepository,
  i as UmbInputCultureSelectElement,
  U as api
};
//# sourceMappingURL=index.js.map
