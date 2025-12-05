import { U as O } from "./link-picker-modal.token-D9E3VS6O.js";
import { html as v, nothing as M, repeat as P, ifDefined as A, when as B, css as W, property as h, state as q, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { simpleHashCode as F } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as T } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as K } from "@umbraco-cms/backoffice/lit-element";
import { umbConfirmModal as V } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as G } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as H } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as J } from "@umbraco-cms/backoffice/external/uui";
import { UmbDocumentUrlRepository as Q, UmbDocumentUrlsDataResolver as X } from "@umbraco-cms/backoffice/document";
import { UmbMediaUrlRepository as Y } from "@umbraco-cms/backoffice/media";
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, a = (e, t, i, r) => {
  for (var l = r > 1 ? void 0 : r ? j(t, i) : t, m = e.length - 1, g; m >= 0; m--)
    (g = e[m]) && (l = (r ? g(t, i, l) : g(l)) || l);
  return r && l && Z(t, i, l), l;
}, b = (e, t, i) => t.has(e) || I("Cannot " + i), u = (e, t, i) => (b(e, t, "read from private field"), i ? i.call(e) : t.get(e)), c = (e, t, i) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), U = (e, t, i, r) => (b(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (b(e, t, "access private method"), i), p, d, f, y, s, x, S, R, $, C, E, w, D, _, L, k, N;
const ee = "umb-input-multi-url";
let o = class extends J(K, "") {
  constructor() {
    super(), c(this, s), c(this, p, new H(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => n(this, s, w).call(this, e),
      identifier: "Umb.SorterIdentifier.InputMultiUrl",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.urls = e, n(this, s, _).call(this);
      }
    })), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", c(this, d, []), c(this, f, !1), this._resolvedLinkUrls = [], c(this, y), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.urls.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.urls.length > this.max
    ), U(this, y, new G(this, O).addAdditionalPath(":index").onSetup((e) => {
      if (!e.index) return !1;
      let i = parseInt(e.index);
      if (Number.isNaN(i)) return !1;
      let r = null;
      return i >= 0 && i < this.urls.length ? r = n(this, s, E).call(this, i) : i = null, {
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
      e && n(this, s, D).call(this, e.link, u(this, y).modalContext?.data.index ?? null);
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
    e ??= [], U(this, d, [...e]), super.value = u(this, d).map((t) => t.url).join(","), u(this, p).setModel(u(this, d)), n(this, s, x).call(this);
  }
  get urls() {
    return u(this, d);
  }
  get readonly() {
    return u(this, f);
  }
  set readonly(e) {
    U(this, f, e), u(this, f) ? u(this, p).disable() : u(this, p).enable();
  }
  render() {
    return v`${n(this, s, k).call(this)} ${n(this, s, L).call(this)}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
x = function() {
  u(this, d).forEach(async (e) => {
    if (!e.unique) return;
    let t;
    switch (e.type) {
      case "document": {
        t = await n(this, s, S).call(this, e.unique);
        break;
      }
      case "media": {
        t = await n(this, s, R).call(this, e.unique);
        break;
      }
    }
    if (t) {
      const i = { unique: e.unique, url: t };
      this._resolvedLinkUrls = [...this._resolvedLinkUrls, i];
    }
  });
};
S = async function(e) {
  const t = new Q(this), { data: i } = await t.requestItems([e]), r = i?.[0], l = new X(this);
  return l.setData(r?.urls), (await l.getUrls())?.[0]?.url ?? "";
};
R = async function(e) {
  const t = new Y(this), { data: i } = await t.requestItems([e]);
  return i?.[0].url ?? "";
};
$ = async function(e) {
  const t = u(this, d)[e];
  if (!t) throw new Error("Could not find item at index: " + e);
  await V(this, {
    color: "danger",
    headline: `Remove ${t.name}?`,
    content: "Are you sure you want to remove this item",
    confirmLabel: "Remove"
  }), n(this, s, C).call(this, e);
};
C = function(e) {
  this.urls.splice(e, 1), n(this, s, _).call(this);
};
E = function(e) {
  return this.urls[e];
};
w = function(e) {
  return "x" + F(JSON.stringify(e)).toString(16);
};
D = function(e, t) {
  t !== null && t >= 0 ? this.urls[t] = e : this.urls.push(e), n(this, s, _).call(this);
};
_ = function() {
  this.requestUpdate(), this.dispatchEvent(new T());
};
L = function() {
  return this.max === 1 && this.urls && this.urls.length >= this.max ? M : this.readonly && this.urls.length > 0 ? M : v`
				<uui-button
					id="btn-add"
					look="placeholder"
					label=${this.localize.term("general_add")}
					.href=${this._modalRoute?.({ index: -1 })}
					?disabled=${this.readonly}></uui-button>
			`;
};
k = function() {
  if (this.urls)
    return v`
			<uui-ref-list>
				${P(
      this.urls,
      (e) => e.unique,
      (e, t) => n(this, s, N).call(this, e, t)
    )}
			</uui-ref-list>
		`;
};
N = function(e, t) {
  const i = n(this, s, w).call(this, e), r = this.readonly ? void 0 : this._modalRoute?.({ index: t }) ?? void 0, l = this._resolvedLinkUrls.find((m) => m.unique === e.unique)?.url ?? "";
  return v`
			<uui-ref-node
				id=${i}
				href=${A(r)}
				name=${e.name || ""}
				detail=${l + (e.queryString || "")}
				?readonly=${this.readonly}>
				<umb-icon slot="icon" name=${e.icon || "icon-link"}></umb-icon>
				${B(
    !this.readonly,
    () => v`
						<uui-action-bar slot="actions">
							<uui-button
								label=${this.localize.term("general_remove")}
								@click=${() => n(this, s, $).call(this, t)}></uui-button>
						</uui-action-bar>
					`
  )}
			</uui-ref-node>
		`;
};
o.styles = [
  W`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  h()
], o.prototype, "alias", 1);
a([
  h()
], o.prototype, "variantId", 1);
a([
  h({ type: Number })
], o.prototype, "min", 2);
a([
  h({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
a([
  h({ type: Number })
], o.prototype, "max", 2);
a([
  h({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
a([
  h({ type: Boolean, attribute: "hide-anchor" })
], o.prototype, "hideAnchor", 2);
a([
  h()
], o.prototype, "overlaySize", 2);
a([
  h({ attribute: !1 })
], o.prototype, "urls", 1);
a([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 1);
a([
  q()
], o.prototype, "_modalRoute", 2);
a([
  q()
], o.prototype, "_resolvedLinkUrls", 2);
o = a([
  z(ee)
], o);
export {
  o as U
};
//# sourceMappingURL=input-multi-url.element-jigBOOsg.js.map
