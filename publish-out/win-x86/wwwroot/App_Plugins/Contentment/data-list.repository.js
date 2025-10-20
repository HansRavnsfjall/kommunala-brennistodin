var b = (i) => {
  throw TypeError(i);
};
var U = (i, e, t) => e.has(i) || b("Cannot " + t);
var c = (i, e, t) => (U(i, e, "read from private field"), t ? t.call(i) : e.get(i)), f = (i, e, t) => e.has(i) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t);
import { createExtensionApi as w } from "@umbraco-cms/backoffice/extension-api";
import { tryExecute as g } from "@umbraco-cms/backoffice/resources";
import { umbExtensionsRegistry as k } from "@umbraco-cms/backoffice/extension-registry";
import { umbHttpClient as d } from "@umbraco-cms/backoffice/http-client";
import { D as x } from "./sdk.gen.js";
import { UmbPropertyEditorConfigCollection as A } from "@umbraco-cms/backoffice/property-editor";
import { UmbRepositoryBase as D } from "@umbraco-cms/backoffice/repository";
var p, m;
class j extends D {
  constructor(t, n) {
    super(t, n);
    f(this, p, {});
    f(this, m, {});
    this.observe(k.byType("contentmentDataSource"), (a) => {
      a.forEach((o) => {
        var s;
        o.api && ((s = o.meta) != null && s.key) && (c(this, p)[o.meta.key] = o);
      });
    }), this.observe(k.byType("contentmentListEditor"), (a) => {
      a.forEach((o) => {
        var s;
        (s = o.meta) != null && s.key && (c(this, m)[o.meta.key] = o);
      });
    });
  }
  async getEditor(t, n, a, o, s) {
    if (!t || !n) return;
    let h = "", y = [];
    const u = t.key, E = u ? c(this, p)[u] : null;
    if (E) {
      const l = await w(this, E, [this, this.controllerAlias]), L = await (l == null ? void 0 : l.getItems(t.value)) ?? [];
      y.push({ alias: "items", value: L }), t = null;
    }
    const v = {
      alias: o,
      dataSource: t,
      id: a,
      listEditor: n,
      variant: s
    }, { data: r } = await g(this, x.postDataListEditor({ client: d, body: v }));
    return r != null && r.propertyEditorUiAlias && (h = r.propertyEditorUiAlias), r != null && r.config && y.push(...r.config), { propertyEditorUiAlias: h, config: new A(y) };
  }
  async getItemsByUrl(t) {
    const { data: n } = await g(this, d.get({ security: [{ scheme: "bearer", type: "http" }], url: t }));
    return n;
  }
}
p = new WeakMap(), m = new WeakMap();
export {
  j as ContentmentDataListRepository,
  j as api
};
//# sourceMappingURL=data-list.repository.js.map
