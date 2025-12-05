import { LitElement as I, html as h, ifDefined as M, css as A, state as v, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { b as N, h as U } from "./index-DFDZ_Jke.js";
import { UUIInputEvent as $ } from "@umbraco-cms/backoffice/external/uui";
import { UMB_MODAL_MANAGER_CONTEXT as T } from "@umbraco-cms/backoffice/modal";
import { UmbElementMixin as z } from "@umbraco-cms/backoffice/element-api";
import { UMB_ICON_PICKER_MODAL as R } from "@umbraco-cms/backoffice/icon";
var q = Object.defineProperty, B = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, m = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? B(t, r) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
  return i && a && q(t, r, a), a;
}, f = (e, t, r) => t.has(e) || P("Cannot " + r), G = (e, t, r) => (f(e, t, "read from private field"), t.get(e)), k = (e, t, r) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), H = (e, t, r, i) => (f(e, t, "write to private field"), t.set(e, r), r), u = (e, t, r) => (f(e, t, "access private method"), r), l, n, x, b, O, L;
let c = class extends z(
  I
) {
  constructor() {
    super(), k(this, n), k(this, l), this._aliasLocked = !0, this.consumeContext(T, (e) => {
      H(this, l, e);
    }), this.consumeContext(N, (e) => {
      e && (this.sharedContext = e, this.observe(e.data, (t) => {
        this.data = t;
      }));
    });
  }
  render() {
    return this.data === void 0 ? h`<uui-loader-circle></uui-loader-circle>` : this.renderServer();
  }
  renderServer() {
    var e, t, r;
    return h`
			<umb-workspace-editor>
				<div id="header" slot="header">
					<uui-button id="icon" @click=${u(this, n, x)} label="icon" compact>
						<umb-icon name="${M((e = this.data) == null ? void 0 : e.icon)}"></umb-icon>
					</uui-button>

					<uui-input
						id="name"
						placeholder=${this.localize.term("placeholders_entername")}
						.value=${((t = this.data) == null ? void 0 : t.name) ?? ""}
						@input="${u(this, n, b)}"
						label="Name">
						<uui-input
							name="alias"
							slot="append"
							label="alias"
							@input=${u(this, n, O)}
							.value=${((r = this.data) == null ? void 0 : r.alias) ?? ""}
							.disabled=${this._aliasLocked}>
							<div
								@click=${u(this, n, L)}
								@keydown=${() => ""}
								id="alias-lock"
								slot="prepend">
								<uui-icon
									name=${this._aliasLocked ? "icon-lock" : "icon-unlocked"}></uui-icon>
							</div>
						</uui-input>
					</uui-input>
				</div>
			</umb-workspace-editor>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
x = function() {
  var i, a, s, o;
  const [e, t] = ((s = (a = (i = this.data) == null ? void 0 : i.icon) == null ? void 0 : a.replace("color-", "")) == null ? void 0 : s.split(" ")) ?? [], r = (o = G(this, l)) == null ? void 0 : o.open(this, R, {
    value: { icon: e, color: t }
  });
  r == null || r.onSubmit().then((E) => {
    var C;
    E && ((C = this.sharedContext) == null || C.setIcon(E));
  });
};
b = function(e) {
  var t;
  if (e instanceof $) {
    const r = e.composedPath()[0];
    typeof (r == null ? void 0 : r.value) == "string" && ((t = this.sharedContext) == null || t.setName(r.value));
  }
};
O = function(e) {
  var t;
  if (e instanceof $) {
    const r = e.composedPath()[0];
    typeof (r == null ? void 0 : r.value) == "string" && ((t = this.sharedContext) == null || t.set({ alias: r.value }));
  }
  e.stopPropagation();
};
L = function() {
  this._aliasLocked = !this._aliasLocked;
};
c.styles = [
  A`
			#header {
				display: flex;
				gap: var(--uui-size-space-4);
				width: 100%;
			}

			#name {
				width: 100%;
				flex: 1 1 auto;
				align-items: center;
			}

			#icon {
				font-size: calc(var(--uui-size-layout-3) / 2);
				margin-right: var(--uui-size-space-2);
				margin-left: calc(var(--uui-size-space-4) * -1);
			}
		`
];
m([
  v()
], c.prototype, "data", 2);
m([
  v()
], c.prototype, "_aliasLocked", 2);
c = m([
  y("usync-publisher-server-editor-workspace")
], c);
var X = Object.defineProperty, K = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, W = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? K(t, r) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (a = (i ? o(t, r, a) : o(a)) || a);
  return i && a && X(t, r, a), a;
}, V = (e, t, r) => t.has(e) || g("Cannot " + r), S = (e, t, r) => (V(e, t, "read from private field"), r ? r.call(e) : t.get(e)), w = (e, t, r) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), d, _;
let p = class extends D {
  constructor() {
    super(), w(this, d, new U(this)), w(this, _, () => new c()), this._routes = [
      {
        path: "edit/:unique",
        component: S(this, _),
        setup: (e, t) => {
          const r = t.match.params.unique;
          S(this, d).load(r);
        }
      }
    ];
  }
  render() {
    return h`<umb-router-slot .routes=${this._routes}></umb-router-slot>`;
  }
};
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
W([
  v()
], p.prototype, "_routes", 2);
p = W([
  y("usync-publisher-server-item-workspace")
], p);
const te = p;
export {
  te as default,
  p as uSyncPublisherServerItemWorkspaceElement
};
//# sourceMappingURL=server-item-workspace.element-CmGuGO4g.js.map
