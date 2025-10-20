import { UMB_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT as d } from "./block-grid-area-type-workspace.context-DV3uLotl.js";
import { UmbTextStyles as m } from "@umbraco-cms/backoffice/style";
import { html as v, css as f, state as E, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var C = Object.defineProperty, k = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, l = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? k(e, r) : e, p = t.length - 1, n; p >= 0; p--)
    (n = t[p]) && (a = (o ? n(e, r, a) : n(a)) || a);
  return o && a && C(e, r, a), a;
}, h = (t, e, r) => e.has(t) || _("Cannot " + r), c = (t, e, r) => (h(t, e, "read from private field"), e.get(t)), w = (t, e, r) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), O = (t, e, r, o) => (h(t, e, "write to private field"), e.set(t, r), r), s;
let i = class extends y {
  constructor() {
    super(), w(this, s), this.consumeContext(d, (t) => {
      O(this, s, t), this.observe(c(this, s)?.name, (e) => {
        this._name = e;
      }), c(this, s)?.createPropertyDatasetContext(this);
    });
  }
  // TODO: Localization, make it so that the headline is about area configuration?
  render() {
    return v`
			<umb-workspace-editor headline=${this.localize.term("blockEditor_blockConfigurationOverlayTitle", [this._name])}>
			</umb-workspace-editor>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
i.styles = [
  m,
  f`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
l([
  E()
], i.prototype, "_name", 2);
i = l([
  u("umb-block-grid-area-type-workspace-editor")
], i);
const A = i;
export {
  i as UmbBlockGridAreaTypeWorkspaceEditorElement,
  A as default
};
//# sourceMappingURL=block-grid-area-type-workspace-editor.element-B0FD557h.js.map
