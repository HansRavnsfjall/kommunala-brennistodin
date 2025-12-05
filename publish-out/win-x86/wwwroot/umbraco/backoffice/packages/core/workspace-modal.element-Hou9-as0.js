import { UmbTextStyles as p } from "@umbraco-cms/backoffice/style";
import { css as u, property as c, customElement as d, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var h = Object.defineProperty, v = Object.getOwnPropertyDescriptor, n = (r, t, s, a) => {
  for (var e = a > 1 ? void 0 : a ? v(t, s) : t, i = r.length - 1, l; i >= 0; i--)
    (l = r[i]) && (e = (a ? l(t, s, e) : l(e)) || e);
  return a && e && h(t, s, e), e;
};
let o = class extends y {
  get data() {
    return this._data;
  }
  set data(r) {
    if (this._data = r, !r?.inheritValidationLook) {
      const t = this.style;
      t.setProperty("--uui-color-invalid", "var(--uui-color-danger)"), t.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-danger-emphasis)"), t.setProperty("--uui-color-invalid-standalone", "var(--uui-color-danger-standalone)"), t.setProperty("--uui-color-invalid-contrast", "var(--uui-color-danger-contrast)");
    }
  }
  /**
   * TODO: Consider if this binding and events integration is the right for communicating back the modal handler. Or if we should go with some Context API. like a Modal Context API.
   *
   */
  render() {
    return this.data ? m`<umb-workspace .entityType=${this.data.entityType}></umb-workspace>` : "";
  }
};
o.styles = [
  p,
  u`
			:host {
				display: block;
				height: 100%;
			}
		`
];
n([
  c({ attribute: !1 })
], o.prototype, "data", 1);
o = n([
  d("umb-workspace-modal")
], o);
const _ = o;
export {
  o as UmbWorkspaceModalElement,
  _ as default
};
//# sourceMappingURL=workspace-modal.element-Hou9-as0.js.map
