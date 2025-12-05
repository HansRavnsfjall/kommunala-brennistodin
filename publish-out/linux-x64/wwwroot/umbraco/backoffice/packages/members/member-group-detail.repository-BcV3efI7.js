import { b as s, h as u } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { MemberGroupService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbDetailRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class c {
  #r;
  /**
   * Creates an instance of UmbMemberGroupServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a new Member Group scaffold
   * @param {(string | null)} parentUnique
   * @returns { CreateMemberGroupRequestModel }
   * @memberof UmbMemberGroupServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: s,
      unique: m.new(),
      name: ""
    } };
  }
  /**
   * Fetches a Member Group with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: t, error: e } = await i(
      this.#r,
      a.getMemberGroupById({ path: { id: r } })
    );
    return e || !t ? { error: e } : { data: {
      entityType: s,
      unique: t.id,
      name: t.name
    } };
  }
  /**
   * Inserts a new Member Group on the server
   * @param {UmbMemberGroupDetailModel} model
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async create(r) {
    if (!r) throw new Error("Member Group is missing");
    const t = {
      name: r.name,
      id: r.unique
    }, { data: e, error: n } = await i(
      this.#r,
      a.postMemberGroup({
        body: t
      })
    );
    return e && typeof e == "string" ? this.read(e) : { error: n };
  }
  /**
   * Updates a MemberGroup on the server
   * @param {UmbMemberGroupDetailModel} MemberGroup
   * @param model
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async update(r) {
    if (!r.unique) throw new Error("Unique is missing");
    const t = {
      name: r.name
    }, { error: e } = await i(
      this.#r,
      a.putMemberGroupById({
        path: { id: r.unique },
        body: t
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Member Group on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberGroupServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return i(
      this.#r,
      a.deleteMemberGroupById({
        path: { id: r }
      })
    );
  }
}
class M extends p {
  constructor(r) {
    super(r, c, u);
  }
  async create(r) {
    return super.create(r, null);
  }
}
export {
  M as UmbMemberGroupDetailRepository,
  M as default
};
//# sourceMappingURL=member-group-detail.repository-BcV3efI7.js.map
