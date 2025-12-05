import { e as U, f as O } from "./manifests-BP7S9LPy.js";
import { U as q } from "./document-item-data-resolver-ClBbqArt.js";
import { nothing as d, ifDefined as B, html as f, property as h, state as c, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as M } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as R } from "@umbraco-cms/backoffice/workspace";
import { UmbSelectedEvent as I, UmbDeselectedEvent as S } from "@umbraco-cms/backoffice/event";
var A = Object.defineProperty, W = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, r = (e, t, n, p) => {
  for (var l = p > 1 ? void 0 : p ? W(t, n) : t, _ = e.length - 1, m; _ >= 0; _--)
    (m = e[_]) && (l = (p ? m(t, n, l) : m(l)) || l);
  return p && l && A(t, n, l), l;
}, D = (e, t, n) => t.has(e) || v("Cannot " + n), o = (e, t, n) => (D(e, t, "read from private field"), n ? n.call(e) : t.get(e)), y = (e, t, n) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), u = (e, t, n) => (D(e, t, "access private method"), n), i, a, b, E, T, P, $, g;
let s = class extends C {
  constructor() {
    super(), y(this, a), y(this, i, new q(this)), this.readonly = !1, this.standalone = !1, this.selectOnly = !1, this.selectable = !1, this.selected = !1, this.disabled = !1, this._unique = "", this._name = "", this._icon = "", this._isTrashed = !1, this._isDraft = !1, this._editPath = "", new M(this, R).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: U, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    }), o(this, i).observe(o(this, i).unique, (e) => this._unique = e ?? ""), o(this, i).observe(o(this, i).name, (e) => this._name = e ?? ""), o(this, i).observe(o(this, i).icon, (e) => this._icon = e ?? ""), o(this, i).observe(o(this, i).isTrashed, (e) => this._isTrashed = e ?? !1), o(this, i).observe(o(this, i).isDraft, (e) => this._isDraft = e ?? !1);
  }
  get item() {
    return o(this, i).getData();
  }
  set item(e) {
    o(this, i).setData(e);
  }
  render() {
    return this.item ? f`
			<uui-ref-node
				name=${this._name}
				href=${B(u(this, a, b).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}
				?select-only=${this.selectOnly}
				?selectable=${this.selectable}
				?selected=${this.selected}
				?disabled=${this.disabled}
				@selected=${u(this, a, E)}
				@deselected=${u(this, a, T)}>
				<slot name="actions" slot="actions"></slot>
				${u(this, a, P).call(this)}${u(this, a, g).call(this)} ${u(this, a, $).call(this)}
			</uui-ref-node>
		` : d;
  }
};
i = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
b = function() {
  if (!this._unique) return;
  const e = O.generateLocal({ unique: this._unique });
  return `${this._editPath}/${e}`;
};
E = function(e) {
  e.stopPropagation(), this.dispatchEvent(new I(this._unique));
};
T = function(e) {
  e.stopPropagation(), this.dispatchEvent(new S(this._unique));
};
P = function() {
  return this._icon ? f`<umb-icon slot="icon" name=${this._icon}></umb-icon>` : d;
};
$ = function() {
  return this._isTrashed ? f`<uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag>` : d;
};
g = function() {
  return this._isDraft ? f`<uui-tag size="s" slot="tag" look="secondary" color="default">Draft</uui-tag>` : d;
};
r([
  h({ type: Object })
], s.prototype, "item", 1);
r([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
r([
  h({ type: Boolean })
], s.prototype, "standalone", 2);
r([
  h({ type: Boolean, attribute: "select-only", reflect: !0 })
], s.prototype, "selectOnly", 2);
r([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "selectable", 2);
r([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "selected", 2);
r([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "disabled", 2);
r([
  c()
], s.prototype, "_unique", 2);
r([
  c()
], s.prototype, "_name", 2);
r([
  c()
], s.prototype, "_icon", 2);
r([
  c()
], s.prototype, "_isTrashed", 2);
r([
  c()
], s.prototype, "_isDraft", 2);
r([
  c()
], s.prototype, "_editPath", 2);
s = r([
  w("umb-document-item-ref")
], s);
export {
  s as UmbDocumentItemRefElement,
  s as element
};
//# sourceMappingURL=document-item-ref.element-5Q4bYfBj.js.map
