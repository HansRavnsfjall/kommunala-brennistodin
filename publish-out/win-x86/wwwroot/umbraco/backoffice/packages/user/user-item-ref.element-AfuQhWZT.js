import { d as v } from "./constants-BH7VsFPT.js";
import { U as E } from "./manifests--oECtQmU.js";
import { a as S } from "./paths-C2_yfNxZ.js";
import { nothing as y, ifDefined as A, html as U, css as P, property as h, state as u, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as R } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as T } from "@umbraco-cms/backoffice/router";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as I } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as M } from "@umbraco-cms/backoffice/workspace";
import { createExtensionApiByAlias as C } from "@umbraco-cms/backoffice/extension-registry";
var B = Object.defineProperty, N = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, i = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? N(t, r) : t, _ = e.length - 1, m; _ >= 0; _--)
    (m = e[_]) && (a = (o ? m(t, r, a) : m(a)) || a);
  return o && a && B(t, r, a), a;
}, l = (e, t, r) => t.has(e) || f("Cannot " + r), $ = (e, t, r) => (l(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r, o) => (l(e, t, "write to private field"), t.set(e, r), r), w = (e, t, r) => (l(e, t, "access private method"), r), n, p, d;
let s = class extends R {
  constructor() {
    super(), c(this, p), c(this, n), this.readonly = !1, this.standalone = !1, this._editPath = "", this._userHasSectionAccess = !1, C(this, I, [
      {
        config: {
          match: E
        },
        onChange: (e) => {
          this._userHasSectionAccess = e;
        }
      }
    ]), new T(this, M).onSetup(() => ({ data: { entityType: v, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  get item() {
    return $(this, n);
  }
  set item(e) {
    g(this, n, e);
  }
  render() {
    return this.item ? U`
			<uui-ref-node-user
				name=${this.item.name}
				href=${A(w(this, p, d).call(this, this.item))}
				?readonly=${this.readonly || !this._userHasSectionAccess}
				?standalone=${this.standalone}>
				<umb-user-avatar
					slot="icon"
					.name=${this.item.name}
					.kind=${this.item.kind}
					.imgUrls=${this.item.avatarUrls}></umb-user-avatar>
				<slot name="actions" slot="actions"></slot>
			</uui-ref-node-user>
		` : y;
  }
};
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
d = function(e) {
  if (!this._editPath) return;
  const t = S.generateLocal({ unique: e.unique });
  return `${this._editPath}/${t}`;
};
s.styles = [
  P`
			umb-user-avatar {
				font-size: var(--uui-size-4);
			}
		`
];
i([
  h({ type: Object })
], s.prototype, "item", 1);
i([
  h({ type: Boolean })
], s.prototype, "readonly", 2);
i([
  h({ type: Boolean })
], s.prototype, "standalone", 2);
i([
  u()
], s.prototype, "_editPath", 2);
i([
  u()
], s.prototype, "_userHasSectionAccess", 2);
s = i([
  O("umb-user-item-ref")
], s);
export {
  s as UmbUserItemRefElement,
  s as element
};
//# sourceMappingURL=user-item-ref.element-AfuQhWZT.js.map
