import { UmbClipboardCollectionRepository as I } from "./clipboard-collection.repository-DNaeH0Ix.js";
import { property as q, state as L, customElement as O, repeat as A, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbSelectionManager as $ } from "@umbraco-cms/backoffice/utils";
import { UmbEntityContext as k } from "@umbraco-cms/backoffice/entity";
import { UMB_ACTION_EVENT_CONTEXT as D } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadStructureForEntityEvent as T, UmbRequestReloadChildrenOfEntityEvent as b } from "@umbraco-cms/backoffice/entity-action";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { j as W } from "./manifests-D6Yzql_a.js";
import { UmbModalToken as Y } from "@umbraco-cms/backoffice/modal";
var N = Object.defineProperty, B = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, v = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? B(t, i) : t, f = e.length - 1, p; f >= 0; f--)
    (p = e[f]) && (n = (o ? p(t, i, n) : p(n)) || n);
  return o && n && N(t, i, n), n;
}, C = (e, t, i) => t.has(e) || U("Cannot " + i), s = (e, t, i) => (C(e, t, "read from private field"), i ? i.call(e) : t.get(e)), l = (e, t, i) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), F = (e, t, i, o) => (C(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (C(e, t, "access private method"), i), w, a, h, u, r, E, g, _, d, P, M, R;
let y = class extends S {
  constructor() {
    super(), l(this, r), this.selection = [], this._items = [], l(this, w, new I(this)), l(this, a, new $(this)), l(this, h, new k(this)), l(this, u), l(this, _, (e) => {
      this._items.some((i) => i.unique === e.getUnique()) && c(this, r, E).call(this);
    }), l(this, d, async (e) => {
      const t = s(this, h).getUnique(), i = s(this, h).getEntityType();
      t === e.getUnique() && i === e.getEntityType() && c(this, r, E).call(this);
    }), s(this, h).setEntityType("clipboard-entry"), s(this, h).setUnique(null);
  }
  connectedCallback() {
    super.connectedCallback(), s(this, a).setSelectable(!0), s(this, a).setMultiple(this.config?.multiple ?? !1), s(this, a).setSelection(this.selection ?? []), this.observe(s(this, a).selection, (e) => {
      this.selection = e;
    }), c(this, r, g).call(this);
  }
  async firstUpdated() {
    c(this, r, E).call(this);
  }
  render() {
    return m`${this._items.length > 0 ? A(
      this._items,
      (e) => e.unique,
      (e) => c(this, r, P).call(this, e)
    ) : m`There are no items in the clipboard`}`;
  }
  destroy() {
    s(this, u)?.removeEventListener(
      T.TYPE,
      s(this, _)
    ), s(this, u)?.removeEventListener(
      b.TYPE,
      s(this, d)
    ), super.destroy();
  }
};
w = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
E = async function() {
  const { data: e } = await s(this, w).requestCollection({
    types: this.config?.entryTypes ?? []
  }), i = (e?.items ?? []).sort((o, n) => new Date(n.updateDate).getTime() - new Date(o.updateDate).getTime());
  if (this.config?.filter) {
    this._items = i.filter(this.config.filter);
    return;
  }
  if (this.config?.asyncFilter) {
    const n = await Promise.all(i.map(this.config.asyncFilter));
    this._items = i.filter((f, p) => n[p]);
    return;
  }
  this._items = i;
};
g = async function() {
  this.consumeContext(D, (e) => {
    F(this, u, e), e?.removeEventListener(
      T.TYPE,
      s(this, _)
    ), e?.removeEventListener(
      b.TYPE,
      s(this, d)
    ), e?.addEventListener(
      T.TYPE,
      s(this, _)
    ), e?.addEventListener(
      b.TYPE,
      s(this, d)
    );
  });
};
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
P = function(e) {
  return m`
			<uui-menu-item
				label=${e.name ?? ""}
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
  return m`<uui-icon slot="icon" name=${t}></uui-icon>`;
};
R = function(e) {
  return m`
			<umb-entity-actions-bundle
				slot="actions"
				.entityType=${e.entityType}
				.unique=${e.unique}
				.label=${this.localize.term("actions_viewActionsFor", [e.name])}>
			</umb-entity-actions-bundle>
		`;
};
v([
  q({ type: Array })
], y.prototype, "selection", 2);
v([
  q({ type: Object })
], y.prototype, "config", 2);
v([
  L()
], y.prototype, "_items", 2);
y = v([
  O("umb-clipboard-entry-picker")
], y);
const Z = new Y(W, {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
export {
  Z as U
};
//# sourceMappingURL=clipboard-entry-picker-modal.token-BY5g5-fO.js.map
