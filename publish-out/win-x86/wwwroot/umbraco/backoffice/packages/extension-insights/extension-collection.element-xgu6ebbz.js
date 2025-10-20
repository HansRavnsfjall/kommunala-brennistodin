import { html as _, css as C, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { fromCamelCase as E } from "@umbraco-cms/backoffice/utils";
import { umbExtensionsRegistry as x } from "@umbraco-cms/backoffice/extension-registry";
import { UmbCollectionDefaultElement as b, UMB_COLLECTION_CONTEXT as w } from "@umbraco-cms/backoffice/collection";
var g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, O = (e, t, o, n) => {
  for (var s = n > 1 ? void 0 : n ? g(t, o) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (s = u(s) || s);
  return s;
}, m = (e, t, o) => t.has(e) || v("Cannot " + o), d = (e, t, o) => (m(e, t, "read from private field"), o ? o.call(e) : t.get(e)), c = (e, t, o) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), h = (e, t, o, n) => (m(e, t, "write to private field"), t.set(e, o), o), S = (e, t, o) => (m(e, t, "access private method"), o), i, l, p, f;
let a = class extends b {
  constructor() {
    super(), c(this, p), c(this, i), c(this, l, []), this.consumeContext(w, (e) => {
      h(this, i, e);
    }), this.observe(x.extensions, (e) => {
      const o = [...new Set(e.map((n) => n.type))].sort().map((n) => ({ name: E(n), value: n }));
      h(this, l, [{ name: "All", value: "" }, ...o]);
    });
  }
  renderToolbar() {
    return _`
			<umb-collection-toolbar slot="header">
				<div id="toolbar">
					<umb-collection-filter-field></umb-collection-filter-field>
					<uui-select
						label="Select type..."
						placeholder="Select type..."
						.options=${d(this, l)}
						@change=${S(this, p, f)}></uui-select>
				</div>
			</umb-collection-toolbar>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
f = function(e) {
  const t = e.target.value;
  d(this, i)?.setFilter({ type: t });
};
a.styles = [
  C`
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

			uui-select {
				width: 100%;
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
//# sourceMappingURL=extension-collection.element-xgu6ebbz.js.map
