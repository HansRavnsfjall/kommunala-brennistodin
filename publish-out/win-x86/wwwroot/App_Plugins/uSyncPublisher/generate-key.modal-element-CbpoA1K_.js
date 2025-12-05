import { html as d, state as b, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as k } from "@umbraco-cms/backoffice/modal";
import { b as C } from "./index-DFDZ_Jke.js";
var E = Object.defineProperty, w = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, a, s) => {
  for (var r = s > 1 ? void 0 : s ? w(t, a) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (r = (s ? c(t, a, r) : c(r)) || r);
  return s && r && E(t, a, r), r;
}, u = (e, t, a) => t.has(e) || h("Cannot " + a), v = (e, t, a) => (u(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), K = (e, t, a, s) => (u(e, t, "write to private field"), t.set(e, a), a), y = (e, t, a) => (u(e, t, "access private method"), a), n, i, m, f;
let o = class extends k {
  constructor() {
    super(), p(this, i), p(this, n), this.consumeContext(C, async (e) => {
      e && (K(this, n, e), this.keydata = await v(this, n).createKeys());
    });
  }
  render() {
    var t;
    const e = JSON.parse(((t = this.keydata) == null ? void 0 : t.json) || "{}");
    return d`
			<umb-body-layout headline="Generate Keys" style="max-width:600px;">
				<umb-localize key="usyncpublish_generateKeyDescription"></umb-localize>

				<umb-code-block language="JSON" .copy=${!0}
					>${JSON.stringify(e, null, 1)}</umb-code-block
				>

				<div slot="actions">${this.renderActions()}</div>
			</umb-body-layout>
		`;
  }
  renderActions() {
    return d`
			<uui-button label="Cancel" @click="${y(this, i, m)}">Cancel</uui-button>
			<uui-button label="Save" color="positive" look="primary" @click="${y(this, i, f)}"
				>Save</uui-button
			>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
m = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
f = async function() {
  var t, a;
  if (!this.keydata) return;
  await ((t = v(this, n)) == null ? void 0 : t.saveKeys(this.keydata.appId, this.keydata.appKey)) && (alert("Keys saved to appsettings.json"), (a = this.modalContext) == null || a.submit());
};
_([
  b()
], o.prototype, "keydata", 2);
o = _([
  S("usync-publisher-generate-key-modal")
], o);
const g = o;
export {
  g as default,
  o as uSyncPublisherGenerateKeyModalElement
};
//# sourceMappingURL=generate-key.modal-element-CbpoA1K_.js.map
