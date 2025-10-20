import { p as x } from "./parse-int.function.js";
import { html as c, nothing as O, repeat as T, when as U, css as W, property as B, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as w } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_MODAL_MANAGER_CONTEXT as V, UMB_ITEM_PICKER_MODAL as L } from "@umbraco-cms/backoffice/modal";
var R = Object.defineProperty, G = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, M = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? G(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (n = (s ? a(e, i, n) : a(n)) || n);
  return s && n && R(e, i, n), n;
}, y = (t, e, i) => e.has(t) || g("Cannot " + i), r = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), v = (t, e, i, s) => (y(t, e, "write to private field"), e.set(t, i), i), h = (t, e, i) => (y(t, e, "access private method"), i), f, u, m, _, l, $, b, C, I, A, k, P;
let d = class extends D {
  constructor() {
    super(...arguments), p(this, l), p(this, f, []), p(this, u), p(this, m, 1 / 0), p(this, _, []);
  }
  set value(t) {
    v(this, _, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return r(this, _);
  }
  set config(t) {
    t && (v(this, u, t.getValueByAlias("extensionType")), v(this, m, x(t.getValueByAlias("maxItems")) || 1 / 0), h(this, l, $).call(this));
  }
  render() {
    return r(this, u) ? c`${h(this, l, k).call(this)} ${h(this, l, A).call(this)}` : c`<pre><code>Missing configuration for the extension type.</code></pre>`;
  }
};
f = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
$ = function() {
  r(this, u) && this.observe(S.byType(r(this, u)), (t) => {
    v(this, f, t.sort((e, i) => e.type.localeCompare(i.type) || e.alias.localeCompare(i.alias)));
  });
};
b = async function() {
  var s;
  const t = await this.getContext(V), e = t == null ? void 0 : t.open(this, L, {
    data: {
      headline: `${this.localize.term("general_choose")}...`,
      items: r(this, f).filter((n) => n.type === r(this, u)).map((n) => {
        var o, a, E;
        return {
          label: ((o = n.meta) == null ? void 0 : o.label) ?? n.name,
          value: n.alias,
          description: (a = n.meta) == null ? void 0 : a.description,
          icon: (E = n.meta) == null ? void 0 : E.icon
        };
      })
    },
    modal: { size: "medium" }
  }), i = await (e == null ? void 0 : e.onSubmit());
  i && h(this, l, I).call(this, [i.value], ((s = this.value) == null ? void 0 : s.length) ?? 0);
};
C = async function(t, e) {
  if (!t || !this.value || e == -1) return;
  const i = [...this.value];
  i.splice(e, 1), this.value = i, this.dispatchEvent(new w());
};
I = function(t, e) {
  if (!t || e === -1) return;
  this.value || (this.value = []);
  const i = [...this.value];
  i.splice(e, 0, ...t), this.value = i, this.dispatchEvent(new w());
};
A = function() {
  return !r(this, u) || this.value && this.value.length >= r(this, m) ? O : c`
			<uui-button
				color="default"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${h(this, l, b)}></uui-button>
		`;
};
k = function() {
  if (!(!r(this, u) || !this.value))
    return c`
			<uui-ref-list>
				${T(
      this.value,
      (t) => t,
      (t, e) => h(this, l, P).call(this, t, e)
    )}
			</uui-ref-list>
		`;
};
P = function(t, e) {
  var s, n, o;
  const i = r(this, f).find((a) => a.alias === t);
  return c`
			<uui-ref-node
				name=${((s = i.meta) == null ? void 0 : s.label) ?? i.name}
				detail=${(n = i.meta) == null ? void 0 : n.description}
				?standalone=${r(this, m) === 1}>
				${U((o = i.meta) == null ? void 0 : o.icon, (a) => c`<umb-icon slot="icon" name=${a}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						@click=${() => h(this, l, C).call(this, t, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
d.styles = [
  W`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
M([
  B({ type: Array })
], d.prototype, "value", 1);
d = M([
  z("contentment-property-editor-ui-manifest-picker")
], d);
export {
  d as ContentmentPropertyEditorUIManifestPickerElement,
  d as element
};
//# sourceMappingURL=manifest-picker.element.js.map
