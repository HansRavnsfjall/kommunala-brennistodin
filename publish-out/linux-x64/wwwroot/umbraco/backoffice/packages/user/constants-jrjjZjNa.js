import { UmbContextToken as E } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/entity-item";
import { UmbModalToken as Y } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as H } from "@umbraco-cms/backoffice/picker-input";
import { html as p, ifDefined as V, nothing as X, css as A, property as m, state as b, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as q, UUIRefNodeElement as g } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as j, UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as J } from "@umbraco-cms/backoffice/router";
import { splitStringToArray as Q } from "@umbraco-cms/backoffice/utils";
import { UmbElementMixin as Z } from "@umbraco-cms/backoffice/element-api";
import { createExtensionApiByAlias as L, umbExtensionsRegistry as M } from "@umbraco-cms/backoffice/extension-registry";
import { U as I } from "./paths-BXCdLOXz.js";
const S = "user-group", ee = "user-group-root", Te = new E(
  "UmbUserGroupDetailStore"
), Le = "Umb.Repository.UserGroup.Detail", Me = "Umb.Store.UserGroup.Detail", Ie = new E("UmbUserGroupItemStore"), te = "Umb.Repository.UserGroupItem", Ce = "Umb.Store.UserGroupItem", Ge = "Umb.Repository.UserGroupCollection", Ne = "Umb.CollectionView.UserGroup.Table", Be = new E(
  "UmbCollectionContext"
), $e = "Umb.Collection.UserGroup", se = new Y(
  "Umb.Modal.UserGroupPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class re extends H {
  constructor(t) {
    super(t, te, se);
  }
}
var oe = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, h = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? ie(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && oe(t, s, o), o;
}, ae = (e, t, s) => t.has(e) || C("Cannot " + s), n = (e, t, s) => (ae(e, t, "read from private field"), s ? s.call(e) : t.get(e)), ne = (e, t, s) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), i;
let _ = class extends q(F, "") {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", ne(this, i, new re(this)), this._editUserGroupPath = "", this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && n(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && n(this, i).getSelection().length > this.max
    ), this.observe(n(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(n(this, i).selectedItems, (e) => this._items = e, "_observerItems"), new J(this, j).addAdditionalPath(S).onSetup(async () => ({ data: { entityType: S, preset: {} } })).observeRouteBuilder((e) => {
      this._editUserGroupPath = e({});
    });
  }
  set min(e) {
    n(this, i).min = e;
  }
  get min() {
    return n(this, i).min;
  }
  set max(e) {
    n(this, i).max = e;
  }
  get max() {
    return n(this, i).max;
  }
  set selection(e) {
    n(this, i).setSelection(e);
  }
  get selection() {
    return n(this, i).getSelection();
  }
  set value(e) {
    this.selection = Q(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return p`
			<uui-ref-list>${this._items?.map((e) => this._renderItem(e))}</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => n(this, i).openPicker()}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
  }
  _renderItem(e) {
    if (!e.unique) return;
    const t = `${this._editUserGroupPath}edit/${e.unique}`;
    return p`
			<umb-user-group-ref name="${V(e.name)}" href=${t}>
				${e.icon ? p`<umb-icon slot="icon" name=${e.icon}></umb-icon>` : X}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => n(this, i).requestRemoveItem(e.unique)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</umb-user-group-ref>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
_.styles = [
  A`
			#btn-add {
				width: 100%;
			}
		`
];
h([
  m({ type: Number })
], _.prototype, "min", 1);
h([
  m({ type: String, attribute: "min-message" })
], _.prototype, "minMessage", 2);
h([
  m({ type: Number })
], _.prototype, "max", 1);
h([
  m({ type: String, attribute: "min-message" })
], _.prototype, "maxMessage", 2);
h([
  m()
], _.prototype, "value", 1);
h([
  b()
], _.prototype, "_items", 2);
h([
  b()
], _.prototype, "_editUserGroupPath", 2);
_ = h([
  O("umb-user-group-input")
], _);
var le = Object.defineProperty, me = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, c = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? me(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && le(t, s, o), o;
}, P = (e, t, s) => t.has(e) || G("Cannot " + s), f = (e, t, s) => (P(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), N = (e, t, s, r) => (P(e, t, "write to private field"), t.set(e, s), s), u = (e, t, s) => (P(e, t, "access private method"), s), R, v, l, B, $, w, x, D, z, W, k, K;
let a = class extends Z(g) {
  constructor() {
    super(...arguments), y(this, l), y(this, R), y(this, v), this.documentRootAccess = !1, this.mediaRootAccess = !1, this._documentLabel = "", this._mediaLabel = "", this._sectionLabels = [], this._userPermissionLabels = [];
  }
  get documentStartNode() {
    return "";
  }
  set documentStartNode(e) {
    u(this, l, B).call(this, e);
  }
  get mediaStartNode() {
    return "";
  }
  set mediaStartNode(e) {
    u(this, l, $).call(this, e);
  }
  get sections() {
    return [];
  }
  set sections(e) {
    u(this, l, w).call(this, e);
  }
  get userPermissionAliases() {
    return [];
  }
  set userPermissionAliases(e) {
    u(this, l, x).call(this, e);
  }
  renderDetail() {
    return p`
			<small id="detail">${this.detail}</small>
			${u(this, l, D).call(this)}
			<slot name="detail"></slot>
		`;
  }
};
R = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
B = async function(e) {
  if (this.documentRootAccess || !e) return;
  f(this, R) || N(this, R, await L(
    this,
    "Umb.Repository.DocumentItem"
  ));
  const { error: t, asObservable: s } = await f(this, R).requestItems([e]);
  t || this.observe(
    s?.(),
    (r) => this._documentLabel = r?.[0].variants?.[0].name ?? e,
    "_observeDocumentStartNode"
  );
};
$ = async function(e) {
  if (this.mediaRootAccess || !e) return;
  f(this, v) || N(this, v, await L(
    this,
    "Umb.Repository.MediaItem"
  ));
  const { error: t, asObservable: s } = await f(this, v).requestItems([e]);
  t || this.observe(
    s?.(),
    (r) => this._mediaLabel = r?.[0].variants?.[0].name ?? e,
    "_observeMediaStartNode"
  );
};
w = async function(e) {
  e?.length ? this.observe(
    M.byTypeAndAliases("section", e),
    (t) => {
      this._sectionLabels = t.map(
        (s) => s.meta.label ? this.localize.string(s.meta.label) : s.name
      );
    },
    "_observeSections"
  ) : this.removeUmbControllerByAlias("_observeSections");
};
x = async function(e) {
  e?.length ? this.observe(
    M.byTypeAndAliases("entityUserPermission", e),
    (t) => {
      this._userPermissionLabels = t.map(
        (s) => s.meta.label ? this.localize.string(s.meta.label) : s.name
      );
    },
    "_observeUserPermission"
  ) : this.removeUmbControllerByAlias("_observeUserPermission");
};
D = function() {
  const e = this._sectionLabels.length, t = !!this._documentLabel || this.documentRootAccess, s = !!this._mediaLabel || this.mediaRootAccess, r = this._userPermissionLabels.length;
  if (!(!e && !t && !s && !r))
    return p`
			<div id="details">
				${u(this, l, z).call(this)} ${u(this, l, W).call(this)} ${u(this, l, k).call(this)}
				${u(this, l, K).call(this)}
			</div>
		`;
};
z = function() {
  if (this._sectionLabels.length)
    return p`
			<div>
				<small>
					<strong><umb-localize key="main_sections">Sections</umb-localize>:</strong>
					${this._sectionLabels.join(", ")}
				</small>
			</div>
		`;
};
W = function() {
  if (!(!this._documentLabel && !this.documentRootAccess))
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_startnode">Document Start Node</umb-localize>:</strong>
					${this.documentRootAccess ? this.localize.term("contentTypeEditor_allDocuments") : this._documentLabel}
				</small>
			</div>
		`;
};
k = function() {
  if (!(!this._mediaLabel && !this.mediaRootAccess))
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_mediastartnode">Media Start Node</umb-localize>:</strong>
					${this.mediaRootAccess ? this.localize.term("contentTypeEditor_allMediaItems") : this._mediaLabel}
				</small>
			</div>
		`;
};
K = function() {
  if (this._userPermissionLabels.length)
    return p`
			<div>
				<small>
					<strong><umb-localize key="user_userPermissions">User permissions</umb-localize>:</strong>
					${this._userPermissionLabels.join(", ")}
				</small>
			</div>
		`;
};
a.styles = [
  ...g.styles,
  A`
			#details {
				color: var(--uui-color-text-alt);
				margin-top: var(--uui-size-space-1);
			}

			#details > div {
				margin-bottom: var(--uui-size-space-1);
			}
		`
];
c([
  m({ type: Boolean })
], a.prototype, "documentRootAccess", 2);
c([
  m()
], a.prototype, "documentStartNode", 1);
c([
  m({ type: Boolean })
], a.prototype, "mediaRootAccess", 2);
c([
  m()
], a.prototype, "mediaStartNode", 1);
c([
  m({ type: Array })
], a.prototype, "sections", 1);
c([
  m({ type: Array, attribute: "user-permission-aliases" })
], a.prototype, "userPermissionAliases", 1);
c([
  b()
], a.prototype, "_documentLabel", 2);
c([
  b()
], a.prototype, "_mediaLabel", 2);
c([
  b()
], a.prototype, "_sectionLabels", 2);
c([
  b()
], a.prototype, "_userPermissionLabels", 2);
a = c([
  O("umb-user-group-ref")
], a);
const we = T.generateAbsolute({
  sectionName: I,
  entityType: S
}), xe = T.generateAbsolute({
  sectionName: I,
  entityType: ee
}), De = new E(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === S
), ze = "Umb.Workspace.UserGroup", We = "Umb.Workspace.UserGroupRoot";
export {
  se as U,
  $e as a,
  re as b,
  _ as c,
  a as d,
  S as e,
  ee as f,
  Be as g,
  Ge as h,
  Ne as i,
  we as j,
  xe as k,
  Le as l,
  Me as m,
  te as n,
  Ce as o,
  Ie as p,
  ze as q,
  De as r,
  We as s,
  Te as t
};
//# sourceMappingURL=constants-jrjjZjNa.js.map
