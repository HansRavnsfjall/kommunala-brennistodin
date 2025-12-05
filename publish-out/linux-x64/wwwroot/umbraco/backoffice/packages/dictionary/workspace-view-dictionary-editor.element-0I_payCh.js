import { t as b } from "./paths-pWW_vsmu.js";
import { UUITextareaEvent as x } from "@umbraco-cms/backoffice/external/uui";
import { repeat as L, html as y, css as O, state as _, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbLanguageCollectionRepository as R } from "@umbraco-cms/backoffice/language";
import { UMB_CURRENT_USER_CONTEXT as $ } from "@umbraco-cms/backoffice/current-user";
var q = Object.defineProperty, D = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, h = (e, t, s, a) => {
  for (var i = a > 1 ? void 0 : a ? D(t, s) : t, d = e.length - 1, f; d >= 0; d--)
    (f = e[d]) && (i = (a ? f(t, s, i) : f(i)) || i);
  return a && i && q(t, s, i), i;
}, g = (e, t, s) => t.has(e) || U("Cannot " + s), o = (e, t, s) => (g(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), v = (e, t, s, a) => (g(e, t, "write to private field"), t.set(e, s), s), u = (e, t, s) => (g(e, t, "access private method"), s), m, l, c, n, C, A, w, E, T;
let r = class extends k {
  constructor() {
    super(), p(this, n), this._languages = [], this._currentUserLanguageAccess = [], this._currentUserHasAccessToAllLanguages = !1, p(this, m, new R(this)), p(this, l), p(this, c), this.consumeContext(b, (e) => {
      v(this, l, e), u(this, n, A).call(this);
    }), this.consumeContext($, (e) => {
      v(this, c, e), u(this, n, C).call(this);
    });
  }
  async firstUpdated() {
    const { data: e } = await o(this, m).requestCollection({});
    e && (this._languages = e.items);
  }
  render() {
    return y`
			<uui-box>
				<umb-localize key="dictionaryItem_description" .args=${[this._dictionary?.name ?? "..."]}></umb-localize>
				${L(
      this._languages,
      (e) => e.unique,
      (e) => u(this, n, T).call(this, e)
    )}
			</uui-box>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
C = function() {
  o(this, c) && (this.observe(o(this, c).languages, (e) => {
    this._currentUserLanguageAccess = e;
  }), this.observe(o(this, c).hasAccessToAllLanguages, (e) => {
    this._currentUserHasAccessToAllLanguages = e;
  }));
};
A = function() {
  this.observe(o(this, l)?.dictionary, (e) => {
    this._dictionary = e;
  });
};
w = function(e) {
  return o(this, c) ? !e || this._currentUserHasAccessToAllLanguages ? !1 : !this._currentUserLanguageAccess?.includes(e) : !0;
};
E = function(e) {
  if (e instanceof x) {
    const t = e.composedPath()[0], s = t.value.toString(), a = t.getAttribute("name");
    o(this, l)?.setPropertyValue(a, s);
  }
};
T = function(e) {
  if (!e.unique) return;
  const t = this._dictionary?.translations?.find((s) => s.isoCode === e.unique);
  return y` <umb-property-layout label=${e.name ?? e.unique}>
			<uui-textarea
				slot="editor"
				name=${e.unique}
				label="translation"
				@change=${u(this, n, E)}
				.value=${t?.translation ?? ""}
				?readonly=${u(this, n, w).call(this, e.unique)}></uui-textarea>
		</umb-property-layout>`;
};
r.styles = [
  O`
			:host {
				display: block;
				padding: var(--uui-size-space-6);
			}
		`
];
h([
  _()
], r.prototype, "_dictionary", 2);
h([
  _()
], r.prototype, "_languages", 2);
h([
  _()
], r.prototype, "_currentUserLanguageAccess", 2);
h([
  _()
], r.prototype, "_currentUserHasAccessToAllLanguages", 2);
r = h([
  W("umb-workspace-view-dictionary-editor")
], r);
const V = r;
export {
  r as UmbWorkspaceViewDictionaryEditorElement,
  V as default
};
//# sourceMappingURL=workspace-view-dictionary-editor.element-0I_payCh.js.map
