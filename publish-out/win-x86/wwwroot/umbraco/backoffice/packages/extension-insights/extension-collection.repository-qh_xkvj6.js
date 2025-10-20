import { U as l } from "./manifests-DEADnW7y.js";
import { umbExtensionsRegistry as r } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class y extends p {
  constructor(e) {
    super(e);
  }
  async requestCollection(e) {
    let s = r.getAllExtensions().map((t) => ({
      ...t,
      unique: t.alias,
      entityType: l
    }));
    const i = e.skip || 0, a = e.take || 100;
    if (e.filter) {
      const t = e.filter.toLowerCase();
      s = s.filter(
        (o) => o.name.toLowerCase().includes(t) || o.alias.toLowerCase().includes(t)
      );
    }
    e.type && (s = s.filter((t) => t.type === e.type)), s.sort((t, o) => t.type.localeCompare(o.type) || t.alias.localeCompare(o.alias));
    const n = s.length;
    return { data: { items: s.slice(i, i + a), total: n } };
  }
}
export {
  y as UmbExtensionCollectionRepository,
  y as api
};
//# sourceMappingURL=extension-collection.repository-qh_xkvj6.js.map
