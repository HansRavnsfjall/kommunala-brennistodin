import { batchTryExecute as o, tryExecute as n, UmbError as l } from "@umbraco-cms/backoffice/resources";
import { batchArray as u } from "@umbraco-cms/backoffice/utils";
import { umbPeekError as h } from "@umbraco-cms/backoffice/notification";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
import { U, U as g } from "../entity-item-ref.element-D7uqzGIJ.js";
class E extends c {
  #e;
  #t;
  #r = 40;
  constructor(e, t) {
    super(e), this.#e = t.api, this.#t = t.uniques;
  }
  async request() {
    if (!this.#t) throw new Error("Uniques are missing");
    let e, t;
    if (this.#t.length > this.#r) {
      const s = u(this.#t, this.#r), i = await o(this, s, (r) => this.#e({ uniques: r })), a = i.filter((r) => r.status === "rejected");
      a.length > 0 && (t = await this.#s(a)), e = i.filter((r) => r.status === "fulfilled").flatMap((r) => r.value.data);
    } else {
      const s = await n(this, this.#e({ uniques: this.#t }));
      e = s.data, t = s.error;
    }
    return { data: e, error: t };
  }
  async #s(e) {
    const t = e[0];
    return await h(this, {
      headline: "Error fetching items",
      message: "An error occurred while fetching items."
    }), new l(t.reason);
  }
}
export {
  U as UmbEntityItemRefElement,
  E as UmbItemDataApiGetRequestController,
  g as element
};
//# sourceMappingURL=index.js.map
