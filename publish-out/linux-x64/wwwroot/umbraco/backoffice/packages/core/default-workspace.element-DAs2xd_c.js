import { html as l, ifDefined as f, property as p, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as u } from "@umbraco-cms/backoffice/style";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, n = (t, r, o, i) => {
  for (var e = i > 1 ? void 0 : i ? v(r, o) : r, m = t.length - 1, a; m >= 0; m--)
    (a = t[m]) && (e = (i ? a(r, o, e) : a(e)) || e);
  return i && e && b(r, o, e), e;
};
let s = class extends d {
  render() {
    if (this.manifest === void 0) return l` <div>No Manifest</div> `;
    const t = this.manifest?.meta.headline;
    return l` <umb-workspace-editor
			headline=${f(t ? this.localize.string(t) : void 0)}></umb-workspace-editor>`;
  }
};
s.styles = [u];
n([
  p({ type: Object, attribute: !1 })
], s.prototype, "manifest", 2);
s = n([
  c("umb-default-workspace")
], s);
export {
  s as UmbDefaultWorkspaceElement,
  s as element
};
//# sourceMappingURL=default-workspace.element-DAs2xd_c.js.map
