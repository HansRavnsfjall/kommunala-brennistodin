import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { DocumentService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
class o extends n {
  /**
   * The cached document configuration.
   */
  static #t;
  constructor(t) {
    super(t, u);
  }
  /**
   * Get the document configuration from the server, or return the cached configuration if it has already been fetched.
   * @returns A promise that resolves to the document configuration, or null if the configuration could not be fetched.
   */
  getDocumentConfiguration() {
    return o.#t ??= this.fetchDocumentConfiguration();
  }
  /**
   * Fetch the document configuration from the server.
   * @returns A promise that resolves to the document configuration, or null if the configuration could not be fetched.
   */
  async fetchDocumentConfiguration() {
    const { data: t } = await i(this, r.getDocumentConfiguration());
    return t ?? null;
  }
}
const u = new e(
  "UmbDocumentConfigurationContext"
);
export {
  u as UMB_DOCUMENT_CONFIGURATION_CONTEXT,
  o as UmbDocumentConfigurationContext,
  o as default
};
//# sourceMappingURL=document-configuration.context-Bz7FvH_D.js.map
