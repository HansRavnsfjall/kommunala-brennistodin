import { U as i } from "./block-manager.context-token-DnrQaIqt.js";
import { UmbBasicState as o, UmbStringState as u, UmbArrayState as h } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as l } from "@umbraco-cms/backoffice/class-api";
class c extends l {
  constructor(t, e) {
    super(t, i.toString()), this._catalogueRouteBuilderState = new o(void 0), this.catalogueRouteBuilder = this._catalogueRouteBuilderState.asObservable(), this._workspacePath = new u(void 0), this.workspacePath = this._workspacePath.asObservable(), this._layoutEntries = new h([], (a) => a.contentKey), this.layoutEntries = this._layoutEntries.asObservable(), this.layoutEntriesLength = this._layoutEntries.asObservablePart((a) => a.length), this._retrieveManager = this.consumeContext(e, (a) => {
      this._manager = a, this._gotBlockManager();
    }).asPromise({ preventTimeout: !0 });
  }
  getLength() {
    return this._layoutEntries.getValue().length;
  }
  async getManager() {
    return await this._retrieveManager, this._manager;
  }
  setDataPath(t) {
    this._dataPath = t;
  }
  // Public methods:
  layoutOf(t) {
    return this._layoutEntries.asObservablePart((e) => e.find((a) => a.contentKey === t));
  }
  getLayoutOf(t) {
    return this._layoutEntries.getValue().find((e) => e.contentKey === t);
  }
  setLayouts(t) {
    return this._layoutEntries.setValue(t);
  }
  setOneLayout(t) {
    return this._layoutEntries.appendOne(t);
  }
  async delete(t) {
    await this._retrieveManager;
    const e = this._layoutEntries.value.find((a) => a.contentKey === t);
    if (!e)
      throw new Error(`Cannot delete block, missing layout for ${t}`);
    this._layoutEntries.removeOne(t), this._manager.removeOneContent(t), e.settingsKey && this._manager.removeOneSettings(e.settingsKey), this._manager.removeExposesOf(t);
  }
  // insert/paste from property value methods:
  async _insertFromPropertyValues(t, e) {
    await Promise.all(
      t.map(async (a) => {
        e = await this._insertFromPropertyValue(a, e);
      })
    );
  }
  async _insertBlockFromPropertyValue(t, e, a) {
    const r = e.contentData.find((s) => s.key === t.contentKey);
    if (!r)
      throw new Error("No content found for layout entry");
    const n = e.settingsData.find((s) => s.key === t.settingsKey);
    await this.insert(t, r, n, a);
  }
}
export {
  c as U
};
//# sourceMappingURL=block-entries.context-CdnpL0k5.js.map
