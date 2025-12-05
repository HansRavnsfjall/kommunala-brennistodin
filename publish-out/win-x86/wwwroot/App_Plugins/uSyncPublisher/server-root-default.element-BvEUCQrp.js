import { html as u, css as T, state as _, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as O, UMB_MODAL_MANAGER_CONTEXT as P } from "@umbraco-cms/backoffice/modal";
import { USYNC_PUBLISHER_SETTINGS_CONTEXT as w } from "./settings.context-DF4xXEoj.js";
import { k as M, a as $, l as f, b as I, u as D } from "./index-DFDZ_Jke.js";
import { UmbModalRouteRegistrationController as L } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as k } from "@umbraco-cms/backoffice/workspace";
import { UMB_NOTIFICATION_CONTEXT as x } from "@umbraco-cms/backoffice/notification";
const B = new O(M, {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var Y = Object.defineProperty, z = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, v = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? z(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (s = (i ? p(t, r, s) : p(s)) || s);
  return i && s && Y(t, r, s), s;
}, m = (e, t, r) => t.has(e) || g("Cannot " + r), b = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), h = (e, t, r) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, i) => (m(e, t, "write to private field"), t.set(e, r), r), l = (e, t, r) => (m(e, t, "access private method"), r), c, d, n, E, C, R, S, U;
let a = class extends N {
  constructor() {
    super(), h(this, n), h(this, c), h(this, d), this._serverModalPath = "", this.consumeContext(w, (e) => {
      e && (this.observe(e.settings, (t) => {
        this.settings = t;
      }), e.getSettings());
    }), this.consumeContext($, (e) => {
      e && (this.observe(e.allServers, (t) => {
        this.servers = t;
      }), e.getAllServers());
    }), this.consumeContext(P, (e) => {
      y(this, c, e);
    }), y(this, d, new L(
      this,
      k
    ).addAdditionalPath(f).onSetup(() => ({ data: { entityType: f, preset: {} } })).observeRouteBuilder((e) => {
      this._serverModalPath = e({});
    }));
  }
  render() {
    return u`
			<umb-body-layout>
				<div class="container">
					<usync-licence-notice></usync-licence-notice>${this.renderServerStatus()}
					${this.renderServerList()}
				</div>
			</umb-body-layout>
		`;
  }
  renderServerStatus() {
    var e, t, r, i;
    return u`
			<uui-box>
				<div class="current">
					<div class="current-server">
						<h4>Current server : ${(e = this.settings) == null ? void 0 : e.serverName}</h4>
						<small>
							${(t = this.settings) == null ? void 0 : t.serverUrl}
							<uui-button
								look="default"
								.compact=${!0}
								color="default"
								label="copy"
								@click=${() => {
      var s;
      return l(this, n, U).call(this, (s = this.settings) == null ? void 0 : s.serverUrl);
    }}>
								<uui-icon name="icon-documents"></uui-icon>
							</uui-button>
							<uui-button
								look="default"
								color="positive"
								type="button"
								.compact=${!0}
								label="Add this"
								@click=${l(this, n, E)}
								>Add this server</uui-button
							></small
						>
					</div>

					<div class="server-status">
						<div>
							${this.renderOptionIcon((r = this.settings) == null ? void 0 : r.incomingEnabled)}
							<umb-localize key="usyncpublish_incoming">Incoming</umb-localize>
						</div>
						<div>
							${this.renderOptionIcon((i = this.settings) == null ? void 0 : i.outgoingEnabled)}
							<umb-localize key="usyncpublish_outgoing">Outgoing</umb-localize>
						</div>
					</div>
				</div>
			</uui-box>
		`;
  }
  renderOptionIcon(e) {
    return e ? u`<uui-icon name="icon-check" color="positive"></uui-icon>` : u`<uui-icon name="icon-wrong" color="danger"></uui-icon>`;
  }
  renderServerList() {
    var e;
    return u`
			<usync-publisher-server-list
				.servers=${this.servers}
				.selected=${(e = this.settings) == null ? void 0 : e.serverName}
				.selectDisabled=${!0}
				@add-server=${l(this, n, C)}
				@server-selected=${l(this, n, R)}></usync-publisher-server-list>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = async function() {
  var e, t;
  await l(this, n, S).call(this, ((e = this.settings) == null ? void 0 : e.serverName) ?? "", ((t = this.settings) == null ? void 0 : t.serverUrl) ?? "");
};
C = async function() {
  await l(this, n, S).call(this, "", "");
};
R = async function(e) {
  b(this, d).open({ alias: e.detail.key }, "edit/" + e.detail.key);
};
S = async function(e = "", t = "") {
  var o;
  const r = (o = b(this, c)) == null ? void 0 : o.open(
    this,
    B,
    { data: { serverName: e, serverUrl: t } }
  ), i = await (r == null ? void 0 : r.onSubmit().catch(() => !1)), s = await this.getContext(I);
  await (s == null ? void 0 : s.load(D.emptyGuid));
};
U = async function(e) {
  if (!navigator.clipboard) return;
  await navigator.clipboard.writeText(e ?? "");
  const t = await this.getContext(x);
  t && t.peek("positive", {
    data: { headline: "Copied", message: `Server URL (${e}) Copied to clipboard` }
  });
};
a.styles = T`
		.container {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
			margin-top: calc(var(--uui-size-space-4) * -1);
		}

		usync-publisher-server-list {
			display: block;
		}

		.current {
			display: flex;
			justify-content: space-between;
		}

		.current-server h4 {
			margin: 0;
			padding: 0;
		}

		.server-status,
		.server-status > div {
			display: flex;
			align-items: center;
		}

		.server-status > div {
			padding: 10px;
		}

		.server-status uui-icon {
			color: green;
			margin: 0 10px;
		}
	`;
v([
  _()
], a.prototype, "settings", 2);
v([
  _()
], a.prototype, "servers", 2);
v([
  _()
], a.prototype, "_serverModalPath", 2);
a = v([
  A("usync-publisher-server-root-default")
], a);
const J = a;
export {
  J as default,
  a as uSyncPublisherServerRootDefault
};
//# sourceMappingURL=server-root-default.element-BvEUCQrp.js.map
