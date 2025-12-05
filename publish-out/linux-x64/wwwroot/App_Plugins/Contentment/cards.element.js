import { html as o, nothing as z, repeat as C, styleMap as m, when as l, css as k, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { C as S } from "./display-mode-base.element.js";
var M = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, D = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? M(e, i) : e, u = t.length - 1, p; u >= 0; u--)
    (p = t[u]) && (a = p(a) || a);
  return a;
}, f = (t, e, i) => e.has(t) || g("Cannot " + i), P = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), v = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), s = (t, e, i) => (f(t, e, "access private method"), i), h, n, b, c, _, y, w, $, E;
let d = class extends S {
  constructor() {
    super(...arguments), v(this, n), v(this, h, "icon-document");
  }
  render() {
    return o`
			<contentment-sortable-list
				class="container"
				?disabled=${!this.allowSort}
				item-selector="uui-card-media"
				@sort-end=${s(this, n, y)}>
				${s(this, n, $).call(this)} ${s(this, n, w).call(this)}
			</contentment-sortable-list>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
b = function(t) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("add", { bubbles: !0, detail: { listType: "cards" } }));
};
c = function(t, e, i) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("edit", { bubbles: !0, detail: { item: e, index: i } }));
};
_ = function(t, e, i) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("remove", { bubbles: !0, detail: { item: e, index: i } }));
};
y = function(t) {
  t.stopPropagation();
  const { newIndex: e, oldIndex: i } = t.detail;
  this.dispatchEvent(new CustomEvent("sort", { bubbles: !0, detail: { newIndex: e, oldIndex: i } }));
};
w = function() {
  if (!this.allowAdd) return z;
  const t = this.localize.term(this.addButtonLabelKey ?? "general_choose");
  return o`
			<uui-button id="btn-add" label=${t} look="placeholder" @click=${s(this, n, b)}>
				<div>
					<uui-icon name="icon-add"></uui-icon>
					<span>${t}</span>
				</div>
			</uui-button>
		`;
};
$ = function() {
  if (this.items)
    return o`
			${C(
      this.items,
      (t) => t.value,
      (t, e) => s(this, n, E).call(this, t, e)
    )}
		`;
};
E = function(t, e) {
  if (!t) return;
  const i = t.cardStyle ?? {}, r = t.iconStyle ?? {};
  return o`
			<uui-card-media
				name=${t.name}
				detail=${t.description ?? ""}
				style=${m(i)}
				@open=${(a) => s(this, n, c).call(this, a, t, e)}>
				${l(
    t.image,
    () => o`<img src=${t.image} alt="" />`,
    () => o`<umb-icon name=${t.icon ?? P(this, h)} style=${m(r)}></umb-icon>`
  )}
				${l(
    this.allowEdit || this.allowRemove,
    () => o`
						<uui-action-bar slot="actions">
							${l(
      this.allowEdit,
      () => o`
									<uui-button
										label=${this.localize.term("general_edit")}
										look="secondary"
										@click=${(a) => s(this, n, c).call(this, a, t, e)}>
										<uui-icon name="icon-edit"></uui-icon>
									</uui-button>
								`
    )}
							${l(
      this.allowRemove,
      () => o`
									<uui-button
										label=${this.localize.term("general_remove")}
										look="secondary"
										@click=${(a) => s(this, n, _).call(this, a, t, e)}>
										<uui-icon name="icon-trash"></uui-icon>
									</uui-button>
								`
    )}
						</uui-action-bar>
					`
  )}
			</uui-card-media>
		`;
};
d.styles = [
  k`
			:host {
				position: relative;
			}

			/* TODO: [LK] Something strange is happening with the grid. The heights are all messed up! */
			.container {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
			}

			#btn-add {
				text-align: center;
				height: 100%;
				min-height: 174px;

				> div {
					display: flex;
					flex-direction: column;

					line-height: 1.5;
					margin: 0 var(--uui-size-6);

					> uui-icon {
						font-size: var(--uui-size-8);
						margin-bottom: var(--uui-size-4);
					}
				}
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media {
				&[drag-placeholder] {
					opacity: 0.2;
				}

				umb-icon {
					font-size: var(--uui-size-8);
					/* HACK: To make the icon position appear vertically centred within the top half of the card. [LK] */
					padding-bottom: var(--uui-size-12);
					min-height: var(--uui-size-layout-6);
				}
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
d = D([
  x("contentment-display-mode-cards")
], d);
export {
  d as ContentmentDisplayModeCardsElement,
  d as element
};
//# sourceMappingURL=cards.element.js.map
