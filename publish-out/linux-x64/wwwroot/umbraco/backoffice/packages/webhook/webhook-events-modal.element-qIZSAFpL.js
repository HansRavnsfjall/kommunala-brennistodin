import { UmbWebhookEventRepository as M } from "./webhook-event.repository-CXKH-T2N.js";
import { repeat as g, html as p, state as W, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionManager as x } from "@umbraco-cms/backoffice/utils";
var U = Object.defineProperty, O = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, f = (e, t, s, a) => {
  for (var l = a > 1 ? void 0 : a ? O(t, s) : t, v = e.length - 1, d; v >= 0; v--)
    (d = e[v]) && (l = (a ? d(t, s, l) : d(l)) || l);
  return a && l && U(t, s, l), l;
}, _ = (e, t, s) => t.has(e) || b("Cannot " + s), i = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), u = (e, t, s) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), P = (e, t, s, a) => (_(e, t, "write to private field"), t.set(e, s), s), r = (e, t, s) => (_(e, t, "access private method"), s), m, n, c, o, E, w, y, k, $;
let h = class extends S {
  constructor() {
    super(...arguments), u(this, o), this._events = [], u(this, m, new M(this)), u(this, n, new x(this)), u(this, c);
  }
  connectedCallback() {
    super.connectedCallback(), i(this, n).setSelectable(!0), i(this, n).setMultiple(!0), i(this, n).setSelection(this.data?.events.map((e) => e.alias) ?? []), r(this, o, w).call(this), r(this, o, E).call(this);
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("webhooks_selectEvents")}>
				<uui-box>
					${g(
      this._events,
      (e) => e.alias,
      (e) => p`
							<uui-menu-item
								label=${e.eventName}
								?disabled=${r(this, o, $).call(this, e)}
								selectable
								@selected=${() => i(this, n).select(e.alias)}
								@deselected=${() => i(this, n).deselect(e.alias)}
								?selected=${this.value.events.includes(e)}>
								<uui-icon slot="icon" name="icon-globe"></uui-icon>
							</uui-menu-item>
						`
    )}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${r(this, o, k)}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${r(this, o, y)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
E = async function() {
  await i(this, c), this.observe(i(this, n).selection, (e) => {
    this.value = { events: this._events.filter((t) => e.includes(t.alias)) };
  });
};
w = async function() {
  P(this, c, i(this, m).requestEvents());
  const { data: e } = await i(this, c);
  e && (this._events = e.items);
};
y = function() {
  this.modalContext?.submit();
};
k = function() {
  this.modalContext?.reject();
};
$ = function(e) {
  const t = i(this, n).getSelection();
  return t.length ? this._events.filter((a) => t.includes(a.alias))[0].eventType !== e.eventType : !1;
};
f([
  W()
], h.prototype, "_events", 2);
h = f([
  C("umb-webhook-events-modal")
], h);
const R = h;
export {
  h as UmbWebhookEventsModalElement,
  R as default
};
//# sourceMappingURL=webhook-events-modal.element-qIZSAFpL.js.map
