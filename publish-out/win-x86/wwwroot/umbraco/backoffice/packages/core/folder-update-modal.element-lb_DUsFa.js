import { U as d } from "./folder-modal-element-base-BzOKRBrY.js";
import { customElement as f } from "@umbraco-cms/backoffice/external/lit";
var n = Object.getOwnPropertyDescriptor, u = (e, r, s, l) => {
  for (var o = l > 1 ? void 0 : l ? n(r, s) : r, t = e.length - 1, a; t >= 0; t--)
    (a = e[t]) && (o = a(o) || o);
  return o;
};
let i = class extends d {
  async init() {
    if (!this.folderRepository) throw new Error("A folder repository is required to load a folder");
    if (!this.data?.unique) throw new Error("A unique is required to load folder");
    const { data: e } = await this.folderRepository.requestByUnique(this.data.unique);
    e && (this.value = { folder: e });
  }
  async onFormSubmit({ name: e }) {
    if (!this.folderRepository) throw new Error("A folder repository is required to update a folder");
    if (this.value.folder === void 0) throw new Error("The folder was not initialized correctly");
    const { data: r } = await this.folderRepository.save({
      ...this.value.folder,
      name: e
    });
    r && (this.value = { folder: r }, this._submitModal());
  }
};
i = u([
  f("umb-folder-update-modal")
], i);
const p = i;
export {
  i as UmbFolderModalElement,
  p as default
};
//# sourceMappingURL=folder-update-modal.element-lb_DUsFa.js.map
