import { b as n } from "./constants-BH7VsFPT.js";
import { U as t } from "./index-DtiCbM0v.js";
import { UmbDefaultCollectionContext as a } from "@umbraco-cms/backoffice/collection";
import { UmbArrayState as c, UmbStringState as d } from "@umbraco-cms/backoffice/observable-api";
import { UmbDirection as i } from "@umbraco-cms/backoffice/utils";
const s = [
  {
    unique: "nameAscending",
    label: "#user_sortNameAscending",
    config: {
      orderBy: t.NAME,
      orderDirection: i.ASCENDING
    }
  },
  {
    unique: "nameDescending",
    label: "#user_sortNameDescending",
    config: {
      orderBy: t.NAME,
      orderDirection: i.DESCENDING
    }
  },
  {
    unique: "createDateDescending",
    label: "#user_sortCreateDateDescending",
    config: {
      orderBy: t.CREATE_DATE,
      orderDirection: i.DESCENDING
    }
  },
  {
    unique: "createDateAscending",
    label: "#user_sortCreateDateAscending",
    config: {
      orderBy: t.CREATE_DATE,
      orderDirection: i.ASCENDING
    }
  },
  {
    unique: "lastLoginDateDescending",
    label: "#user_sortLastLoginDateDescending",
    config: {
      orderBy: t.LAST_LOGIN_DATE,
      orderDirection: i.DESCENDING
    }
  }
];
class p extends a {
  constructor(e) {
    const r = s[0];
    super(e, n, {
      orderBy: r.config.orderBy,
      orderDirection: r.config.orderDirection
    }), this.#e = new c([], (o) => o.label), this.orderByOptions = this.#e.asObservable(), this.#r = new d(void 0), this.activeOrderByOption = this.#r.asObservable(), this.#e.setValue(s), this.#r.setValue(r.unique);
  }
  #e;
  #r;
  /**
   * Sets the active order by option for the collection and refreshes the collection.
   * @param {string} unique
   * @memberof UmbUserCollectionContext
   */
  setActiveOrderByOption(e) {
    const r = this.#e.getValue().find((o) => o.unique === e);
    this.#r.setValue(e), this.setFilter({ orderBy: r?.config.orderBy, orderDirection: r?.config.orderDirection });
  }
  /**
   * Sets the state filter for the collection and refreshes the collection.
   * @param {Array<UmbUserStateFilterModel>} selection
   * @memberof UmbUserCollectionContext
   */
  setStateFilter(e) {
    this.setFilter({ userStates: e });
  }
  /**
   * Sets the order by filter for the collection and refreshes the collection.
   * @param {UmbUserOrderByModel} orderBy
   * @memberof UmbUserCollectionContext
   */
  setOrderByFilter(e) {
    this.setFilter({ orderBy: e });
  }
  /**
   * Sets the user group filter for the collection and refreshes the collection.
   * @param {Array<string>} selection
   * @memberof UmbUserCollectionContext
   */
  setUserGroupFilter(e) {
    this.setFilter({ userGroupIds: e });
  }
  /**
   * Sets the order direction filter for the collection and refreshes the collection.
   * @param {any} orderDirection
   * @memberof UmbUserCollectionContext
   */
  setOrderDirectionFilter(e) {
    this.setFilter({ orderDirection: e });
  }
}
export {
  p as UmbUserCollectionContext,
  p as api
};
//# sourceMappingURL=user-collection.context-5vQQgfTf.js.map
