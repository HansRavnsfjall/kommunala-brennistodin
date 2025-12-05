import { html as h, ifDefined as $, repeat as at, css as B, state as q, property as w, customElement as L, nothing as ct } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as ut } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as m } from "@umbraco-cms/backoffice/event";
import { U as ht, a as lt } from "./constants-Bqx1lzwj.js";
import { UmbModalToken as z, UMB_MODAL_MANAGER_CONTEXT as dt } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as K } from "@umbraco-cms/backoffice/extension-registry";
import { UmbFormControlMixin as pt } from "@umbraco-cms/backoffice/validation";
import { UmbId as mt } from "@umbraco-cms/backoffice/id";
import { UmbRepositoryItemsManager as x } from "@umbraco-cms/backoffice/repository";
import { UmbSorterController as _t } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS as ft } from "@umbraco-cms/backoffice/document";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as yt } from "@umbraco-cms/backoffice/document-type";
const vt = new z(
  ht,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), bt = new z(
  lt,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
var Mt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, U = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? gt(e, i) : e, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (n = (a ? d(e, i, n) : d(n)) || n);
  return a && n && Mt(e, i, n), n;
}, k = (t, e, i) => e.has(t) || G("Cannot " + i), s = (t, e, i) => (k(t, e, "read from private field"), i ? i.call(t) : e.get(t)), u = (t, e, i) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), g = (t, e, i, a) => (k(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (k(t, e, "access private method"), i), O, S, c, R, C, b, y, D, o, P, Y, A, M, F, V, X, H, J, Z, j, tt, et;
const Et = "umb-input-content-picker-document-root";
let v = class extends pt(Q) {
  constructor() {
    super(), u(this, o), u(this, O, new x(
      this,
      ft
    )), u(this, S, new x(
      this,
      yt
    )), this._originManifests = [], this._queryStepManifests = [], u(this, c), u(this, R, {}), u(this, C, {}), u(this, b), u(this, y), u(this, D, new _t(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t.unique,
      identifier: "Umb.SorterIdentifier.InputDynamicRoot",
      itemSelector: "uui-ref-node",
      containerSelector: "#query-steps",
      onChange: ({ model: t }) => {
        if (this.data?.querySteps) {
          const e = t;
          r(this, o, M).call(this, e), this.dispatchEvent(new m());
        }
      }
    })), this.consumeContext(dt, (t) => {
      g(this, b, t);
    }), this.observe(
      K.byType("dynamicRootOrigin"),
      (t) => {
        this._originManifests = t;
      }
    ), this.observe(
      K.byType("dynamicRootQueryStep"),
      (t) => {
        this._queryStepManifests = t;
      }
    ), this.observe(s(this, O).items, (t) => {
      t?.length && (t.forEach((e) => {
        s(this, R)[e.unique] = e.name;
      }), this.requestUpdate());
    }), this.observe(s(this, S).items, (t) => {
      t?.length && (t.forEach((e) => {
        s(this, C)[e.unique] = e.name;
      }), this.requestUpdate());
    });
  }
  getFormElement() {
  }
  connectedCallback() {
    super.connectedCallback(), r(this, o, A).call(this, this.data), r(this, o, M).call(this, this.data?.querySteps);
  }
  render() {
    return h`
			${r(this, o, H).call(this)}
			<uui-ref-list>${r(this, o, J).call(this)}</uui-ref-list>
			<uui-ref-list id="query-steps">${r(this, o, j).call(this)}</uui-ref-list>
			${r(this, o, et).call(this)} ${r(this, o, Z).call(this)}
		`;
  }
};
O = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
P = function() {
  g(this, y, s(this, b)?.open(this, vt, {
    data: { items: this._originManifests }
  })), s(this, y)?.onSubmit().then((t) => {
    const e = { ...this.data };
    e.originKey = void 0, this.data = { ...e, ...t }, r(this, o, A).call(this, this.data), this.dispatchEvent(new m());
  });
};
Y = function() {
  g(this, y, s(this, b)?.open(this, bt, {
    data: { items: this._queryStepManifests }
  })), s(this, y)?.onSubmit().then((t) => {
    if (this.data) {
      const e = [...this.data.querySteps ?? [], t];
      r(this, o, M).call(this, e), this.dispatchEvent(new m());
    }
  });
};
A = function(t) {
  if (!t) return;
  const e = this._originManifests.find((i) => i.meta.originAlias === t.originAlias)?.meta;
  t.originKey && s(this, O).setUniques([t.originKey]), g(this, c, {
    label: e?.label ?? t.originAlias,
    icon: e?.icon ?? "icon-wand",
    description: t.originKey
  });
};
M = function(t) {
  this.data && (t && (t = t.map((e) => e.unique ? e : { ...e, unique: mt.new() })), s(this, S).setUniques((t ?? []).map((e) => e.anyOfDocTypeKeys ?? []).flat()), s(this, D)?.setModel(t ?? []), this.data = { ...this.data, querySteps: t });
};
F = function(t) {
  const e = this._queryStepManifests.find((n) => n.meta.queryStepAlias === t.alias)?.meta, i = t.anyOfDocTypeKeys?.map((n) => s(this, C)[n] ?? n).sort().join(", ") ?? "", a = t.anyOfDocTypeKeys ? this.localize.term("dynamicRoot_queryStepTypes") + i : void 0;
  return {
    unique: t.unique,
    label: e?.label ?? t.alias,
    icon: e?.icon ?? "icon-lab",
    description: a
  };
};
V = function(t) {
  if (this.data?.querySteps) {
    const e = this.data.querySteps.indexOf(t);
    if (e !== -1) {
      const i = [...this.data.querySteps];
      i.splice(e, 1), r(this, o, M).call(this, i), this.dispatchEvent(new m());
    }
  }
};
X = function() {
  this.data = void 0, g(this, c, void 0), this.dispatchEvent(new m());
};
H = function() {
  if (!this.data?.originAlias)
    return h`
			<uui-button
				class="add-button"
				@click=${r(this, o, P)}
				label=${this.localize.term("contentPicker_defineDynamicRoot")}
				look="placeholder"></uui-button>
		`;
};
J = function() {
  if (!s(this, c)) return;
  const t = s(this, c).description ? s(this, R)[s(this, c).description] : "";
  return h`
			<uui-ref-node standalone name=${s(this, c).label} detail=${$(t)}>
				<umb-icon slot="icon" name=${$(s(this, c).icon)}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${r(this, o, P)}
						label="${this.localize.term("general_edit")}"></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
Z = function() {
  if (s(this, c))
    return h`
			<uui-button @click=${r(this, o, X)}>${this.localize.term("buttons_clearSelection")}</uui-button>
		`;
};
j = function() {
  if (this.data?.querySteps)
    return at(
      this.data.querySteps,
      (t) => t.unique,
      (t) => r(this, o, tt).call(this, t)
    );
};
tt = function(t) {
  if (!t.alias) return;
  const e = r(this, o, F).call(this, t);
  return h`
			<uui-ref-node standalone id=${e.unique} name=${e.label} detail="${$(e.description)}">
				<umb-icon slot="icon" name=${e.icon}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => r(this, o, V).call(this, t)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
et = function() {
  if (s(this, c))
    return h` <uui-button
			class="add-button"
			@click=${r(this, o, Y)}
			label=${this.localize.term("dynamicRoot_addQueryStep")}
			look="placeholder"></uui-button>`;
};
v.styles = [
  B`
			.add-button {
				width: 100%;
			}

			uui-ref-node[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
U([
  q()
], v.prototype, "_originManifests", 2);
U([
  q()
], v.prototype, "_queryStepManifests", 2);
U([
  w({ attribute: !1 })
], v.prototype, "data", 2);
v = U([
  L(Et)
], v);
var Ot = Object.defineProperty, St = Object.getOwnPropertyDescriptor, it = (t) => {
  throw TypeError(t);
}, E = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? St(e, i) : e, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (n = (a ? d(e, i, n) : d(n)) || n);
  return a && n && Ot(e, i, n), n;
}, N = (t, e, i) => e.has(t) || it("Cannot " + i), T = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), W = (t, e, i) => e.has(t) ? it("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Rt = (t, e, i, a) => (N(t, e, "write to private field"), e.set(t, i), i), I = (t, e, i) => (N(t, e, "access private method"), i), _, f, nt, ot, st, rt;
let p = class extends ut(Q, "") {
  constructor() {
    super(...arguments), W(this, f), W(this, _, "content"), this._options = [
      { value: "content", name: "Content" },
      { value: "media", name: "Media" },
      { value: "member", name: "Members" }
    ];
  }
  getFormElement() {
  }
  set type(t) {
    t === void 0 && (t = T(this, _));
    const e = T(this, _);
    this._options = this._options.map(
      (i) => i.value === t ? { ...i, selected: !0 } : { ...i, selected: !1 }
    ), Rt(this, _, t), this.requestUpdate("type", e);
  }
  get type() {
    return T(this, _);
  }
  connectedCallback() {
    super.connectedCallback(), this.nodeId && !this.dynamicRoot && (this.dynamicRoot = { originAlias: "ByKey", originKey: this.nodeId, querySteps: [] });
  }
  render() {
    return h`<umb-input-dropdown-list
				@change=${I(this, f, nt)}
				.options=${this._options}></umb-input-dropdown-list>
			${I(this, f, st).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
nt = function(t) {
  t.stopPropagation(), this.type = t.target.value, this.nodeId = void 0, this.dynamicRoot = void 0, this.dispatchEvent(new m());
};
ot = function(t) {
  switch (this.type) {
    case "content":
      this.dynamicRoot = t.target.data, this.dynamicRoot?.originAlias === "ByKey" ? !this.dynamicRoot.querySteps || this.dynamicRoot.querySteps?.length === 0 ? this.nodeId = this.dynamicRoot.originKey : this.nodeId = void 0 : this.nodeId && (this.nodeId = void 0);
      break;
  }
  this.dispatchEvent(new m());
};
st = function() {
  switch (this.type) {
    case "content":
      return I(this, f, rt).call(this);
    case "media":
    case "member":
    default:
      return ct;
  }
};
rt = function() {
  return h`
			<umb-input-content-picker-document-root .data=${this.dynamicRoot} @change=${I(this, f, ot)}>
			</umb-input-content-picker-document-root>
		`;
};
p.styles = [
  B`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-4);
			}
		`
];
E([
  w()
], p.prototype, "type", 1);
E([
  w({ attribute: "node-id" })
], p.prototype, "nodeId", 2);
E([
  w({ attribute: !1 })
], p.prototype, "dynamicRoot", 2);
E([
  q()
], p.prototype, "_options", 2);
p = E([
  L("umb-input-content-picker-source")
], p);
export {
  p as U,
  vt as a,
  bt as b,
  v as c
};
//# sourceMappingURL=input-content-picker-source.element-CNuKYha7.js.map
