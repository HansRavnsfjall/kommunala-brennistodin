import { property as T, customElement as A, nothing as x, html as U, css as P, state as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UmbCreateEntityAction as J } from "../create.action-Cs49sHMB.js";
import { UmbDeleteEntityAction as Z } from "../delete.action-i_U4UuZZ.js";
import { UmbDuplicateEntityAction as tt } from "../duplicate.action-Ch8k5FLV.js";
import { b as it, U as st, a as rt, c as nt } from "../constants-BttLQSIM.js";
import { U as S } from "../has-children.context-token-D_lphZ2G.js";
import { U as pt } from "../entity-action-base-C1FfYSbT.js";
import { UmbEntityContext as g } from "@umbraco-cms/backoffice/entity";
import { a as f } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { U as ut } from "../request-reload-structure-for-entity.event-CHtdC9hO.js";
import { UmbContextBase as D } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as M } from "@umbraco-cms/backoffice/observable-api";
import { U as ht } from "../default.action.kind-Cyn-1n_n.js";
var L = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, C = (e, t, i, r) => {
  for (var s = r > 1 ? void 0 : r ? Y(t, i) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (r ? p(t, i, s) : p(s)) || s);
  return r && s && L(t, i, s), s;
};
let c = class extends b {
  render() {
    return this.value ? U`
			<umb-entity-actions-bundle
				.entityType=${this.value.entityType}
				.unique=${this.value.unique}
				.label=${this.localize.term("actions_viewActionsFor", [this.value.name])}>
			</umb-entity-actions-bundle>
		` : x;
  }
};
C([
  T({ attribute: !1 })
], c.prototype, "value", 2);
c = C([
  A("umb-entity-actions-table-column-view")
], c);
var $ = Object.defineProperty, B = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, a = (e, t, i, r) => {
  for (var s = r > 1 ? void 0 : r ? B(t, i) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (r ? p(t, i, s) : p(s)) || s);
  return r && s && $(t, i, s), s;
}, d = (e, t, i) => t.has(e) || I("Cannot " + i), y = (e, t, i) => (d(e, t, "read from private field"), t.get(e)), l = (e, t, i) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), O = (e, t, i, r) => (d(e, t, "write to private field"), t.set(e, i), i), v = (e, t, i) => (d(e, t, "access private method"), i), h, _, m, u;
let n = class extends b {
  constructor() {
    super(...arguments), l(this, _), this._props = {}, l(this, h, new g(this)), l(this, u);
  }
  get entityType() {
    return this._props.entityType;
  }
  set entityType(e) {
    e === void 0 || e === this._props.entityType || (this._props.entityType = e, v(this, _, m).call(this), this.requestUpdate("_props"), this._filter = (t) => t.forEntityTypes.includes(e));
  }
  get unique() {
    return this._props.unique;
  }
  set unique(e) {
    e !== this._props.unique && (this._props.unique = e, v(this, _, m).call(this), this.requestUpdate("_props"));
  }
  render() {
    return this._filter ? U`
					<umb-extension-with-api-slot
						type="entityAction"
						.filter=${this._filter}
						.elementProps=${this._props}
						.apiArgs=${this._apiArgs}
						.renderMethod=${(e, t) => (!y(this, u) && t === 0 && (e.component?.updateComplete.then(async () => {
      const i = e.component?.shadowRoot?.querySelector("uui-menu-item");
      i?.updateComplete.then(async () => {
        i?.shadowRoot?.querySelector("#label-button")?.focus?.();
      });
    }), O(this, u, !0)), e.component)}></umb-extension-with-api-slot>
				` : "";
  }
};
h = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
m = function() {
  !this._props.entityType || this._props.unique === void 0 || (y(this, h).setEntityType(this._props.entityType), y(this, h).setUnique(this._props.unique), O(this, u, !1), this._apiArgs = (e) => [{ entityType: this._props.entityType, unique: this._props.unique, meta: e.meta }]);
};
u = /* @__PURE__ */ new WeakMap();
n.styles = [
  P`
			:host {
				--uui-menu-item-indent: 0;
				--uui-menu-item-flat-structure: 1;
			}
		`
];
a([
  T({ type: String, attribute: "entity-type" })
], n.prototype, "entityType", 1);
a([
  E()
], n.prototype, "_filter", 2);
a([
  T({ type: String })
], n.prototype, "unique", 1);
a([
  E()
], n.prototype, "_props", 2);
a([
  E()
], n.prototype, "_apiArgs", 2);
n = a([
  A("umb-entity-action-list")
], n);
class G extends D {
  constructor(t) {
    super(t, S), this.#t = new M(void 0), this.hasChildren = this.#t.asObservable();
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
  setHasChildren(t) {
    this.#t.setValue(t);
  }
}
class N extends f {
  static {
    this.TYPE = "entity-updated";
  }
  constructor(t) {
    super(N.TYPE, t);
  }
}
class q extends f {
  static {
    this.TYPE = "entity-deleted";
  }
  constructor(t) {
    super(q.TYPE, t);
  }
}
class w extends f {
  static {
    this.TYPE = "request-reload-children-of-entity";
  }
  constructor(t) {
    super(w.TYPE, t);
  }
}
export {
  ht as UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST,
  it as UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST,
  st as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL,
  rt as UMB_ENTITY_CREATE_OPTION_ACTION_LIST_MODAL_ALIAS,
  nt as UMB_ENTITY_HAS_CHILDREN_CONDITION_ALIAS,
  S as UMB_HAS_CHILDREN_ENTITY_CONTEXT,
  J as UmbCreateEntityAction,
  Z as UmbDeleteEntityAction,
  tt as UmbDuplicateEntityAction,
  pt as UmbEntityActionBase,
  f as UmbEntityActionEvent,
  n as UmbEntityActionListElement,
  q as UmbEntityDeletedEvent,
  N as UmbEntityUpdatedEvent,
  G as UmbHasChildrenEntityContext,
  w as UmbRequestReloadChildrenOfEntityEvent,
  ut as UmbRequestReloadStructureForEntityEvent
};
//# sourceMappingURL=index.js.map
