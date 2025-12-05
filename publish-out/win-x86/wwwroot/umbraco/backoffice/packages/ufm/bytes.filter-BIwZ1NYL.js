import { U as i } from "./base.filter-aeoEGVc7.js";
import { formatBytes as f } from "@umbraco-cms/backoffice/utils";
class l extends i {
  filter(e, r, t, m) {
    return e?.length ? f(Number(e), { decimals: r, kilo: t, culture: m }) : "";
  }
}
export {
  l as api
};
//# sourceMappingURL=bytes.filter-BIwZ1NYL.js.map
