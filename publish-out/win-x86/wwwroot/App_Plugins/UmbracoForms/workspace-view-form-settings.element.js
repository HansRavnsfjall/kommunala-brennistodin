import { c as y, d as S } from "./index.js";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { LitElement as F, when as h, html as f, css as C, state as O, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as M } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/current-user";
var W = Object.defineProperty, P = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, u = (t, e, s, o) => {
  for (var r = o > 1 ? void 0 : o ? P(e, s) : e, l = t.length - 1, p; l >= 0; l--)
    (p = t[l]) && (r = (o ? p(e, s, r) : p(r)) || r);
  return o && r && W(e, s, r), r;
}, _ = (t, e, s) => e.has(t) || v("Cannot " + s), m = (t, e, s) => (_(t, e, "read from private field"), s ? s.call(t) : e.get(t)), c = (t, e, s) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), g = (t, e, s, o) => (_(t, e, "write to private field"), e.set(t, s), s), b = (t, e, s) => (_(t, e, "access private method"), s), i, n, d, w;
const k = "workspace-view-form-settings";
let a = class extends M(F) {
  constructor() {
    super(), c(this, d), c(this, i), c(this, n, !1), this.consumeContext(y, (t) => {
      g(this, i, t), b(this, d, w).call(this);
    }), this.consumeContext(S, (t) => {
      t && this.observe(t.config, (e) => {
        e && g(this, n, e == null ? void 0 : e.enableMultiPageFormSettings);
      });
    });
  }
  render() {
    var t, e;
    return f`<uui-box>
      <forms-settings-store-records></forms-settings-store-records>
      <forms-settings-captions></forms-settings-captions>
      <forms-settings-styling></forms-settings-styling>
      <forms-settings-validation></forms-settings-validation>
      <forms-settings-autocomplete></forms-settings-autocomplete>
      ${h(
      m(this, n),
      () => f`<forms-settings-multi-page></forms-settings-multi-page>`
    )}
      <forms-settings-moderation></forms-settings-moderation>
      <forms-settings-fields-display
        .formFields=${((t = m(this, i)) == null ? void 0 : t.getAllFields()) ?? []}
      ></forms-settings-fields-display>
      ${h(
      (e = this._form) == null ? void 0 : e.storeRecordsLocally,
      () => f`<forms-settings-data-retention></forms-settings-data-retention>`
    )}
    </uui-box>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
w = function() {
  m(this, i) && this.observe(m(this, i).data, (t) => {
    t && (this._form = t);
  });
};
a.styles = [
  E,
  C`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }
    `
];
u([
  O()
], a.prototype, "_form", 2);
a = u([
  x(k)
], a);
const L = a;
export {
  a as UmbWorkspaceViewFormSettingsElement,
  L as default
};
//# sourceMappingURL=workspace-view-form-settings.element.js.map
