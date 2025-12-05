import { css as M, state as v, customElement as C, html as c, repeat as U, ifDefined as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as $ } from "@umbraco-cms/backoffice/collection";
import { UmbMemberTypeTreeRepository as O } from "./member-type-tree.repository-BadDocg9.js";
import { j as x } from "./manifests-KIVuOqdB.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, z = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, _ = (e, t, n, i) => {
  for (var o = i > 1 ? void 0 : i ? z(t, n) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (o = (i ? s(t, n, o) : s(o)) || o);
  return i && o && P(t, n, o), o;
}, f = (e, t, n) => t.has(e) || T("Cannot " + n), y = (e, t, n) => (f(e, t, "read from private field"), n ? n.call(e) : t.get(e)), m = (e, t, n) => t.has(e) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), F = (e, t, n, i) => (f(e, t, "write to private field"), t.set(e, n), n), u = (e, t, n) => (f(e, t, "access private method"), n), p, b, r, w, q, d, E;
let a = class extends D {
  constructor() {
    super(), m(this, r), m(this, p), m(this, b, new O(this)), this._contentTypes = [], this.consumeContext(x, (e) => {
      F(this, p, e);
    }), u(this, r, w).call(this);
  }
  render() {
    return c`
			<umb-collection-action-bundle></umb-collection-action-bundle>
			<umb-collection-filter-field></umb-collection-filter-field>
			${u(this, r, E).call(this)}
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
w = async function() {
  const { data: e } = await y(this, b).requestTreeRootItems({});
  e && (this._contentTypes = e.items.map((t) => ({
    unique: t.unique,
    name: t.name,
    icon: t.icon || "",
    entityType: t.entityType
  })));
};
q = function() {
  return this._selectedContentTypeUnique ? this._contentTypes.find((e) => e.unique === this._selectedContentTypeUnique)?.name || this.localize.term("general_all") : this.localize.term("general_all") + " Member types";
};
d = function(e) {
  this._selectedContentTypeUnique = e, y(this, p)?.setMemberTypeFilter(e);
};
E = function() {
  return c`
			<umb-dropdown>
				<span slot="label">${y(this, r, q)}</span>
				<div id="dropdown-layout">
					<uui-button
						label=${this.localize.term("general_all")}
						look=${this._selectedContentTypeUnique ? "default" : "secondary"}
						compact
						@click=${() => u(this, r, d).call(this, "")}></uui-button>
					${U(
    this._contentTypes,
    (e) => e.unique,
    (e) => c`
							<uui-button
								label=${g(e.name)}
								look=${e.unique === this._selectedContentTypeUnique ? "secondary" : "default"}
								compact
								@click=${() => u(this, r, d).call(this, e.unique)}></uui-button>
						`
  )}
				</div>
			</umb-dropdown>
		`;
};
a.styles = [
  M`
			:host {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
				gap: var(--uui-size-space-5);
				align-items: center;
			}

			#dropdown-layout {
				display: flex;
				flex-direction: column;
				--uui-button-content-align: left;
			}

			umb-collection-filter-field {
				width: 100%;
			}
		`
];
_([
  v()
], a.prototype, "_contentTypes", 2);
_([
  v()
], a.prototype, "_selectedContentTypeUnique", 2);
a = _([
  C("umb-member-collection-header")
], a);
var L = Object.getOwnPropertyDescriptor, R = (e, t, n, i) => {
  for (var o = i > 1 ? void 0 : i ? L(t, n) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (o = s(o) || o);
  return o;
};
let h = class extends $ {
  renderToolbar() {
    return c`<umb-member-collection-header slot="header"></umb-member-collection-header>`;
  }
};
h = R([
  C("umb-member-collection")
], h);
const I = h;
export {
  h as UmbMemberCollectionElement,
  I as default,
  h as element
};
//# sourceMappingURL=member-collection.element-C8tfrRO6.js.map
