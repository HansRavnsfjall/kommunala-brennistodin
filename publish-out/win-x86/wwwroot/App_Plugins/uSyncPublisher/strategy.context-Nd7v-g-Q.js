var S = (i) => {
  throw TypeError(i);
};
var g = (i, a, e) => a.has(i) || S("Cannot " + e);
var n = (i, a, e) => (g(i, a, "read from private field"), e ? e.call(i) : a.get(i)), u = (i, a, e) => a.has(i) ? S("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(i) : a.set(i, e), c = (i, a, e, t) => (g(i, a, "write to private field"), t ? t.call(i, e) : a.set(i, e), e);
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as y } from "@umbraco-cms/backoffice/resources";
import { f as d } from "./index-DFDZ_Jke.js";
import { UmbContextToken as h } from "@umbraco-cms/backoffice/context-api";
var r;
class v extends o {
  constructor(e) {
    super(e);
    u(this, r);
    c(this, r, e);
  }
  async getSyncItem(e, t) {
    return await y(
      n(this, r),
      d.getSyncItem({ query: { entityType: e, id: t } })
    );
  }
  /**
   * @deprecated
   */
  async getSyncSendOptions(e, t) {
    return await y(
      n(this, r),
      d.getSyncSendOptions({
        query: { serverAlias: e, entityType: t }
      })
    );
  }
  async getSyncSendOptionsByMode(e, t, l) {
    return await y(
      n(this, r),
      d.getSyncSendOptionsByMode({
        query: { serverAlias: e, mode: t, entityType: l }
      })
    );
  }
  async getServer(e) {
    return await y(
      n(this, r),
      d.getServerByAlias({ query: { serverAlias: e } })
    );
  }
  async getStrategyByServer(e, t) {
    return await y(
      n(this, r),
      d.getStrategyByServer({ query: { server: e, mode: t } })
    );
  }
  async getStrategyByPublisher(e, t) {
    return await y(
      n(this, r),
      d.getStrategyByPublisher({
        query: { publisherAlias: e, mode: t }
      })
    );
  }
}
r = new WeakMap();
var s;
class b extends o {
  constructor(e) {
    super(e);
    u(this, s);
    c(this, s, new v(e)), this.provideContext(m, this);
  }
  async getSyncItem(e, t) {
    return (await n(this, s).getSyncItem(e, t)).data;
  }
  async getServer(e) {
    return (await n(this, s).getServer(e)).data;
  }
  async getStrategyByServer(e, t) {
    return (await n(this, s).getStrategyByServer(e, t)).data;
  }
  /**
   * @deprecated
   */
  async getSyncSendOptions(e, t) {
    return (await n(this, s).getSyncSendOptions(e, t)).data;
  }
  async getSyncSendOptionsByMode(e, t, l) {
    return (await n(this, s).getSyncSendOptionsByMode(e, t, l)).data;
  }
  mergeToPublisherOptions(e, t) {
    return e.includeChildren = t.includeChildren.value, e.includeAncestors = t.includeAncestors.value, e.includeFiles = t.includeFiles.value, e.includeMedia = t.includeMedia.value, e.includeLinked = t.includeLinked.value, e.includeDependencies = t.includeDependencies.value, e.includeMediaFiles = t.includeMediaFiles.value, e.includeConfig = t.includeConfig.value, e.removeOrphans = t.includeChildren.value ? t.deleteMissing.value : !1, e.createRestorePoint = t.createRestorePoint.value, e;
  }
}
s = new WeakMap();
const m = new h("usync-publisher-strategy-context");
export {
  b as PublisherStrategyContext,
  m as USYNC_PUBLISHER_STRATEGY_CONTEXT,
  b as default
};
//# sourceMappingURL=strategy.context-Nd7v-g-Q.js.map
