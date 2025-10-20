import { ContentmentDataListRepository as P } from "./data-list.repository.js";
import { html as v, state as l, property as E, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as B, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as M } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CONTENT_WORKSPACE_CONTEXT as $ } from "@umbraco-cms/backoffice/content";
import { UMB_PROPERTY_CONTEXT as D } from "@umbraco-cms/backoffice/property";
var I = Object.defineProperty, N = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, r = (t, i, e, d) => {
  for (var n = d > 1 ? void 0 : d ? N(i, e) : i, f = t.length - 1, c; f >= 0; f--)
    (c = t[f]) && (n = (d ? c(i, e, n) : c(n)) || n);
  return d && n && I(i, e, n), n;
}, g = (t, i, e) => i.has(t) || U("Cannot " + e), s = (t, i, e) => (g(t, i, "read from private field"), e ? e.call(t) : i.get(t)), h = (t, i, e) => i.has(t) ? U("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), p = (t, i, e, d) => (g(t, i, "write to private field"), i.set(t, e), e), A = (t, i, e) => (g(t, i, "access private method"), e), _, o, y, w, u, m, O, S;
let a = class extends B(L) {
  constructor() {
    super(), h(this, m), h(this, _, !1), h(this, o), h(this, y), h(this, w, new P(this)), this._initialized = !1, this.mandatory = !1, this.mandatoryMessage = M, this.readonly = !1, h(this, u), this.consumeContext($, (t) => {
      this.observe(t == null ? void 0 : t.unique, (i) => this._entityUnique = i);
    }).passContextAliasMatches(), this.consumeContext(D, (t) => {
      p(this, y, t), this.observe(t == null ? void 0 : t.alias, (i) => this._propertyAlias = i), this.observe(t == null ? void 0 : t.variantId, (i) => this._variantId = (i == null ? void 0 : i.toString()) || "invariant");
    }), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? M,
      () => !this.readonly && !!this.mandatory && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set config(t) {
    var i, e;
    t && (p(this, u, t), this._dataSource = (i = t.getValueByAlias("dataSource")) == null ? void 0 : i[0], this._listEditor = (e = t.getValueByAlias("listEditor")) == null ? void 0 : e[0]);
  }
  get config() {
    return s(this, u);
  }
  async firstUpdated() {
    await Promise.all([await A(this, m, O).call(this).catch(() => {
    })]), this._initialized = !0;
  }
  updated() {
    var t;
    if (this._initialized && !s(this, _)) {
      const i = (t = this.shadowRoot) == null ? void 0 : t.querySelector("contentment-property-editor-ui");
      i && (this.addFormControlElement(i), p(this, _, !0));
    }
  }
  render() {
    return !this._initialized || !s(this, o) ? v`<uui-loader></uui-loader>` : s(this, o).propertyEditorUiAlias ? v`
			<contentment-property-editor-ui
				.config=${s(this, o).config}
				.mandatoryMessage=${this.mandatoryMessage}
				.propertyEditorUiAlias=${s(this, o).propertyEditorUiAlias}
				.value=${this.value}
				?mandatory=${this.mandatory}
				?readonly=${this.readonly}
				@change=${A(this, m, S)}>
			</contentment-property-editor-ui>
		` : v`<lee-was-here></lee-was-here>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
O = async function() {
  var i, e;
  if (!this._dataSource || !this._listEditor) return;
  p(this, o, await s(this, w).getEditor(
    this._dataSource,
    this._listEditor,
    this._entityUnique,
    this._propertyAlias,
    this._variantId
  ));
  const t = [...((i = s(this, o)) == null ? void 0 : i.config) ?? [], ...this.config ?? []];
  (e = s(this, y)) == null || e.setConfig(t);
};
S = function(t) {
  var i = t.target;
  !i || i.value === this.value || (this.value = i.value, this.checkValidity(), this.dispatchEvent(new C()));
};
r([
  l()
], a.prototype, "_entityUnique", 2);
r([
  l()
], a.prototype, "_propertyAlias", 2);
r([
  l()
], a.prototype, "_variantId", 2);
r([
  l()
], a.prototype, "_initialized", 2);
r([
  l()
], a.prototype, "_dataSource", 2);
r([
  l()
], a.prototype, "_listEditor", 2);
r([
  E({ type: Boolean })
], a.prototype, "mandatory", 2);
r([
  E({ type: String })
], a.prototype, "mandatoryMessage", 2);
r([
  E({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
a = r([
  T("contentment-property-editor-ui-data-list")
], a);
export {
  a as ContentmentPropertyEditorUIDataListElement,
  a as element
};
//# sourceMappingURL=data-list.element.js.map
