import { c as P } from "./template-item.store.context-token-rCTaUJ7s.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { h as L, c as q, i as B } from "./manifests-DjOjofE0.js";
import { UmbTemplateItemRepository as O } from "./template-item.repository-BhoNWIA3.js";
import { c as S } from "./index-D0fxHn_d.js";
import { a as R, U as N } from "./query-builder-modal.token-wTFAMSqZ.js";
import { UmbModalToken as z, UMB_MODAL_MANAGER_CONTEXT as I } from "@umbraco-cms/backoffice/modal";
import { html as T, nothing as W, css as D, state as y, query as K, customElement as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G, umbFocus as H } from "@umbraco-cms/backoffice/lit-element";
import { umbBindToValidation as Q } from "@umbraco-cms/backoffice/validation";
import "@umbraco-cms/backoffice/code-editor";
import "./insert-menu.element-BsuXFvGV.js";
import { UmbEntityNamedDetailWorkspaceContextBase as V, UmbWorkspaceIsNewRedirectController as F, UmbWorkspaceIsNewRedirectControllerAlias as X } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as j } from "@umbraco-cms/backoffice/observable-api";
const J = new z("Umb.Modal.TemplatingSectionPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var Z = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, f = (a) => {
  throw TypeError(a);
}, h = (a, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? tt(t, e) : t, c = a.length - 1, m; c >= 0; c--)
    (m = a[c]) && (n = (i ? m(t, e, n) : m(n)) || n);
  return i && n && Z(t, e, n), n;
}, v = (a, t, e) => t.has(a) || f("Cannot " + e), s = (a, t, e) => (v(a, t, "read from private field"), t.get(a)), d = (a, t, e) => t.has(a) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e), _ = (a, t, e, i) => (v(a, t, "write to private field"), t.set(a, e), e), u = (a, t, e) => (v(a, t, "access private method"), e), p, o, b, g, r, E, w, M, C, k, $, A, U, x;
let l = class extends G {
  constructor() {
    super(), d(this, r), d(this, p), this._name = "", this._content = "", this._alias = "", this._masterTemplateName = null, d(this, o), d(this, b, !1), d(this, g, null), this.consumeContext(I, (a) => {
      _(this, p, a);
    }), this.consumeContext(L, (a) => {
      _(this, o, a), this.observe(s(this, o)?.name, (t) => {
        this._name = t;
      }), this.observe(s(this, o)?.alias, (t) => {
        this._alias = t;
      }), this.observe(s(this, o)?.content, (t) => {
        this._content = t;
      }), this.observe(s(this, o)?.masterTemplate, (t) => {
        _(this, g, t?.unique ?? null), this._masterTemplateName = t?.name ?? null;
      }), this.observe(s(this, o)?.isNew, (t) => {
        _(this, b, !!t);
      });
    });
  }
  render() {
    return T`
			<umb-entity-detail-workspace-editor>
				<umb-input-with-alias
					slot="header"
					id="name"
					label=${this.localize.term("placeholders_entername")}
					placeholder=${this.localize.term("placeholders_entername")}
					.value=${this._name}
					.alias=${this._alias}
					?auto-generate-alias=${s(this, b)}
					@change=${u(this, r, E)}
					required
					${Q(this)}
					${H()}>
				</umb-input-with-alias>

				<uui-box>
					<div slot="header" id="code-editor-menu-container">${u(this, r, U).call(this)}</div>
					<div slot="header-actions">
						<umb-templating-insert-menu @insert=${u(this, r, M)}></umb-templating-insert-menu>
						<uui-button
							look="secondary"
							id="query-builder-button"
							label=${this.localize.term("template_queryBuilder")}
							@click=${u(this, r, A)}>
							<uui-icon name="icon-wand"></uui-icon> ${this.localize.term("template_queryBuilder")}
						</uui-button>
						<uui-button
							look="secondary"
							id="sections-button"
							label=${this.localize.term("template_insertSections")}
							@click=${u(this, r, C)}>
							<uui-icon name="icon-indent"></uui-icon> ${this.localize.term("template_insertSections")}
						</uui-button>
					</div>

					${u(this, r, x).call(this)}
				</uui-box>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
E = function(a) {
  s(this, o)?.setName(a.target.value ?? ""), s(this, o)?.setAlias(a.target.alias ?? "");
};
w = function(a) {
  const e = a.target.code;
  s(this, o)?.setContent(e);
};
M = function(a) {
  const e = a.target.value;
  this._codeEditor?.insert(e);
};
C = function() {
  s(this, p)?.open(this, J)?.onSubmit().then((t) => {
    t?.value && this._codeEditor?.insert(t.value);
  }).catch(() => {
  });
};
k = function() {
  s(this, o)?.setMasterTemplate(null, !0);
};
$ = function() {
  s(this, p)?.open(this, N, {
    data: {
      pickableFilter: (t) => t.unique !== null && t.unique !== s(this, o)?.getUnique()
    },
    value: {
      selection: [s(this, g)]
    }
  })?.onSubmit().then((t) => {
    t?.selection && s(this, o)?.setMasterTemplate(t.selection[0] ?? null, !0);
  }).catch(() => {
  });
};
A = function() {
  s(this, p)?.open(this, R)?.onSubmit().then((t) => {
    t?.value && this._codeEditor?.insert(S(t.value));
  }).catch(() => {
  });
};
U = function() {
  return T`
			<uui-button-group>
				<uui-button
					@click=${u(this, r, $)}
					look="secondary"
					id="master-template-button"
					label="${this.localize.term("template_mastertemplate")}: ${this._masterTemplateName ? this._masterTemplateName : this.localize.term("template_noMaster")}"></uui-button>
				${this._masterTemplateName ? T`<uui-button look="secondary" label=${this.localize.term("actions_remove")} compact>
							<uui-icon name="icon-delete" @click=${u(this, r, k)}></uui-icon>
						</uui-button>` : W}
			</uui-button-group>
		`;
};
x = function() {
  return T`
			<umb-code-editor
				id="content"
				language="razor"
				.code=${this._content ?? ""}
				@input=${u(this, r, w)}></umb-code-editor>
		`;
};
l.styles = [
  D`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}

			#loader-container {
				display: grid;
				place-items: center;
				min-height: calc(100dvh - 360px);
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

			umb-input-with-alias {
				width: 100%;
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
				justify-content: space-between;
				gap: var(--uui-size-space-3);
			}
		`
];
h([
  y()
], l.prototype, "_name", 2);
h([
  y()
], l.prototype, "_content", 2);
h([
  y()
], l.prototype, "_alias", 2);
h([
  y()
], l.prototype, "_masterTemplateName", 2);
h([
  K("umb-code-editor")
], l.prototype, "_codeEditor", 2);
l = h([
  Y("umb-template-workspace-editor")
], l);
class gt extends V {
  constructor(t) {
    super(t, {
      workspaceAlias: B,
      entityType: P,
      detailRepositoryAlias: q
    }), this.itemRepository = new O(this), this.#t = new j(null), this.masterTemplate = this.#t.asObservable(), this.alias = this._data.createObservablePartOfCurrent((e) => e?.alias), this.content = this._data.createObservablePartOfCurrent((e) => e?.content), this.masterTemplateUnique = this._data.createObservablePartOfCurrent(
      (e) => e?.masterTemplate?.unique
    ), this.#e = () => {
      const e = this._data.getCurrent()?.content, i = this.#t?.getValue()?.alias, n = this.getHasLayoutBlock();
      if (this.#t.getValue() === null && n && e) {
        const m = e.replace(this.getLayoutBlockRegexPattern(), "$1null$3");
        this.setContent(m);
        return;
      }
      if (n && e) {
        const m = e.replace(
          this.getLayoutBlockRegexPattern(),
          `$1"${i}.cshtml"$3`
        );
        this.setContent(m);
        return;
      }
      const c = `@{
	Layout = "${i}.cshtml";
}
${e}`;
      this.setContent(c);
    }, this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: l,
        setup: async (e, i) => {
          const n = i.match.params.entityType, c = i.match.params.parentUnique === "null" ? null : i.match.params.parentUnique;
          await this.create({ entityType: n, unique: c }), new F(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: l,
        setup: (e, i) => {
          this.removeUmbControllerByAlias(X);
          const n = i.match.params.unique;
          this.load(n);
        }
      }
    ]);
  }
  #t;
  async load(t) {
    const e = await super.load(t);
    return await this.setMasterTemplate(e.data?.masterTemplate?.unique ?? null, !1), e;
  }
  async create(t) {
    const e = await this.createScaffold({
      parent: t,
      preset: {
        masterTemplate: t.unique ? { unique: t.unique } : null
      }
    });
    return await this.setMasterTemplate(t.unique, !0), e;
  }
  setAlias(t) {
    this._data.updateCurrent({ alias: t });
  }
  setContent(t) {
    this._data.updateCurrent({ content: t });
  }
  getLayoutBlockRegexPattern() {
    return new RegExp('(@{[\\s\\S][^if]*?Layout\\s*?=\\s*?)("[^"]*?"|null)(;[\\s\\S]*?})', "gi");
  }
  getHasLayoutBlock() {
    return this.getData()?.content ? this.getLayoutBlockRegexPattern().test(this.getData()?.content) : !1;
  }
  async setMasterTemplate(t, e) {
    if (t === null)
      this.#t.setValue(null);
    else {
      const { data: i } = await this.itemRepository.requestItems([t]);
      i && this.#t.setValue(i[0]);
    }
    return e && this.#e(), this._data.updateCurrent({ masterTemplate: t ? { unique: t } : null }), t;
  }
  #e;
}
export {
  gt as UmbTemplateWorkspaceContext,
  gt as api
};
//# sourceMappingURL=template-workspace.context-C6ePrsg-.js.map
