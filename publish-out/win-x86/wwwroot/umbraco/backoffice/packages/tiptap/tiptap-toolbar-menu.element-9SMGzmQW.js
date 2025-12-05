import { when as v, html as r, css as M, state as k, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import "./cascading-menu-popover.element-Ce2vE90e.js";
var U = Object.defineProperty, T = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, g = (t, e, i, n) => {
  for (var o = n > 1 ? void 0 : n ? T(e, i) : e, d = t.length - 1, f; d >= 0; d--)
    (f = t[d]) && (o = (n ? f(e, i, o) : f(o)) || o);
  return n && o && U(e, i, o), o;
}, _ = (t, e, i) => e.has(t) || $("Cannot " + i), s = (t, e, i) => (_(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), w = (t, e, i, n) => (_(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (_(t, e, "access private method"), i), p, u, a, x, y, A, b, l;
let h = class extends E {
  constructor() {
    super(...arguments), m(this, a), m(this, p, []), this.isActive = !1, m(this, u), m(this, l, () => {
      this.api && this.editor && this.manifest && (this.isActive = this.api.isActive(this.editor) || c(this, a, b).call(this, s(this, p)) || !1);
    });
  }
  set manifest(t) {
    w(this, u, t), c(this, a, x).call(this);
  }
  get manifest() {
    return s(this, u);
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", s(this, l)), this.editor.on("update", s(this, l)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && (this.editor.off("selectionUpdate", s(this, l)), this.editor.off("update", s(this, l)));
  }
  render() {
    const t = this.localize.string(this.manifest?.meta.label), e = this.api?.isDisabled(this.editor);
    return r`
			${v(
      this.manifest?.meta.look === "icon",
      () => r`
					<uui-button
						compact
						label=${t}
						look=${this.isActive ? "outline" : "default"}
						title=${t}
						popovertarget="popover-menu"
						?disabled=${e}>
						${v(
        this.manifest?.meta.icon,
        (i) => r`<umb-icon name=${i}></umb-icon>`,
        () => r`<span>${t}</span>`
      )}
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`,
      () => r`
					<uui-button
						compact
						label=${t}
						look=${this.isActive ? "outline" : "default"}
						popovertarget="popover-menu"
						?disabled=${e}>
						<span>${t}</span>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`
    )}
			${this.renderMenu()}
		`;
  }
  renderMenu() {
    return r`
			<umb-cascading-menu-popover id="popover-menu" placement="bottom-start" .items=${s(this, p)}>
				${v(
      s(this, u)?.menu,
      (t) => r`
						<umb-extension-slot
							type="menu"
							default-element="umb-tiptap-menu"
							single
							.filter=${(e) => e.alias === t}></umb-extension-slot>
					`
    )}
			</umb-cascading-menu-popover>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
x = async function() {
  const t = s(this, u)?.items ?? s(this, u)?.meta.items;
  t && w(this, p, await c(this, a, y).call(this, t));
};
y = async function(t) {
  const e = [];
  for (const i of t) {
    const n = await c(this, a, A).call(this, i);
    e.push(n);
  }
  return e;
};
A = async function(t) {
  let e;
  !e && t.elementName && (e = document.createElement(t.elementName)), e && (e.editor = this.editor);
  let i;
  return t.items && (i = await c(this, a, y).call(this, t.items)), {
    icon: t.appearance?.icon ?? t.icon,
    items: i,
    label: t.label,
    menu: t.menu,
    style: t.appearance?.style ?? t.style,
    separatorAfter: t.separatorAfter,
    element: e,
    isActive: () => this.api?.isActive(this.editor, t),
    execute: () => this.api?.execute(this.editor, t)
  };
};
b = function(t) {
  return !!t?.some((e) => e.isActive?.() || c(this, a, b).call(this, e.items));
};
l = /* @__PURE__ */ new WeakMap();
h.styles = [
  M`
			:host {
				--uui-button-font-weight: normal;
				--uui-menu-item-flat-structure: 1;

				margin-left: var(--uui-size-space-1);
				margin-bottom: var(--uui-size-space-1);
			}

			uui-button > uui-symbol-expand {
				margin-left: var(--uui-size-space-2);
			}
		`
];
g([
  k()
], h.prototype, "isActive", 2);
h = g([
  C("umb-tiptap-toolbar-menu")
], h);
export {
  h as UmbTiptapToolbarMenuElement,
  h as element
};
//# sourceMappingURL=tiptap-toolbar-menu.element-9SMGzmQW.js.map
