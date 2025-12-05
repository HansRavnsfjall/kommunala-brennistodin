var b = (s) => {
  throw TypeError(s);
};
var w = (s, a, t) => a.has(s) || b("Cannot " + t);
var e = (s, a, t) => (w(s, a, "read from private field"), t ? t.call(s) : a.get(s)), h = (s, a, t) => a.has(s) ? b("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(s) : a.set(s, t), S = (s, a, t, o) => (w(s, a, "write to private field"), o ? o.call(s, t) : a.set(s, t), t), y = (s, a, t) => (w(s, a, "access private method"), t);
import { UmbControllerBase as C } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_CONTEXT as U } from "@umbraco-cms/backoffice/workspace";
import { c as u, u as f } from "./index-BRxV4qqS.js";
import { UmbContextToken as x } from "@umbraco-cms/backoffice/context-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbObjectState as A } from "@umbraco-cms/backoffice/observable-api";
class d {
  static downloadAll(a) {
    return ((a == null ? void 0 : a.client) ?? u).get({
      url: "/umbraco/usync/api/v1/Snapshots/DownloadAll",
      ...a
    });
  }
  static downloadSnapshot(a) {
    return ((a == null ? void 0 : a.client) ?? u).post({
      url: "/umbraco/usync/api/v1/Snapshots/DownloadSnapshot",
      ...a
    });
  }
  static getSnapshots(a) {
    return ((a == null ? void 0 : a.client) ?? u).get({
      url: "/umbraco/usync/api/v1/Snapshots/GetSnapshots",
      ...a
    });
  }
  static remove(a) {
    return ((a == null ? void 0 : a.client) ?? u).delete({
      url: "/umbraco/usync/api/v1/Snapshots/Remove",
      ...a
    });
  }
  static uploadSnapshot(a) {
    return ((a == null ? void 0 : a.client) ?? u).post({
      url: "/umbraco/usync/api/v1/Snapshots/UploadSnapshot",
      ...a
    });
  }
}
var n;
class g extends C {
  constructor(t) {
    super(t);
    h(this, n);
    S(this, n, t);
  }
  async list() {
    var t;
    return (t = await i(e(this, n), d.getSnapshots())) == null ? void 0 : t.data;
  }
  async remove(t) {
    return i(e(this, n), d.remove({ query: { alias: t } }));
  }
  async downloadSnapshot(t) {
    return i(
      e(this, n),
      d.downloadSnapshot({
        query: {
          alias: t
        }
      })
    );
  }
  async downloadAll() {
    return i(e(this, n), d.downloadAll());
  }
  async upload(t) {
    return i(e(this, n), d.uploadSnapshot({ query: { fileId: t } }));
  }
}
n = new WeakMap();
var r, c, p, m;
class j extends C {
  constructor(t) {
    super(t);
    h(this, p);
    h(this, r);
    h(this, c);
    this.workspaceAlias = f.workspace, S(this, c, new A(void 0)), this.snapshots = e(this, c).asObservable(), S(this, r, new g(t)), this.provideContext(E, this), this.provideContext(U, this);
  }
  getEntityType() {
    return f.entity;
  }
  async getSnapshots() {
    const t = await e(this, r).list();
    return t && e(this, c).setValue(t), t;
  }
  async remove(t) {
    await e(this, r).remove(t), await this.getSnapshots();
  }
  async downloadSnapshot(t) {
    const o = (await e(this, r).downloadSnapshot(t)).data;
    o && await y(this, p, m).call(this, t, o);
  }
  async downloadAll() {
    const t = (await e(this, r).downloadAll()).data;
    t && await y(this, p, m).call(this, "usync-snapshots", t);
  }
  async upload(t) {
    await e(this, r).upload(t), await this.getSnapshots();
  }
}
r = new WeakMap(), c = new WeakMap(), p = new WeakSet(), m = async function(t, o) {
  if (!o) return;
  const v = window.URL.createObjectURL(o), l = document.createElement("a");
  l.href = v, l.download = t + ".zip", document.body.appendChild(l), l.dispatchEvent(new MouseEvent("click")), l.remove(), window.URL.revokeObjectURL(v);
};
const E = new x("uSyncSnapshotsWorkspaceContext");
export {
  E as U,
  j as u
};
//# sourceMappingURL=snapshots.context-BX47u-Ps.js.map
