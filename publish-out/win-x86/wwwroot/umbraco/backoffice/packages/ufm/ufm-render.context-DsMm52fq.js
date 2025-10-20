import { UmbContextBase as t } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as s } from "@umbraco-cms/backoffice/context-api";
import { UmbObjectState as o } from "@umbraco-cms/backoffice/observable-api";
class i extends t {
  constructor(e) {
    super(e, r), this.#e = new o(void 0), this.value = this.#e.asObservable();
  }
  #e;
  getValue() {
    return this.#e.getValue();
  }
  setValue(e) {
    this.#e.setValue(e);
  }
}
const r = new s("UmbUfmRenderContext");
export {
  i as U,
  r as a
};
//# sourceMappingURL=ufm-render.context-DsMm52fq.js.map
