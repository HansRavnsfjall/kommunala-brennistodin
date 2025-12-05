import { html as g, css as O, property as y, customElement as k, nothing as G, repeat as X, state as H } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as J } from "@umbraco-cms/backoffice/sorter";
import { UmbTextStyles as Q } from "@umbraco-cms/backoffice/style";
import { UUIFormControlMixin as Z } from "@umbraco-cms/backoffice/external/uui";
import { UmbSelectionChangeEvent as j, UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
import { UmbMediaTypeDetailRepository as ee, UMB_MEDIA_TYPE_PICKER_MODAL as te } from "@umbraco-cms/backoffice/media-type";
import { UmbDocumentTypeDetailRepository as $, UMB_DOCUMENT_TYPE_PICKER_MODAL as x } from "@umbraco-cms/backoffice/document-type";
import { UmbMemberTypeDetailRepository as ie, UMB_MEMBER_TYPE_PICKER_MODAL as ae } from "@umbraco-cms/backoffice/member-type";
import { UMB_MODAL_MANAGER_CONTEXT as ne, UMB_ITEM_PICKER_MODAL as S } from "@umbraco-cms/backoffice/modal";
var oe = Object.defineProperty, le = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, f = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? le(t, i) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (n = (a ? l(t, i, n) : l(n)) || n);
  return a && n && oe(t, i, n), n;
}, D = (e, t, i) => t.has(e) || B("Cannot " + i), s = (e, t, i) => (D(e, t, "read from private field"), i ? i.call(e) : t.get(e)), C = (e, t, i) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), se = (e, t, i, a) => (D(e, t, "write to private field"), t.set(e, i), i), b = (e, t, i) => (D(e, t, "access private method"), i), p, c, h, I, w, R;
let d = class extends Z(A, void 0) {
  constructor() {
    super(), C(this, h), C(this, p, {
      documentTypes: {
        item: {
          label: this.localize.term("content_documentType"),
          description: this.localize.term("defaultdialogs_selectContentType"),
          value: "documentTypes",
          icon: "icon-document"
        },
        pickerModal: () => x,
        pickableFilter: (e) => !e.isElement,
        repository: () => new $(this),
        systemProperties: [
          {
            label: this.localize.term("content_documentType"),
            description: "contentTypeAlias",
            value: "contentTypeAlias",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_createDate"),
            description: "createDate",
            value: "createDate",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_createBy"),
            description: "creator",
            value: "creator",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_isPublished"),
            description: "published",
            value: "published",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("general_sort"),
            description: "sortOrder",
            value: "sortOrder",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_updateDate"),
            description: "updateDate",
            value: "updateDate",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_updatedBy"),
            description: "updater",
            value: "updater",
            icon: "icon-settings"
          }
        ]
      },
      elementTypes: {
        item: {
          label: this.localize.term("create_elementType"),
          description: this.localize.term("content_nestedContentSelectElementTypeModalTitle"),
          value: "elementTypes",
          icon: "icon-plugin"
        },
        pickerModal: () => x,
        pickableFilter: (e) => e.isElement,
        repository: () => new $(this),
        systemProperties: [
          {
            label: this.localize.term("content_documentType"),
            description: "contentTypeAlias",
            value: "contentTypeAlias"
          }
        ]
      },
      mediaTypes: {
        item: {
          label: this.localize.term("content_mediatype"),
          description: this.localize.term("defaultdialogs_selectMediaType"),
          value: "mediaTypes",
          icon: "icon-picture"
        },
        pickerModal: () => te,
        repository: () => new ee(this),
        systemProperties: [
          {
            label: this.localize.term("content_documentType"),
            description: "contentTypeAlias",
            value: "contentTypeAlias",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_createDate"),
            description: "createDate",
            value: "createDate",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_createBy"),
            description: "creator",
            value: "creator",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("general_sort"),
            description: "sortOrder",
            value: "sortOrder",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_updateDate"),
            description: "updateDate",
            value: "updateDate",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_updatedBy"),
            description: "updater",
            value: "updater",
            icon: "icon-settings"
          }
        ]
      },
      memberTypes: {
        item: {
          label: this.localize.term("content_membertype"),
          description: this.localize.term("defaultdialogs_selectMemberType"),
          value: "memberTypes",
          icon: "icon-user"
        },
        pickerModal: () => ae,
        repository: () => new ie(this),
        systemProperties: [
          {
            label: this.localize.term("content_documentType"),
            description: "contentTypeAlias",
            value: "contentTypeAlias",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("content_createDate"),
            description: "createDate",
            value: "createDate",
            icon: "icon-settings"
          },
          { label: this.localize.term("general_email"), description: "email", value: "email", icon: "icon-settings" },
          {
            label: this.localize.term("content_updateDate"),
            description: "updateDate",
            value: "updateDate",
            icon: "icon-settings"
          },
          {
            label: this.localize.term("general_username"),
            description: "username",
            value: "username",
            icon: "icon-settings"
          }
        ]
      }
    }), C(this, c), this.documentTypes = !1, this.elementTypes = !1, this.mediaTypes = !1, this.memberTypes = !1, this.consumeContext(ne, (e) => {
      se(this, c, e);
    });
  }
  getFormElement() {
  }
  render() {
    return g`<uui-button
			label=${this.localize.term("general_choose")}
			look="placeholder"
			color="default"
			@click=${b(this, h, I)}></uui-button>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
I = async function() {
  const e = [];
  if (this.documentTypes && e.push(s(this, p).documentTypes.item), this.elementTypes && e.push(s(this, p).elementTypes.item), this.mediaTypes && e.push(s(this, p).mediaTypes.item), this.memberTypes && e.push(s(this, p).memberTypes.item), e.length === 1) {
    b(this, h, w).call(this, e[0].value);
    return;
  }
  if (!s(this, c)) return;
  const i = await s(this, c).open(this, S, {
    data: {
      headline: this.localize.term("defaultdialogs_selectContentType"),
      items: e
    }
  }).onSubmit();
  if (!i) return;
  const a = i.value;
  b(this, h, w).call(this, a);
};
w = async function(e) {
  const t = s(this, p)[e];
  if (!t) return;
  const i = t.pickerModal(), a = s(this, c)?.open(this, i, {
    data: {
      hideTreeRoot: !0,
      multiple: !1,
      pickableFilter: t.pickableFilter
    }
  });
  a?.addEventListener(j.TYPE, a.submit);
  const o = (await a?.onSubmit())?.selection ?? [];
  if (o.length === 0) return;
  const l = t.repository(), { data: U } = await l.requestByUnique(o[0] ?? "");
  U && b(this, h, R).call(this, U, t);
};
R = async function(e, t) {
  if (!e || !s(this, c)) return;
  const i = e?.properties.map((l) => ({
    label: l.name,
    value: l.alias,
    description: l.alias,
    icon: t.item.icon
  })) ?? [], a = [...t.systemProperties ?? [], ...i], o = await s(this, c).open(this, S, {
    data: {
      headline: `Select a property from ${e.name}`,
      items: a
    }
  }).onSubmit();
  o && (this.selectedProperty = {
    label: o.label,
    alias: o.value,
    isSystem: t.systemProperties?.some((l) => l.value === o.value) ?? !1
  }, this.dispatchEvent(new v()));
};
d.styles = [
  O`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}
		`
];
f([
  y({ type: Boolean, attribute: "document-types" })
], d.prototype, "documentTypes", 2);
f([
  y({ type: Boolean, attribute: "element-types" })
], d.prototype, "elementTypes", 2);
f([
  y({ type: Boolean, attribute: "media-types" })
], d.prototype, "mediaTypes", 2);
f([
  y({ type: Boolean, attribute: "member-types" })
], d.prototype, "memberTypes", 2);
d = f([
  k("umb-input-collection-content-type-property")
], d);
var re = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, T = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? ce(t, i) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (n = (a ? l(t, i, n) : l(n)) || n);
  return a && n && re(t, i, n), n;
}, P = (e, t, i) => t.has(e) || L("Cannot " + i), E = (e, t, i) => (P(e, t, "read from private field"), i ? i.call(e) : t.get(e)), M = (e, t, i) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), pe = (e, t, i, a) => (P(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (P(e, t, "access private method"), i), z, _, r, W, F, q, K, V, N, Y;
let m = class extends A {
  constructor() {
    super(...arguments), M(this, r), M(this, z, new J(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e.alias,
      itemSelector: ".layout-item",
      containerSelector: "#layout-wrapper",
      onChange: ({ model: e }) => {
        this.value = e, this.dispatchEvent(new v());
      }
    })), M(this, _, []);
  }
  set value(e) {
    pe(this, _, e ?? []), E(this, z).setModel(E(this, _));
  }
  get value() {
    return E(this, _);
  }
  render() {
    return g`
			<div id="layout-wrapper">${u(this, r, N).call(this)}</div>
			${u(this, r, V).call(this)}
		`;
  }
};
z = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
W = function(e) {
  const t = e.target;
  if (!t.selectedProperty) return;
  if (this._field = t.selectedProperty, this.value?.find((n) => this._field?.alias === n.alias))
    throw new Error("Duplicate field/columns are not allowed.");
  const a = {
    alias: this._field.alias,
    header: this._field.label,
    isSystem: this._field.isSystem ? 1 : 0
  };
  this.value = [...this.value ?? [], a], this.dispatchEvent(new v());
};
F = function(e, t) {
  this.value = this.value?.map(
    (i) => i.alias === t.alias ? { ...i, header: e.target.value } : i
  ), this.dispatchEvent(new v());
};
q = function(e, t) {
  this.value = this.value?.map(
    (i) => i.alias === t.alias ? { ...i, nameTemplate: e.target.value } : i
  ), this.dispatchEvent(new v());
};
K = function(e) {
  const t = [];
  this.value?.forEach((i) => {
    i.alias !== e && t.push(i);
  }), this.value = t, this.dispatchEvent(new v());
};
V = function() {
  return g`
			<umb-input-collection-content-type-property
				document-types
				media-types
				@change=${u(this, r, W)}></umb-input-collection-content-type-property>
		`;
};
N = function() {
  return this.value ? X(
    this.value,
    (e) => e.alias,
    (e) => u(this, r, Y).call(this, e)
  ) : G;
};
Y = function(e) {
  return g`
			<div class="layout-item" id=${e.alias}>
				<uui-icon class="drag-handle" name="icon-grip"></uui-icon>

				<uui-input
					required
					label="label"
					placeholder="Enter a label..."
					.value=${e.header ?? ""}
					@change=${(t) => u(this, r, F).call(this, t, e)}></uui-input>

				<div class="alias">
					<code>${e.alias}</code>
				</div>

				<uui-input
					label="template"
					placeholder="Enter a label template..."
					.value=${e.nameTemplate ?? ""}
					@change=${(t) => u(this, r, q).call(this, t, e)}></uui-input>

				<div class="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						look="secondary"
						@click=${() => u(this, r, K).call(this, e.alias)}></uui-button>
				</div>
			</div>
		`;
};
m.styles = [
  Q,
  O`
			#layout-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1px;
				margin-bottom: var(--uui-size-1);
			}

			.layout-item {
				background-color: var(--uui-color-surface-alt);
				display: flex;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-3) var(--uui-size-6);
			}

			.layout-item > uui-icon {
				flex: 0 0 var(--uui-size-6);
			}

			.layout-item > uui-input,
			.layout-item > .alias {
				flex: 1;
			}

			.layout-item > .actions {
				flex: 0 0 auto;
				display: flex;
				justify-content: flex-end;
			}

			.drag-handle {
				cursor: grab;
			}

			.drag-handle:active {
				cursor: grabbing;
			}
		`
];
T([
  y({ type: Array })
], m.prototype, "value", 1);
T([
  y({ type: Object, attribute: !1 })
], m.prototype, "config", 2);
T([
  H()
], m.prototype, "_field", 2);
m = T([
  k("umb-property-editor-ui-collection-column-configuration")
], m);
const Te = m;
export {
  m as UmbPropertyEditorUICollectionColumnConfigurationElement,
  Te as default
};
//# sourceMappingURL=column-configuration.element-BdmBXsQm.js.map
