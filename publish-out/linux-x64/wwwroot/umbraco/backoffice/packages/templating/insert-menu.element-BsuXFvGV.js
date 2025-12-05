import { d as V, e as C } from "./index-D0fxHn_d.js";
import { UmbModalToken as D, UMB_MODAL_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/modal";
import { C as l } from "./types--hMpZOew.js";
import { U as T } from "./templating-page-field-builder-modal.token-BA7RzHZB.js";
import { UmbDictionaryDetailRepository as U, UMB_DICTIONARY_PICKER_MODAL as $ } from "@umbraco-cms/backoffice/dictionary";
import { css as A, property as w, customElement as S, html as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PARTIAL_VIEW_PICKER_MODAL as O } from "@umbraco-cms/backoffice/partial-view";
const x = new D("Umb.Modal.TemplatingItemPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var B = Object.defineProperty, R = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, _ = (t, i, e, s) => {
  for (var n = s > 1 ? void 0 : s ? R(i, e) : i, p = t.length - 1, h; p >= 0; p--)
    (h = t[p]) && (n = (s ? h(i, e, n) : h(n)) || n);
  return s && n && B(i, e, n), n;
}, v = (t, i, e) => i.has(t) || P("Cannot " + e), m = (t, i, e) => (v(t, i, "read from private field"), e ? e.call(t) : i.get(t)), d = (t, i, e) => i.has(t) ? P("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), F = (t, i, e, s) => (v(t, i, "write to private field"), i.set(t, e), e), r = (t, i, e) => (v(t, i, "access private method"), e), o, f, a, I, b, g, M, E, c;
let u = class extends L {
  constructor() {
    super(), d(this, a), this.value = "", this.hidePartialViews = !1, d(this, o), d(this, f, new U(this)), this.consumeContext(k, (t) => {
      F(this, o, t);
    });
  }
  async determineInsertValue(t) {
    const { type: i, value: e } = t;
    switch (i) {
      case l.partialView: {
        const s = /^%2F|%25dot%25cshtml$/g, n = e.replace(s, "").replace(/%2F/g, "/");
        this.value = V(n), r(this, a, c).call(this);
        break;
      }
      case l.dictionaryItem: {
        await r(this, a, I).call(this, e), r(this, a, c).call(this);
        break;
      }
      case l.pageField: {
        this.value = e, r(this, a, c).call(this);
        break;
      }
    }
  }
  render() {
    return y`
			<uui-button-group>
				<uui-button
					look="secondary"
					@click=${r(this, a, b)}
					label=${this.localize.term("template_insert")}>
					<uui-icon name="icon-add"></uui-icon>${this.localize.term("template_insert")}
				</uui-button>
				<umb-dropdown
					look="secondary"
					compact
					placement="bottom-end"
					id="insert-button"
					label=${this.localize.term("template_insert")}>
					<uui-menu-item
						class="insert-menu-item"
						label=${this.localize.term("template_insertPageField")}
						title=${this.localize.term("template_insertPageField")}
						@click=${r(this, a, E)}></uui-menu-item>
					${this.hidePartialViews ? "" : y`<uui-menu-item
								class="insert-menu-item"
								label=${this.localize.term("template_insertPartialView")}
								title=${this.localize.term("template_insertPartialView")}
								@click=${r(this, a, g)}>
							</uui-menu-item>`}
					<uui-menu-item
						class="insert-menu-item"
						label=${this.localize.term("template_insertDictionaryItem")}
						title=${this.localize.term("template_insertDictionaryItem")}
						@click=${r(this, a, M)}>
					</uui-menu-item>
				</umb-dropdown>
			</uui-button-group>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
I = async function(t) {
  if (t === null) return;
  const { data: i } = await m(this, f).requestByUnique(t);
  this.value = C(i?.name ?? "");
};
b = async function() {
  const t = m(this, o)?.open(this, x, {
    data: { hidePartialViews: this.hidePartialViews }
  });
  if (await t?.onSubmit().catch(() => {
  }) === void 0) return;
  const e = t?.getValue();
  e && this.determineInsertValue(e);
};
g = async function() {
  const t = m(this, o)?.open(this, O);
  if (await t?.onSubmit().catch(() => {
  }) === void 0) return;
  const e = t?.getValue().selection[0];
  e && this.determineInsertValue({ type: l.partialView, value: e });
};
M = async function() {
  const t = m(this, o)?.open(this, $);
  if (await t?.onSubmit().catch(() => {
  }) === void 0) return;
  const e = t?.getValue().selection[0];
  e && this.determineInsertValue({ type: l.dictionaryItem, value: e });
};
E = async function() {
  const t = m(this, o)?.open(this, T);
  if (await t?.onSubmit().catch(() => {
  }) === void 0) return;
  const e = t?.getValue().output;
  e && (this.value = e, r(this, a, c).call(this));
};
c = function() {
  this.dispatchEvent(new CustomEvent("insert", { bubbles: !1, cancelable: !0, composed: !1 }));
};
u.styles = [
  z,
  A`
			:host {
				--umb-header-layout-height: 70px;
			}

			.insert-menu-item {
				width: 100%;
			}

			uui-icon[name='icon-add'] {
				margin-right: var(--uui-size-4);
			}
		`
];
_([
  w()
], u.prototype, "value", 2);
_([
  w({ type: Boolean })
], u.prototype, "hidePartialViews", 2);
u = _([
  S("umb-templating-insert-menu")
], u);
//# sourceMappingURL=insert-menu.element-BsuXFvGV.js.map
