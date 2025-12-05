import { x as q, c as y, y as R } from "./manifests-BP7S9LPy.js";
import { html as l, repeat as C, nothing as D, ifDefined as A, css as I, property as V, state as B, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as f } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as _ } from "@umbraco-cms/backoffice/extension-registry";
import { UUIFormControlMixin as L } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ENTITY_USER_PERMISSION_MODAL as x } from "@umbraco-cms/backoffice/user-permission";
import { UmbDocumentTypeDetailRepository as Y } from "@umbraco-cms/backoffice/document-type";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
var z = Object.defineProperty, J = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, c = (e, r, t, i) => {
  for (var o = i > 1 ? void 0 : i ? J(r, t) : r, n = e.length - 1, u; n >= 0; n--)
    (u = e[n]) && (o = (i ? u(r, t, o) : u(o)) || o);
  return i && o && z(r, t, o), o;
}, v = (e, r, t) => r.has(e) || b("Cannot " + t), W = (e, r, t) => (v(e, r, "read from private field"), t ? t.call(e) : r.get(e)), h = (e, r, t) => r.has(e) ? b("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), a = (e, r, t) => (v(e, r, "access private method"), t), d, s, T, E, w, P, g, U, M, O, N, S, $;
let p = class extends L(F, "") {
  constructor() {
    super(...arguments), h(this, s), this._permissions = [], this.fallbackPermissions = [], h(this, d, new Y(this));
  }
  get permissions() {
    return this._permissions;
  }
  set permissions(e) {
    this._permissions = e;
    const r = e.map((t) => t.documentType.unique);
    a(this, s, T).call(this, r);
  }
  getFormElement() {
  }
  render() {
    return l`${a(this, s, M).call(this)} ${a(this, s, O).call(this)}`;
  }
};
d = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
T = async function(e) {
  const r = e.map((i) => W(this, d).requestByUnique(i)), t = await Promise.allSettled(r);
  this._documentTypes = t.filter((i) => i.status === "fulfilled").map((i) => i.value.data).filter((i) => i);
};
E = async function() {
  const e = await this.getContext(f);
  if (!e)
    throw new Error("Could not open modal, no modal manager found");
  const r = e.open(this, q, {
    data: {
      preset: {
        verbs: a(this, s, U).call(this, y)
      },
      pickablePropertyTypeFilter: (t) => !this._permissions.some((i) => i.propertyType.unique === t.unique)
    }
  });
  try {
    const t = await r?.onSubmit();
    if (!t) throw new Error("No result from modal");
    const i = {
      $type: "DocumentPropertyValuePermissionPresentationModel",
      userPermissionType: R,
      documentType: t.documentType,
      propertyType: t.propertyType,
      verbs: t.verbs
    };
    this.permissions = [...this._permissions, i], this.dispatchEvent(new m());
  } catch (t) {
    console.error(t);
  }
};
w = async function(e) {
  if (!e)
    throw new Error("Could not open permissions modal, no item was provided");
  if (!this._documentTypes?.find((n) => n.unique === e.documentType.unique))
    throw new Error("Could not open permissions modal, no document type was found");
  const t = "Permissions", i = await this.getContext(f);
  if (!i)
    throw new Error("Could not open permissions modal, modal manager is not available");
  const o = i.open(this, x, {
    data: {
      entityType: y,
      headline: t,
      preset: {
        allowedVerbs: e.verbs
      }
    }
  });
  try {
    const n = await o.onSubmit();
    if (JSON.stringify(n.allowedVerbs) === JSON.stringify(e.verbs)) return;
    this.permissions = this._permissions.map((u) => u.propertyType.unique === e.propertyType.unique ? {
      ...u,
      verbs: n.allowedVerbs
    } : u), this.dispatchEvent(new m());
  } catch (n) {
    console.log(n);
  }
};
P = function(e) {
  this.permissions = this._permissions.filter((r) => JSON.stringify(r) !== JSON.stringify(e)), this.dispatchEvent(new m());
};
g = function(e) {
  if (!e)
    throw new Error("Could not find permission for property type");
  return e.verbs.length === 0 ? this.localize.term("user_permissionNoVerbs") : _.getByTypeAndFilter(
    "entityUserPermission",
    (r) => r.meta.verbs.every((t) => e.verbs.includes(t))
  ).map((r) => {
    const t = r;
    return t.meta.label ? this.localize.string(t.meta.label) : t.name;
  }).join(", ");
};
U = function(e) {
  const r = _.getByTypeAndFilter(
    "entityUserPermission",
    (t) => t.forEntityTypes.includes(e) && this.fallbackPermissions.map((i) => t.meta.verbs.includes(i)).includes(!0)
  ).flatMap((t) => t.meta.verbs);
  return [.../* @__PURE__ */ new Set([...r])];
};
M = function() {
  if (this.permissions)
    return l`
			<uui-ref-list>
				${C(
      this.permissions,
      (e) => e.propertyType.unique,
      (e) => a(this, s, N).call(this, e)
    )}
			</uui-ref-list>
		`;
};
O = function() {
  return l`<uui-button
			id="btn-add"
			look="placeholder"
			@click=${a(this, s, E)}
			label=${this.localize.term("general_add")}></uui-button>`;
};
N = function(e) {
  if (!e.propertyType.unique)
    throw new Error("Property type unique is required");
  const r = this._documentTypes?.find((n) => n.unique === e.documentType.unique), t = r?.properties.find((n) => n.unique === e.propertyType.unique), i = `${r?.name}: ${t?.name} (${t?.alias})`, o = a(this, s, g).call(this, e);
  return l`
			<uui-ref-node .name=${i} .detail=${o || ""} readonly>
				${r?.icon ? l`<uui-icon slot="icon" name=${A(r?.icon)}></uui-icon>` : D}
				<uui-action-bar slot="actions"
					>${a(this, s, S).call(this, e)} ${a(this, s, $).call(this, e)}</uui-action-bar
				>
			</uui-ref-node>
		`;
};
S = function(e) {
  return l`<uui-button
			@click=${() => a(this, s, w).call(this, e)}
			label=${this.localize.term("general_edit")}></uui-button>`;
};
$ = function(e) {
  return l`<uui-button
			@click=${() => a(this, s, P).call(this, e)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
p.styles = [
  I`
			#btn-add {
				width: 100%;
			}
		`
];
c([
  V({ type: Array, attribute: !1 })
], p.prototype, "fallbackPermissions", 2);
c([
  B()
], p.prototype, "_documentTypes", 2);
p = c([
  k("umb-input-document-property-value-user-permission")
], p);
export {
  p as UmbInputDocumentPropertyValueUserPermissionElement,
  p as element
};
//# sourceMappingURL=input-document-property-value-user-permission.element-DcJaXsVI.js.map
