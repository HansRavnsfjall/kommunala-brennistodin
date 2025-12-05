import { TemporaryFileService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { U as s } from "./config.store.token-CsbU_19N.js";
import { a as n } from "./constants-CDwqkOdg.js";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class f {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get the temporary file configuration.
   */
  getConfig() {
    return a(this.#t, o.getTemporaryFileConfiguration(), { disableNotifications: !0 });
  }
}
class g extends m {
  #t;
  #i = new f(this);
  constructor(t) {
    super(t, n.toString()), this.initialized = new Promise((e) => {
      this.consumeContext(s, async (i) => {
        i && (this.#t = i, await this.#r(), e());
      });
    });
  }
  async #r() {
    if (this.#t?.getState())
      return;
    const t = await this.requestTemporaryFileConfiguration();
    t && this.#t?.update(t);
  }
  async requestTemporaryFileConfiguration() {
    const { data: t } = await this.#i.getConfig();
    return t;
  }
  /**
   * Subscribe to the entire configuration.
   * @returns {Observable<UmbTemporaryFileConfigurationModel>}
   */
  all() {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.all();
  }
  /**
   * Subscribe to a part of the configuration.
   * @param part
   * @returns {Observable<UmbTemporaryFileConfigurationModel[Part]>}
   */
  part(t) {
    if (!this.#t)
      throw new Error("Data store not initialized");
    return this.#t.part(t);
  }
}
export {
  g as UmbTemporaryFileConfigRepository,
  g as default
};
//# sourceMappingURL=config.repository-eH2FsqDW.js.map
