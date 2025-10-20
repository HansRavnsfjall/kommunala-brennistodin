import { U as n } from "./current-user.context.token-BnYpMzWI.js";
import { UmbContextConsumerController as o } from "@umbraco-cms/backoffice/context-api";
const m = async (t) => {
  const r = new o(t, n), e = await r.asPromise().catch(() => {
  });
  return r.destroy(), e?.isCurrentUserAdmin() ?? !1;
};
export {
  m as i
};
//# sourceMappingURL=is-current-user-an-admin.function-CAxmT6R7.js.map
