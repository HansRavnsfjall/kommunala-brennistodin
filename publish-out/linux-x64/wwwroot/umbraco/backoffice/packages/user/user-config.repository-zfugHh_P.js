import { UserService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as e } from "@umbraco-cms/backoffice/resources";
import { j as a } from "./constants-BH7VsFPT.js";
import { UmbRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
class h {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the user configuration.
   * @memberof UmbUserConfigServerDataSource
   */
  getUserConfig() {
    return e(this.#t, i.getUserConfiguration());
  }
  /**
   * Get the current user configuration.
   * @memberof UmbUserConfigServerDataSource
   */
  getCurrentUserConfig() {
    return e(this.#t, i.getUserCurrentConfiguration());
  }
}
class m extends n {
  #t;
  #r = new h(this);
  constructor(t) {
    super(t), this.initialized = new Promise((o) => {
      this.consumeContext(a, async (r) => {
        r && (this.#t = r, await this.#i(), o());
      });
    });
  }
  async #i() {
    if (this.#t?.getState())
      return;
    const { data: t } = await this.#r.getUserConfig();
    t && this.#t?.update(t);
  }
  /**
   * Subscribe to the entire user configuration.
   */
  all() {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.all();
  }
  /**
   * Subscribe to a part of the user configuration.
   * @param part
   */
  part(t) {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.part(t);
  }
}
export {
  m as UmbUserConfigRepository,
  m as default
};
//# sourceMappingURL=user-config.repository-zfugHh_P.js.map
