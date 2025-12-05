import { when as c, html as n, nothing as $, repeat as y, ifDefined as f, css as z, state as h, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { debounce as q } from "@umbraco-cms/backoffice/utils";
import { tryExecute as U } from "@umbraco-cms/backoffice/resources";
import { umbFocus as D } from "@umbraco-cms/backoffice/lit-element";
import { umbHttpClient as x } from "@umbraco-cms/backoffice/http-client";
import { a as A } from "./sdk.gen.js";
import { UmbModalToken as k, UmbModalBaseElement as R } from "@umbraco-cms/backoffice/modal";
import { UMB_CONTENT_WORKSPACE_CONTEXT as K, UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as B } from "@umbraco-cms/backoffice/content";
import { UMB_PROPERTY_CONTEXT as Y } from "@umbraco-cms/backoffice/property";
var F = Object.defineProperty, X = Object.getOwnPropertyDescriptor, P = (t) => {
  throw TypeError(t);
}, u = (t, e, i, s) => {
  for (var l = s > 1 ? void 0 : s ? X(e, i) : e, _ = t.length - 1, p; _ >= 0; _--)
    (p = t[_]) && (l = (s ? p(e, i, l) : p(l)) || l);
  return s && l && F(e, i, l), l;
}, E = (t, e, i) => e.has(t) || P("Cannot " + i), G = (t, e, i) => (E(t, e, "read from private field"), i ? i.call(t) : e.get(t)), v = (t, e, i) => e.has(t) ? P("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), o = (t, e, i) => (E(t, e, "access private method"), i), g, a, T, m, M, I, d, N, S, w, b, C;
const et = new k("Umb.Contentment.Modal.DataPicker", {
  modal: {
    type: "sidebar",
    size: "medium"
  }
});
let r = class extends R {
  constructor() {
    super(), v(this, a), this._allowSubmit = !1, this._itemCount = 0, this._items = [], this._loading = !1, this._pageNumber = 1, this._query = "", this._totalPages = 0, v(this, g, q((t) => {
      this.data && (this._loading = !0, this._query = t, this._pageNumber = 1, o(this, a, d).call(this));
    }, 500)), this.consumeContext(K, (t) => {
      this.observe(t == null ? void 0 : t.unique, (e) => this._entityUnique = e || void 0);
    }).passContextAliasMatches(), this.consumeContext(B, (t) => {
      this.observe(t == null ? void 0 : t.dataType, (e) => this._dataTypeKey = e == null ? void 0 : e.unique);
    }), this.consumeContext(Y, (t) => {
      this.observe(t == null ? void 0 : t.alias, (e) => this._propertyAlias = e), this.observe(t == null ? void 0 : t.variantId, (e) => this._variantId = (e == null ? void 0 : e.toString()) || "invariant");
    });
  }
  async firstUpdated() {
    o(this, a, d).call(this);
  }
  render() {
    var t;
    return n`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				${o(this, a, N).call(this)} ${o(this, a, S).call(this)} ${o(this, a, w).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${this._rejectModal}></uui-button>
					${c(
      (t = this.data) == null ? void 0 : t.enableMultiple,
      () => n`
							<uui-button
								color="positive"
								look="primary"
								label=${this.localize.term("buttons_select")}
								?disabled=${!this._allowSubmit}
								@click=${o(this, a, I)}></uui-button>
						`
    )}
				</div>
			</umb-body-layout>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
T = function(t) {
  G(this, g).call(this, t.target.value);
};
m = function(t) {
  var e, i, s;
  t.disabled || ((e = this.data) != null && e.enableMultiple ? (t.selected = !t.selected, this._itemCount = this._items.filter((l) => l.selected === !0).length, this._allowSubmit = this._itemCount > 0 && (((i = this.data) == null ? void 0 : i.maxItems) === 0 || this._itemCount <= ((s = this.data) == null ? void 0 : s.maxItems))) : (this.value = { selection: [t] }, this._submitModal()));
};
M = function(t) {
  this._pageNumber = t.target.current, o(this, a, d).call(this);
};
I = function() {
  const t = [];
  this._items.forEach((e) => {
    e.selected && (delete e.selected, t.push(e));
  }), this.value = { selection: t }, this._submitModal();
};
d = async function() {
  var i;
  const t = {
    alias: this._propertyAlias,
    dataTypeKey: this._dataTypeKey,
    id: this._entityUnique,
    pageNumber: this._pageNumber,
    pageSize: ((i = this.data) == null ? void 0 : i.pageSize) ?? 12,
    query: this._query,
    variant: this._variantId
  }, { data: e } = await U(this, A.getDataPickerSearch({ client: x, query: t }));
  this._items = (e == null ? void 0 : e.items.map((s) => ({
    ...s,
    name: s.name ?? s.value ?? "",
    value: s.value ?? ""
  }))) ?? [], this._loading = !1, this._totalPages = (e == null ? void 0 : e.total) ?? 0;
};
N = function() {
  var e;
  if ((e = this.data) != null && e.hideSearch) return $;
  const t = this.localize.term("placeholders_filter");
  return n`
			<uui-input
				type="search"
				id="filter"
				autocomplete="off"
				label=${t}
				placeholder=${t}
				.value=${this._query}
				@input=${o(this, a, T)}
				${D()}>
				<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
			</uui-input>
		`;
};
S = function() {
  var t, e, i, s, l;
  return !((t = this.data) != null && t.enableMultiple) || this._itemCount === 0 || ((e = this.data) == null ? void 0 : e.maxItems) === 0 || this._itemCount <= (((i = this.data) == null ? void 0 : i.maxItems) ?? 1 / 0) ? $ : n`
			<contentment-info-box type="danger">
				<span>
					Too many items selected, please unselect
					<strong>${this._itemCount - (((s = this.data) == null ? void 0 : s.maxItems) ?? 0)}</strong>
					${this._itemCount - (((l = this.data) == null ? void 0 : l.maxItems) ?? 0) === 1 ? "item" : "items"}.
				</span>
			</contentment-info-box>
		`;
};
w = function() {
  var t;
  return this._loading ? n`<uui-loader></uui-loader>` : this._totalPages ? n`
			${c(
    // HACK: [LK] Until I figure out how to render custom display modes in the modal.
    ((t = this.data) == null ? void 0 : t.listType) === "cards",
    () => n`
					<section>
						${y(
      this._items,
      (e) => e.key,
      (e) => o(this, a, b).call(this, e)
    )}
					</section>
				`,
    () => n`
					<uui-box>
						<uui-ref-list>
							${y(
      this._items,
      (e) => e.key,
      (e) => o(this, a, b).call(this, e)
    )}
						</uui-ref-list>
					</uui-box>
				`
  )}
			${c(
    this._totalPages > 1,
    () => n`
					<uui-pagination current=${this._pageNumber} total=${this._totalPages} @change=${o(this, a, M)}>
					</uui-pagination>
				`
  )}
		` : o(this, a, C).call(this);
};
b = function(t) {
  var e;
  return c(
    // HACK: [LK] Until I figure out how to render custom display modes in the modal.
    ((e = this.data) == null ? void 0 : e.listType) === "cards",
    () => n`
				<uui-card-media
					name=${t.name}
					detail=${f(t.description ?? void 0)}
					select-only
					selectable
					@selected=${() => o(this, a, m).call(this, t)}>
					${c(!t.image && t.icon, (i) => n`<umb-icon name=${i}></umb-icon>`)}
					${c(t.image, () => n`<img src=${t.image} alt="" />`)}
				</uui-card-media>
			`,
    () => {
      var i;
      return n`
				<umb-ref-item
					name=${t.name}
					detail=${f(t.description ?? void 0)}
					icon=${f(t.icon ?? ((i = this.data) == null ? void 0 : i.defaultIcon) ?? "icon-document")}
					select-only
					selectable
					@selected=${() => o(this, a, m).call(this, t)}
					@deselected=${() => o(this, a, m).call(this, t)}>
				</umb-ref-item>
			`;
    }
  );
};
C = function() {
  return n`
			<uui-box>
				<p>
					<umb-localize key="general_searchNoResult">Sorry, we can not find what you are looking for.</umb-localize>
				</p>
			</uui-box>
		`;
};
r.styles = [
  z`
			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				display: flex;
				color: var(--uui-color-border);
				height: 100%;
				padding-left: var(--uui-size-space-2);
			}

			contentment-info-box,
			uui-box {
				margin-bottom: var(--uui-size-space-4);
			}

			section {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
				margin-bottom: var(--uui-size-space-5);

				uui-card-media {
					min-height: 160px;
				}
			}
		`
];
u([
  h()
], r.prototype, "_allowSubmit", 2);
u([
  h()
], r.prototype, "_dataTypeKey", 2);
u([
  h()
], r.prototype, "_entityUnique", 2);
u([
  h()
], r.prototype, "_itemCount", 2);
u([
  h()
], r.prototype, "_items", 2);
u([
  h()
], r.prototype, "_loading", 2);
u([
  h()
], r.prototype, "_pageNumber", 2);
u([
  h()
], r.prototype, "_propertyAlias", 2);
u([
  h()
], r.prototype, "_query", 2);
u([
  h()
], r.prototype, "_totalPages", 2);
u([
  h()
], r.prototype, "_variantId", 2);
r = u([
  O("contentment-property-editor-ui-data-picker-modal")
], r);
export {
  et as CONTENTMENT_DATA_PICKER_MODAL,
  r as ContentmentPropertyEditorUIDataPickerModalElement,
  r as element
};
//# sourceMappingURL=data-picker-modal.element.js.map
