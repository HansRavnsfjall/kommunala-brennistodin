import { G as S } from "./input-upload-field.element-BKvVffkE.js";
import { T } from "./utils-Cn_XY6oh.js";
import { html as c, ifDefined as g, nothing as y, css as w, state as n, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbMediaTypeItemRepository as z, UMB_MEDIA_TYPE_ENTITY_TYPE as C } from "@umbraco-cms/backoffice/media-type";
import { UmbModalRouteRegistrationController as $ } from "@umbraco-cms/backoffice/router";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
import { UMB_WORKSPACE_MODAL as O } from "@umbraco-cms/backoffice/workspace";
import { createExtensionApiByAlias as P } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as k } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as N } from "@umbraco-cms/backoffice/settings";
var R = Object.defineProperty, W = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, s = (e, t, i, d) => {
  for (var o = d > 1 ? void 0 : d ? W(t, i) : t, u = e.length - 1, _; u >= 0; u--)
    (_ = e[u]) && (o = (d ? _(t, i, o) : _(o)) || o);
  return d && o && R(t, i, o), o;
}, f = (e, t, i) => t.has(e) || b("Cannot " + i), m = (e, t, i) => (f(e, t, "read from private field"), t.get(e)), h = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), B = (e, t, i, d) => (f(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (f(e, t, "access private method"), i), p, v, r, I, U, D, M, E;
let a = class extends x {
  constructor() {
    super(), h(this, r), this._mediaTypeUnique = void 0, this._editMediaTypePath = "", this._mediaUnique = "", h(this, p), h(this, v, new z(this)), this._createDate = null, this._updateDate = null, this._hasSettingsAccess = !1, new $(this, O).addAdditionalPath("media-type").onSetup(() => ({ data: { entityType: C, preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaTypePath = e({});
    }), P(this, k, [
      {
        config: {
          match: N
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]), this.consumeContext(S, (e) => {
      B(this, p, e), this._mediaTypeUnique = e?.getContentTypeId(), l(this, r, I).call(this), l(this, r, U).call(this);
    });
  }
  render() {
    return c`
			<div class="container">
				<umb-extension-slot id="workspace-info-apps" type="workspaceInfoApp"></umb-extension-slot>
			</div>
			<div class="container">
				<uui-box headline=${this.localize.term("general_general")} id="general-section"
					>${l(this, r, D).call(this)}</uui-box
				>
			</div>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
I = async function() {
  if (!m(this, p)) return;
  if (!this._mediaTypeUnique) throw new Error("Media type unique is not set");
  const { data: e } = await m(this, v).requestItems([this._mediaTypeUnique]);
  this._mediaTypeName = e?.[0].name, this._mediaTypeIcon = e?.[0].icon;
};
U = function() {
  this.observe(
    m(this, p)?.unique,
    (e) => {
      this._mediaUnique = e;
    },
    "_mediaUnique"
  ), this.observe(
    m(this, p)?.variants,
    (e) => {
      this._createDate = e?.[0]?.createDate, this._updateDate = e?.[0]?.updateDate;
    },
    "observeVariants"
  );
};
D = function() {
  return c`
			${l(this, r, M).call(this)} ${l(this, r, E).call(this)}
			<div class="general-item">
				<strong><umb-localize key="content_mediaType">Media Type</umb-localize></strong>
				<uui-ref-node-document-type
					standalone
					href=${g(
    this._hasSettingsAccess ? this._editMediaTypePath + "edit/" + this._mediaTypeUnique : void 0
  )}
					?readonly=${!this._hasSettingsAccess}
					name=${g(this._mediaTypeName)}>
					${this._mediaTypeIcon ? c`<umb-icon slot="icon" name=${this._mediaTypeIcon}></umb-icon>` : y}
				</uui-ref-node-document-type>
			</div>
			<div class="general-item">
				<strong><umb-localize key="template_id">Id</umb-localize></strong>
				<span>${this._mediaUnique}</span>
			</div>
		`;
};
M = function() {
  return this._createDate ? c`
			<div class="general-item">
				<strong><umb-localize key="content_createDate"></umb-localize></strong>
				<span>
					<umb-localize-date .date=${this._createDate} .options=${T}></umb-localize-date>
				</span>
			</div>
		` : y;
};
E = function() {
  return this._updateDate ? c`
			<div class="general-item">
				<strong><umb-localize key="content_updateDate"></umb-localize></strong>
				<span>
					<umb-localize-date .date=${this._updateDate} .options=${T}></umb-localize-date>
				</span>
			</div>
		` : y;
};
a.styles = [
  q,
  w`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			div.container {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-1);
			}

			//General section

			#general-section {
				display: flex;
				flex-direction: column;
			}

			.general-item {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			.general-item:not(:last-child) {
				margin-bottom: var(--uui-size-space-6);
			}

			uui-ref-node-document-type[readonly] {
				padding-top: 7px;
				padding-bottom: 7px;
			}
		`
];
s([
  n()
], a.prototype, "_mediaTypeUnique", 2);
s([
  n()
], a.prototype, "_mediaTypeName", 2);
s([
  n()
], a.prototype, "_mediaTypeIcon", 2);
s([
  n()
], a.prototype, "_editMediaTypePath", 2);
s([
  n()
], a.prototype, "_mediaUnique", 2);
s([
  n()
], a.prototype, "_createDate", 2);
s([
  n()
], a.prototype, "_updateDate", 2);
s([
  n()
], a.prototype, "_hasSettingsAccess", 2);
a = s([
  A("umb-media-workspace-view-info")
], a);
const j = a;
export {
  a as UmbMediaWorkspaceViewInfoElement,
  j as default
};
//# sourceMappingURL=media-workspace-view-info.element-B5A-fiWP.js.map
