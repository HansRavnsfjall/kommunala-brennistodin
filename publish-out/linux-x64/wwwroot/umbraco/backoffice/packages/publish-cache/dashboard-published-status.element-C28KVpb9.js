import { html as u, css as f, state as m, customElement as R } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as h } from "@umbraco-cms/backoffice/resources";
import { umbConfirmModal as b } from "@umbraco-cms/backoffice/modal";
import { PublishedCacheService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
var g = Object.defineProperty, S = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, c = (e, t, a, s) => {
  for (var i = s > 1 ? void 0 : s ? S(t, a) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (i = (s ? l(t, a, i) : l(i)) || i);
  return s && i && g(t, a, i), i;
}, y = (e, t, a) => t.has(e) || _("Cannot " + a), w = (e, t, a) => (y(e, t, "read from private field"), a ? a.call(e) : t.get(e)), x = (e, t, a) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), p = (e, t, a, s) => (y(e, t, "write to private field"), t.set(e, a), a), r;
let o = class extends v {
  constructor() {
    super(...arguments), this._buttonStateReload = void 0, this._buttonStateRebuild = void 0, x(this, r, !0);
  }
  //Reload
  async _reloadMemoryCache() {
    this._buttonStateReload = "waiting";
    const { error: e } = await h(this, d.postPublishedCacheReload());
    e ? this._buttonStateReload = "failed" : this._buttonStateReload = "success";
  }
  async _onReloadCacheHandler() {
    await b(this, {
      headline: "Reload",
      content: u` Trigger a in-memory and local file cache reload on all servers.`,
      color: "danger",
      confirmLabel: "Continue"
    }), this._reloadMemoryCache();
  }
  // Rebuild
  async _rebuildDatabaseCache() {
    this._buttonStateRebuild = "waiting";
    const { error: e } = await h(this, d.postPublishedCacheRebuild());
    e ? this._buttonStateRebuild = "failed" : (p(this, r, !0), this._pollForRebuildDatabaseCacheStatus());
  }
  async _pollForRebuildDatabaseCacheStatus() {
    for (; this._buttonStateRebuild === "waiting"; ) {
      await new Promise((a) => setTimeout(a, w(this, r) ? 1e3 : 5e3)), p(this, r, !1);
      const { data: e, error: t } = await h(this, d.getPublishedCacheRebuildStatus());
      if (t || !e) {
        this._buttonStateRebuild = "failed";
        return;
      }
      e.isRebuilding || (this._buttonStateRebuild = "success");
    }
  }
  async _onRebuildCacheHandler() {
    await b(this, {
      headline: "Rebuild",
      content: u` Rebuild content in cmsContentNu database table. Expensive.`,
      color: "danger",
      confirmLabel: "Continue"
    }), this._rebuildDatabaseCache();
  }
  render() {
    return u`
			<uui-box headline="Memory Cache">
				<p>
					This button lets you reload the in-memory cache, by entirely reloading it from the database cache (but it does
					not rebuild that database cache). This is relatively fast. Use it when you think that the memory cache has not
					been properly refreshed, after some events triggered—which would indicate a minor Umbraco issue. (note:
					triggers the reload on all servers in an LB environment).
				</p>
				<uui-button
					type="button"
					look="primary"
					color="danger"
					label="Reload Memory Cache"
					@click=${this._onReloadCacheHandler}
					.state=${this._buttonStateReload}>
					Reload Memory Cache
				</uui-button>
			</uui-box>

			<uui-box headline="Database Cache">
				<p>
					This button lets you rebuild the database cache, ie the content of the cmsContentNu table. Rebuilding can be
					expensive. Use it when reloading is not enough, and you think that the database cache has not been properly
					generated—which would indicate some critical Umbraco issue.
				</p>
				<uui-button
					type="button"
					look="primary"
					color="danger"
					label="Rebuild Database Cache"
					@click=${this._onRebuildCacheHandler}
					.state=${this._buttonStateRebuild}>
					Rebuild Database Cache
				</uui-button>
			</uui-box>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o.styles = [
  C,
  f`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-box + uui-box {
				margin-top: var(--uui-size-space-5);
			}
			uui-box p:first-child {
				margin-block-start: 0;
			}
		`
];
c([
  m()
], o.prototype, "_buttonStateReload", 2);
c([
  m()
], o.prototype, "_buttonStateRebuild", 2);
o = c([
  R("umb-dashboard-published-status")
], o);
const k = o;
export {
  o as UmbDashboardPublishedStatusElement,
  k as default
};
//# sourceMappingURL=dashboard-published-status.element-C28KVpb9.js.map
