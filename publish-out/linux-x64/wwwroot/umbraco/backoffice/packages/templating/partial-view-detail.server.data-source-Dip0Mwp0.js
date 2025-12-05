import { o } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { UmbServerFilePathUniqueSerializer as u, appendFileExtensionIfNeeded as p } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
class d {
  #e;
  #t = new u();
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
    const r = this.#t.toServerPath(e), i = {
      parent: r ? { path: r } : null,
      name: p(t.name, ".cshtml"),
      content: t.content
    }, { data: n, error: h } = await s(
      this.#e,
      a.postPartialView({
        body: i
      })
    );
    if (n && typeof n == "string") {
      const c = decodeURIComponent(n), w = this.#t.toUnique(c);
      return this.read(w);
    }
    return { error: h };
  }
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    const { data: r, error: i } = await s(
      this.#e,
      a.getPartialViewByPath({ path: { path: e } })
    );
    return i || !r ? { error: i } : { data: {
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
    }, { error: i } = await s(
      this.#e,
      a.putPartialViewByPath({
        path: { path: e },
        body: r
      })
    );
    return i ? { error: i } : this.read(t.unique);
  }
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Path is missing");
    return s(
      this.#e,
      a.deletePartialViewByPath({
        path: { path: e }
      })
    );
  }
}
export {
  d as U
};
//# sourceMappingURL=partial-view-detail.server.data-source-Dip0Mwp0.js.map
