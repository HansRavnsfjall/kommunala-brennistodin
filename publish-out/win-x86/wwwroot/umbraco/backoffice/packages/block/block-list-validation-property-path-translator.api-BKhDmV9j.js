import { UmbBlockEditorValidationPropertyPathTranslatorBase as e } from "@umbraco-cms/backoffice/block";
class n extends e {
  async translate(a, t) {
    return t.value && (a = await this._translateBlockData(a, t.value.contentData, "$.value.contentData"), a = await this._translateBlockData(a, t.value.settingsData, "$.value.settingsData")), a;
  }
}
export {
  n as UmbBlockListValidationPropertyPathTranslator,
  n as api
};
//# sourceMappingURL=block-list-validation-property-path-translator.api-BKhDmV9j.js.map
