import { c as g, D as _, b as x } from "./index.js";
import { LitElement as N, when as m, html as s, css as E, state as f, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as T } from "@umbraco-cms/backoffice/element-api";
import { tryExecute as C } from "@umbraco-cms/backoffice/resources";
var F = Object.defineProperty, B = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, d = (e, t, a, l) => {
  for (var i = l > 1 ? void 0 : l ? B(t, a) : t, r = e.length - 1, u; r >= 0; r--)
    (u = e[r]) && (i = (l ? u(t, a, i) : u(i)) || i);
  return l && i && F(t, a, i), i;
}, b = (e, t, a) => t.has(e) || v("Cannot " + a), p = (e, t, a) => (b(e, t, "read from private field"), a ? a.call(e) : t.get(e)), y = (e, t, a) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), I = (e, t, a, l) => (b(e, t, "write to private field"), t.set(e, a), a), $ = (e, t, a) => (b(e, t, "access private method"), a), o, h, w, z;
const S = "workspace-view-form-info";
let n = class extends T(N) {
  constructor() {
    super(), y(this, h), y(this, o), this._relations = [], this.consumeContext(g, (e) => {
      I(this, o, e), $(this, h, w).call(this);
    });
  }
  render() {
    var e, t, a;
    return s`
      <uui-box .headline=${this.localize.term("general_general")}>
        <umb-property-layout .label=${this.localize.term("general_id")}>
          <span slot="editor">${(e = this._form) == null ? void 0 : e.unique}</span>
        </umb-property-layout>
        ${m(
      !((t = p(this, o)) != null && t.getIsNew()),
      () => {
        var l, i, r, u;
        return s`
            <umb-property-layout
              .label=${this.localize.term("content_createDate")}
            >
              <umb-localize-date
                slot="editor"
                .date=${(l = this._form) == null ? void 0 : l.created}
                .options=${_}
              ></umb-localize-date>
            </umb-property-layout>
            ${m(
          (i = this._form) == null ? void 0 : i.createdBy,
          () => {
            var c;
            return s`
                <umb-property-layout
                  .label=${this.localize.term("content_createBy")}
                >
                  <div slot="editor">${(c = this._form) == null ? void 0 : c.createdByName}</div>
                </umb-property-layout>
              `;
          }
        )}
            <umb-property-layout
              .label=${this.localize.term("content_updateDate")}
            >
              <umb-localize-date
                slot="editor"
                .date=${(r = this._form) == null ? void 0 : r.updated}
                .options=${_}
              ></umb-localize-date>
            </umb-property-layout>
            ${m(
          (u = this._form) == null ? void 0 : u.updatedBy,
          () => {
            var c;
            return s`
                <umb-property-layout
                  .label=${this.localize.term("content_updatedBy")}
                >
                  <div slot="editor">${(c = this._form) == null ? void 0 : c.updatedByName}</div>
                </umb-property-layout>
              `;
          }
        )}
          `;
      }
    )}
      </uui-box>
      ${m(
      !((a = p(this, o)) != null && a.getIsNew()),
      () => s`
          <uui-box
            headline=${this.localize.term("formSettings_referencesTitle")}
          >
            <uui-table>
              <uui-table-head>
                <uui-table-head-cell
                  >${this.localize.term(
        "general_nodeName"
      )}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term("general_status")}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term(
        "general_typeName"
      )}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term("general_type")}</uui-table-head-cell
                >
                <uui-table-head-cell
                  >${this.localize.term(
        "relationType_relation"
      )}</uui-table-head-cell
                >
              </uui-table-head>
              ${this._relations.map(
        (l) => s`<uui-table-row>
                    <uui-table-cell>${l.nodeName}</uui-table-cell>
                    <uui-table-cell
                      >${this.localize.term(
          "content_" + (l.nodePublished ? "published" : "unpublished")
        )}</uui-table-cell
                    >
                    <uui-table-cell>${l.contentTypeName}</uui-table-cell>
                    <uui-table-cell>${l.nodeType}</uui-table-cell>
                    <uui-table-cell
                      >${l.relationTypeName}</uui-table-cell
                    >
                  </uui-table-row>`
      )}
            </uui-table>
          </uui-box>
        `
    )}
    `;
  }
};
o = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
w = function() {
  p(this, o) && this.observe(p(this, o).data, async (e) => {
    var t;
    e && (this._form = e, (t = p(this, o)) != null && t.getIsNew() || await $(this, h, z).call(this, e.id));
  });
};
z = async function(e) {
  const { data: t, error: a } = await C(
    this,
    x.getFormByIdRelations({ path: { id: e } })
  );
  a || (this._relations = t.items);
};
n.styles = [
  E`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      uui-box + uui-box {
        margin-top: var(--uui-size-layout-1);
      }
    `
];
d([
  f()
], n.prototype, "_form", 2);
d([
  f()
], n.prototype, "_relations", 2);
n = d([
  O(S)
], n);
const M = n;
export {
  n as UmbWorkspaceViewFormInfoElement,
  M as default
};
//# sourceMappingURL=workspace-view-form-info.element.js.map
