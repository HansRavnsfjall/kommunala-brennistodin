import { UmbActionExecutedEvent as O } from "@umbraco-cms/backoffice/event";
import { property as v, state as _, customElement as C, html as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { createExtensionApi as E } from "@umbraco-cms/backoffice/extension-api";
const L = "Umb.Condition.CollectionAlias", P = "Umb.Condition.CollectionBulkActionPermission";
var A = Object.defineProperty, U = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, r = (t, i, e, o) => {
  for (var a = o > 1 ? void 0 : o ? U(i, e) : i, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (a = (o ? c(i, e, a) : c(a)) || a);
  return o && a && A(i, e, a), a;
}, p = (t, i, e) => i.has(t) || d("Cannot " + e), h = (t, i, e) => (p(t, i, "read from private field"), i.get(t)), m = (t, i, e) => i.has(t) ? d("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), y = (t, i, e, o) => (p(t, i, "write to private field"), i.set(t, e), e), S = (t, i, e) => (p(t, i, "access private method"), e), s, f, u;
let n = class extends w {
  constructor() {
    super(...arguments), m(this, f), m(this, s);
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(t) {
    const i = this._manifest;
    i !== t && (this._manifest = t, this._href = this.manifest?.meta.href, this._additionalOptions = this.manifest?.meta.additionalOptions, S(this, f, u).call(this), this.requestUpdate("manifest", i));
  }
  async _onClick() {
    if (!this._href) {
      this._additionalOptions || (this._buttonState = "waiting");
      try {
        if (!h(this, s)) throw new Error("No api defined");
        await h(this, s).execute(), this._additionalOptions || (this._buttonState = "success");
      } catch {
        this._additionalOptions || (this._buttonState = "failed");
      }
    }
    this.dispatchEvent(new O());
  }
  render() {
    const t = this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : this.manifest?.name ?? "";
    return b`
			<uui-button
				data-mark="collection-action:${this.manifest?.alias}"
				color="default"
				look="outline"
				.label=${this._additionalOptions ? t + "…" : t}
				.href=${this._href}
				.state=${this._buttonState}
				@click=${this._onClick}></uui-button>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
u = async function() {
  if (!this._manifest) throw new Error("No manifest defined");
  this._manifest.api && (y(this, s, await E(this, this._manifest)), this._href = await h(this, s)?.getHref?.() ?? this.manifest?.meta.href, this._additionalOptions = await h(this, s)?.hasAddionalOptions?.() ?? this.manifest?.meta.additionalOptions);
};
r([
  v({ type: Object, attribute: !1 })
], n.prototype, "manifest", 1);
r([
  _()
], n.prototype, "_buttonState", 2);
r([
  _()
], n.prototype, "_additionalOptions", 2);
r([
  _()
], n.prototype, "_href", 2);
n = r([
  C("umb-collection-action-button")
], n);
const T = n;
export {
  n as U,
  L as a,
  P as b,
  T as c
};
//# sourceMappingURL=collection-action-button.element-TmHU9Eph.js.map
