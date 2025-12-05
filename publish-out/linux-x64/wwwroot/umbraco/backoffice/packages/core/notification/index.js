import { css as O, property as f, customElement as _, LitElement as g, ifDefined as p, html as s, nothing as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as N } from "@umbraco-cms/backoffice/style";
import { UmbId as x } from "@umbraco-cms/backoffice/id";
import { UmbContextToken as P } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as L, UmbControllerBase as A } from "@umbraco-cms/backoffice/class-api";
import { UmbBasicState as D } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as k, UMB_ERROR_VIEWER_MODAL as M } from "@umbraco-cms/backoffice/modal";
var R = Object.defineProperty, S = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, m = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? S(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (a ? n(t, i, o) : n(o)) || o);
  return a && o && R(t, i, o), o;
}, B = (e, t, i) => t.has(e) || v("Cannot " + i), I = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i) => (B(e, t, "access private method"), i), u, C, E;
let l = class extends g {
  constructor() {
    super(...arguments), I(this, u);
  }
  render() {
    return s`
			<uui-toast-notification-layout id="layout" headline="${p(this.data.headline)}" class="uui-text">
				<div id="message">${this.data.message}</div>
				${y(this, u, C).call(this, this.data.structuredList)}
			</uui-toast-notification-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
C = function(e) {
  return this.data.structuredList ? typeof e != "object" || e === null ? c : s`${Object.entries(e).map(
    ([t, i]) => s`<div class="structured-list">
					<p>${t}:</p>
					<ul>
						${y(this, u, E).call(this, i)}
					</ul>
				</div>`
  )}` : c;
};
E = function(e) {
  return Array.isArray(e) ? e.map((t) => s`<li>${t}</li>`) : s`<li>${e}</li>`;
};
l.styles = [
  N,
  O`
			#message {
				white-space: pre-line;
			}
			.structured-list ul {
				margin: 0;
			}
			.structured-list p {
				margin: var(--uui-size-3) 0 var(--uui-size-1);
			}
		`
];
m([
  f({ attribute: !1 })
], l.prototype, "notificationHandler", 2);
m([
  f({ type: Object })
], l.prototype, "data", 2);
l = m([
  _("umb-notification-layout-default")
], l);
const V = "umb-notification-layout-default";
class W {
  /**
   * Creates an instance of UmbNotificationHandler.
   * @param {UmbNotificationOptions} options
   * @memberof UmbNotificationHandler
   */
  constructor(t) {
    this._defaultColor = "default", this._defaultDuration = 6e3, this.key = x.new(), this.color = t.color || this._defaultColor, this.duration = t.duration !== void 0 ? t.duration : this._defaultDuration, this._elementName = t.elementName || V, this._data = t.data, this._closePromise = new Promise((o) => {
      this._closeResolver = o;
    });
    const i = document.createElement("uui-toast-notification");
    i.color = this.color, i.autoClose = this.duration;
    const a = document.createElement(this._elementName);
    a.data = this._data, a.notificationHandler = this, i.appendChild(a), this.element = i;
  }
  /**
   * @param {...any} args
   * @memberof UmbNotificationHandler
   */
  close(...t) {
    this._closeResolver(...t), this.element.open = !1;
  }
  /**
   * @returns {*}
   * @memberof UmbNotificationHandler
   */
  onClose() {
    return this._closePromise;
  }
}
class it extends L {
  constructor(t) {
    super(t, b), this._notifications = new D([]), this.notifications = this._notifications.asObservable();
  }
  /**
   * @private
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}  {UmbNotificationHandler}
   * @memberof UmbNotificationContext
   */
  #t(t) {
    const i = new W(t);
    return i.element?.addEventListener("closed", () => this._handleClosed(i)), this._notifications.setValue([...this._notifications.getValue(), i]), i;
  }
  /**
   * @private
   * @param {string} key
   * @memberof UmbNotificationContext
   */
  _close(t) {
    this._notifications.setValue(this._notifications.getValue().filter((i) => i.key !== t));
  }
  /**
   * @private
   * @param notificationHandler
   * @param {string} key
   * @memberof UmbNotificationContext
   */
  _handleClosed(t) {
    t.element.removeEventListener("closed", () => this._handleClosed(t)), this._close(t.key);
  }
  /**
   * Opens a notification that automatically goes away after 6 sek.
   * @param {UmbNotificationColor} color
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}
   * @memberof UmbNotificationContext
   */
  peek(t, i) {
    return this.#t({ color: t, ...i });
  }
  /**
   * Opens a notification that stays on the screen until dismissed by the user or custom code
   * @param {UmbNotificationColor} color
   * @param {UmbNotificationOptions<UmbNotificationData>} options
   * @returns {*}
   * @memberof UmbNotificationContext
   */
  stay(t, i) {
    return this.#t({ ...i, color: t, duration: null });
  }
}
const b = new P("UmbNotificationContext");
var j = Object.defineProperty, z = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, U = (e, t, i, a) => {
  for (var o = a > 1 ? void 0 : a ? z(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (a ? n(t, i, o) : n(o)) || o);
  return a && o && j(t, i, o), o;
}, H = (e, t, i) => t.has(e) || w("Cannot " + i), F = (e, t, i) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), X = (e, t, i) => (H(e, t, "access private method"), i), d, $;
let h = class extends T {
  constructor() {
    super(...arguments), F(this, d);
  }
  render() {
    return this.data ? s`<uui-toast-notification-layout headline=${p(this.data.headline)}
					>${this.data.message}${this.data.details ? s`<uui-button
								slot="actions"
								look="primary"
								color="danger"
								label=${this.localize.term("defaultdialogs_seeErrorAction")}
								@click=${X(this, d, $)}></uui-button>` : c}</uui-toast-notification-layout
				>` : c;
  }
};
d = /* @__PURE__ */ new WeakSet();
$ = async function() {
  const e = await this.getContext(k);
  if (!e)
    throw new Error("Modal manager not found.");
  e.open(this, M, { data: this.data?.details }), this.notificationHandler.close();
};
U([
  f({ attribute: !1 })
], h.prototype, "data", 2);
h = U([
  _("umb-peek-error-notification")
], h);
class G extends A {
  async open(t) {
    const i = await this.getContext(b);
    if (!i)
      throw new Error("Could not get notification context");
    i.peek(t.color ?? "danger", {
      elementName: "umb-peek-error-notification",
      data: t
    }), this.destroy();
  }
}
function ot(e, t) {
  return new G(e).open(t);
}
export {
  b as UMB_NOTIFICATION_CONTEXT,
  it as UmbNotificationContext,
  W as UmbNotificationHandler,
  G as UmbPeekErrorController,
  ot as umbPeekError
};
//# sourceMappingURL=index.js.map
