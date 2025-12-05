import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { ServerService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UMB_SERVER_CONTEXT as c } from "@umbraco-cms/backoffice/server";
const u = "16.0.0", f = {
  version: u
};
class S extends a {
  constructor(e) {
    super(e, "Umb.Repository.Sysinfo");
  }
  async requestTroubleShooting() {
    const { data: e } = await s(this, i.getServerTroubleshooting(), { disableNotifications: !0 });
    return e;
  }
  async requestServerInformation() {
    const { data: e } = await s(this, i.getServerInformation(), { disableNotifications: !0 });
    return e;
  }
  async requestClientInformation() {
    const { version: e } = f;
    return {
      version: e
    };
  }
  /**
   * Check if the server has an upgrade available and return the result.
   * If the server has an upgrade available, the result will be stored in local storage.
   * If the server does not have an upgrade available, the result will be stored in local storage as well.
   * @param {string} currentVersion The current version of the server.
   * @returns {Promise<UmbServerUpgradeCheck | null>} The server upgrade check result or null if the check is not allowed or if the check failed.
   */
  async serverUpgradeCheck(e) {
    const o = await this.getContext(c);
    if (!o)
      throw new Error("Could not get the server context.");
    const t = await this.observe(o.getServerConnection().versionCheckPeriod).asPromise();
    if (t <= 0)
      return null;
    const r = this.#e(e);
    if (r !== null && r.createdAt) {
      const n = new Date(r.createdAt);
      if (((/* @__PURE__ */ new Date()).getTime() - n.getTime()) / (1e3 * 3600 * 24) < t)
        return r.type.toLowerCase() !== "none" ? r : null;
    }
    return this.#t(t, e);
  }
  /**
   * Get the stored server upgrade check if it is still valid, otherwise return null and remove the stored check.
   * @param {string} currentVersion The current version of the server.
   * @returns {UmbServerUpgradeCheck | null} The stored server upgrade check or null if it is not valid.
   */
  #e(e) {
    const o = localStorage.getItem("umb:serverUpgradeCheck");
    if (!o)
      return null;
    const t = JSON.parse(o);
    if (t.version !== e)
      return localStorage.removeItem("umb:serverUpgradeCheck"), null;
    if (t.createdAt) {
      const r = new Date(t.createdAt);
      if (new Date(t.expires).getTime() <= r.getTime())
        return localStorage.removeItem("umb:serverUpgradeCheck"), null;
    }
    return t;
  }
  /**
   * Fetch the server upgrade check from the server and store the result in local storage.
   * @param {number} versionCheckPeriod A period in days to wait before checking the server again.
   * @param {string} currentVersion The current version of the server.
   * @returns {Promise<UmbServerUpgradeCheck | null>} The server upgrade check result or null if the check failed.
   */
  async #t(e, o) {
    const { data: t } = await s(this, i.getServerUpgradeCheck(), { disableNotifications: !0 });
    if (t) {
      const r = /* @__PURE__ */ new Date();
      r.setDate(r.getDate() + e);
      const n = {
        ...t,
        expires: r.toISOString(),
        version: o,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (localStorage.setItem("umb:serverUpgradeCheck", JSON.stringify(n)), t.type.toLowerCase() !== "none")
        return n;
    }
    return null;
  }
}
export {
  S as U
};
//# sourceMappingURL=sysinfo.repository-50SHjqQ7.js.map
