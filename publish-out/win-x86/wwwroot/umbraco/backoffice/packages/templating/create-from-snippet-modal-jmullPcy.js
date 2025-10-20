import { html as p, state as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
import { tryExecute as w } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as b } from "@umbraco-cms/backoffice/external/backend-api";
var y = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, c = (e, t, a, r) => {
  for (var i = r > 1 ? void 0 : r ? $(t, a) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (i = (r ? l(t, a, i) : l(i)) || i);
  return r && i && y(t, a, i), i;
}, P = (e, t, a) => t.has(e) || m("Cannot " + a), C = (e, t, a) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), u = (e, t, a) => (P(e, t, "access private method"), a), n, h, d;
let o = class extends v {
  constructor() {
    super(...arguments), C(this, n), this._snippets = [];
  }
  async firstUpdated() {
    const { data: e } = await w(this, b.getPartialViewSnippet({ query: { take: 1e4 } }));
    e && (this._snippets = e.items.map((t) => ({
      name: t.name,
      path: u(this, n, h).call(this, t)
    })));
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("create_newPartialViewFromSnippet")}>
				<uui-box>
					${this._snippets.map(
      (e) => p` <uui-menu-item label="${e.name}" href=${e.path} @click=${u(this, n, d)}>
								<uui-icon name="icon-document-html" slot="icon"></uui-icon
							></uui-menu-item>`
    )}
				</uui-box>
				<uui-button
					slot="actions"
					@click=${this._rejectModal}
					look="secondary"
					label=${this.localize.term("general_close")}></uui-button>
			</umb-body-layout>
		`;
  }
};
n = /* @__PURE__ */ new WeakSet();
h = function(e) {
  return `section/settings/workspace/partial-view/create/parent/${this.data?.parent.entityType}/${this.data?.parent.unique || "null"}/snippet/${e.id}`;
};
d = function() {
  this._submitModal();
};
c([
  _()
], o.prototype, "_snippets", 2);
o = c([
  f("umb-partial-view-create-from-snippet-modal")
], o);
const V = o;
export {
  o as UmbPartialViewCreateFromSnippetModalElement,
  V as default
};
//# sourceMappingURL=create-from-snippet-modal-jmullPcy.js.map
