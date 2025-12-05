import { U as k } from "./document-audit-log.repository-CxaYaS1s.js";
import { g as I } from "./manifests-BfVrApfB.js";
import { T as O } from "./utils-CufTuDI9.js";
import { when as w, html as p, repeat as x, nothing as V, css as L, state as g, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbPaginationManager as B } from "@umbraco-cms/backoffice/utils";
import { UmbRequestReloadStructureForEntityEvent as M } from "@umbraco-cms/backoffice/entity-action";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UmbUserItemRepository as H } from "@umbraco-cms/backoffice/user";
import { UMB_ACTION_EVENT_CONTEXT as z } from "@umbraco-cms/backoffice/action";
const s = Object.freeze({
  ASSIGN_DOMAIN: "AssignDomain",
  CONTENT_VERSION_ENABLE_CLEANUP: "ContentVersionEnableCleanup",
  CONTENT_VERSION_PREVENT_CLEANUP: "ContentVersionPreventCleanup",
  COPY: "Copy",
  CUSTOM: "Custom",
  DELETE: "Delete",
  MOVE: "Move",
  NEW: "New",
  NOTIFY: "Notify",
  OPEN: "Open",
  PUBLIC_ACCESS: "PublicAccess",
  PUBLISH_VARIANT: "PublishVariant",
  PUBLISH: "Publish",
  ROLL_BACK: "RollBack",
  SAVE_VARIANT: "SaveVariant",
  SAVE: "Save",
  SEND_TO_PUBLISH_VARIANT: "SendToPublishVariant",
  SEND_TO_PUBLISH: "SendToPublish",
  SORT: "Sort",
  SYSTEM: "System",
  UNPUBLISH_VARIANT: "UnpublishVariant",
  UNPUBLISH: "Unpublish"
});
function q(e) {
  switch (e) {
    case s.SAVE:
      return {
        style: { look: "primary", color: "default" },
        text: { label: "auditTrails_smallSave", desc: "auditTrails_save" }
      };
    case s.SAVE_VARIANT:
      return {
        style: { look: "primary", color: "default" },
        text: { label: "auditTrails_smallSaveVariant", desc: "auditTrails_savevariant" }
      };
    case s.PUBLISH:
      return {
        style: { look: "primary", color: "positive" },
        text: { label: "auditTrails_smallPublish", desc: "auditTrails_publish" }
      };
    case s.UNPUBLISH:
      return {
        style: { look: "primary", color: "warning" },
        text: { label: "auditTrails_smallUnpublish", desc: "auditTrails_unpublish" }
      };
    case s.PUBLISH_VARIANT:
      return {
        style: { look: "primary", color: "positive" },
        text: { label: "auditTrails_smallPublishVariant", desc: "auditTrails_publishvariant" }
      };
    case s.UNPUBLISH_VARIANT:
      return {
        style: { look: "primary", color: "warning" },
        text: { label: "auditTrails_smallUnpublishVariant", desc: "auditTrails_unpublishvariant" }
      };
    case s.CONTENT_VERSION_ENABLE_CLEANUP:
      return {
        style: { look: "secondary", color: "default" },
        text: {
          label: "auditTrails_smallContentVersionEnableCleanup",
          desc: "auditTrails_contentversionenablecleanup"
        }
      };
    case s.CONTENT_VERSION_PREVENT_CLEANUP:
      return {
        style: { look: "secondary", color: "default" },
        text: {
          label: "auditTrails_smallContentVersionPreventCleanup",
          desc: "auditTrails_contentversionpreventcleanup"
        }
      };
    case s.ASSIGN_DOMAIN:
      return {
        style: { look: "secondary", color: "default" },
        text: { label: "auditTrails_smallAssignDomain", desc: "auditTrails_assigndomain" }
      };
    case s.COPY:
      return {
        style: { look: "secondary", color: "default" },
        text: { label: "auditTrails_smallCopy", desc: "auditTrails_copy" }
      };
    case s.MOVE:
      return {
        style: { look: "secondary", color: "default" },
        text: { label: "auditTrails_smallMove", desc: "auditTrails_move" }
      };
    case s.DELETE:
      return {
        style: { look: "secondary", color: "danger" },
        text: { label: "auditTrails_smallDelete", desc: "auditTrails_delete" }
      };
    case s.ROLL_BACK:
      return {
        style: { look: "secondary", color: "default" },
        text: { label: "auditTrails_smallRollBack", desc: "auditTrails_rollback" }
      };
    case s.SEND_TO_PUBLISH:
      return {
        style: { look: "secondary", color: "positive" },
        text: { label: "auditTrails_smallSendToPublish", desc: "auditTrails_sendtopublish" }
      };
    case s.SEND_TO_PUBLISH_VARIANT:
      return {
        style: { look: "secondary", color: "positive" },
        text: { label: "auditTrails_smallSendToPublishVariant", desc: "auditTrails_sendtopublishvariant" }
      };
    case s.SORT:
      return {
        style: { look: "secondary", color: "default" },
        text: { label: "auditTrails_smallSort", desc: "auditTrails_sort" }
      };
    case s.CUSTOM:
      return {
        style: { look: "placeholder", color: "default" },
        text: { label: "auditTrails_smallCustom", desc: "auditTrails_custom" }
      };
    default:
      return {
        style: { look: "placeholder", color: "default" },
        text: { label: e, desc: "" }
      };
  }
}
var W = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, T = (e, t, a, l) => {
  for (var r = l > 1 ? void 0 : l ? Y(t, a) : t, y = e.length - 1, b; y >= 0; y--)
    (b = e[y]) && (r = (l ? b(t, a, r) : b(r)) || r);
  return l && r && W(t, a, r), r;
}, v = (e, t, a) => t.has(e) || P("Cannot " + a), i = (e, t, a) => (v(e, t, "read from private field"), a ? a.call(e) : t.get(e)), u = (e, t, a) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), G = (e, t, a, l) => (v(e, t, "write to private field"), t.set(e, a), a), c = (e, t, a) => (v(e, t, "access private method"), a), f, E, n, S, m, _, o, N, h, U, A, C;
let d = class extends D {
  constructor() {
    super(), u(this, o), u(this, f, /* @__PURE__ */ new Set(["Umb.EntityAction.Document.Rollback"])), u(this, E, new k(this)), u(this, n, new B()), u(this, S, new H(this)), u(this, m, /* @__PURE__ */ new Map()), u(this, _), this._currentPageNumber = 1, this._items = [], this._totalPages = 1, i(this, n).setPageSize(10), this.observe(i(this, n).currentPage, (e) => this._currentPageNumber = e), this.observe(i(this, n).totalPages, (e) => this._totalPages = e), this.consumeContext(z, (e) => {
      e?.addEventListener(M.TYPE, () => {
        c(this, o, h).call(this);
      });
    }), this.consumeContext(I, (e) => {
      G(this, _, e), c(this, o, h).call(this);
    });
  }
  render() {
    return p`
			<umb-workspace-info-app-layout headline="#general_history">
				<umb-extension-with-api-slot
					slot="header-actions"
					type="entityAction"
					.filter=${(e) => i(this, f).has(e.alias)}></umb-extension-with-api-slot>

				<div id="content">
					${w(
      this._items,
      () => c(this, o, A).call(this),
      () => p`<div id="loader"><uui-loader></uui-loader></div>`
    )}
					${c(this, o, C).call(this)}
				</div>
			</umb-workspace-info-app-layout>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
N = function(e) {
  i(this, n).setCurrentPageNumber(e.target?.current), c(this, o, h).call(this);
};
h = async function() {
  if (!i(this, _)) return;
  const e = i(this, _).getUnique();
  if (!e) throw new Error("Document unique is required");
  const { data: t } = await i(this, E).requestAuditLog({
    unique: e,
    skip: i(this, n).getSkip(),
    take: i(this, n).getPageSize()
  });
  t && (this._items = t.items, i(this, n).setTotalItems(t.total), c(this, o, U).call(this));
};
U = async function() {
  const e = this._items?.map((r) => r.user.unique).filter(Boolean), a = [...new Set(e)].filter((r) => !i(this, m).has(r));
  if (a.length === 0) return;
  const { data: l } = await i(this, S).requestItems(a);
  l && l.forEach((r) => {
    i(this, m).set(r.unique, r), this.requestUpdate("_items");
  });
};
A = function() {
  return this._items?.length ? p`
			<umb-history-list>
				${x(
    this._items,
    (e) => e.timestamp,
    (e) => {
      const { text: t, style: a } = q(e.logType), l = i(this, m).get(e.user.unique);
      return p`
							<umb-history-item
								.name=${l?.name ?? "Unknown"}
								.detail=${this.localize.date(e.timestamp, O)}>
								<umb-user-avatar
									slot="avatar"
									.name=${l?.name}
									.kind=${l?.kind}
									.imgUrls=${l?.avatarUrls ?? []}>
								</umb-user-avatar>
								<div class="log-type">
									<uui-tag look=${a.look} color=${a.color}>
										${this.localize.term(t.label, e.parameters)}
									</uui-tag>
									<span>${this.localize.term(t.desc, e.parameters)}</span>
								</div>
							</umb-history-item>
						`;
    }
  )}
			</umb-history-list>
		` : p`${this.localize.term("content_noItemsToShow")}`;
};
C = function() {
  return this._totalPages <= 1 ? V : p`
			<uui-pagination
				.current=${this._currentPageNumber}
				.total=${this._totalPages}
				firstlabel=${this.localize.term("general_first")}
				previouslabel=${this.localize.term("general_previous")}
				nextlabel=${this.localize.term("general_next")}
				lastlabel=${this.localize.term("general_last")}
				@change=${c(this, o, N)}></uui-pagination>
		`;
};
d.styles = [
  $,
  L`
			#content {
				display: block;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}

			#loader {
				display: flex;
				justify-content: center;
			}

			.log-type {
				display: grid;
				grid-template-columns: var(--uui-size-40) auto;
				gap: var(--uui-size-layout-1);
			}

			.log-type uui-tag {
				justify-self: center;
				height: fit-content;
				margin-top: auto;
				margin-bottom: auto;
			}

			uui-pagination {
				flex: 1;
				display: flex;
				justify-content: center;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
T([
  g()
], d.prototype, "_currentPageNumber", 2);
T([
  g()
], d.prototype, "_items", 2);
T([
  g()
], d.prototype, "_totalPages", 2);
d = T([
  R("umb-document-history-workspace-info-app")
], d);
const se = d;
export {
  d as UmbDocumentHistoryWorkspaceInfoAppElement,
  se as default
};
//# sourceMappingURL=document-history-workspace-info-app.element-CcmDh7IU.js.map
