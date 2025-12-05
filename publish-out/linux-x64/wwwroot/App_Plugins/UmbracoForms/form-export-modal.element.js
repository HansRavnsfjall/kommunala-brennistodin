import { unsafeHTML as c, html as p, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as h } from "@umbraco-cms/backoffice/modal";
import { b as _ } from "./index.js";
import { blobDownload as f } from "@umbraco-cms/backoffice/utils";
import { tryExecute as v } from "@umbraco-cms/backoffice/resources";
var x = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, b = (t, o, e, n) => {
  for (var r = n > 1 ? void 0 : n ? x(o, e) : o, a = t.length - 1, l; a >= 0; a--)
    (l = t[a]) && (r = l(r) || r);
  return r;
}, E = (t, o, e) => o.has(t) || u("Cannot " + e), y = (t, o, e) => o.has(t) ? u("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(t) : o.set(t, e), w = (t, o, e) => (E(t, o, "access private method"), e), i, m;
const F = "forms-form-export-modal";
let s = class extends h {
  constructor() {
    super(...arguments), y(this, i);
  }
  render() {
    return p`
      <umb-body-layout .headline=${this.localize.term("actions_export")}>
        <uui-box
          >${c(
      this.localize.term("formExport_exportInstruction")
    )}</uui-box
        >
        <uui-button
          slot="actions"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
        ></uui-button>
        <uui-button
          slot="actions"
          label=${this.localize.term("actions_export")}
          look="primary"
          color="positive"
          @click=${w(this, i, m)}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
i = /* @__PURE__ */ new WeakSet();
m = async function() {
  var o;
  if (!((o = this.data) != null && o.unique)) throw new Error("unique is missing");
  const { data: t } = await v(
    this,
    _.getFormExport({ query: { guid: this.data.unique } })
  );
  f(t, `form-${this.data.unique}.json`, "application/json"), this._submitModal();
};
s = b([
  d(F)
], s);
const z = s;
export {
  s as FormsFormExportModalElement,
  z as default
};
//# sourceMappingURL=form-export-modal.element.js.map
