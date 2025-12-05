import { a as o } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { MemberTypeService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { j as l } from "./input-member-type.element-Tx7SxrMW.js";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class d {
  #e;
  /**
   * Creates an instance of UmbMemberTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeServerDataSource
   */
  constructor(i) {
    this.#e = i;
  }
  /**
   * Creates a new Member Type scaffold
   * @param {Partial<UmbMemberTypeDetailModel>} [preset]
   * @returns { CreateMemberTypeRequestModel }
   * @memberof UmbMemberTypeServerDataSource
   */
  async createScaffold(i = {}) {
    return { data: {
      entityType: o,
      unique: u.new(),
      name: "",
      alias: "",
      description: "",
      icon: "icon-user",
      allowedAtRoot: !1,
      variesByCulture: !1,
      variesBySegment: !1,
      isElement: !1,
      properties: [],
      containers: [],
      allowedContentTypes: [],
      compositions: [],
      collection: null,
      ...i
    } };
  }
  /**
   * Fetches a Member Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberTypeServerDataSource
   */
  async read(i) {
    if (!i) throw new Error("Unique is missing");
    const { data: a, error: s } = await r(this.#e, t.getMemberTypeById({ path: { id: i } }));
    return s || !a ? { error: s } : { data: {
      entityType: o,
      unique: a.id,
      name: a.name,
      alias: a.alias,
      description: a.description ?? "",
      icon: a.icon,
      allowedAtRoot: a.allowedAsRoot,
      variesByCulture: a.variesByCulture,
      variesBySegment: a.variesBySegment,
      isElement: a.isElement,
      properties: a.properties.map((e) => ({
        id: e.id,
        unique: e.id,
        container: e.container ? { id: e.container.id } : null,
        sortOrder: e.sortOrder,
        alias: e.alias,
        name: e.name,
        description: e.description,
        dataType: { unique: e.dataType.id },
        variesByCulture: e.variesByCulture,
        variesBySegment: e.variesBySegment,
        validation: e.validation,
        appearance: e.appearance,
        visibility: e.visibility,
        isSensitive: e.isSensitive
      })),
      containers: a.containers.map((e) => ({
        id: e.id,
        parent: e.parent ? { id: e.parent.id } : null,
        name: e.name ?? "",
        type: e.type,
        // TODO: check if the value is valid
        sortOrder: e.sortOrder
      })),
      allowedContentTypes: [],
      compositions: a.compositions.map((e) => ({
        contentType: { unique: e.memberType.id },
        compositionType: e.compositionType
      })),
      collection: a.collection ? { unique: a.collection.id } : null
    } };
  }
  /**
   * Inserts a new Member Type on the server
   * @param {UmbMemberTypeDetailModel} model
   * @returns {*}
   * @memberof UmbMemberTypeServerDataSource
   */
  async create(i) {
    if (!i) throw new Error("Member Type is missing");
    const a = {
      alias: i.alias,
      name: i.name,
      description: i.description,
      icon: i.icon,
      allowedAsRoot: i.allowedAtRoot,
      variesByCulture: i.variesByCulture,
      variesBySegment: i.variesBySegment,
      isElement: i.isElement,
      properties: i.properties.map((e) => ({
        id: e.id,
        container: e.container ? { id: e.container.id } : null,
        sortOrder: e.sortOrder,
        alias: e.alias,
        isSensitive: e.isSensitive ?? !1,
        visibility: e.visibility ?? { memberCanEdit: !1, memberCanView: !1 },
        name: e.name,
        description: e.description,
        dataType: { id: e.dataType.unique },
        variesByCulture: e.variesByCulture,
        variesBySegment: e.variesBySegment,
        validation: e.validation,
        appearance: e.appearance
      })),
      containers: i.containers,
      id: i.unique,
      compositions: i.compositions.map((e) => ({
        memberType: { id: e.contentType.unique },
        compositionType: e.compositionType
      }))
    }, { data: s, error: n } = await r(
      this.#e,
      t.postMemberType({
        body: a
      })
    );
    return s && typeof s == "string" ? this.read(s) : { error: n };
  }
  /**
   * Updates a MemberType on the server
   * @param {UmbMemberTypeDetailModel} MemberType
   * @param model
   * @returns {*}
   * @memberof UmbMemberTypeServerDataSource
   */
  async update(i) {
    if (!i.unique) throw new Error("Unique is missing");
    const a = {
      alias: i.alias,
      name: i.name,
      description: i.description,
      icon: i.icon,
      allowedAsRoot: i.allowedAtRoot,
      variesByCulture: i.variesByCulture,
      variesBySegment: i.variesBySegment,
      isElement: i.isElement,
      properties: i.properties.map((n) => ({
        id: n.id,
        container: n.container ? { id: n.container.id } : null,
        sortOrder: n.sortOrder,
        isSensitive: n.isSensitive ?? !1,
        visibility: n.visibility ?? { memberCanEdit: !1, memberCanView: !1 },
        alias: n.alias,
        name: n.name,
        description: n.description,
        dataType: { id: n.dataType.unique },
        variesByCulture: n.variesByCulture,
        variesBySegment: n.variesBySegment,
        validation: n.validation,
        appearance: n.appearance
      })),
      containers: i.containers,
      compositions: i.compositions.map((n) => ({
        memberType: { id: n.contentType.unique },
        compositionType: n.compositionType
      }))
    }, { error: s } = await r(
      this.#e,
      t.putMemberTypeById({
        path: { id: i.unique },
        body: a
      })
    );
    return s ? { error: s } : this.read(i.unique);
  }
  /**
   * Deletes a Member Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberTypeServerDataSource
   */
  async delete(i) {
    if (!i) throw new Error("Unique is missing");
    return r(
      this.#e,
      t.deleteMemberTypeById({
        path: { id: i }
      })
    );
  }
}
class f extends m {
  /**
   * Creates an instance of UmbMemberTypeDetailRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeDetailRepository
   */
  constructor(i) {
    super(i, d, l);
  }
}
export {
  f as UmbMemberTypeDetailRepository,
  f as default
};
//# sourceMappingURL=member-type-detail.repository-DU94HV86.js.map
