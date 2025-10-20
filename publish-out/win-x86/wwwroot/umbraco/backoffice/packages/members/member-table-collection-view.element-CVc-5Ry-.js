import { j as w } from "./manifests-DHyiWGyY.js";
import { U as E } from "./index-L-35ogTa.js";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { html as p, css as I, state as _, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbMemberTypeItemRepository as M } from "@umbraco-cms/backoffice/member-type";
var q = Object.defineProperty, O = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, c = (e, t, i, a) => {
  for (var n = a > 1 ? void 0 : a ? O(t, i) : t, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (n = (a ? s(t, i, n) : s(n)) || n);
  return a && n && q(t, i, n), n;
}, h = (e, t, i) => t.has(e) || f("Cannot " + i), b = (e, t, i) => (h(e, t, "read from private field"), t.get(e)), u = (e, t, i) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), x = (e, t, i, a) => (h(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (h(e, t, "access private method"), i), r, v, o, d, C;
let m = class extends A {
  constructor() {
    super(), u(this, o), this._tableConfig = {
      allowSelection: !1
    }, this._tableColumns = [
      {
        name: this.localize.term("general_name"),
        alias: "memberName"
      },
      {
        name: this.localize.term("general_username"),
        alias: "memberUsername"
      },
      {
        name: this.localize.term("general_email"),
        alias: "memberEmail"
      },
      {
        name: this.localize.term("content_membertype"),
        alias: "memberType"
      },
      {
        name: this.localize.term("member_kind"),
        alias: "memberKind"
      },
      {
        name: "",
        alias: "entityActions",
        align: "right"
      }
    ], this._tableItems = [], u(this, r), u(this, v, new M(this)), this.consumeContext(w, (e) => {
      x(this, r, e), y(this, o, d).call(this);
    });
  }
  render() {
    return p`
			<umb-table .config=${this._tableConfig} .columns=${this._tableColumns} .items=${this._tableItems}></umb-table>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
d = function() {
  b(this, r) && this.observe(b(this, r).items, (e) => y(this, o, C).call(this, e), "umbCollectionItemsObserver");
};
C = async function(e) {
  const t = e.map((a) => a.memberType.unique), { data: i } = await b(this, v).requestItems(t);
  this._tableItems = e.map((a) => {
    const n = a.variants[0].name, l = a.kind === E.API ? this.localize.term("member_memberKindApi") : this.localize.term("member_memberKindDefault"), s = i?.find((T) => T.unique === a.memberType.unique);
    return {
      id: a.unique,
      icon: s?.icon,
      data: [
        {
          columnAlias: "memberName",
          value: p`<a href=${"section/member-management/workspace/member/edit/" + a.unique}>${n}</a>`
        },
        {
          columnAlias: "memberUsername",
          value: a.username
        },
        {
          columnAlias: "memberEmail",
          value: a.email
        },
        {
          columnAlias: "memberType",
          value: s?.name
        },
        {
          columnAlias: "memberKind",
          value: l
        },
        {
          columnAlias: "entityActions",
          value: p`<umb-entity-actions-table-column-view
							.value=${{
            entityType: a.entityType,
            unique: a.unique,
            name: a.variants[0].name
          }}></umb-entity-actions-table-column-view>`
        }
      ]
    };
  });
};
m.styles = [
  g,
  I`
			:host {
				display: flex;
				flex-direction: column;
			}
		`
];
c([
  _()
], m.prototype, "_tableConfig", 2);
c([
  _()
], m.prototype, "_tableColumns", 2);
c([
  _()
], m.prototype, "_tableItems", 2);
m = c([
  U("umb-member-table-collection-view")
], m);
const N = m;
export {
  m as UmbMemberTableCollectionViewElement,
  N as default
};
//# sourceMappingURL=member-table-collection-view.element-CVc-5Ry-.js.map
