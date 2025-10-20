import { nothing as d, html as _, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbPickerSearchResultItemElementBase as f } from "@umbraco-cms/backoffice/picker";
var v = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, k = (e, t, i, c) => {
  for (var s = c > 1 ? void 0 : c ? v(t, i) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (s = a(s) || s);
  return s;
}, b = (e, t, i) => t.has(e) || l("Cannot " + i), S = (e, t, i) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), u = (e, t, i) => (b(e, t, "access private method"), i), r, o, h;
let m = class extends f {
  constructor() {
    super(...arguments), S(this, r);
  }
  render() {
    return this.item ? _`
			<umb-entity-item-ref
				.item=${this.item}
				select-only
				?selectable=${!this.disabled}
				?selected=${this._isSelected}
				?disabled=${this.disabled}
				@deselected=${u(this, r, h)}
				@selected=${u(this, r, o)}></umb-entity-item-ref>
		` : d;
  }
};
r = /* @__PURE__ */ new WeakSet();
o = function(e) {
  e.unique === this.item.unique && this.pickerContext?.selection.select(this.item.unique);
};
h = function(e) {
  e.unique === this.item.unique && this.pickerContext?.selection.deselect(this.item.unique);
};
m = k([
  p("umb-document-picker-search-result-item")
], m);
export {
  m as UmbDocumentPickerSearchResultItemElement,
  m as element
};
//# sourceMappingURL=document-picker-search-result-item.element-DaWo3iMs.js.map
