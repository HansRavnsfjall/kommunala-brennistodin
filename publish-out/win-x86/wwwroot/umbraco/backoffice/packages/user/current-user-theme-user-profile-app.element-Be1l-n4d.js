import { nothing as d, html as E, css as T, state as c, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as U } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_THEME_CONTEXT as y } from "@umbraco-cms/backoffice/themes";
var b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, l = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? x(e, r) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (s = (a ? o(e, r, s) : o(s)) || s);
  return a && s && b(e, r, s), s;
}, p = (t, e, r) => e.has(t) || v("Cannot " + r), u = (t, e, r) => (p(t, e, "read from private field"), e.get(t)), _ = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), A = (t, e, r, a) => (p(t, e, "write to private field"), e.set(t, r), r), w = (t, e, r) => (p(t, e, "access private method"), r), h, m, f;
let i = class extends g {
  constructor() {
    super(), _(this, m), _(this, h), this._themes = [], this.consumeContext(y, (t) => {
      A(this, h, t), this.observe(
        t?.theme,
        (e) => {
          this._themeAlias = e;
        },
        "_observeCurrentTheme"
      ), this.observe(
        U.byType("theme"),
        (e) => {
          this._themes = e.map((r) => ({ name: r.name, value: r.alias, selected: r.alias === this._themeAlias }));
        },
        "_observeThemeExtensions"
      );
    });
  }
  render() {
    return this._themes.length ? E`
			<uui-box headline="Theme">
				<uui-tag slot="headline" look="placeholder">Experimental</uui-tag>
				<uui-select label="Select theme" .options=${this._themes} @change=${w(this, m, f)}></uui-select>
			</uui-box>
		` : d;
  }
};
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
f = function(t) {
  if (!u(this, h)) return;
  const e = t.target.value.toString();
  u(this, h).setThemeByAlias(e);
};
i.styles = [
  T`
			uui-select {
				width: 100%;
			}
		`
];
l([
  c()
], i.prototype, "_themeAlias", 2);
l([
  c()
], i.prototype, "_themes", 2);
i = l([
  C("umb-current-user-theme-user-profile-app")
], i);
const W = i;
export {
  i as UmbCurrentUserThemeUserProfileAppElement,
  W as default
};
//# sourceMappingURL=current-user-theme-user-profile-app.element-Be1l-n4d.js.map
