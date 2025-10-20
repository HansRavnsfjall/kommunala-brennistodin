import { a as M } from "./index-jGJQ3LmE.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/utils";
import { UmbModalBaseElement as z, UMB_MODAL_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as K } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { a as O } from "./block-manager.context-token-DnrQaIqt.js";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import { css as P, state as d, customElement as x, html as l, nothing as m, repeat as S } from "@umbraco-cms/backoffice/external/lit";
import "@umbraco-cms/backoffice/block-type";
var U = Object.defineProperty, G = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, p = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? G(e, i) : e, c = t.length - 1, h; c >= 0; c--)
    (h = t[c]) && (o = (s ? h(e, i, o) : h(o)) || o);
  return s && o && U(e, i, o), o;
}, b = (t, e, i) => e.has(t) || y("Cannot " + i), f = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), k = (t, e, i) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), L = (t, e, i, s) => (b(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (b(t, e, "access private method"), i), u, a, _, C, g, v, $, E, B, w;
let n = class extends z {
  constructor() {
    super(), k(this, a), k(this, u, ""), this._groupedBlocks = [], this._filtered = [], this.consumeContext(T, (t) => {
      t?.data.createBlockInWorkspace && new K(this, M).onSetup(() => ({
        data: { preset: {}, originData: t.data.originData }
      })).onSubmit(() => {
        this.modalContext?.submit();
      }).observeRouteBuilder((e) => {
        this._workspacePath = e({});
      });
    }), this.consumeContext(O, (t) => {
      this._manager = t;
    });
  }
  connectedCallback() {
    if (super.connectedCallback(), !this.data) return;
    this._openClipboard = this.data.openClipboard ?? !1;
    const t = this.data.blocks ?? [], e = this.data.blockGroups ?? [], i = t.filter((o) => !e.find((c) => c.key === o.groupKey)), s = e.map((o) => ({
      name: o.name,
      blocks: t.filter((c) => c.groupKey === o.key)
    }));
    this._groupedBlocks = [{ blocks: i }, ...s], r(this, a, _).call(this);
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("blockEditor_addBlock")}">
				${r(this, a, w).call(this)}${r(this, a, $).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
_ = function() {
  if (f(this, u).length === 0)
    this._filtered = this._groupedBlocks;
  else {
    const t = f(this, u).toLowerCase();
    this._filtered = this._groupedBlocks.map((e) => ({ ...e, blocks: e.blocks.filter((i) => i.label?.toLocaleLowerCase().includes(t)) }));
  }
};
C = function(t) {
  L(this, u, t.target.value), r(this, a, _).call(this);
};
g = function(t) {
  this.value = {
    create: {
      contentElementTypeKey: t
    }
  }, this.modalContext?.submit();
};
v = async function(t) {
  const i = t.target?.selection || [];
  this.value = {
    clipboard: {
      selection: i
    }
  };
};
$ = function() {
  return this._manager ? this._openClipboard ? r(this, a, E).call(this) : r(this, a, B).call(this) : m;
};
E = function() {
  return l`<uui-box
			><umb-clipboard-entry-picker
				.config=${{ multiple: !0, asyncFilter: this.data?.clipboardFilter }}
				@selection-change=${r(this, a, v)}></umb-clipboard-entry-picker
		></uui-box>`;
};
B = function() {
  return l`
			${this.data?.blocks && this.data.blocks.length > 8 ? l`<uui-input
						id="search"
						@input=${r(this, a, C)}
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}>
						<uui-icon name="icon-search" slot="prepend"></uui-icon>
					</uui-input>` : m}
			${this._filtered.map(
    (t) => l`
					${t.name && t.blocks.length !== 0 && t.name !== "" ? l`<h4>${t.name}</h4>` : m}
					<div class="blockGroup">
						${S(
      t.blocks,
      (e) => e.contentElementTypeKey,
      (e) => l`
								<umb-block-type-card
									.iconFile=${e.thumbnail}
									.iconColor=${e.iconColor}
									.backgroundColor=${e.backgroundColor}
									.contentElementTypeKey=${e.contentElementTypeKey}
									@open=${() => r(this, a, g).call(this, e.contentElementTypeKey)}
									.href=${this._workspacePath && this._manager.getContentTypeHasProperties(e.contentElementTypeKey) ? `${this._workspacePath}create/${e.contentElementTypeKey}` : void 0}>
								</umb-block-type-card>
							`
    )}
					</div>
				`
  )}
		`;
};
w = function() {
  return l`
			<uui-tab-group slot="navigation">
				<uui-tab
					label=${this.localize.term("blockEditor_tabCreateEmpty")}
					?active=${!this._openClipboard}
					@click=${() => this._openClipboard = !1}>
					<umb-localize key=${this.localize.term("blockEditor_tabCreateEmpty")}>Create Empty</umb-localize>
					<uui-icon slot="icon" name="icon-add"></uui-icon>
				</uui-tab>
				<uui-tab
					label=${this.localize.term("blockEditor_tabClipboard")}
					?active=${this._openClipboard}
					@click=${() => this._openClipboard = !0}>
					<umb-localize key=${this.localize.term("blockEditor_tabClipboard")}>Clipboard</umb-localize>
					<uui-icon slot="icon" name="icon-clipboard"></uui-icon>
				</uui-tab>
			</uui-tab-group>
		`;
};
n.styles = [
  P`
			#search {
				width: 100%;
				align-items: center;
				margin-bottom: var(--uui-size-layout-1);
			}
			#search uui-icon {
				padding-left: var(--uui-size-space-3);
			}
			.blockGroup {
				display: grid;
				gap: 1rem;
				grid-template-columns: repeat(auto-fill, minmax(min(var(--umb-card-medium-min-width), 100%), 1fr));
			}

			uui-tab-group {
				--uui-tab-divider: var(--uui-color-border);
				border-left: 1px solid var(--uui-color-border);
				border-right: 1px solid var(--uui-color-border);
			}
		`
];
p([
  d()
], n.prototype, "_openClipboard", 2);
p([
  d()
], n.prototype, "_workspacePath", 2);
p([
  d()
], n.prototype, "_filtered", 2);
p([
  d()
], n.prototype, "_manager", 2);
n = p([
  x("umb-block-catalogue-modal")
], n);
const ot = n;
export {
  n as UmbBlockCatalogueModalElement,
  ot as default
};
//# sourceMappingURL=block-catalogue-modal.element-xu0WxKrN.js.map
