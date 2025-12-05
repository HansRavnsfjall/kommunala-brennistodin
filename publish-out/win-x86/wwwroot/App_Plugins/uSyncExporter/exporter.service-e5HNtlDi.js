var m = (r) => {
  throw TypeError(r);
};
var g = (r, t, e) => t.has(r) || m("Cannot " + e);
var a = (r, t, e) => (g(r, t, "read from private field"), e ? e.call(r) : t.get(r)), l = (r, t, e) => t.has(r) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), o = (r, t, e, u) => (g(r, t, "write to private field"), u ? u.call(r, e) : t.set(r, e), e);
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { c as x } from "./index-CPaPWJuU.js";
class y {
  static getExport(t) {
    return ((t == null ? void 0 : t.client) ?? x).post({
      url: "/umbraco/usync/api/v1/Exporter/GetExport",
      ...t
    });
  }
  static getExporters(t) {
    return ((t == null ? void 0 : t.client) ?? x).get({
      url: "/umbraco/usync/api/v1/Exporter/GetExporters",
      ...t
    });
  }
  static getSettings(t) {
    return ((t == null ? void 0 : t.client) ?? x).get({
      url: "/umbraco/usync/api/v1/Exporter/GetExporterSettings",
      ...t
    });
  }
  static getItemInfo(t) {
    return ((t == null ? void 0 : t.client) ?? x).post({
      url: "/umbraco/usync/api/v1/Exporter/GetItemInfo",
      ...t,
      headers: {
        "Content-Type": "application/json",
        ...t == null ? void 0 : t.headers
      }
    });
  }
}
var c;
class w extends p {
  constructor(e) {
    super(e);
    l(this, c);
    o(this, c, e);
  }
  async GetSettings() {
    return await i(a(this, c), y.getSettings());
  }
  async GetExporters() {
    return await i(a(this, c), y.getExporters());
  }
  async GetItemInfo(e) {
    return await i(
      a(this, c),
      y.getItemInfo({
        body: e
      })
    );
  }
  async GetExport(e) {
    return await i(a(this, c), y.getExport({ query: { id: e } }));
  }
}
c = new WeakMap();
var n;
class S extends p {
  constructor(e) {
    super(e);
    l(this, n);
    o(this, n, new w(e));
  }
  async GetSettings() {
    return (await a(this, n).GetSettings()).data;
  }
  async GetExporters() {
    return (await a(this, n).GetExporters()).data;
  }
  async GetItemInfo(e) {
    return (await a(this, n).GetItemInfo(e)).data;
  }
  async getExport(e, u) {
    const E = (await a(this, n).GetExport(e)).data;
    if (!E) return;
    console.log(E.type);
    const d = window.URL.createObjectURL(E), s = document.createElement("a");
    s.href = d, s.download = (u ?? "usync-export") + ".usync", document.body.appendChild(s), s.dispatchEvent(new MouseEvent("click")), s.remove(), window.URL.revokeObjectURL(d);
  }
}
n = new WeakMap();
export {
  S
};
//# sourceMappingURL=exporter.service-e5HNtlDi.js.map
