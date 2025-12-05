import { x as C, c as v, y as D } from "./manifests-BfVrApfB.js";
import { html as p, repeat as A, nothing as I, ifDefined as V, css as B, property as k, state as F, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as b } from "@umbraco-cms/backoffice/extension-registry";
import { UUIFormControlMixin as Y } from "@umbraco-cms/backoffice/external/uui";
import { UMB_ENTITY_USER_PERMISSION_MODAL as z } from "@umbraco-cms/backoffice/user-permission";
import { UmbDocumentTypeDetailRepository as W } from "@umbraco-cms/backoffice/document-type";
import { UmbChangeEvent as h } from "@umbraco-cms/backoffice/event";
var J = Object.defineProperty, G = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, y = (e, r, t, n) => {
  for (var s = n > 1 ? void 0 : n ? G(r, t) : r, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (s = (n ? l(r, t, s) : l(s)) || s);
  return n && s && J(r, t, s), s;
}, f = (e, r, t) => r.has(e) || E("Cannot " + t), m = (e, r, t) => (f(e, r, "read from private field"), t ? t.call(e) : r.get(e)), d = (e, r, t) => r.has(e) ? E("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), X = (e, r, t, n) => (f(e, r, "write to private field"), r.set(e, t), t), a = (e, r, t) => (f(e, r, "access private method"), t), u, _, o, w, P, g, U, M, O, S, N, $, q, R;
let c = class extends Y(x, "") {
  constructor() {
    super(...arguments), d(this, o), d(this, u, []), this.fallbackPermissions = [], d(this, _, new W(this));
  }
  get permissions() {
    return m(this, u);
  }
  set permissions(e) {
    X(this, u, e);
    const r = e.map((t) => t.documentType.unique);
    a(this, o, w).call(this, r);
  }
  getFormElement() {
  }
  render() {
    return p`${a(this, o, S).call(this)} ${a(this, o, N).call(this)}`;
  }
};
u = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
w = async function(e) {
  const r = e.map((n) => m(this, _).requestByUnique(n)), t = await Promise.allSettled(r);
  this._documentTypes = t.filter((n) => n.status === "fulfilled").map((n) => n.value.data).filter((n) => n);
};
P = async function() {
  const e = await this.getContext(T);
  if (!e)
    throw new Error("Could not open modal, no modal manager found");
  const r = e.open(this, C, {
    data: {
      preset: {
        verbs: a(this, o, O).call(this, v)
      },
      pickablePropertyTypeFilter: (t) => !m(this, u).some((n) => n.propertyType.unique === t.unique)
    }
  });
  try {
    const t = await r?.onSubmit();
    if (!t) throw new Error("No result from modal");
    const n = {
      $type: "DocumentPropertyValuePermissionPresentationModel",
      userPermissionType: D,
      documentType: t.documentType,
      propertyType: t.propertyType,
      verbs: t.verbs
    };
    this.permissions = [...m(this, u), n], this.dispatchEvent(new h());
  } catch (t) {
    console.error(t);
  }
};
g = async function(e) {
  if (!e)
    throw new Error("Could not open permissions modal, no item was provided");
  if (!this._documentTypes?.find((i) => i.unique === e.documentType.unique))
    throw new Error("Could not open permissions modal, no document type was found");
  const t = "Permissions", n = await this.getContext(T);
  if (!n)
    throw new Error("Could not open permissions modal, modal manager is not available");
  const s = n.open(this, z, {
    data: {
      entityType: v,
      headline: t,
      preset: {
        allowedVerbs: e.verbs
      }
    }
  });
  try {
    const i = await s.onSubmit();
    if (JSON.stringify(i.allowedVerbs) === JSON.stringify(e.verbs)) return;
    this.permissions = m(this, u).map((l) => l.propertyType.unique === e.propertyType.unique ? {
      ...l,
      verbs: i.allowedVerbs
    } : l), this.dispatchEvent(new h());
  } catch (i) {
    console.log(i);
  }
};
U = function(e) {
  this.permissions = m(this, u).filter((r) => JSON.stringify(r) !== JSON.stringify(e)), this.dispatchEvent(new h());
};
M = function(e) {
  if (!e)
    throw new Error("Could not find permission for property type");
  return e.verbs.length === 0 ? this.localize.term("user_permissionNoVerbs") : b.getByTypeAndFilter(
    "entityUserPermission",
    (r) => r.meta.verbs.every((t) => e.verbs.includes(t))
  ).map((r) => {
    const t = r;
    return t.meta.label ? this.localize.string(t.meta.label) : t.name;
  }).join(", ");
};
O = function(e) {
  const r = b.getByTypeAndFilter(
    "entityUserPermission",
    (t) => t.forEntityTypes.includes(e) && this.fallbackPermissions.map((n) => t.meta.verbs.includes(n)).includes(!0)
  ).flatMap((t) => t.meta.verbs);
  return [.../* @__PURE__ */ new Set([...r])];
};
S = function() {
  if (this.permissions)
    return p`
			<uui-ref-list>
				${A(
      this.permissions,
      (e) => e.propertyType.unique,
      (e) => a(this, o, $).call(this, e)
    )}
			</uui-ref-list>
		`;
};
N = function() {
  return p`<uui-button
			id="btn-add"
			look="placeholder"
			@click=${a(this, o, P)}
			label=${this.localize.term("general_add")}></uui-button>`;
};
$ = function(e) {
  if (!e.propertyType.unique)
    throw new Error("Property type unique is required");
  const r = this._documentTypes?.find((i) => i.unique === e.documentType.unique), t = r?.properties.find((i) => i.unique === e.propertyType.unique), n = `${r?.name}: ${t?.name} (${t?.alias})`, s = a(this, o, M).call(this, e);
  return p`
			<uui-ref-node .name=${n} .detail=${s || ""} readonly>
				${r?.icon ? p`<uui-icon slot="icon" name=${V(r?.icon)}></uui-icon>` : I}
				<uui-action-bar slot="actions"
					>${a(this, o, q).call(this, e)} ${a(this, o, R).call(this, e)}</uui-action-bar
				>
			</uui-ref-node>
		`;
};
q = function(e) {
  return p`<uui-button
			@click=${() => a(this, o, g).call(this, e)}
			label=${this.localize.term("general_edit")}></uui-button>`;
};
R = function(e) {
  return p`<uui-button
			@click=${() => a(this, o, U).call(this, e)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
c.styles = [
  B`
			#btn-add {
				width: 100%;
			}
		`
];
y([
  k({ type: Array, attribute: !1 })
], c.prototype, "fallbackPermissions", 2);
y([
  F()
], c.prototype, "_documentTypes", 2);
c = y([
  L("umb-input-document-property-value-user-permission")
], c);
export {
  c as UmbInputDocumentPropertyValueUserPermissionElement,
  c as element
};
//# sourceMappingURL=input-document-property-value-user-permission.element-BhBOKkjF.js.map
