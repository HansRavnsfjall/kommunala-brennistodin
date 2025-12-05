import { u as o } from "./manifests-CH0eoEje.js";
import { UmbServerFilePathUniqueSerializer as u, appendFileExtensionIfNeeded as w } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
class d {
  #r;
  #t = new u();
  constructor(t) {
    this.#r = t;
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
  async create(t, r = null) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const e = this.#t.toServerPath(r), n = {
      parent: e ? { path: e } : null,
      name: w(t.name, ".js"),
      content: t.content
    }, { data: i, error: h } = await s(
      this.#r,
      a.postScript({
        body: n
      })
    );
    if (i && typeof i == "string") {
      const c = decodeURIComponent(i), p = this.#t.toUnique(c);
      return this.read(p);
    }
    return { error: h };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const r = this.#t.toServerPath(t);
    if (!r) throw new Error("Path is missing");
    const { data: e, error: n } = await s(this.#r, a.getScriptByPath({ path: { path: r } }));
    return n || !e ? { error: n } : { data: {
      entityType: o,
      unique: this.#t.toUnique(e.path),
      name: e.name,
      content: e.content
    } };
  }
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const r = this.#t.toServerPath(t.unique);
    if (!r) throw new Error("Path is missing");
    const e = {
      content: t.content
    }, { error: n } = await s(
      this.#r,
      a.putScriptByPath({
        path: { path: r },
        body: e
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const r = this.#t.toServerPath(t);
    if (!r) throw new Error("Path is missing");
    return s(
      this.#r,
      a.deleteScriptByPath({
        path: { path: r }
      })
    );
  }
}
export {
  d as U
};
//# sourceMappingURL=script-detail.server.data-source-mTbkgNna.js.map
