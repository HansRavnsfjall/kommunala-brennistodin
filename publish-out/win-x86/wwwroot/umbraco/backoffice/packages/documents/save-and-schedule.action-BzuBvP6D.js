import { i as t } from "./manifests-BP7S9LPy.js";
import { UmbWorkspaceActionBase as o } from "@umbraco-cms/backoffice/workspace";
class c extends o {
  async execute() {
    const e = await this.getContext(t);
    if (!e)
      throw new Error("Publishing workspace context not found");
    return e.schedule();
  }
}
export {
  c as UmbDocumentSaveAndScheduleWorkspaceAction,
  c as api
};
//# sourceMappingURL=save-and-schedule.action-BzuBvP6D.js.map
