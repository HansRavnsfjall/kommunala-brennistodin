import { D as J, w as Q, V as Z } from "./manifests-BP7S9LPy.js";
import { UmbPickerInputContext as j } from "@umbraco-cms/backoffice/picker-input";
import { UMB_VARIANT_CONTEXT as ee } from "@umbraco-cms/backoffice/variant";
import { html as u, nothing as g, repeat as S, when as te, css as D, property as c, state as $, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as re, UmbDeprecation as ie } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as ne } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as se } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as ae } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as oe } from "@umbraco-cms/backoffice/document-type";
import { UmbDocumentReferenceRepository as le } from "./document-reference.repository-S55nfu_J.js";
import { UmbTextStyles as ue } from "@umbraco-cms/backoffice/style";
import { isDocumentReference as N, isMediaReference as k, isMemberReference as ce, isDefaultReference as q } from "@umbraco-cms/backoffice/relations";
import { UmbRepositoryBase as he } from "@umbraco-cms/backoffice/repository";
import { PreviewService as E } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as P } from "@umbraco-cms/backoffice/resources";
class me extends j {
  constructor(t) {
    super(t, J, Q);
  }
  async openPicker(t, r) {
    const i = {
      ...t
    };
    i.pickableFilter = (m) => this.#e(m, r?.allowedContentTypes), t?.search || (i.search = {
      providerAlias: Z,
      ...t?.search
    });
    const h = await (await this.getContext(ee))?.getDisplayCulture();
    i.search.queryParams = {
      allowedContentTypes: r?.allowedContentTypes,
      includeTrashed: r?.includeTrashed,
      culture: h,
      ...t?.search?.queryParams
    }, await super.openPicker(i);
  }
  #e = (t, r) => r && r.length > 0 ? r.map((i) => i.unique).includes(t.documentType.unique) : !0;
}
var de = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, l = (e, t, r, i) => {
  for (var n = i > 1 ? void 0 : i ? pe(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (n = (i ? m(t, r, n) : m(n)) || n);
  return i && n && de(t, r, n), n;
}, R = (e, t, r) => t.has(e) || A("Cannot " + r), s = (e, t, r) => (R(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), fe = (e, t, r, i) => (R(e, t, "write to private field"), t.set(e, r), r), x = (e, t, r) => (R(e, t, "access private method"), r), _, b, o, f, z, B, W, V;
let a = class extends se(
  O
) {
  constructor() {
    super(), T(this, f), T(this, _, new ae(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocument",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new ne());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.includeTrashed = !1, T(this, b, !1), T(this, o, new me(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(s(this, o).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, o).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    s(this, o).min = e;
  }
  get min() {
    return s(this, o).min;
  }
  set max(e) {
    s(this, o).max = e;
  }
  get max() {
    return s(this, o).max;
  }
  set selection(e) {
    s(this, o).setSelection(e), s(this, _).setModel(e);
  }
  get selection() {
    return s(this, o).getSelection();
  }
  set value(e) {
    this.selection = re(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return s(this, b);
  }
  set readonly(e) {
    fe(this, b, e), s(this, b) ? s(this, _).disable() : s(this, _).enable();
  }
  render() {
    return u`${x(this, f, V).call(this)} ${x(this, f, W).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
z = function() {
  s(this, o).openPicker(
    {
      hideTreeRoot: !0,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: oe
      })),
      includeTrashed: this.includeTrashed
    }
  );
};
B = function(e) {
  s(this, o).requestRemoveItem(e.unique);
};
W = function() {
  return this.selection.length >= this.max ? g : this.readonly && this.selection.length > 0 ? g : u`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${x(this, f, z)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
V = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${S(
      this._items,
      (e) => e.unique,
      (e) => u`<umb-entity-item-ref
							id=${e.unique}
							.item=${e}
							?readonly=${this.readonly}
							?standalone=${this.max === 1}>
							${te(
        !this.readonly,
        () => u`
									<uui-action-bar slot="actions">
										<uui-button
											label=${this.localize.term("general_remove")}
											@click=${() => x(this, f, B).call(this, e)}></uui-button>
									</uui-action-bar>
								`
      )}
						</umb-entity-item-ref>`
    )}
			</uui-ref-list>
		`;
};
a.styles = [
  D`
			#btn-add {
				display: block;
			}

			umb-entity-item-ref[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
l([
  c({ type: Number })
], a.prototype, "min", 1);
l([
  c({ type: String, attribute: "min-message" })
], a.prototype, "minMessage", 2);
l([
  c({ type: Number })
], a.prototype, "max", 1);
l([
  c({ type: String, attribute: "max-message" })
], a.prototype, "maxMessage", 2);
l([
  c({ type: Object, attribute: !1 })
], a.prototype, "startNode", 2);
l([
  c({ type: Array })
], a.prototype, "allowedContentTypeIds", 2);
l([
  c({ type: Boolean, attribute: "include-trashed" })
], a.prototype, "includeTrashed", 2);
l([
  c({ type: String })
], a.prototype, "value", 1);
l([
  c({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 1);
l([
  $()
], a.prototype, "_items", 2);
a = l([
  I("umb-input-document")
], a);
var _e = Object.defineProperty, be = Object.getOwnPropertyDescriptor, F = (e) => {
  throw TypeError(e);
}, w = (e, t, r, i) => {
  for (var n = i > 1 ? void 0 : i ? be(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (n = (i ? m(t, r, n) : m(n)) || n);
  return i && n && _e(t, r, n), n;
}, L = (e, t, r) => t.has(e) || F("Cannot " + r), M = (e, t, r) => (L(e, t, "read from private field"), r ? r.call(e) : t.get(e)), C = (e, t, r) => t.has(e) ? F("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r) => (L(e, t, "access private method"), r), U, v, d, Y, G, H, K, X;
let p = class extends O {
  constructor() {
    super(...arguments), C(this, d), C(this, U, new le(this)), C(this, v, 10), this.unique = "", this._items = [], this._hasMoreReferences = 0, this._errorMessage = "";
  }
  firstUpdated() {
    new ie({
      removeInVersion: "17",
      deprecated: "<umb-document-reference-table> element",
      solution: "For modals use the <umb-confirm-action-modal-entity-references> or <umb-confirm-bulk-action-modal-entity-references> element instead"
    }).warn(), y(this, d, Y).call(this);
  }
  render() {
    return u` ${y(this, d, X).call(this)} ${y(this, d, K).call(this)} `;
  }
};
U = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Y = async function() {
  const { data: e, error: t } = await M(this, U).requestReferencedBy(this.unique, 0, M(this, v));
  if (t) {
    this._errorMessage = t.message;
    return;
  }
  e && (this._items = e.items, this._hasMoreReferences = e.total > M(this, v) ? e.total - M(this, v) : 0);
};
G = function(e) {
  return N(e) ? e.documentType.icon ?? "icon-document" : k(e) ? e.mediaType.icon ?? "icon-picture" : ce(e) ? e.memberType.icon ?? "icon-user" : q(e) ? e.icon ?? "icon-document" : "icon-document";
};
H = function(e) {
  return N(e) ? e.documentType.name : k(e) ? e.mediaType.name : q(e) ? e.type : "";
};
K = function() {
  return this._items?.length === 0 ? g : u`
			<uui-box headline=${this.localize.term("references_labelDependsOnThis")} style="--uui-box-default-padding:0">
				<uui-table>
					<uui-table-head>
						<uui-table-head-cell></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_name">Name</umb-localize></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_typeName">Type Name</umb-localize></uui-table-head-cell>
					</uui-table-head>

					${S(
    this._items,
    (e) => e.id,
    (e) => u`<uui-table-row>
								<uui-table-cell style="text-align:center;">
									<umb-icon name=${y(this, d, G).call(this, e)}></umb-icon>
								</uui-table-cell>
								<uui-table-cell class="link-cell"> ${e.name} </uui-table-cell>
								<uui-table-cell>${y(this, d, H).call(this, e)}</uui-table-cell>
							</uui-table-row>`
  )}
					${this._hasMoreReferences ? u`<uui-table-row>
								<uui-table-cell></uui-table-cell>
								<uui-table-cell>
									<umb-localize key="references_labelMoreReferences" .args="${[this._hasMoreReferences]}">
										...and ${this._hasMoreReferences} more items
									</umb-localize>
								</uui-table-cell>
								<uui-table-cell></uui-table-cell>
							</uui-table-row>` : g}
				</uui-table>
			</uui-box>
		`;
};
X = function() {
  return this._errorMessage ? u`<div id="error"><strong>${this._errorMessage}</strong></div>` : g;
};
p.styles = [
  ue,
  D`
			#error {
				color: var(--uui-color-negative);
				margin-bottom: 1rem;
			}
		`
];
w([
  c()
], p.prototype, "unique", 2);
w([
  $()
], p.prototype, "_items", 2);
w([
  $()
], p.prototype, "_hasMoreReferences", 2);
w([
  $()
], p.prototype, "_errorMessage", 2);
p = w([
  I("umb-document-reference-table")
], p);
class Oe extends he {
  constructor(t) {
    super(t);
  }
  /**
   * Enters preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async enter() {
    await P(this, E.postPreview(), { disableNotifications: !0 });
  }
  /**
   * Exits preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async exit() {
    await P(this, E.deletePreview(), { disableNotifications: !0 });
  }
}
export {
  Oe as U,
  me as a,
  a as b,
  p as c
};
//# sourceMappingURL=document-preview.repository-C-iB7zsP.js.map
