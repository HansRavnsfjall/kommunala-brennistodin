import { UmbLitElement as l } from "@umbraco-cms/backoffice/lit-element";
import { u as m } from "./index-BRxV4qqS.js";
import { html as u, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { u as d } from "./snapshots.context-BX47u-Ps.js";
var v = Object.getOwnPropertyDescriptor, i = (e) => {
  throw TypeError(e);
}, _ = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? v(t, r) : t, a = e.length - 1, p; a >= 0; a--)
    (p = e[a]) && (o = p(o) || o);
  return o;
}, S = (e, t, r) => t.has(e) || i("Cannot " + r), y = (e, t, r) => t.has(e) ? i("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r, s) => (S(e, t, "write to private field"), t.set(e, r), r), n;
let c = class extends l {
  constructor() {
    super(), y(this, n), f(this, n, new d(this));
  }
  render() {
    return u`<umb-workspace-editor .enforceNoFooter=${!0}>
			<div slot="header">
				<strong><umb-localize key="uSyncSnapshots_name"></umb-localize></strong><br />
				<em><umb-localize key="uSyncSnapshots_description"></umb-localize></em>
			</div>
		</umb-workspace-editor>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
c = _([
  h(m.element)
], c);
const g = c;
export {
  g as default,
  c as uSyncSnapshotsElement
};
//# sourceMappingURL=snapshots.element-n7sIoDl_.js.map
