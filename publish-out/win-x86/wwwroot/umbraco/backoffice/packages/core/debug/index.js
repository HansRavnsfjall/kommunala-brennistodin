import { UMB_DEBUG_CONTEXT_EVENT_TYPE as b, contextData as g, UmbContextDebugRequest as $ } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as O } from "@umbraco-cms/backoffice/class-api";
import { U } from "../modal-token-wEQqBBXI.js";
import { css as P, property as f, state as _, customElement as w, nothing as M, html as s, when as T, map as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as B } from "@umbraco-cms/backoffice/modal";
import { m as V } from "../manifests-CdGHZqd2.js";
class q extends O {
  constructor(e) {
    super(e);
  }
  hostConnected() {
    super.hostConnected(), this.getHostElement().addEventListener(
      b,
      this.#e
    );
  }
  #e = (e) => {
    e.callback && e.callback(e.instances);
    const n = {
      contexts: g(e.instances)
    };
    this.getHostElement().dispatchEvent(new CustomEvent("umb:debug-contexts:data", { detail: n, bubbles: !0 }));
  };
  hostDisconnected() {
    super.hostDisconnected(), this.getHostElement().removeEventListener(
      b,
      this.#e
    );
  }
}
const A = new U("Umb.Modal.ContextDebugger", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var L = Object.defineProperty, N = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, l = (t, e, n, u) => {
  for (var a = u > 1 ? void 0 : u ? N(e, n) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (a = (u ? d(e, n, a) : d(a)) || a);
  return u && a && L(e, n, a), a;
}, G = (t, e, n) => e.has(t) || v("Cannot " + n), z = (t, e, n) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), o = (t, e, n) => (G(t, e, "access private method"), n), i, p, y, x, E, C, h, D;
let r = class extends k {
  constructor() {
    super(), z(this, i), this.visible = !1, this.dialog = !1, this._contexts = /* @__PURE__ */ new Map(), this._debugPaneOpen = !1, this.consumeContext(B, (t) => {
      this._modalContext = t;
    });
  }
  render() {
    return this.visible ? this.dialog ? o(this, i, E).call(this) : o(this, i, C).call(this) : M;
  }
};
i = /* @__PURE__ */ new WeakSet();
p = function() {
  this.dispatchEvent(
    new $((t) => {
      this._contexts = t;
    })
  );
};
y = function() {
  this._debugPaneOpen = !this._debugPaneOpen, this._debugPaneOpen && o(this, i, p).call(this);
};
x = function() {
  o(this, i, p).call(this), this._modalContext?.open(this, A, {
    data: {
      content: o(this, i, h).call(this)
    }
  });
};
E = function() {
  return s`
			<div>
				<uui-badge color="danger" look="primary" @click=${o(this, i, x)}>
					<uui-icon name="icon-bug"></uui-icon>
					<span>Debug</span>
				</uui-badge>
			</div>
		`;
};
C = function() {
  return s`
			<div id="container">
				<uui-button color="danger" look="primary" @click=${o(this, i, y)}>
					<uui-icon name="icon-bug"></uui-icon>
					<span>Debug</span>
				</uui-button>
				${T(this._debugPaneOpen, () => o(this, i, h).call(this))}
			</div>
		`;
};
h = function() {
  const t = g(this._contexts);
  return s`<div class="events">
			${m(t, (e) => s`
					<details>
						<summary><strong>${e.alias}</strong></summary>
						${o(this, i, D).call(this, e.data)}
					</details>
				`)}
		</div>`;
};
D = function(t) {
  switch (t.type) {
    case "function":
      return s`<h3>Callable Function</h3>`;
    case "object":
      return s`
					<details>
						<summary>Methods</summary>
						<ul>
							${m(t.methods, (e) => s`<li>${e}</li>`)}
						</ul>
					</details>

					<details>
						<summary>Properties</summary>
						<ul>
							${m(t.properties, (e) => {
        switch (e.type) {
          case "string":
          case "number":
          case "boolean":
          case "object":
            return s`<li>${e.key} <em>(${e.type})</em> = ${e.value}</li>`;
          default:
            return s`<li>${e.key} <em>(${e.type})</em></li>`;
        }
      })}
						</ul>
					</details>
				`;
    case "primitive":
      return s`<p>Context is a primitive with value: ${t.value}</p>`;
    default:
      return s`<p>Unknown type: ${t.type}</p>`;
  }
};
r.styles = [
  P`
			:host {
				float: right;
				font-family: monospace;
				position: relative;
				z-index: 10000;
			}

			#container {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
			}

			uui-badge {
				cursor: pointer;
				gap: 0.5rem;
			}

			uui-icon {
				font-size: 15px;
			}

			.events {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-selected-contrast);
				padding: 1rem;
			}

			summary {
				cursor: pointer;
			}

			details > details {
				margin-left: 1rem;
			}

			ul {
				margin-top: 0;
			}
		`
];
l([
  f({ type: Boolean })
], r.prototype, "visible", 2);
l([
  f({ type: Boolean })
], r.prototype, "dialog", 2);
l([
  _()
], r.prototype, "_contexts", 2);
l([
  _()
], r.prototype, "_debugPaneOpen", 2);
r = l([
  w("umb-debug")
], r);
export {
  A as UMB_CONTEXT_DEBUGGER_MODAL,
  q as UmbContextDebugController,
  r as UmbDebugElement,
  V as manifests
};
//# sourceMappingURL=index.js.map
