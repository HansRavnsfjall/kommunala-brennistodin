import { tryExecute as t } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
class i {
  #e;
  /**
   * Creates an instance of UmbDocumentPermissionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentPermissionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  requestPermissions(e) {
    return t(
      this.#e,
      fetch(`/umbraco/management/api/v1/document/${e}/permissions`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((r) => r.json())
    );
  }
}
class c extends o {
  #e;
  constructor(e) {
    super(e), this.#e = new i(this);
  }
  async requestPermissions(e) {
    if (!e) throw new Error("id is required");
    return this.#e.requestPermissions(e);
  }
}
export {
  c as UmbDocumentPermissionRepository,
  c as default
};
//# sourceMappingURL=document-permission.repository-DTHGLVXN.js.map
