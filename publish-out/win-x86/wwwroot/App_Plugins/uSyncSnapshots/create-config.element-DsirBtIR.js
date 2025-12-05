import { ProcessStepElementBase as S, JUMOO_PROCESSING_CONTEXT as f } from "@jumoo/processing";
import { html as g, css as C, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { u as $ } from "./index-BRxV4qqS.js";
var k = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, x = (e, t, i, o) => {
  for (var s = o > 1 ? void 0 : o ? k(t, i) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (s = h(s) || s);
  return s;
}, u = (e, t, i) => t.has(e) || m("Cannot " + i), p = (e, t, i) => (u(e, t, "read from private field"), t.get(e)), d = (e, t, i) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), z = (e, t, i, o) => (u(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (u(e, t, "access private method"), i), n, a, v, _, y;
let r = class extends S {
  constructor() {
    super(), d(this, a), d(this, n), this.consumeContext(f, (e) => {
      z(this, n, e);
    });
  }
  render() {
    var e = this.options;
    if (e)
      return g` <uui-box .headline=${this.localize.term("uSyncSnapshots_create")}>
			<umb-localize key="uSyncSnapshots_createSummary"></umb-localize>
			<umb-property-layout
				.label=${this.localize.term("uSyncSnapshots_createName")}
				.description=${this.localize.term("uSyncSnapshots_createNameDescription")}>
				<div slot="editor">
					<uui-input
						type="text"
						label="Name"
						.value=${e.name}
						@change=${l(this, a, v)}></uui-input>
				</div>
			</umb-property-layout>

			<umb-property-layout
				.label=${this.localize.term("uSyncSnapshots_createFiles")}
				.description=${this.localize.term("uSyncSnapshots_createFilesDescription")}>
				<div slot="editor">
					<uui-checkbox
						label="Include files"
						.checked=${e.includeFiles}
						@change=${l(this, a, _)}>
						<div slot="label"></div>
					</uui-checkbox>
				</div>
			</umb-property-layout>

			<umb-property-layout
				.label=${this.localize.term("uSyncSnapshots_createMedia")}
				.description=${this.localize.term("uSyncSnapshots_createMediaDescription")}>
				<div slot="editor">
					<uui-checkbox
						label="Include media"
						.checked=${e.includeMedia}
						@change=${l(this, a, y)}>
						<div slot="label"></div>
					</uui-checkbox>
				</div>
			</umb-property-layout>
		</uui-box>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
v = function(e) {
  var i;
  if (!this.options) return;
  const t = e.target;
  t && ((i = p(this, n)) == null || i.setPending({ name: t.value }));
};
_ = function(e) {
  var i;
  if (!this.options) return;
  const t = e.target;
  t && ((i = p(this, n)) == null || i.setPending({ includeFiles: t.checked }));
};
y = function(e) {
  var i;
  if (!this.options) return;
  const t = e.target;
  t && ((i = p(this, n)) == null || i.setPending({ includeMedia: t.checked }));
};
r.styles = C`
		uui-input {
			width: 100%;
		}
	`;
r = x([
  b($.steps.createConfig)
], r);
const O = r;
export {
  O as default,
  r as uSyncSnapshotsCreateConfigElement
};
//# sourceMappingURL=create-config.element-DsirBtIR.js.map
