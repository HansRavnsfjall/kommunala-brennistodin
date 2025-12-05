import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { LitElement as x, html as _, css as z, state as m, customElement as D } from "@umbraco-cms/backoffice/external/lit";
import { b as C } from "./index-DFDZ_Jke.js";
var P = Object.defineProperty, O = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, y = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? O(t, s) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (a = (r ? d(t, s, a) : d(a)) || a);
  return r && a && P(t, s, a), a;
}, b = (e, t, s) => t.has(e) || f("Cannot " + s), n = (e, t, s) => (b(e, t, "read from private field"), t.get(e)), p = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), S = (e, t, s, r) => (b(e, t, "write to private field"), t.set(e, s), s), o = (e, t, s) => (b(e, t, "access private method"), s), i, c, u, w, v, $, g;
let l = class extends E(x) {
  constructor() {
    super(), p(this, u), p(this, i), p(this, c, !1), this.consumeContext(C, (e) => {
      e && (S(this, i, e), this.observe(e.data, (t) => {
        this.data = t, o(this, u, w).call(this);
      }));
    });
  }
  render() {
    var e, t, s, r;
    return _`
			<umb-body-layout>
				<uui-box .headline=${this.localize.term("usyncpublish_serverInfo")}>
					<div slot="header-actions">${this.renderStatus()}</div>
					<umb-property-layout
						.label=${this.localize.term("usyncpublish_url")}
						.description=${this.localize.term("usyncpublish_urlDesc")}>
						<div slot="editor">
							<uui-input
								label="url"
								id="url"
								.value=${(e = this.data) == null ? void 0 : e.url}
								@input=${o(this, u, v)}></uui-input>
						</div>
					</umb-property-layout>

					<umb-property-layout
						.label=${this.localize.term("usyncpublish_message")}
						.description=${this.localize.term("usyncpublish_messageDesc")}>
						<div slot="editor">
							<uui-textarea
								label="message"
								rows="5"
								id="description"
								.value=${(t = this.data) == null ? void 0 : t.description}
								@input=${o(this, u, v)}></uui-textarea>
						</div>
					</umb-property-layout>

					<umb-property-layout
						.label=${this.localize.term("usyncpublish_connected")}
						.description=${this.localize.term("usyncpublish_connectedDesc")}>
						<div slot="editor">
							<usync-publisher-connected-servers
								.allowedServers=${(s = this.data) == null ? void 0 : s.allowedServers}
								@update-allowed-servers=${o(this, u, $)}></usync-publisher-connected-servers>
						</div>
					</umb-property-layout>
				</uui-box>

				<uui-box .headline=${this.localize.term("usyncpublish_syncSettings")}>
					<umb-localize key="usyncpublish_syncSettingsDesc"></umb-localize>

					<usync-publisher-server-sync-settings
						.settings=${(r = this.data) == null ? void 0 : r.sendSettings}
						@usync-publisher-server-update-sync=${o(this, u, g)}></usync-publisher-server-sync-settings>
				</uui-box>
			</umb-body-layout>
		`;
  }
  renderStatus() {
    return _`<usync-publisher-server-status
			.status=${this.lastKnownStatus}
			.showStatus=${!0}></usync-publisher-server-status>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
w = async function() {
  if (n(this, c)) return this.lastKnownStatus;
  if (!n(this, i) || !this.data) return;
  S(this, c, !0);
  const e = await n(this, i).checkServer(this.data.alias);
  this.lastKnownStatus = e;
};
v = function(e) {
  var s;
  const t = e.target;
  t && ((s = n(this, i)) == null || s.set({ [t.id]: t.value }));
};
$ = function(e) {
  var t;
  e.detail.allowedServers && ((t = n(this, i)) == null || t.set({ allowedServers: e.detail.allowedServers }));
};
g = function(e) {
  var t;
  e.detail && ((t = n(this, i)) == null || t.set({ sendSettings: e.detail }));
};
l.styles = z`
		uui-box {
			margin-bottom: 10px;
		}

		uui-input {
			width: 100%;
		}
	`;
y([
  m()
], l.prototype, "lastKnownStatus", 2);
y([
  m()
], l.prototype, "data", 2);
l = y([
  D("usync-publisher-server-default-view")
], l);
const M = l;
export {
  M as default,
  l as uSyncPublisherServerDefaultElement
};
//# sourceMappingURL=server-item-default.element-Bf7UM__L.js.map
