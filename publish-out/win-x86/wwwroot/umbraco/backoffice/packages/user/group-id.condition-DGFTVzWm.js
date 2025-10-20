import { U as m } from "./current-user.context.token-BnYpMzWI.js";
import { UmbConditionBase as p } from "@umbraco-cms/backoffice/extension-registry";
class h extends p {
  constructor(o, u) {
    super(o, u), this.observeCurrentUser = async (e) => {
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
    }, this.consumeContext(m, (e) => {
      this.observe(e?.currentUser, this.observeCurrentUser, "umbCurrentUserGroupConditionObserver");
    });
  }
}
export {
  h as UmbCurrentUserGroupCondition,
  h as api
};
//# sourceMappingURL=group-id.condition-DGFTVzWm.js.map
