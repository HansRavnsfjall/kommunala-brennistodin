import { b as d } from "./constants-CH_iDk6H.js";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { PackageService as n, ManifestService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { isManifestBaseType as u } from "@umbraco-cms/backoffice/extension-api";
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
import { UMB_SERVER_CONTEXT as m } from "@umbraco-cms/backoffice/server";
class k {
  constructor(t) {
    this.host = t;
  }
  async deleteCreatedPackage(t) {
    return await r(this.host, n.deletePackageCreatedById({ path: { id: t } }));
  }
  getCreatedPackage(t) {
    return r(this.host, n.getPackageCreatedById({ path: { id: t } }));
  }
  getCreatedPackages({ skip: t, take: e }) {
    return r(this.host, n.getPackageCreated({ query: { skip: t, take: e } }));
  }
  getCreatePackageDownload(t) {
    return r(this.host, n.getPackageCreatedByIdDownload({ path: { id: t } }));
  }
  /**
   * Get the root items from the server
   * @memberof UmbPackageServerDataSource
   */
  getRootItems() {
    return r(this.host, h.getManifestManifest());
  }
  /**
   * Get the package configuration from the server
   * @memberof UmbPackageServerDataSource
   */
  getPackageConfiguration() {
    return r(this.host, n.getPackageConfiguration());
  }
  /**
   * Get the package migrations from the server
   * @memberof UmbPackageServerDataSource
   */
  getPackageMigrations() {
    return r(this.host, n.getPackageMigrationStatus({ query: { skip: 0, take: 9999 } }));
  }
  async saveCreatedPackage(t) {
    return await r(this.host, n.postPackageCreated({ body: t }));
  }
  async updateCreatedPackage(t, e) {
    return await r(this.host, n.putPackageCreatedById({ path: { id: t }, body: e }));
  }
}
class I extends p {
  #e;
  #a;
  #t;
  constructor(t) {
    super(t), this.#t = new k(this), this.#e = new Promise((e) => {
      this.consumeContext(d, (a) => {
        this.#a = a, a && (this.requestConfiguration(a), this.requestRootItems(a), this.requestPackageMigrations(a), e());
      });
    });
  }
  async getCreatedPackage(t) {
    if (!t)
      return this.#s();
    const { data: e } = await this.#t.getCreatedPackage(t);
    if (!e)
      return this.#s();
    const { id: a, ...i } = e;
    return { unique: a, ...i };
  }
  async getCreatedPackages({ skip: t, take: e }) {
    const { data: a } = await this.#t.getCreatedPackages({ skip: t, take: e });
    if (a)
      return {
        items: a.items?.map((i) => ({ unique: i.id, name: i.name })),
        total: a.total
      };
  }
  async getCreatePackageDownload(t) {
    const { data: e } = await this.#t.getCreatePackageDownload(t);
    return e;
  }
  #s() {
    return {
      unique: "",
      name: "",
      packagePath: "",
      contentNodeId: void 0,
      contentLoadChildNodes: !1,
      mediaIds: [],
      mediaLoadChildNodes: !1,
      documentTypes: [],
      mediaTypes: [],
      dataTypes: [],
      templates: [],
      partialViews: [],
      stylesheets: [],
      scripts: [],
      languages: [],
      dictionaryItems: []
    };
  }
  async deleteCreatedPackage(t) {
    const { error: e } = await this.#t.deleteCreatedPackage(t);
    return !e;
  }
  async requestConfiguration(t) {
    const { data: e } = await this.#t.getPackageConfiguration();
    e && t.setConfiguration(e);
  }
  /**
   * Request the root items from the Data Source
   * @param store
   * @memberOf UmbPackageRepository
   */
  async requestRootItems(t) {
    if (t.isPackagesLoaded)
      return;
    const { data: e } = await this.#t.getRootItems();
    if (e) {
      t.appendItems(e.filter((c) => c.name?.length));
      const a = [], i = await this.getContext(m);
      if (!i)
        return;
      const o = i.getServerUrl();
      e.forEach((c) => {
        c.extensions?.forEach((s) => {
          u(s) && ("js" in s && typeof s.js == "string" && !s.js.startsWith("http") && (s.js = `${o}${s.js}`), "element" in s && typeof s.element == "string" && !s.element.startsWith("http") && (s.element = `${o}${s.element}`), "api" in s && typeof s.api == "string" && !s.api.startsWith("http") && (s.api = `${o}${s.api}`), a.push(s));
        });
      }), t.appendExtensions(a);
    }
  }
  /**
   * Request the package migrations from the Data Source
   * @param store
   * @memberOf UmbPackageRepository
   */
  async requestPackageMigrations(t) {
    const { data: e } = await this.#t.getPackageMigrations();
    e && t.appendMigrations(e.items);
  }
  async saveCreatedPackage(t) {
    const { unique: e, ...a } = t, { data: i } = await this.#t.saveCreatedPackage(a);
    return i;
  }
  async updateCreatedPackage(t) {
    const { unique: e, ...a } = t, { error: i } = await this.#t.updateCreatedPackage(e, a);
    return !i;
  }
  async configuration() {
    return await this.#e, this.#a.configuration;
  }
  /**
   * Observable of root items
   * @memberOf UmbPackageRepository
   */
  async rootItems() {
    return await this.#e, this.#a.rootItems;
  }
  /**
   * Observable of extensions
   * @memberOf UmbPackageRepository
   */
  async extensions() {
    return await this.#e, this.#a.extensions;
  }
  /**
   * Observable of migrations
   * @memberOf UmbPackageRepository
   */
  async migrations() {
    return await this.#e, this.#a.migrations;
  }
}
export {
  I as UmbPackageRepository,
  I as default
};
//# sourceMappingURL=package.repository-DyWS8t6-.js.map
