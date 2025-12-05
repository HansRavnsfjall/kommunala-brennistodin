import { b as l, i as p } from "./constants-rt5n84j4.js";
import { d } from "./document-type-detail.server.cache-Ggv4q985.js";
import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiDetailDataRequestManager as m, UmbManagementApiInFlightRequestCache as T } from "@umbraco-cms/backoffice/management-api";
import { UmbId as y } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as v } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as w } from "@umbraco-cms/backoffice/repository";
class o extends m {
  static #e = new T();
  constructor(e) {
    super(e, {
      create: (i) => r.postDocumentType({ body: i }),
      read: (i) => r.getDocumentTypeById({ path: { id: i } }),
      update: (i, a) => r.putDocumentTypeById({ path: { id: i }, body: a }),
      delete: (i) => r.deleteDocumentTypeById({ path: { id: i } }),
      dataCache: d,
      inflightRequestCache: o.#e
    });
  }
}
class f extends v {
  #e = new o(this);
  /**
   * Creates a new Document Type scaffold
   * @param {(string | null)} parentUnique
   * @param preset
   * @returns { CreateDocumentTypeRequestModel }
   * @memberof UmbDocumentTypeServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: l,
      unique: y.new(),
      name: "",
      alias: "",
      description: "",
      icon: "icon-document",
      allowedAtRoot: !1,
      variesByCulture: !1,
      variesBySegment: !1,
      isElement: !1,
      properties: [],
      containers: [],
      allowedContentTypes: [],
      compositions: [],
      allowedTemplates: [],
      defaultTemplate: null,
      cleanup: {
        preventCleanup: !1,
        keepAllVersionsNewerThanDays: null,
        keepLatestVersionPerDayForDays: null
      },
      collection: null,
      ...e
    } };
  }
  /**
   * Fetches a Media Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: i, error: a } = await this.#e.read(e);
    return { data: i ? this.#i(i) : void 0, error: a };
  }
  /**
   * Inserts a new Media Type on the server
   * @param {UmbDocumentTypeDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async create(e, i = null) {
    if (!e) throw new Error("Media Type is missing");
    if (!e.unique) throw new Error("Media Type unique is missing");
    const a = {
      parent: i ? { id: i } : null,
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
      allowedDocumentTypes: e.allowedContentTypes.map((n) => ({
        documentType: { id: n.contentType.unique },
        sortOrder: n.sortOrder
      })),
      compositions: e.compositions.map((n) => ({
        documentType: { id: n.contentType.unique },
        compositionType: n.compositionType
      })),
      id: e.unique,
      allowedTemplates: e.allowedTemplates,
      defaultTemplate: e.defaultTemplate ? { id: e.defaultTemplate.id } : null,
      cleanup: e.cleanup,
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { data: s, error: t } = await this.#e.create(a);
    return { data: s ? this.#i(s) : void 0, error: t };
  }
  /**
   * Updates a DocumentType on the server
   * @param {UmbDocumentTypeDetailModel} DocumentType
   * @param model
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const i = {
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
      containers: e.containers.map((t) => ({
        id: t.id,
        parent: t.parent ? { id: t.parent.id } : null,
        name: t.name ?? "",
        type: t.type,
        // TODO: check if the value is valid
        sortOrder: t.sortOrder
      })),
      allowedDocumentTypes: e.allowedContentTypes.map((t) => ({
        documentType: { id: t.contentType.unique },
        sortOrder: t.sortOrder
      })),
      compositions: e.compositions.map((t) => ({
        documentType: { id: t.contentType.unique },
        compositionType: t.compositionType
      })),
      allowedTemplates: e.allowedTemplates,
      defaultTemplate: e.defaultTemplate ? { id: e.defaultTemplate.id } : null,
      cleanup: e.cleanup,
      collection: e.collection?.unique ? { id: e.collection?.unique } : null
    }, { data: a, error: s } = await this.#e.update(e.unique, i);
    return { data: a ? this.#i(a) : void 0, error: s };
  }
  /**
   * Deletes a Media Type on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return this.#e.delete(e);
  }
  // TODO: change this to a mapper extension when the endpoints returns a $type for DocumentTypeResponseModel
  #i(e) {
    return {
      entityType: l,
      unique: e.id,
      name: e.name,
      alias: e.alias,
      description: e.description ?? "",
      icon: e.icon,
      allowedAtRoot: e.allowedAsRoot,
      variesByCulture: e.variesByCulture,
      variesBySegment: e.variesBySegment,
      isElement: e.isElement,
      properties: e.properties.map((i) => ({
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
      containers: e.containers,
      allowedContentTypes: e.allowedDocumentTypes.map((i) => ({
        contentType: { unique: i.documentType.id },
        sortOrder: i.sortOrder
      })),
      compositions: e.compositions.map((i) => ({
        contentType: { unique: i.documentType.id },
        compositionType: i.compositionType
      })),
      allowedTemplates: e.allowedTemplates,
      defaultTemplate: e.defaultTemplate ? { id: e.defaultTemplate.id } : null,
      cleanup: e.cleanup,
      collection: e.collection ? { unique: e.collection?.id } : null
    };
  }
}
class u extends w {
  constructor(e) {
    super(e, f, p);
  }
}
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbDocumentTypeDetailRepository: u,
  api: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as U,
  f as a,
  S as d
};
//# sourceMappingURL=document-type-detail.repository-CpC7IMIu.js.map
