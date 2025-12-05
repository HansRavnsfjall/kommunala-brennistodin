import { D as Z, w as j, V as ee } from "./manifests-BfVrApfB.js";
import { UmbPickerInputContext as te } from "@umbraco-cms/backoffice/picker-input";
import { UMB_VARIANT_CONTEXT as re } from "@umbraco-cms/backoffice/variant";
import { html as c, nothing as w, repeat as D, when as ie, css as O, property as u, state as T, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { jsonStringComparison as se } from "@umbraco-cms/backoffice/observable-api";
import { splitStringToArray as ne, UmbDeprecation as oe } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as ae } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as le } from "@umbraco-cms/backoffice/validation";
import { UmbInteractionMemoriesChangeEvent as ue } from "@umbraco-cms/backoffice/interaction-memory";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as ce } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as he } from "@umbraco-cms/backoffice/document-type";
import { UmbDocumentReferenceRepository as me } from "./document-reference.repository-BLxPpYxT.js";
import { UmbTextStyles as pe } from "@umbraco-cms/backoffice/style";
import { isDocumentReference as q, isMediaReference as A, isMemberReference as de, isDefaultReference as z } from "@umbraco-cms/backoffice/relations";
import { UmbRepositoryBase as fe } from "@umbraco-cms/backoffice/repository";
import { PreviewService as P } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as S } from "@umbraco-cms/backoffice/resources";
class _e extends te {
  constructor(t) {
    super(t, Z, j);
  }
  async openPicker(t, r) {
    const s = {
      ...t
    };
    s.pickableFilter = (m) => this.#e(m, r?.allowedContentTypes), t?.search || (s.search = {
      providerAlias: ee,
      ...t?.search
    });
    const h = await (await this.getContext(re))?.getDisplayCulture();
    s.search.queryParams = {
      allowedContentTypes: r?.allowedContentTypes,
      includeTrashed: r?.includeTrashed,
      culture: h,
      ...t?.search?.queryParams
    }, await super.openPicker(s);
  }
  #e = (t, r) => r && r.length > 0 ? r.map((s) => s.unique).includes(t.documentType.unique) : !0;
}
var be = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, l = (e, t, r, s) => {
  for (var n = s > 1 ? void 0 : s ? ye(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (n = (s ? m(t, r, n) : m(n)) || n);
  return s && n && be(t, r, n), n;
}, U = (e, t, r) => t.has(e) || B("Cannot " + r), i = (e, t, r) => (U(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, s) => (U(e, t, "write to private field"), t.set(e, r), r), C = (e, t, r) => (U(e, t, "access private method"), r), b, y, v, o, f, W, V, F, L;
let a = class extends le(
  N
) {
  constructor() {
    super(), _(this, f), _(this, b, new ce(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocument",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new ae());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.includeTrashed = !1, _(this, y, !1), _(this, v, []), _(this, o, new _e(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(
      i(this, o).selection,
      (e) => this.value = e.join(","),
      "_observeSelection"
    ), this.observe(
      i(this, o).selectedItems,
      (e) => this._items = e,
      "_observerItems"
    ), this.observe(i(this, o).statuses, (e) => this._statuses = e, "_observerStatuses"), this.observe(
      i(this, o).interactionMemory.memories,
      (e) => {
        se(e, i(this, v)) || (E(this, v, e), this.dispatchEvent(new ue()));
      },
      "_observeMemories"
    );
  }
  set min(e) {
    i(this, o).min = e;
  }
  get min() {
    return i(this, o).min;
  }
  set max(e) {
    i(this, o).max = e;
  }
  get max() {
    return i(this, o).max;
  }
  set selection(e) {
    i(this, o).setSelection(e), i(this, b).setModel(e);
  }
  get selection() {
    return i(this, o).getSelection();
  }
  set value(e) {
    this.selection = ne(e), super.value = e;
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return i(this, y);
  }
  set readonly(e) {
    E(this, y, e), i(this, y) ? i(this, b).disable() : i(this, b).enable();
  }
  get interactionMemories() {
    return i(this, o).interactionMemory.getAllMemories();
  }
  set interactionMemories(e) {
    E(this, v, e), e?.forEach((t) => i(this, o).interactionMemory.setMemory(t));
  }
  render() {
    return c`${C(this, f, L).call(this)} ${C(this, f, F).call(this)}`;
  }
};
b = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
W = function() {
  i(this, o).openPicker(
    {
      hideTreeRoot: !0,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: he
      })),
      includeTrashed: this.includeTrashed
    }
  );
};
V = function(e) {
  i(this, o).requestRemoveItem(e);
};
F = function() {
  return this.selection.length >= this.max ? w : this.readonly && this.selection.length > 0 ? w : c`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${C(this, f, W)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
L = function() {
  if (this._statuses)
    return c`
			<uui-ref-list>
				${D(
      this._statuses,
      (e) => e.unique,
      (e) => {
        const t = e.unique, r = this._items?.find((s) => s.unique === t);
        return c`<umb-entity-item-ref
							id=${t}
							.item=${r}
							?error=${e.state.type === "error"}
							.errorMessage=${e.state.error}
							?readonly=${this.readonly}
							?standalone=${this.max === 1}>
							${ie(
          !this.readonly,
          () => c`
									<uui-action-bar slot="actions">
										<uui-button
											label=${this.localize.term("general_remove")}
											@click=${() => C(this, f, V).call(this, t)}></uui-button>
									</uui-action-bar>
								`
        )}
						</umb-entity-item-ref>`;
      }
    )}
			</uui-ref-list>
		`;
};
a.styles = [
  O`
			#btn-add {
				display: block;
			}
		`
];
l([
  u({ type: Number })
], a.prototype, "min", 1);
l([
  u({ type: String, attribute: "min-message" })
], a.prototype, "minMessage", 2);
l([
  u({ type: Number })
], a.prototype, "max", 1);
l([
  u({ type: String, attribute: "max-message" })
], a.prototype, "maxMessage", 2);
l([
  u({ type: Object, attribute: !1 })
], a.prototype, "startNode", 2);
l([
  u({ type: Array })
], a.prototype, "allowedContentTypeIds", 2);
l([
  u({ type: Boolean, attribute: "include-trashed" })
], a.prototype, "includeTrashed", 2);
l([
  u({ type: String })
], a.prototype, "value", 1);
l([
  u({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 1);
l([
  u({ type: Array, attribute: !1 })
], a.prototype, "interactionMemories", 1);
l([
  T()
], a.prototype, "_items", 2);
l([
  T()
], a.prototype, "_statuses", 2);
a = l([
  k("umb-input-document")
], a);
var ve = Object.defineProperty, ge = Object.getOwnPropertyDescriptor, Y = (e) => {
  throw TypeError(e);
}, $ = (e, t, r, s) => {
  for (var n = s > 1 ? void 0 : s ? ge(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (n = (s ? m(t, r, n) : m(n)) || n);
  return s && n && ve(t, r, n), n;
}, G = (e, t, r) => t.has(e) || Y("Cannot " + r), x = (e, t, r) => (G(e, t, "read from private field"), r ? r.call(e) : t.get(e)), R = (e, t, r) => t.has(e) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r) => (G(e, t, "access private method"), r), I, M, p, H, K, X, J, Q;
let d = class extends N {
  constructor() {
    super(...arguments), R(this, p), R(this, I, new me(this)), R(this, M, 10), this.unique = "", this._items = [], this._hasMoreReferences = 0, this._errorMessage = "";
  }
  firstUpdated() {
    new oe({
      removeInVersion: "17",
      deprecated: "<umb-document-reference-table> element",
      solution: "For modals use the <umb-confirm-action-modal-entity-references> or <umb-confirm-bulk-action-modal-entity-references> element instead"
    }).warn(), g(this, p, H).call(this);
  }
  render() {
    return c` ${g(this, p, Q).call(this)} ${g(this, p, J).call(this)} `;
  }
};
I = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
H = async function() {
  const { data: e, error: t } = await x(this, I).requestReferencedBy(this.unique, 0, x(this, M));
  if (t) {
    this._errorMessage = t.message;
    return;
  }
  e && (this._items = e.items, this._hasMoreReferences = e.total > x(this, M) ? e.total - x(this, M) : 0);
};
K = function(e) {
  return q(e) ? e.documentType.icon ?? "icon-document" : A(e) ? e.mediaType.icon ?? "icon-picture" : de(e) ? e.memberType.icon ?? "icon-user" : z(e) ? e.icon ?? "icon-document" : "icon-document";
};
X = function(e) {
  return q(e) ? e.documentType.name : A(e) ? e.mediaType.name : z(e) ? e.type : "";
};
J = function() {
  return this._items?.length === 0 ? w : c`
			<uui-box headline=${this.localize.term("references_labelDependsOnThis")} style="--uui-box-default-padding:0">
				<uui-table>
					<uui-table-head>
						<uui-table-head-cell></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_name">Name</umb-localize></uui-table-head-cell>
						<uui-table-head-cell><umb-localize key="general_typeName">Type Name</umb-localize></uui-table-head-cell>
					</uui-table-head>

					${D(
    this._items,
    (e) => e.id,
    (e) => c`<uui-table-row>
								<uui-table-cell style="text-align:center;">
									<umb-icon name=${g(this, p, K).call(this, e)}></umb-icon>
								</uui-table-cell>
								<uui-table-cell class="link-cell"> ${e.name} </uui-table-cell>
								<uui-table-cell>${g(this, p, X).call(this, e)}</uui-table-cell>
							</uui-table-row>`
  )}
					${this._hasMoreReferences ? c`<uui-table-row>
								<uui-table-cell></uui-table-cell>
								<uui-table-cell>
									<umb-localize key="references_labelMoreReferences" .args="${[this._hasMoreReferences]}">
										...and ${this._hasMoreReferences} more items
									</umb-localize>
								</uui-table-cell>
								<uui-table-cell></uui-table-cell>
							</uui-table-row>` : w}
				</uui-table>
			</uui-box>
		`;
};
Q = function() {
  return this._errorMessage ? c`<div id="error"><strong>${this._errorMessage}</strong></div>` : w;
};
d.styles = [
  pe,
  O`
			#error {
				color: var(--uui-color-negative);
				margin-bottom: 1rem;
			}
		`
];
$([
  u()
], d.prototype, "unique", 2);
$([
  T()
], d.prototype, "_items", 2);
$([
  T()
], d.prototype, "_hasMoreReferences", 2);
$([
  T()
], d.prototype, "_errorMessage", 2);
d = $([
  k("umb-document-reference-table")
], d);
class ze extends fe {
  constructor(t) {
    super(t);
  }
  /**
   * Enters preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async enter() {
    await S(this, P.postPreview(), { disableNotifications: !0 });
  }
  /**
   * Exits preview mode.
   * @returns {Promise<void>}
   * @memberof UmbDocumentPreviewRepository
   */
  async exit() {
    await S(this, P.deletePreview(), { disableNotifications: !0 });
  }
}
export {
  ze as U,
  _e as a,
  a as b,
  d as c
};
//# sourceMappingURL=document-preview.repository-Eycecmbi.js.map
