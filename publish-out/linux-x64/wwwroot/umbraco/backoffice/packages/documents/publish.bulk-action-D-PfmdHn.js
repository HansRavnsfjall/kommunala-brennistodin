import { UmbDocumentPublishingRepository as _ } from "./document-publishing.repository-BtIywgYV.js";
import { e as B, A as P } from "./manifests-BP7S9LPy.js";
import { UmbPublishDocumentEntityAction as q } from "./publish.action-DO5hmVQV.js";
import { UmbEntityBulkActionBase as M } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbLanguageCollectionRepository as N, UMB_APP_LANGUAGE_CONTEXT as A } from "@umbraco-cms/backoffice/language";
import { UmbVariantId as i } from "@umbraco-cms/backoffice/variant";
import { umbConfirmModal as D, umbOpenModal as O } from "@umbraco-cms/backoffice/modal";
import { UmbLocalizationController as T } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as I } from "@umbraco-cms/backoffice/entity";
import { UMB_ACTION_EVENT_CONTEXT as L } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as R } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as k } from "@umbraco-cms/backoffice/notification";
class Z extends M {
  async execute() {
    const s = await this.getContext(I);
    if (!s)
      throw new Error("Entity context not found");
    const h = s.getEntityType(), p = s.getUnique(), d = await this.getContext(k), e = new T(this);
    if (!h) throw new Error("Entity type not found");
    if (p === void 0) throw new Error("Entity unique not found");
    if (this.selection.length === 1) {
      await new q(this._host, {
        unique: this.selection[0],
        entityType: B,
        meta: {}
      }).execute();
      return;
    }
    const g = new N(this._host), { data: y } = await g.requestCollection({}), n = (y?.items ?? []).map((t) => ({
      language: t,
      variant: {
        name: t.name,
        culture: t.unique,
        state: null,
        createDate: null,
        publishDate: null,
        updateDate: null,
        segment: null,
        scheduledPublishDate: null,
        scheduledUnpublishDate: null
      },
      unique: new i(t.unique, null).toString(),
      culture: t.unique,
      segment: null
    })), r = await this.getContext(L);
    if (!r)
      throw new Error("Event context not found");
    const f = new R({
      entityType: h,
      unique: p
    });
    if (n.length === 1) {
      const t = new T(this._host);
      if (await D(this, {
        headline: t.term("content_readyToPublish"),
        content: t.term("prompt_confirmListViewPublish"),
        color: "positive",
        confirmLabel: t.term("actions_publish")
      }).catch(() => !1) !== !1) {
        const u = new i(n[0].language.unique, null), c = new _(this._host);
        let C = 0;
        for (let m = 0; m < this.selection.length; m++) {
          const x = this.selection[m], { error: v } = await c.publish(x, [{ variantId: u }]);
          v || C++;
        }
        d?.peek("positive", {
          data: {
            headline: e.term("speechBubbles_editContentPublishedHeader"),
            message: e.term("speechBubbles_editMultiContentPublishedText", C)
          }
        }), r.dispatchEvent(f);
      }
      return;
    }
    const b = [], w = await this.getContext(A);
    if (!w)
      throw new Error("App language context not found");
    const l = w.getAppCulture();
    l && n.some((t) => t.unique === l) && b.push(new i(l, null).toString());
    const E = await O(this, P, {
      data: {
        options: n
      },
      value: { selection: b }
    }).catch(() => {
    });
    if (!E?.selection.length) return;
    const a = E?.selection.map((t) => i.FromString(t)) ?? [], U = new _(this._host);
    if (a.length) {
      let t = 0;
      for (const o of this.selection) {
        const { error: u } = await U.publish(
          o,
          a.map((c) => ({ variantId: c }))
        );
        u || t++;
      }
      d?.peek("positive", {
        data: {
          headline: e.term("speechBubbles_editContentPublishedHeader"),
          message: e.term(
            "speechBubbles_editMultiVariantPublishedText",
            t,
            e.list(a.map((o) => o.culture ?? ""))
          )
        }
      }), r.dispatchEvent(f);
    }
  }
}
export {
  Z as UmbDocumentPublishEntityBulkAction,
  Z as api
};
//# sourceMappingURL=publish.bulk-action-D-PfmdHn.js.map
