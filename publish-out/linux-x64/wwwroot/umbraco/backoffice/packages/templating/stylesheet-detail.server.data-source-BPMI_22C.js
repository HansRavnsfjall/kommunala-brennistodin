import { U as o } from "./entity-CA4W0tlV.js";
import { UmbServerFilePathUniqueSerializer as p, appendFileExtensionIfNeeded as y } from "@umbraco-cms/backoffice/server-file-system";
import { StylesheetService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
class P {
  #e;
  #t = new p();
  constructor(t) {
    this.#e = t;
  }
  async createScaffold(t = {}) {
    return { data: {
      entityType: o,
      unique: "",
      name: "",
      content: "",
      ...t
    } };
  }
  async create(t, e = null) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = this.#t.toServerPath(e), n = {
      parent: r ? { path: r } : null,
      name: y(t.name, ".css"),
      content: t.content
    }, { data: i, error: h } = await a(
      this.#e,
      s.postStylesheet({
        body: n
      })
    );
    if (i && typeof i == "string") {
      const c = decodeURIComponent(i), u = this.#t.toUnique(c);
      return this.read(u);
    }
    return { error: h };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    const { data: r, error: n } = await a(
      this.#e,
      s.getStylesheetByPath({ path: { path: e } })
    );
    return n || !r ? { error: n } : { data: {
      entityType: o,
      unique: this.#t.toUnique(r.path),
      name: r.name,
      content: r.content
    } };
  }
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t.unique);
    if (!e) throw new Error("Path is missing");
    const r = {
      content: t.content
    }, { error: n } = await a(
      this.#e,
      s.putStylesheetByPath({
        path: { path: e },
        body: r
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    return a(
      this.#e,
      s.deleteStylesheetByPath({
        path: { path: e }
      })
    );
  }
}
export {
  P as U
};
//# sourceMappingURL=stylesheet-detail.server.data-source-BPMI_22C.js.map
