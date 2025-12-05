import { UmbTemplateQueryRepository as ae } from "./template-query.repository-DMJkes5y.js";
import { UserOrderModel as z, TemplateQueryPropertyTypeModel as v, OperatorModel as o } from "@umbraco-cms/backoffice/external/backend-api";
import { css as M, property as N, state as g, customElement as U, html as s, ifDefined as k, query as oe, queryAll as se } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as ne, umbOpenModal as ue } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentItemRepository as ce, UMB_DOCUMENT_PICKER_MODAL as pe } from "@umbraco-cms/backoffice/document";
import { UmbLitElement as me } from "@umbraco-cms/backoffice/lit-element";
function de(e, t) {
  switch (t) {
    case v.STRING:
      return ye(e);
    case v.INTEGER:
      return _e(e);
    case v.DATE_TIME:
      return fe(e);
    default:
      return e;
  }
}
function I(e) {
  if (e)
    return e.map((t) => {
      switch (t.alias) {
        case z.NAME:
          return { ...t, localizeKey: "template_name" };
        case z.ID:
          return { ...t, localizeKey: "template_id" };
        case z.CREATE_DATE:
          return { ...t, localizeKey: "template_createdDate" };
        case z.UPDATE_DATE:
          return { ...t, localizeKey: "template_lastUpdatedDate" };
        default:
          return t;
      }
    });
}
function he(e) {
  if (e?.direction)
    switch (e.direction) {
      case "ascending":
        return { ...e, localizeKey: "template_ascending" };
      case "descending":
        return { ...e, localizeKey: "template_descending" };
      default:
        return e;
    }
}
function ye(e) {
  return e.map((t) => {
    switch (t.operator) {
      case o.EQUALS:
        return { ...t, localizeKey: "template_is" };
      case o.NOT_EQUALS:
        return { ...t, localizeKey: "template_isNot" };
      case o.CONTAINS:
        return { ...t, localizeKey: "template_contains" };
      case o.NOT_CONTAINS:
        return { ...t, localizeKey: "template_doesNotContain" };
      default:
        return t;
    }
  });
}
function _e(e) {
  return e.map((t) => {
    switch (t.operator) {
      case o.EQUALS:
        return { ...t, localizeKey: "template_equals" };
      case o.NOT_EQUALS:
        return { ...t, localizeKey: "template_doesNotEqual" };
      case o.GREATER_THAN:
        return { ...t, localizeKey: "template_greaterThan" };
      case o.GREATER_THAN_EQUAL_TO:
        return { ...t, localizeKey: "template_greaterThanEqual" };
      case o.LESS_THAN:
        return { ...t, localizeKey: "template_lessThan" };
      case o.LESS_THAN_EQUAL_TO:
        return { ...t, localizeKey: "template_lessThanEqual" };
      default:
        return t;
    }
  });
}
function fe(e) {
  return e.map((t) => {
    switch (t.operator) {
      case o.GREATER_THAN:
        return { ...t, localizeKey: "template_before" };
      case o.GREATER_THAN_EQUAL_TO:
        return { ...t, localizeKey: "template_beforeIncDate" };
      case o.LESS_THAN:
        return { ...t, localizeKey: "template_after" };
      case o.LESS_THAN_EQUAL_TO:
        return { ...t, localizeKey: "template_afterIncDate" };
      default:
        return t;
    }
  });
}
var be = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, $ = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ve(t, i) : t, m = e.length - 1, d; m >= 0; m--)
    (d = e[m]) && (a = (n ? d(t, i, a) : d(a)) || a);
  return n && a && be(t, i, a), a;
}, B = (e, t, i) => t.has(e) || L("Cannot " + i), _ = (e, t, i) => (B(e, t, "read from private field"), i ? i.call(e) : t.get(e)), x = (e, t, i) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), q = (e, t, i) => (B(e, t, "access private method"), i), O, f, D, b, W, F, G, H;
let y = class extends me {
  constructor() {
    super(...arguments), x(this, b), this.filter = {}, this.unremovable = !1, this.currentPropertyType = null, x(this, O, (e) => {
      const t = e.target, i = this.currentPropertyType;
      this.filter = { ...this.filter, propertyAlias: t.value }, this.currentPropertyType = this.settings?.properties?.find((n) => n.alias === this.filter.propertyAlias)?.type ?? null, i !== this.currentPropertyType && q(this, b, W).call(this);
    }), x(this, f, (e) => {
      const t = e.target;
      this.filter = { ...this.filter, constraintValue: t.value };
    }), x(this, D, (e) => {
      const t = e.target;
      this.filter = { ...this.filter, operator: t.value };
    });
  }
  get isFilterValid() {
    return Object.keys(this.filter).length === 3 && Object.values(this.filter).every((e) => !!e);
  }
  willUpdate(e) {
    e.has("filter") && this.isFilterValid && this.dispatchEvent(new Event("update-query"));
  }
  _renderOperatorsDropdown() {
    if (!this.settings?.operators) return;
    const e = de(this.settings?.operators, this.currentPropertyType);
    return s`<umb-dropdown look="outline" id="operator-dropdown" label="Choose operator">
			<span slot="label">${this.filter?.operator ?? ""}</span>
			<uui-combobox-list @change=${_(this, D)} class="options-list">
				${e?.filter(
      (t) => this.currentPropertyType ? t.applicableTypes?.includes(this.currentPropertyType) : !0
    ).map(
      (t) => s`<uui-combobox-list-option .value=${t.operator ?? ""}>
								<umb-localize .key=${t.localizeKey}> ${t.operator} </umb-localize>
							</uui-combobox-list-option>`
    )}
			</uui-combobox-list>
		</umb-dropdown>`;
  }
  _renderConstraintValueInput() {
    switch (this.currentPropertyType) {
      case v.INTEGER:
        return s`<uui-input type="number" @change=${_(this, f)} label="constrain value"></uui-input>`;
      case v.STRING:
        return s`<uui-input type="text" @change=${_(this, f)} label="constrain value"></uui-input>`;
      case v.DATE_TIME:
        return s`<uui-input type="date" @change=${_(this, f)} label="constrain value"></uui-input>`;
      default:
        return s`<uui-input type="text" @change=${_(this, f)} label="constrain value"></uui-input>`;
    }
  }
  render() {
    const e = I(this.settings?.properties);
    return s`
			<span>${this.unremovable ? this.localize.term("template_where") : this.localize.term("template_and")}</span>
			<umb-dropdown look="outline" id="property-alias-dropdown" label="Property alias">
				<span slot="label">${this.filter?.propertyAlias ?? ""}</span>
				<uui-combobox-list @change=${_(this, O)} class="options-list">
					${e?.map(
      (t) => s`<uui-combobox-list-option tabindex="0" .value=${t.alias ?? ""}>
								<umb-localize key=${k(t.localizeKey)}> ${t.alias}</umb-localize>
							</uui-combobox-list-option>`
    )}
				</uui-combobox-list></umb-dropdown
			>
			${this.filter?.propertyAlias ? this._renderOperatorsDropdown() : ""}
			${this.filter?.operator ? this._renderConstraintValueInput() : ""}
			<uui-button-group>
				<uui-button
					title=${this.localize.term("general_add")}
					label=${this.localize.term("general_add")}
					compact
					@click=${q(this, b, H)}>
					<uui-icon name="icon-add"></uui-icon>
				</uui-button>
				<uui-button
					title=${this.localize.term("general_remove")}
					label=${this.localize.term("general_remove")}
					compact
					@click=${q(this, b, G)}>
					<uui-icon name="delete"></uui-icon>
				</uui-button>
			</uui-button-group>
		`;
  }
};
O = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
W = function() {
  this.filter = { ...this.filter, operator: void 0, constraintValue: void 0 };
};
F = function() {
  this.filter = {}, this.dispatchEvent(new Event("remove-filter"));
};
G = function() {
  this.unremovable ? q(this, b, F).call(this) : this.dispatchEvent(new Event("remove-filter"));
};
H = function() {
  this.dispatchEvent(new Event("add-filter"));
};
y.styles = [
  M`
			:host {
				display: flex;
				gap: 10px;
				border-bottom: 1px solid #f3f3f5;
				align-items: center;
				padding: 20px 0;
			}

			uui-combobox-list-option {
				padding: 8px 20px;
				margin: 0;
			}
		`
];
$([
  N({ type: Object, attribute: !1 })
], y.prototype, "filter", 2);
$([
  N({ type: Boolean })
], y.prototype, "unremovable", 2);
$([
  N({ type: Object, attribute: !1 })
], y.prototype, "settings", 2);
$([
  g()
], y.prototype, "currentPropertyType", 2);
y = $([
  U("umb-template-query-builder-filter")
], y);
var ge = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, V = (e) => {
  throw TypeError(e);
}, p = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ee(t, i) : t, m = e.length - 1, d; m >= 0; m--)
    (d = e[m]) && (a = (n ? d(t, i, a) : d(a)) || a);
  return n && a && ge(t, i, a), a;
}, P = (e, t, i) => t.has(e) || V("Cannot " + i), u = (e, t, i) => (P(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), K = (e, t, i, n) => (P(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (P(e, t, "access private method"), i), A, E, r, j, J, X, w, Y, S, Z, ee, te, ie, re, le, Q, R, T, C;
let c = class extends ne {
  constructor() {
    super(), h(this, r), this._queryRequest = {}, this._selectedRootContentName = this.localize.term("template_websiteRoot"), this._defaultSortDirection = "ascending", h(this, A), h(this, E), h(this, S, async () => {
      const { data: e } = await u(this, E).executeTemplateQuery(this._queryRequest);
      e && (this._templateQuery = { ...e }, this.value = { value: this._templateQuery?.queryExpression ?? "" });
    }), h(this, R, () => {
      this._filterContainer?.appendChild(l(this, r, te).call(this));
    }), h(this, T, () => {
      const e = Array.from(this._filterElements)?.filter((t) => t.isFilterValid);
      l(this, r, w).call(this, { filters: e?.map((t) => t.filter) ?? [] });
    }), h(this, C, (e) => {
      if (this._filterElements.length > 1) {
        const t = e.target;
        this._filterContainer?.removeChild(t), this._filterElements.length === 1 && (this._filterElements[0].unremovable = !0);
      }
      u(this, T).call(this);
    }), K(this, E, new ae(this)), K(this, A, new ce(this)), l(this, r, j).call(this);
  }
  render() {
    const e = I(this._queryBuilderSettings?.properties), t = he(this._queryRequest.sort);
    return s`
			<umb-body-layout headline=${this.localize.term("template_queryBuilder")}>
				<div id="main">
					<uui-box>
						<div class="row">
							<umb-localize key="template_iWant">I want</umb-localize>
							<umb-dropdown look="outline" id="content-type-dropdown" label="Choose content type">
								<span slot="label">
									${this._queryRequest?.documentTypeAlias ?? this.localize.term("template_allContent")}
								</span>
								<uui-combobox-list @change=${l(this, r, ie)} class="options-list">
									<uui-combobox-list-option value="">all content</uui-combobox-list-option>
									${this._queryBuilderSettings?.documentTypeAliases?.map(
      (i) => s`<uui-combobox-list-option .value=${i}>
												<umb-localize key="template_contentOfType" .args=${[i]}>
													content of type "${i}"
												</umb-localize>
											</uui-combobox-list-option>`
    )}
								</uui-combobox-list></umb-dropdown
							>
							<umb-localize key="template_from">from</umb-localize>
							<uui-button look="outline" @click=${l(this, r, Z)} label="Choose root document">
								${this._selectedRootContentName}
							</uui-button>
						</div>
						<div id="filter-container">
							<umb-template-query-builder-filter
								unremovable
								class="row"
								.settings=${this._queryBuilderSettings}
								@add-filter=${u(this, R)}
								@update-query=${u(this, T)}
								@remove-filter=${u(this, C)}></umb-template-query-builder-filter>
						</div>
						<div class="row">
							<umb-localize key="template_orderBy">order by</umb-localize>
							<umb-dropdown look="outline" id="sort-dropdown" label="Property alias">
								<span slot="label">${this._queryRequest.sort?.propertyAlias ?? ""}</span>
								<uui-combobox-list @change=${l(this, r, re)} class="options-list">
									${e?.map(
      (i) => s`<uui-combobox-list-option .value=${i.alias ?? ""}>
												<umb-localize key=${k(i.localizeKey)}>${i.alias}</umb-localize>
											</uui-combobox-list-option>`
    )}
								</uui-combobox-list>
							</umb-dropdown>

							${t?.propertyAlias ? s`<uui-button look="outline" @click=${l(this, r, le)}>
										<umb-localize key=${k(t.localizeKey)}>
											${t.direction ?? this._defaultSortDirection}
										</umb-localize>
									</uui-button>` : ""}
						</div>
						<div class="row query-results">
							<span id="results-count">
								<umb-localize
									key="template_publishedItemsReturned"
									.args=${[this._templateQuery?.resultCount ?? 0, this._templateQuery?.executionTime ?? 0]}
									>items returned, in</umb-localize
								>
							</span>
							${this._templateQuery?.sampleResults.map(
      (i) => s`<span><umb-icon name=${i.icon}></umb-icon>${i.name}</span>`
    ) ?? ""}
						</div>
						<umb-code-block style="max-height:500px;" language="C#" copy
							>${this._templateQuery?.queryExpression ?? ""}</umb-code-block
						>
					</uui-box>
				</div>

				<div slot="actions">
					<uui-button
						@click=${l(this, r, J)}
						look="secondary"
						label=${this.localize.term("buttons_confirmActionCancel")}></uui-button>
					<uui-button
						@click=${l(this, r, X)}
						look="primary"
						color="positive"
						label=${this.localize.term("buttons_submitChanges")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
A = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
j = function() {
  l(this, r, Y).call(this), u(this, S).call(this);
};
J = function() {
  this.modalContext?.reject();
};
X = function() {
  this.modalContext?.submit();
};
w = function(e) {
  this._queryRequest = { ...this._queryRequest, ...e }, u(this, S).call(this);
};
Y = async function() {
  const { data: e } = await u(this, E).requestTemplateQuerySettings();
  e && (this._queryBuilderSettings = e);
};
S = /* @__PURE__ */ new WeakMap();
Z = async function() {
  const e = await ue(this, pe, { data: { hideTreeRoot: !0 } }).catch(
    () => {
    }
  );
  if (!e) return;
  const t = e.selection[0];
  if (l(this, r, w).call(this, { rootDocument: t ? { unique: t } : null }), e.selection.length > 0 && e.selection[0] === null) {
    this._selectedRootContentName = "all pages";
    return;
  }
  if (e.selection.length > 0) {
    l(this, r, ee).call(this, e.selection);
    return;
  }
};
ee = async function(e) {
  const { data: t } = await u(this, A).requestItems(e);
  t && (this._selectedRootContentName = t[0].variants[0].name);
};
te = function() {
  const e = document.createElement("umb-template-query-builder-filter");
  return e.settings = this._queryBuilderSettings, e.classList.add("row"), e.addEventListener("add-filter", u(this, R)), e.addEventListener("remove-filter", u(this, C)), e.addEventListener("update-query", u(this, T)), e;
};
ie = function(e) {
  const t = e.target;
  l(this, r, w).call(this, { documentTypeAlias: t.value });
};
re = function(e) {
  const t = e.target;
  l(this, r, Q).call(this, t.value, this._queryRequest.sort?.direction ?? this._defaultSortDirection);
};
le = function() {
  const e = this._queryRequest.sort?.direction ? this._queryRequest.sort.direction === "ascending" ? "descending" : "ascending" : this._defaultSortDirection;
  l(this, r, Q).call(this, this._queryRequest.sort?.propertyAlias ?? "", e);
};
Q = function(e, t) {
  l(this, r, w).call(this, {
    sort: {
      propertyAlias: e,
      direction: t
    }
  });
};
R = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
c.styles = [
  M`
			:host {
				display: block;
				color: var(--uui-color-text);
				--umb-header-layout-height: 70px;
			}

			#main {
				box-sizing: border-box;
				height: calc(
					100dvh - var(--umb-header-layout-height) - var(--umb-footer-layout-height) - 2 * var(--uui-size-layout-1)
				);
			}

			uui-combobox-list-option {
				padding: 8px 20px;
				margin: 0;
			}

			.row {
				display: flex;
				gap: 10px;
				border-bottom: 1px solid #f3f3f5;
				align-items: center;
				padding: 20px 0;
			}

			#filter-container {
				flex-direction: column;
				justify-content: flex-start;
			}

			#results-count {
				font-weight: bold;
			}
			.query-results {
				flex-direction: column;
				align-items: flex-start;
				gap: 0;
			}
			.query-results span {
				display: flex;
				align-items: center;
				gap: var(--uui-size-1);
			}
		`
];
p([
  oe("#filter-container")
], c.prototype, "_filterContainer", 2);
p([
  se("umb-template-query-builder-filter")
], c.prototype, "_filterElements", 2);
p([
  g()
], c.prototype, "_templateQuery", 2);
p([
  g()
], c.prototype, "_queryRequest", 2);
p([
  g()
], c.prototype, "_queryBuilderSettings", 2);
p([
  g()
], c.prototype, "_selectedRootContentName", 2);
p([
  g()
], c.prototype, "_defaultSortDirection", 2);
c = p([
  U("umb-template-query-builder-modal")
], c);
export {
  c as default
};
//# sourceMappingURL=query-builder-modal.element-qTGID1LR.js.map
