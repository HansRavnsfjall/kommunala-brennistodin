import { U as A } from "./manifests-BQyED3bY.js";
import { o as S, y as I } from "./input-upload-field.element-DEgpG3Zz.js";
import { createExtensionApiByAlias as P } from "@umbraco-cms/backoffice/extension-registry";
import { nothing as M, ifDefined as T, html as f, property as c, state as u, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as C } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as R } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as B } from "@umbraco-cms/backoffice/workspace";
var D = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, s = (e, t, r, n) => {
  for (var i = n > 1 ? void 0 : n ? $(t, r) : t, p = e.length - 1, h; p >= 0; p--)
    (h = e[p]) && (i = (n ? h(t, r, i) : h(i)) || i);
  return n && i && D(t, r, i), i;
}, m = (e, t, r) => t.has(e) || v("Cannot " + r), g = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), l = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r, n) => (m(e, t, "write to private field"), t.set(e, r), r), d = (e, t, r) => (m(e, t, "access private method"), r), o, _, y, E;
let a = class extends U {
  constructor() {
    super(), l(this, _), l(this, o), this.readonly = !1, this.standalone = !1, this._editPath = "", this._userHasSectionAccess = !1, P(this, R, [
      {
        config: {
          match: A
        },
        onChange: (e) => {
          this._userHasSectionAccess = e;
        }
      }
    ]), new C(this, B).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: S, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  get item() {
    return g(this, o);
  }
  set item(e) {
    w(this, o, e);
  }
  render() {
    return this.item ? f`
			<uui-ref-node
				name=${this.item.name}
				href=${T(d(this, _, y).call(this, this.item))}
				?readonly=${this.readonly || !this._userHasSectionAccess}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${d(this, _, E).call(this, this.item)}
			</uui-ref-node>
		` : M;
  }
};
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
y = function(e) {
  if (!this._editPath) return;
  const t = I.generateLocal({ unique: e.unique });
  return `${this._editPath}/${t}`;
};
E = function(e) {
  if (e.mediaType.icon)
    return f`<umb-icon slot="icon" name=${e.mediaType.icon}></umb-icon>`;
};
s([
  c({ type: Object })
], a.prototype, "item", 1);
s([
  c({ type: Boolean })
], a.prototype, "readonly", 2);
s([
  c({ type: Boolean })
], a.prototype, "standalone", 2);
s([
  u()
], a.prototype, "_editPath", 2);
s([
  u()
], a.prototype, "_userHasSectionAccess", 2);
a = s([
  O("umb-media-item-ref")
], a);
export {
  a as UmbMediaItemRefElement,
  a as element
};
//# sourceMappingURL=media-item-ref.element-Bg8lB7Ov.js.map
