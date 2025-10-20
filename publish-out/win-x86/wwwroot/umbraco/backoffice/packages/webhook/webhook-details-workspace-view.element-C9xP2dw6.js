import { h as ee } from "./paths-CYf6P2Vl.js";
import { css as E, property as A, state as g, customElement as C, html as s, nothing as m, repeat as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import "@umbraco-cms/backoffice/culture";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
import { U as te } from "./webhook-events-modal.token-CoEuVSMb.js";
import { UMB_MODAL_MANAGER_CONTEXT as re } from "@umbraco-cms/backoffice/modal";
var ie = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, $ = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? oe(t, r) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (i = (o ? a(t, r, i) : a(i)) || i);
  return o && i && ie(t, r, i), i;
}, S = (e, t, r) => t.has(e) || M("Cannot " + r), se = (e, t, r) => (S(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ne = (e, t, r) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), p = (e, t, r) => (S(e, t, "access private method"), r), l, H, N, I, w, L, R, V;
let b = class extends z {
  constructor() {
    super(...arguments), ne(this, l), this.headers = {}, this._headers = [], this._headerNames = ["Accept", "Content-Length", "Content-Type", "User-Agent"];
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.headers && (this._headers = Object.entries(this.headers).map(([t, r]) => ({ name: t, value: r })));
  }
  updated(e) {
    super.updated(e), e.has("_headers") && (this.headers = this._headers.reduce(
      (t, r) => (t[r.name] = r.value, t),
      {}
    ), this.dispatchEvent(new O()));
  }
  render() {
    return s`
			${p(this, l, R).call(this)}
			<uui-button id="add" look="placeholder" @click=${p(this, l, N)}>Add</uui-button>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
H = function() {
  return this._headerNames.filter((e) => !this._headers.find((t) => t.name === e));
};
N = function() {
  this._headers = [...this._headers, { name: "", value: "" }], requestAnimationFrame(() => {
    const e = this.shadowRoot?.querySelectorAll('input[type="text"]');
    e?.[e.length - 2]?.focus();
  });
};
I = function(e) {
  this._headers = this._headers.filter((t, r) => r !== e);
};
w = function(e, t, r) {
  const o = e.target.value;
  this._headers[r][t] = o, this.requestUpdate("_headers");
};
L = function(e, t) {
  return s`
			<input
				type="text"
				.value=${e.name}
				@input=${(r) => p(this, l, w).call(this, r, "name", t)}
				list="nameList" />
			<input
				type="text"
				.value=${e.value}
				@input=${(r) => p(this, l, w).call(this, r, "value", t)}
				list="valueList" />
			<uui-button @click=${() => p(this, l, I).call(this, t)} label=${this.localize.term("general_remove")}></uui-button>
		`;
};
R = function() {
  return this._headers.length ? s`
			<div id="grid">${p(this, l, V).call(this)}</div>

			<datalist id="nameList">
				${T(
    se(this, l, H),
    (e) => e,
    (e) => s`<option value=${e}></option>`
  )}
			</datalist>
			<datalist id="valueList">
				<option value="application/json"></option>
			</datalist>
		` : m;
};
V = function() {
  return this._headers.length ? s`
			<span class="grid-top"><umb-localize key="general_name">Name</umb-localize></span>
			<span class="grid-top"><umb-localize key="general_value">Value</umb-localize></span>
			<span class="grid-top"></span>
			${T(
    this._headers,
    (e, t) => t,
    (e, t) => p(this, l, L).call(this, e, t)
  )}
		` : m;
};
b.styles = [
  x,
  E`
			#grid {
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				border: 1px solid var(--uui-color-border);
				margin-bottom: var(--uui-size-space-3);
				border-radius: var(--uui-border-radius);
			}

			.grid-top {
				background-color: var(--uui-color-surface-alt);
			}

			#grid > * {
				border-right: 1px solid var(--uui-color-border);
				border-bottom: 1px solid var(--uui-color-border);
			}

			#grid > *:nth-child(3) {
				border-top-right-radius: var(--uui-border-radius);
			}

			#grid > *:nth-child(1) {
				border-top-left-radius: var(--uui-border-radius);
			}

			/* Remove borders from last column */
			#grid > *:nth-child(3n) {
				border-right: none;
			}

			/* Remove borders from last row */
			#grid > *:nth-child(3n + 1):nth-last-child(-n + 3),
			#grid > *:nth-child(3n + 1):nth-last-child(-n + 3) ~ * {
				border-bottom: none;
			}

			#grid > *:not(uui-button) {
				padding: var(--uui-size-2) var(--uui-size-space-4);
			}

			uui-button {
				width: 100%;
				box-sizing: border-box;
			}

			input {
				width: 100%;
				border: none;
				font: inherit;
				color: inherit;
				display: flex;
				box-sizing: border-box;
				background-color: transparent;
			}

			input:focus,
			uui-button:focus {
				z-index: 1;
			}

			/* Remove arrow in inputs linked to a datalist */
			input[type='text']::-webkit-calendar-picker-indicator {
				display: none !important;
			}
		`
];
$([
  A()
], b.prototype, "headers", 2);
$([
  g()
], b.prototype, "_headers", 2);
$([
  g()
], b.prototype, "_headerNames", 2);
b = $([
  C("umb-input-webhook-headers")
], b);
var ae = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, q = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? ue(t, r) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (i = (o ? a(t, r, i) : a(i)) || i);
  return o && i && ae(t, r, i), i;
}, le = (e, t, r) => t.has(e) || B("Cannot " + r), he = (e, t, r) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r) => (le(e, t, "access private method"), r), _, W, G, K;
let y = class extends z {
  constructor() {
    super(), he(this, _), this.events = [], this.consumeContext(re, (e) => {
      this._modalContext = e;
    });
  }
  render() {
    return s`${f(this, _, K).call(this)}
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${f(this, _, W)}></uui-button>`;
  }
};
_ = /* @__PURE__ */ new WeakSet();
W = async function() {
  const e = this._modalContext?.open(this, te, {
    modal: { type: "sidebar" },
    data: { events: this.events }
  });
  e && (await e.onSubmit(), this.events = e.getValue().events, e.destroy(), this.dispatchEvent(new O()));
};
G = function(e) {
  this.events = this.events.filter((t) => t.alias !== e), this.dispatchEvent(new O());
};
K = function() {
  return this.events.length ? s`
			<uui-ref-list>
				${T(
    this.events,
    (e) => e.alias,
    (e) => s`
						<uui-ref-node name=${e.eventName} @open=${f(this, _, W)}>
							<umb-icon slot="icon" name="icon-globe"></umb-icon>
							<uui-action-bar slot="actions">
								<uui-button
									label=${this.localize.term("general_remove")}
									@click=${() => f(this, _, G).call(this, e.alias)}></uui-button>
							</uui-action-bar>
						</uui-ref-node>
					`
  )}
			</uui-ref-list>
		` : m;
};
y.styles = [
  x,
  E`
			#btn-add {
				display: block;
			}
		`
];
q([
  A({ attribute: !1 })
], y.prototype, "events", 2);
y = q([
  C("umb-input-webhook-events")
], y);
var de = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, X = (e) => {
  throw TypeError(e);
}, U = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? pe(t, r) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (i = (o ? a(t, r, i) : a(i)) || i);
  return o && i && de(t, r, i), i;
}, D = (e, t, r) => t.has(e) || X("Cannot " + r), c = (e, t, r) => (D(e, t, "read from private field"), t.get(e)), P = (e, t, r) => t.has(e) ? X("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ce = (e, t, r, o) => (D(e, t, "write to private field"), t.set(e, r), r), d = (e, t, r) => (D(e, t, "access private method"), r), h, u, F, J, k, Q, Y, Z, j;
let v = class extends z {
  constructor() {
    super(), P(this, u), P(this, h), this.consumeContext(ee, (e) => {
      ce(this, h, e), this.observe(c(this, h)?.data, (t) => {
        this._webhook = t, this._contentType = this._webhook?.events[0]?.eventType ?? void 0;
      });
    });
  }
  render() {
    return this._webhook ? s`
			<uui-box>
				<umb-property-layout
					mandatory
					label=${this.localize.term("webhooks_url")}
					description=${this.localize.term("webhooks_urlDescription")}>
					<uui-input @input=${d(this, u, Q)} .value=${this._webhook.url} slot="editor" required="true"></uui-input>
				</umb-property-layout>
				<umb-property-layout
					label=${this.localize.term("webhooks_events")}
					description=${this.localize.term("webhooks_eventDescription")}>
					<umb-input-webhook-events
						@change=${d(this, u, F)}
						.events=${this._webhook.events ?? []}
						slot="editor"></umb-input-webhook-events>
				</umb-property-layout>
				${d(this, u, Z).call(this)}
				<umb-property-layout
					label=${this.localize.term("webhooks_enabled")}
					description=${this.localize.term("webhooks_enabledDescription")}>
					<uui-toggle slot="editor" .checked=${this._webhook.enabled} @change=${d(this, u, Y)}></uui-toggle>
				</umb-property-layout>
				<umb-property-layout
					label=${this.localize.term("webhooks_headers")}
					description=${this.localize.term("webhooks_headersDescription")}>
					<umb-input-webhook-headers
						@change=${d(this, u, J)}
						.headers=${this._webhook.headers}
						slot="editor"></umb-input-webhook-headers>
				</umb-property-layout>
			</uui-box>
		` : m;
  }
};
h = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
F = function(e) {
  const t = e.target.events ?? [];
  t.length && t[0].eventType !== this._contentType && c(this, h)?.setTypes([]), c(this, h)?.setEvents(t);
};
J = function(e) {
  const t = e.target.headers;
  c(this, h)?.setHeaders(t);
};
k = function(e) {
  const t = e.target.selection;
  c(this, h)?.setTypes(t);
};
Q = function(e) {
  const t = e.target.value;
  typeof t == "string" && c(this, h)?.setUrl(t);
};
Y = function(e) {
  c(this, h)?.setEnabled(e.target.checked);
};
Z = function() {
  return this._contentType !== "Content" && this._contentType !== "Media" ? m : s`
			<umb-property-layout
				label=${this.localize.term("webhooks_contentType")}
				description=${this.localize.term("webhooks_contentTypeDescription")}>
				${d(this, u, j).call(this)}
			</umb-property-layout>
		`;
};
j = function() {
  switch (this._contentType) {
    case "Content":
      return s`
					<umb-input-document-type
						slot="editor"
						@change=${d(this, u, k)}
						.selection=${this._webhook?.contentTypes ?? []}
						.documentTypesOnly=${!0}></umb-input-document-type>
				`;
    case "Media":
      return s`
					<umb-input-media-type
						slot="editor"
						@change=${d(this, u, k)}
						.selection=${this._webhook?.contentTypes ?? []}></umb-input-media-type>
				`;
    default:
      return m;
  }
};
v.styles = [
  x,
  E`
			:host {
				display: block;
				padding: var(--uui-size-space-6);
			}

			uui-input {
				width: 100%;
			}

			umb-property-layout:first-child {
				padding-top: 0;
			}
			umb-property-layout:last-child {
				padding-bottom: 0;
			}
		`
];
U([
  g()
], v.prototype, "_webhook", 2);
U([
  g()
], v.prototype, "_contentType", 2);
v = U([
  C("umb-webhook-details-workspace-view")
], v);
const we = v;
export {
  v as UmbWebhookDetailsWorkspaceViewElement,
  we as default
};
//# sourceMappingURL=webhook-details-workspace-view.element-C9xP2dw6.js.map
