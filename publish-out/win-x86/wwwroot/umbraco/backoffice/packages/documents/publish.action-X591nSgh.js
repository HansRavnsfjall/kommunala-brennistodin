import { A as _ } from "./manifests-BfVrApfB.js";
import { UmbDocumentDetailRepository as y } from "./document-detail.repository-CtE7HTwC.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { UmbDocumentPublishingRepository as q } from "./document-publishing.repository-R5iIv5OV.js";
import { UmbLanguageCollectionRepository as x, UMB_APP_LANGUAGE_CONTEXT as A } from "@umbraco-cms/backoffice/language";
import { UmbEntityActionBase as B, UmbRequestReloadStructureForEntityEvent as I } from "@umbraco-cms/backoffice/entity-action";
import { UmbVariantId as o } from "@umbraco-cms/backoffice/variant";
import { umbOpenModal as L } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as N } from "@umbraco-cms/backoffice/action";
import { UMB_CURRENT_USER_CONTEXT as R } from "@umbraco-cms/backoffice/current-user";
import { UMB_NOTIFICATION_CONTEXT as v } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as M } from "@umbraco-cms/backoffice/localization-api";
class Y extends B {
  constructor(r, n) {
    super(r, n);
  }
  async execute() {
    if (!this.args.unique) throw new Error("The document unique identifier is missing");
    const r = await this.getContext(v), n = new M(this), b = new x(this._host), { data: w } = await b.requestCollection({}), C = new y(this._host), { data: a } = await C.requestByUnique(this.args.unique);
    if (!a) throw new Error("The document was not found");
    const g = await this.getContext(A);
    if (!g) throw new Error("The app language context is missing");
    const i = g.getAppCulture(), l = await this.getContext(R);
    if (!l) throw new Error("The current user context is missing");
    const p = l.getLanguages(), h = l.getHasAccessToAllLanguages();
    if (p === void 0) throw new Error("The current user languages are missing");
    if (h === void 0)
      throw new Error("The current user access to all languages is missing");
    const s = a.variants.filter((e) => e.segment === null).map((e) => ({
      culture: e.culture,
      segment: e.segment,
      language: w?.items.find((t) => t.unique === e.culture) ?? {
        name: i,
        entityType: "language",
        fallbackIsoCode: null,
        isDefault: !0,
        isMandatory: !1,
        unique: i
      },
      variant: e,
      unique: new o(e.culture, e.segment).toString()
    })), c = [];
    i && s.some((e) => e.unique === i) ? c.push(new o(i, null).toString()) : c.push(s[0].unique);
    const m = await L(this, _, {
      data: {
        confirmLabel: "#actions_publish",
        options: s,
        pickableFilter: (e) => e.culture ? h ? !0 : p.includes(e.culture) : !1
      },
      value: { selection: c }
    }).catch(() => {
    });
    if (!m?.selection.length) return;
    const d = (m?.selection.map((e) => o.FromString(e)) ?? []).flatMap(
      (e) => a.variants.filter((t) => e.culture === t.culture).map((t) => o.Create(t).toSegment(t.segment))
    );
    if (d.length) {
      const e = new q(this._host), { error: t } = await e.publish(
        this.args.unique,
        d.map((f) => ({ variantId: f }))
      );
      if (t)
        throw t;
      if (!t)
        if (s.length === 1 && s[0].culture === null)
          r?.peek("positive", {
            data: {
              headline: n.term("speechBubbles_editContentPublishedHeader"),
              message: n.term("speechBubbles_editContentPublishedText")
            }
          });
        else {
          const U = a.variants.filter(
            (u) => m.selection.includes(u.culture)
          );
          r?.peek("positive", {
            data: {
              headline: n.term("speechBubbles_editContentPublishedHeader"),
              message: n.term(
                "speechBubbles_editVariantPublishedText",
                // TODO: show correct variant names instead of variant strings [MR]
                n.list(U.map((u) => o.Create(u).toString() ?? u.name))
              )
            }
          });
        }
      const T = await this.getContext(N), E = new I({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      T?.dispatchEvent(E);
    }
  }
}
export {
  Y as UmbPublishDocumentEntityAction,
  Y as default
};
//# sourceMappingURL=publish.action-X591nSgh.js.map
