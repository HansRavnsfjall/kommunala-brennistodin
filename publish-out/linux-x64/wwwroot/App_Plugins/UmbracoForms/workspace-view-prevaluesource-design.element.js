import { F as k } from "./prevaluesource-workspace.context-token.js";
import { P as D } from "./index.js";
import { LitElement as I, when as S, repeat as L, html as v, css as W, state as h, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as F } from "@umbraco-cms/backoffice/element-api";
var A = Object.defineProperty, N = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, c = (t, e, i, u) => {
  for (var p = u > 1 ? void 0 : u ? N(e, i) : e, y = t.length - 1, P; y >= 0; y--)
    (P = t[y]) && (p = (u ? P(e, i, p) : P(p)) || p);
  return u && p && A(e, i, p), p;
}, b = (t, e, i) => e.has(t) || C("Cannot " + i), a = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), _ = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), m = (t, e, i, u) => (b(t, e, "write to private field"), e.set(t, i), i), l = (t, e, i) => (b(t, e, "access private method"), i), d, r, o, g, s, O, $, w, V, E, U, f, x, z, B, T;
const R = "workspace-view-prevaluesource-design";
let n = class extends F(I) {
  constructor() {
    super(), _(this, s), _(this, d, []), this._settingValues = [], this._settingsConfig = [], this._settingsConfigLoaded = !1, this._cachePrevaluesOption = "", this._cachePrevaluesByTimeValue = 0, this._cachePrevaluesByTimeUnit = "seconds", _(this, r), _(this, o), _(this, g), m(this, g, Promise.all([
      this.consumeContext(
        k,
        (t) => {
          m(this, r, t), l(this, s, O).call(this);
        }
      ).asPromise()
    ]));
  }
  async connectedCallback() {
    var e, i;
    if (super.connectedCallback(), await a(this, g), !a(this, r)) return;
    this._prevalueSource = a(this, r).getData();
    const t = (e = this._prevalueSource) == null ? void 0 : e.fieldPreValueSourceTypeId;
    t && (this._prevalueSourceType = await ((i = a(this, r)) == null ? void 0 : i.loadPrevalueSourceType(
      t
    )), this._prevalueSourceType && (m(this, o, new D(
      this,
      this._prevalueSourceType,
      "formProviderPrevalueSources"
    )), await a(this, o).loadSettingValueConverterApis(), await l(this, s, $).call(this)));
  }
  render() {
    var t;
    return v`
      <uui-box
        headline=${this.localize.term(
      "formPrevalueSources_designModalHeadline"
    )}
      >
        <umb-property-layout
          alias="type"
          .label=${this.localize.term("general_type")}
        >
          <div slot="editor">${(t = this._prevalueSourceType) == null ? void 0 : t.name}</div>
        </umb-property-layout>

        ${S(
      a(this, o) && this._prevalueSourceType && this._settingsConfigLoaded,
      () => v`<umb-property-dataset
              .value=${this._settingValues}
              @change=${l(this, s, w)}
            >
              ${this._prevalueSourceType.settings.map(
        (e) => {
          var i, u;
          return v`
                  <umb-property
                    ?inert=${e.isReadOnly}
                    .label=${(i = a(this, o)) == null ? void 0 : i.getLocalizedSettingDetail(
            e,
            "Label",
            e.name
          )}
                    .description=${(u = a(this, o)) == null ? void 0 : u.getLocalizedSettingDetail(
            e,
            "Description",
            e.description
          )}
                    alias=${e.alias}
                    .config=${a(this, o).getPropertyConfigForSetting(
            this._settingsConfig,
            e
          )}
                    .appearance=${a(this, o).getPropertyAppearanceForSetting(
            e.view
          )}
                    property-editor-ui-alias=${e.view}
                  >
                  </umb-property>
                `;
        }
      )}
            </umb-property-dataset> `
    )}

        <umb-property-layout
          alias="_cachePrevalues"
          .label=${this.localize.term("formPrevalueSources_cacheOptionsLabel")}
          .description=${this.localize.term(
      "formPrevalueSources_cacheOptionsDescription"
    )}
        >
          <div slot="editor">
            <uui-radio-group
              .value=${this._cachePrevaluesOption}
              @change=${l(this, s, V)}
            >
              ${L(
      a(this, d),
      (e) => e,
      (e) => v`<uui-radio
                    value=${e.value}
                    label=${e.label}
                  ></uui-radio>`
    )}
            </uui-radio-group>
            ${S(
      this._cachePrevaluesOption === "time",
      () => v`
                <div>
                  <label
                    >${this.localize.term(
        "formPrevalueSources_cacheOptionsEnterTime"
      )}</label
                  >
                  <uui-input
                    type="number"
                    value=${this._cachePrevaluesByTimeValue}
                    min="1"
                    max="59"
                    label="Time value"
                    @change=${l(this, s, z)}
                  ></uui-input>
                  <uui-select
                    label="Time unit"
                    @change=${l(this, s, B)}
                    .options=${["Seconds", "Minutes", "Hours"].map((e) => ({
        name: this.localize.term(
          `formPrevalueSources_cacheOptions${e}`
        ),
        value: e.toLowerCase(),
        selected: this._cachePrevaluesByTimeUnit === e.toLowerCase()
      }))}
                  ></uui-select>
                </div>
              `
    )}
          </div>
        </umb-property-layout>
      </uui-box>

      ${S(
      a(this, r) && a(this, r).getPrevalues().length > 0,
      () => {
        var e;
        return v` <uui-box
            headline=${this.localize.term("formPrevalueSources_listHeadline")}
          >
            <uui-table>
              <uui-table-head>
                <uui-table-head-cell
                  >${this.localize.term("general_value")}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term(
          "formPrevalues_caption"
        )}</uui-table-head-cell
                >
              </uui-table-head>
              ${(e = a(this, r)) == null ? void 0 : e.getPrevalues().map(
          (i) => v` <uui-table-row>
                    <uui-table-cell>${i.value}</uui-table-cell>
                    <uui-table-cell>${i.caption}</uui-table-cell>
                  </uui-table-row>`
        )}
            </uui-table>
          </uui-box>`;
      }
    )}
    `;
  }
};
d = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
O = function() {
  a(this, r) && this.observe(a(this, r).prevalues, () => {
    this.requestUpdate();
  });
};
$ = async function() {
  var t;
  if (!(!a(this, r) || !this._prevalueSource)) {
    if (l(this, s, E).call(this), this._settingValues = await a(this, o).getSettingValues(
      this._prevalueSource.settings
    ), this._settingsConfig = await a(this, o).getSettingsConfig(
      this._settingValues,
      this._prevalueSourceType.settings
    ), this._settingsConfigLoaded = !0, (t = a(this, r)) != null && t.getIsNew() && this._prevalueSourceType) {
      const e = structuredClone(this._prevalueSourceType.settings);
      for (let i = 0; i < this._prevalueSourceType.settings.length; i++) {
        const u = this._prevalueSourceType.settings[i];
        u.defaultValue && (e[u.alias] = u.defaultValue);
      }
      this._settingValues = e;
    }
    this._cachePrevaluesOption === "" && l(this, s, U).call(this);
  }
};
w = async function(t) {
  const e = t.target.value;
  this._settingValues = e;
  const i = await a(this, o).getUpdatedSettingsForPersistence(
    e
  );
  l(this, s, T).call(this, "settings", i);
};
V = function(t) {
  t.stopPropagation(), t.target.tagName === "UUI-RADIO" && (this._cachePrevaluesOption = t.target.value, l(this, s, f).call(this));
};
E = function() {
  m(this, d, [
    {
      label: this.localize.term("formPrevalueSources_cacheOptionsNone"),
      value: "none"
    },
    {
      label: this.localize.term("formPrevalueSources_cacheOptionsTime"),
      value: "time"
    },
    {
      label: this.localize.term("formPrevalueSources_cacheOptionsNoExpiry"),
      value: "noExpiry"
    }
  ]);
};
U = function() {
  var e;
  const t = (e = this._prevalueSource) == null ? void 0 : e.cachePrevaluesFor.toString();
  if (t)
    if (t[0] === "-")
      this._cachePrevaluesOption = "noExpiry";
    else if (t === "00:00:00")
      this._cachePrevaluesOption = "none";
    else {
      this._cachePrevaluesOption = "time";
      const i = t.split(":");
      parseInt(i[0]) > 0 ? (this._cachePrevaluesByTimeValue = parseInt(i[0]), this._cachePrevaluesByTimeUnit = "hours") : parseInt(i[1]) > 0 ? (this._cachePrevaluesByTimeValue = parseInt(i[1]), this._cachePrevaluesByTimeUnit = "minutes") : (this._cachePrevaluesByTimeValue = parseInt(i[2]), this._cachePrevaluesByTimeUnit = "seconds");
    }
  else
    this._cachePrevaluesOption = "noExpiry";
};
f = function() {
  let t = "";
  switch (this._cachePrevaluesOption) {
    case "none":
      t = "00:00:00.0000000";
      break;
    case "time":
      t = l(this, s, x).call(this);
      break;
    case "noExpiry":
      t = "-00:00:00.0010000";
      break;
  }
  l(this, s, T).call(this, "cachePrevaluesFor", t);
};
x = function() {
  const t = this._cachePrevaluesByTimeValue, e = this._cachePrevaluesByTimeUnit;
  return new Date(
    t * 1e3 * (e === "minutes" || e === "hours" ? 60 : 1) * (e === "hours" ? 60 : 1)
  ).toISOString().slice(11, 19);
};
z = function(t) {
  const e = t.target.value;
  this._cachePrevaluesByTimeValue = parseInt(e), l(this, s, f).call(this);
};
B = function(t) {
  const e = t.target.value.toString();
  this._cachePrevaluesByTimeUnit = e, l(this, s, f).call(this);
};
T = function(t, e) {
  var i;
  (i = a(this, r)) == null || i.setPrevalueSourceProperty(t, e), this.dispatchEvent(new CustomEvent("valueChange"));
};
n.styles = [
  W`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      uui-box + uui-box {
        margin-top: var(--uui-size-layout-1);
      }

      [inert] {
        opacity: 0.5;
      }
    `
];
c([
  h()
], n.prototype, "_prevalueSource", 2);
c([
  h()
], n.prototype, "_prevalueSourceType", 2);
c([
  h()
], n.prototype, "_settingValues", 2);
c([
  h()
], n.prototype, "_settingsConfig", 2);
c([
  h()
], n.prototype, "_settingsConfigLoaded", 2);
c([
  h()
], n.prototype, "_cachePrevaluesOption", 2);
c([
  h()
], n.prototype, "_cachePrevaluesByTimeValue", 2);
c([
  h()
], n.prototype, "_cachePrevaluesByTimeUnit", 2);
n = c([
  M(R)
], n);
const X = n;
export {
  n as UmbWorkspaceViewPrevalueSourceDesignElement,
  X as default
};
//# sourceMappingURL=workspace-view-prevaluesource-design.element.js.map
