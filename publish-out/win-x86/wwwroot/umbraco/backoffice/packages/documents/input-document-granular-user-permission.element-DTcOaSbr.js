import { UmbDocumentItemRepository as B } from "./document-item.repository-C0SbAo-7.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { w as G } from "./manifests-BfVrApfB.js";
import { html as c, repeat as W, css as z, property as L, state as J, customElement as V } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as K } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as E, UmbSelectedEvent as X } from "@umbraco-cms/backoffice/event";
import { umbExtensionsRegistry as M } from "@umbraco-cms/backoffice/extension-registry";
import { UUIFormControlMixin as j } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ENTITY_USER_PERMISSION_MODAL as H } from "@umbraco-cms/backoffice/user-permission";
var Q = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, P = (t, e, n, i) => {
  for (var a = i > 1 ? void 0 : i ? Z(e, n) : e, l = t.length - 1, f; l >= 0; l--)
    (f = t[l]) && (a = (i ? f(e, n, a) : f(a)) || a);
  return i && a && Q(e, n, a), a;
}, w = (t, e, n) => e.has(t) || U("Cannot " + n), o = (t, e, n) => (w(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), _ = (t, e, n, i) => (w(t, e, "write to private field"), e.set(t, n), n), r = (t, e, n) => (w(t, e, "access private method"), n), u, y, p, h, v, s, I, T, $, q, g, D, k, O, C, S, N, A, F, b, R, x;
let d = class extends j(Y, "") {
  constructor() {
    super(), m(this, s), m(this, u, []), this.fallbackPermissions = [], m(this, y, new B(this)), m(this, p), m(this, h), m(this, v), this.consumeContext(K, (t) => _(this, p, t));
  }
  get permissions() {
    return o(this, u);
  }
  set permissions(t) {
    _(this, u, t);
    const e = t.map((n) => n.document.id);
    r(this, s, I).call(this, e);
  }
  getFormElement() {
  }
  render() {
    return c`${r(this, s, k).call(this)} ${r(this, s, O).call(this)}`;
  }
};
u = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
I = async function(t) {
  const { asObservable: e } = await o(this, y).requestItems(t);
  this.observe(e?.(), (n) => this._items = n, "observeItems");
};
T = async function(t) {
  const e = r(this, s, b).call(this, t.unique)?.verbs ?? [], n = await r(this, s, g).call(this, t, e);
  JSON.stringify(n) !== JSON.stringify(e) && (this.permissions = o(this, u).map((i) => i.document.id === t.unique ? {
    ...i,
    verbs: n
  } : i), this.dispatchEvent(new E()));
};
$ = async function() {
  _(this, h, o(this, p)?.open(this, G, {
    data: {
      hideTreeRoot: !0,
      // prevent already selected items to be picked again
      // TODO: this type is wrong. It should be the tree item type
      pickableFilter: (t) => !this._items?.map((e) => e.unique).includes(t.unique)
    }
  })), o(this, h)?.addEventListener(X.TYPE, async (t) => {
    const n = t.unique;
    if (!n) return;
    const i = await r(this, s, q).call(this, n);
    r(this, s, g).call(this, i).then(
      (a) => {
        o(this, h)?.reject();
        const l = {
          $type: "DocumentPermissionPresentationModel",
          document: { id: n },
          verbs: a
        };
        this.permissions = [...o(this, u), l], this.dispatchEvent(new E());
      },
      () => {
        o(this, h)?.reject();
      }
    );
  });
};
q = async function(t) {
  if (!t) throw new Error("Could not open permissions modal, no unique was provided");
  const { data: e } = await o(this, y).requestItems([t]), n = e?.[0];
  if (!n) throw new Error("No document item found");
  return n;
};
g = async function(t, e = []) {
  const n = t.variants[0]?.name, i = n ? `Permissions for ${n}` : "Permissions", a = r(this, s, x).call(this, t.entityType), l = e.length > 0 ? { allowedVerbs: e } : void 0;
  _(this, v, o(this, p)?.open(this, H, {
    data: {
      unique: t.unique,
      entityType: t.entityType,
      headline: i,
      preset: {
        allowedVerbs: a
      }
    },
    value: l
  }));
  try {
    return (await o(this, v)?.onSubmit())?.allowedVerbs;
  } catch {
    return e;
  }
};
D = function(t) {
  const e = r(this, s, b).call(this, t.unique);
  e && (this.permissions = o(this, u).filter((n) => JSON.stringify(n) !== JSON.stringify(e)), this.dispatchEvent(new E()));
};
k = function() {
  if (this._items)
    return c`
			<uui-ref-list>
				${W(
      this._items,
      (t) => t.unique,
      (t) => r(this, s, C).call(this, t)
    )}
			</uui-ref-list>
		`;
};
O = function() {
  return c`<uui-button
			id="btn-add"
			look="placeholder"
			@click=${r(this, s, $)}
			label=${this.localize.term("general_add")}></uui-button>`;
};
C = function(t) {
  if (!t.unique) return;
  const e = t.variants[0]?.name, n = r(this, s, R).call(this, t.unique);
  return c`
			<uui-ref-node .name=${e} .detail=${n || ""}>
				${r(this, s, S).call(this, t)} ${r(this, s, N).call(this, t)}
				<uui-action-bar slot="actions">
					${r(this, s, A).call(this, t)} ${r(this, s, F).call(this, t)}
				</uui-action-bar>
			</uui-ref-node>
		`;
};
S = function(t) {
  if (t.documentType.icon)
    return c`<uui-icon slot="icon" name=${t.documentType.icon}></uui-icon>`;
};
N = function(t) {
  if (t.isTrashed)
    return c`<uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag>`;
};
A = function(t) {
  return c`
			<uui-button
				@click=${() => r(this, s, T).call(this, t)}
				label=${this.localize.term("general_edit")}></uui-button>
		`;
};
F = function(t) {
  return c`<uui-button
			@click=${() => r(this, s, D).call(this, t)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
b = function(t) {
  return o(this, u)?.find((e) => e.document.id === t);
};
R = function(t) {
  const e = r(this, s, b).call(this, t);
  if (e)
    return M.getByTypeAndFilter(
      "entityUserPermission",
      (n) => n.meta.verbs.every((i) => e.verbs.includes(i))
    ).map((n) => {
      const i = n;
      return i.meta.label ? this.localize.string(i.meta.label) : i.name;
    }).join(", ");
};
x = function(t) {
  const e = M.getByTypeAndFilter(
    "entityUserPermission",
    (n) => n.forEntityTypes.includes(t) && this.fallbackPermissions.map((i) => n.meta.verbs.includes(i)).includes(!0)
  ).flatMap((n) => n.meta.verbs);
  return [.../* @__PURE__ */ new Set([...e])];
};
d.styles = [
  z`
			#btn-add {
				width: 100%;
			}
		`
];
P([
  L({ type: Array, attribute: !1 })
], d.prototype, "fallbackPermissions", 2);
P([
  J()
], d.prototype, "_items", 2);
d = P([
  V("umb-input-document-granular-user-permission")
], d);
const dt = d;
export {
  d as UmbInputDocumentGranularUserPermissionElement,
  dt as default
};
//# sourceMappingURL=input-document-granular-user-permission.element-DTcOaSbr.js.map
