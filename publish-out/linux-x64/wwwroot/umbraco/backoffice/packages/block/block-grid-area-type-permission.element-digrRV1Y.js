import { UmbLitElement as K } from "@umbraco-cms/backoffice/lit-element";
import { nothing as h, repeat as d, html as u, css as U, property as B, state as v, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { UMB_DATA_TYPE_WORKSPACE_CONTEXT as C } from "@umbraco-cms/backoffice/data-type";
import { UmbRepositoryItemsManager as M } from "@umbraco-cms/backoffice/repository";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as W } from "@umbraco-cms/backoffice/document-type";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
var I = Object.defineProperty, N = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, c = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? N(e, o) : e, n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
  return s && i && I(e, o, i), i;
}, g = (t, e, o) => e.has(t) || f("Cannot " + o), b = (t, e, o) => (g(t, e, "read from private field"), o ? o.call(t) : e.get(t)), _ = (t, e, o) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), p = (t, e, o) => (g(t, e, "access private method"), o), y, l, T, k, E, w, $, x, A;
let a = class extends K {
  constructor() {
    super(), _(this, l), this._value = [], this._blockTypesWithElementName = [], this._blockGroups = [], _(this, y, new M(
      this,
      W
    )), this.observe(b(this, y).items, (t) => {
      this._blockTypesWithElementName = t.map((e) => {
        const o = this._blockTypes?.find((s) => s.contentElementTypeKey === e.unique);
        if (o)
          return { type: o, name: e.name };
      }).filter((e) => e !== void 0);
    }), this.consumeContext(C, async (t) => {
      this.observe(
        await t?.propertyValueByAlias("blocks"),
        (e) => {
          this._blockTypes = e ?? [], b(this, y).setUniques(this._blockTypes.map((o) => o.contentElementTypeKey));
        },
        "observeBlockType"
      ), this.observe(
        await t?.propertyValueByAlias("blockGroups"),
        (e) => {
          this._blockGroups = e ?? [];
        },
        "observeBlockGroups"
      );
    }).passContextAliasMatches();
  }
  set value(t) {
    this._value = t ?? [];
  }
  get value() {
    return this._value;
  }
  render() {
    return this._blockTypes === void 0 ? h : this._blockTypesWithElementName.length === 0 ? "There must be one Block Type created before permissions can be configured." : u`<div id="permissions">
				${d(
      this._value,
      (t) => t,
      (t, e) => {
        const o = this._blockGroups.length > 0 && this._blockTypesWithElementName.length > 0;
        return u`<div class="permission-setting">
							<uui-combobox
								@change=${(s) => p(this, l, k).call(this, s, e)}
								.value=${t.elementTypeKey ?? t.groupKey ?? ""}>
								<uui-combobox-list>
									${o ? u`<strong>${this.localize.term("general_groups")}</strong>` : h}
									${p(this, l, x).call(this, t)}
									${o ? u`<strong>${this.localize.term("general_elements")}</strong>` : h}
									${p(this, l, A).call(this, t)}
								</uui-combobox-list>
							</uui-combobox>
							<span>
								<uui-input
									type="number"
									placeholder="0"
									min="0"
									.value=${t.minAllowed}
									@change=${(s) => p(this, l, E).call(this, s, e)}></uui-input>
								-
								<uui-input
									type="number"
									placeholder="&infin;"
									min="0"
									.value=${t.maxAllowed}
									@change=${(s) => p(this, l, w).call(this, s, e)}></uui-input>
								<uui-button
									label=${this.localize.term("general_remove")}
									look="secondary"
									compact
									@click=${() => p(this, l, $).call(this, e)}>
									<uui-icon name="icon-trash"></uui-icon>
								</uui-button>
							</span>
						</div>`;
      }
    )}
			</div>
			<uui-button
				id="add-button"
				look="placeholder"
				label=${this.localize.term("general_add")}
				@click=${p(this, l, T)}></uui-button>
			${this._value.length ? h : u`<small>
						<umb-localize key="blockEditor_areaAllowedBlocksEmpty">
							By default, all block types are allowed in an Area, Use this option to allow only selected types.
						</umb-localize>
					</small>`} `;
  }
};
y = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
T = function() {
  this.value = [...this.value, { minAllowed: 0, maxAllowed: void 0 }], this.dispatchEvent(new m());
};
k = function(t, e) {
  const o = [...this.value], i = t.composedPath()[0].value, n = i ? this._blockGroups.find((r) => r.key === i) ? { elementTypeKey: void 0, groupKey: i } : { elementTypeKey: i, groupKey: void 0 } : { elementTypeKey: void 0, groupKey: void 0 };
  this.value = o.map((r, P) => P === e ? { ...r, ...n } : r), this.dispatchEvent(new m());
};
E = function(t, e) {
  const o = [...this.value], s = t.target.value;
  this.value = o.map(
    (i, n) => n === e ? { ...i, minAllowed: parseInt(s) ?? 0 } : i
  ), this.dispatchEvent(new m());
};
w = function(t, e) {
  const o = [...this.value], s = t.target.value;
  this.value = o.map(
    (i, n) => n === e ? { ...i, maxAllowed: parseInt(s) ?? void 0 } : i
  ), this.dispatchEvent(new m());
};
$ = function(t) {
  this.value = [...this.value].filter((e, o) => o !== t), this.dispatchEvent(new m());
};
x = function(t) {
  return d(
    this._blockGroups,
    (e) => e.key,
    (e) => u`<uui-combobox-list-option .value=${e.key} ?selected=${t.groupKey === e.key}>
					${e.name}
				</uui-combobox-list-option>`
  );
};
A = function(t) {
  return d(
    this._blockTypesWithElementName,
    (e) => e.type.contentElementTypeKey,
    (e) => u`<uui-combobox-list-option
					.value=${e.type.contentElementTypeKey}
					?selected=${t.elementTypeKey === e.type.contentElementTypeKey}>
					${e.name}
				</uui-combobox-list-option>`
  );
};
a.styles = [
  z,
  U`
			#permissions {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
				margin-bottom: var(--uui-size-space-3);
			}

			#add-button {
				width: 100%;
			}

			.permission-setting {
				flex: 1;
				display: flex;
				gap: var(--uui-size-space-6);
			}

			.permission-setting > uui-combobox {
				flex: 1;
			}

			.permission-setting > span {
				display: flex;
				gap: var(--uui-size-space-1);
				align-items: center;
			}

			uui-combobox strong {
				padding: 0 var(--uui-size-space-1);
			}
		`
];
c([
  B({ type: Array })
], a.prototype, "value", 1);
c([
  v()
], a.prototype, "_value", 2);
c([
  v()
], a.prototype, "_blockTypes", 2);
c([
  v()
], a.prototype, "_blockTypesWithElementName", 2);
c([
  v()
], a.prototype, "_blockGroups", 2);
a = c([
  G("umb-property-editor-ui-block-grid-area-type-permission")
], a);
const V = a;
export {
  a as UmbPropertyEditorUIBlockGridAreaTypePermissionElement,
  V as default
};
//# sourceMappingURL=block-grid-area-type-permission.element-digrRV1Y.js.map
