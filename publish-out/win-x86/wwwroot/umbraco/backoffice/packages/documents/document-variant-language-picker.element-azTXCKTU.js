import { DocumentVariantStateModel as o } from "@umbraco-cms/backoffice/external/backend-api";
import { css as L, property as d, state as f, customElement as M, html as l, repeat as z, nothing as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as q } from "@umbraco-cms/backoffice/style";
var w = Object.defineProperty, O = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, r = (e, t, a, i) => {
  for (var n = i > 1 ? void 0 : i ? O(t, a) : t, g = e.length - 1, m; g >= 0; g--)
    (m = e[g]) && (n = (i ? m(t, a, n) : m(n)) || n);
  return i && n && w(t, a, n), n;
}, b = (e, t, a) => t.has(e) || y("Cannot " + a), v = (e, t, a) => (b(e, t, "read from private field"), a ? a.call(e) : t.get(e)), _ = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), E = (e, t, a, i) => (b(e, t, "write to private field"), t.set(e, a), a), h = (e, t, a) => (b(e, t, "access private method"), a), c, u, S, p, k;
let s = class extends $ {
  constructor() {
    super(...arguments), _(this, u), _(this, c), this.variantLanguageOptions = [], this._selection = [], this._isAllSelected = !1;
  }
  set selectionManager(e) {
    E(this, c, e), this.observe(
      this.selectionManager.selection,
      (t) => {
        this._selection = t, this._isAllSelected = h(this, u, p).call(this);
      },
      "_selectionManager"
    );
  }
  get selectionManager() {
    return v(this, c);
  }
  updated(e) {
    super.updated(e), e.has("variantLanguageOptions") && (this._isAllSelected = h(this, u, p).call(this)), this.selectionManager && this.pickableFilter && v(this, c).setAllowLimitation((t) => {
      const a = this.variantLanguageOptions.find((i) => i.unique === t);
      return a ? this.pickableFilter(a) : !0;
    });
  }
  render() {
    return this.variantLanguageOptions.length === 0 ? l`<uui-box>
				<umb-localize key="content_noVariantsToProcess">There are no available variants</umb-localize>
			</uui-box>` : l`
			<uui-checkbox
				@change=${h(this, u, S)}
				label=${this.localize.term("general_selectAll")}
				.checked=${this._isAllSelected}></uui-checkbox>
			${z(
      this.variantLanguageOptions,
      (e) => e.unique,
      (e) => l` ${h(this, u, k).call(this, e)} `
    )}
		`;
  }
  static renderLabel(e, t) {
    return l`<div class="label" slot="label">
			<strong> ${e.language.name} </strong>
			<div class="label-status">${s.renderVariantStatus(e)}</div>
			${e.language.isMandatory && t ? l`<div class="label-status">
						<umb-localize key="languages_mandatoryLanguage">Mandatory language</umb-localize>
					</div>` : A}
		</div>`;
  }
  static renderVariantStatus(e) {
    switch (e.variant?.state) {
      case o.PUBLISHED:
        return l`<umb-localize key="content_published">Published</umb-localize>`;
      case o.PUBLISHED_PENDING_CHANGES:
        return l`<umb-localize key="content_publishedPendingChanges">Published with pending changes</umb-localize>`;
      case o.DRAFT:
        return l`<umb-localize key="content_unpublished">Draft</umb-localize>`;
      case o.NOT_CREATED:
      default:
        return l`<umb-localize key="content_notCreated">Not created</umb-localize>`;
    }
  }
};
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
S = function(e) {
  const t = this.variantLanguageOptions.map((n) => n.unique), a = this.selectionManager.getAllowLimitation(), i = t.filter((n) => a(n));
  e.target.checked ? this.selectionManager.setSelection(i) : this.selectionManager.setSelection([]);
};
p = function() {
  const e = this.variantLanguageOptions.map((i) => i.unique), t = this.selectionManager.getAllowLimitation(), a = e.filter((i) => t(i));
  return this._selection.length !== 0 && this._selection.length === a.length;
};
k = function(e) {
  const t = this.pickableFilter ? this.pickableFilter(e) : () => !0, a = this._selection.includes(e.unique), i = (!a && this.requiredFilter?.(e)) ?? !1;
  return l`
			<uui-menu-item
				class=${i ? "required" : ""}
				?selectable=${t}
				?disabled=${!t}
				label=${e.variant?.name ?? e.language.name}
				@selected=${() => this.selectionManager.select(e.unique)}
				@deselected=${() => this.selectionManager.deselect(e.unique)}
				?selected=${a}>
				<uui-icon slot="icon" name="icon-globe"></uui-icon>
				${s.renderLabel(e, i)}
			</uui-menu-item>
		`;
};
s.styles = [
  q,
  L`
			.required {
				color: var(--uui-color-danger);
				--uui-menu-item-color-hover: var(--uui-color-danger-emphasis);
				--uui-menu-item-color-disabled: var(--uui-color-danger);
			}
			.label {
				padding: var(--uui-size-space-3) 0;
			}
			.label-status {
				font-size: var(--uui-type-small-size);
			}

			uui-menu-item {
				--uui-menu-item-flat-structure: 1;
				--uui-menu-item-border-radius: var(--uui-border-radius);
			}

			uui-checkbox {
				margin-bottom: var(--uui-size-space-3);
			}
		`
];
r([
  d({ type: Array, attribute: !1 })
], s.prototype, "variantLanguageOptions", 2);
r([
  d({ attribute: !1 })
], s.prototype, "selectionManager", 1);
r([
  f()
], s.prototype, "_selection", 2);
r([
  f()
], s.prototype, "_isAllSelected", 2);
r([
  d({ attribute: !1 })
], s.prototype, "pickableFilter", 2);
r([
  d({ attribute: !1 })
], s.prototype, "requiredFilter", 2);
s = r([
  M("umb-document-variant-language-picker")
], s);
export {
  s as U
};
//# sourceMappingURL=document-variant-language-picker.element-azTXCKTU.js.map
