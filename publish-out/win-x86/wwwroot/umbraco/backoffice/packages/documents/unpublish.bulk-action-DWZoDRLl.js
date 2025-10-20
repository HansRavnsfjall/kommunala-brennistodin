import { UmbUnpublishDocumentEntityAction as B } from "./unpublish.action-CaeHdDMa.js";
import { e as N, s as q } from "./manifests-BP7S9LPy.js";
import { UmbDocumentPublishingRepository as U } from "./document-publishing.repository-BtIywgYV.js";
import { umbConfirmModal as M, umbOpenModal as D } from "@umbraco-cms/backoffice/modal";
import { UmbEntityBulkActionBase as O } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UmbLanguageCollectionRepository as A, UMB_APP_LANGUAGE_CONTEXT as I } from "@umbraco-cms/backoffice/language";
import { UmbVariantId as i } from "@umbraco-cms/backoffice/variant";
import { UmbLocalizationController as _ } from "@umbraco-cms/backoffice/localization-api";
import { UMB_ENTITY_CONTEXT as L } from "@umbraco-cms/backoffice/entity";
import { UMB_ACTION_EVENT_CONTEXT as P } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as R } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as k } from "@umbraco-cms/backoffice/notification";
class Z extends O {
  async execute() {
    const s = await this.getContext(L);
    if (!s)
      throw new Error("Entity context not found");
    const m = s.getEntityType(), h = s.getUnique(), p = await this.getContext(k), e = new _(this);
    if (!m) throw new Error("Entity type not found");
    if (h === void 0) throw new Error("Entity unique not found");
    if (this.selection.length === 1) {
      await new B(this._host, {
        unique: this.selection[0],
        entityType: N,
        meta: {}
      }).execute();
      return;
    }
    const C = new A(this._host), { data: g } = await C.requestCollection({}), n = (g?.items ?? []).map((t) => ({
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
    })), r = await this.getContext(P);
    if (!r)
      throw new Error("Event context not found");
    const f = new R({
      entityType: m,
      unique: h
    });
    if (n.length === 1) {
      const t = new _(this._host);
      if (await M(this, {
        headline: t.term("actions_unpublish"),
        content: t.term("prompt_confirmListViewUnpublish"),
        color: "warning",
        confirmLabel: t.term("actions_unpublish")
      }).catch(() => !1) !== !1) {
        const a = new i(n[0].language.unique, null), y = new U(this._host);
        let E = 0;
        for (let c = 0; c < this.selection.length; c++) {
          const x = this.selection[c], { error: v } = await y.unpublish(x, [a]);
          v || E++;
        }
        p?.peek("positive", {
          data: {
            headline: e.term("speechBubbles_contentUnpublished"),
            message: e.term("speechBubbles_editMultiContentUnpublishedText", E)
          }
        }), r.dispatchEvent(f);
      }
      return;
    }
    const d = [], b = await this.getContext(I);
    if (!b) throw new Error("App language context not found");
    const l = b.getAppCulture();
    l && n.some((t) => t.unique === l) && d.push(new i(l, null).toString());
    const w = await D(this, q, {
      data: {
        options: n
      },
      value: { selection: d }
    }).catch(() => {
    });
    if (!w?.selection.length) return;
    const u = w?.selection.map((t) => i.FromString(t)) ?? [], T = new U(this._host);
    if (u.length) {
      let t = 0;
      for (const o of this.selection) {
        const { error: a } = await T.unpublish(o, u);
        a || t++;
      }
      p?.peek("positive", {
        data: {
          headline: e.term("speechBubbles_contentUnpublished"),
          message: e.term(
            "speechBubbles_editMultiVariantUnpublishedText",
            t,
            e.list(u.map((o) => o.culture ?? ""))
          )
        }
      }), r.dispatchEvent(f);
    }
  }
}
export {
  Z as UmbDocumentUnpublishEntityBulkAction,
  Z as api
};
//# sourceMappingURL=unpublish.bulk-action-DWZoDRLl.js.map
