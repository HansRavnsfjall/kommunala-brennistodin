import { U as n } from "./entity-action-base-C1FfYSbT.js";
import { U as a } from "./constants-BttLQSIM.js";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as o } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as h, createExtensionApi as p } from "@umbraco-cms/backoffice/extension-api";
class g extends n {
  #t = !0;
  #i;
  #e;
  constructor(i, t) {
    super(i, t), this.#i = new Promise((e) => {
      new h(
        this,
        o,
        "entityCreateOptionAction",
        (s) => s.forEntityTypes.includes(this.args.entityType),
        async (s) => {
          this.#t = s.length === 1, this.#t && await this.#s(s), e();
        },
        "umbEntityActionsObserver"
      );
    });
  }
  async getHref() {
    await this.#i;
    const i = await this.#e?.getHref();
    return this.#t && i ? i : void 0;
  }
  async execute() {
    if (await this.#i, this.#t) {
      await this.#e?.execute();
      return;
    }
    await r(this, a, {
      data: {
        unique: this.args.unique,
        entityType: this.args.entityType
      }
    });
  }
  async #s(i) {
    const t = i[0].manifest;
    if (!t) throw new Error("No first action manifest found");
    const e = await p(this, t, [
      { unique: this.args.unique, entityType: this.args.entityType, meta: t.meta }
    ]);
    if (!e) throw new Error(`Could not create api for ${t.alias}`);
    e.manifest = t, this.#e = e;
  }
}
export {
  g as UmbCreateEntityAction,
  g as api
};
//# sourceMappingURL=create.action-Cs49sHMB.js.map
