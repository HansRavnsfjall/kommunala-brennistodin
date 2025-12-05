import { F as f } from "./prevaluesource-workspace.context-token.js";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { LitElement as $, when as c, html as p, css as w, state as E, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as z } from "@umbraco-cms/backoffice/element-api";
import { D as v } from "./index.js";
var P = Object.defineProperty, C = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, y = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? C(t, r) : t, l = e.length - 1, o; l >= 0; l--)
    (o = e[l]) && (a = (i ? o(t, r, a) : o(a)) || a);
  return i && a && P(t, r, a), a;
}, m = (e, t, r) => t.has(e) || h("Cannot " + r), n = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, i) => (m(e, t, "write to private field"), t.set(e, r), r), U = (e, t, r) => (m(e, t, "access private method"), r), s, d, b;
const W = "workspace-view-prevaluesource-info";
let u = class extends z($) {
  constructor() {
    super(), _(this, d), _(this, s), this.consumeContext(f, (e) => {
      O(this, s, e), U(this, d, b).call(this);
    });
  }
  render() {
    var e, t;
    return p` <uui-box headline=${this.localize.term("general_general")}>
      <umb-property-layout label="Id">
        <div slot="editor">${(e = this._prevalueSource) == null ? void 0 : e.unique}</div>
      </umb-property-layout>
      ${c(
      !((t = n(this, s)) != null && t.getIsNew()),
      () => {
        var r, i, a, l;
        return p`
          <umb-property-layout
            .label=${this.localize.term("content_createDate")}
          >
            <umb-localize-date
              slot="editor"
              .date=${(r = this._prevalueSource) == null ? void 0 : r.created}
              .options=${v}
            ></umb-localize-date>
          </umb-property-layout>
          ${c(
          (i = this._prevalueSource) == null ? void 0 : i.createdBy,
          () => {
            var o;
            return p` <umb-property-layout
                .label=${this.localize.term("content_createBy")}
              >
                <div slot="editor">${(o = this._prevalueSource) == null ? void 0 : o.createdByName}</div>
              </umb-property-layout>`;
          }
        )}
          <umb-property-layout
            .label=${this.localize.term("content_updateDate")}
          >
            <umb-localize-date
              slot="editor"
              .date=${(a = this._prevalueSource) == null ? void 0 : a.updated}
              .options=${v}
            ></umb-localize-date>
          </umb-property-layout>
          ${c(
          (l = this._prevalueSource) == null ? void 0 : l.updatedBy,
          () => {
            var o;
            return p` <umb-property-layout
                .label=${this.localize.term("content_updatedBy")}
              >
                <div slot="editor">${(o = this._prevalueSource) == null ? void 0 : o.updatedByName}</div>
              </umb-property-layout>`;
          }
        )}
        `;
      }
    )}
    </uui-box>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
b = function() {
  n(this, s) && this.observe(n(this, s).data, (e) => {
    e && (this._prevalueSource = e);
  });
};
u.styles = [
  S,
  w`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      uui-box {
        margin-bottom: 20px;
      }
    `
];
y([
  E()
], u.prototype, "_prevalueSource", 2);
u = y([
  x(W)
], u);
const N = u;
export {
  u as UmbWorkspaceViewPrevalueSourceInfoElement,
  N as default
};
//# sourceMappingURL=workspace-view-prevaluesource-info.element.js.map
