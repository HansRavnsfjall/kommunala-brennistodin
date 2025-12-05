import { UmbContextToken as m } from "@umbraco-cms/backoffice/context-api";
import { UmbChangeEvent as o } from "@umbraco-cms/backoffice/event";
import { UmbContextBase as r } from "@umbraco-cms/backoffice/class-api";
import { UmbDeprecation as a } from "@umbraco-cms/backoffice/utils";
import { UmbInteractionMemoryManager as h } from "@umbraco-cms/backoffice/interaction-memory";
import { UmbRepositoryItemsManager as c } from "@umbraco-cms/backoffice/repository";
import { umbOpenModal as l, umbConfirmModal as u } from "@umbraco-cms/backoffice/modal";
const d = new m("UmbPickerInputContext");
class U extends r {
  /**
   * Creates an instance of UmbPickerInputContext.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repositoryAlias - The alias of the repository to use.
   * @param {(string | UmbModalToken<UmbPickerModalData<PickerItemType>, PickerModalValueType>)} modalAlias - The alias of the modal to use.
   * @param {((entry: PickedItemType) => string | undefined)} [getUniqueMethod] - DEPRECATED since 15.3. Will be removed in v. 17: A method to get the unique key from the item.
   * @memberof UmbPickerInputContext
   */
  constructor(t, e, i, n) {
    super(t, d), this.interactionMemory = new h(this), this._max = 1 / 0, this._min = 0, this.modalAlias = i, this.#e = n ? (s) => (new a({
      deprecated: "The getUniqueMethod parameter.",
      removeInVersion: "17.0.0",
      solution: "The required unique property on the item will be used instead."
    }).warn(), n(s)) : (s) => s.unique, this.#t = new c(this, e, n), this.selection = this.#t.uniques, this.statuses = this.#t.statuses, this.selectedItems = this.#t.items;
  }
  #e;
  #t;
  /**
   * Define a minimum amount of selected items in this input, for this input to be valid.
   */
  get max() {
    return this._max;
  }
  set max(t) {
    this._max = t === void 0 ? 1 / 0 : t;
  }
  /**
   * Define a maximum amount of selected items in this input, for this input to be valid.
   */
  get min() {
    return this._min;
  }
  set min(t) {
    this._min = t === void 0 ? 0 : t;
  }
  getSelection() {
    return this.#t.getUniques();
  }
  setSelection(t) {
    this.#t.setUniques(t.filter((e) => e !== null));
  }
  async openPicker(t) {
    await this.#t.init;
    const e = await l(this, this.modalAlias, {
      data: {
        multiple: this._max !== 1,
        ...t
      },
      value: {
        selection: this.getSelection()
      }
    }).catch(() => {
    });
    e && (this.setSelection(e.selection), this.getHostElement().dispatchEvent(new o()));
  }
  async requestRemoveItem(t) {
    const i = this.#t.getItems().find((n) => this.#e(n) === t)?.name ?? "#general_notFound";
    await u(this, {
      color: "danger",
      headline: `#actions_remove ${i}?`,
      content: `#defaultdialogs_confirmremove ${i}?`,
      confirmLabel: "#actions_remove"
    }), this.#i(t);
  }
  #i(t) {
    const e = this.getSelection().filter((i) => i !== t);
    this.setSelection(e), this.getHostElement().dispatchEvent(new o());
  }
}
export {
  d as UMB_PICKER_INPUT_CONTEXT,
  U as UmbPickerInputContext
};
//# sourceMappingURL=index.js.map
