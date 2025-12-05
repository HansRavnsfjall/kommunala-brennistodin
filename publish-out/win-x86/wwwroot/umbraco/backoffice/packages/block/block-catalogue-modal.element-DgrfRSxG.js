import { a as K, b as R } from "./block-workspace.modal-token-DM3FsY2R.js";
import "./block-workspace.context-token-DTpZ56Fk.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import { transformServerPathToClientPath as L } from "@umbraco-cms/backoffice/utils";
import { UmbModalBaseElement as A, UMB_MODAL_CONTEXT as D } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as G } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as W } from "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import { css as I, state as b, customElement as N, html as n, nothing as F, when as y, repeat as k, ifDefined as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbRepositoryItemsManager as X } from "@umbraco-cms/backoffice/repository";
import { UMB_SERVER_CONTEXT as q } from "@umbraco-cms/backoffice/server";
var V = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, p = (t, e, i, s) => {
  for (var r = s > 1 ? void 0 : s ? Y(e, i) : e, d = t.length - 1, o; d >= 0; d--)
    (o = t[d]) && (r = (s ? o(e, i, r) : o(r)) || r);
  return s && r && V(e, i, r), r;
}, v = (t, e, i) => e.has(t) || E("Cannot " + i), h = (t, e, i) => (v(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), M = (t, e, i, s) => (v(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (v(t, e, "access private method"), i), f, m, g, a, w, C, B, T, z, U, O, P, S, x;
let c = class extends A {
  constructor() {
    super(), _(this, a), _(this, f, new X(
      this,
      W
    )), _(this, m, ""), _(this, g, ""), this._groupedBlocks = [], this._filtered = [], this._loading = !0, this.consumeContext(q, (t) => {
      M(this, g, t?.getServerUrl() ?? "");
    }), this.consumeContext(D, (t) => {
      t?.data.createBlockInWorkspace && new G(this, K).onSetup(() => ({
        data: { preset: {}, originData: t.data.originData }
      })).onSubmit(() => {
        this.modalContext?.submit();
      }).observeRouteBuilder((e) => {
        this._workspacePath = e({});
      });
    }), this.consumeContext(R, (t) => {
      this._manager = t;
    }), this.observe(h(this, f).items, async (t) => {
      l(this, a, w).call(this, t);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._openClipboard = this.data.openClipboard ?? !1, h(this, f).setUniques(this.data.blocks.map((t) => t.contentElementTypeKey)));
  }
  render() {
    return n`
			<umb-body-layout headline=${this.localize.term("blockEditor_addBlock")}>
				${l(this, a, x).call(this)}${l(this, a, U).call(this)}
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
f = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
w = function(t) {
  if (!t?.length) return;
  const e = t.reduce(
    (o, u) => (o[u.unique] = u, o),
    {}
  ), i = this.data?.blocks?.map((o) => ({ ...e[o.contentElementTypeKey] ?? {}, ...o })) ?? [], s = this.data?.blockGroups ?? [], r = i.filter((o) => !s.find((u) => u.key === o.groupKey)), d = s.map((o) => ({
    name: o.name,
    blocks: i.filter((u) => u.groupKey === o.key)
  }));
  this._groupedBlocks = [{ blocks: r }, ...d], l(this, a, C).call(this), this._loading = !1;
};
C = function() {
  if (h(this, m).length === 0)
    this._filtered = this._groupedBlocks;
  else {
    const t = h(this, m).toLowerCase();
    this._filtered = this._groupedBlocks.map((e) => ({
      ...e,
      blocks: e.blocks.filter(
        (i) => i.label?.toLowerCase().includes(t) || i.name?.toLowerCase().includes(t) || i.description?.toLowerCase().includes(t)
      )
    }));
  }
};
B = function(t) {
  M(this, m, t.target.value), l(this, a, C).call(this);
};
T = function(t) {
  this.value = {
    create: {
      contentElementTypeKey: t
    }
  }, this.modalContext?.submit();
};
z = async function(t) {
  const i = t.target?.selection || [];
  this.value = {
    clipboard: {
      selection: i
    }
  };
};
U = function() {
  return this._manager ? this._openClipboard ? l(this, a, O).call(this) : l(this, a, P).call(this) : F;
};
O = function() {
  return n`
			<uui-box>
				<umb-clipboard-entry-picker
					.config=${{ multiple: !0, asyncFilter: this.data?.clipboardFilter }}
					@selection-change=${l(this, a, z)}></umb-clipboard-entry-picker>
			</uui-box>
		`;
};
P = function() {
  return this._loading ? n`<div id="loader"><uui-loader></uui-loader></div>` : n`
			${y(
    this.data?.blocks && this.data?.blocks.length > 8,
    () => n`
					<uui-input
						id="search"
						@input=${l(this, a, B)}
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}>
						<uui-icon name="icon-search" slot="prepend"></uui-icon>
					</uui-input>
				`
  )}
			${k(
    this._filtered,
    (t) => t.name,
    (t) => n`
					${y(t.name && t.blocks.length !== 0 && t.name !== "", () => n`<h4>${t.name}</h4>`)}
					<div class="blockGroup">
						${k(
      t.blocks,
      (e) => e.contentElementTypeKey,
      (e) => l(this, a, S).call(this, e)
    )}
					</div>
				`
  )}
		`;
};
S = function(t) {
  const e = this._workspacePath && this._manager.getContentTypeHasProperties(t.contentElementTypeKey) ? `${this._workspacePath}create/${t.contentElementTypeKey}` : void 0, i = t.thumbnail ? L(t.thumbnail) : void 0, s = i ? new URL(i, h(this, g))?.href : void 0;
  return n`
			<uui-card-block-type
				href=${$(e)}
				name=${this.localize.string(t.name)}
				description=${this.localize.string(t.description)}
				.background=${t.backgroundColor}
				@open=${() => l(this, a, T).call(this, t.contentElementTypeKey)}>
				${y(
    s,
    (r) => n`<img src=${r} alt="" />`,
    () => n`<umb-icon name=${t.icon ?? ""} color=${$(t.iconColor)}></umb-icon>`
  )}
				<slot name="actions" slot="actions"> </slot>
			</uui-card-block-type>
		`;
};
x = function() {
  return n`
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
c.styles = [
  I`
			#loader {
				display: flex;
				justify-content: center;
			}

			#search {
				width: 100%;
				align-items: center;
				margin-bottom: var(--uui-size-layout-1);

				> uui-icon {
					padding-left: var(--uui-size-space-3);
				}
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
  b()
], c.prototype, "_openClipboard", 2);
p([
  b()
], c.prototype, "_workspacePath", 2);
p([
  b()
], c.prototype, "_filtered", 2);
p([
  b()
], c.prototype, "_manager", 2);
p([
  b()
], c.prototype, "_loading", 2);
c = p([
  N("umb-block-catalogue-modal")
], c);
const bt = c;
export {
  c as UmbBlockCatalogueModalElement,
  bt as default
};
//# sourceMappingURL=block-catalogue-modal.element-DgrfRSxG.js.map
