import { r as w, k as ae, l as oe, e as ne, q as le, f as ue } from "./constants-jrjjZjNa.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/entity-item";
import { state as u, customElement as S, html as d, nothing as g, ifDefined as ce, css as pe } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E, umbFocus as he } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { umbOpenModal as me } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as de } from "@umbraco-cms/backoffice/icon";
import { umbExtensionsRegistry as _e } from "@umbraco-cms/backoffice/extension-registry";
import { UmbChangeEvent as ge } from "@umbraco-cms/backoffice/event";
import { filterFrozenArray as be } from "@umbraco-cms/backoffice/observable-api";
import { UmbEntityDetailWorkspaceContextBase as fe, UmbWorkspaceIsNewRedirectController as ve } from "@umbraco-cms/backoffice/workspace";
var ye = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, U = (e, t, s, o) => {
  for (var r = o > 1 ? void 0 : o ? Pe(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (o ? p(t, s, r) : p(r)) || r);
  return o && r && ye(t, s, r), r;
}, R = (e, t, s) => t.has(e) || M("Cannot " + s), x = (e, t, s) => (R(e, t, "read from private field"), t.get(e)), N = (e, t, s) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), $e = (e, t, s, o) => (R(e, t, "write to private field"), t.set(e, s), s), A = (e, t, s) => (R(e, t, "access private method"), s), f, v, L, W, B;
let y = class extends E {
  constructor() {
    super(), N(this, v), this._groups = [], N(this, f), A(this, v, L).call(this), this.consumeContext(w, (e) => {
      $e(this, f, e), this.observe(
        x(this, f)?.fallbackPermissions,
        (t) => {
          this._fallBackPermissions = t;
        },
        "umbUserGroupEntityUserPermissionsObserver"
      );
    });
  }
  render() {
    return d` ${this._groups.map((e) => A(this, v, B).call(this, e))}`;
  }
};
f = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
L = function() {
  this.observe(
    _e.byType("entityUserPermission"),
    (e) => {
      const t = [...new Set(e.flatMap((s) => s.forEntityTypes))];
      this._groups = t.map((s) => ({
        entityType: s,
        headline: this.localize.term(`user_permissionsEntityGroup_${s}`)
      })).sort((s, o) => s.headline.localeCompare(o.headline));
    },
    "umbUserPermissionsObserver"
  );
};
W = function(e) {
  e.stopPropagation();
  const s = e.target.allowedVerbs;
  if (s == null) throw new Error("The verbs are not defined");
  x(this, f)?.setFallbackPermissions(s);
};
B = function(e) {
  return d`
			<h4>${e.headline}</h4>
			<umb-input-entity-user-permission
				.entityType=${e.entityType}
				.allowedVerbs=${this._fallBackPermissions || []}
				@change=${A(this, v, W)}></umb-input-entity-user-permission>
		`;
};
y.styles = [z];
U([
  u()
], y.prototype, "_fallBackPermissions", 2);
U([
  u()
], y.prototype, "_groups", 2);
y = U([
  S("umb-user-group-entity-user-permission-list")
], y);
var Ae = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, T = (e, t, s, o) => {
  for (var r = o > 1 ? void 0 : o ? Ce(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (o ? p(t, s, r) : p(r)) || r);
  return o && r && Ae(t, s, r), r;
}, q = (e, t, s) => t.has(e) || D("Cannot " + s), b = (e, t, s) => (q(e, t, "read from private field"), t.get(e)), $ = (e, t, s) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Oe = (e, t, s, o) => (q(e, t, "write to private field"), t.set(e, s), s), _, C, O;
let P = class extends E {
  constructor() {
    super(), $(this, _), $(this, C, (e) => {
      e.stopPropagation();
      const t = e.target, s = t.manifest?.meta.schemaType;
      if (!s) throw new Error("Schema type is not available");
      const o = be(
        b(this, _)?.getPermissions() || [],
        (p) => p.$type !== s
      ), r = t.permissions || [], c = [...o, ...r];
      b(this, _)?.setPermissions(c);
    }), $(this, O, (e) => {
      if (!this._userGroupPermissions) return g;
      if (!e.component) return g;
      const t = e.manifest;
      if (!t) throw new Error("Manifest is not available");
      const s = t.meta.labelKey ? this.localize.term(t.meta.labelKey) : t.meta.label, o = t.meta.descriptionKey ? this.localize.term(t.meta.descriptionKey) : t.meta.description, r = t.meta.schemaType, c = this._userGroupPermissions.filter((p) => p.$type === r) || [];
      return e.component.permissions = c, e.component.fallbackPermissions = this._userGroupFallbackPermissions, e.component.addEventListener(ge.TYPE, b(this, C)), d`
			<umb-property-layout .label=${s || ""} .description=${o || ""}>
				<div slot="editor">${e.component}</div>
			</umb-property-layout>
		`;
    }), this.consumeContext(w, (e) => {
      Oe(this, _, e), this.observe(
        b(this, _)?.data,
        (t) => {
          this._userGroupPermissions = t?.permissions, this._userGroupFallbackPermissions = t?.fallbackPermissions;
        },
        "umbUserGroupGranularPermissionObserver"
      );
    });
  }
  render() {
    if (this._userGroupPermissions)
      return d`<umb-extension-slot
			type="userGranularPermission"
			.props=${{ fallbackPermissions: this._userGroupFallbackPermissions }}
			.renderMethod=${b(this, O)}></umb-extension-slot>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
T([
  u()
], P.prototype, "_userGroupPermissions", 2);
T([
  u()
], P.prototype, "_userGroupFallbackPermissions", 2);
P = T([
  S("umb-user-group-granular-permission-list")
], P);
var we = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, m = (e, t, s, o) => {
  for (var r = o > 1 ? void 0 : o ? Se(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (o ? p(t, s, r) : p(r)) || r);
  return o && r && we(t, s, r), r;
}, k = (e, t, s) => t.has(e) || I("Cannot " + s), a = (e, t, s) => (k(e, t, "read from private field"), t.get(e)), G = (e, t, s) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ee = (e, t, s, o) => (k(e, t, "write to private field"), t.set(e, s), s), h = (e, t, s) => (k(e, t, "access private method"), s), i, l, F, K, H, Y, V, X, J, Q, Z, j, ee, te, se, ie, re;
let n = class extends E {
  constructor() {
    super(), G(this, l), this._isNew = !1, this._aliasCanBeChanged = !0, this._icon = null, this._sections = [], this._languages = [], this._hasAccessToAllLanguages = !1, this._documentRootAccess = !1, this._mediaRootAccess = !1, G(this, i), this.consumeContext(w, (e) => {
      Ee(this, i, e), h(this, l, F).call(this);
    });
  }
  render() {
    return d`
			<umb-entity-detail-workspace-editor class="uui-text" back-path=${ae}>
				${h(this, l, ee).call(this)} ${h(this, l, te).call(this)}
			</umb-entity-detail-workspace-editor>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
F = function() {
  a(this, i) && (this.observe(a(this, i).isNew, (e) => this._isNew = e, "_observeIsNew"), this.observe(a(this, i).unique, (e) => this._unique = e ?? void 0, "_observeUnique"), this.observe(a(this, i).name, (e) => this._name = e, "_observeName"), this.observe(a(this, i).alias, (e) => this._alias = e, "_observeAlias"), this.observe(
    a(this, i).aliasCanBeChanged,
    (e) => this._aliasCanBeChanged = e,
    "_observeAliasCanBeChanged"
  ), this.observe(a(this, i).icon, (e) => this._icon = e, "_observeIcon"), this.observe(a(this, i).sections, (e) => this._sections = e, "_observeSections"), this.observe(a(this, i).languages, (e) => this._languages = e, "_observeLanguages"), this.observe(
    a(this, i).hasAccessToAllLanguages,
    (e) => this._hasAccessToAllLanguages = e,
    "_observeHasAccessToAllLanguages"
  ), this.observe(
    a(this, i).documentRootAccess,
    (e) => this._documentRootAccess = e,
    "_observeDocumentRootAccess"
  ), this.observe(
    a(this, i).documentStartNode,
    (e) => this._documentStartNode = e,
    "_observeDocumentStartNode"
  ), this.observe(
    a(this, i).mediaRootAccess,
    (e) => this._mediaRootAccess = e,
    "_observeMediaRootAccess"
  ), this.observe(
    a(this, i).mediaStartNode,
    (e) => this._mediaStartNode = e,
    "_observeMediaStartNode"
  ));
};
K = function(e) {
  e.stopPropagation();
  const t = e.target;
  a(this, i)?.updateProperty("sections", t.selection);
};
H = function(e) {
  e.stopPropagation();
  const t = e.target;
  a(this, i)?.updateProperty("hasAccessToAllLanguages", t.checked);
};
Y = function(e) {
  e.stopPropagation();
  const t = e.target;
  a(this, i)?.updateProperty("languages", t.selection);
};
V = function(e) {
  e.stopPropagation();
  const t = e.target;
  a(this, i)?.updateProperty("documentRootAccess", t.checked), a(this, i)?.updateProperty("documentStartNode", null);
};
X = function(e) {
  e.stopPropagation();
  const s = e.target.selection?.[0];
  a(this, i)?.updateProperty("documentStartNode", s ? { unique: s } : null);
};
J = function(e) {
  e.stopPropagation();
  const t = e.target;
  a(this, i)?.updateProperty("mediaRootAccess", t.checked), a(this, i)?.updateProperty("mediaStartNode", null);
};
Q = function(e) {
  e.stopPropagation();
  const s = e.target.selection?.[0];
  a(this, i)?.updateProperty("mediaStartNode", s ? { unique: s } : null);
};
Z = async function() {
  const [e, t] = this._icon?.replace("color-", "")?.split(" ") ?? [], s = await me(this, de, {
    value: {
      icon: e,
      color: t
    }
  }).catch(() => {
  });
  s && (s.icon && s.color ? a(this, i)?.updateProperty("icon", `${s.icon} color-${s.color}`) : s.icon && a(this, i)?.updateProperty("icon", s.icon));
};
j = function(e) {
  a(this, i)?.updateProperty("name", e.target.value ?? ""), a(this, i)?.updateProperty("alias", e.target.alias ?? "");
};
ee = function() {
  return d`
			<div id="header" slot="header">
				<uui-button id="icon" compact label="icon" look="outline" @click=${h(this, l, Z)}>
					<umb-icon name=${this._icon || ""}></umb-icon>
				</uui-button>

				<umb-input-with-alias
					id="name"
					label=${this.localize.term("placeholders_entername")}
					.value=${this._name}
					alias=${ce(this._alias)}
					?auto-generate-alias=${this._isNew}
					?alias-readonly=${this._aliasCanBeChanged === !1}
					@change=${h(this, l, j)}
					${he()}>
				</umb-input-with-alias>
			</div>
		`;
};
te = function() {
  return this._unique ? d`
			<div id="main">
				<umb-stack>
					<uui-box>
						<div slot="headline"><umb-localize key="user_assignAccess"></umb-localize></div>

						<umb-property-layout
							label=${this.localize.term("main_sections")}
							description=${this.localize.term("user_sectionsHelp")}>
							<umb-input-section
								slot="editor"
								.selection=${this._sections}
								@change=${h(this, l, K)}></umb-input-section>
						</umb-property-layout>

						${h(this, l, se).call(this)} ${h(this, l, ie).call(this)} ${h(this, l, re).call(this)}
					</uui-box>

					<uui-box>
						<div slot="headline"><umb-localize key="user_permissionsDefault"></umb-localize></div>

						<umb-property-layout
							label=${this.localize.term("user_entityPermissionsLabel")}
							description=${this.localize.term("user_entityPermissionsDescription")}>
							<umb-user-group-entity-user-permission-list slot="editor"></umb-user-group-entity-user-permission-list>
						</umb-property-layout>
					</uui-box>

					<uui-box>
						<div slot="headline"><umb-localize key="user_permissionsGranular"></umb-localize></div>
						<umb-user-group-granular-permission-list></umb-user-group-granular-permission-list>
					</uui-box>
				</umb-stack>
			</div>
		` : g;
};
se = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("treeHeaders_languages")}
				description=${this.localize.term("user_languagesHelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllLanguages")}"
						.checked=${this._hasAccessToAllLanguages}
						@change=${h(this, l, H)}></uui-toggle>

					${this._hasAccessToAllLanguages === !1 ? d`
								<umb-input-language
									.selection=${this._languages}
									@change=${h(this, l, Y)}></umb-input-language>
							` : g}
				</div>
			</umb-property-layout>
		`;
};
ie = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectContentStartNode")}
				description=${this.localize.term("user_startnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllDocuments")}"
						.checked=${this._documentRootAccess}
						@change=${h(this, l, V)}></uui-toggle>
				</div>

				${this._documentRootAccess === !1 ? d`
							<umb-input-document
								slot="editor"
								max="1"
								.selection=${this._documentStartNode?.unique ? [this._documentStartNode.unique] : []}
								@change=${h(this, l, X)}></umb-input-document>
						` : g}
			</umb-property-layout>
		`;
};
re = function() {
  return d`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectMediaStartNode")}
				description=${this.localize.term("user_mediastartnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllMedia")}"
						.checked=${this._mediaRootAccess}
						@change=${h(this, l, J)}></uui-toggle>
				</div>

				${this._mediaRootAccess === !1 ? d`
							<umb-input-media
								slot="editor"
								max="1"
								.selection=${this._mediaStartNode?.unique ? [this._mediaStartNode.unique] : []}
								@change=${h(this, l, Q)}></umb-input-media>
						` : g}
			</umb-property-layout>
		`;
};
n.styles = [
  z,
  pe`
			:host {
				display: block;
				height: 100%;
			}

			#header {
				display: flex;
				flex: 1 1 auto;
				gap: var(--uui-size-space-2);
				align-items: center;
			}

			#icon {
				font-size: var(--uui-size-5);
				height: 30px;
				width: 30px;
			}

			#name {
				width: 100%;
				flex: 1 1 auto;
				align-items: center;
			}

			#main {
				padding: var(--uui-size-layout-1);
			}

			uui-input {
				width: 100%;
			}
		`
];
m([
  u()
], n.prototype, "_isNew", 2);
m([
  u()
], n.prototype, "_unique", 2);
m([
  u()
], n.prototype, "_name", 2);
m([
  u()
], n.prototype, "_alias", 2);
m([
  u()
], n.prototype, "_aliasCanBeChanged", 2);
m([
  u()
], n.prototype, "_icon", 2);
m([
  u()
], n.prototype, "_sections", 2);
m([
  u()
], n.prototype, "_languages", 2);
m([
  u()
], n.prototype, "_hasAccessToAllLanguages", 2);
m([
  u()
], n.prototype, "_documentStartNode", 2);
m([
  u()
], n.prototype, "_documentRootAccess", 2);
m([
  u()
], n.prototype, "_mediaStartNode", 2);
m([
  u()
], n.prototype, "_mediaRootAccess", 2);
n = m([
  S("umb-user-group-workspace-editor")
], n);
class Ke extends fe {
  constructor(t) {
    super(t, {
      workspaceAlias: le,
      entityType: ne,
      detailRepositoryAlias: oe
    }), this.name = this._data.createObservablePartOfCurrent((s) => s?.name || ""), this.alias = this._data.createObservablePartOfCurrent((s) => s?.alias || ""), this.aliasCanBeChanged = this._data.createObservablePartOfCurrent((s) => s?.aliasCanBeChanged), this.icon = this._data.createObservablePartOfCurrent((s) => s?.icon || null), this.sections = this._data.createObservablePartOfCurrent((s) => s?.sections || []), this.languages = this._data.createObservablePartOfCurrent((s) => s?.languages || []), this.hasAccessToAllLanguages = this._data.createObservablePartOfCurrent(
      (s) => s?.hasAccessToAllLanguages || !1
    ), this.documentStartNode = this._data.createObservablePartOfCurrent((s) => s?.documentStartNode || null), this.documentRootAccess = this._data.createObservablePartOfCurrent((s) => s?.documentRootAccess || !1), this.mediaStartNode = this._data.createObservablePartOfCurrent((s) => s?.mediaStartNode || null), this.mediaRootAccess = this._data.createObservablePartOfCurrent((s) => s?.mediaRootAccess || !1), this.fallbackPermissions = this._data.createObservablePartOfCurrent((s) => s?.fallbackPermissions || []), this.permissions = this._data.createObservablePartOfCurrent((s) => s?.permissions || []), this.routes.setRoutes([
      {
        path: "create",
        component: n,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: ue, unique: null } }), new ve(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: n,
        setup: (s, o) => {
          const r = o.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  updateProperty(t, s) {
    this._data.updateCurrent({ [t]: s });
  }
  /**
   * Gets the user group user permissions.
   * @memberof UmbUserGroupWorkspaceContext
   */
  getPermissions() {
    return this._data.getCurrent()?.permissions ?? [];
  }
  /**
   * Sets the user group user permissions.
   * @param {Array<UmbUserPermissionModel>} permissions
   * @memberof UmbUserGroupWorkspaceContext
   */
  setPermissions(t) {
    this._data.updateCurrent({ permissions: t });
  }
  /**
   * Gets the user group fallback permissions.
   * @memberof UmbUserGroupWorkspaceContext
   */
  getFallbackPermissions() {
    return this._data.getCurrent()?.fallbackPermissions ?? [];
  }
  /**
   * Sets the user group fallback permissions.
   * @param {Array<string>} fallbackPermissions
   * @memberof UmbUserGroupWorkspaceContext
   */
  setFallbackPermissions(t) {
    this._data.updateCurrent({ fallbackPermissions: t });
  }
}
export {
  Ke as UmbUserGroupWorkspaceContext,
  Ke as api
};
//# sourceMappingURL=user-group-workspace.context-DK8EyHbY.js.map
