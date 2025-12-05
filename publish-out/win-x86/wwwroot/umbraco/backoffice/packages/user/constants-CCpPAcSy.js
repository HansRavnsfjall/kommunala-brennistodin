import { UmbContextToken as E } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import { UmbManagementApiItemDataCache as Y } from "@umbraco-cms/backoffice/management-api";
import { UmbModalToken as H } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as V } from "@umbraco-cms/backoffice/picker-input";
import { html as p, ifDefined as X, nothing as q, css as P, property as m, state as b, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as F, UUIRefNodeElement as g } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as j } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as J, UMB_WORKSPACE_PATH_PATTERN as T } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as Q } from "@umbraco-cms/backoffice/router";
import { splitStringToArray as Z } from "@umbraco-cms/backoffice/utils";
import { UmbElementMixin as ee } from "@umbraco-cms/backoffice/element-api";
import { createExtensionApiByAlias as M, umbExtensionsRegistry as I } from "@umbraco-cms/backoffice/extension-registry";
import { U as L } from "./paths-BXCdLOXz.js";
const f = "user-group", te = "user-group-root", Me = new E(
  "UmbUserGroupDetailStore"
), Ie = "Umb.Repository.UserGroup.Detail", Le = "Umb.Store.UserGroup.Detail", Ce = new Y(), Ge = new E("UmbUserGroupItemStore"), se = "Umb.Repository.UserGroupItem", Ne = "Umb.Store.UserGroupItem", we = "Umb.Repository.UserGroupCollection", Be = "Umb.CollectionView.UserGroup.Table", $e = new E(
  "UmbCollectionContext"
), xe = "Umb.Collection.UserGroup", re = new H(
  "Umb.Modal.UserGroupPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class oe extends V {
  constructor(t) {
    super(t, se, re);
  }
}
var ie = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, h = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? ae(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && ie(t, s, o), o;
}, ne = (e, t, s) => t.has(e) || C("Cannot " + s), n = (e, t, s) => (ne(e, t, "read from private field"), s ? s.call(e) : t.get(e)), le = (e, t, s) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), i;
let _ = class extends F(j, "") {
  constructor() {
    super(), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", le(this, i, new oe(this)), this._editUserGroupPath = "", this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && n(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && n(this, i).getSelection().length > this.max
    ), this.observe(n(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(n(this, i).selectedItems, (e) => this._items = e, "_observerItems"), new Q(this, J).addAdditionalPath(f).onSetup(async () => ({ data: { entityType: f, preset: {} } })).observeRouteBuilder((e) => {
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
    this.selection = Z(e);
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
			<umb-user-group-ref name="${X(e.name)}" href=${t}>
				${e.icon ? p`<umb-icon slot="icon" name=${e.icon}></umb-icon>` : q}
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
  P`
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
var me = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, c = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? ce(t, s) : t, d = e.length - 1, U; d >= 0; d--)
    (U = e[d]) && (o = (r ? U(t, s, o) : U(o)) || o);
  return r && o && me(t, s, o), o;
}, A = (e, t, s) => t.has(e) || G("Cannot " + s), S = (e, t, s) => (A(e, t, "read from private field"), t.get(e)), y = (e, t, s) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), N = (e, t, s, r) => (A(e, t, "write to private field"), t.set(e, s), s), u = (e, t, s) => (A(e, t, "access private method"), s), R, v, l, w, B, $, x, D, z, W, k, K;
let a = class extends ee(g) {
  constructor() {
    super(...arguments), y(this, l), y(this, R), y(this, v), this.documentRootAccess = !1, this.mediaRootAccess = !1, this._documentLabel = "", this._mediaLabel = "", this._sectionLabels = [], this._userPermissionLabels = [];
  }
  get documentStartNode() {
    return "";
  }
  set documentStartNode(e) {
    u(this, l, w).call(this, e);
  }
  get mediaStartNode() {
    return "";
  }
  set mediaStartNode(e) {
    u(this, l, B).call(this, e);
  }
  get sections() {
    return [];
  }
  set sections(e) {
    u(this, l, $).call(this, e);
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
w = async function(e) {
  if (this.documentRootAccess || !e) return;
  S(this, R) || N(this, R, await M(
    this,
    "Umb.Repository.DocumentItem"
  ));
  const { error: t, asObservable: s } = await S(this, R).requestItems([e]);
  t || this.observe(
    s?.(),
    (r) => this._documentLabel = r?.[0].variants?.[0].name ?? e,
    "_observeDocumentStartNode"
  );
};
B = async function(e) {
  if (this.mediaRootAccess || !e) return;
  S(this, v) || N(this, v, await M(
    this,
    "Umb.Repository.MediaItem"
  ));
  const { error: t, asObservable: s } = await S(this, v).requestItems([e]);
  t || this.observe(
    s?.(),
    (r) => this._mediaLabel = r?.[0].variants?.[0].name ?? e,
    "_observeMediaStartNode"
  );
};
$ = async function(e) {
  e?.length ? this.observe(
    I.byTypeAndAliases("section", e),
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
    I.byTypeAndAliases("entityUserPermission", e),
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
  P`
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
const De = T.generateAbsolute({
  sectionName: L,
  entityType: f
}), ze = T.generateAbsolute({
  sectionName: L,
  entityType: te
}), We = new E(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === f
), ke = "Umb.Workspace.UserGroup", Ke = "Umb.Workspace.UserGroupRoot";
export {
  re as U,
  xe as a,
  oe as b,
  _ as c,
  a as d,
  f as e,
  te as f,
  $e as g,
  we as h,
  Be as i,
  De as j,
  ze as k,
  Ie as l,
  Le as m,
  se as n,
  Ne as o,
  Ge as p,
  ke as q,
  We as r,
  Ke as s,
  Me as t,
  Ce as u
};
//# sourceMappingURL=constants-CCpPAcSy.js.map
