import { g as O, T as q } from "./utils-BEu6TUZg.js";
import { h as x, U as T } from "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import { UserStateModel as L } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { U as D } from "./paths-C2_yfNxZ.js";
import { nothing as f, repeat as M, html as l, ifDefined as $, when as P, css as W, state as v, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
import { UmbUserGroupCollectionRepository as N } from "@umbraco-cms/backoffice/user-group";
var V = Object.defineProperty, B = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, p = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? B(t, i) : t, h = e.length - 1, _; h >= 0; h--)
    (_ = e[h]) && (n = (o ? _(t, i, n) : _(n)) || n);
  return o && n && V(t, i, n), n;
}, g = (e, t, i) => t.has(e) || y("Cannot " + i), u = (e, t, i) => (g(e, t, "read from private field"), t.get(e)), m = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), C = (e, t, i, o) => (g(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (g(e, t, "access private method"), i), d, r, U, s, b, w, E, S, z, k, G;
let c = class extends R {
  constructor() {
    super(), m(this, s), this._users = [], this._selection = [], this._loading = !1, m(this, d, []), m(this, r), m(this, U, new N(this)), this.consumeContext(x, (e) => {
      C(this, r, e), this.observe(
        u(this, r)?.selection.selection,
        (t) => this._selection = t ?? [],
        "umbCollectionSelectionObserver"
      ), this.observe(
        u(this, r)?.items,
        (t) => this._users = t ?? [],
        "umbCollectionItemsObserver"
      );
    }), a(this, s, b).call(this);
  }
  render() {
    return this._loading ? f : l`
			<div id="user-grid">
				${M(
      this._users,
      (e) => e.unique,
      (e) => a(this, s, S).call(this, e)
    )}
			</div>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
b = async function() {
  this._loading = !0;
  const { data: e } = await u(this, U).requestCollection();
  C(this, d, e?.items ?? []), this._loading = !1;
};
w = function(e) {
  u(this, r)?.selection.select(e.unique ?? "");
};
E = function(e) {
  u(this, r)?.selection.deselect(e.unique ?? "");
};
S = function(e) {
  return l`
			<uui-card-user
				.name=${e.name ?? this.localize.term("general_unnamed")}
				href="${D}/edit/${e.unique}"
				selectable
				?select-only=${this._selection.length > 0}
				?selected=${u(this, r)?.selection.isSelected(e.unique)}
				@selected=${() => a(this, s, w).call(this, e)}
				@deselected=${() => a(this, s, E).call(this, e)}>
				${a(this, s, z).call(this, e)} ${a(this, s, k).call(this, e)} ${a(this, s, G).call(this, e)}
				<umb-user-avatar
					slot="avatar"
					.name=${e.name}
					.kind=${e.kind}
					.imgUrls=${e.avatarUrls}></umb-user-avatar>
			</uui-card-user>
		`;
};
z = function(e) {
  if (e.state && e.state === L.ACTIVE)
    return f;
  const t = e.state ? O(e.state) : void 0;
  return l`
			<uui-tag slot="tag" look=${$(t?.look)} color=${$(t?.color)}>
				<umb-localize key=${"user_" + t?.key}></umb-localize>
			</uui-tag>
		`;
};
k = function(e) {
  const t = u(this, d).filter((i) => e.userGroupUniques?.map((o) => o.unique).includes(i.unique)).map((i) => i.name).join(", ");
  return l`<div>${t}</div>`;
};
G = function(e) {
  return e.kind === T.API ? f : l`
			<div class="user-login-time">
				${P(
    e.lastLoginDate,
    (t) => l`
						<umb-localize key="user_lastLogin">Last login</umb-localize>
						<span>${this.localize.date(t, q)}</span>
					`,
    () => l`<umb-localize key="user_noLogin">has not logged in yet</umb-localize>`
  )}
			</div>
		`;
};
c.styles = [
  I,
  W`
			:host {
				display: flex;
				flex-direction: column;
			}

			#user-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
				gap: var(--uui-size-space-4);
			}

			uui-card-user {
				width: 100%;
				justify-content: normal;
				padding-top: var(--uui-size-space-5);
				flex-direction: column;

				umb-user-avatar {
					font-size: 1.6rem;
				}
			}

			.user-login-time {
				margin-top: var(--uui-size-1);
			}
		`
];
p([
  v()
], c.prototype, "_users", 2);
p([
  v()
], c.prototype, "_selection", 2);
p([
  v()
], c.prototype, "_loading", 2);
c = p([
  A("umb-user-grid-collection-view")
], c);
const ae = c;
export {
  c as UmbUserGridCollectionViewElement,
  ae as default,
  c as element
};
//# sourceMappingURL=user-grid-collection-view.element-6eTmHrUf.js.map
