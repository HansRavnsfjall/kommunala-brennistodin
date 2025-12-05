import { css as x, property as r, state as u, customElement as C, html as l, nothing as _, repeat as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, s = (t, e, o, p) => {
  for (var a = p > 1 ? void 0 : p ? I(e, o) : e, f = t.length - 1, c; f >= 0; f--)
    (c = t[f]) && (a = (p ? c(e, o, a) : c(a)) || a);
  return p && a && E(e, o, a), a;
}, b = (t, e, o) => e.has(t) || y("Cannot " + o), $ = (t, e, o) => (b(t, e, "read from private field"), o ? o.call(t) : e.get(t)), m = (t, e, o) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), h = (t, e, o) => (b(t, e, "access private method"), o), n, g, v, T, d, R;
let i = class extends P {
  constructor() {
    super(...arguments), m(this, n), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this.selectionConfiguration = this._selectionConfiguration, this.hideTreeItemActions = !1, this.hideTreeRoot = !1, this.expandTreeRoot = !1, this.foldersOnly = !1, this.selectableFilter = () => !0, this.filter = () => !0, this.expansion = [], this._rootItems = [], this._currentPage = 1, this._totalPages = 1, m(this, d, (t) => {
      t.stopPropagation();
      const e = this._currentPage = this._currentPage + 1;
      this._api?.pagination.setCurrentPageNumber(e);
    });
  }
  get api() {
    return this._api;
  }
  set api(t) {
    this._api = t, h(this, n, g).call(this);
  }
  async updated(t) {
    super.updated(t), this._api !== void 0 && (t.has("selectionConfiguration") && (this._selectionConfiguration = this.selectionConfiguration, this._api.selection.setMultiple(this._selectionConfiguration.multiple ?? !1), this._api.selection.setSelectable(this._selectionConfiguration.selectable ?? !0), this._api.selection.setSelection(this._selectionConfiguration.selection ?? [])), t.has("startNode") && this._api.setStartNode(this.startNode), t.has("hideTreeRoot") && this._api.setHideTreeRoot(this.hideTreeRoot), t.has("expandTreeRoot") && this._api.setExpandTreeRoot(this.expandTreeRoot), t.has("foldersOnly") && this._api.setFoldersOnly(this.foldersOnly ?? !1), t.has("selectableFilter") && (this._api.selectableFilter = this.selectableFilter), t.has("filter") && (this._api.filter = this.filter), t.has("expansion") && this._api.setExpansion(this.expansion));
  }
  getSelection() {
    return this._api?.selection.getSelection();
  }
  getExpansion() {
    return this._api?.expansion.getExpansion();
  }
  render() {
    return l` ${h(this, n, v).call(this)} ${h(this, n, T).call(this)}`;
  }
};
n = /* @__PURE__ */ new WeakSet();
g = function() {
  this.observe(this._api?.treeRoot, (t) => this._treeRoot = t), this.observe(this._api?.rootItems, (t) => this._rootItems = t ?? []), this.observe(this._api?.pagination.currentPage, (t) => this._currentPage = t ?? 1), this.observe(this._api?.pagination.totalPages, (t) => this._totalPages = t ?? 1);
};
v = function() {
  return this.hideTreeRoot || this._treeRoot === void 0 ? _ : l`
			<umb-tree-item
				.entityType=${this._treeRoot.entityType}
				.props=${{ hideActions: this.hideTreeItemActions, item: this._treeRoot }}></umb-tree-item>
		`;
};
T = function() {
  return this.hideTreeRoot === !0 ? l`
				${O(
    this._rootItems,
    (t, e) => t.name + "___" + e,
    (t) => l`
						<umb-tree-item
							.entityType=${t.entityType}
							.props=${{ hideActions: this.hideTreeItemActions, item: t }}></umb-tree-item>
					`
  )}
				${h(this, n, R).call(this)}
			` : _;
};
d = /* @__PURE__ */ new WeakMap();
R = function() {
  return this._totalPages <= 1 || this._currentPage === this._totalPages ? _ : l` <umb-tree-load-more-button @click=${$(this, d)}></umb-tree-load-more-button> `;
};
i.styles = x`
		#load-more {
			width: 100%;
		}
	`;
s([
  r({ type: Object, attribute: !1 })
], i.prototype, "api", 1);
s([
  r({ type: Object, attribute: !1 })
], i.prototype, "selectionConfiguration", 2);
s([
  r({ type: Boolean, attribute: !1 })
], i.prototype, "hideTreeItemActions", 2);
s([
  r({ type: Boolean, attribute: !1 })
], i.prototype, "hideTreeRoot", 2);
s([
  r({ type: Boolean, attribute: !1 })
], i.prototype, "expandTreeRoot", 2);
s([
  r({ type: Object, attribute: !1 })
], i.prototype, "startNode", 2);
s([
  r({ type: Boolean, attribute: !1 })
], i.prototype, "foldersOnly", 2);
s([
  r({ attribute: !1 })
], i.prototype, "selectableFilter", 2);
s([
  r({ attribute: !1 })
], i.prototype, "filter", 2);
s([
  r({ attribute: !1 })
], i.prototype, "expansion", 2);
s([
  u()
], i.prototype, "_rootItems", 2);
s([
  u()
], i.prototype, "_treeRoot", 2);
s([
  u()
], i.prototype, "_currentPage", 2);
s([
  u()
], i.prototype, "_totalPages", 2);
i = s([
  C("umb-default-tree")
], i);
const w = i;
export {
  i as UmbDefaultTreeElement,
  w as default
};
//# sourceMappingURL=default-tree.element-fgMsmaPG.js.map
