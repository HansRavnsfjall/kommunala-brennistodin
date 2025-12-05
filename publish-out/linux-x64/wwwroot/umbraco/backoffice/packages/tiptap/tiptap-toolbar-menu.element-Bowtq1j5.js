import { when as _, ifDefined as y, html as o, css as A, state as C, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import "./cascading-menu-popover.element-DfSD_Rcp.js";
var U = Object.defineProperty, T = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, w = (e, t, i, s) => {
  for (var n = s > 1 ? void 0 : s ? T(t, i) : t, d = e.length - 1, f; d >= 0; d--)
    (f = e[d]) && (n = (s ? f(t, i, n) : f(n)) || n);
  return s && n && U(t, i, n), n;
}, v = (e, t, i) => t.has(e) || g("Cannot " + i), a = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), l = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i, s) => (v(e, t, "write to private field"), t.set(e, i), i), h = (e, t, i) => (v(e, t, "access private method"), i), c, u, p, M, b, $, r;
let m = class extends k {
  constructor() {
    super(...arguments), l(this, p), l(this, c, []), this.isActive = !1, l(this, u), l(this, r, () => {
      this.api && this.editor && this.manifest && (this.isActive = this.api.isActive(this.editor));
    });
  }
  set manifest(e) {
    x(this, u, e), h(this, p, M).call(this);
  }
  get manifest() {
    return a(this, u);
  }
  connectedCallback() {
    super.connectedCallback(), this.editor && (this.editor.on("selectionUpdate", a(this, r)), this.editor.on("update", a(this, r)));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.editor && (this.editor.off("selectionUpdate", a(this, r)), this.editor.off("update", a(this, r)));
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label);
    return o`
			${_(
      this.manifest?.meta.look === "icon",
      () => o`
					<uui-button
						compact
						look=${this.isActive ? "outline" : "default"}
						label=${y(e)}
						title=${e}
						popovertarget="popover-menu">
						${_(
        this.manifest?.meta.icon,
        (t) => o`<umb-icon name=${t}></umb-icon>`,
        () => o`<span>${e}</span>`
      )}
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`,
      () => o`
					<uui-button compact label=${y(e)} popovertarget="popover-menu">
						<span>${e}</span>
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`
    )}
			${this.renderMenu()}
		`;
  }
  renderMenu() {
    return o`
			<umb-cascading-menu-popover id="popover-menu" placement="bottom-start" .items=${a(this, c)}>
			</umb-cascading-menu-popover>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
M = async function() {
  const e = a(this, u)?.items ?? a(this, u)?.meta.items;
  e && x(this, c, await h(this, p, b).call(this, e));
};
b = async function(e) {
  const t = [];
  for (const i of e) {
    const s = await h(this, p, $).call(this, i);
    t.push(s);
  }
  return t;
};
$ = async function(e) {
  let t;
  !t && e.elementName && (t = document.createElement(e.elementName)), t && (t.editor = this.editor);
  let i;
  return e.items && (i = await h(this, p, b).call(this, e.items)), {
    icon: e.appearance?.icon ?? e.icon,
    items: i,
    label: e.label,
    style: e.appearance?.style ?? e.style,
    separatorAfter: e.separatorAfter,
    element: t,
    execute: () => this.api?.execute(this.editor, e)
  };
};
r = /* @__PURE__ */ new WeakMap();
m.styles = [
  A`
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
w([
  C()
], m.prototype, "isActive", 2);
m = w([
  E("umb-tiptap-toolbar-menu-element")
], m);
export {
  m as UmbTiptapToolbarMenuElement,
  m as element
};
//# sourceMappingURL=tiptap-toolbar-menu.element-Bowtq1j5.js.map
