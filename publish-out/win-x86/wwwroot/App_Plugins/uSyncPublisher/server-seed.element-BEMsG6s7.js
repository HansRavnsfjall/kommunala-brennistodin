import { nothing as b, html as n, css as E, state as l, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { u as r, n as v, o as y, P as S, U as f } from "./index-DFDZ_Jke.js";
import { UMB_MODAL_MANAGER_CONTEXT as $ } from "@umbraco-cms/backoffice/modal";
import { UMB_DATA_TYPE_ENTITY_TYPE as P } from "@umbraco-cms/backoffice/data-type";
import { UMB_TEMPLATE_ENTITY_TYPE as M } from "@umbraco-cms/backoffice/template";
import { UMB_DOCUMENT_ENTITY_TYPE as Y } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as U } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_TYPE_ENTITY_TYPE as C } from "@umbraco-cms/backoffice/member-type";
import { UMB_MEDIA_TYPE_ENTITY_TYPE as I } from "@umbraco-cms/backoffice/media-type";
import { UMB_DOCUMENT_BLUEPRINT_ENTITY_TYPE as N } from "@umbraco-cms/backoffice/document-blueprint";
import { UMB_LANGUAGE_ENTITY_TYPE as g } from "@umbraco-cms/backoffice/language";
import { UMB_PARTIAL_VIEW_ENTITY_TYPE as B } from "@umbraco-cms/backoffice/partial-view";
import { UMB_SCRIPT_ENTITY_TYPE as z } from "@umbraco-cms/backoffice/script";
import { UMB_STYLESHEET_ENTITY_TYPE as A } from "@umbraco-cms/backoffice/stylesheet";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as D } from "@umbraco-cms/backoffice/document-type";
var w = Object.defineProperty, x = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, u = (e, t, s, o) => {
  for (var a = o > 1 ? void 0 : o ? x(t, s) : t, d = e.length - 1, c; d >= 0; d--)
    (c = e[d]) && (a = (o ? c(t, s, a) : c(a)) || a);
  return o && a && w(t, s, a), a;
}, G = (e, t, s) => t.has(e) || _("Cannot " + s), O = (e, t, s) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), L = (e, t, s) => (G(e, t, "access private method"), s), m, p;
let i = class extends h {
  constructor() {
    super(), O(this, m), this.loaded = !1, this._selectedEntities = [
      `umb://${D}/${r.emptyGuid}`,
      `umb://${P}/${r.emptyGuid}`,
      `umb://${C}/${r.emptyGuid}`,
      `umb://${I}/${r.emptyGuid}`,
      `umb://${N}/${r.emptyGuid}`,
      `umb://${g}/${r.emptyString}`,
      `umb://dictionary-item/${r.emptyGuid}`,
      `umb://${M}/${r.emptyString}`,
      `umb://${B}/${r.emptyString}`,
      `umb://${z}/${r.emptyString}`,
      `umb://${A}/${r.emptyString}`,
      `umb://${Y}/${r.emptyGuid}`,
      `umb://${U}/${r.emptyGuid}`
    ];
  }
  async connectedCallback() {
    await super.connectedCallback();
    const e = (await v.getSiteStatus()).data;
    this.status = e, this.status.seedServerUrl && (this._server = (await y.getServerByUrl({
      query: {
        url: this.status.seedServerUrl
      }
    })).data, this.loaded = !0);
  }
  render() {
    var e;
    return this.loaded ? n`<umb-body-layout>
			${((e = this.status) == null ? void 0 : e.isEnabled) === !1 ? this.renderDisabled() : this.renderEnabled()}</umb-body-layout
		>` : b;
  }
  renderDisabled() {
    return n`<uui-box
			><umb-localize key="usyncpublish_seedDisabled"></umb-localize
		></uui-box>`;
  }
  renderEnabled() {
    var e;
    return n`<uui-box .headline=${this.localize.term("usyncpublish_seedHeading")}>
				<umb-localize key="usyncpublish_seedIntro"></umb-localize>
			</uui-box>
			${this.renderContentStatus()}
			<div class="server">
				<h4>Seed this site from ${(e = this._server) == null ? void 0 : e.alias} ?</h4>
				<usync-publisher-server-button
					.server=${this._server}
					.performCheck=${!0}
					.selectDisabled=${!0}
					@server-selected=${() => L(this, m, p).call(this)}></usync-publisher-server-button>
			</div> `;
  }
  renderContentStatus() {
    var e;
    return (e = this.status) != null && e.hasContentOrMedia ? n`<div class="alert alert-warning">
					<umb-localize key="usyncpublish_seedIntroContent"></umb-localize>
				</div>` : n`<div class="alert alert-info">
					<umb-localize key="usyncpublish_seedIntroNoContent"></umb-localize>
				</div>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
p = async function() {
  const e = await this.getContext($);
  if (!e) return;
  const t = this._selectedEntities[0].split("/")[2], s = S.SETTINGS_PULL;
  (await e.open(
    this,
    f,
    {
      data: {
        server: this._server,
        action: s,
        // @ts-expect-error - udis are strings in this instance its ok.
        items: this._selectedEntities,
        entityType: t,
        mode: s
      }
    }
  )).onSubmit().catch(() => {
  });
};
i.styles = E`
		.alert {
			margin: var(--uui-size-space-4) 0;
			padding: var(--uui-size-space-4);
			border: 1px solid transparent;
			border-radius: var(--uui-border-radius);
		}

		.alert-warning {
			background-color: var(--uui-color-warning);
			color: var(--uui-color-warning-contrast);
		}

		.alert-info {
			background-color: var(--uui-color-border-standalone);
		}

		.server {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			padding: var(--uui-size-space-4);
			font-size: var(--uui-size-space-5);
		}
	`;
u([
  l()
], i.prototype, "loaded", 2);
u([
  l()
], i.prototype, "status", 2);
u([
  l()
], i.prototype, "_selectedEntities", 2);
u([
  l()
], i.prototype, "_server", 2);
i = u([
  T("usync-publisher-server-seed")
], i);
const se = i;
export {
  se as default,
  i as uSyncPublisherServerSeed
};
//# sourceMappingURL=server-seed.element-BEMsG6s7.js.map
