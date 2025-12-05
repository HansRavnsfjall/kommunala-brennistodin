import { g } from "./constants-jrjjZjNa.js";
import { css as C, customElement as $, html as E } from "@umbraco-cms/backoffice/external/lit";
import { debounce as U } from "@umbraco-cms/backoffice/utils";
import { UmbCollectionDefaultElement as W } from "@umbraco-cms/backoffice/collection";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
var M = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, T = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? M(t, r) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = o(a) || a);
  return a;
}, v = (e, t, r) => t.has(e) || y("Cannot " + r), b = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), z = (e, t, r, n) => (v(e, t, "write to private field"), t.set(e, r), r), D = (e, t, r) => (v(e, t, "access private method"), r), s, h, S, m;
const P = "umb-user-group-collection-header";
let p = class extends G {
  constructor() {
    super(), c(this, h), c(this, s), c(this, m, U((e) => b(this, s)?.setFilter({ query: e }), 500)), this.consumeContext(g, (e) => {
      z(this, s, e);
    });
  }
  render() {
    return E`<umb-collection-action-bundle></umb-collection-action-bundle>
			<uui-input
				@input=${D(this, h, S)}
				label=${this.localize.term("general_search")}
				placeholder=${this.localize.term("general_search")}
				id="input-search"></uui-input>
			<umb-collection-view-bundle></umb-collection-view-bundle>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
S = function(e) {
  const r = e.target.value || "";
  b(this, m).call(this, r);
};
m = /* @__PURE__ */ new WeakMap();
p.styles = [
  C`
			:host {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
				gap: var(--uui-size-space-5);
				align-items: center;
			}

			uui-input {
				width: 100%;
			}
		`
];
p = T([
  $(P)
], p);
var L = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, N = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? L(t, r) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = o(a) || a);
  return a;
}, f = (e, t, r) => t.has(e) || O("Cannot " + r), k = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), u = (e, t, r) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), q = (e, t, r, n) => (f(e, t, "write to private field"), t.set(e, r), r), A = (e, t, r) => (f(e, t, "access private method"), r), l, _, x, w;
let d = class extends W {
  constructor() {
    super(), u(this, _), u(this, l), u(this, w, U((e) => k(this, l)?.setFilter({ query: e }), 500)), this.consumeContext(g, (e) => {
      q(this, l, e);
    });
  }
  renderToolbar() {
    return E`
			<umb-collection-toolbar slot="header">
				<uui-input
					@input=${A(this, _, x)}
					label=${this.localize.term("general_search")}
					placeholder=${this.localize.term("general_search")}
					id="input-search"></uui-input>
			</umb-collection-toolbar>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
x = function(e) {
  const r = e.target.value || "";
  k(this, w).call(this, r);
};
w = /* @__PURE__ */ new WeakMap();
d.styles = [
  C`
			uui-input {
				width: 100%;
			}
		`
];
d = N([
  $("umb-user-group-collection")
], d);
export {
  d as UmbUserGroupCollectionElement,
  d as element
};
//# sourceMappingURL=user-group-collection.element-R1aQh16p.js.map
