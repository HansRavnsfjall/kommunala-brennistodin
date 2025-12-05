import { c as t, K as o } from "./index.js";
import { UmbSaveWorkspaceAction as a } from "@umbraco-cms/backoffice/workspace";
import { umbOpenModal as r } from "@umbraco-cms/backoffice/modal";
class m extends a {
  async execute() {
    await super.execute();
    const e = await this.getContext(
      t
    );
    if (!e)
      throw new Error("Forms form workspace context not found");
    await r(this, o, {
      data: {
        unique: e.getUnique()
      }
    }).catch(() => {
    });
  }
}
export {
  m as FormsSaveAndPreviewWorkspaceAction,
  m as api
};
//# sourceMappingURL=save-and-preview.action.js.map
