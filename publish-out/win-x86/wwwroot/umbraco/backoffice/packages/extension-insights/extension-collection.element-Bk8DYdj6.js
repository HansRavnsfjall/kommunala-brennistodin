import { html as d, css as C, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { fromCamelCase as x } from "@umbraco-cms/backoffice/utils";
import { umbExtensionsRegistry as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbCollectionDefaultElement as b, UMB_COLLECTION_CONTEXT as w } from "@umbraco-cms/backoffice/collection";
var g = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, O = (e, t, o, n) => {
  for (var l = n > 1 ? void 0 : n ? g(t, o) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (l = u(l) || l);
  return l;
}, m = (e, t, o) => t.has(e) || f("Cannot " + o), h = (e, t, o) => (m(e, t, "read from private field"), o ? o.call(e) : t.get(e)), c = (e, t, o) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), v = (e, t, o, n) => (m(e, t, "write to private field"), t.set(e, o), o), S = (e, t, o) => (m(e, t, "access private method"), o), i, s, p, _;
let a = class extends b {
  constructor() {
    super(), c(this, p), c(this, i), c(this, s, []), this.consumeContext(w, (e) => {
      v(this, i, e);
    }), this.observe(E.extensions, (e) => {
      const o = [...new Set(e.map((n) => n.type))].sort().map((n) => ({ name: x(n), value: n }));
      v(this, s, [{ name: "All", value: "" }, ...o]);
    });
  }
  renderToolbar() {
    return d`
			<umb-collection-toolbar slot="header">
				<div id="toolbar">
					<umb-collection-filter-field></umb-collection-filter-field>
					<uui-select
						label="Select type..."
						placeholder="Select type..."
						.options=${h(this, s)}
						@change=${S(this, p, _)}></uui-select>
				</div>
			</umb-collection-toolbar>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  const t = e.target.value;
  h(this, i)?.setFilter({ type: t });
};
a.styles = [
  C`
			#toolbar {
				display: flex;
				gap: var(--uui-size-space-5);
				justify-content: space-between;
				align-items: center;

				umb-collection-filter-field {
					flex: 1;
				}

				uui-select {
					flex: 1;
				}
			}
		`
];
a = O([
  y("umb-extension-collection")
], a);
const W = a;
export {
  a as UmbExtensionCollectionElement,
  W as default,
  a as element
};
//# sourceMappingURL=extension-collection.element-Bk8DYdj6.js.map
