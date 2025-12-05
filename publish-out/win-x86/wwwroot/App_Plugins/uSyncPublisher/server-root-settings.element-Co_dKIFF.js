import { html as c, css as b, state as f, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { b as m } from "./index-DFDZ_Jke.js";
var w = Object.defineProperty, g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, h = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? g(t, r) : t, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (s = (a ? n(t, r, s) : n(s)) || s);
  return a && s && w(t, r, s), s;
}, d = (e, t, r) => t.has(e) || v("Cannot " + r), x = (e, t, r) => (d(e, t, "read from private field"), t.get(e)), p = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, a) => (d(e, t, "write to private field"), t.set(e, r), r), C = (e, t, r) => (d(e, t, "access private method"), r), i, u, _;
let o = class extends S {
  constructor() {
    super(), p(this, u), p(this, i), this.consumeContext(m, (e) => {
      e && (E(this, i, e), this.observe(e.data, (t) => {
        this.data = t;
      }));
    });
  }
  renderDefaultBox() {
    return c`<div class="default-box">
			<umb-localize key="usyncpublish_defaultSettings"></umb-localize>
		</div>`;
  }
  render() {
    var e;
    return c`${this.renderDefaultBox()}
			<umb-body-layout>
				<uui-box .headline=${this.localize.term("usyncpublish_serverInfo")}>
					<umb-localize key="usyncpublish_defaultSettingsInfo"></umb-localize>

					<umb-property-layout
						.label=${this.localize.term("usyncpublish_connected")}
						.description=${this.localize.term("usyncpublish_connectedDesc")}>
						<div slot="editor">
							<usync-publisher-connected-servers
								.allowedServers=${(e = this.data) == null ? void 0 : e.allowedServers}
								@update-allowed-servers=${C(this, u, _)}></usync-publisher-connected-servers>
						</div> </umb-property-layout
				></uui-box>
			</umb-body-layout>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  var t;
  e.detail.allowedServers && ((t = x(this, i)) == null || t.set({ allowedServers: e.detail.allowedServers }));
};
o.styles = b`
		.default-box {
			text-align: center;
			padding: 10px;
			background-color: var(--uui-color-border);
		}
	`;
h([
  f()
], o.prototype, "data", 2);
o = h([
  y("usync-publisher-server-root-settings")
], o);
const $ = o;
export {
  $ as default,
  o as uSyncPublisherServerRootSettings
};
//# sourceMappingURL=server-root-settings.element-Co_dKIFF.js.map
