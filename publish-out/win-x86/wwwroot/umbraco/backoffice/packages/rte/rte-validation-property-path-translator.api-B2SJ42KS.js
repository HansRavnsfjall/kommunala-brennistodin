import { UmbBlockEditorValidationPropertyPathTranslatorBase as e } from "@umbraco-cms/backoffice/block";
class r extends e {
  async translate(a, t) {
    return !t.value || !t.value.blocks || (a = await this._translateBlockData(a, t.value.blocks.contentData, "$.value.blocks.contentData"), a = await this._translateBlockData(a, t.value.blocks.settingsData, "$.value.blocks.settingsData")), a;
  }
}
export {
  r as UmbRteValidationPropertyPathTranslator,
  r as api
};
//# sourceMappingURL=rte-validation-property-path-translator.api-B2SJ42KS.js.map
