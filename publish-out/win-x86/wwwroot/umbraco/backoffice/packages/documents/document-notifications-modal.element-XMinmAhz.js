import { UmbDocumentItemRepository as w } from "./document-item.repository-C0SbAo-7.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { UmbDocumentNotificationsRepository as M } from "./document-notifications.repository-Crs2B9Ne.js";
import { repeat as D, html as _, css as I, state as b, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as z } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
var S = Object.defineProperty, k = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, f = (t, i, e, c) => {
  for (var a = c > 1 ? void 0 : c ? k(i, e) : i, m = t.length - 1, d; m >= 0; m--)
    (d = t[m]) && (a = (c ? d(i, e, a) : d(a)) || a);
  return c && a && S(i, e, a), a;
}, p = (t, i, e) => i.has(t) || v("Cannot " + e), s = (t, i, e) => (p(t, i, "read from private field"), i.get(t)), h = (t, i, e) => i.has(t) ? v("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), x = (t, i, e, c) => (p(t, i, "write to private field"), i.set(t, e), e), u = (t, i, e) => (p(t, i, "access private method"), e), o, l, n, y, N, g, $;
let r = class extends z {
  constructor() {
    super(...arguments), h(this, n), h(this, o), h(this, l, new M(this)), this._settings = [], this._documentName = "";
  }
  firstUpdated() {
    x(this, o, this.data?.unique), u(this, n, N).call(this), u(this, n, y).call(this);
  }
  render() {
    return _`
			<umb-body-layout headline=${this.localize.term("notifications_notifications")}>
				<uui-box .headline=${this.localize.term("notifications_editNotifications", this._documentName)}>
					${D(
      this._settings,
      (t) => t.actionId,
      (t) => {
        const i = `actions_${t.alias}`;
        let e = this.localize.term(i);
        return e === i && (e = t.alias), _`<uui-toggle
								id=${t.actionId}
								@change=${() => u(this, n, $).call(this, t.actionId)}
								.label=${e}
								?checked=${t.subscribed}></uui-toggle>`;
      }
    )}
				</uui-box>
				<umb-footer-layout slot="footer">
					<uui-button
						slot="actions"
						look="secondary"
						label=${this.localize.term("general_cancel")}
						@click=${this._rejectModal}></uui-button>
					<uui-button
						slot="actions"
						look="primary"
						color="positive"
						label=${this.localize.term("buttons_save")}
						@click=${u(this, n, g)}></uui-button>
				</umb-footer-layout>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
y = async function() {
  if (!s(this, o)) return;
  const { data: t } = await new w(this).requestItems([s(this, o)]);
  if (!t) return;
  const i = t[0];
  this._documentName = i.variants[0]?.name;
};
N = async function() {
  if (!s(this, o)) return;
  const { data: t } = await s(this, l).readNotifications(s(this, o));
  t && (this._settings = t);
};
g = async function() {
  if (!s(this, o)) return;
  const t = this._settings.filter((e) => e.subscribed).map((e) => e.actionId), { error: i } = await s(this, l).updateNotifications(
    s(this, o),
    this._documentName,
    {
      subscribedActionIds: t
    }
  );
  i || this._submitModal();
};
$ = async function(t) {
  this._settings = this._settings.map((i) => {
    if (i.actionId === t) {
      const e = !i.subscribed;
      return { ...i, subscribed: e };
    }
    return i;
  });
};
r.styles = [
  E,
  I`
			uui-toggle {
				display: block;
			}
		`
];
f([
  b()
], r.prototype, "_settings", 2);
f([
  b()
], r.prototype, "_documentName", 2);
r = f([
  U("umb-document-notifications-modal")
], r);
const G = r;
export {
  r as UmbDocumentNotificationsModalElement,
  G as default
};
//# sourceMappingURL=document-notifications-modal.element-XMinmAhz.js.map
