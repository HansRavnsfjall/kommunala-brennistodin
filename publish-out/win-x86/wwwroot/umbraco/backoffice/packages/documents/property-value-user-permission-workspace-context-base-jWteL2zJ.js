import { G as s, H as a, I as i } from "./manifests-BfVrApfB.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApiByAlias as _ } from "@umbraco-cms/backoffice/extension-registry";
class P extends n {
  _setPermissions(e, t, r) {
    e.forEach((o) => {
      this.#e({
        verb: s,
        stateManager: t,
        property: o
      }), this.#e({
        verb: a,
        stateManager: r,
        property: o
      });
    });
  }
  #e(e) {
    _(this, i, [
      {
        config: {
          allOf: [e.verb],
          match: {
            propertyType: {
              unique: e.property.unique
            }
          }
        },
        onChange: (t) => {
          const r = "UMB_PROPERTY_" + e.property.unique;
          t ? e.stateManager.addRule({
            unique: r,
            propertyType: {
              unique: e.property.unique
            }
          }) : e.stateManager.removeRule(r);
        }
      }
    ]);
  }
}
export {
  P as U
};
//# sourceMappingURL=property-value-user-permission-workspace-context-base-jWteL2zJ.js.map
