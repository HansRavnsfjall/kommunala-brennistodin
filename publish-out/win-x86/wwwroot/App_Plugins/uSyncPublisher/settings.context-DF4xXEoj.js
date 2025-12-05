var y = (e) => {
  throw TypeError(e);
};
var d = (e, s, t) => s.has(e) || y("Cannot " + t);
var i = (e, s, t) => (d(e, s, "read from private field"), t ? t.call(e) : s.get(e)), o = (e, s, t) => s.has(e) ? y("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), g = (e, s, t, h) => (d(e, s, "write to private field"), h ? h.call(e, t) : s.set(e, t), t);
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { m as S } from "./index-DFDZ_Jke.js";
import { UmbContextToken as p } from "@umbraco-cms/backoffice/context-api";
import { UmbObjectState as w } from "@umbraco-cms/backoffice/observable-api";
var n;
class m {
  constructor(s) {
    o(this, n);
    g(this, n, s);
  }
  async getSettings() {
    return await c(i(this, n), S.getSettings());
  }
  async getUserGroups() {
    return await c(i(this, n), S.getUserGroups());
  }
  async reloadSettings() {
    return await c(i(this, n), S.reloadSettings());
  }
  async saveSettings(s) {
    return await c(i(this, n), S.saveSettings({ body: s }));
  }
  async syncSettings(s) {
    return await c(i(this, n), S.syncSettings({ body: s }));
  }
}
n = new WeakMap();
var r;
class b extends l {
  constructor(t) {
    super(t);
    o(this, r);
    g(this, r, new m(this));
  }
  async getSettings() {
    return (await i(this, r).getSettings()).data;
  }
  async getUserGroups() {
    return (await i(this, r).getUserGroups()).data;
  }
  async reloadSettings() {
    return (await i(this, r).reloadSettings()).data;
  }
  async saveSettings(t) {
    return (await i(this, r).saveSettings(t)).data;
  }
  async syncSettings(t) {
    return (await i(this, r).syncSettings(t)).data;
  }
}
r = new WeakMap();
var u, a;
class T extends l {
  constructor(t) {
    super(t);
    o(this, u);
    o(this, a);
    g(this, a, new w(void 0)), this.settings = i(this, a).asObservable(), g(this, u, new b(this)), this.provideContext(U, this);
  }
  async getSettings() {
    const t = await i(this, u).getSettings();
    if (t)
      return i(this, a).setValue(t), t;
  }
}
u = new WeakMap(), a = new WeakMap();
const U = new p("uSyncPublisherSettingsContext");
export {
  T as SyncPublisherSettingsContext,
  U as USYNC_PUBLISHER_SETTINGS_CONTEXT,
  T as default
};
//# sourceMappingURL=settings.context-DF4xXEoj.js.map
