import { repeat as E, html as v, classMap as g, css as w, state as _, property as C, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as P } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as T } from "@umbraco-cms/backoffice/property";
import { ContentmentPropertyEditorUITemplatedListElement as A } from "./templated-list.element.js";
var O = Object.defineProperty, U = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, a = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? U(t, r) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (s = (n ? p(t, r, s) : p(s)) || s);
  return n && s && O(t, r, s), s;
}, m = (e, t, r) => t.has(e) || c("Cannot " + r), I = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), u = (e, t, r) => (m(e, t, "access private method"), r), h, o, y, f;
let i = class extends $ {
  constructor() {
    super(), d(this, o), d(this, h, [
      "default",
      "positive",
      "warning",
      "danger"
      //'transparent',
      // 'border',
      // 'current',
      // 'divider',
      // 'selected',
    ]), this.consumeContext(T, async (e) => {
      this.observe(await (e == null ? void 0 : e.propertyValueByAlias("icon")), (t) => this._icon = t, "_observeIcon"), this.observe(
        await (e == null ? void 0 : e.propertyValueByAlias("heading")),
        (t) => this._heading = t,
        "_observeHeading"
      ), this.observe(
        await (e == null ? void 0 : e.propertyValueByAlias("message")),
        (t) => this._message = (t == null ? void 0 : t.markup) ?? t,
        "_observeMessage"
      );
    });
  }
  render() {
    return v`
			<ul class="row">
				${E(
      I(this, h),
      (e) => e,
      (e) => u(this, o, f).call(this, e)
    )}
			</ul>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
y = function(e) {
  this.value = e, this.dispatchEvent(new P());
};
f = function(e) {
  const t = this._heading || (this._message ? void 0 : e);
  return v`
			<li class=${g({ selected: e === this.value })}>
				<button aria-label=${e} title=${e} @click=${() => u(this, o, y).call(this, e)}>
					<contentment-info-box
						.type=${e}
						.icon=${this._icon}
						.heading=${t}
						.message=${this._message}></contentment-info-box>
				</button>
			</li>
		`;
};
i.styles = [
  A.styles,
  w`
			ul > li > button > contentment-info-box {
				min-width: var(--uui-size-100);
			}
		`
];
a([
  _()
], i.prototype, "_icon", 2);
a([
  _()
], i.prototype, "_heading", 2);
a([
  _()
], i.prototype, "_message", 2);
a([
  C()
], i.prototype, "value", 2);
i = a([
  b("contentment-property-editor-ui-editor-note-styles")
], i);
export {
  i as ContentmentPropertyEditorUIEditorNoteStylesElement,
  i as element
};
//# sourceMappingURL=editor-note-styles.element.js.map
