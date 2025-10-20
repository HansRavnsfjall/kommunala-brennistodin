import { a as fe, U as ce } from "../relation-collection.repository-DNnNdtMP.js";
import { a as _e, b as le, U as pe } from "../bulk-trash-with-relation.action.kind-BwLG7kt9.js";
import { U as me } from "../bulk-delete-with-relation-modal.token-ClxjRYy9.js";
import { U as ye } from "../bulk-trash-with-relation-modal.token-BtR7225U.js";
import { U as Ee } from "../delete-with-relation-modal.token-BiSZyd7F.js";
import { U as Ie } from "../trash-with-relation-modal.token-CJFEoSES.js";
import { css as L, property as C, state as R, customElement as N, html as l, nothing as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { createExtensionApiByAlias as T } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as S } from "@umbraco-cms/backoffice/event";
var G = Object.defineProperty, J = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, E = (e, t, i, r) => {
  for (var s = r > 1 ? void 0 : r ? J(t, i) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (s = (r ? h(t, i, s) : h(s)) || s);
  return r && s && G(t, i, s), s;
}, D = (e, t, i) => t.has(e) || x("Cannot " + i), n = (e, t, i) => (D(e, t, "read from private field"), t.get(e)), v = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), B = (e, t, i, r) => (D(e, t, "write to private field"), t.set(e, i), i), w = (e, t, i) => (D(e, t, "access private method"), i), p, o, d, _, P, F, H, U;
let f = class extends q {
  constructor() {
    super(...arguments), v(this, _), this._referencedByItems = [], this._totalReferencedByItems = 0, this._totalDescendantsWithReferences = 0, this._descendantsWithReferences = [], v(this, p), v(this, o), v(this, d, 3);
  }
  getTotalReferencedBy() {
    return this._totalReferencedByItems;
  }
  getTotalDescendantsWithReferences() {
    return this._totalDescendantsWithReferences;
  }
  firstUpdated(e) {
    super.firstUpdated(e), w(this, _, P).call(this);
  }
  render() {
    return l`
			${w(this, _, U).call(this, "references_labelDependsOnThis", this._referencedByItems, this._totalReferencedByItems)}
			${w(this, _, U).call(this, "references_labelDependentDescendants", this._descendantsWithReferences, this._totalDescendantsWithReferences)}
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
P = async function() {
  if (!this.config) {
    n(this, p)?.destroy(), n(this, o)?.destroy();
    return;
  }
  if (!this.config?.referenceRepositoryAlias)
    throw new Error("Missing referenceRepositoryAlias in config.");
  if (B(this, o, await T(
    this,
    this.config?.referenceRepositoryAlias
  )), !this.config?.itemRepositoryAlias)
    throw new Error("Missing itemRepositoryAlias in config.");
  B(this, p, await T(
    this,
    this.config.itemRepositoryAlias
  )), w(this, _, F).call(this), w(this, _, H).call(this);
};
F = async function() {
  if (!n(this, o))
    throw new Error("Failed to create reference repository.");
  if (!this.config?.unique)
    throw new Error("Missing unique in data.");
  const { data: e } = await n(this, o).requestReferencedBy(this.config.unique, 0, n(this, d));
  e && (this._referencedByItems = [...e.items], this._totalReferencedByItems = e.total, this.dispatchEvent(new S()));
};
H = async function() {
  if (!n(this, o))
    throw new Error("Failed to create reference repository.");
  if (!n(this, p))
    throw new Error("Failed to create item repository.");
  if (!n(this, o).requestDescendantsWithReferences) return;
  if (!this.config?.unique)
    throw new Error("Missing unique in data.");
  const { data: e } = await n(this, o).requestDescendantsWithReferences(
    this.config.unique,
    0,
    n(this, d)
  );
  if (e) {
    this._totalDescendantsWithReferences = e.total;
    const t = e.items.map((r) => r.unique).filter((r) => r), { data: i } = await n(this, p).requestItems(t);
    this._descendantsWithReferences = i ?? [], this.dispatchEvent(new S());
  }
};
U = function(e, t, i) {
  return i === 0 ? A : l`
			<h5 class="uui-h5" id="reference-headline">${this.localize.term(e)}</h5>
			<uui-ref-list>
				${t.map(
    (r) => l`<umb-entity-item-ref .item=${r} readonly ?standalone=${i === 1}></umb-entity-item-ref> `
  )}
			</uui-ref-list>
			${i > n(this, d) ? l`<span>${this.localize.term("references_labelMoreReferences", i - n(this, d))}</span>` : A}
		`;
};
f.styles = [
  b,
  L`
			#reference-headline {
				margin-bottom: var(--uui-size-3);
			}

			uui-ref-list {
				margin-bottom: var(--uui-size-2);
			}
		`
];
E([
  C({ type: Object, attribute: !1 })
], f.prototype, "config", 2);
E([
  R()
], f.prototype, "_referencedByItems", 2);
E([
  R()
], f.prototype, "_totalReferencedByItems", 2);
E([
  R()
], f.prototype, "_totalDescendantsWithReferences", 2);
E([
  R()
], f.prototype, "_descendantsWithReferences", 2);
f = E([
  N("umb-confirm-action-modal-entity-references")
], f);
var Q = Object.defineProperty, V = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, O = (e, t, i, r) => {
  for (var s = r > 1 ? void 0 : r ? V(t, i) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (s = (r ? h(t, i, s) : h(s)) || s);
  return r && s && Q(t, i, s), s;
}, W = (e, t, i) => t.has(e) || z("Cannot " + i), a = (e, t, i) => (W(e, t, "read from private field"), t.get(e)), g = (e, t, i) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $ = (e, t, i, r) => (W(e, t, "write to private field"), t.set(e, i), i), K = (e, t, i) => (W(e, t, "access private method"), i), m, u, I, M, k, Y;
let y = class extends q {
  constructor() {
    super(...arguments), g(this, M), this._items = [], this._totalItems = 0, g(this, m), g(this, u), g(this, I, 5);
  }
  firstUpdated(e) {
    super.firstUpdated(e), K(this, M, k).call(this);
  }
  render() {
    return this._totalItems === 0 ? A : l`
			<h5 id="reference-headline">The following items are used by other content.</h5>
			<uui-ref-list>
				${this._items.map(
      (e) => l`<umb-entity-item-ref
							.item=${e}
							readonly
							?standalone=${this._totalItems === 1}></umb-entity-item-ref> `
    )}
			</uui-ref-list>
			${this._totalItems > a(this, I) ? l`<span
						>${this.localize.term("references_labelMoreReferences", this._totalItems - a(this, I))}</span
					>` : A}
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
k = async function() {
  if (!this.config) {
    a(this, m)?.destroy(), a(this, u)?.destroy();
    return;
  }
  if (!this.config?.referenceRepositoryAlias)
    throw new Error("Missing referenceRepositoryAlias in config.");
  if ($(this, u, await T(
    this,
    this.config?.referenceRepositoryAlias
  )), !this.config?.itemRepositoryAlias)
    throw new Error("Missing itemRepositoryAlias in config.");
  $(this, m, await T(
    this,
    this.config.itemRepositoryAlias
  )), K(this, M, Y).call(this);
};
Y = async function() {
  if (!a(this, u))
    throw new Error("Failed to create reference repository.");
  if (!a(this, m))
    throw new Error("Failed to create item repository.");
  if (!this.config?.uniques)
    throw new Error("Missing uniques in config.");
  const { data: e } = await a(this, u).requestAreReferenced(this.config.uniques, 0, a(this, I));
  if (e) {
    this._totalItems = e.total;
    const t = e.items.map((r) => r.unique).filter((r) => r), { data: i } = await a(this, m).requestItems(t);
    this._items = i ?? [];
  }
};
y.styles = [
  b,
  L`
			#reference-headline {
				margin-bottom: var(--uui-size-3);
			}

			uui-ref-list {
				margin-bottom: var(--uui-size-2);
			}
		`
];
O([
  C({ type: Object, attribute: !1 })
], y.prototype, "config", 2);
O([
  R()
], y.prototype, "_items", 2);
O([
  R()
], y.prototype, "_totalItems", 2);
y = O([
  N("umb-confirm-bulk-action-modal-entity-references")
], y);
function ie(e) {
  return typeof e.documentType < "u";
}
function re(e) {
  return typeof e.mediaType < "u";
}
function se(e) {
  return typeof e.memberType < "u";
}
function ne(e) {
  return typeof e.type < "u";
}
export {
  me as UMB_BULK_DELETE_WITH_RELATION_CONFIRM_MODAL,
  ye as UMB_BULK_TRASH_WITH_RELATION_CONFIRM_MODAL,
  Ee as UMB_DELETE_WITH_RELATION_CONFIRM_MODAL,
  _e as UMB_ENTITY_BULK_ACTION_DELETE_WITH_RELATION_KIND,
  le as UMB_ENTITY_BULK_ACTION_TRASH_WITH_RELATION_KIND,
  pe as UMB_RELATION_COLLECTION_REPOSITORY_ALIAS,
  fe as UMB_RELATION_ENTITY_TYPE,
  Ie as UMB_TRASH_WITH_RELATION_CONFIRM_MODAL,
  f as UmbConfirmActionModalEntityReferencesElement,
  y as UmbConfirmBulkActionModalEntityReferencesElement,
  ce as UmbRelationCollectionRepository,
  ne as isDefaultReference,
  ie as isDocumentReference,
  re as isMediaReference,
  se as isMemberReference
};
//# sourceMappingURL=index.js.map
