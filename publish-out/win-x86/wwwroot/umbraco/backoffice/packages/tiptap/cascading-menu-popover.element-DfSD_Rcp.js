import { when as l, repeat as g, html as a, ifDefined as y, css as x, property as w, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as C } from "@umbraco-cms/backoffice/element-api";
import { UUIPopoverContainerElement as h } from "@umbraco-cms/backoffice/external/uui";
var E = Object.defineProperty, M = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, f = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? M(t, r) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (o = (s ? p(t, r, o) : p(o)) || o);
  return s && o && E(t, r, o), o;
}, U = (e, t, r) => t.has(e) || v("Cannot " + r), A = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), i = (e, t, r) => (U(e, t, "access private method"), r), n, m, b, d, _, $;
let c = class extends C(h) {
  constructor() {
    super(...arguments), A(this, n);
  }
  render() {
    return a`
			<uui-scroll-container>
				${l(
      this.items?.length,
      () => a`${g(this.items, (e, t) => i(this, n, $).call(this, e, t))} ${super.render()}`,
      () => super.render()
    )}
			</uui-scroll-container>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
m = function(e) {
  return this.shadowRoot?.querySelector(`#${e}`);
};
b = function(e, t) {
  if (!e.items?.length) return;
  const r = i(this, n, m).call(this, t);
  r && r.showPopover();
};
d = function(e, t) {
  const r = i(this, n, m).call(this, t);
  r && r.hidePopover();
};
_ = function(e, t) {
  e.execute?.(), setTimeout(() => {
    i(this, n, d).call(this, e, t);
  }, 100);
};
$ = function(e, t) {
  const r = `item-${t}`, s = e.element;
  s && s.setAttribute("popovertarget", r);
  const o = this.localize.string(e.label);
  return a`
			<div
				@mouseenter=${() => i(this, n, b).call(this, e, r)}
				@mouseleave=${() => i(this, n, d).call(this, e, r)}>
				${l(
    s,
    () => s,
    () => a`
						<uui-menu-item
							class=${e.separatorAfter ? "separator" : ""}
							label=${o}
							popovertarget=${r}
							@click-label=${() => i(this, n, _).call(this, e, r)}>
							${l(e.icon, (u) => a`<uui-icon slot="icon" name=${u}></uui-icon>`)}
							<div slot="label" class="menu-item">
								<span style=${y(e.style)}>${o}</span>
								${l(e.items, () => a`<uui-symbol-expand></uui-symbol-expand>`)}
							</div>
						</uui-menu-item>
					`
  )}
				<umb-cascading-menu-popover id=${r} placement="right-start" .items=${e.items}>
				</umb-cascading-menu-popover>
			</div>
		`;
};
c.styles = [
  ...h.styles,
  x`
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
f([
  w({ type: Array })
], c.prototype, "items", 2);
c = f([
  P("umb-cascading-menu-popover")
], c);
export {
  c as U
};
//# sourceMappingURL=cascading-menu-popover.element-DfSD_Rcp.js.map
