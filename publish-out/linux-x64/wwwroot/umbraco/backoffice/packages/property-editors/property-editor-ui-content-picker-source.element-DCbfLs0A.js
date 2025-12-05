import { html as d, ifDefined as T, repeat as dt, css as Y, state as q, property as b, customElement as D, nothing as lt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UUIFormControlMixin as _t } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
import { U as mt, a as ft } from "./manifests-DgUh0PxQ.js";
import { UmbModalToken as F, UMB_MODAL_MANAGER_CONTEXT as yt } from "@umbraco-cms/backoffice/modal";
import { umbExtensionsRegistry as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UmbFormControlMixin as vt } from "@umbraco-cms/backoffice/validation";
import { UmbId as bt } from "@umbraco-cms/backoffice/id";
import { UmbRepositoryItemsManager as z } from "@umbraco-cms/backoffice/repository";
import { UmbSorterController as Et } from "@umbraco-cms/backoffice/sorter";
import { UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS as gt } from "@umbraco-cms/backoffice/document";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as Ot } from "@umbraco-cms/backoffice/document-type";
const Ct = new F(
  mt,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), Mt = new F(
  ft,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
var St = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, U = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? Rt(e, i) : e, c = t.length - 1, u; c >= 0; c--)
    (u = t[c]) && (n = (s ? u(e, i, n) : u(n)) || n);
  return s && n && St(e, i, n), n;
}, N = (t, e, i) => e.has(t) || V("Cannot " + i), r = (t, e, i) => (N(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), C = (t, e, i, s) => (N(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (N(t, e, "access private method"), i), S, R, h, $, I, E, y, K, o, W, X, x, g, H, J, Z, j, tt, et, it, nt, ot;
const $t = "umb-input-content-picker-document-root";
let v = class extends vt(A) {
  constructor() {
    super(), p(this, o), p(this, S, new z(
      this,
      gt
    )), p(this, R, new z(
      this,
      Ot
    )), this._originManifests = [], this._queryStepManifests = [], p(this, h), p(this, $, {}), p(this, I, {}), p(this, E), p(this, y), p(this, K, new Et(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t.unique,
      identifier: "Umb.SorterIdentifier.InputDynamicRoot",
      itemSelector: "uui-ref-node",
      containerSelector: "#query-steps",
      onChange: ({ model: t }) => {
        if (this.data?.querySteps) {
          const e = t;
          a(this, o, g).call(this, e), this.dispatchEvent(new l());
        }
      }
    })), this.consumeContext(yt, (t) => {
      C(this, E, t);
    }), this.observe(
      Q.byType("dynamicRootOrigin"),
      (t) => {
        this._originManifests = t;
      }
    ), this.observe(
      Q.byType("dynamicRootQueryStep"),
      (t) => {
        this._queryStepManifests = t;
      }
    ), this.observe(r(this, S).items, (t) => {
      t?.length && (t.forEach((e) => {
        r(this, $)[e.unique] = e.name;
      }), this.requestUpdate());
    }), this.observe(r(this, R).items, (t) => {
      t?.length && (t.forEach((e) => {
        r(this, I)[e.unique] = e.name;
      }), this.requestUpdate());
    });
  }
  getFormElement() {
  }
  connectedCallback() {
    super.connectedCallback(), a(this, o, x).call(this, this.data), a(this, o, g).call(this, this.data?.querySteps);
  }
  render() {
    return d`
			${a(this, o, j).call(this)}
			<uui-ref-list>${a(this, o, tt).call(this)}</uui-ref-list>
			<uui-ref-list id="query-steps">${a(this, o, it).call(this)}</uui-ref-list>
			${a(this, o, ot).call(this)} ${a(this, o, et).call(this)}
		`;
  }
};
S = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
W = function() {
  C(this, y, r(this, E)?.open(this, Ct, {
    data: { items: this._originManifests }
  })), r(this, y)?.onSubmit().then((t) => {
    const e = { ...this.data };
    e.originKey = void 0, this.data = { ...e, ...t }, a(this, o, x).call(this, this.data), this.dispatchEvent(new l());
  });
};
X = function() {
  C(this, y, r(this, E)?.open(this, Mt, {
    data: { items: this._queryStepManifests }
  })), r(this, y)?.onSubmit().then((t) => {
    if (this.data) {
      const e = [...this.data.querySteps ?? [], t];
      a(this, o, g).call(this, e), this.dispatchEvent(new l());
    }
  });
};
x = function(t) {
  if (!t) return;
  const e = this._originManifests.find((i) => i.meta.originAlias === t.originAlias)?.meta;
  t.originKey && r(this, S).setUniques([t.originKey]), C(this, h, {
    label: e?.label ?? t.originAlias,
    icon: e?.icon ?? "icon-wand",
    description: t.originKey
  });
};
g = function(t) {
  this.data && (t && (t = t.map((e) => e.unique ? e : { ...e, unique: bt.new() })), r(this, R).setUniques((t ?? []).map((e) => e.anyOfDocTypeKeys ?? []).flat()), r(this, K)?.setModel(t ?? []), this.data = { ...this.data, querySteps: t });
};
H = function(t) {
  const e = this._queryStepManifests.find((n) => n.meta.queryStepAlias === t.alias)?.meta, i = t.anyOfDocTypeKeys?.map((n) => r(this, I)[n] ?? n).sort().join(", ") ?? "", s = t.anyOfDocTypeKeys ? this.localize.term("dynamicRoot_queryStepTypes") + i : void 0;
  return {
    unique: t.unique,
    label: e?.label ?? t.alias,
    icon: e?.icon ?? "icon-lab",
    description: s
  };
};
J = function(t) {
  if (this.data?.querySteps) {
    const e = this.data.querySteps.indexOf(t);
    if (e !== -1) {
      const i = [...this.data.querySteps];
      i.splice(e, 1), a(this, o, g).call(this, i), this.dispatchEvent(new l());
    }
  }
};
Z = function() {
  this.data = void 0, C(this, h, void 0), this.dispatchEvent(new l());
};
j = function() {
  if (!this.data?.originAlias)
    return d`
			<uui-button
				class="add-button"
				@click=${a(this, o, W)}
				label=${this.localize.term("contentPicker_defineDynamicRoot")}
				look="placeholder"></uui-button>
		`;
};
tt = function() {
  if (!r(this, h)) return;
  const t = r(this, h).description ? r(this, $)[r(this, h).description] : "";
  return d`
			<uui-ref-node standalone name=${r(this, h).label} detail=${T(t)}>
				<umb-icon slot="icon" name=${T(r(this, h).icon)}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${a(this, o, W)}
						label="${this.localize.term("general_edit")}"></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
et = function() {
  if (r(this, h))
    return d`
			<uui-button @click=${a(this, o, Z)}>${this.localize.term("buttons_clearSelection")}</uui-button>
		`;
};
it = function() {
  if (this.data?.querySteps)
    return dt(
      this.data.querySteps,
      (t) => t.unique,
      (t) => a(this, o, nt).call(this, t)
    );
};
nt = function(t) {
  if (!t.alias) return;
  const e = a(this, o, H).call(this, t);
  return d`
			<uui-ref-node standalone id=${e.unique} name=${e.label} detail="${T(e.description)}">
				<umb-icon slot="icon" name=${e.icon}></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => a(this, o, J).call(this, t)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
ot = function() {
  if (r(this, h))
    return d` <uui-button
			class="add-button"
			@click=${a(this, o, X)}
			label=${this.localize.term("dynamicRoot_addQueryStep")}
			look="placeholder"></uui-button>`;
};
v.styles = [
  Y`
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
  b({ attribute: !1 })
], v.prototype, "data", 2);
v = U([
  D($t)
], v);
var It = Object.defineProperty, wt = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, M = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? wt(e, i) : e, c = t.length - 1, u; c >= 0; c--)
    (u = t[c]) && (n = (s ? u(e, i, n) : u(n)) || n);
  return s && n && It(e, i, n), n;
}, B = (t, e, i) => e.has(t) || rt("Cannot " + i), P = (t, e, i) => (B(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ut = (t, e, i, s) => (B(t, e, "write to private field"), e.set(t, i), i), w = (t, e, i) => (B(t, e, "access private method"), i), m, f, st, at, ct, ut;
let _ = class extends _t(A, "") {
  constructor() {
    super(...arguments), G(this, f), G(this, m, "content"), this._options = [
      { value: "content", name: "Content" },
      { value: "media", name: "Media" },
      { value: "member", name: "Members" }
    ];
  }
  getFormElement() {
  }
  set type(t) {
    t === void 0 && (t = P(this, m));
    const e = P(this, m);
    this._options = this._options.map(
      (i) => i.value === t ? { ...i, selected: !0 } : { ...i, selected: !1 }
    ), Ut(this, m, t), this.requestUpdate("type", e);
  }
  get type() {
    return P(this, m);
  }
  connectedCallback() {
    super.connectedCallback(), this.nodeId && !this.dynamicRoot && (this.dynamicRoot = { originAlias: "ByKey", originKey: this.nodeId, querySteps: [] });
  }
  render() {
    return d`<umb-input-dropdown-list
				@change=${w(this, f, st)}
				.options=${this._options}></umb-input-dropdown-list>
			${w(this, f, ct).call(this)}`;
  }
};
m = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
st = function(t) {
  t.stopPropagation(), this.type = t.target.value, this.nodeId = void 0, this.dynamicRoot = void 0, this.dispatchEvent(new l());
};
at = function(t) {
  switch (this.type) {
    case "content":
      this.dynamicRoot = t.target.data, this.dynamicRoot?.originAlias === "ByKey" ? !this.dynamicRoot.querySteps || this.dynamicRoot.querySteps?.length === 0 ? this.nodeId = this.dynamicRoot.originKey : this.nodeId = void 0 : this.nodeId && (this.nodeId = void 0);
      break;
  }
  this.dispatchEvent(new l());
};
ct = function() {
  switch (this.type) {
    case "content":
      return w(this, f, ut).call(this);
    case "media":
    case "member":
    default:
      return lt;
  }
};
ut = function() {
  return d`
			<umb-input-content-picker-document-root .data=${this.dynamicRoot} @change=${w(this, f, at)}>
			</umb-input-content-picker-document-root>
		`;
};
_.styles = [
  Y`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-4);
			}
		`
];
M([
  b()
], _.prototype, "type", 1);
M([
  b({ attribute: "node-id" })
], _.prototype, "nodeId", 2);
M([
  b({ attribute: !1 })
], _.prototype, "dynamicRoot", 2);
M([
  q()
], _.prototype, "_options", 2);
_ = M([
  D("umb-input-content-picker-source")
], _);
var Pt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, ht = (t) => {
  throw TypeError(t);
}, L = (t, e, i, s) => {
  for (var n = s > 1 ? void 0 : s ? Tt(e, i) : e, c = t.length - 1, u; c >= 0; c--)
    (u = t[c]) && (n = (s ? u(e, i, n) : u(n)) || n);
  return s && n && Pt(e, i, n), n;
}, kt = (t, e, i) => e.has(t) || ht("Cannot " + i), qt = (t, e, i) => e.has(t) ? ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Dt = (t, e, i) => (kt(t, e, "access private method"), i), k, pt;
let O = class extends A {
  constructor() {
    super(...arguments), qt(this, k);
  }
  render() {
    return d`<umb-input-content-picker-source
			@change=${Dt(this, k, pt)}
			.type=${this.value?.type ?? "content"}
			.nodeId=${this.value?.id}
			.dynamicRoot=${this.value?.dynamicRoot}></umb-input-content-picker-source>`;
  }
};
k = /* @__PURE__ */ new WeakSet();
pt = function(t) {
  const e = t.target;
  this.value = {
    type: e.type,
    id: e.nodeId,
    dynamicRoot: e.dynamicRoot
  }, this.dispatchEvent(new l());
};
L([
  b({ type: Object })
], O.prototype, "value", 2);
L([
  b({ type: Object, attribute: !1 })
], O.prototype, "config", 2);
O = L([
  D("umb-property-editor-ui-content-picker-source")
], O);
const Xt = O;
export {
  O as UmbPropertyEditorUIContentPickerSourceElement,
  Xt as default
};
//# sourceMappingURL=property-editor-ui-content-picker-source.element-DCbfLs0A.js.map
