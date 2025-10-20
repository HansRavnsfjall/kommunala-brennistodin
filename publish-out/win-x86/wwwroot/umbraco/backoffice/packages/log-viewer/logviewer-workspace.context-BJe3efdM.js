import { U as h } from "./log-viewer.repository-BciRJiMJ.js";
import { U as g } from "./logviewer-workspace.context-token-uhPS_Su7.js";
import { UmbObjectState as i, UmbBasicState as l, UmbStringState as u, UmbArrayState as c } from "@umbraco-cms/backoffice/observable-api";
import { DirectionModel as o, LogLevelModel as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbContextBase as m } from "@umbraco-cms/backoffice/class-api";
import { query as p } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_CONTEXT as v } from "@umbraco-cms/backoffice/workspace";
class E extends m {
  constructor(t) {
    super(t, g), this.workspaceAlias = "Umb.Workspace.LogViewer", this.defaultDateRange = {
      startDate: this.yesterday,
      endDate: this.today
    }, this.#e = new i(void 0), this.savedSearches = this.#e.asObservablePart((e) => e), this.#g = new i(null), this.logCount = this.#g.asObservable(), this.#s = new i(this.defaultDateRange), this.dateRange = this.#s.asObservable(), this.#u = new i(null), this.loggers = this.#u.asObservablePart((e) => e?.items), this.#i = new l(null), this.canShowLogs = this.#i.asObservable(), this.#r = new l(null), this.isLoadingLogs = this.#r.asObservable(), this.#o = new u(""), this.filterExpression = this.#o.asObservable(), this.#c = new i(null), this.messageTemplates = this.#c.asObservable(), this.#l = new c([], (e) => e), this.logLevelsFilter = this.#l.asObservable(), this.#h = new i(null), this.logs = this.#h.asObservablePart((e) => e?.items), this.logsTotal = this.#h.asObservablePart((e) => e?.total), this.#a = new i({ enabled: !1, interval: 2e3 }), this.polling = this.#a.asObservable(), this.#n = new l(o.DESCENDING), this.sortingDirection = this.#n.asObservable(), this.#d = null, this.currentPage = 1, this.onChangeState = () => {
      const e = p();
      this.setFilterExpression(e.lq ?? "");
      let s = [];
      e.loglevels && (s = e.loglevels.split(",").filter((r) => Object.values(d).includes(r))), this.setLogLevelsFilter(s);
      const a = this.getDateRange();
      this.setDateRange({
        startDate: e.startDate || a.startDate,
        endDate: e.endDate || a.endDate
      }), this.setCurrentPage(e.page ? Number(e.page) : 1), this.getLogs();
    }, this.getLogs = async () => {
      if (this.#i.getValue() === !1)
        return;
      this.#a.getValue().enabled || this.#r.setValue(!0);
      const n = {
        skip: (this.currentPage - 1) * 100,
        take: 100,
        orderDirection: this.#n.getValue(),
        filterExpression: this.#o.getValue(),
        logLevel: this.#l.getValue(),
        ...this.#s.getValue()
      }, { data: r } = await this.#t.getLogs(n);
      this.#r.setValue(!1), r && this.#h.setValue(r);
    }, this.provideContext(v, this), this.#t = new h(t);
  }
  #t;
  getEntityType() {
    return "log-viewer";
  }
  getEntityName() {
    return "Log Viewer";
  }
  get today() {
    const t = /* @__PURE__ */ new Date(), e = String(t.getDate()).padStart(2, "0"), s = String(t.getMonth() + 1).padStart(2, "0");
    return t.getFullYear() + "-" + s + "-" + e;
  }
  get yesterday() {
    const t = new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 1)), e = String(t.getDate()).padStart(2, "0"), s = String(t.getMonth() + 1).padStart(2, "0");
    return t.getFullYear() + "-" + s + "-" + e;
  }
  #e;
  #g;
  #s;
  #u;
  #i;
  #r;
  #o;
  #c;
  #l;
  #h;
  #a;
  #n;
  #d;
  hostConnected() {
    super.hostConnected(), window.addEventListener("changestate", this.onChangeState), this.onChangeState();
  }
  hostDisconnected() {
    super.hostDisconnected(), window.removeEventListener("changestate", this.onChangeState);
  }
  setDateRange(t) {
    let { startDate: e, endDate: s } = t;
    e || (e = this.defaultDateRange.startDate), s || (s = this.defaultDateRange.endDate);
    const a = new Date(e) > /* @__PURE__ */ new Date() || new Date(s) > /* @__PURE__ */ new Date(), n = new Date(e) > new Date(s);
    a || n || (this.#s.setValue({ startDate: e, endDate: s }), this.validateLogSize(), this.getLogCount(), this.getMessageTemplates(0, 10));
  }
  getDateRange() {
    return this.#s.getValue();
  }
  async getSavedSearches({ skip: t = 0, take: e = 999 } = {}) {
    const { data: s } = await this.#t.getSavedSearches({ skip: t, take: e });
    s ? this.#e.setValue(s) : this.#e.setValue({
      items: [
        {
          name: "Find all logs where the Level is NOT Verbose and NOT Debug",
          query: "Not(@Level='Verbose') and Not(@Level='Debug')"
        },
        {
          name: "Find all logs that has an exception property (Warning, Error & Fatal with Exceptions)",
          query: "Has(@Exception)"
        },
        {
          name: "Find all logs that have the property 'Duration'",
          query: "Has(Duration)"
        },
        {
          name: "Find all logs that have the property 'Duration' and the duration is greater than 1000ms",
          query: "Has(Duration) and Duration > 1000"
        },
        {
          name: "Find all logs that are from the namespace 'Umbraco.Core'",
          query: "StartsWith(SourceContext, 'Umbraco.Core')"
        },
        {
          name: "Find all logs that use a specific log message template",
          query: "@MessageTemplate = '[Timing {TimingId}] {EndMessage} ({TimingDuration}ms)'"
        }
      ],
      total: 6
    });
  }
  async saveSearch({ name: t, query: e }) {
    const s = this.#e.getValue()?.items ?? [];
    try {
      this.#e.update({ items: [...s, { name: t, query: e }] }), await this.#t.saveSearch({ name: t, query: e });
    } catch {
      this.#e.update({ items: s });
    }
  }
  async removeSearch({ name: t }) {
    const e = this.#e.getValue()?.items ?? [];
    try {
      this.#e.update({ items: e.filter((s) => s.name !== t) }), await this.#t.removeSearch({ name: t });
    } catch {
      this.#e.update({ items: e });
    }
  }
  async getLogCount() {
    const { data: t } = await this.#t.getLogCount({ ...this.#s.getValue() });
    t && this.#g.setValue(t);
  }
  async getMessageTemplates(t, e) {
    const { data: s } = await this.#t.getMessageTemplates({ skip: t, take: e, ...this.#s.getValue() });
    s && this.#c.setValue(s);
  }
  async getLogLevels(t, e) {
    const { data: s } = await this.#t.getLogLevels({ skip: t, take: e });
    s && this.#u.setValue(s);
  }
  async validateLogSize() {
    const { error: t } = await this.#t.getLogViewerValidateLogsSize({ ...this.#s.getValue() });
    if (t) {
      this.#i.setValue(!1);
      return;
    }
    this.#i.setValue(!0);
  }
  setCurrentPage(t) {
    this.currentPage = t;
  }
  setFilterExpression(t) {
    this.#o.setValue(t);
  }
  setLogLevelsFilter(t) {
    this.#l.setValue(t);
  }
  togglePolling() {
    const t = !this.#a.getValue().enabled;
    if (this.#a.update({
      enabled: t
    }), t) {
      this.#d = setInterval(() => {
        this.currentPage = 1, this.getLogs();
      }, this.#a.getValue().interval);
      return;
    }
    clearInterval(this.#d);
  }
  setPollingInterval(t) {
    this.#a.update({ interval: t });
  }
  toggleSortOrder() {
    const e = this.#n.getValue() === o.ASCENDING ? o.DESCENDING : o.ASCENDING;
    this.#n.setValue(e);
  }
}
export {
  E as UmbLogViewerWorkspaceContext,
  E as api
};
//# sourceMappingURL=logviewer-workspace.context-BJe3efdM.js.map
