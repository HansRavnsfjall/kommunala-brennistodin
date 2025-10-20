var U = (e) => {
  throw TypeError(e);
};
var O = (e, t, s) => t.has(e) || U("Cannot " + s);
var o = (e, t, s) => (O(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), m = (e, t, s, i) => (O(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s);
import { UmbBooleanState as b, UmbArrayState as V } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as P } from "@umbraco-cms/backoffice/class-api";
import { createExtensionElement as L } from "@umbraco-cms/backoffice/extension-api";
import { property as d, state as x, customElement as K, html as W, nothing as F } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as T } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
var E, A, y, u, _, v, f;
class q extends P {
  constructor(s) {
    super(s, "ContentmentDisplayModeContext");
    p(this, E);
    p(this, A);
    p(this, y);
    p(this, u);
    p(this, _);
    p(this, v);
    p(this, f);
    m(this, y, new b(!1)), this.allowAdd = o(this, y).asObservable(), m(this, u, new b(!1)), this.allowEdit = o(this, u).asObservable(), m(this, _, new b(!1)), this.allowRemove = o(this, _).asObservable(), m(this, v, new b(!1)), this.allowSort = o(this, v).asObservable(), m(this, f, new V([], (i) => i.value)), this.items = o(this, f).asObservable(), this.canEdit = (i, r) => {
      var w;
      return ((w = o(this, E)) == null ? void 0 : w.call(this, i, r)) ?? o(this, u).getValue();
    }, this.getItems = () => o(this, f).getValue(), this.setAllowAdd = (i) => o(this, y).setValue(i), this.setAllowEdit = (i) => o(this, u).setValue(i), this.setAllowRemove = (i) => o(this, _).setValue(i), this.setAllowSort = (i) => o(this, v).setValue(i), this.setCanEdit = (i) => m(this, E, i), this.setConfig = (i) => m(this, A, i), this.setItems = (i) => o(this, f).setValue(i ?? []);
  }
  getConfigByAlias(s) {
    var i;
    return (i = o(this, A)) == null ? void 0 : i.getValueByAlias(s);
  }
}
E = new WeakMap(), A = new WeakMap(), y = new WeakMap(), u = new WeakMap(), _ = new WeakMap(), v = new WeakMap(), f = new WeakMap();
var G = Object.defineProperty, k = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, l = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? k(t, s) : t, w = e.length - 1, C; w >= 0; w--)
    (C = e[w]) && (r = (i ? C(t, s, r) : C(r)) || r);
  return i && r && G(t, s, r), r;
}, S = (e, t, s) => t.has(e) || I("Cannot " + s), n = (e, t, s) => (S(e, t, "read from private field"), s ? s.call(e) : t.get(e)), B = (e, t, s) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), z = (e, t, s, i) => (S(e, t, "write to private field"), t.set(e, s), s), M = (e, t, s) => (S(e, t, "access private method"), s), h, c, g, R, D;
let a = class extends $ {
  constructor() {
    super(...arguments), B(this, g), B(this, h, new q(this)), this.addButtonLabelKey = "general_add", B(this, c), this._undefined = !1;
  }
  set allowAdd(e) {
    n(this, h).setAllowAdd(e);
  }
  set allowEdit(e) {
    n(this, h).setAllowEdit(e);
  }
  set allowRemove(e) {
    n(this, h).setAllowRemove(e);
  }
  set allowSort(e) {
    n(this, h).setAllowSort(e);
  }
  set canEdit(e) {
    n(this, h).setCanEdit(e);
  }
  set config(e) {
    n(this, h).setConfig(e);
  }
  set items(e) {
    n(this, h).setItems(e);
  }
  set uiAlias(e) {
    z(this, c, e), M(this, g, R).call(this);
  }
  get uiAlias() {
    return n(this, c);
  }
  // Disable the Shadow DOM for this element; as event propagation needs to pass-through.
  createRenderRoot() {
    return this;
  }
  render() {
    return this._element ? this._element : this._undefined ? W`<lee-was-here></lee-was-here>` : F;
  }
};
h = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
R = function() {
  n(this, c) && this.observe(
    T.byTypeAndAlias("contentmentDisplayMode", n(this, c)),
    (e) => {
      e ? M(this, g, D).call(this, e) : (console.error(`Failed to find manifest for display mode UI alias: ${n(this, c)}`), this._undefined = !0);
    },
    "_observePropertyEditorUI"
  );
};
D = async function(e) {
  if (!e) return;
  const t = await L(e, "lee-was-here");
  t || (console.error(`Failed to create extension element for manifest: ${e}`), this._undefined = !0);
  const s = this._element;
  this._element = t, this._element && (this._element.addButtonLabelKey = this.addButtonLabelKey), this.dispatchEvent(new CustomEvent("loaded")), this.requestUpdate("_element", s);
};
l([
  d()
], a.prototype, "addButtonLabelKey", 2);
l([
  d({ type: Boolean })
], a.prototype, "allowAdd", 1);
l([
  d({ type: Boolean })
], a.prototype, "allowEdit", 1);
l([
  d({ type: Boolean })
], a.prototype, "allowRemove", 1);
l([
  d({ type: Boolean })
], a.prototype, "allowSort", 1);
l([
  d({ attribute: !1 })
], a.prototype, "canEdit", 1);
l([
  d({ type: Object, attribute: !1 })
], a.prototype, "config", 1);
l([
  d({ type: Array, attribute: !1 })
], a.prototype, "items", 1);
l([
  d({ attribute: "ui-alias" })
], a.prototype, "uiAlias", 1);
l([
  x()
], a.prototype, "_element", 2);
l([
  x()
], a.prototype, "_undefined", 2);
a = l([
  K("contentment-display-mode-ui")
], a);
//# sourceMappingURL=display-mode-ui.element.js.map
