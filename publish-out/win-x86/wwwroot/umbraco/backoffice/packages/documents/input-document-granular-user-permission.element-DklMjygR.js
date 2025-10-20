import { UmbDocumentItemRepository as x } from "./document-item.repository-Xg9sohq8.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { w as B } from "./manifests-BP7S9LPy.js";
import { html as u, repeat as G, css as W, property as z, state as L, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as Y } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as y, UmbSelectedEvent as K } from "@umbraco-cms/backoffice/event";
import { umbExtensionsRegistry as g } from "@umbraco-cms/backoffice/extension-registry";
import { UUIFormControlMixin as X } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ENTITY_USER_PERMISSION_MODAL as j } from "@umbraco-cms/backoffice/user-permission";
var H = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, b = (t, e, i, n) => {
  for (var o = n > 1 ? void 0 : n ? Q(e, i) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (o = (n ? p(e, i, o) : p(o)) || o);
  return n && o && H(e, i, o), o;
}, E = (t, e, i) => e.has(t) || U("Cannot " + i), a = (t, e, i) => (E(t, e, "read from private field"), i ? i.call(t) : e.get(t)), h = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), P = (t, e, i, n) => (E(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (E(t, e, "access private method"), i), _, d, l, f, s, I, M, T, $, w, q, D, O, k, C, S, N, A, v, F, R;
let m = class extends X(V, "") {
  constructor() {
    super(), h(this, s), this._permissions = [], this.fallbackPermissions = [], h(this, _, new x(this)), h(this, d), h(this, l), h(this, f), this.consumeContext(Y, (t) => P(this, d, t));
  }
  get permissions() {
    return this._permissions;
  }
  set permissions(t) {
    this._permissions = t;
    const e = t.map((i) => i.document.id);
    r(this, s, I).call(this, e);
  }
  getFormElement() {
  }
  render() {
    return u`${r(this, s, D).call(this)} ${r(this, s, O).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
I = async function(t) {
  const { asObservable: e } = await a(this, _).requestItems(t);
  this.observe(e?.(), (i) => this._items = i, "observeItems");
};
M = async function(t) {
  const e = r(this, s, v).call(this, t.unique)?.verbs ?? [], i = await r(this, s, w).call(this, t, e);
  JSON.stringify(i) !== JSON.stringify(e) && (this.permissions = this._permissions.map((n) => n.document.id === t.unique ? {
    ...n,
    verbs: i
  } : n), this.dispatchEvent(new y()));
};
T = async function() {
  P(this, l, a(this, d)?.open(this, B, {
    data: {
      hideTreeRoot: !0,
      // prevent already selected items to be picked again
      // TODO: this type is wrong. It should be the tree item type
      pickableFilter: (t) => !this._items?.map((e) => e.unique).includes(t.unique)
    }
  })), a(this, l)?.addEventListener(K.TYPE, async (t) => {
    const i = t.unique;
    if (!i) return;
    const n = await r(this, s, $).call(this, i);
    r(this, s, w).call(this, n).then(
      (o) => {
        a(this, l)?.reject();
        const c = {
          $type: "DocumentPermissionPresentationModel",
          document: { id: i },
          verbs: o
        };
        this.permissions = [...this._permissions, c], this.dispatchEvent(new y());
      },
      () => {
        a(this, l)?.reject();
      }
    );
  });
};
$ = async function(t) {
  if (!t) throw new Error("Could not open permissions modal, no unique was provided");
  const { data: e } = await a(this, _).requestItems([t]), i = e?.[0];
  if (!i) throw new Error("No document item found");
  return i;
};
w = async function(t, e = []) {
  const i = t.variants[0]?.name, n = i ? `Permissions for ${i}` : "Permissions", o = r(this, s, R).call(this, t.entityType), c = e.length > 0 ? { allowedVerbs: e } : void 0;
  P(this, f, a(this, d)?.open(this, j, {
    data: {
      unique: t.unique,
      entityType: t.entityType,
      headline: n,
      preset: {
        allowedVerbs: o
      }
    },
    value: c
  }));
  try {
    return (await a(this, f)?.onSubmit())?.allowedVerbs;
  } catch {
    return e;
  }
};
q = function(t) {
  const e = r(this, s, v).call(this, t.unique);
  e && (this.permissions = this._permissions.filter((i) => JSON.stringify(i) !== JSON.stringify(e)), this.dispatchEvent(new y()));
};
D = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${G(
      this._items,
      (t) => t.unique,
      (t) => r(this, s, k).call(this, t)
    )}
			</uui-ref-list>
		`;
};
O = function() {
  return u`<uui-button
			id="btn-add"
			look="placeholder"
			@click=${r(this, s, T)}
			label=${this.localize.term("general_add")}></uui-button>`;
};
k = function(t) {
  if (!t.unique) return;
  const e = t.variants[0]?.name, i = r(this, s, F).call(this, t.unique);
  return u`
			<uui-ref-node .name=${e} .detail=${i || ""}>
				${r(this, s, C).call(this, t)} ${r(this, s, S).call(this, t)}
				<uui-action-bar slot="actions">
					${r(this, s, N).call(this, t)} ${r(this, s, A).call(this, t)}
				</uui-action-bar>
			</uui-ref-node>
		`;
};
C = function(t) {
  if (t.documentType.icon)
    return u`<uui-icon slot="icon" name=${t.documentType.icon}></uui-icon>`;
};
S = function(t) {
  if (t.isTrashed)
    return u`<uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag>`;
};
N = function(t) {
  return u`
			<uui-button
				@click=${() => r(this, s, M).call(this, t)}
				label=${this.localize.term("general_edit")}></uui-button>
		`;
};
A = function(t) {
  return u`<uui-button
			@click=${() => r(this, s, q).call(this, t)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
v = function(t) {
  return this._permissions?.find((e) => e.document.id === t);
};
F = function(t) {
  const e = r(this, s, v).call(this, t);
  if (e)
    return g.getByTypeAndFilter(
      "entityUserPermission",
      (i) => i.meta.verbs.every((n) => e.verbs.includes(n))
    ).map((i) => {
      const n = i;
      return n.meta.label ? this.localize.string(n.meta.label) : n.name;
    }).join(", ");
};
R = function(t) {
  const e = g.getByTypeAndFilter(
    "entityUserPermission",
    (i) => i.forEntityTypes.includes(t) && this.fallbackPermissions.map((n) => i.meta.verbs.includes(n)).includes(!0)
  ).flatMap((i) => i.meta.verbs);
  return [.../* @__PURE__ */ new Set([...e])];
};
m.styles = [
  W`
			#btn-add {
				width: 100%;
			}
		`
];
b([
  z({ type: Array, attribute: !1 })
], m.prototype, "fallbackPermissions", 2);
b([
  L()
], m.prototype, "_items", 2);
m = b([
  J("umb-input-document-granular-user-permission")
], m);
const ht = m;
export {
  m as UmbInputDocumentGranularUserPermissionElement,
  ht as default
};
//# sourceMappingURL=input-document-granular-user-permission.element-DklMjygR.js.map
