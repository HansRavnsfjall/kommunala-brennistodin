import { G as q } from "./input-upload-field.element-BKvVffkE.js";
import { U as E } from "./media-audit-log.repository-DcjUD1t5.js";
import { g as z, T as A } from "./utils-Cn_XY6oh.js";
import { when as C, html as u, repeat as S, nothing as T, css as W, state as f, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { UmbPaginationManager as N } from "@umbraco-cms/backoffice/utils";
import { UmbUserItemRepository as H } from "@umbraco-cms/backoffice/user";
var L = Object.defineProperty, R = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, g = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? R(e, i) : e, d = t.length - 1, _; d >= 0; d--)
    (_ = t[d]) && (s = (a ? _(e, i, s) : _(s)) || s);
  return a && s && L(e, i, s), s;
}, y = (t, e, i) => e.has(t) || U("Cannot " + i), r = (t, e, i) => (y(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), D = (t, e, i, a) => (y(t, e, "write to private field"), e.set(t, i), i), h = (t, e, i) => (y(t, e, "access private method"), i), c, v, o, w, m, n, P, b, k, $, M;
let p = class extends I {
  constructor() {
    super(), l(this, n), this._currentPageNumber = 1, this._totalPages = 1, this._items = [], l(this, c), l(this, v, new E(this)), l(this, o, new N()), l(this, w, new H(this)), l(this, m, /* @__PURE__ */ new Map()), r(this, o).setPageSize(10), this.observe(r(this, o).currentPage, (t) => this._currentPageNumber = t), this.observe(r(this, o).totalPages, (t) => this._totalPages = t), this.consumeContext(q, (t) => {
      D(this, c, t), h(this, n, P).call(this);
    });
  }
  render() {
    return u`
			<umb-workspace-info-app-layout headline="#general_history">
				<div id="content">
					${C(
      this._items,
      () => h(this, n, $).call(this),
      () => u`<div id="loader"><uui-loader></uui-loader></div>`
    )}
					${h(this, n, M).call(this)}
				</div>
			</umb-workspace-info-app-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
P = async function() {
  const t = r(this, c)?.getUnique();
  if (!t) throw new Error("Media unique is required");
  const { data: e } = await r(this, v).requestAuditLog({
    unique: t,
    skip: r(this, o).getSkip(),
    take: r(this, o).getPageSize()
  });
  e && (this._items = e.items, r(this, o).setTotalItems(e.total), h(this, n, k).call(this));
};
b = function(t) {
  r(this, o).setCurrentPageNumber(t.target?.current), h(this, n, P).call(this);
};
k = async function() {
  const t = this._items?.map((s) => s.user.unique).filter(Boolean), i = [...new Set(t)].filter((s) => !r(this, m).has(s));
  if (i.length === 0) return;
  const { data: a } = await r(this, w).requestItems(i);
  a && a.forEach((s) => {
    r(this, m).set(s.unique, s), this.requestUpdate("_items");
  });
};
$ = function() {
  return this._items && this._items.length ? u`
				<umb-history-list>
					${S(
    this._items,
    (t) => t.timestamp,
    (t) => {
      const { text: e, style: i } = z(t.logType), a = r(this, m).get(t.user.unique);
      return u`<umb-history-item
								.name=${a?.name ?? "Unknown"}
								.detail=${this.localize.date(t.timestamp, A)}>
								<umb-user-avatar
									slot="avatar"
									.name=${a?.name}
									.kind=${a?.kind}
									.imgUrls=${a?.avatarUrls ?? []}></umb-user-avatar>

								<span class="log-type">
									<uui-tag look=${i.look} color=${i.color}>
										${this.localize.term(e.label, t.parameters)}
									</uui-tag>
									${this.localize.term(e.desc, t.parameters)}
								</span>
							</umb-history-item>`;
    }
  )}
				</umb-history-list>
			` : u`${this.localize.term("content_noItemsToShow")}`;
};
M = function() {
  return u`
			${this._totalPages > 1 ? u`
						<uui-pagination
							class="pagination"
							.current=${this._currentPageNumber}
							.total=${this._totalPages}
							@change=${h(this, n, b)}></uui-pagination>
					` : T}
		`;
};
p.styles = [
  O,
  W`
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
g([
  f()
], p.prototype, "_currentPageNumber", 2);
g([
  f()
], p.prototype, "_totalPages", 2);
g([
  f()
], p.prototype, "_items", 2);
p = g([
  x("umb-media-history-workspace-info-app")
], p);
const Y = p;
export {
  p as UmbMediaHistoryWorkspaceInfoAppElement,
  Y as default
};
//# sourceMappingURL=media-history-workspace-info-app.element-CkPNF6TC.js.map
