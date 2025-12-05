import { LitElement as l, html as m, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { SyncExporterWorkspaceContext as d } from "./workspace.context-ChaniE6s.js";
import { UmbElementMixin as v } from "@umbraco-cms/backoffice/element-api";
var _ = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, h = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? _(t, r) : t, a = e.length - 1, i; a >= 0; a--)
    (i = e[a]) && (o = i(o) || o);
  return o;
}, E = (e, t, r) => t.has(e) || p("Cannot " + r), x = (e, t, r) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r, n) => (E(e, t, "write to private field"), t.set(e, r), r), s;
let c = class extends v(l) {
  constructor() {
    super(), x(this, s), y(this, s, new d(this));
  }
  render() {
    return m`<umb-workspace-editor .enforceNoFooter=${!0}>
			<div slot="header">
				<strong
					><umb-localize key="uSyncExporter_name">uSync Exporter</umb-localize></strong
				><br />
				<em>
					<umb-localize key="uSyncExporter_description"
						>Export all the things</umb-localize
					>
				</em>
			</div>
		</umb-workspace-editor>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
c = h([
  u("usync-exporter-element")
], c);
const k = c;
export {
  k as default,
  c as uSyncExporterElement
};
//# sourceMappingURL=workspace.element-_mbjVxxN.js.map
