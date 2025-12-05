import { w as u, r as h, x as l, f as p, z as c, g as m } from "./manifests-KIVuOqdB.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { ensurePathEndsWithSlash as d } from "@umbraco-cms/backoffice/utils";
import { UmbMemberTypeDetailRepository as b } from "@umbraco-cms/backoffice/member-type";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/repository";
import { UmbMemberValidationRepository as _ } from "./member-validation.repository-ComF7lAM.js";
import { UmbContentPropertyDatasetContext as E, UmbContentDetailWorkspaceContextBase as T } from "@umbraco-cms/backoffice/content";
import { b as y, c as w } from "./paths-yi0rlsCw.js";
import { UmbWorkspaceIsNewRedirectController as P, UmbWorkspaceIsNewRedirectControllerAlias as f } from "@umbraco-cms/backoffice/workspace";
import { UmbValueValidator as C } from "@umbraco-cms/backoffice/validation";
class g extends E {
}
class x extends T {
  constructor(e) {
    super(e, {
      entityType: p,
      workspaceAlias: l,
      detailRepositoryAlias: h,
      contentTypeDetailRepository: b,
      contentValidationRepository: _,
      contentVariantScaffold: u,
      contentTypePropertyName: "memberType"
    }), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.memberType.unique), this.contentTypeIcon = this._data.createObservablePartOfCurrent((t) => t?.memberType.icon), this.kind = this._data.createObservablePartOfCurrent((t) => t?.kind), this.createDate = this._data.createObservablePartOfCurrent((t) => t?.variants[0].createDate), this.updateDate = this._data.createObservablePartOfCurrent((t) => t?.variants[0].updateDate), this.#e = /* @__PURE__ */ new Set(), this.observe(
      this.contentTypeUnique,
      (t) => {
        t && this.structure.loadType(t);
      },
      null
    ), this.propertyViewGuard.fallbackToPermitted(), this.propertyWriteGuard.fallbackToPermitted(), this.routes.setRoutes([
      {
        path: y.toString(),
        component: () => import("./member-workspace-editor.element-CSSvN9yP.js"),
        setup: async (t, o) => {
          const r = o.match.params.memberTypeUnique;
          await this.create(r), new P(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: w.toString(),
        component: () => import("./member-workspace-editor.element-CSSvN9yP.js"),
        setup: async (t, o) => {
          this.removeUmbControllerByAlias(f);
          const r = o.match.params.unique;
          await this.load(r);
        }
      }
    ]), this.#r("username"), this.#r("email");
    const a = this.#r(
      "newPassword",
      (t) => this.getIsNew() === !0 && (t == null || t === "")
    );
    this.observe(
      this.isNew,
      () => {
        a.runCheck();
      },
      null
    );
  }
  #e;
  // A simple observation function to check for validation issues of a root property and map the validation message to a hint.
  #r(e, a) {
    const t = `$.${e}`, o = new C(this, {
      dataPath: t,
      navigateToError: () => {
        const s = this.getHostElement().shadowRoot.querySelector("umb-router-slot").absoluteActiveViewPath;
        if (s) {
          const i = d(s) + "invariant/view/info";
          window.history.replaceState(null, "", i);
        }
      },
      check: a
    });
    return this.observe(
      this._data.createObservablePartOfCurrent((r) => r?.[e]),
      (r) => {
        o.value = r;
      },
      `validateObserverFor_${e}`
    ), this.observe(
      this.validationContext.messages.messagesOfPathAndDescendant(t),
      (r) => {
        r.forEach((s) => {
          this.#e.has(s.key) || (this.view.hints.addOne({
            unique: s.key,
            path: [c],
            text: "!",
            color: "invalid",
            weight: 1e3
          }), this.#e.add(s.key));
        }), this.#e.forEach((s) => {
          r.some((i) => i.key === s) || (this.#e.delete(s), this.view.hints.removeOne(s));
        });
      },
      `messageObserverFor_${e}`
    ), o;
  }
  async create(e) {
    return this.createScaffold({
      parent: { entityType: m, unique: null },
      preset: {
        memberType: {
          unique: e,
          icon: "icon-user"
        }
      }
    });
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbMemberWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.memberType.unique;
  }
  createPropertyDatasetContext(e, a) {
    return new g(e, this, a);
  }
  set(e, a) {
    this._data.updateCurrent({ [e]: a });
  }
  // Only for CRUD demonstration purposes
  updateData(e) {
    const a = this._data.getCurrent();
    if (!a) throw new Error("No data to update");
    this._data.setCurrent({ ...a, ...e });
  }
  get email() {
    return this.#t("email") || "";
  }
  get username() {
    return this.#t("username") || "";
  }
  get newPassword() {
    return this.#t("newPassword") || "";
  }
  get isLockedOut() {
    return this.#t("isLockedOut") || !1;
  }
  get isTwoFactorEnabled() {
    return this.#t("isTwoFactorEnabled") || !1;
  }
  get isApproved() {
    return this.#t("isApproved") || !1;
  }
  get failedPasswordAttempts() {
    return this.#t("failedPasswordAttempts") || 0;
  }
  get lastLockOutDate() {
    return this.#t("lastLockoutDate") ?? null;
  }
  get lastLoginDate() {
    return this.#t("lastLoginDate") ?? null;
  }
  get lastPasswordChangeDate() {
    return this.#t("lastPasswordChangeDate") ?? null;
  }
  get memberGroups() {
    return this.#t("groups") || [];
  }
  #t(e) {
    return this._data.getCurrent()?.[e];
  }
}
export {
  x as UmbMemberWorkspaceContext,
  x as api
};
//# sourceMappingURL=member-workspace.context-ChIp-t7i.js.map
