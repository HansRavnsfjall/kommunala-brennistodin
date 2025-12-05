import { U as d } from "./folder-modal-element-base-BzOKRBrY.js";
import { state as c, customElement as n } from "@umbraco-cms/backoffice/external/lit";
var p = Object.defineProperty, h = Object.getOwnPropertyDescriptor, f = (e, o, t, a) => {
  for (var r = a > 1 ? void 0 : a ? h(o, t) : o, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (r = (a ? i(o, t, r) : i(r)) || r);
  return a && r && p(o, t, r), r;
};
let l = class extends d {
  constructor() {
    super(), this._isNew = !0;
  }
  async init() {
    if (!this.folderRepository) throw new Error("A folder repository is required to create a folder");
    const { data: e } = await this.folderRepository.createScaffold();
    e && (this._folderScaffold = e);
  }
  async onFormSubmit({ name: e }) {
    if (!this.folderRepository) throw new Error("A folder repository is required to create a folder");
    if (!this._folderScaffold) throw new Error("The folder scaffold was not initialized correctly");
    if (!this.data?.parent) throw new Error("A parent is required to create folder");
    const o = {
      ...this._folderScaffold,
      name: e
    }, { data: t } = await this.folderRepository.create(o, this.data.parent.unique);
    t && (this.value = { folder: t }, this._submitModal());
  }
};
f([
  c()
], l.prototype, "_folderScaffold", 2);
l = f([
  n("umb-folder-create-modal")
], l);
const w = l;
export {
  l as UmbFolderCreateModalElement,
  w as default
};
//# sourceMappingURL=folder-create-modal.element-5mizfH9T.js.map
