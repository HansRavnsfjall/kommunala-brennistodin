import { f as M } from "./manifests-KIVuOqdB.js";
import { U as A } from "./manifests-CBCmkc6E.js";
import { c as S } from "./paths-yi0rlsCw.js";
import { createExtensionApiByAlias as P } from "@umbraco-cms/backoffice/extension-registry";
import { nothing as T, ifDefined as I, html as u, property as c, state as d, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as B } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as U } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as C } from "@umbraco-cms/backoffice/workspace";
var b = Object.defineProperty, N = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, n = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? N(t, r) : t, _ = e.length - 1, p; _ >= 0; _--)
    (p = e[_]) && (i = (o ? p(t, r, i) : p(i)) || i);
  return o && i && b(t, r, i), i;
}, h = (e, t, r) => t.has(e) || E("Cannot " + r), $ = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), l = (e, t, r) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, o) => (h(e, t, "write to private field"), t.set(e, r), r), f = (e, t, r) => (h(e, t, "access private method"), r), a, m, v, y;
let s = class extends R {
  constructor() {
    super(), l(this, m), l(this, a), this.readonly = !1, this.standalone = !1, this._editPath = "", this._userHasSectionAccess = !1, P(this, U, [
      {
        config: {
          match: A
        },
        onChange: (e) => {
          this._userHasSectionAccess = e;
        }
      }
    ]), new B(this, C).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: M, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  get item() {
    return $(this, a);
  }
  set item(e) {
    g(this, a, e);
  }
  render() {
    return this.item ? u`
			<uui-ref-node-member
				name=${this.item.name}
				href=${I(f(this, m, v).call(this, this.item))}
				?readonly=${this.readonly || !this._userHasSectionAccess}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${f(this, m, y).call(this, this.item)}
			</uui-ref-node-member>
		` : T;
  }
};
a = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
v = function(e) {
  if (!this._editPath) return;
  const t = S.generateLocal({ unique: e.unique });
  return `${this._editPath}/${t}`;
};
y = function(e) {
  if (e.memberType.icon)
    return u`<umb-icon slot="icon" name=${e.memberType.icon}></umb-icon>`;
};
n([
  c({ type: Object })
], s.prototype, "item", 1);
n([
  c({ type: Boolean })
], s.prototype, "readonly", 2);
n([
  c({ type: Boolean })
], s.prototype, "standalone", 2);
n([
  d()
], s.prototype, "_editPath", 2);
n([
  d()
], s.prototype, "_userHasSectionAccess", 2);
s = n([
  O("umb-member-item-ref")
], s);
export {
  s as UmbMemberItemRefElement,
  s as element
};
//# sourceMappingURL=member-item-ref.element-BrU8Wecb.js.map
