import { j as D, P } from "./index.js";
import { UmbTextStyles as V } from "@umbraco-cms/backoffice/style";
import { LitElement as $, when as E, html as y, css as b, state as u, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as O } from "@umbraco-cms/backoffice/element-api";
var W = Object.defineProperty, k = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, c = (e, t, a, r) => {
  for (var p = r > 1 ? void 0 : r ? k(t, a) : t, _ = e.length - 1, g; _ >= 0; _--)
    (g = e[_]) && (p = (r ? g(t, a, p) : g(p)) || p);
  return r && p && W(t, a, p), p;
}, m = (e, t, a) => t.has(e) || v("Cannot " + a), i = (e, t, a) => (m(e, t, "read from private field"), a ? a.call(e) : t.get(e)), h = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), f = (e, t, a, r) => (m(e, t, "write to private field"), t.set(e, a), a), S = (e, t, a) => (m(e, t, "access private method"), a), o, s, d, l, w, C, T;
const L = "workspace-view-datasource-design";
let n = class extends O($) {
  constructor() {
    super(), h(this, l), this._settingValues = [], this._settingsConfig = [], this._settingsConfigLoaded = !1, h(this, o), h(this, s), h(this, d), f(this, d, Promise.all([
      this.consumeContext(D, (e) => {
        f(this, o, e);
      }).asPromise()
    ]));
  }
  async connectedCallback() {
    var t, a;
    if (super.connectedCallback(), await i(this, d), !i(this, o)) return;
    this._dataSource = i(this, o).getData();
    const e = (t = this._dataSource) == null ? void 0 : t.formDataSourceTypeId;
    e && (this._dataSourceType = await ((a = i(this, o)) == null ? void 0 : a.loadDataSourceType(e)), this._dataSourceType && (f(this, s, new P(
      this,
      this._dataSourceType,
      "formProviderDataSources"
    )), await i(this, s).loadSettingValueConverterApis(), await S(this, l, w).call(this)));
  }
  render() {
    var e;
    return y` <uui-box>
      <umb-property-layout
        alias="type"
        .label=${this.localize.term("general_type")}
      >
        <div slot="editor">${(e = this._dataSourceType) == null ? void 0 : e.name}</div>
      </umb-property-layout>

      ${E(
      i(this, s) && this._dataSourceType && this._settingsConfigLoaded,
      () => y`<umb-property-dataset
            .value=${this._settingValues}
            @change=${S(this, l, C)}
          >
            ${this._dataSourceType.settings.map(
        (t) => y`
                <umb-property
                  ?inert=${t.isReadOnly}
                  .label=${i(this, s).getLocalizedSettingDetail(
          t,
          "Label",
          t.name
        )}
                  .description=${i(this, s).getLocalizedSettingDetail(
          t,
          "Description",
          t.description
        )}
                  alias=${t.alias}
                  .config=${i(this, s).getPropertyConfigForSetting(
          this._settingsConfig,
          t
        )}
                  .appearance=${i(this, s).getPropertyAppearanceForSetting(
          t.view
        )}
                  property-editor-ui-alias=${t.view}
                >
                </umb-property>
              `
      )}
          </umb-property-dataset>`
    )}
    </uui-box>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
w = async function() {
  var e;
  if (!(!i(this, o) || !this._dataSource) && (this._settingValues = await i(this, s).getSettingValues(
    this._dataSource.settings
  ), this._settingsConfig = await i(this, s).getSettingsConfig(
    this._settingValues,
    this._dataSourceType.settings
  ), this._settingsConfigLoaded = !0, (e = i(this, o)) != null && e.getIsNew() && this._dataSourceType)) {
    const t = structuredClone(this._dataSourceType.settings);
    for (let a = 0; a < this._dataSourceType.settings.length; a++) {
      const r = this._dataSourceType.settings[a];
      r.defaultValue && (t[r.alias] = r.defaultValue);
    }
    this._settingValues = t;
  }
};
C = async function(e) {
  const t = e.target.value;
  this._settingValues = t;
  const a = await i(this, s).getUpdatedSettingsForPersistence(
    t
  );
  S(this, l, T).call(this, "settings", a);
};
T = function(e, t) {
  var a;
  (a = i(this, o)) == null || a.setDataSourceProperty(e, t), this.dispatchEvent(new CustomEvent("valueChange"));
};
n.styles = [
  V,
  b`
      :host {
        display: flex;
        flex-direction: column;
        margin: var(--uui-size-layout-1);
      }

      [inert] {
        opacity: 0.5;
      }
    `
];
c([
  u()
], n.prototype, "_dataSource", 2);
c([
  u()
], n.prototype, "_dataSourceType", 2);
c([
  u()
], n.prototype, "_settingValues", 2);
c([
  u()
], n.prototype, "_settingsConfig", 2);
c([
  u()
], n.prototype, "_settingsConfigLoaded", 2);
n = c([
  x(L)
], n);
const F = n;
export {
  n as UmbWorkspaceViewDataSourceDesignElement,
  F as default
};
//# sourceMappingURL=workspace-view-datasource-design.element.js.map
