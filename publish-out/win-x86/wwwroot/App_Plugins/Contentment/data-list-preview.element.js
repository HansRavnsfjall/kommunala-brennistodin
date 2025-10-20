import { ContentmentDataListRepository as C } from "./data-list.repository.js";
import { html as r, when as _, repeat as $, css as D, state as m, property as O, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as U } from "@umbraco-cms/backoffice/property";
var M = Object.defineProperty, W = Object.getOwnPropertyDescriptor, T = (e) => {
  throw TypeError(e);
}, d = (e, t, a, h) => {
  for (var o = h > 1 ? void 0 : h ? W(t, a) : t, f = e.length - 1, v; f >= 0; f--)
    (v = e[f]) && (o = (h ? v(t, a, o) : v(o)) || o);
  return h && o && M(t, a, o), o;
}, y = (e, t, a) => t.has(e) || T("Cannot " + a), i = (e, t, a) => (y(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), S = (e, t, a, h) => (y(e, t, "write to private field"), t.set(e, a), a), b = (e, t, a) => (y(e, t, "access private method"), a), s, u, E, c, n, g, w, P;
let l = class extends k {
  constructor() {
    super(), p(this, n), p(this, s, []), p(this, u), p(this, E, new C(this)), p(this, c, [
      { alias: "listEditor", label: "Editor preview" },
      { alias: "dataSource", label: "Data source items" },
      { alias: "rawJson", label: "JSON" }
    ]), this._activeTab = "listEditor", this._state = "init", this.consumeContext(U, async (e) => {
      this.observe(
        await (e == null ? void 0 : e.propertyValueByAlias("dataSource")),
        (t) => {
          this._dataSource = t, b(this, n, g).call(this);
        },
        "_observeDataSource"
      ), this.observe(
        await (e == null ? void 0 : e.propertyValueByAlias("listEditor")),
        (t) => {
          this._listEditor = t, b(this, n, g).call(this);
        },
        "_observeListEditor"
      );
    });
  }
  set config(e) {
  }
  firstUpdated() {
    b(this, n, w).call(this, i(this, c)[0]);
  }
  render() {
    switch (this._state) {
      case "dataSourceConfigured":
        return r`<p>Please select and configure a list editor.</p>`;
      case "listEditorConfigured":
        return r`<p>Please select and configure a data source.</p>`;
      case "loading":
        return r`<uui-loader></uui-loader>`;
      case "loaded":
        return b(this, n, P).call(this);
      case "noItems":
        return r`<p>The data source returned no items to preview.</p>`;
      case "init":
      default:
        return r`<p>Please select and configure a data source and list editor.</p>`;
    }
  }
};
s = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
g = async function() {
  var e, t;
  this._state = "loading", this._dataSource && this._listEditor ? (S(this, u, await i(this, E).getEditor(this._dataSource[0], this._listEditor[0])), S(this, s, ((t = (e = i(this, u)) == null ? void 0 : e.config) == null ? void 0 : t.getValueByAlias("items")) ?? []), this._state = i(this, s).length > 0 ? "loaded" : "noItems", i(this, c)[1].label = "Data source items (" + i(this, s).length + ")") : this._dataSource ? this._state = "dataSourceConfigured" : this._listEditor ? this._state = "listEditorConfigured" : this._state = "init";
};
w = function(e) {
  i(this, c).forEach((t) => t.active = !1), this._activeTab = e.alias, e.active = !0;
};
P = function() {
  return r`
			${_(
    i(this, s).length > 30,
    () => r`
					<contentment-info-box type=${i(this, s).length >= 50 ? "danger" : "warning"}>
						<details>
							<summary>There are <strong>${i(this, s).length}</strong> items avaliable in this data source.</summary>
							<p>
								To avoid an unpleasant editor experience or lagging browser performance, please consider trying the
								<strong>Data Picker</strong> property editor, as it has been designed with improved performance in mind,
								with support for search querying and pagination.
							</p>
						</details>
					</contentment-info-box>
				`
  )}

			<uui-tab-group>
				${$(
    i(this, c),
    (e) => e.alias,
    (e) => r`<uui-tab label=${e.label} ?active=${e.active} @click=${() => b(this, n, w).call(this, e)}></uui-tab>`
  )}
			</uui-tab-group>

			${_(
    this._activeTab === "listEditor" && i(this, u),
    () => r`
					<contentment-property-editor-ui
						.config=${i(this, u).config}
						.propertyEditorUiAlias=${i(this, u).propertyEditorUiAlias}>
					</contentment-property-editor-ui>
				`
  )}
			${_(
    this._activeTab === "dataSource",
    () => r`
					<uui-table>
						<uui-table-head>
							<uui-table-head-cell></uui-table-head-cell>
							<uui-table-head-cell>Name</uui-table-head-cell>
							<uui-table-head-cell>Value</uui-table-head-cell>
							<uui-table-head-cell>Description</uui-table-head-cell>
							<uui-table-head-cell>Enabled</uui-table-head-cell>
						</uui-table-head>

						${$(
      i(this, s),
      (e) => e.value,
      (e) => r`
								<uui-table-row>
									<uui-table-cell><umb-icon .name=${e.icon}></umb-icon></uui-table-cell>
									<uui-table-cell>${e.name}</uui-table-cell>
									<uui-table-cell>${e.value}</uui-table-cell>
									<uui-table-cell>${e.description}</uui-table-cell>
									<uui-table-cell><uui-icon name=${e.disabled ? "remove" : "check"}></uui-icon></uui-table-cell>
								</uui-table-row>
							`
    )}
					</uui-table>
				`
  )}
			${_(
    this._activeTab === "rawJson",
    () => r` <umb-code-block language="JSON" copy>${JSON.stringify(i(this, s), null, 2)}</umb-code-block> `
  )}
		`;
};
l.styles = [
  D`
			contentment-info-box > details > summary {
				cursor: pointer;
				font-weight: bold;
			}

			uui-tab-group {
				margin-bottom: 1rem;
			}
		`
];
d([
  m()
], l.prototype, "_activeTab", 2);
d([
  m()
], l.prototype, "_dataSource", 2);
d([
  m()
], l.prototype, "_listEditor", 2);
d([
  m()
], l.prototype, "_state", 2);
d([
  O()
], l.prototype, "value", 2);
l = d([
  A("contentment-property-editor-ui-data-list-preview")
], l);
export {
  l as ContentmentPropertyEditorUIDataListPreviewElement,
  l as element
};
//# sourceMappingURL=data-list-preview.element.js.map
