import { css as q, state as _, customElement as g, html as u, repeat as E, ifDefined as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as k } from "@umbraco-cms/backoffice/collection";
import { a as P } from "./index-DtiCbM0v.js";
import { h as T } from "./constants-BH7VsFPT.js";
import { observeMultiple as D } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UmbUserGroupCollectionRepository as M } from "@umbraco-cms/backoffice/user-group";
var j = Object.defineProperty, W = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, h = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? W(t, r) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (i = (o ? d(t, r, i) : d(i)) || i);
  return o && i && j(t, r, i), i;
}, v = (e, t, r) => t.has(e) || O("Cannot " + r), p = (e, t, r) => (v(e, t, "read from private field"), t.get(e)), m = (e, t, r) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), R = (e, t, r, o) => (v(e, t, "write to private field"), t.set(e, r), r), l = (e, t, r) => (v(e, t, "access private method"), r), n, b, s, F, S, U, w, C, G, $, B, x, z;
let a = class extends L {
  constructor() {
    super(), m(this, s), this._stateFilterOptions = Object.values(P), this._stateFilterSelection = [], this._userGroups = [], this._userGroupFilterSelection = [], this._orderByOptions = [], m(this, n), m(this, b, new M(this)), this.consumeContext(T, (e) => {
      R(this, n, e), l(this, s, F).call(this);
    });
  }
  firstUpdated() {
    l(this, s, S).call(this);
  }
  render() {
    return u`
			<umb-collection-toolbar slot="header">
				<div id="toolbar">
					<umb-collection-filter-field></umb-collection-filter-field>
					${l(this, s, B).call(this)} ${l(this, s, x).call(this)} ${l(this, s, z).call(this)}
				</div>
			</umb-collection-toolbar>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
F = function() {
  p(this, n) && this.observe(
    D([p(this, n).orderByOptions, p(this, n).activeOrderByOption]),
    ([e, t]) => {
      this._orderByOptions.length !== e.length && (this._orderByOptions = e), t && t !== this._activeOrderByOption?.unique && (this._activeOrderByOption = this._orderByOptions.find((r) => r.unique === t));
    },
    "_umbObserveUserOrderByOptions"
  );
};
S = async function() {
  const { data: e } = await p(this, b).requestCollection();
  e && (this._userGroups = e.items);
};
U = function(e) {
  e.stopPropagation();
  const t = e.currentTarget, r = t.value, o = t.checked;
  this._stateFilterSelection = o ? [...this._stateFilterSelection, r] : this._stateFilterSelection.filter((i) => i !== r), p(this, n)?.setStateFilter(this._stateFilterSelection);
};
w = function(e) {
  const t = e.currentTarget, r = this._userGroups.find((i) => i.unique === t.value);
  if (!r) return;
  t.checked ? this._userGroupFilterSelection = [...this._userGroupFilterSelection, r] : this._userGroupFilterSelection = this._userGroupFilterSelection.filter((i) => i.unique !== r.unique);
  const o = this._userGroupFilterSelection.map((i) => i.unique);
  p(this, n)?.setUserGroupFilter(o);
};
C = function(e) {
  p(this, n)?.setActiveOrderByOption(e.unique);
};
G = function() {
  const e = this._userGroupFilterSelection.length, t = 2;
  return e === 0 ? this.localize.term("general_all") : this._userGroupFilterSelection.slice(0, t).map((r) => r.name).join(", ") + (e > t ? " + " + (e - t) : "");
};
$ = function() {
  const e = this._stateFilterSelection.length, t = 2;
  return e === 0 ? this.localize.term("general_all") : this._stateFilterSelection.slice(0, t).map((r) => this.localize.term("user_state" + r)).join(", ") + (e > t ? " + " + (e - t) : "");
};
B = function() {
  return u`
			<uui-button popovertarget="popover-user-status-filter" label="status">
				<umb-localize key="general_status"></umb-localize>: <b>${l(this, s, $).call(this)}</b>
			</uui-button>
			<uui-popover-container id="popover-user-status-filter" placement="bottom">
				<umb-popover-layout>
					<div class="filter-dropdown">
						${this._stateFilterOptions.map(
    (e) => u`<uui-checkbox
									label=${this.localize.term("user_state" + e)}
									@change=${l(this, s, U)}
									name="state"
									value=${e}></uui-checkbox>`
  )}
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
x = function() {
  return u`
			<uui-button popovertarget="popover-user-group-filter" label=${this.localize.term("general_groups")}>
				<umb-localize key="general_groups"></umb-localize>: <b>${l(this, s, G).call(this)}</b>
			</uui-button>
			<uui-popover-container id="popover-user-group-filter" placement="bottom">
				<umb-popover-layout>
					<div class="filter-dropdown">
						${E(
    this._userGroups,
    (e) => e.unique,
    (e) => u`
								<uui-checkbox
									label=${y(e.name)}
									value=${y(e.unique)}
									@change=${l(this, s, w)}></uui-checkbox>
							`
  )}
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
z = function() {
  return u`
			<uui-button popovertarget="popover-order-by-filter" label="order by">
				<umb-localize key="general_orderBy"></umb-localize>:
				<b> ${this._activeOrderByOption ? this.localize.string(this._activeOrderByOption.label) : ""}</b>
			</uui-button>
			<uui-popover-container id="popover-order-by-filter" placement="bottom">
				<umb-popover-layout>
					<div class="filter-dropdown">
						${this._orderByOptions.map(
    (e) => u`
								<uui-menu-item
									label=${this.localize.string(e.label)}
									@click-label=${() => l(this, s, C).call(this, e)}
									?active=${this._activeOrderByOption?.unique === e.unique}></uui-menu-item>
							`
  )}
					</div>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
a.styles = [
  q`
			:host {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
				gap: var(--uui-size-space-5);
				align-items: center;
			}

			#toolbar {
				flex: 1;
				display: flex;
				gap: var(--uui-size-space-5);
				justify-content: space-between;
				align-items: center;
			}

			umb-collection-filter-field {
				width: 100%;
			}

			.filter {
				max-width: 200px;
			}

			.filter-dropdown {
				display: flex;
				gap: var(--uui-size-space-3);
				flex-direction: column;
				padding: var(--uui-size-space-3);
			}
		`
];
h([
  _()
], a.prototype, "_stateFilterOptions", 2);
h([
  _()
], a.prototype, "_stateFilterSelection", 2);
h([
  _()
], a.prototype, "_userGroups", 2);
h([
  _()
], a.prototype, "_userGroupFilterSelection", 2);
h([
  _()
], a.prototype, "_orderByOptions", 2);
h([
  _()
], a.prototype, "_activeOrderByOption", 2);
a = h([
  g("umb-user-collection-header")
], a);
var A = Object.getOwnPropertyDescriptor, H = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? A(t, r) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (i = d(i) || i);
  return i;
};
let f = class extends k {
  renderToolbar() {
    return u`<umb-user-collection-header slot="header"></umb-user-collection-header>`;
  }
};
f = H([
  g("umb-user-collection")
], f);
const Y = f;
export {
  f as UmbUserCollectionElement,
  Y as default,
  f as element
};
//# sourceMappingURL=user-collection.element-Lfq2zIo0.js.map
