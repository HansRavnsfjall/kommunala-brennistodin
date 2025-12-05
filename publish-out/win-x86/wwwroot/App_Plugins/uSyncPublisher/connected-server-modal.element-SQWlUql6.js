import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
import { html as c, state as h, customElement as f } from "@umbraco-cms/backoffice/external/lit";
var S = Object.defineProperty, y = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, d = (e, r, t, s) => {
  for (var n = s > 1 ? void 0 : s ? y(r, t) : r, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (s ? o(r, t, n) : o(n)) || n);
  return s && n && S(r, t, n), n;
}, $ = (e, r, t) => r.has(e) || p("Cannot " + t), C = (e, r, t) => r.has(e) ? p("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), u = (e, r, t) => ($(e, r, "access private method"), t), l, v, m, _;
let i = class extends b {
  constructor() {
    super(...arguments), C(this, l), this.picked = !1;
  }
  render() {
    return c`
			<umb-body-layout .headline=${this.localize.term("usyncpublish_pickServer")}>
				${this.renderPicker()}
				<div slot="actions">${this.renderActions()}</div>
			</umb-body-layout>
		`;
  }
  renderPicker() {
    return c`
			<usync-publisher-server-picker
				.performCheck=${!1}
				.showAll=${!0}
				@server-selected=${u(this, l, _)}></usync-publisher-server-picker>
		`;
  }
  renderActions() {
    return c`
			<uui-button
				id="cancel"
				.label=${this.localize.term("general_cancel")}
				@click=${u(this, l, v)}></uui-button>
			<uui-button
				id="submit"
				.label=${this.localize.term("general_submit")}
				look="primary"
				color="positive"
				.disabled=${this.allowedServer == null}
				@click=${u(this, l, m)}></uui-button>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
v = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
m = function() {
  var e;
  this.value = { allowedServer: this.allowedServer }, (e = this.modalContext) == null || e.submit();
};
_ = function(e) {
  e.detail && (this.allowedServer = {
    name: e.detail.name,
    alias: e.detail.alias,
    icon: e.detail.icon,
    pull: !0,
    push: !0
  });
};
d([
  h()
], i.prototype, "picked", 2);
d([
  h()
], i.prototype, "allowedServer", 2);
i = d([
  f("usync-publisher-connected-server-modal")
], i);
const P = i;
export {
  P as default,
  i as uSyncPublisherConnectedServerModalElement
};
//# sourceMappingURL=connected-server-modal.element-SQWlUql6.js.map
