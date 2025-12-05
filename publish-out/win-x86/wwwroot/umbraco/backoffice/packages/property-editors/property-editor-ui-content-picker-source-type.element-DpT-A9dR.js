import { html as y, property as U, state as k, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as $ } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
var W = Object.defineProperty, x = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, T = (e, t, r, p) => {
  for (var o = p > 1 ? void 0 : p ? x(t, r) : t, d = e.length - 1, v; d >= 0; d--)
    (v = e[d]) && (o = (p ? v(t, r, o) : v(o)) || o);
  return p && o && W(t, r, o), o;
}, b = (e, t, r) => t.has(e) || E("Cannot " + r), n = (e, t, r) => (b(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, p) => (b(e, t, "write to private field"), t.set(e, r), r), s = (e, t, r) => (b(e, t, "access private method"), r), c, h, i, f, a, u, P, C, w, g;
let l = class extends S {
  constructor() {
    super(), _(this, i), _(this, c), this._sourceType = "content", _(this, h, !1), _(this, a, []), this.consumeContext($, (e) => {
      m(this, c, e), this._observeProperty();
    });
  }
  set value(e) {
    e ? m(this, a, e.split(",")) : m(this, a, []);
  }
  get value() {
    return n(this, a).join(",");
  }
  async _observeProperty() {
    n(this, c) && this.observe(
      await n(this, c).propertyValueByAlias("startNode"),
      (e) => {
        if (!e) return;
        const t = e;
        t?.type && (n(this, h) && this._sourceType !== t.type && s(this, i, u).call(this, []), this._sourceType = t.type, n(this, h) || m(this, h, !0));
      },
      "observeValue"
    );
  }
  render() {
    return s(this, i, P).call(this);
  }
};
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
f = function(e) {
  switch (this._sourceType) {
    case "content":
      s(this, i, u).call(this, e.target.selection);
      break;
    case "media":
      s(this, i, u).call(this, e.target.selection);
      break;
    case "member":
      s(this, i, u).call(this, e.target.selection);
      break;
  }
};
a = /* @__PURE__ */ new WeakMap();
u = function(e) {
  this.value = e.join(","), this.dispatchEvent(new O());
};
P = function() {
  switch (this._sourceType) {
    case "content":
      return s(this, i, C).call(this);
    case "media":
      return s(this, i, w).call(this);
    case "member":
      return s(this, i, g).call(this);
    default:
      return y`<p>No source type found</p>`;
  }
};
C = function() {
  return y`<umb-input-document-type
			@change=${s(this, i, f)}
			.selection=${n(this, a)}></umb-input-document-type>`;
};
w = function() {
  return y`<umb-input-media-type @change=${s(this, i, f)} .selection=${n(this, a)}></umb-input-media-type>`;
};
g = function() {
  return y`<umb-input-member-type
			@change=${s(this, i, f)}
			.selection=${n(this, a)}></umb-input-member-type>`;
};
T([
  U()
], l.prototype, "value", 1);
T([
  k()
], l.prototype, "_sourceType", 2);
l = T([
  M("umb-property-editor-ui-content-picker-source-type")
], l);
const V = l;
export {
  l as UmbPropertyEditorUIContentPickerSourceTypeElement,
  V as default
};
//# sourceMappingURL=property-editor-ui-content-picker-source-type.element-DpT-A9dR.js.map
