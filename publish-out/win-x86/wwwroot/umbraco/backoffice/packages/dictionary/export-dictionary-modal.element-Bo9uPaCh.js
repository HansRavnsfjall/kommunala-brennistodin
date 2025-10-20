import { html as b, query as h, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
var D = Object.defineProperty, E = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, c = (e, t, o, u) => {
  for (var n = u > 1 ? void 0 : u ? E(t, o) : t, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (n = (u ? s(t, o, n) : s(n)) || n);
  return u && n && D(t, o, n), n;
}, x = (e, t, o) => t.has(e) || m("Cannot " + o), C = (e, t, o) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), l = (e, t, o) => (x(e, t, "access private method"), o), r, d, f, p;
let a = class extends v {
  constructor() {
    super(...arguments), C(this, r);
  }
  render() {
    return b` <umb-body-layout headline="Export">
			<uui-form>
				<form id="form" name="form" @submit=${l(this, r, p)}>
					<uui-form-layout-item>
						<uui-label for="includeDescendants" slot="label">Include descendants</uui-label>
						<uui-toggle id="includeDescendants" name="includeDescendants"></uui-toggle>
					</uui-form-layout-item>
				</form>
			</uui-form>
			<uui-button slot="actions" type="button" label="Cancel" look="secondary" @click=${l(this, r, d)}></uui-button>
			<uui-button slot="actions" type="button" label="Export" look="primary" @click=${l(this, r, f)}></uui-button>
		</umb-body-layout>`;
  }
};
r = /* @__PURE__ */ new WeakSet();
d = function() {
  this.modalContext?.reject();
};
f = function() {
  this._form?.requestSubmit();
};
p = async function(e) {
  e.preventDefault();
  const t = e.target;
  if (!t) return;
  const o = new FormData(t);
  this.value = { includeChildren: o.get("includeDescendants") === "on" }, this.modalContext?.submit();
};
a.styles = [_];
c([
  h("#form")
], a.prototype, "_form", 2);
a = c([
  y("umb-export-dictionary-modal")
], a);
const S = a;
export {
  a as UmbExportDictionaryModalElement,
  S as default
};
//# sourceMappingURL=export-dictionary-modal.element-Bo9uPaCh.js.map
