import { ProcessStepElementBase as C, JUMOO_PROCESSING_CONTEXT as T } from "@jumoo/processing";
import { P as v, S as w } from "./index-DFDZ_Jke.js";
import { html as m, nothing as f, css as E, state as u, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { USYNC_PUBLISHER_STRATEGY_CONTEXT as U } from "./strategy.context-Nd7v-g-Q.js";
var $ = Object.defineProperty, I = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, h = (e, t, s, i) => {
  for (var p = i > 1 ? void 0 : i ? I(t, s) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (p = (i ? c(t, s, p) : c(p)) || p);
  return i && p && $(t, s, p), p;
}, _ = (e, t, s) => t.has(e) || g("Cannot " + s), r = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), y = (e, t, s) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), S = (e, t, s, i) => (_(e, t, "write to private field"), t.set(e, s), s), O = (e, t, s) => (_(e, t, "access private method"), s), n, a, d, b, P;
let o = class extends C {
  constructor() {
    super(), y(this, d), y(this, n), y(this, a), this.mode = v.PUSH, this.entityType = "", this.primaryItem = "", this.consumeContext(U, (e) => {
      S(this, a, e);
    }), this.consumeContext(T, (e) => {
      e && (S(this, n, e), this.observe(r(this, n).options, (t) => {
        if (!t) return;
        const s = t;
        this.primaryItem = s.items[0].udi, this.entityType = s.items[0].entityType, this.mode = s.mode;
      }), this.observe(r(this, n).pending, (t) => {
        t && (this.publisherOptions = t.publisherOptions);
      }));
    });
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.options;
    e.server && this._getServer(e.server);
  }
  async _getServer(e) {
    var s;
    const t = await ((s = r(this, a)) == null ? void 0 : s.getServer(e));
    t && (this.server = t, await this._setupServer(t));
  }
  async _setupServer(e) {
    var t, s, i;
    this.sendOptions = await ((t = r(this, a)) == null ? void 0 : t.getSyncSendOptionsByMode(
      e.alias,
      this.mode,
      this.entityType
    )), (s = r(this, n)) == null || s.setPending({ server: e.alias }), this.sendOptions && this._updateSendOptions(this.sendOptions), (i = r(this, n)) == null || i.setValid(!0);
  }
  _dispatchServerChange(e) {
    this.dispatchEvent(
      new CustomEvent("usync-server-update", {
        bubbles: !0,
        composed: !0,
        detail: e
      })
    );
  }
  _updateSendOptions(e) {
    var i;
    if (!r(this, a)) return;
    const t = structuredClone(this.options), s = t.publisherOptions ? r(this, a).mergeToPublisherOptions(
      t.publisherOptions,
      e
    ) : e;
    (i = r(this, n)) == null || i.setPending({ publisherOptions: s });
  }
  render() {
    return m`<div class="config">
			${this.renderOptionsBox()} ${this.renderDeleteWarning()}
		</div>`;
  }
  renderDeleteWarning() {
    var e;
    return !this.mode || !this.publisherOptions ? f : ((e = this.publisherOptions) == null ? void 0 : e.removeOrphans) === !1 || this.mode !== v.SETTINGS_PULL && this.mode !== v.SETTINGS_PUSH ? f : m`<div class="warning">
			<umb-localize key="usyncpublish_deleteWarning"></umb-localize>
		</div>`;
  }
  renderOptionsBox() {
    var e;
    return m`<usync-publisher-sync-options
			.settings=${this.sendOptions}
			.publisherSettings=${(e = this.server) == null ? void 0 : e.publisherSettings}
			.showAdvanced=${!1}
			.canBeScheduled=${this.entityType === "document"}
			@update-settings=${O(this, d, P)}
			@update-release-date=${O(this, d, b)}></usync-publisher-sync-options>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
b = function(e) {
  var s;
  if (!e.detail) return;
  const t = structuredClone(this.options);
  t.custom || (t.custom = {}), t.custom.releaseDate = e.detail, (s = r(this, n)) == null || s.setPending({ custom: t.custom });
};
P = function(e) {
  e.detail && this._updateSendOptions(e.detail);
};
o.styles = E`
		.config {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.warning {
			padding: 10px;
			background-color: var(--uui-color-warning-emphasis);
			color: var(--uui-color-warning-text);
			border: 1px solid var(--uui-color-warning-border);
			border-radius: var(--uui-border-radius);
		}
	`;
h([
  u()
], o.prototype, "mode", 2);
h([
  u()
], o.prototype, "entityType", 2);
h([
  u()
], o.prototype, "primaryItem", 2);
h([
  u()
], o.prototype, "sendOptions", 2);
h([
  u()
], o.prototype, "server", 2);
h([
  u()
], o.prototype, "publisherOptions", 2);
o = h([
  x(w.elements.config)
], o);
export {
  o as default
};
//# sourceMappingURL=config-step.element-BdwVM2kj.js.map
