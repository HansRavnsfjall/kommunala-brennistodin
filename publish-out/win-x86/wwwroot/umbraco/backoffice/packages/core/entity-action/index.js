import { UmbEntityContext as X, UMB_ENTITY_CONTEXT as z } from "@umbraco-cms/backoffice/entity";
import { css as M, property as m, state as q, customElement as x, html as N, query as J, nothing as Q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UUIScrollContainerElement as Z } from "@umbraco-cms/backoffice/external/uui";
import { observeMultiple as k, UmbBooleanState as j } from "@umbraco-cms/backoffice/observable-api";
import { UmbCreateEntityAction as Tt } from "../create.action-Bzx12CJb.js";
import { UmbDeleteEntityAction as wt } from "../delete.action-i_U4UuZZ.js";
import { UmbDuplicateEntityAction as Ct } from "../duplicate.action-Ch8k5FLV.js";
import { b as Ut, U as Ot, a as It, c as qt } from "../constants-BttLQSIM.js";
import { U as tt } from "../has-children.context-token-D_lphZ2G.js";
import { U as Nt } from "../entity-action-base-C1FfYSbT.js";
import { a as g } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { U as gt } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { UmbContextBase as et } from "@umbraco-cms/backoffice/class-api";
import { U as Pt } from "../default.action.kind-Cyn-1n_n.js";
var it = Object.defineProperty, st = Object.getOwnPropertyDescriptor, L = (t) => {
  throw TypeError(t);
}, _ = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? st(e, i) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (s = (n ? p(e, i, s) : p(s)) || s);
  return n && s && it(e, i, s), s;
}, D = (t, e, i) => e.has(t) || L("Cannot " + i), b = (t, e, i) => (D(t, e, "read from private field"), e.get(t)), C = (t, e, i) => e.has(t) ? L("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Y = (t, e, i, n) => (D(t, e, "write to private field"), e.set(t, i), i), S = (t, e, i) => (D(t, e, "access private method"), i), E, f, U, d;
let h = class extends $ {
  constructor() {
    super(...arguments), C(this, f), this._props = {}, C(this, E, new X(this)), C(this, d);
  }
  get entityType() {
    return this._props.entityType;
  }
  set entityType(t) {
    t === void 0 || t === this._props.entityType || (this._props.entityType = t, S(this, f, U).call(this), this.requestUpdate("_props"), this._filter = (e) => e.forEntityTypes.includes(t));
  }
  get unique() {
    return this._props.unique;
  }
  set unique(t) {
    t !== this._props.unique && (this._props.unique = t, S(this, f, U).call(this), this.requestUpdate("_props"));
  }
  render() {
    return this._filter ? N`
					<umb-extension-with-api-slot
						type="entityAction"
						.filter=${this._filter}
						.elementProps=${this._props}
						.apiArgs=${this._apiArgs}
						.renderMethod=${(t, e) => (!b(this, d) && e === 0 && (t.component?.updateComplete.then(async () => {
      const i = t.component?.shadowRoot?.querySelector("uui-menu-item");
      i?.updateComplete.then(async () => {
        i?.shadowRoot?.querySelector("#label-button")?.focus?.();
      });
    }), Y(this, d, !0)), t.component)}></umb-extension-with-api-slot>
				` : "";
  }
};
E = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
U = function() {
  !this._props.entityType || this._props.unique === void 0 || (b(this, E).setEntityType(this._props.entityType), b(this, E).setUnique(this._props.unique), Y(this, d, !1), this._apiArgs = (t) => [{ entityType: this._props.entityType, unique: this._props.unique, meta: t.meta }]);
};
d = /* @__PURE__ */ new WeakMap();
h.styles = [
  M`
			:host {
				--uui-menu-item-indent: 0;
				--uui-menu-item-flat-structure: 1;
			}
		`
];
_([
  m({ type: String, attribute: "entity-type" })
], h.prototype, "entityType", 1);
_([
  q()
], h.prototype, "_filter", 2);
_([
  m({ type: String })
], h.prototype, "unique", 1);
_([
  q()
], h.prototype, "_props", 2);
_([
  q()
], h.prototype, "_apiArgs", 2);
h = _([
  x("umb-entity-action-list")
], h);
var nt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, B = (t) => {
  throw TypeError(t);
}, A = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? rt(e, i) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (s = (n ? p(e, i, s) : p(s)) || s);
  return n && s && nt(e, i, s), s;
}, P = (t, e, i) => e.has(t) || B("Cannot " + i), r = (t, e, i) => (P(t, e, "read from private field"), e.get(t)), c = (t, e, i) => e.has(t) ? B("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), T = (t, e, i, n) => (P(t, e, "write to private field"), e.set(t, i), i), O = (t, e, i) => (P(t, e, "access private method"), i), l, a, v, w, y, W, R, H;
let u = class extends $ {
  constructor() {
    super(), c(this, y), this.compact = !1, c(this, l), c(this, a), c(this, v), c(this, w), this.consumeContext(z, (t) => {
      t && this.observe(k([t.entityType, t.unique]), ([e, i]) => {
        T(this, v, e), T(this, w, i), r(this, a) && (r(this, a).entityType = e, r(this, a).unique = i);
      });
    });
  }
  render() {
    return N`<umb-dropdown
			id="action-modal"
			@click=${O(this, y, R)}
			@opened=${O(this, y, H)}
			.label=${this.label}
			?compact=${this.compact}
			hide-expand>
			<slot name="label" slot="label"></slot>
			<slot></slot>
		</umb-dropdown>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
W = function() {
  this._dropdownElement?.closeDropdown();
};
R = function(t) {
  t.stopPropagation();
};
H = function() {
  r(this, l) || (T(this, l, new Z()), T(this, a, new h()), r(this, a).addEventListener("action-executed", O(this, y, W).bind(this)), r(this, a).entityType = r(this, v), r(this, a).unique = r(this, w), r(this, a).setAttribute("label", this.label ?? ""), r(this, l).appendChild(r(this, a)), this._dropdownElement?.appendChild(r(this, l)));
};
u.styles = [
  M`
			uui-scroll-container {
				max-height: 700px;
			}
		`
];
A([
  m({ type: Boolean })
], u.prototype, "compact", 2);
A([
  m({ type: String })
], u.prototype, "label", 2);
A([
  J("#action-modal")
], u.prototype, "_dropdownElement", 2);
u = A([
  x("umb-entity-actions-dropdown")
], u);
var ot = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, F = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? pt(e, i) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (s = (n ? p(e, i, s) : p(s)) || s);
  return n && s && ot(e, i, s), s;
};
let I = class extends $ {
  render() {
    return this.value ? N`
			<umb-entity-actions-bundle
				.entityType=${this.value.entityType}
				.unique=${this.value.unique}
				.label=${this.localize.string(this.value.name)}>
			</umb-entity-actions-bundle>
		` : Q;
  }
};
F([
  m({ attribute: !1 })
], I.prototype, "value", 2);
I = F([
  x("umb-entity-actions-table-column-view")
], I);
class mt extends et {
  constructor(e) {
    super(e, tt), this.#t = new j(void 0), this.hasChildren = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the hasChildren state
   * @returns {boolean} - The hasChildren state
   * @memberof UmbHasChildrenEntityContext
   */
  getHasChildren() {
    return this.#t.getValue();
  }
  /**
   * Sets the hasChildren state
   * @param {boolean} hasChildren - The hasChildren state
   * @memberof UmbHasChildrenEntityContext
   */
  setHasChildren(e) {
    this.#t.setValue(e);
  }
}
class V extends g {
  static {
    this.TYPE = "entity-updated";
  }
  constructor(e) {
    super(V.TYPE, e);
  }
}
class G extends g {
  static {
    this.TYPE = "entity-deleted";
  }
  constructor(e) {
    super(G.TYPE, e);
  }
}
class K extends g {
  static {
    this.TYPE = "request-reload-children-of-entity";
  }
  constructor(e) {
    super(K.TYPE, e);
  }
}
export {
  Pt as UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST,
  Ut as UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST,
  Ot as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL,
  It as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL_ALIAS,
  qt as UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS,
  tt as UMB_HAS_CHILDREN_ENTITY_CONTEXT,
  Tt as UmbCreateEntityAction,
  wt as UmbDeleteEntityAction,
  Ct as UmbDuplicateEntityAction,
  Nt as UmbEntityActionBase,
  g as UmbEntityActionEvent,
  h as UmbEntityActionListElement,
  G as UmbEntityDeletedEvent,
  V as UmbEntityUpdatedEvent,
  mt as UmbHasChildrenEntityContext,
  K as UmbRequestReloadChildrenOfEntityEvent,
  gt as UmbRequestReloadStructureForEntityEvent
};
//# sourceMappingURL=index.js.map
