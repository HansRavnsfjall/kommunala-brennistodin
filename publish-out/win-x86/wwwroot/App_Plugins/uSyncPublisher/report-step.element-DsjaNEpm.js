import { ProcessStepElementBase as m, JUMOO_PROCESSING_CONTEXT as y } from "@jumoo/processing";
import { when as P, html as v, nothing as S, state as O, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { C as E, e as R, S as w } from "./index-DFDZ_Jke.js";
import { USYNC_PUBLISHER_STRATEGY_CONTEXT as T } from "./strategy.context-Nd7v-g-Q.js";
var x = Object.defineProperty, D = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, C = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? D(t, s) : t, i = e.length - 1, h; i >= 0; i--)
    (h = e[i]) && (r = (n ? h(t, s, r) : h(r)) || r);
  return n && r && x(t, s, r), r;
}, d = (e, t, s) => t.has(e) || g("Cannot " + s), l = (e, t, s) => (d(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), _ = (e, t, s, n) => (d(e, t, "write to private field"), t.set(e, s), s), $ = (e, t, s) => (d(e, t, "access private method"), s), a, o, u, f;
let c = class extends m {
  constructor() {
    super(), p(this, u), p(this, a), p(this, o), this.detectRestorePoint = !1, this.consumeContext(y, (e) => {
      _(this, a, e);
    }), this.consumeContext(T, (e) => {
      _(this, o, e);
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.setValid() && await this.getRestoreOption();
  }
  setValid() {
    var t;
    const e = ((t = this.results) == null ? void 0 : t.results.changes) ?? 0;
    return this.dispatchEvent(
      new CustomEvent("set-valid", {
        bubbles: !0,
        composed: !0,
        detail: e != 0
      })
    ), e != 0;
  }
  async getRestoreOption() {
    var r, i;
    const e = this.options;
    if (!e.server) return;
    const t = e.entityType;
    if (!t) return;
    const s = await ((r = l(this, o)) == null ? void 0 : r.getServer(e.server));
    if (!s) return;
    const n = await ((i = l(this, o)) == null ? void 0 : i.getSyncSendOptions(
      s.alias,
      t
    ));
    this.detectRestorePoint = (n == null ? void 0 : n.detectRestorePoint) ?? !1;
  }
  containsSettingsChange(e) {
    return e.some((t) => t.change != E.NO_CHANGE && this.containsDeleteChange(t.details));
  }
  containsDeleteChange(e) {
    return e.some((t) => t.change == R.DELETE);
  }
  render() {
    var r, i;
    const e = (r = this.results) == null ? void 0 : r.results.actions, t = this.options, n = ((i = this.results) == null ? void 0 : i.results.changes) && this.containsSettingsChange(e);
    return v`
			<usync-publisher-report-view
				.server=${t.server ?? ""}
				.results=${e}></usync-publisher-report-view>
			${P(n, () => this.renderRestorePointOption())}
		`;
  }
  renderRestorePointOption() {
    return this.detectRestorePoint ? v`<uui-box .headline=${this.localize.term("usyncpublish_restorePrompt")}>
					<div>
						<umb-localize key="usyncpublish_restorePromptDesc"></umb-localize>
					</div>
					<uui-checkbox
						label="${this.localize.term("usyncpublish_createRestorePoint")}"
						@change=${$(this, u, f)}></uui-checkbox>
				</uui-box>` : S;
  }
};
a = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
f = function(e) {
  var n;
  if (!this.options) return;
  const t = e.target;
  if (!t) return;
  const s = structuredClone(this.options);
  s.publisherOptions && (s.publisherOptions.createRestorePoint = t.checked, (n = l(this, a)) == null || n.setPending({
    publisherOptions: s.publisherOptions
  }));
};
C([
  O()
], c.prototype, "detectRestorePoint", 2);
c = C([
  b(w.elements.report)
], c);
const M = c;
export {
  c as SyncPublishReportStepElement,
  M as default
};
//# sourceMappingURL=report-step.element-DsjaNEpm.js.map
