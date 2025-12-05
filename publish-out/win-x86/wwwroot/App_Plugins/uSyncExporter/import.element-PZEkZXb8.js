import { html as l, css as _, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as E } from "@umbraco-cms/backoffice/modal";
import { JUMOO_PROCESSING_SIDEBAR_MEDIUM_MODAL as h } from "@jumoo/processing";
import { u as c } from "./index-CPaPWJuU.js";
var v = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, f = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? v(e, r) : e, i = t.length - 1, p; i >= 0; i--)
    (p = t[i]) && (o = p(o) || o);
  return o;
}, x = (t, e, r) => e.has(t) || m("Cannot " + r), S = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), b = (t, e, r) => (x(t, e, "access private method"), r), s, u;
let a = class extends y {
  constructor() {
    super(...arguments), S(this, s);
  }
  render() {
    return l` <umb-body-layout>
			<uui-box .headline=${this.localize.term("uSyncExport_import")}>
				<div>
					<umb-localize key="uSyncExport_importIntro"></umb-localize>
				</div>

				<uui-button
					label="Import"
					color="default"
					look="primary"
					@click="${b(this, s, u)}"></uui-button>
			</uui-box>
		</umb-body-layout>`;
  }
};
s = /* @__PURE__ */ new WeakSet();
u = async function() {
  const t = await this.getContext(E);
  !t || await t.open(this, h, {
    data: {
      processor: c.process.pipeline,
      strategy: c.process.import,
      progressLabel: "Import",
      options: {
        $type: "ExporterSyncPackProcessingOptions"
      },
      headline: "Import Sync-Pack"
    }
  }).onSubmit().catch((n) => !1);
};
a.styles = _`
		uui-button {
			margin-top: 10px;
		}
	`;
a = f([
  d("usync-exporter-import-view-element")
], a);
const k = a;
export {
  k as default,
  a as uSyncExporterImportViewElement
};
//# sourceMappingURL=import.element-PZEkZXb8.js.map
