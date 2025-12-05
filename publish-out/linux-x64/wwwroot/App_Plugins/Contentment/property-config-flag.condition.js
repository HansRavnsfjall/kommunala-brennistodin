import { UmbConditionBase as e } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_PROPERTY_CONTEXT as n } from "@umbraco-cms/backoffice/property";
class d extends e {
  constructor(a, t) {
    super(a, t), this.consumeContext(n, (s) => {
      this.observe(s == null ? void 0 : s.config, (i) => {
        const o = this.config.propertyConfigAlias;
        this.permitted = !!o && !!(i != null && i.getValueByAlias(o));
      });
    });
  }
}
export {
  d as ContentmentPropertyConfigFlagCondition,
  d as api
};
//# sourceMappingURL=property-config-flag.condition.js.map
