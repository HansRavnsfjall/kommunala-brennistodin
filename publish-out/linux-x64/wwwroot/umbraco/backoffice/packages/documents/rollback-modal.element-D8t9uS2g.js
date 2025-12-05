import { e as T } from "./manifests-BP7S9LPy.js";
import { UmbRollbackRepository as X } from "./rollback.repository-Be4ZtX_9.js";
import { UmbDocumentDetailRepository as Y } from "./document-detail.repository-DnC9zsqm.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { diffWords as U } from "@umbraco-cms/backoffice/utils";
import { nothing as q, html as c, repeat as z, unsafeHTML as G, css as L, state as b, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as j } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as F } from "@umbraco-cms/backoffice/style";
import { UmbUserItemRepository as Q } from "@umbraco-cms/backoffice/user";
import { UMB_PROPERTY_DATASET_CONTEXT as K } from "@umbraco-cms/backoffice/property";
import { UMB_APP_LANGUAGE_CONTEXT as Z, UmbLanguageItemRepository as ee } from "@umbraco-cms/backoffice/language";
import { UMB_ENTITY_CONTEXT as te } from "@umbraco-cms/backoffice/entity";
import { UmbVariantId as ie } from "@umbraco-cms/backoffice/variant";
import "./document-variant-language-picker.element-azTXCKTU.js";
import { UMB_ACTION_EVENT_CONTEXT as re } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadStructureForEntityEvent as se, UmbEntityUpdatedEvent as ae } from "@umbraco-cms/backoffice/entity-action";
var le = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, p = (e, t, i, r) => {
  for (var s = r > 1 ? void 0 : r ? oe(t, i) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (r ? n(t, i, s) : n(s)) || s);
  return r && s && le(t, i, s), s;
}, E = (e, t, i) => t.has(e) || I("Cannot " + i), u = (e, t, i) => (E(e, t, "read from private field"), t.get(e)), f = (e, t, i) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), C = (e, t, i, r) => (E(e, t, "write to private field"), t.set(e, i), i), o = (e, t, i) => (E(e, t, "access private method"), i), m, V, _, d, y, g, l, v, k, $, D, P, M, R, N, x, S, O, A, B;
let h = class extends j {
  constructor() {
    super(), f(this, l), this._versions = [], this._selectedCulture = null, this._isInvariant = !0, this._availableVariants = [], this._diffs = [], f(this, m, new X(this)), f(this, V, new Q(this)), f(this, _, {
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit"
    }), f(this, d), f(this, y), f(this, g), this.consumeContext(K, (e) => {
      C(this, g, e?.getVariantId().culture ?? void 0), o(this, l, v).call(this);
    }), this.consumeContext(Z, (e) => {
      C(this, y, e?.getAppCulture()), o(this, l, v).call(this);
    }), this.consumeContext(te, async (e) => {
      if (!e) return;
      if (e.getEntityType() !== T)
        throw new Error(`Entity type is not ${T}`);
      const t = e.getUnique();
      if (!t)
        throw new Error("Document unique is not set");
      const { data: i } = await new Y(this).requestByUnique(t);
      if (!i) return;
      C(this, d, i);
      const r = u(this, d)?.variants ?? [];
      this._isInvariant = r.length === 1 && new ie(r[0].culture).isInvariant(), o(this, l, v).call(this);
      const s = r.map((n) => n.culture).filter((n) => n !== null), { data: a } = await new ee(this).requestItems(s);
      a ? this._availableVariants = a.map((n) => ({
        name: n.name,
        value: n.unique,
        selected: n.unique === this._selectedCulture
      })) : this._availableVariants = [], o(this, l, k).call(this);
    });
  }
  get currentVersionHeader() {
    return this.localize.date(this._selectedVersion?.date ?? /* @__PURE__ */ new Date(), u(this, _)) + " - " + this._selectedVersion?.user;
  }
  render() {
    return c`
			<umb-body-layout headline="Rollback">
				<div id="main">
					<div id="box-left">
						${this._availableVariants.length ? c`
									<uui-box id="language-box" headline=${this.localize.term("general_language")}>
										${o(this, l, S).call(this)}
									</uui-box>
								` : q}
						${o(this, l, O).call(this)}
					</div>
					${o(this, l, B).call(this)}
				</div>
				<umb-footer-layout slot="footer">
					<uui-button
						slot="actions"
						look="secondary"
						@click=${o(this, l, P)}
						label=${this.localize.term("general_cancel")}></uui-button>
					<uui-button
						slot="actions"
						look="primary"
						@click=${o(this, l, D)}
						label=${this.localize.term("actions_rollback")}
						?disabled=${!this._selectedVersion}></uui-button>
				</umb-footer-layout>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
v = function() {
  const e = u(this, g) ?? u(this, y) ?? null;
  this._selectedCulture = this._isInvariant ? null : e;
};
k = async function() {
  if (!u(this, d)?.unique)
    throw new Error("Document unique is not set");
  const { data: e } = await u(this, m).requestVersionsByDocumentId(
    u(this, d)?.unique,
    this._selectedCulture ?? void 0
  );
  if (!e) return;
  const t = [], i = [...new Set(e?.items.map((a) => a.user.id))], { data: r } = await u(this, V).requestItems(i);
  e?.items.forEach((a) => {
    a.isCurrentDraftVersion || t.push({
      date: a.versionDate,
      user: r?.find((n) => n.unique === a.user.id)?.name || this.localize.term("general_unknownUser"),
      isCurrentlyPublishedVersion: a.isCurrentPublishedVersion,
      id: a.id,
      preventCleanup: a.preventCleanup
    });
  }), this._versions = t;
  const s = t.find((a) => a.isCurrentlyPublishedVersion)?.id;
  s && o(this, l, $).call(this, s);
};
$ = async function(e) {
  const t = this._versions.find((r) => r.id === e);
  if (!t) {
    this._selectedVersion = void 0, this._diffs = [];
    return;
  }
  const { data: i } = await u(this, m).requestVersionById(e);
  if (!i) {
    this._selectedVersion = void 0, this._diffs = [];
    return;
  }
  this._selectedVersion = {
    date: t.date,
    user: t.user,
    name: i.variants.find((r) => r.culture === this._selectedCulture)?.name || i.variants[0].name,
    id: i.id,
    properties: i.values.filter((r) => r.culture === this._selectedCulture || !r.culture).map((r) => ({
      alias: r.alias,
      value: r.value
    }))
  }, await o(this, l, A).call(this);
};
D = async function() {
  if (!this._selectedVersion) return;
  const e = this._selectedVersion.id, t = this._selectedCulture ?? void 0, { error: i } = await u(this, m).rollback(e, t);
  if (i) return;
  const r = u(this, d)?.unique, s = u(this, d)?.entityType;
  if (!r || !s)
    throw new Error("Document unique or entity type is not set");
  const a = await this.getContext(re);
  if (!a)
    throw new Error("Action event context not found");
  const n = new se({ unique: r, entityType: s });
  a.dispatchEvent(n);
  const w = new ae({ unique: r, entityType: s });
  a.dispatchEvent(w), this.value = {}, this.modalContext?.submit();
};
P = function() {
  this.modalContext?.reject();
};
M = function(e) {
  o(this, l, $).call(this, e);
};
R = function(e, t, i) {
  e.preventDefault(), e.stopImmediatePropagation(), u(this, m).setPreventCleanup(t, i);
  const r = this._versions.find((s) => s.id === t);
  r && (r.preventCleanup = i, this.requestUpdate("_versions"));
};
N = function(e) {
  const t = e.target.value;
  this._selectedCulture = t.toString(), o(this, l, k).call(this);
};
x = function(e) {
  return e.replace(/^['"]|['"]$/g, "");
};
S = function() {
  return c`
			<uui-select
				id="language-select"
				@change=${o(this, l, N)}
				.options=${this._availableVariants}></uui-select>
		`;
};
O = function() {
  return this._versions.length ? c` <uui-box id="versions-box" headline=${this.localize.term("rollback_versions")}>
			${z(
    this._versions,
    (e) => e.id,
    (e) => c`
						<div
							@click=${() => o(this, l, M).call(this, e.id)}
							@keydown=${() => {
    }}
							class="rollback-item ${this._selectedVersion?.id === e.id ? "active" : ""}">
							<div>
								<p class="rollback-item-date">
									<umb-localize-date date="${e.date}" .options=${u(this, _)}></umb-localize-date>
								</p>
								<p>${e.user}</p>
								<p>${e.isCurrentlyPublishedVersion ? this.localize.term("rollback_currentPublishedVersion") : ""}</p>
							</div>
							<uui-button
								look="secondary"
								@click=${(t) => o(this, l, R).call(this, t, e.id, !e.preventCleanup)}
								label=${e.preventCleanup ? this.localize.term("contentTypeEditor_historyCleanupEnableCleanup") : this.localize.term("contentTypeEditor_historyCleanupPreventCleanup")}></uui-button>
						</div>
					`
  )}</uui-box
		>` : c`<uui-box headline=${this.localize.term("rollback_versions")}>No versions available</uui-box>`;
};
A = async function() {
  if (!this._selectedVersion) return;
  const e = u(this, d)?.values.filter(
    (s) => s.culture === this._selectedCulture || !s.culture
  );
  if (!e)
    throw new Error("Current property values are not set");
  const t = u(this, d)?.variants.find((s) => s.culture === this._selectedCulture)?.name;
  if (!t)
    throw new Error("Current name is not set");
  const i = [], r = U(t, this._selectedVersion.name);
  i.push({ alias: "name", diff: r }), this._selectedVersion.properties.forEach((s) => {
    const a = e.find((H) => H.alias === s.alias);
    if (!a) return;
    const n = o(this, l, x).call(this, JSON.stringify(a.value)), w = o(this, l, x).call(this, JSON.stringify(s.value)), W = U(n, w);
    i.push({ alias: s.alias, diff: W });
  }), this._diffs = [...i];
};
B = function() {
  return this._selectedVersion ? c`
			<uui-box headline=${this.currentVersionHeader} id="box-right">
				${G(this.localize.term("rollback_diffHelp"))}
				<uui-table>
					<uui-table-column style="width: 0"></uui-table-column>
					<uui-table-column></uui-table-column>

					<uui-table-head>
						<uui-table-head-cell>${this.localize.term("general_alias")}</uui-table-head-cell>
						<uui-table-head-cell>${this.localize.term("general_value")}</uui-table-head-cell>
					</uui-table-head>
					${z(
    this._diffs,
    (e) => e.alias,
    (e) => {
      const t = this._diffs.find((i) => i?.alias === e.alias);
      return c`
								<uui-table-row>
									<uui-table-cell>${e.alias}</uui-table-cell>
									<uui-table-cell>
										${t ? t.diff.map(
        (i) => i.added ? c`<span class="diff-added">${i.value}</span>` : i.removed ? c`<span class="diff-removed">${i.value}</span>` : i.value
      ) : q}
									</uui-table-cell>
								</uui-table-row>
							`;
    }
  )}
				</uui-table>
			</uui-box>
		` : c`
				<uui-box id="box-right" style="display: flex; align-items: center; justify-content: center;"
					>No selected version</uui-box
				>
			`;
};
h.styles = [
  F,
  L`
			:host {
				color: var(--uui-color-text);
			}

			#language-box {
				margin-bottom: var(--uui-size-space-2);
			}

			#language-select {
				width: 100%;
			}

			uui-table {
				--uui-table-cell-padding: var(--uui-size-space-1) var(--uui-size-space-4);
				margin-top: var(--uui-size-space-5);
			}
			uui-table-head-cell:first-child {
				border-top-left-radius: var(--uui-border-radius);
			}
			uui-table-head-cell:last-child {
				border-top-right-radius: var(--uui-border-radius);
			}
			uui-table-head-cell {
				background-color: var(--uui-color-surface-alt);
			}
			uui-table-head-cell:last-child,
			uui-table-cell:last-child {
				border-right: 1px solid var(--uui-color-border);
			}
			uui-table-head-cell,
			uui-table-cell {
				border-top: 1px solid var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
			}
			uui-table-row:last-child uui-table-cell {
				border-bottom: 1px solid var(--uui-color-border);
			}
			uui-table-row:last-child uui-table-cell:last-child {
				border-bottom-right-radius: var(--uui-border-radius);
			}
			uui-table-row:last-child uui-table-cell:first-child {
				border-bottom-left-radius: var(--uui-border-radius);
			}

			.diff-added,
			ins {
				background-color: #00c43e63;
			}
			.diff-removed,
			del {
				background-color: #ff35356a;
			}
			.rollback-item {
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: var(--uui-size-space-5);
				cursor: pointer;
			}
			.rollback-item::after {
				content: '';
				position: absolute;
				inset: 2px;
				display: block;
				border: 2px solid transparent;
				pointer-events: none;
			}
			.rollback-item.active::after,
			.rollback-item:hover::after {
				border-color: var(--uui-color-selected);
			}
			.rollback-item:not(.active):hover::after {
				opacity: 0.5;
			}
			.rollback-item p {
				margin: 0;
				opacity: 0.5;
			}
			p.rollback-item-date {
				opacity: 1;
			}
			.rollback-item uui-button {
				white-space: nowrap;
			}

			#main {
				display: flex;
				gap: var(--uui-size-space-5);
				width: 100%;
				height: 100%;
			}

			#versions-box {
				--uui-box-default-padding: 0;
			}

			#box-left {
				max-width: 500px;
				flex: 1;
				overflow: auto;
				height: 100%;
			}

			#box-right {
				flex: 1;
				overflow: auto;
				height: 100%;
			}
		`
];
p([
  b()
], h.prototype, "_versions", 2);
p([
  b()
], h.prototype, "_selectedVersion", 2);
p([
  b()
], h.prototype, "_selectedCulture", 2);
p([
  b()
], h.prototype, "_isInvariant", 2);
p([
  b()
], h.prototype, "_availableVariants", 2);
p([
  b()
], h.prototype, "_diffs", 2);
h = p([
  J("umb-rollback-modal")
], h);
const ke = h;
export {
  h as UmbRollbackModalElement,
  ke as default
};
//# sourceMappingURL=rollback-modal.element-D8t9uS2g.js.map
