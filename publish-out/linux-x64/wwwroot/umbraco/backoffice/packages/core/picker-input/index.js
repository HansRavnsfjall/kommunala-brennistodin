import { UmbContextToken as r } from "@umbraco-cms/backoffice/context-api";
import { UmbChangeEvent as o } from "@umbraco-cms/backoffice/event";
import { UmbContextBase as m } from "@umbraco-cms/backoffice/class-api";
import { UmbRepositoryItemsManager as a } from "@umbraco-cms/backoffice/repository";
import { umbOpenModal as h, umbConfirmModal as l } from "@umbraco-cms/backoffice/modal";
import { UmbDeprecation as c } from "@umbraco-cms/backoffice/utils";
const u = new r("UmbPickerInputContext");
class b extends m {
  /**
   * Creates an instance of UmbPickerInputContext.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repositoryAlias - The alias of the repository to use.
   * @param {(string | UmbModalToken<UmbPickerModalData<PickerItemType>, PickerModalValueType>)} modalAlias - The alias of the modal to use.
   * @param {((entry: PickedItemType) => string | undefined)} [getUniqueMethod] - DEPRECATED since 15.3. Will be removed in v. 17: A method to get the unique key from the item.
   * @memberof UmbPickerInputContext
   */
  constructor(e, t, i, n) {
    super(e, u), this._max = 1 / 0, this._min = 0, this.modalAlias = i, this.#t = n ? (s) => (new c({
      deprecated: "The getUniqueMethod parameter.",
      removeInVersion: "17.0.0",
      solution: "The required unique property on the item will be used instead."
    }).warn(), n(s)) : (s) => s.unique, this.#e = new a(this, t, n), this.selection = this.#e.uniques, this.selectedItems = this.#e.items;
  }
  #t;
  #e;
  /**
   * Define a minimum amount of selected items in this input, for this input to be valid.
   */
  get max() {
    return this._max;
  }
  set max(e) {
    this._max = e === void 0 ? 1 / 0 : e;
  }
  /**
   * Define a maximum amount of selected items in this input, for this input to be valid.
   */
  get min() {
    return this._min;
  }
  set min(e) {
    this._min = e === void 0 ? 0 : e;
  }
  getSelection() {
    return this.#e.getUniques();
  }
  setSelection(e) {
    this.#e.setUniques(e.filter((t) => t !== null));
  }
  async openPicker(e) {
    await this.#e.init;
    const t = await h(this, this.modalAlias, {
      data: {
        multiple: this._max !== 1,
        ...e
      },
      value: {
        selection: this.getSelection()
      }
    }).catch(() => {
    });
    t && (this.setSelection(t.selection), this.getHostElement().dispatchEvent(new o()));
  }
  async requestRemoveItem(e) {
    const t = this.#e.getItems().find((i) => this.#t(i) === e);
    if (!t) throw new Error("Could not find item with unique: " + e);
    await l(this, {
      color: "danger",
      headline: `Remove ${t.name}?`,
      content: "Are you sure you want to remove this item",
      confirmLabel: "#actions_remove"
    }), this.#i(e);
  }
  #i(e) {
    const t = this.getSelection().filter((i) => i !== e);
    this.setSelection(t), this.getHostElement().dispatchEvent(new o());
  }
}
export {
  u as UMB_PICKER_INPUT_CONTEXT,
  b as UmbPickerInputContext
};
//# sourceMappingURL=index.js.map
