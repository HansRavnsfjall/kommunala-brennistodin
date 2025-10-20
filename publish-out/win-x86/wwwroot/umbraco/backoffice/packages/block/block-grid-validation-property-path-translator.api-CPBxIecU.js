import { UmbBlockEditorValidationPropertyPathTranslatorBase as e } from "@umbraco-cms/backoffice/block";
class n extends e {
  async translate(a, t) {
    return t.value && (a = await this._translateBlockData(a, t.value.contentData, "$.value.contentData"), a = await this._translateBlockData(a, t.value.settingsData, "$.value.settingsData")), a;
  }
}
export {
  n as UmbBlockGridValidationPropertyPathTranslator,
  n as api
};
//# sourceMappingURL=block-grid-validation-property-path-translator.api-CPBxIecU.js.map
