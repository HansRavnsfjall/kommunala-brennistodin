import { e as C, u as E, s as S } from "./manifests-CH0eoEje.js";
import "./script-item.store.context-token-5j5GfCRe.js";
import "./index-DTLu03tH.js";
import { UmbServerFileRenameWorkspaceRedirectController as T } from "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { U } from "./script-workspace.context-token-DNmI_P4e.js";
import { html as h, nothing as x, css as R, state as v, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import "@umbraco-cms/backoffice/code-editor";
import { UmbEntityNamedDetailWorkspaceContextBase as P, UmbWorkspaceIsNewRedirectController as I } from "@umbraco-cms/backoffice/workspace";
var O = Object.defineProperty, W = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, u = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? W(t, r) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (i = (o ? p(t, r, i) : p(i)) || i);
  return o && i && O(t, r, i), i;
}, m = (e, t, r) => t.has(e) || b("Cannot " + r), d = (e, t, r) => (m(e, t, "read from private field"), t.get(e)), _ = (e, t, r) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), q = (e, t, r, o) => (m(e, t, "write to private field"), t.set(e, r), r), l = (e, t, r) => (m(e, t, "access private method"), r), n, c, y, f, w;
let a = class extends k {
  constructor() {
    super(), _(this, c), this._content = "", _(this, n), this.consumeContext(U, (e) => {
      q(this, n, e), this.observe(d(this, n)?.content, (t) => this._content = t), this.observe(d(this, n)?.isNew, (t) => this._isNew = t);
    });
  }
  render() {
    return h`
			<umb-entity-detail-workspace-editor>
				<umb-workspace-header-name-editable
					slot="header"
					?readonly=${this._isNew === !1}></umb-workspace-header-name-editable>
				${l(this, c, f).call(this)}
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = function(e) {
  const r = e.target.code;
  d(this, n)?.setContent(r);
};
f = function() {
  return h`
			<uui-box>
				<!-- the div below in the header is to make the box display nicely with code editor -->
				<div slot="header"></div>
				${l(this, c, w).call(this)}
			</uui-box>
		`;
};
w = function() {
  return this._content === void 0 ? x : h`
			<umb-code-editor
				id="content"
				language="javascript"
				.code=${this._content ?? ""}
				@input=${l(this, c, y)}></umb-code-editor>
		`;
};
a.styles = [
  R`
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
u([
  v()
], a.prototype, "_content", 2);
u([
  v()
], a.prototype, "_isNew", 2);
a = u([
  g("umb-script-workspace-editor")
], a);
class X extends P {
  constructor(t) {
    super(t, {
      workspaceAlias: S,
      entityType: E,
      detailRepositoryAlias: C
    }), this.content = this._data.createObservablePartOfCurrent((r) => r?.content), this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: a,
        setup: async (r, o) => {
          const i = o.match.params.entityType, s = o.match.params.parentUnique === "null" ? null : o.match.params.parentUnique;
          await this.createScaffold({ parent: { entityType: i, unique: s } }), new I(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: a,
        setup: (r, o) => {
          const i = o.match.params.unique;
          this.load(i), new T(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      }
    ]);
  }
  /**
   * @description Set the content of the script
   * @param {string} value The content of the script
   * @memberof UmbScriptWorkspaceContext
   */
  setContent(t) {
    this._data.updateCurrent({ content: t });
  }
}
export {
  X as UmbScriptWorkspaceContext,
  X as api
};
//# sourceMappingURL=script-workspace.context-C4Fd_5ta.js.map
