import { U as o } from "./current-user.context.token-BnYpMzWI.js";
import { UmbConditionBase as u } from "@umbraco-cms/backoffice/extension-registry";
class f extends u {
  constructor(e, s) {
    super(e, s), this.consumeContext(o, (t) => {
      this.observe(t?.currentUser, this.#e, "umbCurrentUserGroupConditionObserver");
    });
  }
  #e = async (e) => {
    const { match: s, oneOf: t, allOf: i, noneOf: n } = this.config;
    if (s) {
      this.permitted = e.userGroupUniques.includes(s);
      return;
    }
    if (t) {
      this.permitted = t.some((r) => e.userGroupUniques.includes(r));
      return;
    }
    if (i) {
      this.permitted = i.every((r) => e.userGroupUniques.includes(r));
      return;
    }
    if (n && n.some((r) => e.userGroupUniques.includes(r))) {
      this.permitted = !1;
      return;
    }
    this.permitted = !0;
  };
}
export {
  f as UmbCurrentUserGroupCondition,
  f as api
};
//# sourceMappingURL=group-id.condition-BY2jrlOk.js.map
