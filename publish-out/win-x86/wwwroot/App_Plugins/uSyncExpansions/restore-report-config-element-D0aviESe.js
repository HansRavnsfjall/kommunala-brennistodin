import { ProcessStepElementBase as f } from "@jumoo/processing";
import { SyncRestoreContext as v, TimeOptions as _, uSyncRestore as y } from "@jumoo/usync-expansions";
import { nothing as m, html as l, css as P, state as p, customElement as S } from "@umbraco-cms/backoffice/external/lit";
var R = Object.defineProperty, x = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, h = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? x(e, r) : e, a = t.length - 1, c; a >= 0; a--)
    (c = t[a]) && (o = (i ? c(e, r, o) : c(o)) || o);
  return i && o && R(e, r, o), o;
}, u = (t, e, r) => e.has(t) || d("Cannot " + r), C = (t, e, r) => (u(t, e, "read from private field"), r ? r.call(t) : e.get(t)), g = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), w = (t, e, r, i) => (u(t, e, "write to private field"), e.set(t, r), r), n;
let s = class extends f {
  constructor() {
    super(), g(this, n), w(this, n, new v(this));
  }
  connectedCallback() {
    super.connectedCallback();
    const t = this.options;
    t && (this.key = t.key, C(this, n).getRestorePoint(t.key).then((e) => {
      console.log("restorePoint", e), this.restorePoint = e;
    }));
  }
  renderRestorePointInfo() {
    return this.restorePoint ? l`
			<uui-box .headline=${this.localize.term("uSyncRestore_restoreInfo")}>
				<table>
					<tr>
						<th>Name :</th>
						<td>${this.restorePoint.name}</td>
					</tr>
					<tr>
						<th>Created :</th>
						<td>${this.localize.date(this.restorePoint.created, _)}</td>
					</tr>
					<tr>
						<th>Source Site :</th>
						<td>${this.restorePoint.machineName}</td>
					</tr>
					<tr>
						<th>Source :</th>
						<td>${this.restorePoint.action}</td>
					</tr>
					<tr>
						<th>User:</th>
						<td>${this.restorePoint.user}</td>
					</tr>
				</table>
			</uui-box>
		` : m;
  }
  render() {
    return l`<div class="wrapper">
			<uui-box>
				<umb-localize key="uSyncRestore_restoreIntro"></umb-localize>
			</uui-box>
			${this.renderRestorePointInfo()}
		</div>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
s.styles = P`
		.wrapper {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		.red {
			color: red;
		}

		table th {
			text-align: right;
		}
	`;
h([
  p()
], s.prototype, "key", 2);
h([
  p()
], s.prototype, "restorePoint", 2);
s = h([
  S(y.steps.restoreReportConfigStep)
], s);
const z = s;
export {
  z as default,
  s as uSyncRestoreReportConfigElement
};
//# sourceMappingURL=restore-report-config-element-D0aviESe.js.map
