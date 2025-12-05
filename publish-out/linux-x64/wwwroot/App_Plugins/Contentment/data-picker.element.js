import { p as v } from "./parse-boolean.function.js";
import { p as D } from "./parse-int.function.js";
import { a as $ } from "./sdk.gen.js";
import { html as B, state as p, property as b, customElement as K } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as q } from "@umbraco-cms/backoffice/resources";
import { umbHttpClient as L } from "@umbraco-cms/backoffice/http-client";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyEditorConfigCollection as Y } from "@umbraco-cms/backoffice/property-editor";
import { CONTENTMENT_DATA_PICKER_MODAL as G } from "./data-picker-modal.element.js";
import { UMB_CONTENT_WORKSPACE_CONTEXT as H, UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as F } from "@umbraco-cms/backoffice/content";
import { UMB_MODAL_MANAGER_CONTEXT as J, umbConfirmModal as Q } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as Z } from "@umbraco-cms/backoffice/property";
import "./display-mode-ui.element.js";
var x = Object.defineProperty, j = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, h = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? j(e, i) : e, d = t.length - 1, u; d >= 0; d--)
    (u = t[d]) && (s = (r ? u(e, i, s) : u(s)) || s);
  return r && s && x(e, i, s), s;
}, I = (t, e, i) => e.has(t) || R("Cannot " + i), a = (t, e, i) => (I(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), o = (t, e, i, r) => (I(t, e, "write to private field"), e.set(t, i), i), y = (t, e, i) => (I(t, e, "access private method"), i), w, E, P, A, M, g, _, m, S, T, f, c, C, V, k, N;
let n = class extends X {
  constructor() {
    super(), l(this, c), l(this, w, !1), l(this, E), l(this, P, !1), l(this, A), l(this, M, !1), l(this, g, !0), l(this, _), l(this, m, 1 / 0), l(this, S, "small"), l(this, T, 12), this._initialized = !1, l(this, f, []), this.consumeContext(H, (t) => {
      this.observe(t == null ? void 0 : t.unique, (e) => this._entityUnique = e);
    }).passContextAliasMatches(), this.consumeContext(F, (t) => {
      this.observe(t == null ? void 0 : t.dataType, (e) => this._dataTypeKey = e == null ? void 0 : e.unique);
    }), this.consumeContext(Z, (t) => {
      this.observe(t == null ? void 0 : t.alias, (e) => this._propertyAlias = e), this.observe(t == null ? void 0 : t.variantId, (e) => this._variantId = (e == null ? void 0 : e.toString()) || "invariant");
    });
  }
  set value(t) {
    o(this, f, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return a(this, f);
  }
  set config(t) {
    var e, i;
    t && (o(this, E, t), this._dataSource = (e = t.getValueByAlias("dataSource")) == null ? void 0 : e[0], this._displayMode = (i = t.getValueByAlias("displayMode")) == null ? void 0 : i[0], o(this, w, v(t.getValueByAlias("allowDuplicates") ?? !0)), o(this, A, t.getValueByAlias("defaultIcon")), o(this, g, v(t.getValueByAlias("hideSearch") ?? !1)), o(this, m, D(t.getValueByAlias("maxItems")) || 1 / 0), o(this, S, t.getValueByAlias("overlaySize") ?? "medium"), o(this, T, D(t.getValueByAlias("pageSize")) || 12));
  }
  async firstUpdated() {
    await Promise.all([await y(this, c, C).call(this).catch(() => {
    })]), this._initialized = !0;
  }
  render() {
    return !this._initialized || !a(this, _) ? B`<uui-loader></uui-loader>` : a(this, _).propertyEditorUiAlias ? B`
			<contentment-display-mode-ui
				?allowAdd=${this.value && this.value.length < a(this, m)}
				?allowRemove=${!0}
				?allowSort=${!a(this, M)}
				.config=${a(this, _).config}
				.items=${this._items}
				.uiAlias=${a(this, _).propertyEditorUiAlias}
				@add=${y(this, c, V)}
				@remove=${y(this, c, k)}
				@sort=${y(this, c, N)}>
			</contentment-display-mode-ui>
		` : B`<lee-was-here></lee-was-here>`;
  }
};
w = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
C = async function() {
  o(this, _, await new Promise(async (t, e) => {
    if (!this._entityUnique || !this._dataTypeKey || !this._dataSource || !this._displayMode) return e();
    const i = {
      alias: this._propertyAlias,
      dataTypeKey: this._dataTypeKey,
      dataSource: this._dataSource,
      displayMode: this._displayMode,
      id: this._entityUnique,
      values: this.value,
      variant: this._variantId
    }, { data: r } = await q(this, $.postDataPickerEditor({ client: L, body: i }));
    if (!r) return e();
    const s = {
      propertyEditorUiAlias: r.propertyEditorUiAlias,
      config: new Y([...r.config ?? [], ...a(this, E) ?? []])
    }, d = s.config.getValueByAlias("items") ?? [];
    this._items = d, o(this, M, a(this, m) === 1 ? !0 : v(s.config.getValueByAlias("disableSorting"))), o(this, P, v(s.config.getValueByAlias("confirmRemoval"))), t(s);
  }));
};
V = async function(t) {
  var O, z;
  const e = await this.getContext(J);
  if (!e) return;
  const r = await e.open(this, G, {
    data: {
      allowDuplicates: a(this, w),
      defaultIcon: a(this, A),
      enableMultiple: a(this, m) !== 1,
      hideSearch: a(this, g),
      listType: t.detail.listType ?? "list",
      maxItems: a(this, m) === 0 ? a(this, m) : a(this, m) - (((O = this.value) == null ? void 0 : O.length) ?? 0),
      pageSize: a(this, T),
      value: this.value ?? []
    },
    modal: { size: a(this, S) }
  }).onSubmit().catch(() => {
  });
  if (!r) return;
  const { selection: s } = r;
  if (!s) return;
  const d = ((z = this.value) == null ? void 0 : z.length) ?? 0;
  if (d === -1) return;
  this.value || (this.value = []);
  const u = [...this._items ?? []];
  u.splice(d, 0, ...s), this._items = u, this.value = this._items.map((W) => W.value), this.dispatchEvent(new U());
};
k = async function(t) {
  if (!t.detail.item || !this._items || t.detail.index == -1) return;
  a(this, P) && await Q(this, {
    color: "danger",
    headline: this.localize.term("contentment_removeItemHeadline", [t.detail.item.name]),
    content: this.localize.term("contentment_removeItemMessage"),
    confirmLabel: this.localize.term("contentment_removeItemButton")
  });
  const e = [...this._items];
  e.splice(t.detail.index, 1), this._items = e, this.value = this._items.map((i) => i.value), this.dispatchEvent(new U());
};
N = function(t) {
  const e = [...this._items ?? []];
  e.splice(t.detail.newIndex, 0, e.splice(t.detail.oldIndex, 1)[0]), this._items = e, this.value = this._items.map((i) => i.value), this.dispatchEvent(new U());
};
h([
  p()
], n.prototype, "_dataSource", 2);
h([
  p()
], n.prototype, "_dataTypeKey", 2);
h([
  p()
], n.prototype, "_displayMode", 2);
h([
  p()
], n.prototype, "_entityUnique", 2);
h([
  p()
], n.prototype, "_initialized", 2);
h([
  p()
], n.prototype, "_items", 2);
h([
  p()
], n.prototype, "_propertyAlias", 2);
h([
  p()
], n.prototype, "_variantId", 2);
h([
  b({ type: Array })
], n.prototype, "value", 1);
n = h([
  K("contentment-property-editor-ui-data-picker")
], n);
export {
  n as ContentmentPropertyEditorUIDataPickerElement,
  n as element
};
//# sourceMappingURL=data-picker.element.js.map
