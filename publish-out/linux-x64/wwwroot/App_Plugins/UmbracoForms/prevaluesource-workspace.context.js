var O = (t) => {
  throw TypeError(t);
};
var _ = (t, s, e) => s.has(t) || O("Cannot " + e);
var i = (t, s, e) => (_(t, s, "read from private field"), e ? e.call(t) : s.get(t)), h = (t, s, e) => s.has(t) ? O("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), y = (t, s, e, r) => (_(t, s, "write to private field"), r ? r.call(t, e) : s.set(t, e), e), f = (t, s, e) => (_(t, s, "access private method"), e);
import { M as C, N as U, O as I, Q as F, k } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import { F as A } from "./prevaluesource-workspace.context-token.js";
import { UmbElementMixin as V } from "@umbraco-cms/backoffice/element-api";
import { LitElement as W, html as x, css as D, state as M, property as L, customElement as B } from "@umbraco-cms/backoffice/external/lit";
import { UmbSubmittableWorkspaceContextBase as z } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as T } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as Y } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as $, UmbRequestReloadStructureForEntityEvent as X } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as K } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as G } from "@umbraco-cms/backoffice/localization-api";
var Q = Object.defineProperty, j = Object.getOwnPropertyDescriptor, q = (t) => {
  throw TypeError(t);
}, w = (t, s, e, r) => {
  for (var a = r > 1 ? void 0 : r ? j(s, e) : s, u = t.length - 1, n; u >= 0; u--)
    (n = t[u]) && (a = (r ? n(s, e, a) : n(a)) || a);
  return r && a && Q(s, e, a), a;
}, P = (t, s, e) => s.has(t) || q("Cannot " + e), S = (t, s, e) => (P(t, s, "read from private field"), s.get(t)), g = (t, s, e) => s.has(t) ? q("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), H = (t, s, e, r) => (P(t, s, "write to private field"), s.set(t, e), e), R = (t, s, e) => (P(t, s, "access private method"), e), c, d, N, b;
const J = "forms-prevaluesource-workspace-editor";
let l = class extends V(
  W
) {
  constructor() {
    super(), g(this, d), this._prevalueSourceName = "", g(this, c), this.consumeContext(A, (t) => {
      H(this, c, t), R(this, d, N).call(this);
    });
  }
  render() {
    return x` <umb-workspace-editor alias="Forms.Workspace.PrevalueSources">
      <uui-input
        slot="header"
        id="nameInput"
        label=${this.localize.term("placeholders_entername")}
        placeholder=${this.localize.term("placeholders_entername")}
        required
        .value=${this._prevalueSourceName}
        @input="${R(this, d, b)}"
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
N = function() {
  S(this, c) && this.observe(
    S(this, c).data,
    (t) => this._prevalueSourceName = (t == null ? void 0 : t.name) ?? ""
  );
};
b = function(t) {
  var s;
  (s = S(this, c)) == null || s.setName(t.target.value.toString());
};
l.styles = [
  D`
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
w([
  M()
], l.prototype, "_prevalueSourceName", 2);
w([
  L({ type: String, attribute: !1 })
], l.prototype, "workspaceAlias", 2);
l = w([
  B(J)
], l);
var o, m, p, v, E;
class Z extends z {
  constructor(e) {
    super(e, C);
    h(this, v);
    h(this, o);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h(this, m);
    h(this, p);
    this.prevalueSourceRepository = new U(this), this.prevalueSourceTypeRepository = new I(this), y(this, o, new T(void 0)), this.data = i(this, o).asObservable(), this.unique = i(this, o).asObservablePart((r) => r == null ? void 0 : r.unique), this.name = i(this, o).asObservablePart((r) => r == null ? void 0 : r.name), this.id = i(this, o).asObservablePart((r) => r == null ? void 0 : r.unique), y(this, p, new T([])), this.prevalues = i(this, p).asObservable(), this.routes.setRoutes([
      {
        path: "create/:type",
        component: l,
        setup: async (r, a) => {
          const u = a.match.params.type;
          await this.create(u);
        }
      },
      {
        path: "edit/:unique",
        component: l,
        setup: (r, a) => {
          const u = a.match.params.unique;
          this.load(u);
        }
      }
    ]);
  }
  async load(e) {
    var a;
    y(this, m, (a = this.prevalueSourceRepository) == null ? void 0 : a.requestByUnique(e));
    const { data: r } = await i(this, m);
    r && (this.setIsNew(!1), i(this, o).update(r), await f(this, v, E).call(this, r.unique));
  }
  async create(e) {
    var u;
    let a = (await ((u = this.prevalueSourceRepository) == null ? void 0 : u.requestPrevalueSourceScaffold())).data;
    return a.fieldPreValueSourceTypeId = e, this.modalContext && (a = { ...a, ...this.modalContext.data.preset }), this.setIsNew(!0), i(this, o).setValue(a), { data: a };
  }
  async requestSave() {
    await this.submit();
  }
  async submit() {
    if (!i(this, o).value || !i(this, o).value.unique) return;
    if (i(this, o).value.name.trim().length === 0) {
      const u = await this.getContext(
        K
      ), n = new G(this);
      u == null || u.peek("danger", {
        data: {
          message: n.term("formEdit_noNameForForm")
        }
      });
      return;
    }
    const e = await this.getContext(Y);
    if (this.getIsNew()) {
      const { error: u } = await this.prevalueSourceRepository.create(
        i(this, o).value,
        null
      );
      if (u) return;
      const n = new $({
        entityType: F,
        unique: null
      });
      e == null || e.dispatchEvent(n), this.setIsNew(!1);
      return;
    }
    const { error: r } = await this.prevalueSourceRepository.save(
      i(this, o).value
    );
    if (r) return;
    await f(this, v, E).call(this, i(this, o).value.unique);
    const a = new X({
      unique: this.getUnique(),
      entityType: this.getEntityType()
    });
    e == null || e.dispatchEvent(a);
  }
  async loadPrevalueSourceType(e) {
    const { data: r } = await this.prevalueSourceTypeRepository.requestByUnique(e);
    return r;
  }
  getData() {
    return i(this, o).getValue();
  }
  getPrevalues() {
    const e = i(this, p).getValue();
    return Object.keys(e).map((r) => e[r]);
  }
  getUnique() {
    var e;
    return ((e = this.getData()) == null ? void 0 : e.unique) || "";
  }
  getPrevalueSourceTypeId() {
    var e;
    return ((e = this.getData()) == null ? void 0 : e.fieldPreValueSourceTypeId) || "";
  }
  getEntityType() {
    return k;
  }
  getName() {
    var e;
    return (e = i(this, o).getValue()) == null ? void 0 : e.name;
  }
  setName(e) {
    i(this, o).update({ name: e });
  }
  setPrevalueSourceProperty(e, r) {
    i(this, o).update({ [e]: r });
  }
  getPrevalueSourceProperty(e) {
    var r;
    return (r = this.getData()) == null ? void 0 : r[e];
  }
  destroy() {
    i(this, o).destroy(), super.destroy();
  }
}
o = new WeakMap(), m = new WeakMap(), p = new WeakMap(), v = new WeakSet(), E = async function(e) {
  const { data: r } = await this.prevalueSourceRepository.requestPrevalues(e);
  r && i(this, p).update(r);
};
const he = Z;
export {
  Z as FormsPrevalueSourceWorkspaceContext,
  he as api
};
//# sourceMappingURL=prevaluesource-workspace.context.js.map
