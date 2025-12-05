import { html as p, css as _, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { i as v, j as E, b as S } from "./index-DFDZ_Jke.js";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as f, UMB_MODAL_MANAGER_CONTEXT as w } from "@umbraco-cms/backoffice/modal";
const C = new f(v, {
  modal: {
    type: "dialog",
    size: "small"
  }
});
var b = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, R = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? b(t, r) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = c(a) || a);
  return a;
}, g = (e, t, r) => t.has(e) || h("Cannot " + r), l = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r) => (g(e, t, "access private method"), r), u, o, d;
let s = class extends y {
  constructor() {
    super(), l(this, o), l(this, u, new E(this)), this.consumeContext(S, async (e) => {
      e && this.observe(e.hasKeys, async (t) => {
        t === !1 && window.setTimeout(async () => {
          await M(this, o, d).call(this);
        }, 2e3);
      });
    });
  }
  render() {
    return p`<umb-workspace-editor>
			<div slot="header" class="header">
				<div>
					<strong>uSync.Publisher</strong><br /><em
						>Push and pull things between servers.</em
					>
				</div>
			</div>
		</umb-workspace-editor>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
d = async function() {
  const e = await this.getContext(w);
  return e ? await e.open(
    this,
    C,
    { data: {} }
  ).onSubmit().catch(() => {
  }) : void 0;
};
s.styles = _`
		.header {
			display: flex;
			gap: 10px;
			align-items: center;
		}

		umb-icon {
			font-size: var(--uui-type-h4-size);
		}
	`;
s = R([
  m("usync-publisher-server-root-workspace")
], s);
const T = s;
export {
  T as default,
  s as uSyncPublisherServerRootWorkspaceElement
};
//# sourceMappingURL=server-root-workspace.element-Dgqcyowx.js.map
