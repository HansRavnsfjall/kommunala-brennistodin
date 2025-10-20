import { U as u } from "./entity-CA4W0tlV.js";
import { UmbServerFileRenameWorkspaceRedirectController as d } from "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/external/backend-api";
import "./stylesheet-picker-modal.token-CeSiGQ35.js";
import "@umbraco-cms/backoffice/repository";
import { o as h, c as _, p as E } from "./manifests-CkeJWkpV.js";
import "@umbraco-cms/backoffice/store";
import { html as y, css as v, state as S, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as b, UmbWorkspaceIsNewRedirectController as U } from "@umbraco-cms/backoffice/workspace";
var C = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (t) => {
  throw TypeError(t);
}, m = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? x(e, r) : e, i = t.length - 1, p; i >= 0; i--)
    (p = t[i]) && (o = (a ? p(e, r, o) : p(o)) || o);
  return a && o && C(e, r, o), o;
}, l = (t, e, r) => e.has(t) || c("Cannot " + r), O = (t, e, r) => (l(t, e, "read from private field"), e.get(t)), R = (t, e, r) => e.has(t) ? c("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r, a) => (l(t, e, "write to private field"), e.set(t, r), r), n;
let s = class extends T {
  constructor() {
    super(), R(this, n), this.consumeContext(h, (t) => {
      k(this, n, t), this.observe(O(this, n)?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return y`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable
					slot="header"
					?readonly=${this._isNew === !1}></umb-workspace-header-name-editable>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
s.styles = [
  f,
  v`
			umb-code-editor {
				--editor-height: calc(100dvh - 260px);
			}

			uui-box {
				min-height: calc(100dvh - 260px);
				margin: var(--uui-size-layout-1);
				--uui-box-default-padding: 0;
				/* remove header border bottom as code editor looks better in this box */
				--uui-color-divider-standalone: transparent;
			}
		`
];
m([
  S()
], s.prototype, "_isNew", 2);
s = m([
  w("umb-stylesheet-workspace-editor")
], s);
class D extends b {
  constructor(e) {
    super(e, {
      workspaceAlias: E,
      entityType: u,
      detailRepositoryAlias: _
    }), this.content = this._data.createObservablePartOfCurrent((r) => r?.content), this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: s,
        setup: async (r, a) => {
          const o = a.match.params.entityType, i = a.match.params.parentUnique === "null" ? null : a.match.params.parentUnique;
          await this.createScaffold({ parent: { entityType: o, unique: i } }), new U(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: s,
        setup: (r, a) => {
          const o = a.match.params.unique;
          this.load(o), new d(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      }
    ]);
  }
  /**
   * @description Set the content of the stylesheet
   * @param {string} value The content of the stylesheet
   * @memberof UmbStylesheetWorkspaceContext
   */
  setContent(e) {
    this._data.updateCurrent({ content: e });
  }
  /**
   * @description Create a new stylesheet
   * @deprecated Use `createScaffold` instead. Will be removed in v17.
   * @param { UmbEntityModel } parent The parent entity
   * @param { string } parent.entityType The entity type of the parent
   * @param { UmbEntityUnique } parent.unique The unique identifier of the parent
   */
  async create(e) {
    await this.createScaffold({ parent: e });
  }
}
export {
  D as UmbStylesheetWorkspaceContext,
  D as api
};
//# sourceMappingURL=stylesheet-workspace.context-DNfPBhJl.js.map
