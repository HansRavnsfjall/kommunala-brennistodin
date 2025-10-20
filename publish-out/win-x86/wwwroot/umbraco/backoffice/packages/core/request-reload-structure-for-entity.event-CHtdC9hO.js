import { UmbControllerEvent as s } from "@umbraco-cms/backoffice/controller-api";
class n extends s {
  constructor(t, r) {
    super(t), this._args = r;
  }
  getEntityType() {
    return this._args.entityType;
  }
  getUnique() {
    return this._args.unique;
  }
  getEventUnique() {
    return this._args.eventUnique;
  }
}
class e extends n {
  static {
    this.TYPE = "request-reload-structure-for-entity";
  }
  constructor(t) {
    super(e.TYPE, t);
  }
}
export {
  e as U,
  n as a
};
//# sourceMappingURL=request-reload-structure-for-entity.event-CHtdC9hO.js.map
