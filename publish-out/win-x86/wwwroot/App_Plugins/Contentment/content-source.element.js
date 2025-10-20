import { when as _, html as d, css as v, state as f, property as y, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
var g = Object.defineProperty, w = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, c = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? w(e, r) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (o = (a ? p(e, r, o) : p(o)) || o);
  return a && o && g(e, r, o), o;
}, U = (t, e, r) => e.has(t) || m("Cannot " + r), O = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), u = (t, e, r) => (U(t, e, "access private method"), r), i, l, h;
let n = class extends E {
  constructor() {
    super(...arguments), O(this, i), this._loaded = !1;
  }
  set config(t) {
  }
  render() {
    return _(
      !this._loaded,
      () => d`
				<uui-loader></uui-loader>
				<contentment-property-editor-ui
					property-editor-ui-alias="Umb.PropertyEditorUi.ContentPicker.Source"
					@loaded=${u(this, i, h)}>
				</contentment-property-editor-ui>
			`,
      () => d`
				<umb-input-content-picker-document-root .data=${this.value} @change=${u(this, i, l)}>
				</umb-input-content-picker-document-root>
			`
    );
  }
};
i = /* @__PURE__ */ new WeakSet();
l = function(t) {
  this.value = t.target.data ?? {}, this.dispatchEvent(new P());
};
h = function() {
  this._loaded = !0;
};
n.styles = [
  v`
			contentment-property-editor-ui {
				display: none;
			}
		`
];
c([
  f()
], n.prototype, "_loaded", 2);
c([
  y({ type: Object })
], n.prototype, "value", 2);
n = c([
  C("contentment-property-editor-ui-content-source")
], n);
export {
  n as ContentmentPropertyEditorUIContentSourceElement,
  n as element
};
//# sourceMappingURL=content-source.element.js.map
