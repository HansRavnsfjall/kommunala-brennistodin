import { when as l, repeat as C, html as a, ifDefined as v, css as A, property as E, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as U } from "@umbraco-cms/backoffice/element-api";
import { UUIPopoverContainerElement as f } from "@umbraco-cms/backoffice/external/uui";
var O = Object.defineProperty, z = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, g = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? z(t, s) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (r = (n ? c(t, s, r) : c(r)) || r);
  return n && r && O(t, s, r), r;
}, D = (e, t, s) => t.has(e) || b("Cannot " + s), S = (e, t, s) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), i = (e, t, s) => (D(e, t, "access private method"), s), o, d, m, _, $, y, x;
let p = class extends U(f) {
  constructor() {
    super(...arguments), S(this, o);
  }
  render() {
    return a`
			<uui-scroll-container>
				${l(this.items?.length, () => C(this.items, (e, t) => i(this, o, x).call(this, e, t)))}
				${super.render()}
			</uui-scroll-container>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
d = function(e) {
  return this.shadowRoot?.querySelector(`#${e}`);
};
m = function(e) {
  return !!e?.some((t) => t.isActive?.() || i(this, o, m).call(this, t.items));
};
_ = function(e, t) {
  if (!(e.items?.length || e.menu) || !t) return;
  const s = i(this, o, d).call(this, t);
  s && s.showPopover();
};
$ = function(e, t) {
  if (!t) return;
  const s = i(this, o, d).call(this, t);
  s && s.hidePopover();
};
y = function(e, t) {
  e.execute?.(), t || setTimeout(() => {
    this.hidePopover();
  }, 100);
};
x = function(e, t) {
  const s = e.items?.length || !!e.menu, n = s ? `menu-${t}` : void 0, r = e.element;
  r && n && r.setAttribute("popovertarget", n);
  const u = this.localize.string(e.label), c = e.isActive?.() || i(this, o, m).call(this, e.items) || !1;
  return a`
			<div
				@mouseenter=${() => i(this, o, _).call(this, e, n)}
				@mouseleave=${() => i(this, o, $).call(this, e, n)}>
				${l(
    r,
    () => r,
    () => a`
						<uui-menu-item
							class=${e.separatorAfter ? "separator" : ""}
							label=${u}
							popovertarget=${v(n)}
							select-mode="highlight"
							?selected=${c}
							@click-label=${() => i(this, o, y).call(this, e, n)}>
							${l(e.icon, (h) => a`<uui-icon slot="icon" name=${h}></uui-icon>`)}
							<div slot="label" class="menu-item">
								<span style=${v(e.style)}>${u}</span>
								${l(s, () => a`<uui-symbol-expand></uui-symbol-expand>`)}
							</div>
						</uui-menu-item>
					`
  )}
				${l(
    n,
    (h) => a`
						<umb-cascading-menu-popover id=${h} placement="right-start" .items=${e.items}>
							${l(
      e.menu,
      (w) => a`
									<umb-extension-slot
										type="menu"
										default-element="umb-tiptap-menu"
										single
										.filter=${(P) => P.alias === w}></umb-extension-slot>
								`
    )}
						</umb-cascading-menu-popover>
					`
  )}
			</div>
		`;
};
p.styles = [
  ...f.styles,
  A`
			:host {
				--uui-menu-item-flat-structure: 1;

				background-color: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
				padding: var(--uui-size-space-1);
			}

			.menu-item {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-space-4);
			}

			.separator::after {
				content: '';
				position: absolute;
				border-bottom: 1px solid var(--uui-color-border);
				width: 100%;
			}

			uui-scroll-container {
				max-height: 500px;
			}
		`
];
g([
  E({ type: Array })
], p.prototype, "items", 2);
p = g([
  M("umb-cascading-menu-popover")
], p);
export {
  p as U
};
//# sourceMappingURL=cascading-menu-popover.element-Ce2vE90e.js.map
