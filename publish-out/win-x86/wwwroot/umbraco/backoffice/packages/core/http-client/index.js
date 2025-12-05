import { client as t } from "@umbraco-cms/backoffice/external/backend-api";
import { client as l } from "@umbraco-cms/backoffice/external/backend-api";
t.setConfig({
  credentials: "include"
});
export {
  l as umbHttpClient
};
//# sourceMappingURL=index.js.map
