import { j as x, f as S } from "./manifests-BP7S9LPy.js";
import { g as O } from "./index-Cw5mP9uC.js";
import { repeat as v, html as c, when as B, css as q, state as d, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { fromCamelCase as z } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/ufm";
var A = Object.defineProperty, V = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, h = (e, t, i, u) => {
  for (var l = u > 1 ? void 0 : u ? V(t, i) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (l = (u ? _(t, i, l) : _(l)) || l);
  return u && l && A(t, i, l), l;
}, f = (e, t, i) => t.has(e) || g("Cannot " + i), a = (e, t, i) => (f(e, t, "read from private field"), t.get(e)), m = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), G = (e, t, i, u) => (f(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (f(e, t, "access private method"), i), s, r, P, b, C, w, y, $, D, T, E, U;
let o = class extends M {
  constructor() {
    super(), m(this, r), this._items = [], this._selection = [], m(this, s), this.consumeContext(x, (e) => {
      G(this, s, e), e?.setupView(this), this.observe(
        e?.workspacePathBuilder,
        (t) => {
          this._workspacePathBuilder = t;
        },
        "observePath"
      ), n(this, r, P).call(this);
    });
  }
  render() {
    return c`
			<div id="document-grid">
				${v(
      this._items,
      (e) => e.unique,
      (e) => n(this, r, $).call(this, e)
    )}
			</div>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
P = function() {
  a(this, s) && (this.observe(
    a(this, s).userDefinedProperties,
    (e) => {
      this._userDefinedProperties = e;
    },
    "_observeUserDefinedProperties"
  ), this.observe(a(this, s).items, (e) => this._items = e, "_observeItems"), this.observe(
    a(this, s).selection.selection,
    (e) => this._selection = e,
    "_observeSelection"
  ));
};
b = function(e) {
  a(this, s)?.selection.select(e.unique);
};
C = function(e) {
  a(this, s)?.selection.deselect(e.unique);
};
w = function(e) {
  return a(this, s)?.selection.isSelected(e.unique);
};
y = function(e) {
  return e.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: e.entityType }) + S.generateLocal({
    unique: e.unique
  }) : "";
};
$ = function(e) {
  return c`
			<uui-card-content-node
				.name=${e.name ?? "Unnamed Document"}
				selectable
				?select-only=${this._selection.length > 0}
				?selected=${n(this, r, w).call(this, e)}
				href=${n(this, r, y).call(this, e)}
				@selected=${() => n(this, r, b).call(this, e)}
				@deselected=${() => n(this, r, C).call(this, e)}>
				<umb-icon slot="icon" name=${e.icon}></umb-icon>
				${n(this, r, T).call(this, e)} ${n(this, r, E).call(this, e)}
			</uui-card-content-node>
		`;
};
D = function(e) {
  switch (e) {
    case "Published":
      return { color: "positive", label: this.localize.term("content_published") };
    case "PublishedPendingChanges":
      return { color: "warning", label: this.localize.term("content_publishedPendingChanges") };
    case "Draft":
      return { color: "default", label: this.localize.term("content_unpublished") };
    case "NotCreated":
      return { color: "danger", label: this.localize.term("content_notCreated") };
    default:
      return { color: "danger", label: z(e) };
  }
};
T = function(e) {
  const t = n(this, r, D).call(this, e.state);
  return c`<uui-tag slot="tag" color=${t.color} look="secondary">${t.label}</uui-tag>`;
};
E = function(e) {
  if (this._userDefinedProperties)
    return c`
			<ul>
				${v(
      this._userDefinedProperties,
      (t) => t.alias,
      (t) => n(this, r, U).call(this, e, t)
    )}
			</ul>
		`;
};
U = function(e, t) {
  const i = O(e, t.alias);
  return c`
			<li>
				<span>${this.localize.string(t.header)}:</span>
				${B(
    t.nameTemplate,
    () => c`<umb-ufm-render inline .markdown=${t.nameTemplate} .value=${{ value: i }}></umb-ufm-render>`,
    () => c`${i}`
  )}
			</li>
		`;
};
o.styles = [
  N,
  q`
			:host {
				display: flex;
				flex-direction: column;
			}

			.container {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			#document-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
				gap: var(--uui-size-space-4);
			}

			uui-card-content-node {
				width: 100%;
				height: 180px;
			}

			ul {
				list-style: none;
				padding-inline-start: 0px;
				margin: 0;
			}

			ul > li > span {
				font-weight: 700;
			}
		`
];
h([
  d()
], o.prototype, "_workspacePathBuilder", 2);
h([
  d()
], o.prototype, "_items", 2);
h([
  d()
], o.prototype, "_selection", 2);
h([
  d()
], o.prototype, "_userDefinedProperties", 2);
o = h([
  k("umb-document-grid-collection-view")
], o);
const j = o;
export {
  o as UmbDocumentGridCollectionViewElement,
  j as default
};
//# sourceMappingURL=document-grid-collection-view.element-BqvsXsY0.js.map
