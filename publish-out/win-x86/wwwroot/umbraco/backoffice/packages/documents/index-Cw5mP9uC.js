import { fromCamelCase as t } from "@umbraco-cms/backoffice/utils";
function n(e, r) {
  switch (r) {
    case "contentTypeAlias":
      return e.contentTypeAlias;
    case "createDate":
      return e.createDate.toLocaleString();
    case "creator":
    case "owner":
      return e.creator;
    case "name":
      return e.name;
    case "state":
      return t(e.state);
    case "published":
      return e.state !== "Draft" ? "True" : "False";
    case "sortOrder":
      return e.sortOrder;
    case "updateDate":
      return e.updateDate.toLocaleString();
    case "updater":
      return e.updater;
    default:
      return e.values.find((a) => a.alias === r)?.value ?? "";
  }
}
export {
  n as g
};
//# sourceMappingURL=index-Cw5mP9uC.js.map
