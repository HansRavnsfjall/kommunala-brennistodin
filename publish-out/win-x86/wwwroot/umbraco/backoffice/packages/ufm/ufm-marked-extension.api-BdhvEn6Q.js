import { u as m } from "./marked-ufm.plugin-BPsEFTAZ.js";
import { umbExtensionsRegistry as s } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsApiInitializer as n } from "@umbraco-cms/backoffice/extension-api";
class l {
  constructor(t, i) {
    new n(t, s, "ufmComponent", [], void 0, (a) => {
      i.use(
        m(
          a.map((r) => {
            const e = r;
            if (!(!e.manifest || !e.api))
              return {
                alias: e.manifest.meta.alias || e.manifest.alias,
                marker: e.manifest.meta.marker,
                render: e.api.render
              };
          }).filter((r) => r)
        )
      );
    });
  }
  destroy() {
  }
}
export {
  l as UmbUfmMarkedExtensionApi,
  l as default
};
//# sourceMappingURL=ufm-marked-extension.api-BdhvEn6Q.js.map
