import { nothing as p, html as f, property as l, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, u = Object.getOwnPropertyDescriptor, a = (s, e, i, n) => {
  for (var t = n > 1 ? void 0 : n ? u(e, i) : e, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (t = (n ? r(e, i, t) : r(t)) || t);
  return n && t && v(e, i, t), t;
};
let m = class extends h {
  render() {
    return this.item ? f`
			<contentment-info-box
				type="transparent"
				.icon=${this.item.icon ?? void 0}
				.heading=${this.item.name ?? this.item.value}
				.message=${this.item.description ?? void 0}></contentment-info-box>
		` : p;
  }
};
a([
  l({ attribute: !1 })
], m.prototype, "item", 2);
m = a([
  c("contentment-data-list-item-ui-info-box")
], m);
export {
  m as ContentmentDataListItemUiInfoBoxElement,
  m as element
};
//# sourceMappingURL=info-box.element.js.map
