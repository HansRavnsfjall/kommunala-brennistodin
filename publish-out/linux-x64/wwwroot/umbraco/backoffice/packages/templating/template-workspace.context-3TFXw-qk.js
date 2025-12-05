import { c as P } from "./template-item.store.context-token-rCTaUJ7s.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { g as L, b as q, h as B } from "./manifests-DcuSN-5b.js";
import { UmbTemplateItemRepository as O } from "./template-item.repository-CVFneNIa.js";
import { c as S } from "./index-D0fxHn_d.js";
import { a as R, U as N } from "./query-builder-modal.token-wTFAMSqZ.js";
import { UmbModalToken as z, UMB_MODAL_MANAGER_CONTEXT as I } from "@umbraco-cms/backoffice/modal";
import { html as g, nothing as W, css as D, state as T, query as K, customElement as Y } from "@umbraco-cms/backoffice/external/lit";
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
var Z = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, v = (i) => {
  throw TypeError(i);
}, p = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? tt(t, e) : t, c = i.length - 1, m; c >= 0; c--)
    (m = i[c]) && (n = (s ? m(t, e, n) : m(n)) || n);
  return s && n && Z(t, e, n), n;
}, f = (i, t, e) => t.has(i) || v("Cannot " + e), a = (i, t, e) => (f(i, t, "read from private field"), t.get(i)), d = (i, t, e) => t.has(i) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), _ = (i, t, e, s) => (f(i, t, "write to private field"), t.set(i, e), e), u = (i, t, e) => (f(i, t, "access private method"), e), h, o, b, y, r, E, w, M, k, C, $, A, U, x;
let l = class extends G {
  constructor() {
    super(), d(this, r), d(this, h), this._name = "", this._content = "", this._alias = "", this._masterTemplateName = null, d(this, o), d(this, b, !1), d(this, y, null), this.consumeContext(I, (i) => {
      _(this, h, i);
    }), this.consumeContext(L, (i) => {
      _(this, o, i), this.observe(a(this, o)?.name, (t) => {
        this._name = t;
      }), this.observe(a(this, o)?.alias, (t) => {
        this._alias = t;
      }), this.observe(a(this, o)?.content, (t) => {
        this._content = t;
      }), this.observe(a(this, o)?.masterTemplate, (t) => {
        _(this, y, t?.unique ?? null), this._masterTemplateName = t?.name ?? null;
      }), this.observe(a(this, o)?.isNew, (t) => {
        _(this, b, !!t);
      });
    });
  }
  render() {
    return g`
			<umb-entity-detail-workspace-editor>
				<umb-input-with-alias
					slot="header"
					id="name"
					label=${this.localize.term("placeholders_entername")}
					placeholder=${this.localize.term("placeholders_entername")}
					.value=${this._name}
					.alias=${this._alias}
					?auto-generate-alias=${a(this, b)}
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
							@click=${u(this, r, k)}>
							<uui-icon name="icon-indent"></uui-icon> ${this.localize.term("template_insertSections")}
						</uui-button>
					</div>

					${u(this, r, x).call(this)}
				</uui-box>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
E = function(i) {
  a(this, o)?.setName(i.target.value ?? ""), a(this, o)?.setAlias(i.target.alias ?? "");
};
w = function(i) {
  const e = i.target.code;
  a(this, o)?.setContent(e);
};
M = function(i) {
  const e = i.target.value;
  this._codeEditor?.insert(e);
};
k = function() {
  a(this, h)?.open(this, J)?.onSubmit().then((t) => {
    t?.value && this._codeEditor?.insert(t.value);
  }).catch(() => {
  });
};
C = function() {
  a(this, o)?.setMasterTemplate(null);
};
$ = function() {
  a(this, h)?.open(this, N, {
    data: {
      pickableFilter: (t) => t.unique !== null && t.unique !== a(this, o)?.getUnique()
    },
    value: {
      selection: [a(this, y)]
    }
  })?.onSubmit().then((t) => {
    t?.selection && a(this, o)?.setMasterTemplate(t.selection[0] ?? null);
  }).catch(() => {
  });
};
A = function() {
  a(this, h)?.open(this, R)?.onSubmit().then((t) => {
    t?.value && this._codeEditor?.insert(S(t.value));
  }).catch(() => {
  });
};
U = function() {
  return g`
			<uui-button-group>
				<uui-button
					@click=${u(this, r, $)}
					look="secondary"
					id="master-template-button"
					label="${this.localize.term("template_mastertemplate")}: ${this._masterTemplateName ? this._masterTemplateName : this.localize.term("template_noMaster")}"></uui-button>
				${this._masterTemplateName ? g`<uui-button look="secondary" label=${this.localize.term("actions_remove")} compact>
							<uui-icon name="icon-delete" @click=${u(this, r, C)}></uui-icon>
						</uui-button>` : W}
			</uui-button-group>
		`;
};
x = function() {
  return g`
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
p([
  T()
], l.prototype, "_name", 2);
p([
  T()
], l.prototype, "_content", 2);
p([
  T()
], l.prototype, "_alias", 2);
p([
  T()
], l.prototype, "_masterTemplateName", 2);
p([
  K("umb-code-editor")
], l.prototype, "_codeEditor", 2);
l = p([
  Y("umb-template-workspace-editor")
], l);
class yt extends V {
  constructor(t) {
    super(t, {
      workspaceAlias: B,
      entityType: P,
      detailRepositoryAlias: q
    }), this.itemRepository = new O(this), this.#t = new j(null), this.masterTemplate = this.#t.asObservable(), this.alias = this._data.createObservablePartOfCurrent((e) => e?.alias), this.content = this._data.createObservablePartOfCurrent((e) => e?.content), this.masterTemplateUnique = this._data.createObservablePartOfCurrent(
      (e) => e?.masterTemplate?.unique
    ), this.#e = () => {
      const e = this._data.getCurrent()?.content, s = this.#t?.getValue()?.alias, n = this.getHasLayoutBlock();
      if (this.#t.getValue() === null && n && e) {
        const m = e.replace(this.getLayoutBlockRegexPattern(), "$1null$3");
        this.setContent(m);
        return;
      }
      if (n && e) {
        const m = e.replace(
          this.getLayoutBlockRegexPattern(),
          `$1"${s}.cshtml"$3`
        );
        this.setContent(m);
        return;
      }
      const c = `@{
	Layout = "${s}.cshtml";
}
${e}`;
      this.setContent(c);
    }, this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: l,
        setup: async (e, s) => {
          const n = s.match.params.entityType, c = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique;
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
        setup: (e, s) => {
          this.removeUmbControllerByAlias(X);
          const n = s.match.params.unique;
          this.load(n);
        }
      }
    ]);
  }
  #t;
  async load(t) {
    const e = await super.load(t);
    return e.data && this.setMasterTemplate(e.data.masterTemplate?.unique ?? null), e;
  }
  async create(t) {
    const e = await this.createScaffold({ parent: t });
    if (e) {
      if (!t) return;
      await this.setMasterTemplate(t.unique);
    }
    return e;
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
  async setMasterTemplate(t) {
    if (t === null)
      return this.#t.setValue(null), this.#e(), null;
    const { data: e } = await this.itemRepository.requestItems([t]);
    return e ? (this.#t.setValue(e[0]), this.#e(), e[0]) : null;
  }
  #e;
}
export {
  yt as UmbTemplateWorkspaceContext,
  yt as api
};
//# sourceMappingURL=template-workspace.context-3TFXw-qk.js.map
