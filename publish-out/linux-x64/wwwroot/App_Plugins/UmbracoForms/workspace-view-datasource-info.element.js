import { j as f, D as _ } from "./index.js";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { LitElement as $, when as c, html as p, css as w, state as D, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as x } from "@umbraco-cms/backoffice/element-api";
var z = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, v = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? C(t, a) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (r = (i ? o(t, a, r) : o(r)) || r);
  return i && r && z(t, a, r), r;
}, m = (e, t, a) => t.has(e) || y("Cannot " + a), n = (e, t, a) => (m(e, t, "read from private field"), a ? a.call(e) : t.get(e)), h = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), O = (e, t, a, i) => (m(e, t, "write to private field"), t.set(e, a), a), W = (e, t, a) => (m(e, t, "access private method"), a), l, d, b;
const B = "workspace-view-datasource-info";
let u = class extends x($) {
  constructor() {
    super(), h(this, d), h(this, l), this.consumeContext(f, (e) => {
      O(this, l, e), W(this, d, b).call(this);
    });
  }
  render() {
    var e, t;
    return p` <uui-box headline=${this.localize.term("general_general")}>
      <umb-property-layout label="Id">
        <div slot="editor">${(e = this._dataSource) == null ? void 0 : e.unique}</div>
      </umb-property-layout>
      ${c(
      !((t = n(this, l)) != null && t.getIsNew()),
      () => {
        var a, i, r, s;
        return p`
          <umb-property-layout
            .label=${this.localize.term("content_createDate")}
          >
            <umb-localize-date
              slot="editor"
              .date=${(a = this._dataSource) == null ? void 0 : a.created}
              .options=${_}
            ></umb-localize-date>
          </umb-property-layout>
          ${c(
          (i = this._dataSource) == null ? void 0 : i.createdBy,
          () => {
            var o;
            return p` <umb-property-layout
                .label=${this.localize.term("content_createBy")}
              >
                <div slot="editor">${(o = this._dataSource) == null ? void 0 : o.createdByName}</div>
              </umb-property-layout>`;
          }
        )}
          <umb-property-layout
            .label=${this.localize.term("content_updateDate")}
          >
            <umb-localize-date
              slot="editor"
              .date=${(r = this._dataSource) == null ? void 0 : r.updated}
              .options=${_}
            ></umb-localize-date>
          </umb-property-layout>
          ${c(
          (s = this._dataSource) == null ? void 0 : s.updatedBy,
          () => {
            var o;
            return p` <umb-property-layout
                .label=${this.localize.term("content_updatedBy")}
              >
                <div slot="editor">${(o = this._dataSource) == null ? void 0 : o.updatedByName}</div>
              </umb-property-layout>`;
          }
        )}
        `;
      }
    )}
    </uui-box>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
b = function() {
  n(this, l) && this.observe(n(this, l).data, (e) => {
    e && (this._dataSource = e);
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
v([
  D()
], u.prototype, "_dataSource", 2);
u = v([
  E(B)
], u);
const I = u;
export {
  u as UmbWorkspaceViewDataSourceInfoElement,
  I as default
};
//# sourceMappingURL=workspace-view-datasource-info.element.js.map
