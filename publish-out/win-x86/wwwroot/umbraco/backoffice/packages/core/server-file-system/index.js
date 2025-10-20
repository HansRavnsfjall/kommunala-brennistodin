import { U as s } from "../rename-server-file.action-bL_Mh3mK.js";
import { b as _, a as A } from "../rename-server-file.action-bL_Mh3mK.js";
import { UmbRepositoryBase as h } from "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { umbUrlPatternToString as m, ensurePathEndsWithSlash as c } from "@umbraco-cms/backoffice/utils";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
import { U as x } from "../manifests-FzOUH899.js";
const U = (o, e) => o.endsWith(e) ? o : o + e;
class S {
  #e = "%dot%";
  /**
   * Converts a server file path to a unique URL friendly string that can be used in the client
   * @param {string} serverFilePath
   * @returns {*}  {(string | null)}
   * @memberof UmbServerFilePathSerializer
   */
  toUnique(e) {
    const r = e?.replace(".", this.#e);
    return encodeURIComponent(r);
  }
  /**
   * Converts a unique URL friendly string to a server path
   * @param {string} serverFilePathUnique
   * @returns {*}  {(string | null)}
   * @memberof UmbServerFilePathSerializer
   */
  toServerPath(e) {
    if (e === void 0) throw new Error("Server file path unique is missing");
    return e === null ? null : decodeURIComponent(e).replace(this.#e, ".");
  }
}
class v extends h {
  #e;
  #r;
  constructor(e, r, t) {
    super(e), this.#e = new r(e), this.#r = t;
  }
  /**
   * Rename
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameServerFileRepositoryBase
   */
  async rename(e, r) {
    if (!e) throw new Error("Unique is missing");
    if (!r) throw new Error("Name is missing");
    const { data: t, error: i } = await this.#e.rename(e, r);
    if (t) {
      const n = await this.getContext(this.#r);
      if (!n) throw new Error("Detail store is missing");
      n.removeItem(e), n.append(t);
    }
    return { data: t, error: i };
  }
}
const d = Symbol(
  "ServerFileRenameWorkspaceRedirectControllerAlias"
);
class C extends l {
  #e;
  #r;
  #t;
  constructor(e, r, t) {
    super(e, d), this.#r = r, this.#t = t, this.consumeContext(u, (i) => {
      this.#e = i, this.#e && (this.#e.removeEventListener(s.TYPE, this.#o), this.#e.addEventListener(s.TYPE, this.#o));
    });
  }
  #o = (e) => {
    if (!this.#t) throw new Error("Router is required for this controller.");
    const r = this.#r.getUnique(), t = e.getUnique();
    if (r !== t) return;
    const i = e.getNewUnique();
    if (!i) throw new Error("New unique is required for this event.");
    const n = this.#t.absoluteRouterPath;
    if (!n) throw new Error("Router path is required for this controller.");
    const a = m(c(n) + "edit/:unique", {
      unique: i
    });
    this.destroy(), window.history.replaceState(null, "", a);
  };
  destroy() {
    super.destroy(), this.#e?.removeEventListener(s.TYPE, this.#o);
  }
}
export {
  _ as UMB_RENAME_SERVER_FILE_MODAL,
  x as UMB_RENAME_SERVER_FILE_MODAL_ALIAS,
  A as UmbRenameEntityAction,
  v as UmbRenameServerFileRepositoryBase,
  S as UmbServerFilePathUniqueSerializer,
  C as UmbServerFileRenameWorkspaceRedirectController,
  d as UmbServerFileRenameWorkspaceRedirectControllerAlias,
  s as UmbServerFileRenamedEntityEvent,
  U as appendFileExtensionIfNeeded
};
//# sourceMappingURL=index.js.map
