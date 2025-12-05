import { p as I } from "./parse-int.function.js";
import { html as a, nothing as A, repeat as M, when as r, css as P, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { C as S } from "./display-mode-base.element.js";
var B = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, W = (t, e, n, i) => {
  for (var l = i > 1 ? void 0 : i ? B(e, n) : e, d = t.length - 1, v; d >= 0; d--)
    (v = t[d]) && (l = v(l) || l);
  return l;
}, f = (t, e, n) => e.has(t) || $("Cannot " + n), _ = (t, e, n) => (f(t, e, "read from private field"), n ? n.call(t) : e.get(t)), h = (t, e, n) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), b = (t, e, n, i) => (f(t, e, "write to private field"), e.set(t, n), n), o = (t, e, n) => (f(t, e, "access private method"), n), u, c, s, w, p, E, g, C, y, k;
let m = class extends S {
  constructor() {
    super(...arguments), h(this, s), h(this, u), h(this, c, 1 / 0);
  }
  connectedCallback() {
    super.connectedCallback(), b(this, u, this.getConfigByAlias("defaultIcon")), b(this, c, I(this.getConfigByAlias("maxItems")) || 1 / 0);
  }
  render() {
    return a`${o(this, s, y).call(this)} ${o(this, s, C).call(this)}`;
  }
};
u = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
w = function(t) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("add", { bubbles: !0, detail: { listType: "list" } }));
};
p = function(t, e, n) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("edit", { bubbles: !0, detail: { item: e, index: n } }));
};
E = function(t, e, n) {
  t.stopPropagation(), this.dispatchEvent(new CustomEvent("remove", { bubbles: !0, detail: { item: e, index: n } }));
};
g = function(t) {
  t.stopPropagation();
  const { newIndex: e, oldIndex: n } = t.detail;
  this.dispatchEvent(new CustomEvent("sort", { bubbles: !0, detail: { newIndex: e, oldIndex: n } }));
};
C = function() {
  return this.allowAdd ? a`
			<uui-button
				id="btn-add"
				label=${this.localize.term(this.addButtonLabelKey ?? "general_choose")}
				look="placeholder"
				@click=${o(this, s, w)}></uui-button>
		` : A;
};
y = function() {
  if (this.items)
    return a`
			<contentment-sortable-list
				class="uui-ref-list"
				item-selector="uui-ref-node"
				?disabled=${!this.allowSort}
				@sort-end=${o(this, s, g)}>
				${M(
      this.items,
      (t) => t.value,
      (t, e) => o(this, s, k).call(this, t, e)
    )}
			</contentment-sortable-list>
		`;
};
k = function(t, e) {
  var n;
  if (t)
    return a`
			<uui-ref-node
				name=${t.name}
				detail=${t.description ?? ""}
				?standalone=${((n = this.items) == null ? void 0 : n.length) === 1 && _(this, c) === 1}
				@open=${(i) => o(this, s, p).call(this, i, t, e)}>
				${r(t.icon ?? _(this, u), (i) => a`<umb-icon slot="icon" name=${i}></umb-icon>`)}
				${r(
      this.allowEdit || this.allowRemove,
      () => a`
						<uui-action-bar slot="actions">
							${r(
        this.allowEdit || this.canEdit(t, e),
        () => a`
									<uui-button
										label=${this.localize.term("general_edit")}
										@click=${(i) => o(this, s, p).call(this, i, t, e)}></uui-button>
								`
      )}
							${r(
        this.allowRemove,
        () => a`
									<uui-button
										label=${this.localize.term("general_remove")}
										@click=${(i) => o(this, s, E).call(this, i, t, e)}></uui-button>
								`
      )}
						</uui-action-bar>
					`
    )}
			</uui-ref-node>
		`;
};
m.styles = [
  P`
			#btn-add {
				display: block;
			}
		`
];
m = W([
  D("contentment-display-mode-list")
], m);
export {
  m as ContentmentDisplayModeListElement,
  m as element
};
//# sourceMappingURL=list.element.js.map
