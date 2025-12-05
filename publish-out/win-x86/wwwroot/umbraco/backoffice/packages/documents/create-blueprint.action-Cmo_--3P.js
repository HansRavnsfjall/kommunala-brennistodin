import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { DocumentBlueprintService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { M as c } from "./manifests-BfVrApfB.js";
import { UmbEntityActionBase as m } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as p } from "@umbraco-cms/backoffice/modal";
class h {
  #t;
  /**
   * Creates an instance of UmbDocumentCreateBlueprintServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentCreateBlueprintServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the Culture and Hostnames for the given Document unique
   * @param {string} unique
   * @param body
   * @memberof UmbDocumentCreateBlueprintServerDataSource
   */
  async create(t) {
    return n(this.#t, s.postDocumentBlueprintFromDocument({ body: t }));
  }
}
class l extends a {
  #t = new h(this);
  #e;
  constructor(t) {
    super(t), this.consumeContext(u, (e) => {
      this.#e = e;
    });
  }
  async create(t) {
    const { data: e, error: r } = await this.#t.create(t);
    if (!r) {
      const i = { data: { message: "Document Blueprint created" } };
      return this.#e.peek("positive", i), { data: e };
    }
    return { error: r };
  }
}
class E extends m {
  #t = new l(this);
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is required");
    const t = await p(this, c, {
      data: { unique: this.args.unique }
    }), { name: e, parent: r } = t;
    e && await this.#t.create({ name: e, parent: r, document: { id: this.args.unique } });
  }
}
export {
  E as UmbCreateDocumentBlueprintEntityAction,
  E as default
};
//# sourceMappingURL=create-blueprint.action-Cmo_--3P.js.map
