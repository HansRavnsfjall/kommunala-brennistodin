import { UmbModalBaseElement as U } from "@umbraco-cms/backoffice/modal";
import { html as n, nothing as v, css as w, state as o, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { a as T, u as E } from "./index-DFDZ_Jke.js";
var N = Object.defineProperty, P = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, l = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? P(t, r) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (a = (i ? p(t, r, a) : p(a)) || a);
  return i && a && N(t, r, a), a;
}, b = (e, t, r) => t.has(e) || f("Cannot " + r), m = (e, t, r) => (b(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), V = (e, t, r, i) => (b(e, t, "write to private field"), t.set(e, r), r), d = (e, t, r) => (b(e, t, "access private method"), r), c, u, _, S, $, x, g, C;
let s = class extends U {
  constructor() {
    super(), y(this, u), y(this, c), this.serverName = "", this.serverUrl = "", this.serverValid = !1, this.templateValid = !1, this.ready = !1, this.consumeContext(T, (e) => {
      V(this, c, e);
    });
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), this.serverUrl = ((e = this.data) == null ? void 0 : e.serverUrl) ?? "blank";
  }
  render() {
    return n`
			<umb-body-layout headline="Add server">
				${this.renderServerBox()} ${this.renderResult()} ${this.renderTemplates()}
				<div slot="actions">${this.renderActions()}</div>
			</umb-body-layout>
		`;
  }
  renderServerBox() {
    return n` <uui-box headline="Add a new server">
			<umb-property-layout
				label="Name"
				alias="name"
				orientation="vertical"
				description="Name of the server">
				<div slot="editor">
					<uui-input
						label="name"
						.disabled=${this.buttonState == "waiting"}
						.value=${this.serverName}
						@input=${d(this, u, $)}></uui-input>
				</div>
			</umb-property-layout>

			<umb-property-layout
				label="URL"
				alias="url"
				orientation="vertical"
				description="URL of the server to connect to.">
				<div slot="editor">
					<uui-input
						label="url"
						.disabled=${this.buttonState == "waiting"}
						.value=${this.serverUrl}
						@input=${d(this, u, x)}></uui-input>
				</div>
			</umb-property-layout>

			<div class="buttons">
				<uui-button
					color="positive"
					look="primary"
					label="Check"
					.state=${this.buttonState}
					.disabled=${this.serverUrl.length == 0 || this.serverName.length == 0}
					@click=${d(this, u, C)}></uui-button>
			</div>
		</uui-box>`;
  }
  renderResult() {
    return this.result == null ? v : n`
					<uui-box class="result_${this.result.enabled ? "success" : "fail"}">
						<div>
							<h4>${this.result.status}</h4>
							<small>${this.result.message}</small>
						</div>
					</uui-box>
					${this.renderContinue()}
				`;
  }
  renderContinue() {
    return this.serverValid == !0 ? v : n`<uui-box>
					You can still set this server up, and resolve the connection issues later.
				</uui-box>`;
  }
  renderTemplates() {
    return this.ready == !1 ? v : n` <uui-box headline="Select a template">
					<usync-publisher-template-list
						.templates=${this.templates}
						@template-selected=${d(this, u, g)}></usync-publisher-template-list>
				</uui-box>`;
  }
  renderActions() {
    return n` <uui-button id="cancel" label="Cancel" @click="${d(this, u, S)}"
				>Cancel</uui-button
			>
			<uui-button
				id="submit"
				color="positive"
				look="primary"
				label="Submit"
				.disabled=${this.ready == !1}
				@click=${d(this, u, _)}></uui-button>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
_ = async function() {
  var t, r, i, a;
  const e = {
    key: E.emptyGuid,
    id: "-1",
    name: this.serverName,
    sortOrder: 0,
    enabled: !0,
    pullEnabled: !0,
    alias: this.serverName,
    icon: "__blank__",
    description: "a new server",
    url: this.serverUrl,
    sendSettings: (t = this.selectedTemplate) == null ? void 0 : t.flags,
    publisherSettings: {},
    publisher: ((r = this.selectedTemplate) == null ? void 0 : r.publisher) ?? "",
    baseUrl: "",
    allowedServers: [],
    publisherConfig: "",
    userGroups: []
  };
  await ((i = m(this, c)) == null ? void 0 : i.saveServer(e)), (a = this.modalContext) == null || a.submit();
};
S = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
$ = function(e) {
  const t = e.target.value;
  this.serverName = t;
};
x = function(e) {
  const t = e.target.value;
  this.serverUrl = t;
};
g = function(e) {
  this.selectedTemplate = e.detail, this.selectedTemplate != null && (this.templateValid = !0, this.ready = !0);
};
C = async function() {
  var t, r, i;
  this.result = void 0, this.buttonState = "waiting", this.serverValid = !1, this.ready = !1;
  const e = await ((t = m(this, c)) == null ? void 0 : t.checkServerUrl(this.serverUrl));
  this.result = e, this.buttonState = e != null && e.enabled ? "success" : "failed", this.serverValid = (e == null ? void 0 : e.enabled) ?? !1, this.templates = await ((r = m(this, c)) == null ? void 0 : r.getTemplates()), this.selectedTemplate = (i = this.templates) == null ? void 0 : i[0], this.ready = !0;
};
s.styles = w`

        uui-box {
            margin-bottom: 10px;
        }

        uui-box h4 { 
            margin: 0;
        }

        uui-box.result_success {
            background-color: var(--uui-color-positive);
            color: var(--uui-color-positive-contrast);
        }

        uui-box.result_fail{
            background-color: var(--uui-color-danger);
            color: var(--uui-color-danger-contrast);
        }

        uui-input { 
            width: 100%;
        }

        .buttons {
            display: flex;
            justify-content: center;
        }

        .
    `;
l([
  o()
], s.prototype, "serverName", 2);
l([
  o()
], s.prototype, "serverUrl", 2);
l([
  o()
], s.prototype, "serverValid", 2);
l([
  o()
], s.prototype, "templateValid", 2);
l([
  o()
], s.prototype, "ready", 2);
l([
  o()
], s.prototype, "buttonState", 2);
l([
  o()
], s.prototype, "result", 2);
l([
  o()
], s.prototype, "templates", 2);
l([
  o()
], s.prototype, "selectedTemplate", 2);
s = l([
  k("usync-publisher-add-server-modal")
], s);
const O = s;
export {
  O as default,
  s as uSyncPublisherAddServerModalElement
};
//# sourceMappingURL=add-server.modal-element-Cf-C7S1s.js.map
