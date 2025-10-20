import { U as m } from "./picker-search-result-item-element-base-DBhAKPkt.js";
import { nothing as u, html as o, customElement as a } from "@umbraco-cms/backoffice/external/lit";
var d = Object.getOwnPropertyDescriptor, h = (e, i, c, r) => {
  for (var t = r > 1 ? void 0 : r ? d(i, c) : i, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (t = l(t) || t);
  return t;
};
let n = class extends m {
  render() {
    const e = this.item;
    return e ? o`
			<umb-ref-item
				name=${e.name}
				id=${e.unique}
				icon=${e.icon ?? "icon-document"}
				select-only
				?selectable=${!this.disabled}
				?selected=${this._isSelected}
				?disabled=${this.disabled}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		` : u;
  }
};
n = h([
  a("umb-default-picker-search-result-item")
], n);
export {
  n as UmbDefaultPickerSearchResultItemElement,
  n as element
};
//# sourceMappingURL=default-picker-search-result-item.element-BpS1umDH.js.map
