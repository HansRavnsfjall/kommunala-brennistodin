import { UmbDocumentUrlRepository as B } from "./document-url.repository-DuwotY28.js";
import { g as V } from "./manifests-BP7S9LPy.js";
import { U as Y } from "./document-urls-data-resolver-DPNqq99l.js";
import { when as M, html as u, repeat as H, ifDefined as X, nothing as U, css as F, state as m, customElement as K } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UmbRequestReloadStructureForEntityEvent as b } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as j } from "@umbraco-cms/backoffice/action";
import { observeMultiple as J } from "@umbraco-cms/backoffice/observable-api";
import { DocumentVariantStateModel as T } from "@umbraco-cms/backoffice/external/backend-api";
import { debounce as Q } from "@umbraco-cms/backoffice/utils";
import { UMB_PROPERTY_DATASET_CONTEXT as Z } from "@umbraco-cms/backoffice/property";
var tt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, R = (t) => {
  throw TypeError(t);
}, p = (t, e, i, c) => {
  for (var a = c > 1 ? void 0 : c ? et(e, i) : e, w = t.length - 1, C; w >= 0; w--)
    (C = t[w]) && (a = (c ? C(e, i, a) : C(a)) || a);
  return c && a && tt(e, i, a), a;
}, N = (t, e, i) => e.has(t) || R("Cannot " + i), r = (t, e, i) => (N(t, e, "read from private field"), e.get(t)), o = (t, e, i) => e.has(t) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), v = (t, e, i, c) => (N(t, e, "write to private field"), e.set(t, i), i), n = (t, e, i) => (N(t, e, "access private method"), i), W, g, _, h, E, d, s, k, S, D, P, L, f, A, $, q, z, I, x, y, O;
let l = class extends G {
  constructor() {
    super(), o(this, s), o(this, W, new B(this)), this._isNew = !1, this._loading = !1, this._links = [], o(this, g, []), o(this, _), o(this, h), o(this, E), o(this, d, new Y(this)), o(this, L, Q(() => n(this, s, D).call(this), 50)), o(this, f, (t) => {
      t.getUnique() === r(this, _)?.getUnique() && t.getEntityType() === r(this, _).getEntityType() && r(this, L).call(this);
    }), this.consumeContext(j, (t) => {
      v(this, h, t), r(this, h)?.removeEventListener(
        b.TYPE,
        r(this, f)
      ), r(this, h)?.addEventListener(
        b.TYPE,
        r(this, f)
      );
    }), this.consumeContext(V, (t) => {
      v(this, _, t), t ? this.observe(
        J([t.isNew, t.unique]),
        ([e, i]) => {
          i && (this._isNew = e === !0, i !== this._unique && (this._unique = i, n(this, s, D).call(this)));
        },
        "observeWorkspaceState"
      ) : this.removeUmbControllerByAlias("observeWorkspaceState"), this.observe(t?.variantOptions, (e) => {
        this._variantOptions = e, n(this, s, k).call(this);
      });
    }), this.consumeContext(Z, (t) => {
      v(this, E, t?.getVariantId()), n(this, s, k).call(this);
    }), this.observe(r(this, d)?.urls, (t) => {
      v(this, g, t ?? []), n(this, s, k).call(this);
    });
  }
  render() {
    return u`
			<umb-workspace-info-app-layout headline="#general_links">
				${M(
      this._loading,
      () => n(this, s, A).call(this),
      () => n(this, s, $).call(this)
    )}
			</umb-workspace-info-app-layout>
		`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), r(this, h)?.removeEventListener(
      b.TYPE,
      r(this, f)
    );
  }
};
W = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
k = function() {
  const t = r(this, g).map((e) => {
    const i = e.culture, c = this._variantOptions?.find((a) => a.culture === i)?.variant?.state;
    return {
      culture: i,
      url: e.url,
      state: c
    };
  });
  this._links = t;
};
S = function(t) {
  return !t || t.length === 0 ? t : t.includes(".") && !t.includes("//") ? "//" + t : t;
};
D = async function() {
  if (this._isNew || !this._unique) return;
  this._loading = !0, r(this, d)?.setData([]);
  const { data: t } = await r(this, W).requestItems([this._unique]);
  t?.length && r(this, d)?.setData(t[0].urls), this._loading = !1;
};
P = function(t) {
  switch (t) {
    case null:
    case void 0:
    case T.NOT_CREATED:
      return "content_notCreated";
    case T.DRAFT:
      return "content_itemNotPublished";
    case T.PUBLISHED:
      return "content_routeErrorCannotRoute";
    default:
      return "content_parentNotPublishedAnomaly";
  }
};
L = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
A = function() {
  return u`<div id="loader-container"><uui-loader></uui-loader></div>`;
};
$ = function() {
  return u`
			${M(
    this._isNew,
    () => n(this, s, q).call(this),
    () => this._links.length === 0 ? n(this, s, x).call(this) : n(this, s, z).call(this)
  )}
		`;
};
q = function() {
  return u`${n(this, s, y).call(this, null, null)}`;
};
z = function() {
  return u`
			${H(
    this._links,
    (t) => t.url,
    (t) => n(this, s, I).call(this, t)
  )}
		`;
};
I = function(t) {
  return t.url ? u`
			<a class="link-item" href=${X(n(this, s, S).call(this, t.url))} target="_blank">
				<span>
					${n(this, s, O).call(this, t.culture)}
					<span>${t.url}</span>
				</span>
				<uui-icon name="icon-out"></uui-icon>
			</a>
		` : n(this, s, y).call(this, t.culture, t.state);
};
x = function() {
  return u` ${this._variantOptions?.filter((t) => t.culture === r(this, E)?.culture).map((t) => n(this, s, y).call(this, t.culture, t.variant?.state))}`;
};
y = function(t, e) {
  return u`<div class="link-item">
			<span>
				${n(this, s, O).call(this, t)}
				<em><umb-localize key=${n(this, s, P).call(this, e)}></umb-localize></em>
			</span>
		</div>`;
};
O = function(t) {
  return t ? this._links.length === 1 ? U : this._links?.every((i) => i.culture === t) ? U : u`<span class="culture">${t}</span>` : U;
};
l.styles = [
  F`
			#loader-container {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: var(--uui-size-space-2);
			}

			.link-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-6);
				padding: var(--uui-size-space-4) var(--uui-size-space-5);

				&:is(a) {
					cursor: pointer;
					color: inherit;
					text-decoration: none;
				}

				&:is(a):hover {
					background: var(--uui-color-divider);
				}

				& > span {
					display: flex;
					align-items: center;
					gap: var(--uui-size-6);
				}

				.culture {
					color: var(--uui-color-divider-emphasis);
				}
			}
		`
];
p([
  m()
], l.prototype, "_isNew", 2);
p([
  m()
], l.prototype, "_unique", 2);
p([
  m()
], l.prototype, "_variantOptions", 2);
p([
  m()
], l.prototype, "_loading", 2);
p([
  m()
], l.prototype, "_links", 2);
l = p([
  K("umb-document-links-workspace-info-app")
], l);
const _t = l;
export {
  l as UmbDocumentLinksWorkspaceInfoAppElement,
  _t as default
};
//# sourceMappingURL=document-links-workspace-info-app.element-BN18RSED.js.map
