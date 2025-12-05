import { nothing as c, html as o, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbPickerSearchResultItemElementBase as a } from "@umbraco-cms/backoffice/picker";
var d = Object.getOwnPropertyDescriptor, b = (e, i, n, r) => {
  for (var t = r > 1 ? void 0 : r ? d(i, n) : i, s = e.length - 1, m; s >= 0; s--)
    (m = e[s]) && (t = m(t) || t);
  return t;
};
let l = class extends a {
  render() {
    if (!this.item) return c;
    const e = this.item;
    return o`
			<umb-ref-item
				name=${e.name}
				id=${e.unique}
				icon=${e.memberType.icon ?? "icon-user"}
				select-only
				?selectable=${!this.disabled}
				?selected=${this._isSelected}
				?disabled=${this.disabled}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		`;
  }
};
l = b([
  u("umb-member-picker-search-result-item")
], l);
export {
  l as UmbMemberPickerSearchResultItemElement,
  l as element
};
//# sourceMappingURL=member-picker-search-result-item.element-CxMOk2G0.js.map
