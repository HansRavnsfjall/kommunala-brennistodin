import { html as p, css as b, state as y, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { b as P, P as o, U as C } from "./index-DFDZ_Jke.js";
import { UMB_MODAL_MANAGER_CONTEXT as U } from "@umbraco-cms/backoffice/modal";
var w = Object.defineProperty, x = Object.getOwnPropertyDescriptor, S = (t) => {
  throw TypeError(t);
}, h = (t, e, i, n) => {
  for (var s = n > 1 ? void 0 : n ? x(e, i) : e, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (s = (n ? l(e, i, s) : l(s)) || s);
  return n && s && w(e, i, s), s;
}, m = (t, e, i) => e.has(t) || S("Cannot " + i), g = (t, e, i) => (m(t, e, "read from private field"), i ? i.call(t) : e.get(t)), v = (t, e, i) => e.has(t) ? S("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i) => (m(t, e, "access private method"), i), c, a, d;
let r = class extends f {
  constructor() {
    super(), v(this, a), this._selectedEntities = [], v(this, c, (t) => {
      this._selectedEntities = t.detail;
    }), this.consumeContext(P, (t) => {
      t && this.observe(t.data, (e) => {
        this.data = e;
      });
    });
  }
  render() {
    return p`<umb-body-layout>
			<uui-box headline="Sync this server">
				<div slot="header">
					<small
						>Choose what elements of this server to sync with your current site.</small
					>
				</div>

				<div>
					<usync-publisher-server-sync-list
						@update-selected-entities=${g(this, c)}></usync-publisher-server-sync-list>
				</div>
			</uui-box>

			${this.renderButtons()}
		</umb-body-layout> `;
  }
  renderButtons() {
    return p`
			<div class="action-buttons">
				<div>
					<uui-button
						type="button"
						look="primary"
						color="positive"
						label="Pull"
						@click=${() => _(this, a, d).call(this, o.PULL)}>
						<uui-icon name="icon-arrow-left"></uui-icon> Pull
					</uui-button>
				</div>
				<div>
					<uui-button
						type="button"
						look="primary"
						color="positive"
						class="right"
						label="Push"
						@click=${() => _(this, a, d).call(this, o.PUSH)}>
						Push <uui-icon name="icon-arrow-right"></uui-icon
					></uui-button>
				</div>
			</div>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
d = async function(t) {
  const e = await this.getContext(U);
  if (!e) return;
  const i = this._selectedEntities[0].split("/")[2], n = t == o.PUSH ? o.SETTINGS_PUSH : o.SETTINGS_PULL;
  (await e.open(
    this,
    C,
    {
      data: {
        server: this.data,
        action: n,
        // @ts-expect-error - udis are strings in this instance its ok.
        items: this._selectedEntities,
        entityType: i,
        mode: n
      }
    }
  )).onSubmit().catch(() => {
  });
};
r.styles = b`
		.action-buttons {
			display: flex;
			padding: var(--uui-size-3) 0;
			justify-content: space-between;
			gap: 20px;
		}

		uui-button {
			text-align: left;
		}

		uui-button.right {
			text-align: right;
		}
	`;
h([
  y()
], r.prototype, "data", 2);
h([
  y()
], r.prototype, "_selectedEntities", 2);
r = h([
  E("usync-publisher-server-sync")
], r);
const N = r;
export {
  N as default,
  r as uSyncPublisherServerSyncElement
};
//# sourceMappingURL=server-item-sync.element-BwSJwgj2.js.map
