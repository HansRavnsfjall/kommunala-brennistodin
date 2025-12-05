import { a as q } from "./media-url.repository-B5RzlWhD.js";
import { G as L } from "./input-upload-field.element-BKvVffkE.js";
import { when as S, html as l, repeat as $, nothing as R, css as z, state as h, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbRequestReloadStructureForEntityEvent as N } from "@umbraco-cms/backoffice/entity-action";
import { observeMultiple as O } from "@umbraco-cms/backoffice/observable-api";
import { debounce as P } from "@umbraco-cms/backoffice/utils";
var T = Object.defineProperty, D = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, d = (e, t, i, c) => {
  for (var s = c > 1 ? void 0 : c ? D(t, i) : t, f = e.length - 1, _; f >= 0; f--)
    (_ = e[f]) && (s = (c ? _(t, i, s) : _(s)) || s);
  return c && s && T(t, i, s), s;
}, w = (e, t, i) => t.has(e) || x("Cannot " + i), u = (e, t, i) => (w(e, t, "read from private field"), t.get(e)), o = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i, c) => (w(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (w(e, t, "access private method"), i), b, p, m, n, E, k, v, g, M, W, C, U;
let r = class extends I {
  constructor() {
    super(), o(this, n), o(this, b, new q(this)), this._isNew = !1, this._loading = !1, this._links = [], o(this, p, []), o(this, m), o(this, v, P(() => a(this, n, k).call(this), 50)), o(this, g, () => {
      u(this, v).call(this);
    }), this.consumeContext(L, (e) => {
      e ? this.observe(
        O([e.isNew, e.unique]),
        ([t, i]) => {
          i && (this._isNew = t === !0, i !== this._unique && (this._unique = i, a(this, n, k).call(this)));
        },
        "observeWorkspaceState"
      ) : this.removeUmbControllerByAlias("observeWorkspaceState");
    });
  }
  render() {
    return l`
			<umb-workspace-info-app-layout headline="#general_links">
				${S(
      this._loading,
      () => a(this, n, M).call(this),
      () => a(this, n, C).call(this)
    )}
			</umb-workspace-info-app-layout>
		`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), u(this, m)?.removeEventListener(
      N.TYPE,
      u(this, g)
    );
  }
};
b = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function() {
  const e = u(this, p).map((t) => ({ url: t.url }));
  this._links = e;
};
k = async function() {
  if (this._isNew || !this._unique) return;
  this._loading = !0, y(this, p, []);
  const { data: e } = await u(this, b).requestItems([this._unique]);
  e?.length && (y(this, p, e), a(this, n, E).call(this)), this._loading = !1;
};
v = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
M = function() {
  return l`<div id="loader-container"><uui-loader></uui-loader></div>`;
};
W = function(e) {
  const t = window.open("", "_blank");
  if (!t) return;
  const i = `<!doctype html>
<body style="background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(135deg, transparent 75%, #ccc 75%); background-size:30px 30px; background-position:0 0, 15px 0, 15px -15px, 0px 15px;">
	<img src="${e}"/>
	<script>history.pushState(null, null, "${window.location.href}");<\/script>
</body>`;
  t.document.open(), t.document.write(i), t.document.close();
};
C = function() {
  return this._links.length ? l`
				${$(
    this._links,
    (e) => e.url,
    (e) => a(this, n, U).call(this, e)
  )}
			` : l`
				<div class="link-item">
					<span class="link-content italic"><umb-localize key="content_noMediaLink"></umb-localize></span>
				</div>
			`;
};
U = function(e) {
  return e.url ? e.url.split(/[#?]/)[0].split(".").pop()?.trim() === "svg" ? l`
				<a href="#" target="_blank" class="link-item with-href" @click=${() => a(this, n, W).call(this, e.url)}>
					<span class="link-content">${e.url}</span>
					<uui-icon name="icon-out"></uui-icon>
				</a>
			` : l`
				<a href=${e.url} target="_blank" class="link-item with-href">
					<span class="link-content">${e.url}</span>
					<uui-icon name="icon-out"></uui-icon>
				</a>
			` : R;
};
r.styles = [
  z`
			uui-box {
				--uui-box-default-padding: 0;
			}

			#link-section {
				display: flex;
				flex-direction: column;
				text-align: left;
			}

			.link-item {
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
				display: grid;
				grid-template-columns: 1fr auto;
				gap: var(--uui-size-6);
				color: inherit;
				text-decoration: none;
				word-break: break-all;
			}

			.link-language {
				color: var(--uui-color-divider-emphasis);
			}

			.link-content.italic {
				font-style: italic;
			}

			.link-item uui-icon {
				margin-right: var(--uui-size-space-2);
				vertical-align: middle;
			}

			.link-item.with-href {
				cursor: pointer;
			}

			.link-item.with-href:hover {
				background: var(--uui-color-divider);
			}
		`
];
d([
  h()
], r.prototype, "_isNew", 2);
d([
  h()
], r.prototype, "_unique", 2);
d([
  h()
], r.prototype, "_loading", 2);
d([
  h()
], r.prototype, "_links", 2);
r = d([
  A("umb-media-links-workspace-info-app")
], r);
const J = r;
export {
  r as UmbMediaLinksWorkspaceInfoAppElement,
  J as default
};
//# sourceMappingURL=media-links-workspace-info-app.element-BZN40uaB.js.map
