import { b as u, h as l } from "./constants-DTH5dSDc.js";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as o } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as y } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbMediaTypeDetailServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Media Type scaffold
   * @param {Partial<UmbMediaTypeDetailModel>} [preset]
   * @returns { CreateMediaTypeRequestModel }
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: u,
      unique: p.new(),
      name: "",
      alias: "",
      description: "",
      icon: "icon-picture",
      allowedAtRoot: !1,
      variesByCulture: !1,
      variesBySegment: !1,
      isElement: !1,
      properties: [],
      containers: [],
      allowedContentTypes: [],
      compositions: [],
      collection: null,
      ...e
    } };
  }
  /**
   * Fetches a Media Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: a, error: s } = await o(this.#e, r.getMediaTypeById({ path: { id: e } }));
    return s || !a ? { error: s } : { data: {
      entityType: u,
      unique: a.id,
      name: a.name,
      alias: a.alias,
      description: a.description ?? "",
      icon: a.icon,
      allowedAtRoot: a.allowedAsRoot,
      variesByCulture: a.variesByCulture,
      variesBySegment: a.variesBySegment,
      isElement: a.isElement,
      properties: a.properties.map((i) => ({
        id: i.id,
        unique: i.id,
        container: i.container,
        sortOrder: i.sortOrder,
        alias: i.alias,
        name: i.name,
        description: i.description,
        dataType: { unique: i.dataType.id },
        variesByCulture: i.variesByCulture,
        variesBySegment: i.variesBySegment,
        validation: i.validation,
        appearance: i.appearance
      })),
      containers: a.containers.map((i) => ({
        id: i.id,
        parent: i.parent ? { id: i.parent.id } : null,
        name: i.name ?? "",
        type: i.type,
        // TODO: check if the value is valid
        sortOrder: i.sortOrder
      })),
      allowedContentTypes: a.allowedMediaTypes.map((i) => ({
        contentType: { unique: i.mediaType.id },
        sortOrder: i.sortOrder
      })),
      compositions: a.compositions.map((i) => ({
        contentType: { unique: i.mediaType.id },
        compositionType: i.compositionType
      })),
      collection: a.collection ? { unique: a.collection.id } : null
    } };
  }
  /**
   * Inserts a new Media Type on the server
   * @param {UmbMediaTypeDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  async create(e, a = null) {
    if (!e) throw new Error("Media Type is missing");
    if (!e.unique) throw new Error("Media Type unique is missing");
    const s = {
      alias: e.alias,
      name: e.name,
      description: e.description,
      icon: e.icon,
      allowedAsRoot: e.allowedAtRoot,
      variesByCulture: e.variesByCulture,
      variesBySegment: e.variesBySegment,
      isElement: e.isElement,
      properties: e.properties.map((t) => ({
        id: t.id,
        container: t.container,
        sortOrder: t.sortOrder,
        alias: t.alias,
        name: t.name,
        description: t.description,
        dataType: { id: t.dataType.unique },
        variesByCulture: t.variesByCulture,
        variesBySegment: t.variesBySegment,
        validation: t.validation,
        appearance: t.appearance
      })),
      containers: e.containers,
      allowedMediaTypes: e.allowedContentTypes.map((t) => ({
        mediaType: { id: t.contentType.unique },
        sortOrder: t.sortOrder
      })),
      compositions: e.compositions.map((t) => ({
        mediaType: { id: t.contentType.unique },
        compositionType: t.compositionType
      })),
      id: e.unique,
      parent: a ? { id: a } : null,
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { data: n, error: i } = await o(
      this.#e,
      r.postMediaType({
        body: s
      })
    );
    return n && typeof n == "string" ? this.read(n) : { error: i };
  }
  /**
   * Updates a MediaType on the server
   * @param {UmbMediaTypeDetailModel} MediaType
   * @param model
   * @returns {*}
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const a = {
      alias: e.alias,
      name: e.name,
      description: e.description,
      icon: e.icon,
      allowedAsRoot: e.allowedAtRoot,
      variesByCulture: e.variesByCulture,
      variesBySegment: e.variesBySegment,
      isElement: e.isElement,
      properties: e.properties.map((n) => ({
        id: n.id,
        container: n.container,
        sortOrder: n.sortOrder,
        alias: n.alias,
        name: n.name,
        description: n.description,
        dataType: { id: n.dataType.unique },
        variesByCulture: n.variesByCulture,
        variesBySegment: n.variesBySegment,
        validation: n.validation,
        appearance: n.appearance
      })),
      containers: e.containers,
      allowedMediaTypes: e.allowedContentTypes.map((n) => ({
        mediaType: { id: n.contentType.unique },
        sortOrder: n.sortOrder
      })),
      compositions: e.compositions.map((n) => ({
        mediaType: { id: n.contentType.unique },
        compositionType: n.compositionType
      })),
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { error: s } = await o(
      this.#e,
      r.putMediaTypeById({
        path: { id: e.unique },
        body: a
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Deletes a Media Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaTypeDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return o(
      this.#e,
      r.deleteMediaTypeById({
        path: { id: e }
      })
    );
  }
}
class c extends y {
  constructor(e) {
    super(e, m, l);
  }
}
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTypeDetailRepository: c,
  default: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as U,
  m as a,
  q as m
};
//# sourceMappingURL=media-type-detail.repository-CZkUFcVY.js.map
