import { a as o } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { UmbId as l } from "@umbraco-cms/backoffice/id";
import { MemberTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { l as m } from "./input-member-type.element-HvnUGYvy.js";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class v {
  #e;
  /**
   * Creates an instance of UmbMemberTypeDetailServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeDetailServerDataSource
   */
  constructor(i) {
    this.#e = i;
  }
  /**
   * Creates a new Member Type scaffold
   * @param {Partial<UmbMemberTypeDetailModel>} [preset] - Optional preset data to merge with the scaffold
   * @returns { CreateMemberTypeRequestModel }
   * @memberof UmbMemberTypeDetailServerDataSource
   */
  async createScaffold(i = {}) {
    return { data: {
      entityType: o,
      unique: l.new(),
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
   * @param {string} unique - The unique identifier of the Member Type to fetch
   * @returns {*}
   * @memberof UmbMemberTypeDetailServerDataSource
   */
  async read(i) {
    if (!i) throw new Error("Unique is missing");
    const { data: a, error: t } = await r(this.#e, s.getMemberTypeById({ path: { id: i } }));
    return t || !a ? { error: t } : { data: {
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
   * @param {UmbMemberTypeDetailModel} model - Member Type Model
   * @returns {*}
   * @memberof UmbMemberTypeDetailServerDataSource
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
    }, { data: t, error: n } = await r(
      this.#e,
      s.postMemberType({
        body: a
      })
    );
    return t && typeof t == "string" ? this.read(t) : { error: n };
  }
  /**
   * Updates a MemberType on the server
   * @param { UmbMemberTypeDetailModel } model - Member Type Model
   * @returns {*}
   * @memberof UmbMemberTypeDetailServerDataSource
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
    }, { error: t } = await r(
      this.#e,
      s.putMemberTypeById({
        path: { id: i.unique },
        body: a
      })
    );
    return t ? { error: t } : this.read(i.unique);
  }
  /**
   * Deletes a Member Type on the server
   * @param {string} unique - The unique identifier of the Member Type to delete
   * @returns {*}
   * @memberof UmbMemberTypeDetailServerDataSource
   */
  async delete(i) {
    if (!i) throw new Error("Unique is missing");
    return r(
      this.#e,
      s.deleteMemberTypeById({
        path: { id: i }
      })
    );
  }
}
class c extends d {
  /**
   * Creates an instance of UmbMemberTypeDetailRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeDetailRepository
   */
  constructor(i) {
    super(i, v, m);
  }
}
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMemberTypeDetailRepository: c,
  default: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as U,
  v as a,
  S as m
};
//# sourceMappingURL=member-type-detail.repository-DEVxrZAd.js.map
