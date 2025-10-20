import { html as p, classMap as g, css as f, state as h, property as v, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbInputEvent as y, UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as w } from "@umbraco-cms/backoffice/property";
var M = Object.defineProperty, O = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, a = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? O(t, r) : t, d = e.length - 1, l; d >= 0; d--)
    (l = e[d]) && (o = (n ? l(t, r, o) : l(o)) || o);
  return n && o && M(t, r, o), o;
}, b = (e, t, r) => t.has(e) || _("Cannot " + r), U = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), u = (e, t, r) => (b(e, t, "access private method"), r), s, c, m;
let i = class extends P {
  constructor() {
    super(), U(this, s), this._loading = !0, this._hideMargin = !1, u(this, s, c).call(this), this.consumeContext(w, (e) => {
      this.observe(e == null ? void 0 : e.appearance, (t) => {
        this._hideMargin = (t == null ? void 0 : t.labelOnTop) ?? !1;
      });
    });
  }
  set config(e) {
    e && (this._language = e.getValueByAlias("mode"));
  }
  render() {
    return this._loading ? p`<uui-loader></uui-loader>` : p`
			<div id="code-editor" class=${g({ margin: !this._hideMargin })}>
				<umb-code-editor language=${this._language ?? "razor"} .code=${this.value ?? ""} @input=${u(this, s, m)}>
				</umb-code-editor>
			</div>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
c = async function() {
  try {
    await import("@umbraco-cms/backoffice/code-editor"), this._loading = !1;
  } catch (e) {
    console.error(e);
  }
};
m = function(e) {
  e instanceof y && (this.value = e.target.code, this.dispatchEvent(new C()));
};
i.styles = [
  f`
			#code-editor {
				display: flex;
				height: 200px;

				&.margin {
					margin-left: -30px;
				}

				> umb-code-editor {
					width: 100%;
				}
			}
		`
];
a([
  h()
], i.prototype, "_language", 2);
a([
  h()
], i.prototype, "_loading", 2);
a([
  h()
], i.prototype, "_hideMargin", 2);
a([
  v()
], i.prototype, "value", 2);
i = a([
  E("contentment-property-editor-ui-code-editor")
], i);
export {
  i as ContentmentPropertyEditorUICodeEditorElement,
  i as element
};
//# sourceMappingURL=code-editor.element.js.map
