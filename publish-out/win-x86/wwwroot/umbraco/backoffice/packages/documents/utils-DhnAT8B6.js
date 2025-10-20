import { DocumentVariantStateModel as t } from "@umbraco-cms/backoffice/external/backend-api";
function e(a) {
  return a.language.isMandatory && a.variant?.state !== t.PUBLISHED && a.variant?.state !== t.PUBLISHED_PENDING_CHANGES;
}
export {
  e as i
};
//# sourceMappingURL=utils-DhnAT8B6.js.map
