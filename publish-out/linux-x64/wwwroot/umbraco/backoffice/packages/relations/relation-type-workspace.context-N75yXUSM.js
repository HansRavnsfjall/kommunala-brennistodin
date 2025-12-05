import { UmbRelationTypeDetailRepository as y } from "./relation-type-detail.repository-C4GweMi0.js";
import { UMB_SETTINGS_SECTION_PATHNAME as T } from "@umbraco-cms/backoffice/settings";
import { UMB_WORKSPACE_PATH_PATTERN as O, UmbWorkspaceRouteManager as f } from "@umbraco-cms/backoffice/workspace";
import { U as _ } from "./relation-type-workspace.context-token-D96LZ9-c.js";
import { observeMultiple as E, UmbObjectState as w } from "@umbraco-cms/backoffice/observable-api";
import { html as P, css as R, state as d, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbContextBase as C } from "@umbraco-cms/backoffice/class-api";
const k = O.generateAbsolute({
  sectionName: T,
  entityType: "relations-root"
});
var S = Object.defineProperty, W = Object.getOwnPropertyDescriptor, v = (a) => {
  throw TypeError(a);
}, c = (a, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? W(t, e) : t, n = a.length - 1, p; n >= 0; n--)
    (p = a[n]) && (s = (i ? p(t, e, s) : p(s)) || s);
  return i && s && S(t, e, s), s;
}, m = (a, t, e) => t.has(a) || v("Cannot " + e), h = (a, t, e) => (m(a, t, "read from private field"), t.get(a)), u = (a, t, e) => t.has(a) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e), g = (a, t, e, i) => (m(a, t, "write to private field"), t.set(a, e), e), q = (a, t, e) => (m(a, t, "access private method"), e), r, l, b;
let o = class extends A {
  constructor() {
    super(), u(this, l), u(this, r), this._name = "", this._alias = "", this.consumeContext(_, (a) => {
      g(this, r, a), q(this, l, b).call(this);
    });
  }
  render() {
    return P`
			<umb-workspace-editor back-path="${k}">
				<umb-input-with-alias
					id="name"
					slot="header"
					label=${this.localize.term("placeholders_entername")}
					.value=${this._name ?? ""}
					.alias=${this._alias ?? ""}
					readonly>
				</umb-input-with-alias>
			</umb-workspace-editor>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
b = function() {
  h(this, r) && this.observe(E([h(this, r).name, h(this, r).alias]), ([a, t]) => {
    this._name = a, this._alias = t;
  });
};
o.styles = [
  R`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#name {
				width: 100%;
			}
		`
];
c([
  d()
], o.prototype, "_name", 2);
c([
  d()
], o.prototype, "_alias", 2);
o = c([
  U("umb-relation-type-workspace-editor")
], o);
class K extends C {
  constructor(t) {
    super(t, _), this.workspaceAlias = "Umb.Workspace.RelationType", this.repository = new y(this), this.#e = new w(void 0), this.data = this.#e.asObservable(), this.unique = this.#e.asObservablePart((e) => e?.unique), this.name = this.#e.asObservablePart((e) => e?.name), this.alias = this.#e.asObservablePart((e) => e?.alias), this.parent = this.#e.asObservablePart((e) => e?.parent), this.child = this.#e.asObservablePart((e) => e?.child), this.isBidirectional = this.#e.asObservablePart((e) => e?.isBidirectional), this.isDependency = this.#e.asObservablePart((e) => e?.isDependency), this.routes = new f(this), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: o,
        setup: (e, i) => {
          const s = i.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
  #e;
  async load(t) {
    const { data: e } = await this.repository.requestByUnique(t);
    e && this.#e.setValue(e);
  }
  getData() {
    return this.#e.getValue();
  }
  getUnique() {
    return this.getData()?.unique;
  }
  getEntityType() {
    return "relation-type";
  }
  destroy() {
    this.#e.destroy(), super.destroy();
  }
}
export {
  K as UmbRelationTypeWorkspaceContext,
  K as api
};
//# sourceMappingURL=relation-type-workspace.context-N75yXUSM.js.map
