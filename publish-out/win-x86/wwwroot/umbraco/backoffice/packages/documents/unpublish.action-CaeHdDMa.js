import { s as C } from "./manifests-BP7S9LPy.js";
import { UmbDocumentDetailRepository as E } from "./document-detail.repository-DnC9zsqm.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UmbDocumentPublishingRepository as b } from "./document-publishing.repository-BtIywgYV.js";
import { UmbLanguageCollectionRepository as y, UMB_APP_LANGUAGE_CONTEXT as _ } from "@umbraco-cms/backoffice/language";
import { UmbEntityActionBase as q, UmbRequestReloadStructureForEntityEvent as A } from "@umbraco-cms/backoffice/entity-action";
import { UmbVariantId as c } from "@umbraco-cms/backoffice/variant";
import { umbOpenModal as x } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as N } from "@umbraco-cms/backoffice/action";
import { UMB_CURRENT_USER_CONTEXT as O } from "@umbraco-cms/backoffice/current-user";
import { UMB_NOTIFICATION_CONTEXT as R } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as L } from "@umbraco-cms/backoffice/localization-api";
class K extends q {
  constructor(n, i) {
    super(n, i);
  }
  async execute() {
    if (!this.args.unique) throw new Error("The document unique identifier is missing");
    const n = await this.getContext(R), i = new L(this), w = new y(this._host), { data: d } = await w.requestCollection({}), U = new E(this._host), { data: l } = await U.requestByUnique(this.args.unique);
    if (!l) throw new Error("The document was not found");
    const m = await this.getContext(_);
    if (!m) throw new Error("The app language context is missing");
    const e = m.getAppCulture(), o = await this.getContext(O);
    if (!o) throw new Error("The current user context is missing");
    const g = o.getLanguages(), p = o.getHasAccessToAllLanguages();
    if (g === void 0) throw new Error("The current user languages are missing");
    if (p === void 0)
      throw new Error("The current user access to all languages is missing");
    const s = l.variants.filter((t) => t.segment === null).map(
      (t) => ({
        culture: t.culture,
        segment: t.segment,
        language: d?.items.find((a) => a.unique === t.culture) ?? {
          name: e,
          entityType: "language",
          fallbackIsoCode: null,
          isDefault: !0,
          isMandatory: !1,
          unique: e
        },
        variant: t,
        unique: new c(t.culture, t.segment).toString()
      })
    ), r = [];
    e && s.some((t) => t.unique === e) ? r.push(new c(e, null).toString()) : r.push(s[0].unique);
    const h = await x(this, C, {
      data: {
        documentUnique: this.args.unique,
        options: s,
        pickableFilter: (t) => t.culture ? p ? !0 : g.includes(t.culture) : !1
      },
      value: { selection: r }
    }).catch(() => {
    });
    if (!h?.selection.length) return;
    const f = h?.selection.map((t) => c.FromString(t)) ?? [];
    if (!f.length) return;
    const T = new b(this._host), { error: u } = await T.unpublish(this.args.unique, f);
    if (u)
      throw u;
    if (!u) {
      n?.peek("positive", {
        data: {
          message: i.term("speechBubbles_editContentUnpublishedHeader")
        }
      });
      const t = await this.getContext(N), a = new A({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      t?.dispatchEvent(a);
    }
  }
}
export {
  K as UmbUnpublishDocumentEntityAction,
  K as default
};
//# sourceMappingURL=unpublish.action-CaeHdDMa.js.map
