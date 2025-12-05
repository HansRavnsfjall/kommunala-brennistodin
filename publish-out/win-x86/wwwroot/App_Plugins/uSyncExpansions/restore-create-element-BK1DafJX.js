import { ProcessStepElementBase as f, JUMOO_PROCESSING_CONTEXT as C } from "@jumoo/processing";
import { html as p, css as S, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { uSyncRestore as E } from "@jumoo/usync-expansions";
var k = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, M = (e, t, r, s) => {
  for (var i = s > 1 ? void 0 : s ? k(t, r) : t, u = e.length - 1, l; u >= 0; u--)
    (l = e[u]) && (i = l(i) || i);
  return i;
}, c = (e, t, r) => t.has(e) || v("Cannot " + r), m = (e, t, r) => (c(e, t, "read from private field"), t.get(e)), d = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, s) => (c(e, t, "write to private field"), t.set(e, r), r), h = (e, t, r) => (c(e, t, "access private method"), r), n, a, _, y;
let o = class extends f {
  constructor() {
    super(), d(this, a), d(this, n), this.consumeContext(C, (e) => {
      w(this, n, e);
    });
  }
  render() {
    return p`
			<umb-localize key="uSyncRestore_createIntro"></umb-localize>

			${this.renderName()}
		`;
  }
  renderName() {
    const e = this.options;
    return p`<umb-property-layout
				label="Name"
				description="Give your restore point a name"
				orientation="vertical">
				<div slot="editor">
					<uui-input
						type="text"
						label="Name"
						.value=${e.title}
						@change=${h(this, a, _)}></uui-input>
				</div>
			</umb-property-layout>

			<umb-property-layout
				label="Include Media"
				description="Include media files in the restore point">
				<div slot="editor">
					<uui-checkbox
						label="Include Media"
						.checked=${e.includeMedia}
						@change=${h(this, a, y)}>
					</uui-checkbox>
				</div>
			</umb-property-layout>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  var r;
  if (!this.options) return;
  const t = e.target;
  t && ((r = m(this, n)) == null || r.setPending({
    title: t.value
  }));
};
y = function(e) {
  var r;
  if (!this.options) return;
  const t = e.target;
  t && ((r = m(this, n)) == null || r.setPending({
    includeMedia: t.checked
  }));
};
o.styles = S`
		uui-input {
			width: 100%;
		}
	`;
o = M([
  g(E.steps.restoreCreateStep)
], o);
const I = o;
export {
  I as default,
  o as uSyncRestoreCreateElement
};
//# sourceMappingURL=restore-create-element-BK1DafJX.js.map
