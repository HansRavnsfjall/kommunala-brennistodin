import { html as k, css as b, property as p, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
var B = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, n = (e, l, t, r) => {
  for (var a = r > 1 ? void 0 : r ? f(l, t) : l, h = e.length - 1, c; h >= 0; h--)
    (c = e[h]) && (a = (r ? c(l, t, a) : c(a)) || a);
  return r && a && B(l, t, a), a;
}, y = (e, l, t) => l.has(e) || v("Cannot " + t), _ = (e, l, t) => l.has(e) ? v("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(e) : l.set(e, t), i = (e, l, t) => (y(e, l, "access private method"), t), o, s;
let u = class extends d {
  constructor() {
    super(...arguments), _(this, o), this._value = {
      allowBulkPublish: !1,
      allowBulkUnpublish: !1,
      allowBulkCopy: !1,
      allowBulkDelete: !1,
      allowBulkMove: !1
    };
  }
  set value(e) {
    e && (this._value = e);
  }
  get value() {
    return this._value;
  }
  firstUpdated() {
    console.warn(
      "The `umb-property-editor-ui-collection-permissions` component has been deprecated, it will be removed in Umbraco 17."
    );
  }
  render() {
    return k`<uui-toggle
				?checked=${this.value.allowBulkPublish}
				@change=${(e) => i(this, o, s).call(this, e, "allowBulkPublish")}
				label="Allow bulk publish (content only)"></uui-toggle>
			<uui-toggle
				?checked=${this.value.allowBulkUnpublish}
				@change=${(e) => i(this, o, s).call(this, e, "allowBulkUnpublish")}
				label="Allow bulk unpublish (content only)"></uui-toggle>
			<uui-toggle
				?checked=${this.value.allowBulkCopy}
				@change=${(e) => i(this, o, s).call(this, e, "allowBulkCopy")}
				label="Allow bulk duplicate (content only)"></uui-toggle>
			<uui-toggle
				?checked=${this.value.allowBulkMove}
				@change=${(e) => i(this, o, s).call(this, e, "allowBulkMove")}
				label="Allow bulk move"></uui-toggle>
			<uui-toggle
				?checked=${this.value.allowBulkDelete}
				@change=${(e) => i(this, o, s).call(this, e, "allowBulkDelete")}
				label="Allow bulk trash"></uui-toggle>`;
  }
};
o = /* @__PURE__ */ new WeakSet();
s = function(e, l) {
  switch (l) {
    case "allowBulkPublish":
      this.value = { ...this.value, allowBulkPublish: e.target.checked };
      break;
    case "allowBulkUnpublish":
      this.value = { ...this.value, allowBulkUnpublish: e.target.checked };
      break;
    case "allowBulkMove":
      this.value = { ...this.value, allowBulkMove: e.target.checked };
      break;
    case "allowBulkCopy":
      this.value = { ...this.value, allowBulkCopy: e.target.checked };
      break;
    case "allowBulkDelete":
      this.value = { ...this.value, allowBulkDelete: e.target.checked };
      break;
  }
  this.dispatchEvent(new m());
};
u.styles = [
  g,
  b`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
n([
  p({ type: Object })
], u.prototype, "value", 1);
n([
  p({ type: Object, attribute: !1 })
], u.prototype, "config", 2);
u = n([
  w("umb-property-editor-ui-collection-permissions")
], u);
const $ = u;
export {
  u as UmbPropertyEditorUICollectionPermissionsElement,
  $ as default
};
//# sourceMappingURL=permissions.element-CO0YD27m.js.map
