import { p as D } from "./parse-boolean.function.js";
import { p as R } from "./parse-int.function.js";
import { CONTENTMENT_CONFIGURATION_EDITOR_SELECTION_MODAL as U } from "./configuration-editor-selection-modal.element.js";
import { CONTENTMENT_CONFIGURATION_EDITOR_WORKSPACE_MODAL as x } from "./configuration-editor-workspace-modal.element.js";
import { html as k, state as z, property as V, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as K, umbConfirmModal as G } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as F } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
import "./display-mode-ui.element.js";
var X = Object.defineProperty, q = Object.getOwnPropertyDescriptor, N = (t) => {
  throw TypeError(t);
}, I = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? q(e, i) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (a ? l(e, i, s) : l(s)) || s);
  return a && s && X(e, i, s), s;
}, T = (t, e, i) => e.has(t) || N("Cannot " + i), o = (t, e, i) => (T(t, e, "read from private field"), e.get(t)), d = (t, e, i) => e.has(t) ? N("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i, a) => (T(t, e, "write to private field"), e.set(t, i), i), h = (t, e, i) => (T(t, e, "access private method"), i), E, g, S, w, c, M, C, _, m, f, r, L, y, A, W, b, B, $;
let v = class extends H {
  constructor() {
    super(), d(this, r), d(this, E, /* @__PURE__ */ new Set()), d(this, g, "general_add"), d(this, S, (t) => o(this, E).has(t.value)), d(this, w), d(this, c), d(this, M, !1), d(this, C, {}), d(this, _, 1 / 0), d(this, m), d(this, f, "Umb.Contentment.DisplayMode.List"), this._initialized = !1, this.consumeContext(K, (t) => {
      u(this, m, t);
    });
  }
  set config(t) {
    t && (u(this, w, t), u(this, g, t.getValueByAlias("addButtonLabelKey") ?? "general_choose"), u(this, c, t.getValueByAlias("configurationType")), u(this, _, R(t.getValueByAlias("maxItems")) || 1 / 0), u(this, M, o(this, _) === 1 ? !0 : D(t.getValueByAlias("disableSorting"))), u(this, f, t.getValueByAlias("uiAlias") ?? "Umb.Contentment.DisplayMode.List"), this.models = t.getValueByAlias("items"), this.models ? this.populateModelLookup() : this.getModels());
  }
  getModels() {
    this.models || !o(this, c) || this.observe(F.byType(o(this, c)), (t) => {
      this.models = t.map((e) => {
        var i, a, s, n;
        return {
          ...e.meta,
          key: ((i = e.meta) == null ? void 0 : i.key) ?? e.alias,
          name: ((a = e.meta) == null ? void 0 : a.name) ?? e.name,
          overlaySize: ((n = (s = e.meta) == null ? void 0 : s.overlaySize) == null ? void 0 : n.toLowerCase()) ?? "small"
        };
      }).sort((e, i) => e.name.localeCompare(i.name)), this.populateModelLookup();
    });
  }
  populateModelLookup() {
    this.models && (this.models.forEach((t) => {
      var e;
      o(this, C)[t.key] = t, (e = t.fields) != null && e.length && o(this, E).add(t.key);
    }), h(this, r, y).call(this));
  }
  render() {
    return this._initialized ? o(this, f) ? k`
			<contentment-display-mode-ui
				?allowAdd=${!this.value || this.value.length < o(this, _)}
				?allowRemove=${!0}
				?allowSort=${!o(this, M)}
				.canEdit=${(t) => o(this, S).call(this, t)}
				.addButtonLabelKey=${o(this, g)}
				.config=${o(this, w)}
				.items=${this._items}
				.uiAlias=${o(this, f)}
				@add=${h(this, r, W)}
				@edit=${h(this, r, b)}
				@remove=${h(this, r, B)}
				@sort=${h(this, r, $)}>
			</contentment-display-mode-ui>
		` : k`<lee-was-here></lee-was-here>` : k`<uui-loader></uui-loader>`;
  }
};
E = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
L = function(t) {
  return o(this, C)[t];
};
y = function() {
  var i;
  const t = (a, s, n) => {
    var p;
    const l = (p = s.expressions) == null ? void 0 : p[n];
    return l && typeof l == "function" ? l(a.value) : s[n] ?? a.value[n];
  }, e = [];
  (i = this.value) == null || i.forEach((a) => {
    var n, l, p;
    const s = h(this, r, L).call(this, a.key);
    s && e.push({
      name: ((n = t(a, s, "name")) == null ? void 0 : n.toString()) ?? a.key,
      icon: (l = t(a, s, "icon")) == null ? void 0 : l.toString(),
      description: (p = t(a, s, "description")) == null ? void 0 : p.toString(),
      value: a.key,
      cardStyle: t(a, s, "cardStyle"),
      iconStyle: t(a, s, "iconStyle")
    });
  }), this._items = e, this._initialized = !0;
};
A = function(t, e) {
  if (!t || e === -1) return;
  this.value || (this.value = []);
  const i = [...this.value];
  i[e] = t, this.value = i, h(this, r, y).call(this), this.dispatchEvent(new O());
};
W = async function() {
  var t, e, i;
  if (o(this, m))
    if (((t = this.models) == null ? void 0 : t.length) === 1) {
      const a = this.models[0], s = {
        key: a.key,
        value: a.defaultValues ?? {}
      }, l = await o(this, m).open(this, x, {
        data: { item: s, model: a },
        modal: { size: a.overlaySize ?? "medium" }
      }).onSubmit().catch(() => {
      });
      h(this, r, A).call(this, l, ((e = this.value) == null ? void 0 : e.length) ?? 0);
    } else {
      const s = await o(this, m).open(this, U, {
        data: { items: this.models ?? [] }
      }).onSubmit().catch(() => {
      });
      h(this, r, A).call(this, s, ((i = this.value) == null ? void 0 : i.length) ?? 0);
    }
};
b = async function(t) {
  var n, l;
  if (!o(this, m) || !o(this, S).call(this, t.detail.item)) return;
  const e = h(this, r, L).call(this, t.detail.item.value);
  if (!((n = e == null ? void 0 : e.fields) != null && n.length)) return;
  const i = (l = this.value) == null ? void 0 : l[t.detail.index];
  if (!i) return;
  const s = await o(this, m).open(this, x, {
    data: { item: i, model: e },
    modal: { size: e.overlaySize ?? "medium" }
  }).onSubmit().catch(() => {
  });
  h(this, r, A).call(this, s, t.detail.index);
};
B = async function(t) {
  if (!t.detail.item || !this.value || t.detail.index == -1) return;
  await G(this, {
    color: "danger",
    headline: this.localize.term("contentment_removeItemHeadline", [t.detail.item.name]),
    content: this.localize.term("contentment_removeItemMessage"),
    confirmLabel: this.localize.term("contentment_removeItemButton")
  });
  const e = [...this.value];
  e.splice(t.detail.index, 1), this.value = e, h(this, r, y).call(this), this.dispatchEvent(new O());
};
$ = function(t) {
  const e = [...this.value ?? []];
  e.splice(t.detail.newIndex, 0, e.splice(t.detail.oldIndex, 1)[0]), this.value = e, h(this, r, y).call(this), this.dispatchEvent(new O());
};
I([
  z()
], v.prototype, "_initialized", 2);
I([
  z()
], v.prototype, "_items", 2);
I([
  V({ type: Array })
], v.prototype, "value", 2);
v = I([
  P("contentment-property-editor-ui-configuration-editor")
], v);
export {
  v as ContentmentPropertyEditorUIConfigurationEditorElement,
  v as element
};
//# sourceMappingURL=configuration-editor.element.js.map
