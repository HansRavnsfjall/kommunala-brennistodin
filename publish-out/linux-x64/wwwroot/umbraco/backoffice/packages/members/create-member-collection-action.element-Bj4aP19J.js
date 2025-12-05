import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { until as C, html as u, nothing as $, repeat as q, css as x, state as k, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbMemberTypeTreeRepository as U } from "@umbraco-cms/backoffice/member-type";
var O = Object.defineProperty, D = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, b = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? D(t, o) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (i ? p(t, o, r) : p(r)) || r);
  return i && r && O(t, o, r), r;
}, f = (e, t, o) => t.has(e) || _("Cannot " + o), m = (e, t, o) => (f(e, t, "read from private field"), o ? o.call(e) : t.get(e)), a = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), v = (e, t, o) => (f(e, t, "access private method"), o), h, d, s, y, l, w;
let n = class extends T {
  constructor() {
    super(...arguments), a(this, s), this._options = [], a(this, h, new U(this)), a(this, d), a(this, l, async () => {
      this._options.length > 0 || (await v(this, s, y).call(this), this._options.length === 1 && history.pushState({}, "", `section/member-management/workspace/member/create/${this._options[0].unique}`));
    });
  }
  render() {
    return u`
			<uui-button
				label=${this.localize.term("general_create")}
				@click=${m(this, l)}
				look="outline"
				popovertarget="create-popover"></uui-button>
			<uui-popover-container id="create-popover">
				<div id="popover-content">${C(v(this, s, w).call(this), u`<uui-loader></uui-loader>`)}</div>
			</uui-popover-container>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
y = async function() {
  const { data: e } = await m(this, h).requestTreeRootItems({});
  e && (this._options = e.items.map((t) => ({
    label: t.name,
    unique: t.unique,
    icon: t.icon || ""
  })), this.requestUpdate());
};
l = /* @__PURE__ */ new WeakMap();
w = async function() {
  return await m(this, d), this._options.length === 1 ? $ : u`
			${q(
    this._options,
    (e) => e.unique,
    (e) => u`<uui-button
						class="create-member-type"
						compact
						label=${e.label}
						href="section/member-management/workspace/member/create/${e.unique}">
						<div>
							<umb-icon name=${e.icon}></umb-icon>
							<span>${e.label}</span>
						</div>
					</uui-button>`
  )}
		`;
};
n.styles = [
  g,
  x`
			#popover-content {
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-3);
				border-radius: var(--uui-border-radius);
				display: flex;
				flex-direction: column;
				--uui-button-content-align: left;
			}

			uui-button.create-member-type > div {
				display: flex;
				align-items: center;
				gap: 5px;
			}
		`
];
b([
  k()
], n.prototype, "_options", 2);
n = b([
  E("umb-create-member-collection-action")
], n);
const R = n;
export {
  n as UmbCreateDocumentCollectionActionElement,
  R as default
};
//# sourceMappingURL=create-member-collection-action.element-Bj4aP19J.js.map
