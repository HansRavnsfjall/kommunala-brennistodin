import { c as W, a5 as D, G as q, N as L, a6 as N } from "./index.js";
import "@umbraco-cms/backoffice/resources";
import { E as V } from "./entry-render-helper.class.js";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { LitElement as G, when as Y, html as h, css as H, property as X, state as w, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as K } from "@umbraco-cms/backoffice/element-api";
import { UmbModalRouteRegistrationController as B } from "@umbraco-cms/backoffice/router";
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, f = (e, t, s, n) => {
  for (var o = n > 1 ? void 0 : n ? Q(t, s) : t, d = e.length - 1, C; d >= 0; d--)
    (C = e[d]) && (o = (n ? C(t, s, o) : C(o)) || o);
  return n && o && J(t, s, o), o;
}, g = (e, t, s) => t.has(e) || S("Cannot " + s), i = (e, t, s) => (g(e, t, "read from private field"), s ? s.call(e) : t.get(e)), u = (e, t, s) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), p = (e, t, s, n) => (g(e, t, "write to private field"), t.set(e, s), s), r = (e, t, s) => (g(e, t, "access private method"), s), _, l, v, b, m, y, a, I, M, O, P, T, R, $, k, F, x, A, E;
const Z = "form-entry-table-collection-view";
let c = class extends K(
  G
) {
  constructor() {
    super(...arguments), u(this, a), u(this, _), u(this, l), u(this, v, []), this._loading = !1, this._tableConfig = {
      allowSelection: !0
    }, this._tableColumns = [], this._tableItems = [], u(this, b, []), u(this, m, []), u(this, y);
  }
  get selectedEntryIds() {
    var e;
    return (e = i(this, l)) == null ? void 0 : e.selection.getSelection();
  }
  async connectedCallback() {
    super.connectedCallback(), this.consumeContext(W, (e) => {
      var t;
      p(this, _, e), this.observe((t = i(this, _)) == null ? void 0 : t.data, async (s) => {
        s && (p(this, m, i(this, _).getFieldsWithPrevalues()), await r(this, a, I).call(this, s.id), this.consumeContext(D, (n) => {
          p(this, l, n), r(this, a, M).call(this);
        }));
      });
    });
  }
  render() {
    return h` ${Y(
      this._loading,
      () => h`<uui-loader-bar></uui-loader-bar>`
    )}
      <umb-table
        .config=${this._tableConfig}
        .columns=${this._tableColumns}
        .items=${this._tableItems}
        @selected="${r(this, a, x)}"
        @deselected="${r(this, a, A)}"
      ></umb-table>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
I = async function(e) {
  for (let t = 0; t < i(this, m).length; t++) {
    const s = i(this, m)[t];
    if (s.prevalueSourceId !== q) {
      const n = new L(this), { data: o } = await n.requestPrevalues(
        s.prevalueSourceId,
        e,
        s.id
      );
      o && (s.prevalues = o.map((d) => ({
        value: d.value,
        caption: d.caption
      })));
    }
  }
};
M = function() {
  i(this, l) && (this.observe(
    i(this, l).loading,
    (e) => this._loading = e,
    "_observeLoading"
  ), this.observe(
    i(this, l).items,
    (e) => {
      r(this, a, P).call(this, e), e.length && !i(this, y) && r(this, a, O).call(this);
    },
    "formsFormEntriesCollectionItemsObserver"
  ));
};
O = function() {
  p(this, y, new B(
    this,
    N
  ).addAdditionalPath(":unique").onSetup(async (e) => {
    const t = i(this, v).find((s) => s.unique == e.unique);
    if (!t) throw new Error("Could not find entry");
    return {
      data: {
        schema: i(this, b),
        fieldPrevalues: i(this, m)
      },
      value: t
    };
  }).onSubmit((e) => {
    var t;
    e.updateCollection && ((t = i(this, l)) == null || t.requestCollection());
  }));
};
P = function(e) {
  if (e.length === 0) return;
  const t = e[0].schema;
  if (!t) throw new Error("Schema not provided.");
  p(this, b, t), p(this, v, e.slice(1)), r(this, a, T).call(this), r(this, a, R).call(this, t);
};
T = function() {
  const e = i(this, b).filter((t) => t.showOnListingScreen).map((t) => ({
    name: t.name,
    alias: t.id
  }));
  e.push({
    name: "",
    alias: "buttonActions"
  }), this._tableColumns = e;
};
R = function(e) {
  this._tableItems = i(this, v).map((t) => {
    const s = t.fields.map((n) => ({
      columnAlias: n.fieldId,
      value: r(this, a, $).call(this, n, e)
    }));
    return s.push({
      columnAlias: "buttonActions",
      value: h`<uui-button
          .label=${this.localize.term("formEntries_entryDetails")}
          look="secondary"
          color="default"
          @click=${(n) => r(this, a, F).call(this, n, t.unique)}
        ></uui-button>`
    }), {
      id: t.unique,
      icon: "icon-collection",
      data: s
    };
  });
};
$ = function(e, t) {
  const s = t.find((o) => o.id === e.fieldId);
  if (!s)
    return h`${e.value}`;
  const n = new V(this, i(this, m));
  switch (s.view) {
    case "member": {
      if (!e.value) return null;
      const o = e.value;
      return h`${o.name}`;
    }
    case "workflowSummary":
      return h`<span
          style="color: ${r(this, a, k).call(this, e.value)}"
          >${e.value}</span
        >`;
    default: {
      const o = n.getRenderValue(e, s.view);
      return h`${o}`;
    }
  }
};
k = function(e) {
  return e.split("/")[0] === e.split("/")[1] ? "green" : "red";
};
F = function(e, t) {
  e.stopImmediatePropagation(), history.pushState(
    {},
    "",
    `${location.href}/modal/forms-entrydetails-modal/${t}`
  );
};
x = function(e) {
  e.stopPropagation(), r(this, a, E).call(this, e.target);
};
A = function(e) {
  e.stopPropagation(), r(this, a, E).call(this, e.target);
};
E = function(e) {
  var s;
  const t = e.selection;
  (s = i(this, l)) == null || s.selection.setSelection(t);
};
c.styles = [
  U,
  H`
      :host {
        display: flex;
        flex-direction: column;
      }
      umb-table {
        padding: 0;
      }
      .workflow-summary-success {
        color: green;
      }
      .workflow-summary-failure {
        color: red;
      }
    `
];
f([
  X({ type: Array })
], c.prototype, "selectedEntryIds", 1);
f([
  w()
], c.prototype, "_loading", 2);
f([
  w()
], c.prototype, "_tableConfig", 2);
f([
  w()
], c.prototype, "_tableColumns", 2);
f([
  w()
], c.prototype, "_tableItems", 2);
c = f([
  z(Z)
], c);
const ae = c;
export {
  c as FormsFormEntryTableCollectionViewElement,
  ae as default
};
//# sourceMappingURL=form-entry-table-collection-view.element.js.map
