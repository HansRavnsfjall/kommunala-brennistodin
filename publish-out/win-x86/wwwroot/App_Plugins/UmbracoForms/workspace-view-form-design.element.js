import { c as I, d as U, B as D, H as q, I as H } from "./index.js";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { LitElement as V, when as y, html as f, css as B, state as P, queryAsync as j, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as J } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/current-user";
var X = Object.defineProperty, K = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, b = (e, t, i, o) => {
  for (var s = o > 1 ? void 0 : o ? K(t, i) : t, p = e.length - 1, n; p >= 0; p--)
    (n = e[p]) && (s = (o ? n(t, i, s) : n(s)) || s);
  return o && s && X(t, i, s), s;
}, T = (e, t, i) => t.has(e) || E("Cannot " + i), r = (e, t, i) => (T(e, t, "read from private field"), i ? i.call(e) : t.get(e)), c = (e, t, i) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), m = (e, t, i, o) => (T(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (T(e, t, "access private method"), i), h, $, _, M, d, S, a, A, k, O, v, w, g, C, F, W, z, x, R;
const L = "workspace-view-form-design";
let u = class extends J(V) {
  constructor() {
    super(), c(this, a), this._sortModeActive = !1, c(this, h), c(this, $), c(this, _), c(this, M), c(this, d, []), c(this, S, []), c(this, v, -1), c(this, w, !1), c(this, g, -1), m(this, M, Promise.all([
      this.consumeContext(I, (e) => {
        m(this, h, e);
      }).asPromise(),
      this.consumeContext(U, (e) => {
        m(this, $, e);
      }).asPromise()
    ])), l(this, a, A).call(this);
  }
  render() {
    var e, t;
    return f`
      <div id="formHeader">
        <div class="actions">
          ${y(
      !this._sortModeActive,
      () => f` <uui-button-group>
                <uui-button
                  look="placeholder"
                  label=${this.localize.term("formEdit_addToTop")}
                  @click=${() => l(this, a, k).call(this, !0)}
                  >${this.localize.term("formEdit_addToTop")}</uui-button
                >
                <uui-button
                  look="placeholder"
                  label=${this.localize.term("formEdit_addToBottom")}
                  @click=${() => l(this, a, k).call(this, !1)}
                  >${this.localize.term("formEdit_addToBottom")}</uui-button
                >
              </uui-button-group>`
    )}

          <uui-button
            @click=${l(this, a, O)}
            compact
            look="outline"
            label=${this.localize.term(
      this._sortModeActive ? "general_reorderDone" : "general_reorder"
    )}
            ><uui-icon name="icon-navigation"></uui-icon>${this.localize.term(
      this._sortModeActive ? "general_reorderDone" : "general_reorder"
    )}
          </uui-button>

          ${y(
      this._form && this._form.pages.length > 1,
      () => f`
              <uui-select
                label=${this.localize.term("formEdit_jumpToPage")}
                name="jumpToPage"
                @change=${l(this, a, z)}
                .options=${l(this, a, W).call(this)}
              ></uui-select>
            `
    )}
        </div>
      </div>

      <div id="formPages">
        ${(e = this._form) == null ? void 0 : e.pages.map(
      (i, o) => f`<forms-form-page
              class="sort-mode-${this._sortModeActive ? "active" : "inactive"}"
              data-page-index="${o}"
              .page=${i}
              .index=${o}
              .allFields=${r(this, d)}
              .allFieldTypes=${r(this, S)}
              ?sort-mode-active=${this._sortModeActive}
            >
            </forms-form-page>`
    )}
      </div>

      <div id="formFooter">
        ${y(
      !this._sortModeActive,
      () => f` <uui-button
              @click=${() => l(this, a, k).call(this, !1)}
              look="outline"
              label=${this.localize.term("formEdit_addPage")}
            ></uui-button>`
    )}
      </div>

      ${y(
      !this._sortModeActive && ((t = this._userSecurity) == null ? void 0 : t.userSecurity.manageWorkflows),
      // TODO: <-- ths doesn't work when we have group security enabled.
      () => {
        var i, o, s, p, n;
        return f` <forms-form-workflow-summary
            .workflows=${(i = this._form) == null ? void 0 : i.formWorkflows}
            .submitMessageDetail=${{
          messageOnSubmit: (o = this._form) == null ? void 0 : o.messageOnSubmit,
          messageOnSubmitIsHtml: ((s = this._form) == null ? void 0 : s.messageOnSubmitIsHtml) ?? !1,
          goToPageOnSubmit: (p = this._form) == null ? void 0 : p.goToPageOnSubmit
        }}
            ?manualApproval=${(n = this._form) == null ? void 0 : n.manualApproval}
            .allFields=${r(this, d)}
          ></forms-form-workflow-summary>`;
      }
    )}
    `;
  }
};
h = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
A = async function() {
  var i;
  if (await r(this, M), !r(this, h)) return;
  m(this, _, new D(
    this,
    r(this, h)
  )), this.provideContext(q, r(this, _));
  const e = new H(this), { data: t } = await e.requestCollection();
  m(this, S, (t == null ? void 0 : t.items) || []), this.observe(r(this, h).data, (o) => {
    var s;
    o && (this._form = o, r(this, h) && m(this, d, (s = r(this, h)) == null ? void 0 : s.getAllFields()), l(this, a, C).call(this));
  }), this.observe((i = r(this, $)) == null ? void 0 : i.userSecurity, (o) => {
    this._userSecurity = o;
  });
};
k = function(e) {
  var t;
  (t = r(this, _)) == null || t.addFormPage(e);
};
O = function() {
  this._sortModeActive = !this._sortModeActive, l(this, a, F).call(this);
};
v = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
C = async function() {
  if (!this._form || (await this._pagesPromise, r(this, g) > 0 && this._form.pages.length === r(this, g)))
    return;
  const e = {
    root: null,
    threshold: 0.1
  }, t = (s) => {
    r(this, w) || s.filter((n) => n.isIntersecting).map((n) => n.target.getAttribute("data-page-index")).forEach((n) => {
      n && m(this, v, n);
    });
  }, i = new IntersectionObserver(t, e), o = this.renderRoot.querySelectorAll("forms-form-page");
  m(this, g, o.length), o.forEach((s) => {
    i.observe(s);
  });
};
F = function() {
  if (r(this, v) >= 0) {
    const e = this.shadowRoot.querySelector(
      "forms-form-page[data-page-index='" + r(this, v) + "']"
    );
    e && l(this, a, x).call(this, e);
  }
};
W = function() {
  var t;
  const e = ((t = this._form) == null ? void 0 : t.pages.map((i, o) => ({
    name: (o + 1).toString(),
    value: o.toString(),
    selected: !1
  }))) ?? [];
  return e.unshift({
    name: this.localize.term("formEdit_jumpToPage"),
    value: "",
    selected: !0
  }), e;
};
z = function(e) {
  const t = e.target, i = t.value.toString();
  if (i !== "") {
    const o = this.shadowRoot.querySelector(
      "forms-form-page[data-page-index='" + i + "']"
    );
    o && l(this, a, x).call(this, o);
  }
  l(this, a, R).call(this, t);
};
x = function(e) {
  m(this, w, !0), e.scrollIntoView(), m(this, w, !1);
};
R = function(e) {
  for (let t = 0; t < e.options.length; t++) {
    const i = e.options[t];
    i.selected = !1;
  }
  e.options[0].selected = !0, this.requestUpdate();
};
u.styles = [
  N,
  B`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      #formHeader {
        position: sticky;
        top: 0;
        border: solid 1px #ccc;
        padding: 10px;
        background-color: #fff;
        z-index: 9;
        margin-bottom: var(--uui-size-5);
        display: flex;
        justify-content: flex-end;
        column-gap: var(--uui-size-3);
      }

      #formHeader .actions > * {
        vertical-align: middle;
      }

      forms-form-page.sort-mode-inactive {
        scroll-margin-top: 80px;
      }

      forms-form-page.sort-mode-active {
        scroll-margin-top: 30px;
      }

      #formFooter {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
      }

      uui-button uui-icon {
        margin-right: var(--uui-size-2);
      }
    `
];
b([
  P()
], u.prototype, "_form", 2);
b([
  P()
], u.prototype, "_userSecurity", 2);
b([
  P()
], u.prototype, "_sortModeActive", 2);
b([
  j("forms-form-page")
], u.prototype, "_pagesPromise", 2);
u = b([
  G(L)
], u);
const re = u;
export {
  u as UmbWorkspaceViewFormDesignElement,
  re as default
};
//# sourceMappingURL=workspace-view-form-design.element.js.map
