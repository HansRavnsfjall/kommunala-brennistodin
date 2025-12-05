import { q as g, b as q } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { d as T, g as U } from "./manifests-FJr77TTX.js";
import { c as C } from "./index-D0fxHn_d.js";
import { html as _, nothing as P, css as A, state as y, query as I, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { umbOpenModal as k } from "@umbraco-cms/backoffice/modal";
import { UMB_TEMPLATE_QUERY_BUILDER_MODAL as R } from "@umbraco-cms/backoffice/template";
import "@umbraco-cms/backoffice/code-editor";
import "./insert-menu.element-BsuXFvGV.js";
import { UmbEntityNamedDetailWorkspaceContextBase as W, UmbWorkspaceIsNewRedirectController as O } from "@umbraco-cms/backoffice/workspace";
import { tryExecute as B } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as L } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbServerFileRenameWorkspaceRedirectController as M } from "@umbraco-cms/backoffice/server-file-system";
var V = Object.defineProperty, z = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, d = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? z(e, i) : e, o = t.length - 1, u; o >= 0; o--)
    (u = t[o]) && (n = (r ? u(e, i, n) : u(n)) || n);
  return r && n && V(e, i, n), n;
}, m = (t, e, i) => e.has(t) || v("Cannot " + i), l = (t, e, i) => (m(t, e, "read from private field"), e.get(t)), h = (t, e, i) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), N = (t, e, i, r) => (m(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (m(t, e, "access private method"), i), s, p, b, w, f, E;
let a = class extends S {
  constructor() {
    super(), h(this, p), this._content = "", h(this, s), this.consumeContext(g, (t) => {
      N(this, s, t), this.observe(l(this, s)?.content, (e) => {
        this._content = e;
      }), this.observe(l(this, s)?.isNew, (e) => {
        this._isNew = e;
      });
    });
  }
  render() {
    return _`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable
					slot="header"
					?readonly=${this._isNew === !1}></umb-workspace-header-name-editable>
				<uui-box>
					<div slot="header" id="code-editor-menu-container">
						<umb-templating-insert-menu @insert=${c(this, p, w)} hidePartialViews></umb-templating-insert-menu>
						<uui-button
							look="secondary"
							id="query-builder-button"
							label=${this.localize.term("template_queryBuilder")}
							@click=${c(this, p, f)}>
							<uui-icon name="icon-wand"></uui-icon>
							<umb-localize key="template_queryBuilder">Query builder</umb-localize>
						</uui-button>
					</div>
					${c(this, p, E).call(this)}
				</uui-box>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
b = function(t) {
  const i = t.target.code;
  l(this, s)?.setContent(i);
};
w = function(t) {
  const i = t.target.value;
  this._codeEditor?.insert(i);
};
f = async function() {
  const t = await k(this, R).catch(() => {
  });
  t?.value && this._codeEditor?.insert(C(t.value));
};
E = function() {
  return this._content === void 0 ? P : _`
			<umb-code-editor
				id="content"
				language="razor"
				.code=${this._content ?? ""}
				@input=${c(this, p, b)}></umb-code-editor>
		`;
};
a.styles = [
  A`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			umb-code-editor {
				--editor-height: calc(100dvh - 300px);
			}

			uui-box {
				min-height: calc(100dvh - 300px);
				margin: var(--uui-size-layout-1);
				--uui-box-default-padding: 0;
				/* remove header border bottom as code editor looks better in this box */
				--uui-color-divider-standalone: transparent;
			}

			#code-editor-menu-container uui-icon:not([name='icon-delete']) {
				margin-right: var(--uui-size-space-3);
			}

			#insert-menu {
				margin: 0;
				padding: 0;
				margin-top: var(--uui-size-space-3);
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-3);
				min-width: calc(100% + var(--uui-size-8, 24px));
			}

			#insert-menu > li,
			ul {
				padding: 0;
				width: 100%;
				list-style: none;
			}

			.insert-menu-item {
				width: 100%;
			}

			#code-editor-menu-container {
				display: flex;
				justify-content: flex-end;
				gap: var(--uui-size-space-3);
				width: 100%;
			}
		`
];
d([
  y()
], a.prototype, "_content", 2);
d([
  y()
], a.prototype, "_isNew", 2);
d([
  I("umb-code-editor")
], a.prototype, "_codeEditor", 2);
a = d([
  x("umb-partial-view-workspace-editor")
], a);
class te extends W {
  constructor(e) {
    super(e, {
      workspaceAlias: U,
      entityType: q,
      detailRepositoryAlias: T
    }), this.content = this._data.createObservablePartOfCurrent((i) => i?.content), this.#e = async (i) => {
      await this.createScaffold(i), new O(
        this,
        this,
        this.getHostElement().shadowRoot.querySelector("umb-router-slot")
      );
    }, this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique/snippet/:snippetId",
        component: a,
        setup: async (i, r) => {
          const n = r.match.params.entityType, o = r.match.params.parentUnique === "null" ? null : r.match.params.parentUnique, u = r.match.params.snippetId;
          this.#e({
            parent: { entityType: n, unique: o },
            snippet: { unique: u }
          });
        }
      },
      {
        path: "create/parent/:entityType/:parentUnique",
        component: a,
        setup: async (i, r) => {
          const n = r.match.params.entityType, o = r.match.params.parentUnique === "null" ? null : r.match.params.parentUnique;
          this.#e({
            parent: { entityType: n, unique: o },
            snippet: null
          });
        }
      },
      {
        path: "edit/:unique",
        component: a,
        setup: (i, r) => {
          const n = r.match.params.unique;
          this.load(n), new M(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      }
    ]);
  }
  #e;
  setContent(e) {
    this._data.updateCurrent({ content: e });
  }
  async createScaffold(e) {
    let i = "";
    if (e.snippet?.unique) {
      const { data: n } = await this.#t(e.snippet.unique);
      i = n?.content || "";
    }
    const r = { ...e, preset: { content: i } };
    return super.createScaffold(r);
  }
  #t(e) {
    return B(
      this,
      L.getPartialViewSnippetById({
        path: { id: e }
      })
    );
  }
}
export {
  te as UmbPartialViewWorkspaceContext,
  te as api
};
//# sourceMappingURL=partial-view-workspace.context-CCEBXg_S.js.map
