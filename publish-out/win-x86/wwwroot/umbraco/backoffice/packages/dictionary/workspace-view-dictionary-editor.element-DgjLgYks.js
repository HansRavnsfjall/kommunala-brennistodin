import { t as T } from "./paths-BPzgB6U7.js";
import { repeat as L, html as v, css as x, state as _, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UmbLanguageCollectionRepository as k } from "@umbraco-cms/backoffice/language";
import { UMB_CURRENT_USER_CONTEXT as R } from "@umbraco-cms/backoffice/current-user";
var $ = Object.defineProperty, q = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, h = (t, e, s, a) => {
  for (var i = a > 1 ? void 0 : a ? q(e, s) : e, d = t.length - 1, f; d >= 0; d--)
    (f = t[d]) && (i = (a ? f(e, s, i) : f(i)) || i);
  return a && i && $(e, s, i), i;
}, g = (t, e, s) => e.has(t) || C("Cannot " + s), o = (t, e, s) => (g(t, e, "read from private field"), s ? s.call(t) : e.get(t)), p = (t, e, s) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), y = (t, e, s, a) => (g(t, e, "write to private field"), e.set(t, s), s), u = (t, e, s) => (g(t, e, "access private method"), s), m, l, c, n, U, A, w, E, b;
let r = class extends W {
  constructor() {
    super(), p(this, n), this._languages = [], this._currentUserLanguageAccess = [], this._currentUserHasAccessToAllLanguages = !1, p(this, m, new k(this)), p(this, l), p(this, c), this.consumeContext(T, (t) => {
      y(this, l, t), u(this, n, A).call(this);
    }), this.consumeContext(R, (t) => {
      y(this, c, t), u(this, n, U).call(this);
    });
  }
  async firstUpdated() {
    const { data: t } = await o(this, m).requestCollection({});
    t && (this._languages = t.items);
  }
  render() {
    return v`
			<uui-box>
				<umb-localize key="dictionaryItem_description" .args=${[this._dictionary?.name ?? "..."]}></umb-localize>
				${L(
      this._languages,
      (t) => t.unique,
      (t) => u(this, n, b).call(this, t)
    )}
			</uui-box>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
U = function() {
  o(this, c) && (this.observe(o(this, c).languages, (t) => {
    this._currentUserLanguageAccess = t;
  }), this.observe(o(this, c).hasAccessToAllLanguages, (t) => {
    this._currentUserHasAccessToAllLanguages = t;
  }));
};
A = function() {
  this.observe(o(this, l)?.dictionary, (t) => {
    this._dictionary = t;
  });
};
w = function(t) {
  return o(this, c) ? !t || this._currentUserHasAccessToAllLanguages ? !1 : !this._currentUserLanguageAccess?.includes(t) : !0;
};
E = function(t) {
  const e = t.composedPath()[0], s = e.value.toString(), a = e.getAttribute("name");
  o(this, l)?.setPropertyValue(a, s);
};
b = function(t) {
  if (!t.unique) return;
  const e = this._dictionary?.translations?.find((s) => s.isoCode === t.unique);
  return v` <umb-property-layout label=${t.name ?? t.unique}>
			<uui-textarea
				slot="editor"
				name=${t.unique}
				label="translation"
				@input=${u(this, n, E)}
				.value=${e?.translation ?? ""}
				?readonly=${u(this, n, w).call(this, t.unique)}></uui-textarea>
		</umb-property-layout>`;
};
r.styles = [
  x`
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
  O("umb-workspace-view-dictionary-editor")
], r);
const N = r;
export {
  r as UmbWorkspaceViewDictionaryEditorElement,
  N as default
};
//# sourceMappingURL=workspace-view-dictionary-editor.element-DgjLgYks.js.map
