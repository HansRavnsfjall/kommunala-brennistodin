var i = (t) => {
  throw TypeError(t);
};
var a = (t, r, e) => r.has(t) || i("Cannot " + e);
var s = (t, r, e) => (a(t, r, "read from private field"), e ? e.call(t) : r.get(t)), p = (t, r, e) => r.has(t) ? i("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), c = (t, r, e, n) => (a(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e);
import { UmbControllerBase as x } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_CONTEXT as E } from "@umbraco-cms/backoffice/workspace";
import { u as m } from "./index-CPaPWJuU.js";
import { UmbContextToken as C } from "@umbraco-cms/backoffice/context-api";
import { S } from "./exporter.service-e5HNtlDi.js";
var o;
class k extends x {
  constructor(e) {
    super(e);
    p(this, o);
    this.workspaceAlias = m.workspace, this.provideContext(y, this), this.provideContext(E, this), c(this, o, new S(e));
  }
  getEntityType() {
    return m.entity;
  }
  async GetSettings() {
    return await s(this, o).GetSettings();
  }
  async GetExporters() {
    return await s(this, o).GetExporters();
  }
  async GetItemInfo(e) {
    return await s(this, o).GetItemInfo(e);
  }
}
o = new WeakMap();
const y = new C("SyncExporterWorkspaceContext");
export {
  k as SyncExporterWorkspaceContext,
  y as USYNC_EXPORTER_WORKSPACE_CONTEXT,
  k as default
};
//# sourceMappingURL=workspace.context-ChaniE6s.js.map
