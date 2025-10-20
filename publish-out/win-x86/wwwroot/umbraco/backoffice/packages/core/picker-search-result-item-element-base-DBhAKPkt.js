import { UmbContextToken as p } from "@umbraco-cms/backoffice/context-api";
import { property as m, state as h, nothing as u, html as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
const b = new p("UmbPickerContext");
var f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, c = (r, e, s, i) => {
  for (var t = i > 1 ? void 0 : i ? _(e, s) : e, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (t = (i ? n(e, s, t) : n(t)) || t);
  return i && t && f(e, s, t), t;
};
class l extends a {
  constructor() {
    super(), this._isSelected = !1, this.consumeContext(b, (e) => {
      this.pickerContext = e, this.#t();
    });
  }
  #e;
  set item(e) {
    this.#e = e, this.#t();
  }
  get item() {
    return this.#e;
  }
  #t() {
    const e = this.pickerContext?.selection;
    if (!e) return;
    const s = this.item?.unique;
    s !== void 0 && this.observe(e.selection, () => {
      this._isSelected = e.isSelected(s);
    });
  }
  render() {
    const e = this.item;
    return e ? d`
			<umb-ref-item
				name=${e.name}
				select-only
				?selectable=${!this.disabled}
				?selected=${this._isSelected}
				?disabled=${this.disabled}
				@deselected=${() => this.pickerContext?.selection.deselect(e.unique)}
				@selected=${() => this.pickerContext?.selection.select(e.unique)}>
			</umb-ref-item>
		` : u;
  }
}
c([
  m({ type: Object })
], l.prototype, "item", 1);
c([
  m({ type: Boolean })
], l.prototype, "disabled", 2);
c([
  h()
], l.prototype, "_isSelected", 2);
export {
  l as U,
  b as a
};
//# sourceMappingURL=picker-search-result-item-element-base-DBhAKPkt.js.map
