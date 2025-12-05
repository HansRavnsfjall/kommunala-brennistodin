import { e as u, t as d } from "./constants-jrjjZjNa.js";
import { UserGroupService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { UmbManagementApiDataMapper as p, UmbDetailRepositoryBase as g } from "@umbraco-cms/backoffice/repository";
import { UmbControllerBase as f } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
class A extends f {
  #s = new p(this);
  /**
   * Creates a new User Group scaffold
   * @param {(string | null)} parentUnique
   * @returns { CreateUserGroupRequestModel }
   * @memberof UmbUserGroupServerDataSource
   */
  async createScaffold() {
    return { data: {
      alias: "",
      aliasCanBeChanged: !0,
      documentRootAccess: !1,
      documentStartNode: null,
      entityType: u,
      fallbackPermissions: [],
      hasAccessToAllLanguages: !1,
      icon: "icon-users",
      isDeletable: !0,
      languages: [],
      mediaRootAccess: !1,
      mediaStartNode: null,
      name: "",
      permissions: [],
      sections: [],
      unique: m.new()
    } };
  }
  /**
   * Fetches a User Group with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async read(s) {
    if (!s) throw new Error("Unique is missing");
    const { data: a, error: n } = await c(this, o.getUserGroupById({ path: { id: s } }));
    if (n || !a)
      return { error: n };
    const i = a.permissions.map(async (t) => this.#s.map({
      forDataModel: t.$type,
      data: t,
      fallback: async () => ({
        ...t,
        permissionType: "unknown"
      })
    })), e = await Promise.all(i);
    return { data: {
      alias: a.alias,
      documentRootAccess: a.documentRootAccess,
      documentStartNode: a.documentStartNode ? { unique: a.documentStartNode.id } : null,
      entityType: u,
      fallbackPermissions: a.fallbackPermissions,
      hasAccessToAllLanguages: a.hasAccessToAllLanguages,
      icon: a.icon || null,
      isDeletable: a.isDeletable,
      aliasCanBeChanged: a.aliasCanBeChanged,
      languages: a.languages,
      mediaRootAccess: a.mediaRootAccess,
      mediaStartNode: a.mediaStartNode ? { unique: a.mediaStartNode.id } : null,
      name: a.name,
      permissions: e,
      sections: a.sections,
      unique: a.id
    } };
  }
  /**
   * Inserts a new User Group on the server
   * @param {UmbUserGroupDetailModel} model
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async create(s) {
    if (!s) throw new Error("User Group is missing");
    const a = s.permissions.map(async (t) => this.#s.map({
      forDataModel: t.permissionType,
      data: t,
      fallback: async () => t
    })), n = await Promise.all(a), i = {
      alias: s.alias,
      documentRootAccess: s.documentRootAccess,
      documentStartNode: s.documentStartNode ? { id: s.documentStartNode.unique } : null,
      fallbackPermissions: s.fallbackPermissions,
      hasAccessToAllLanguages: s.hasAccessToAllLanguages,
      icon: s.icon,
      languages: s.languages,
      mediaRootAccess: s.mediaRootAccess,
      mediaStartNode: s.mediaStartNode ? { id: s.mediaStartNode.unique } : null,
      name: s.name,
      permissions: n,
      sections: s.sections
    }, { data: e, error: r } = await c(
      this,
      o.postUserGroup({
        body: i
      })
    );
    return e ? this.read(e) : { error: r };
  }
  /**
   * Updates a UserGroup on the server
   * @param {UmbUserGroupDetailModel} UserGroup
   * @param model
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async update(s) {
    if (!s.unique) throw new Error("Unique is missing");
    const a = s.permissions.map(async (r) => this.#s.map({
      forDataModel: r.userPermissionType,
      data: r,
      fallback: async () => r
    })), n = await Promise.all(a), i = {
      alias: s.alias,
      documentRootAccess: s.documentRootAccess,
      documentStartNode: s.documentStartNode ? { id: s.documentStartNode.unique } : null,
      fallbackPermissions: s.fallbackPermissions,
      hasAccessToAllLanguages: s.hasAccessToAllLanguages,
      icon: s.icon,
      languages: s.languages,
      mediaRootAccess: s.mediaRootAccess,
      mediaStartNode: s.mediaStartNode ? { id: s.mediaStartNode.unique } : null,
      name: s.name,
      permissions: n,
      sections: s.sections
    }, { error: e } = await c(
      this,
      o.putUserGroupById({
        path: { id: s.unique },
        body: i
      })
    );
    return e ? { error: e } : this.read(s.unique);
  }
  /**
   * Deletes a User Group on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserGroupServerDataSource
   */
  async delete(s) {
    if (!s) throw new Error("Unique is missing");
    return c(
      this,
      o.deleteUserGroupById({
        path: { id: s }
      })
    );
  }
}
class R extends g {
  constructor(s) {
    super(s, A, d);
  }
  async create(s) {
    return super.create(s, null);
  }
}
export {
  R as UmbUserGroupDetailRepository,
  R as default
};
//# sourceMappingURL=user-group-detail.repository-BfG3QhFr.js.map
