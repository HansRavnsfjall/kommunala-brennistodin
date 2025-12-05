import { nothing as w, html as _, repeat as W, css as A, property as O, state as b, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { UMB_ENTITY_WORKSPACE_CONTEXT as T } from "@umbraco-cms/backoffice/workspace";
import { createExtensionApiByAlias as q } from "@umbraco-cms/backoffice/extension-registry";
var I = Object.defineProperty, S = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, u = (e, t, i, c) => {
  for (var a = c > 1 ? void 0 : c ? S(t, i) : t, d = e.length - 1, g; d >= 0; d--)
    (g = e[d]) && (a = (c ? g(t, i, a) : g(a)) || a);
  return c && a && I(t, i, a), a;
}, P = (e, t, i) => t.has(e) || E("Cannot " + i), s = (e, t, i) => (P(e, t, "read from private field"), t.get(e)), h = (e, t, i) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), m = (e, t, i, c) => (P(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (P(e, t, "access private method"), i), p, f, o, v, r, R, k, y, x, $, C;
let l = class extends z {
  constructor() {
    super(), h(this, r), this._currentPage = 1, this._total = 0, this._items = [], h(this, p, 10), h(this, f), h(this, o), h(this, v), this.consumeContext(T, (e) => {
      m(this, v, e), n(this, r, k).call(this);
    });
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    this._manifest = e, n(this, r, R).call(this);
  }
  render() {
    return this._items?.length ? _`
			<umb-workspace-info-app-layout headline="#references_labelUsedByItems">
				<div id="content">${n(this, r, $).call(this)} ${n(this, r, C).call(this)}</div>
			</umb-workspace-info-app-layout>
		` : w;
  }
};
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
R = async function() {
  if (!this._manifest) return;
  const e = this._manifest.meta.referenceRepositoryAlias;
  if (!e)
    throw new Error("Reference repository alias is required");
  m(this, f, await q(
    this,
    e
  )), n(this, r, y).call(this);
};
k = function() {
  this.observe(
    s(this, v)?.unique,
    (e) => {
      if (!e) {
        m(this, o, void 0), this._items = [];
        return;
      }
      s(this, o) !== e && (m(this, o, e), n(this, r, y).call(this));
    },
    "umbEntityReferencesUniqueObserver"
  );
};
y = async function() {
  if (!s(this, o) || !s(this, f)) return;
  const { data: e } = await s(this, f).requestReferencedBy(
    s(this, o),
    (this._currentPage - 1) * s(this, p),
    s(this, p)
  );
  e && (this._total = e.total, this._items = e.items);
};
x = function(e) {
  this._currentPage !== e.target.current && (this._currentPage = e.target.current, n(this, r, y).call(this));
};
$ = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${W(
      this._items,
      (e) => e.unique,
      (e) => _`<umb-entity-item-ref .item=${e}></umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
C = function() {
  if (!this._total) return w;
  const e = Math.ceil(this._total / s(this, p));
  return e <= 1 ? w : _`
			<div class="pagination-container">
				<uui-pagination
					.total=${e}
					firstlabel=${this.localize.term("general_first")}
					previouslabel=${this.localize.term("general_previous")}
					nextlabel=${this.localize.term("general_next")}
					lastlabel=${this.localize.term("general_last")}
					@change="${n(this, r, x)}"></uui-pagination>
			</div>
		`;
};
l.styles = [
  M,
  A`
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
u([
  O({ type: Object })
], l.prototype, "_manifest", 2);
u([
  b()
], l.prototype, "_currentPage", 2);
u([
  b()
], l.prototype, "_total", 2);
u([
  b()
], l.prototype, "_items", 2);
l = u([
  U("umb-entity-references-workspace-info-app")
], l);
export {
  l as UmbEntityReferencesWorkspaceInfoAppElement,
  l as element
};
//# sourceMappingURL=entity-references-workspace-view-info.element-DQnUvFuy.js.map
