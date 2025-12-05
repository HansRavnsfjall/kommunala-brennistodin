import { ProcessStepElementBase as _, JUMOO_PROCESSING_CONTEXT as m } from "@jumoo/processing";
import { nothing as y, html as C, css as S, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { a as k } from "./index-CPaPWJuU.js";
var E = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, $ = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? E(t, i) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (r = d(r) || r);
  return r;
}, p = (e, t, i) => t.has(e) || g("Cannot " + i), v = (e, t, i) => (p(e, t, "read from private field"), t.get(e)), h = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, n) => (p(e, t, "write to private field"), t.set(e, i), i), s = (e, t, i) => (p(e, t, "access private method"), i), o, a, f, u;
let l = class extends _ {
  constructor() {
    super(), h(this, a), h(this, o), this.consumeContext(m, (e) => {
      w(this, o, e);
    });
  }
  render() {
    var e = this.options;
    return e != null && e.items ? C`
			<umb-localize key="uSyncExport_packSummary"></umb-localize>

			<umb-property-layout label="Pack name" orientation="vertical">
				<div slot="editor">
					<uui-input
						type="text"
						label="Name"
						.value="${e.name ?? ""}"
						@change=${s(this, a, f)}></uui-input>
				</div>
			</umb-property-layout>

			<p>Choose what "extra" things should be included in this pack.</p>

			<div>
				<uui-toggle
					label="Include Files"
					.checked=${e.includeFiles}
					data-option="includeFiles"
					@change=${s(this, a, u)}></uui-toggle>
			</div>

			<div>
				<uui-toggle
					label="Include Config (e.g Domains, Public access)"
					.checked=${e.includeConfig}
					data-option="includeConfig"
					@change=${s(this, a, u)}></uui-toggle>
			</div>
			<div>
				<uui-toggle
					label="Include Media Files"
					data-option="includeMediaFiles"
					.checked=${e.includeMediaFiles}
					@change=${s(this, a, u)}></uui-toggle>
			</div>
		` : y;
  }
};
o = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = function(e) {
  var i;
  if (!this.options) return;
  const t = e.target;
  t && ((i = v(this, o)) == null || i.setPending({ name: t.value }));
};
u = function(e) {
  var n;
  if (!this.options) return;
  const t = e.target;
  if (!t) return;
  const i = t.getAttribute("data-option");
  i && ((n = v(this, o)) == null || n.setPending({ [i]: t.checked }));
};
l.styles = S`
		uui-input {
			width: 100%;
		}

		ul {
			padding: 0 5px;
			margin: 0;
			list-style-position: inside;
		}
	`;
l = $([
  x(k.export.config)
], l);
const M = l;
export {
  M as default,
  l as uSyncExportConfigStep
};
//# sourceMappingURL=export-config-step-CYAzama4.js.map
