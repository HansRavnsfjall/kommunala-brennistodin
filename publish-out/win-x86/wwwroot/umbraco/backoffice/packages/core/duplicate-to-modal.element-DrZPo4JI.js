import { nothing as _, html as c, state as b, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as v } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
var U = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, h = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? g(e, i) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (n = (a ? l(e, i, n) : l(n)) || n);
  return a && n && U(e, i, n), n;
}, q = (t, e, i) => e.has(t) || d("Cannot " + i), $ = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), u = (t, e, i) => (q(t, e, "access private method"), i), o, p, m;
const x = "umb-duplicate-to-modal";
let s = class extends y {
  constructor() {
    super(...arguments), $(this, o);
  }
  render() {
    return this.data ? c`
			<umb-body-layout headline="Duplicate">
				<uui-box>
					<umb-tree
						alias=${this.data.treeAlias}
						.props=${{
      foldersOnly: this.data?.foldersOnly,
      expandTreeRoot: !0
    }}
						@selection-change=${u(this, o, p)}></umb-tree>
				</uui-box>

				${u(this, o, m).call(this)}
			</umb-body-layout>
		` : _;
  }
};
o = /* @__PURE__ */ new WeakSet();
p = function(t) {
  const i = t.target.getSelection();
  this._destinationUnique = i[0], (this._destinationUnique || this._destinationUnique === null) && this.updateValue({ destination: { unique: this._destinationUnique } });
};
m = function() {
  return c`
			<uui-button slot="actions" label="Cancel" @click="${this._rejectModal}"></uui-button>
			<uui-button
				slot="actions"
				color="positive"
				look="primary"
				label="Duplicate"
				@click=${this._submitModal}
				?disabled=${this._destinationUnique === void 0}></uui-button>
		`;
};
s.styles = [v];
h([
  b()
], s.prototype, "_destinationUnique", 2);
s = h([
  f(x)
], s);
export {
  s as UmbDuplicateToModalElement,
  s as element
};
//# sourceMappingURL=duplicate-to-modal.element-DrZPo4JI.js.map
