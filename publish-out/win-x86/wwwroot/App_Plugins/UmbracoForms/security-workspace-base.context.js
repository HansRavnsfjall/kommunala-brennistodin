var y = (e) => {
  throw TypeError(e);
};
var d = (e, a, t) => a.has(e) || y("Cannot " + t);
var n = (e, a, t) => (d(e, a, "read from private field"), t ? t.call(e) : a.get(e)), m = (e, a, t) => a.has(e) ? y("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), p = (e, a, t, s) => (d(e, a, "write to private field"), s ? s.call(e, t) : a.set(e, t), t);
import { UMB_ACTION_EVENT_CONTEXT as v } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadStructureForEntityEvent as b } from "@umbraco-cms/backoffice/entity-action";
import { UmbObjectState as q } from "@umbraco-cms/backoffice/observable-api";
import { UmbSubmittableWorkspaceContextBase as g } from "@umbraco-cms/backoffice/workspace";
import { d as S } from "./index.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/current-user";
var o, h, c;
class P extends g {
  constructor(t, s, i, u, _) {
    super(t, s);
    m(this, o);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    m(this, h);
    m(this, c);
    this._data = new q(void 0), this.data = this._data.asObservable(), this.unique = this._data.asObservablePart((r) => r == null ? void 0 : r.unique), this.name = this._data.asObservablePart((r) => r == null ? void 0 : r.name), this.id = this._data.asObservablePart((r) => r == null ? void 0 : r.unique), p(this, o, new u(this)), p(this, c, i), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: _,
        setup: (r, l) => {
          const f = l.match.params.unique;
          this.load(f);
        }
      }
    ]);
  }
  getData() {
    return this._data.getValue();
  }
  getUnique() {
    var t;
    return ((t = this.getData()) == null ? void 0 : t.unique) || "";
  }
  getEntityType() {
    return n(this, c);
  }
  setProperty(t, s) {
    this._data.value && this._data.update({ [t]: s });
  }
  async load(t) {
    var i;
    p(this, h, (i = n(this, o)) == null ? void 0 : i.requestByUnique(t));
    const { data: s } = await n(this, h);
    s && (this.setIsNew(!1), this._data.update(s));
  }
  async requestSave() {
    await this.submit();
  }
  async submit() {
    var u;
    if (!this._data.value || !this._data.value.unique) return;
    await ((u = n(this, o)) == null ? void 0 : u.save(this._data.value));
    const t = await this.getContext(S);
    await (t == null ? void 0 : t.getUserSecurity());
    const s = new b({
      unique: this.getUnique(),
      entityType: this.getEntityType()
    }), i = await this.getContext(v);
    i == null || i.dispatchEvent(s);
  }
  toggleFormSecurityAccess(t) {
    if (!this._data.value) return;
    const s = this._data.value.formsSecurity.map((i) => ({
      ...i,
      ...i.form === t && {
        hasAccess: !i.hasAccess
      }
    }));
    this._data.update({ formsSecurity: s });
  }
  setFormSecurityAccess(t, s) {
    if (!this._data.value) return;
    const i = this._data.value.formsSecurity.map((u) => ({
      ...u,
      ...u.form === t && {
        hasAccess: s
      }
    }));
    this._data.update({ formsSecurity: i });
  }
  destroy() {
    this._data.destroy(), super.destroy();
  }
}
o = new WeakMap(), h = new WeakMap(), c = new WeakMap();
export {
  P as F
};
//# sourceMappingURL=security-workspace-base.context.js.map
