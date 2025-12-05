import { UmbClipboardCollectionRepository as I } from "./clipboard-collection.repository-DNaeH0Ix.js";
import { css as L, property as q, state as O, customElement as $, when as k, repeat as A, html as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbEntityContext as D } from "@umbraco-cms/backoffice/entity";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UmbRequestReloadStructureForEntityEvent as b, UmbRequestReloadChildrenOfEntityEvent as T } from "@umbraco-cms/backoffice/entity-action";
import { UmbSelectionManager as W } from "@umbraco-cms/backoffice/utils";
import { UMB_ACTION_EVENT_CONTEXT as Y } from "@umbraco-cms/backoffice/action";
import { j as N } from "./manifests-BtMo_QOj.js";
import { UmbModalToken as B } from "@umbraco-cms/backoffice/modal";
var F = Object.defineProperty, x = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, v = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? x(t, i) : t, y = e.length - 1, p; y >= 0; y--)
    (p = e[y]) && (n = (o ? p(t, i, n) : p(n)) || n);
  return o && n && F(t, i, n), n;
}, C = (e, t, i) => t.has(e) || g("Cannot " + i), s = (e, t, i) => (C(e, t, "read from private field"), i ? i.call(e) : t.get(e)), l = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), z = (e, t, i, o) => (C(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (C(e, t, "access private method"), i), w, a, h, m, r, f, U, d, _, P, M, R;
let u = class extends S {
  constructor() {
    super(), l(this, r), this.selection = [], this._items = [], l(this, w, new I(this)), l(this, a, new W(this)), l(this, h, new D(this)), l(this, m), l(this, d, (e) => {
      this._items.some((i) => i.unique === e.getUnique()) && c(this, r, f).call(this);
    }), l(this, _, async (e) => {
      const t = s(this, h).getUnique(), i = s(this, h).getEntityType();
      t === e.getUnique() && i === e.getEntityType() && c(this, r, f).call(this);
    }), s(this, h).setEntityType("clipboard-entry"), s(this, h).setUnique(null);
  }
  connectedCallback() {
    super.connectedCallback(), s(this, a).setSelectable(!0), s(this, a).setMultiple(this.config?.multiple ?? !1), s(this, a).setSelection(this.selection ?? []), this.observe(s(this, a).selection, (e) => {
      this.selection = e;
    }), c(this, r, U).call(this);
  }
  async firstUpdated() {
    c(this, r, f).call(this);
  }
  render() {
    return k(
      this._items.length > 0,
      () => A(
        this._items,
        (e) => e.unique,
        (e) => c(this, r, P).call(this, e)
      ),
      () => E`<p>There are no items in the clipboard.</p>`
    );
  }
  destroy() {
    s(this, m)?.removeEventListener(
      b.TYPE,
      s(this, d)
    ), s(this, m)?.removeEventListener(
      T.TYPE,
      s(this, _)
    ), super.destroy();
  }
};
w = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
f = async function() {
  const { data: e } = await s(this, w).requestCollection({
    types: this.config?.entryTypes ?? []
  }), i = (e?.items ?? []).sort((o, n) => new Date(n.updateDate).getTime() - new Date(o.updateDate).getTime());
  if (this.config?.filter) {
    this._items = i.filter(this.config.filter);
    return;
  }
  if (this.config?.asyncFilter) {
    const n = await Promise.all(i.map(this.config.asyncFilter));
    this._items = i.filter((y, p) => n[p]);
    return;
  }
  this._items = i;
};
U = async function() {
  this.consumeContext(Y, (e) => {
    z(this, m, e), e?.removeEventListener(
      b.TYPE,
      s(this, d)
    ), e?.removeEventListener(
      T.TYPE,
      s(this, _)
    ), e?.addEventListener(
      b.TYPE,
      s(this, d)
    ), e?.addEventListener(
      T.TYPE,
      s(this, _)
    );
  });
};
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
P = function(e) {
  const t = e.name ?? e.unique;
  return E`
			<uui-menu-item
				label=${t}
				title=${t}
				selectable
				@selected=${() => s(this, a).select(e.unique)}
				@deselected=${() => s(this, a).deselect(e.unique)}
				?selected=${this.selection.includes(e.unique)}>
				${c(this, r, M).call(this, e)} ${c(this, r, R).call(this, e)}
			</uui-menu-item>
		`;
};
M = function(e) {
  const t = e.icon ?? "icon-clipboard-entry";
  return E`<umb-icon slot="icon" name=${t}></umb-icon>`;
};
R = function(e) {
  return E`
			<umb-entity-actions-bundle
				slot="actions"
				.entityType=${e.entityType}
				.unique=${e.unique}
				.label=${this.localize.string(e.name)}>
			</umb-entity-actions-bundle>
		`;
};
u.styles = [
  L`
			:host {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
v([
  q({ type: Array })
], u.prototype, "selection", 2);
v([
  q({ type: Object })
], u.prototype, "config", 2);
v([
  O()
], u.prototype, "_items", 2);
u = v([
  $("umb-clipboard-entry-picker")
], u);
const ee = new B(N, {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
export {
  ee as U
};
//# sourceMappingURL=clipboard-entry-picker-modal.token-BGyy-GGP.js.map
