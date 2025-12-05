import { nothing as c, html as p, property as a, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, s = (i, t, o, r) => {
  for (var e = r > 1 ? void 0 : r ? v(t, o) : t, n = i.length - 1, m; n >= 0; n--)
    (m = i[n]) && (e = (r ? m(t, o, e) : m(e)) || e);
  return r && e && b(t, o, e), e;
};
let l = class extends f {
  render() {
    return this.item ? p`<umb-code-block language="JSON" copy>${JSON.stringify(this.item, null, 2)}</umb-code-block>` : c;
  }
};
s([
  a({ attribute: !1 })
], l.prototype, "item", 2);
l = s([
  u("contentment-data-list-item-ui-code-block")
], l);
export {
  l as ContentmentDataListItemUiCodeBlockElement,
  l as element
};
//# sourceMappingURL=code-block.element.js.map
