import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
import { LitElement as g, when as h, html as a, css as $, state as c, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { L as S, U as w, S as O } from "./index.js";
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, p = (s) => {
  throw TypeError(s);
}, l = (s, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? E(t, e) : t, u = s.length - 1, m; u >= 0; u--)
    (m = s[u]) && (r = (n ? m(t, e, r) : m(r)) || r);
  return n && r && x(t, e, r), r;
}, F = (s, t, e) => t.has(s) || p("Cannot " + e), z = (s, t, e) => t.has(s) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), _ = (s, t, e) => (F(s, t, "access private method"), e), o, v, f, y;
const C = "forms-dashboard";
let i = class extends b(g) {
  constructor() {
    super(...arguments), z(this, o), this._showOverlay = !1;
  }
  async connectedCallback() {
    super.connectedCallback();
    let s;
    [
      { data: this._status },
      { data: this._currentVersion },
      { data: s }
    ] = await Promise.all([
      d(this, S.getLicensingStatus()),
      d(this, w.getUpdatesVersion()),
      d(
        this,
        O.getSecurityUserCurrentFormSecurity({
          query: { includeFormFieldDetails: !1 }
        })
      )
    ]), this._userSecurity = s.userSecurity;
  }
  render() {
    var s, t, e;
    return a`
      ${h(
      this._showOverlay && ((s = this._userSecurity) == null ? void 0 : s.manageForms),
      () => a` <div class="umb-forms-install-overlay">
            <uui-button
              @click=${() => this._showOverlay = !1}
              .label=${this.localize.term("general_close")}
            ></uui-button>

            <div>
              <div class="succes"></div>
              <h2>
                <strong
                  >${this.localize.term(
        "formsDashboard_installOverlayTitle"
      )}</strong
                >
              </h2>
              <p>
                ${this.localize.term(
        "formsDashboard_installOverlayDescription"
      )}
              </p>

              <div class="divider"></div>

              <uui-button
                color="positive"
                look="default"
                @click=${_(this, o, v)}
                label=${this.localize.term("formsDashboard_createAForm")}
              ></uui-button>
            </div>
          </div>`
    )}

      <forms-licensing .status=${this._status}></forms-licensing>

      ${h(
      this._currentVersion,
      () => a`<small
            >${this.localize.term(
        "formsDashboard_currentVersion",
        this._currentVersion
      )}</small
          >`
    )}

      <form-grid .config=${this._userSecurity}></form-grid>

      ${h(
      !((t = this._status) != null && t.isTrial) && ((e = this._status) == null ? void 0 : e.isValid) && !_(this, o, f).call(this),
      () => a`<small
              >${this.localize.term("formsDashboard_licensedDomains")}:</small
            >
            <small>${_(this, o, y).call(this)}</small>`
    )}
    `;
  }
};
o = /* @__PURE__ */ new WeakSet();
v = function() {
};
f = function() {
  var s;
  return ((s = this._status) == null ? void 0 : s.licenseLimitations.includes(
    "*not* associated with any ips or domains"
  )) ?? !1;
};
y = function() {
  var s;
  return (s = this._status) != null && s.validDomains ? a`<ul>
      ${this._status.validDomains.map((t) => a`<li>${t}</li>`)}
    </ul>` : null;
};
i.styles = [
  $`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      @media (min-width: 1024px) {
        uui-box {
          display: block;
          max-width: calc(100% - 300px);
        }
      }

      form-grid {
        display: block;
        margin-bottom: 20px;
      }
    `
];
l([
  c()
], i.prototype, "_showOverlay", 2);
l([
  c()
], i.prototype, "_userSecurity", 2);
l([
  c()
], i.prototype, "_currentVersion", 2);
l([
  c()
], i.prototype, "_status", 2);
i = l([
  D(C)
], i);
const P = i;
export {
  i as FormsDashboardElement,
  P as default
};
//# sourceMappingURL=forms-dashboard.element.js.map
