import { H as m, b as i, p, t as D, v as P, l as n, F as b, a as W, x as f, C as x, K as Y, L as y, k as l, O as G, P as K, W as c, S as F, w as d, y as w, z as V, A as u, B as H, D as X, G as k, s as q, o as v, h as g, n as h, I as j, J as z, j as J, M as Q, N as Z, f as $, d as __, E as E_, Q as U_, R as R_, g as A_, c as S_, m as O_, e as I_, V as s_, T as T_, i as L_, r as o_, U as r_, q as a_ } from "../constants-DjdF3T-M.js";
import { UmbUserCollectionRepository as N_ } from "../user-collection.repository-Dmq4bHXO.js";
import { U as C_ } from "../input-user-permission-verb.element-vB_1t7Gv.js";
import { UmbInviteUserRepository as B_ } from "../invite-user.repository-8XaSijAo.js";
import { U as i_, a as p_ } from "../resend-invite-to-user-modal.token-SCmTZoXA.js";
import { a as P_, b as n_, U as b_ } from "../paths-CbGwNXWI.js";
import { UmbUserAvatarRepository as f_ } from "../user-avatar.repository-GV81JSsT.js";
import { UmbChangeUserPasswordRepository as Y_ } from "../change-user-password.repository-CdtqNGOF.js";
import { UmbUserDetailRepository as A } from "../user-detail.repository-Db4cKIbL.js";
import { UmbDisableUserRepository as l_ } from "../disable-user.repository-BFwtUgqe.js";
import { UmbEnableUserRepository as K_ } from "../enable-user.repository-CFnyra0-.js";
import { UmbUserItemRepository as F_ } from "../user-item.repository-BUccegr5.js";
import { UmbUnlockUserRepository as w_ } from "../unlock-user.repository-CPHXeFvf.js";
import { U as u_ } from "../user.repository-B1MUsDmk.js";
import { U as X_ } from "../new-user-password.repository-CoPGOMS6.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
const N = "Umb.Repository.User.NewPassword";
async function M(_, E) {
  const U = new A(_), { data: R } = await U.requestByUnique(E);
  return R?.isAdmin ?? !1;
}
const C = "Umb.Condition.User.AllowEnableAction";
export {
  m as UMB_CHANGE_USER_PASSWORD_REPOSITORY_ALIAS,
  i as UMB_COLLECTION_VIEW_USER_GRID,
  p as UMB_COLLECTION_VIEW_USER_TABLE,
  D as UMB_CREATE_USER_CLIENT_CREDENTIAL_MODAL,
  P as UMB_CREATE_USER_CLIENT_CREDENTIAL_MODAL_ALIAS,
  n as UMB_CREATE_USER_MODAL,
  b as UMB_CREATE_USER_MODAL_ALIAS,
  W as UMB_CREATE_USER_SUCCESS_MODAL,
  f as UMB_CURRENT_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS,
  x as UMB_CURRENT_USER_ALLOW_MFA_CONDITION_ALIAS,
  Y as UMB_CURRENT_USER_CONFIG_REPOSITORY_ALIAS,
  y as UMB_CURRENT_USER_CONFIG_STORE_ALIAS,
  l as UMB_CURRENT_USER_CONFIG_STORE_CONTEXT,
  G as UMB_DISABLE_USER_REPOSITORY_ALIAS,
  P_ as UMB_EDIT_USER_WORKSPACE_PATH_PATTERN,
  K as UMB_ENABLE_USER_REPOSITORY_ALIAS,
  i_ as UMB_INVITE_USER_MODAL,
  c as UMB_INVITE_USER_REPOSITORY_ALIAS,
  N as UMB_NEW_USER_PASSWORD_REPOSITORY_ALIAS,
  p_ as UMB_RESEND_INVITE_TO_USER_MODAL,
  F as UMB_UNLOCK_USER_REPOSITORY_ALIAS,
  d as UMB_USER_ALLOW_CHANGE_PASSWORD_CONDITION_ALIAS,
  w as UMB_USER_ALLOW_DELETE_CONDITION_ALIAS,
  V as UMB_USER_ALLOW_DISABLE_CONDITION_ALIAS,
  C as UMB_USER_ALLOW_ENABLE_CONDITION_ALIAS,
  u as UMB_USER_ALLOW_EXTERNAL_LOGIN_CONDITION_ALIAS,
  H as UMB_USER_ALLOW_MFA_CONDITION_ALIAS,
  X as UMB_USER_ALLOW_UNLOCK_CONDITION_ALIAS,
  k as UMB_USER_AVATAR_REPOSITORY_ALIAS,
  q as UMB_USER_CLIENT_CREDENTIAL_REPOSITORY_ALIAS,
  v as UMB_USER_COLLECTION_ALIAS,
  g as UMB_USER_COLLECTION_CONTEXT,
  h as UMB_USER_COLLECTION_REPOSITORY_ALIAS,
  j as UMB_USER_CONFIG_REPOSITORY_ALIAS,
  z as UMB_USER_CONFIG_STORE_ALIAS,
  J as UMB_USER_CONFIG_STORE_CONTEXT,
  Q as UMB_USER_DETAIL_REPOSITORY_ALIAS,
  Z as UMB_USER_DETAIL_STORE_ALIAS,
  $ as UMB_USER_DETAIL_STORE_CONTEXT,
  __ as UMB_USER_ENTITY_TYPE,
  E_ as UMB_USER_IS_DEFAULT_KIND_CONDITION_ALIAS,
  U_ as UMB_USER_ITEM_REPOSITORY_ALIAS,
  R_ as UMB_USER_ITEM_STORE_ALIAS,
  A_ as UMB_USER_ITEM_STORE_CONTEXT,
  S_ as UMB_USER_MFA_MODAL,
  O_ as UMB_USER_PICKER_MODAL,
  I_ as UMB_USER_ROOT_ENTITY_TYPE,
  s_ as UMB_USER_ROOT_WORKSPACE_ALIAS,
  n_ as UMB_USER_ROOT_WORKSPACE_PATH,
  T_ as UMB_USER_WORKSPACE_ALIAS,
  L_ as UMB_USER_WORKSPACE_CONTEXT,
  b_ as UMB_USER_WORKSPACE_PATH,
  Y_ as UmbChangeUserPasswordRepository,
  l_ as UmbDisableUserRepository,
  K_ as UmbEnableUserRepository,
  B_ as UmbInviteUserRepository,
  X_ as UmbNewUserPasswordRepository,
  w_ as UmbUnlockUserRepository,
  f_ as UmbUserAvatarRepository,
  N_ as UmbUserCollectionRepository,
  A as UmbUserDetailRepository,
  o_ as UmbUserInputElement,
  F_ as UmbUserItemRepository,
  r_ as UmbUserKind,
  C_ as UmbUserPermissionVerbElement,
  a_ as UmbUserPickerInputContext,
  u_ as UmbUserRepository,
  M as isUserAdmin
};
//# sourceMappingURL=index.js.map
