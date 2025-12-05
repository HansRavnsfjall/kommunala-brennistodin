import { nothing as w, html as _, repeat as A, css as O, property as U, state as P, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as $ } from "@umbraco-cms/backoffice/style";
import { UMB_ENTITY_WORKSPACE_CONTEXT as q } from "@umbraco-cms/backoffice/workspace";
import { createExtensionApiByAlias as I } from "@umbraco-cms/backoffice/extension-registry";
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, l = (t, e, i, p) => {
  for (var a = p > 1 ? void 0 : p ? B(e, i) : e, v = t.length - 1, g; v >= 0; v--)
    (g = t[v]) && (a = (p ? g(e, i, a) : g(a)) || a);
  return p && a && S(e, i, a), a;
}, E = (t, e, i) => e.has(t) || b("Cannot " + i), s = (t, e, i) => (E(t, e, "read from private field"), e.get(t)), h = (t, e, i) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), m = (t, e, i, p) => (E(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (E(t, e, "access private method"), i), f, u, o, y, r, R, k, d, C, W, x;
let c = class extends T {
  constructor() {
    super(), h(this, r), this._currentPage = 1, this._total = 0, this._items = [], h(this, f, 10), h(this, u), h(this, o), h(this, y), this.consumeContext(q, (t) => {
      m(this, y, t), n(this, r, k).call(this);
    });
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(t) {
    this._manifest = t, n(this, r, R).call(this);
  }
  render() {
    return this._items?.length ? _`
			<umb-workspace-info-app-layout headline="#references_labelUsedByItems">
				<div id="content">${n(this, r, W).call(this)} ${n(this, r, x).call(this)}</div>
			</umb-workspace-info-app-layout>
		` : w;
  }
};
f = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
R = async function() {
  if (!this._manifest) return;
  const t = this._manifest.meta.referenceRepositoryAlias;
  if (!t)
    throw new Error("Reference repository alias is required");
  m(this, u, await I(
    this,
    t
  )), n(this, r, d).call(this);
};
k = function() {
  this.observe(
    s(this, y)?.unique,
    (t) => {
      if (!t) {
        m(this, o, void 0), this._items = [];
        return;
      }
      s(this, o) !== t && (m(this, o, t), n(this, r, d).call(this));
    },
    "umbEntityReferencesUniqueObserver"
  );
};
d = async function() {
  if (!s(this, o) || !s(this, u)) return;
  const { data: t } = await s(this, u).requestReferencedBy(
    s(this, o),
    (this._currentPage - 1) * s(this, f),
    s(this, f)
  );
  t && (this._total = t.total, this._items = t.items);
};
C = function(t) {
  this._currentPage !== t.target.current && (this._currentPage = t.target.current, n(this, r, d).call(this));
};
W = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${A(
      this._items,
      (t) => t.unique,
      (t) => _`<umb-entity-item-ref .item=${t}></umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
x = function() {
  if (!this._total) return w;
  const t = Math.ceil(this._total / s(this, f));
  return t <= 1 ? w : _`
			<div class="pagination-container">
				<uui-pagination .total=${t} @change="${n(this, r, C)}"></uui-pagination>
			</div>
		`;
};
c.styles = [
  $,
  O`
			:host {
				display: contents;
			}

			#content {
				display: block;
				padding: var(--uui-size-space-3) var(--uui-size-space-4);
			}

			.pagination-container {
				display: flex;
				justify-content: center;
				margin-top: var(--uui-size-space-4);
			}

			uui-pagination {
				flex: 1;
				display: inline-block;
			}
		`
];
l([
  U({ type: Object })
], c.prototype, "_manifest", 2);
l([
  P()
], c.prototype, "_currentPage", 2);
l([
  P()
], c.prototype, "_total", 2);
l([
  P()
], c.prototype, "_items", 2);
c = l([
  M("umb-entity-references-workspace-info-app")
], c);
export {
  c as UmbEntityReferencesWorkspaceInfoAppElement,
  c as element
};
//# sourceMappingURL=entity-references-workspace-view-info.element-CHC-fKyk.js.map
