import { UmbEditableWorkspaceContextBase as a } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as m } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/auth";
import { b as c, c as u, d as l } from "./index-DZ9N36G3.js";
import "@umbraco-cms/backoffice/resources";
import { UmbContextToken as P } from "@umbraco-cms/backoffice/context-api";
import { customElement as h, html as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, d = (r, t, o, s) => {
  for (var e = s > 1 ? void 0 : s ? b(t, o) : t, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (e = (s ? n(t, o, e) : n(e)) || e);
  return s && e && _(t, o, e), e;
};
let p = class extends O {
  constructor() {
    super();
  }
  render() {
    return E`<umb-workspace-editor .enforceNoFooter=${!0}></umb-workspace-editor>`;
  }
};
p = d([
  h("jumpp-processing-pipeline-workspace-element")
], p);
const f = p;
class R extends a {
  constructor(t) {
    super(t, c), this.#e = new m(void 0), this.data = this.#e.asObservable(), this.unique = this.#e.asObservablePart((o) => o?.id), this.#t = new u(this), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: f,
        setup: (o, s) => {
          const e = s.match.params.unique;
          this.load(e);
        }
      }
    ]), this.provideContext(w, this);
  }
  #t;
  #e;
  async load(t) {
    const o = await this.#t.Get(t);
    this.#e.setValue(o);
  }
  getUnique() {
    return this.getData()?.id;
  }
  getEntityType() {
    return l;
  }
  getData() {
    return this.#e.getValue();
  }
  submit() {
    throw new Error("Method not implemented.");
  }
}
const w = new P(
  "jumoo-processing-pipelin-workspace-context"
);
export {
  w as JUMOO_PROCESSING_PIPELINE_WORKSPACE,
  R as JumooProcessingPipelineWorkspaceContext,
  R as api
};
//# sourceMappingURL=pipeline-workspace.context-CWpig-Ra.js.map
