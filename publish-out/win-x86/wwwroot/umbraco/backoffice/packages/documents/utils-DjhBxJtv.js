import { DocumentVariantStateModel as r } from "@umbraco-cms/backoffice/external/backend-api";
const u = {
  [r.PUBLISHED_PENDING_CHANGES]: 1,
  [r.PUBLISHED]: 1,
  [r.DRAFT]: 2,
  [r.NOT_CREATED]: 3
}, o = (t) => !t || !t.state ? 99 : u[t.state] || 99, D = (t, n) => {
  const s = (a, e) => (a.language?.isDefault ? -1 : 1) - (e.language?.isDefault ? -1 : 1), c = (a, e) => a.variant?.state === r.PUBLISHED_PENDING_CHANGES || a.variant?.state === r.PUBLISHED ? 0 : (a.language?.isMandatory ? -1 : 1) - (e.language?.isMandatory ? -1 : 1), i = (a, e) => o(a.variant) - o(e.variant), m = (a, e) => a.variant?.name.localeCompare(e.variant?.name || "") || 99;
  return s(t, n) || c(t, n) || i(t, n) || m(t, n);
}, d = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
export {
  d as T,
  D as s
};
//# sourceMappingURL=utils-DjhBxJtv.js.map
