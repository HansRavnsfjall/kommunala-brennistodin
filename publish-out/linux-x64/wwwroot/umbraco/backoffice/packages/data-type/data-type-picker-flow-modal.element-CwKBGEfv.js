import { n as J, b as V, f as Z, q as tt, g as et } from "./constants-DE93IEgK.js";
import { UmbDataTypeCollectionRepository as it } from "./data-type-collection.repository-8M3nG1By.js";
import { html as n, nothing as b, when as U, repeat as z, css as at, state as v, customElement as rt } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as ot } from "@umbraco-cms/backoffice/extension-registry";
import { umbFocus as st } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as nt } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import { UmbPaginationManager as lt, debounce as ut, fromCamelCase as O } from "@umbraco-cms/backoffice/utils";
import { UmbTextStyles as ct } from "@umbraco-cms/backoffice/style";
import { UMB_CONTENT_TYPE_WORKSPACE_CONTEXT as ht } from "@umbraco-cms/backoffice/content-type";
import { UMB_PROPERTY_TYPE_WORKSPACE_CONTEXT as dt } from "@umbraco-cms/backoffice/property-type";
var pt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, B = (t) => {
  throw TypeError(t);
}, f = (t, e, i, l) => {
  for (var o = l > 1 ? void 0 : l ? mt(e, i) : e, c = t.length - 1, g; c >= 0; c--)
    (g = t[c]) && (o = (l ? g(e, i, o) : g(o)) || o);
  return l && o && pt(e, i, o), o;
}, A = (t, e, i) => e.has(t) || B("Cannot " + i), s = (t, e, i) => (A(t, e, "read from private field"), e.get(t)), h = (t, e, i) => e.has(t) ? B("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), d = (t, e, i, l) => (A(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (A(t, e, "access private method"), i), y, T, C, u, m, E, _, a, $, N, S, W, P, L, Y, M, k, x, F, I, q, K, j, D, G, X, w, H;
let p = class extends nt {
  constructor() {
    super(), h(this, a), h(this, y), this._groupedDataTypes = [], this._groupedPropertyEditorUIs = [], this._currentPage = 1, this.pagination = new lt(), h(this, T), h(this, C), h(this, u, ""), h(this, m, []), h(this, E, {}), h(this, _, []), h(this, M, ut(() => {
      this._currentPage = 1, r(this, a, k).call(this);
    }, 250)), d(this, T, new it(this)), r(this, a, N).call(this);
  }
  set data(t) {
    super.data = t;
  }
  render() {
    return n`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectEditor")} class="uui-text">
				<uui-box> ${r(this, a, I).call(this)} ${r(this, a, F).call(this)} </uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
$ = function(t) {
  const e = tt.generateLocal({
    parentEntityType: et,
    parentUnique: null
  });
  s(this, C).open({ uiAlias: t }, e);
};
N = async function() {
  this.pagination.setCurrentPageNumber(1), this.pagination.setPageSize(100), d(this, y, Promise.all([
    this.observe(ot.byType("propertyEditorUi"), (t) => {
      d(this, _, t.filter((e) => !!e.meta.propertyEditorSchemaAlias).sort((e, i) => e.meta.label.localeCompare(i.meta.label))), d(this, E, Object.fromEntries(t.map((e) => [e.alias, e.meta.group]))), r(this, a, x).call(this);
    }).asPromise()
  ])), new R(this, J).addAdditionalPath(":uiAlias").onSetup((t) => ({
    data: {
      propertyEditorUiAlias: t.uiAlias
    },
    value: void 0
  })).onSubmit((t) => {
    t?.dataTypeId ? (r(this, a, P).call(this, t.dataTypeId), this._submitModal()) : t?.createNewWithPropertyEditorUiAlias && r(this, a, $).call(this, t.createNewWithPropertyEditorUiAlias);
  }).observeRouteBuilder((t) => {
    this._dataTypePickerModalRouteBuilder = t, this.requestUpdate("_dataTypePickerModalRouteBuilder");
  }), d(this, C, new R(this, V).addAdditionalPath(":uiAlias").onSetup(async (t) => {
    const e = this.consumeContext(
      ht,
      () => {
      }
    ).passContextAliasMatches(), i = this.consumeContext(
      dt,
      () => {
      }
    ).passContextAliasMatches(), [l, o] = await Promise.all([
      e.asPromise(),
      i.asPromise(),
      s(this, y)
    ]);
    if (!l || !o)
      throw new Error("Could not get content or property context");
    this.removeUmbController(e), this.removeUmbController(i);
    const c = s(this, _).find((Q) => Q.alias === t.uiAlias)?.name, g = `${l?.getName() ?? ""} - ${o.getName() ?? ""} - ${c}`;
    return {
      data: {
        entityType: Z,
        preset: { editorUiAlias: t.uiAlias, name: g }
      }
    };
  }).onSubmit((t) => {
    r(this, a, P).call(this, t?.unique), this._submitModal();
  }));
};
S = async function() {
  this.pagination.setCurrentPageNumber(this._currentPage);
  const { data: t } = await s(this, T).requestCollection({
    skip: this.pagination.getSkip(),
    take: this.pagination.getPageSize(),
    name: s(this, u)
  });
  this.pagination.setTotalItems(t?.total ?? 0), this.pagination.getCurrentPageNumber() > 1 ? d(this, m, [...s(this, m), ...t?.items ?? []]) : d(this, m, t?.items ?? []);
};
W = function(t) {
  t.unique && (r(this, a, P).call(this, t.unique), this._submitModal());
};
P = function(t) {
  this.value = { selection: t ? [t] : [] };
};
L = async function() {
  this._currentPage = this._currentPage + 1, r(this, a, k).call(this);
};
Y = function(t) {
  d(this, u, t.target.value.toLocaleLowerCase()), s(this, M).call(this);
};
M = /* @__PURE__ */ new WeakMap();
k = async function() {
  await r(this, a, S).call(this), r(this, a, x).call(this);
};
x = function() {
  if (s(this, u)) {
    const i = s(this, m).filter((o) => o.name?.toLowerCase().includes(s(this, u))).sort((o, c) => o.name.localeCompare(c.name)), l = Object.groupBy(
      i,
      (o) => O(s(this, E)[o.propertyEditorUiAlias] ?? "Uncategorized")
    );
    this._groupedDataTypes = Object.keys(l).sort((o, c) => o.localeCompare(c)).map((o) => ({ key: o, items: l[o] }));
  } else
    this._groupedDataTypes = [];
  const t = s(this, u) ? s(this, _).filter(
    (i) => i.name.toLowerCase().includes(s(this, u)) || i.alias.toLowerCase().includes(s(this, u))
  ) : s(this, _), e = Object.groupBy(
    t,
    (i) => O(i.meta.group ?? "Uncategorized")
  );
  this._groupedPropertyEditorUIs = Object.keys(e).sort((i, l) => i.localeCompare(l)).map((i) => ({ key: i, items: e[i] }));
};
F = function() {
  return s(this, u) ? r(this, a, q).call(this) : r(this, a, D).call(this);
};
I = function() {
  return n` <uui-input
			type="search"
			id="filter"
			@input=${r(this, a, Y)}
			placeholder=${this.localize.term("placeholders_filter")}
			label=${this.localize.term("placeholders_filter")}
			${st()}>
			<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
		</uui-input>`;
};
q = function() {
  return this._groupedDataTypes ? this._groupedPropertyEditorUIs ? this._groupedDataTypes.length === 0 && this._groupedPropertyEditorUIs.length === 0 ? n`<p>Nothing matches your search, try another search term.</p>` : n`
			${U(
    this._groupedDataTypes.length > 0,
    () => n`
					<h5 class="choice-type-headline">
						<umb-localize key="contentTypeEditor_searchResultSettings">Available configurations</umb-localize>
					</h5>
					${r(this, a, j).call(this)} ${r(this, a, K).call(this)}
				`
  )}
			${U(
    this._groupedPropertyEditorUIs.length > 0,
    () => n`
					<h5 class="choice-type-headline">
						<umb-localize key="contentTypeEditor_searchResultEditors">Create a new configuration</umb-localize>
					</h5>
					${r(this, a, D).call(this, !0)}
				`
  )}
		` : b : b;
};
K = function() {
  if (!(this._currentPage >= this.pagination.getTotalPages()))
    return n`<uui-button @click=${r(this, a, L)} look="secondary" label="Load more"></uui-button>`;
};
j = function() {
  return this._groupedDataTypes ? this._groupedDataTypes.map(
    (t) => n`
				<h5 class="category-name">${t.key}</h5>
				${r(this, a, H).call(this, t.items)}
			`
  ) : b;
};
D = function(t) {
  return this._groupedPropertyEditorUIs ? this._groupedPropertyEditorUIs.map(
    (e) => n`
				<h5 class="category-name">${e.key}</h5>
				${r(this, a, G).call(this, e.items, t)}
			`
  ) : b;
};
G = function(t, e) {
  return n`
			<ul id="item-grid">
				${this._dataTypePickerModalRouteBuilder ? z(
    t,
    (i) => i.alias,
    (i) => n`<li class="item">${r(this, a, X).call(this, i, e)}</li>`
  ) : ""}
			</ul>
		`;
};
X = function(t, e) {
  return e ? n`
				<uui-button
					label=${t.meta.label || t.name}
					@click=${() => r(this, a, $).call(this, t.alias)}>
					${r(this, a, w).call(this, t)}
				</uui-button>
			` : n`
				<uui-button
					label=${t.meta.label || t.name}
					href=${this._dataTypePickerModalRouteBuilder({ uiAlias: t.alias })}>
					${r(this, a, w).call(this, t)}
				</uui-button>
			`;
};
w = function(t) {
  return n`
			<div class="item-content">
				<umb-icon name=${t.meta.icon} class="icon"></umb-icon>
				${t.meta.label || t.name}
			</div>
		`;
};
H = function(t) {
  return n`
			<ul id="item-grid">
				${z(
    t,
    (e) => e.unique,
    (e) => n`
						<li class="item" ?selected=${this.value.selection.includes(e.unique)}>
							<uui-button .label=${e.name} type="button" @click=${() => r(this, a, W).call(this, e)}>
								<div class="item-content">
									<umb-icon name=${e.icon ?? "icon-circle-dotted"} class="icon"></umb-icon>
									${e.name}
								</div>
							</uui-button>
						</li>
					`
  )}
			</ul>
		`;
};
p.styles = [
  ct,
  at`
			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				height: 100%;
				padding-left: var(--uui-size-space-2);
				display: flex;
				color: var(--uui-color-border);
			}

			#item-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				margin: 0;
				padding: 0;
			}

			#item-grid:not(:last-child) {
				padding-bottom: var(--uui-size-space-5);
			}

			#item-grid .item {
				list-style: none;
				height: 100%;
				width: 100%;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);
				box-sizing: border-box;
				color: var(--uui-color-interactive);
			}

			#item-grid .item:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
				cursor: pointer;
			}

			#item-grid .item uui-button {
				--uui-button-padding-left-factor: 0;
				--uui-button-padding-right-factor: 0;
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0;
				width: 100%;
				height: 100%;
			}

			#item-grid .item .item-content {
				text-align: center;
				box-sizing: border-box;

				padding: var(--uui-size-space-2);

				display: grid;
				grid-template-rows: 40px 1fr;
				height: 100%;
				width: 100%;
				word-break: break-word;
			}

			#item-grid .item .icon {
				font-size: 2em;
				margin: auto;
			}

			.category-name {
				text-transform: capitalize;
			}

			.choice-type-headline {
				border-bottom: 1px solid var(--uui-color-divider);
			}
		`
];
f([
  v()
], p.prototype, "_groupedDataTypes", 2);
f([
  v()
], p.prototype, "_groupedPropertyEditorUIs", 2);
f([
  v()
], p.prototype, "_currentPage", 2);
f([
  v()
], p.prototype, "_dataTypePickerModalRouteBuilder", 2);
p = f([
  rt("umb-data-type-picker-flow-modal")
], p);
const At = p;
export {
  p as UmbDataTypePickerFlowModalElement,
  At as default
};
//# sourceMappingURL=data-type-picker-flow-modal.element-CwKBGEfv.js.map
