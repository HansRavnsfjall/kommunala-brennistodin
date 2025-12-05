var f = (e) => {
  throw TypeError(e);
};
var v = (e, s, t) => s.has(e) || f("Cannot " + t);
var o = (e, s, t) => (v(e, s, "read from private field"), t ? t.call(e) : s.get(e)), l = (e, s, t) => s.has(e) ? f("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), d = (e, s, t, a) => (v(e, s, "write to private field"), a ? a.call(e, t) : s.set(e, t), t);
import { j as O, m as R, n as q, o as N, p as C, q as b } from "./index.js";
import { UmbElementMixin as I } from "@umbraco-cms/backoffice/element-api";
import { LitElement as U, html as A, css as P, state as F, property as W, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbSubmittableWorkspaceContextBase as x } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as M } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as z } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as B, UmbRequestReloadStructureForEntityEvent as V } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as Y } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as $ } from "@umbraco-cms/backoffice/localization-api";
var L = Object.defineProperty, X = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, S = (e, s, t, a) => {
  for (var i = a > 1 ? void 0 : a ? X(s, t) : s, n = e.length - 1, m; n >= 0; n--)
    (m = e[n]) && (i = (a ? m(s, t, i) : m(i)) || i);
  return a && i && L(s, t, i), i;
}, _ = (e, s, t) => s.has(e) || w("Cannot " + t), y = (e, s, t) => (_(e, s, "read from private field"), s.get(e)), T = (e, s, t) => s.has(e) ? w("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), K = (e, s, t, a) => (_(e, s, "write to private field"), s.set(e, t), t), E = (e, s, t) => (_(e, s, "access private method"), t), c, h, g, D;
const G = "forms-datasource-workspace-editor";
let u = class extends I(
  U
) {
  constructor() {
    super(), T(this, h), this._dataSourceName = "", T(this, c), this.consumeContext(O, (e) => {
      K(this, c, e), E(this, h, g).call(this);
    });
  }
  render() {
    return A` <umb-workspace-editor alias="Forms.Workspace.DataSources">
      <uui-input
        slot="header"
        id="nameInput"
        label=${this.localize.term("placeholders_entername")}
        placeholder=${this.localize.term("placeholders_entername")}
        required
        .value=${this._dataSourceName}
        @input="${E(this, h, D)}"
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
g = function() {
  y(this, c) && this.observe(
    y(this, c).data,
    (e) => this._dataSourceName = (e == null ? void 0 : e.name) ?? ""
  );
};
D = function(e) {
  var s;
  (s = y(this, c)) == null || s.setName(e.target.value.toString());
};
u.styles = [
  P`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      #nameInput {
        flex: 1 1 auto;
      }
    `
];
S([
  F()
], u.prototype, "_dataSourceName", 2);
S([
  W({ type: String, attribute: !1 })
], u.prototype, "workspaceAlias", 2);
u = S([
  k(G)
], u);
var r, p;
class j extends x {
  constructor(t) {
    super(t, R);
    l(this, r);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    l(this, p);
    this.dataSourceRepository = new q(
      this
    ), this.dataSourceTypeRepository = new N(this), d(this, r, new M(void 0)), this.data = o(this, r).asObservable(), this.unique = o(this, r).asObservablePart((a) => a == null ? void 0 : a.unique), this.name = o(this, r).asObservablePart((a) => a == null ? void 0 : a.name), this.id = o(this, r).asObservablePart((a) => a == null ? void 0 : a.unique), this.routes.setRoutes([
      {
        path: "create/:type",
        component: u,
        setup: async (a, i) => {
          const n = i.match.params.type;
          await this.create(n);
        }
      },
      {
        path: "edit/:unique",
        component: u,
        setup: (a, i) => {
          const n = i.match.params.unique;
          this.load(n);
        }
      }
    ]);
  }
  async load(t) {
    d(this, p, this.dataSourceRepository.requestByUnique(t));
    const { data: a } = await o(this, p);
    a && (this.setIsNew(!1), o(this, r).update(a));
  }
  async create(t) {
    let i = (await this.dataSourceRepository.requestDataSourceScaffold()).data;
    return i.formDataSourceTypeId = t, this.modalContext && (i = { ...i, ...this.modalContext.data.preset }), this.setIsNew(!0), o(this, r).setValue(i), { data: i };
  }
  async requestSave() {
    await this.submit();
  }
  async submit() {
    if (!o(this, r).value || !o(this, r).value.unique) return;
    if (o(this, r).value.name.trim().length === 0) {
      const a = await this.getContext(
        Y
      ), i = new $(this);
      a == null || a.peek("danger", {
        data: {
          message: i.term("formEdit_noNameForForm")
        }
      });
      return;
    }
    const t = await this.getContext(z);
    if (this.getIsNew()) {
      await this.dataSourceRepository.create(o(this, r).value, null);
      const a = new B({
        entityType: C,
        unique: null
      });
      t == null || t.dispatchEvent(a), this.setIsNew(!1);
    } else {
      await this.dataSourceRepository.save(o(this, r).value);
      const a = new V({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      t == null || t.dispatchEvent(a);
    }
  }
  async loadDataSourceType(t) {
    const { data: a } = await this.dataSourceTypeRepository.requestByUnique(t);
    return a;
  }
  getData() {
    return o(this, r).getValue();
  }
  getUnique() {
    var t;
    return ((t = this.getData()) == null ? void 0 : t.unique) || "";
  }
  getDataSourceTypeId() {
    var t;
    return ((t = this.getData()) == null ? void 0 : t.formDataSourceTypeId) || "";
  }
  getEntityType() {
    return b;
  }
  getName() {
    var t;
    return (t = o(this, r).getValue()) == null ? void 0 : t.name;
  }
  setName(t) {
    o(this, r).update({ name: t });
  }
  setDataSourceProperty(t, a) {
    o(this, r).update({ [t]: a });
  }
  getDataSourceProperty(t) {
    var a;
    return (a = this.getData()) == null ? void 0 : a[t];
  }
  async getWizardScaffold() {
    const { data: t } = await this.dataSourceRepository.requestDataSourceWizardScaffold(
      this.getUnique()
    );
    return t;
  }
  destroy() {
    o(this, r).destroy(), super.destroy();
  }
}
r = new WeakMap(), p = new WeakMap();
const ot = j;
export {
  j as FormsDataSourceWorkspaceContext,
  ot as api
};
//# sourceMappingURL=datasource-workspace.context.js.map
