import { U as G } from "./link-picker-modal.token-D9E3VS6O.js";
import { html as v, nothing as S, repeat as H, ifDefined as L, when as J, css as Q, property as m, state as b, customElement as X } from "@umbraco-cms/backoffice/external/lit";
import { simpleHashCode as Y } from "@umbraco-cms/backoffice/observable-api";
import { umbConfirmModal as Z } from "@umbraco-cms/backoffice/modal";
import { UmbChangeEvent as j } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as ee } from "@umbraco-cms/backoffice/lit-element";
import { UmbDocumentItemRepository as te, UmbDocumentUrlRepository as ie, UmbDocumentUrlsDataResolver as re } from "@umbraco-cms/backoffice/document";
import { UmbMediaItemRepository as se, UmbMediaUrlRepository as ne } from "@umbraco-cms/backoffice/media";
import { UmbModalRouteRegistrationController as ae } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as oe } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as le } from "@umbraco-cms/backoffice/external/uui";
var ue = Object.defineProperty, he = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, l = (e, t, i, r) => {
  for (var u = r > 1 ? void 0 : r ? he(t, i) : t, c = e.length - 1, U; c >= 0; c--)
    (U = e[c]) && (u = (r ? U(t, i, u) : U(u)) || u);
  return r && u && ue(t, i, u), u;
}, M = (e, t, i) => t.has(e) || $("Cannot " + i), a = (e, t, i) => (M(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, r) => (M(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (M(e, t, "access private method"), i), p, d, q, I, y, R, x, f, _, s, C, E, k, D, W, A, O, P, N, B, g, F, z, T, K, V;
let o = class extends le(ee, "") {
  constructor() {
    super(), h(this, s), h(this, p, new oe(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => n(this, s, N).call(this, e),
      identifier: "Umb.SorterIdentifier.InputMultiUrl",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.urls = e, n(this, s, g).call(this);
      }
    })), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", h(this, d, []), h(this, q, new te(this)), h(this, I, new ie(this)), h(this, y, new re(this)), h(this, R, new se(this)), h(this, x, new ne(this)), h(this, f, !1), this._resolvedLinkNames = [], this._resolvedLinkUrls = [], h(this, _), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.urls.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.urls.length > this.max
    ), w(this, _, new ae(this, G).addAdditionalPath(":index").onSetup((e) => {
      if (!e.index) return !1;
      let i = parseInt(e.index);
      if (Number.isNaN(i)) return !1;
      let r = null;
      return i >= 0 && i < this.urls.length ? r = n(this, s, P).call(this, i) : i = null, {
        modal: {
          size: this.overlaySize || "small"
        },
        data: {
          index: i,
          isNew: i === null,
          config: {
            hideAnchor: this.hideAnchor
          }
        },
        value: {
          link: {
            icon: r?.icon,
            name: r?.name,
            published: r?.published,
            queryString: r?.queryString,
            target: r?.target,
            trashed: r?.trashed,
            type: r?.type,
            unique: r?.unique,
            url: r?.url
          }
        }
      };
    }).onSubmit((e) => {
      e && n(this, s, B).call(this, e.link, a(this, _).modalContext?.data.index ?? null);
    }).observeRouteBuilder((e) => {
      this._modalRoute = e;
    }));
  }
  getFormElement() {
  }
  /** @deprecated will be removed in v17 */
  set alias(e) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(e) {
  }
  get variantId() {
  }
  set urls(e) {
    e ??= [], w(this, d, [...e]), super.value = a(this, d).map((t) => t.url).join(","), a(this, p).setModel(a(this, d)), n(this, s, C).call(this);
  }
  get urls() {
    return a(this, d);
  }
  get readonly() {
    return a(this, f);
  }
  set readonly(e) {
    w(this, f, e), a(this, f) ? a(this, p).disable() : a(this, p).enable();
  }
  render() {
    return v`${n(this, s, K).call(this)} ${n(this, s, T).call(this)}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
C = function() {
  this._resolvedLinkNames = [], this._resolvedLinkUrls = [], a(this, d).forEach(async (e) => {
    if (!e.unique) return;
    let t, i;
    switch (e.type) {
      case "document": {
        (!e.name || e.name.length === 0) && (t = await n(this, s, D).call(this, e.unique)), i = await n(this, s, E).call(this, e.unique);
        break;
      }
      case "media": {
        (!e.name || e.name.length === 0) && (t = await n(this, s, W).call(this, e.unique)), i = await n(this, s, k).call(this, e.unique);
        break;
      }
    }
    if (t) {
      const r = { unique: e.unique, name: t };
      this._resolvedLinkNames = [...this._resolvedLinkNames, r];
    }
    if (i) {
      const r = { unique: e.unique, url: i };
      this._resolvedLinkUrls = [...this._resolvedLinkUrls, r];
    }
  });
};
E = async function(e) {
  const { data: t } = await a(this, I).requestItems([e]);
  return a(this, y).setData(t?.[0]?.urls), (await a(this, y).getUrls())?.[0]?.url ?? "";
};
k = async function(e) {
  const { data: t } = await a(this, x).requestItems([e]);
  return t?.[0].url ?? "";
};
D = async function(e) {
  const { data: t } = await a(this, q).requestItems([e]);
  return t?.[0]?.name ?? "";
};
W = async function(e) {
  const { data: t } = await a(this, R).requestItems([e]);
  return t?.[0]?.name ?? "";
};
A = async function(e, t) {
  const i = a(this, d)[e];
  if (!i) throw new Error("Could not find item at index: " + e);
  await Z(this, {
    color: "danger",
    headline: `Remove ${t || i.name || "item"}?`,
    content: "Are you sure you want to remove this item?",
    confirmLabel: "#general_remove"
  }), n(this, s, O).call(this, e);
};
O = function(e) {
  this.urls.splice(e, 1), n(this, s, g).call(this);
};
P = function(e) {
  return this.urls[e];
};
N = function(e) {
  return "x" + Y(JSON.stringify(e)).toString(16);
};
B = function(e, t) {
  t !== null && t >= 0 ? this.urls[t] = e : this.urls.push(e), n(this, s, g).call(this);
};
g = function() {
  this.requestUpdate(), this.dispatchEvent(new j());
};
F = function(e) {
  return (e.name || this._resolvedLinkNames.find((t) => t.unique === e.unique)?.name) ?? "";
};
z = function(e) {
  return (this._resolvedLinkUrls.find((t) => t.unique === e.unique)?.url ?? e.url ?? "") + (e.queryString || "");
};
T = function() {
  return this.max === 1 && this.urls && this.urls.length >= this.max ? S : this.readonly && this.urls.length > 0 ? S : v`
				<uui-button
					id="btn-add"
					look="placeholder"
					label=${this.localize.term("general_add")}
					.href=${this._modalRoute?.({ index: -1 })}
					?disabled=${this.readonly}></uui-button>
			`;
};
K = function() {
  if (this.urls)
    return v`
			<uui-ref-list>
				${H(
      this.urls,
      (e) => e.unique,
      (e, t) => n(this, s, V).call(this, e, t)
    )}
			</uui-ref-list>
		`;
};
V = function(e, t) {
  const i = n(this, s, N).call(this, e), r = this.readonly ? void 0 : this._modalRoute?.({ index: t }) ?? void 0, u = n(this, s, F).call(this, e), c = n(this, s, z).call(this, e);
  return v`
			<uui-ref-node
				id=${i}
				href=${L(r)}
				name=${u || c}
				detail=${L(u ? c : void 0)}
				?readonly=${this.readonly}>
				<umb-icon slot="icon" name=${e.icon || "icon-link"}></umb-icon>
				${J(
    !this.readonly,
    () => v`
						<uui-action-bar slot="actions">
							<uui-button
								label=${this.localize.term("general_remove")}
								@click=${() => n(this, s, A).call(this, t, u)}></uui-button>
						</uui-action-bar>
					`
  )}
			</uui-ref-node>
		`;
};
o.styles = [
  Q`
			#btn-add {
				width: 100%;
			}
		`
];
l([
  m()
], o.prototype, "alias", 1);
l([
  m()
], o.prototype, "variantId", 1);
l([
  m({ type: Number })
], o.prototype, "min", 2);
l([
  m({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
l([
  m({ type: Number })
], o.prototype, "max", 2);
l([
  m({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
l([
  m({ type: Boolean, attribute: "hide-anchor" })
], o.prototype, "hideAnchor", 2);
l([
  m()
], o.prototype, "overlaySize", 2);
l([
  m({ attribute: !1 })
], o.prototype, "urls", 1);
l([
  m({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 1);
l([
  b()
], o.prototype, "_modalRoute", 2);
l([
  b()
], o.prototype, "_resolvedLinkNames", 2);
l([
  b()
], o.prototype, "_resolvedLinkUrls", 2);
o = l([
  X("umb-input-multi-url")
], o);
export {
  o as U
};
//# sourceMappingURL=input-multi-url.element-9m9lQft9.js.map
