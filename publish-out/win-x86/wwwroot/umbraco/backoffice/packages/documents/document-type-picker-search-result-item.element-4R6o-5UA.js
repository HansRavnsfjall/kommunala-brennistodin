import { nothing as o, when as u, html as c, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbPickerSearchResultItemElementBase as d } from "@umbraco-cms/backoffice/picker";
var h = Object.getOwnPropertyDescriptor, p = (e, s, r, l) => {
  for (var t = l > 1 ? void 0 : l ? h(s, r) : s, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (t = n(t) || t);
  return t;
};
let m = class extends d {
  render() {
    if (!this.item) return o;
    const e = this.item;
    return c`
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
				${u(
      e.isElement,
      () => c`
						<uui-tag slot="tag" look="secondary">
							<umb-localize key="contentTypeEditor_elementType">Element Type</umb-localize>
						</uui-tag>
					`
    )}
			</umb-ref-item>
		`;
  }
};
m = p([
  a("umb-document-type-picker-search-result-item")
], m);
export {
  m as UmbDocumentTypePickerSearchResultItemElement,
  m as element
};
//# sourceMappingURL=document-type-picker-search-result-item.element-4R6o-5UA.js.map
