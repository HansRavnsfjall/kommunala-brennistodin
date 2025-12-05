import { when as E, nothing as b, html as d, css as $, state as z, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as m, UMB_CONFIRM_MODAL as L } from "@umbraco-cms/backoffice/modal";
import { JUMOO_PROCESSING_SIDEBAR_LARGE_MODAL as N } from "@jumoo/processing";
import { u, U as P } from "./index-BRxV4qqS.js";
import { U as T } from "./snapshots.context-BX47u-Ps.js";
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, g = (t, a, e, n) => {
  for (var i = n > 1 ? void 0 : n ? G(a, e) : a, h = t.length - 1, y; h >= 0; h--)
    (y = t[h]) && (i = (n ? y(a, e, i) : y(i)) || i);
  return n && i && B(a, e, i), i;
}, f = (t, a, e) => a.has(t) || _("Cannot " + e), r = (t, a, e) => (f(t, a, "read from private field"), e ? e.call(t) : a.get(t)), v = (t, a, e) => a.has(t) ? _("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(t) : a.set(t, e), I = (t, a, e, n) => (f(t, a, "write to private field"), a.set(t, e), e), o = (t, a, e) => (f(t, a, "access private method"), e), l, s, p, S, w, A, M, C, x, O, R, D;
let c = class extends k {
  constructor() {
    super(), v(this, s), v(this, l), this.consumeContext(T, (t) => {
      t && (I(this, l, t), this.observe(r(this, l).snapshots, (a) => {
        this.snapshots = a;
      }), r(this, l).getSnapshots());
    });
  }
  render() {
    var t, a;
    return d`<umb-body-layout>
			${E(((t = this.snapshots) == null ? void 0 : t.length) === 0, () => this.renderEmpty())}
			<uui-box headline="Snapshots">
				<div slot="header-actions">
					<uui-button
						label="Create Snapshot"
						color="default"
						look="primary"
						size="small"
						@click=${o(this, s, S)}></uui-button>
				</div>

				${((a = this.snapshots) == null ? void 0 : a.length) === 0 ? b : this.renderTable()}
			</uui-box>
		</umb-body-layout>`;
  }
  renderTable() {
    return d` <usync-snapshot-table
				.snapshots=${this.snapshots}
				@snapshot-apply=${o(this, s, w)}
				@snapshot-download=${o(this, s, x)}
				@snapshot-remove=${o(this, s, D)}
				@snapshot-report=${o(this, s, A)}></usync-snapshot-table>

			${this.renderButtons()}`;
  }
  renderEmpty() {
    return d`<umb-empty-state>
			<h2><uui-icon name="icon-flash"></uui-icon>uSync.Snapshots</h2>
		</umb-empty-state>`;
  }
  renderButtons() {
    var t;
    return ((t = this.snapshots) == null ? void 0 : t.length) === 0 ? b : d`
				<div class="buttons">
					<div class="buttons-left">
						<uui-button
							compact
							label="upload"
							color="positive"
							look="default"
							size="small"
							title="upload"
							@click=${o(this, s, R)}>
							<uui-icon name="icon-page-up"></uui-icon
						></uui-button>
					</div>
					<div class="buttons-right">
						<uui-button
							label="Apply all"
							color="positive"
							look="primary"
							size="small"
							@click=${o(this, s, C)}>
							<uui-icon name="icon-add"></uui-icon> Apply All
						</uui-button>
						<uui-button
							label="Report"
							color="default"
							look="default"
							size="small"
							@click=${o(this, s, M)}>
							<uui-icon name="icon-info"></uui-icon> Report All
						</uui-button>
						<uui-button
							label="Download"
							color="positive"
							look="default"
							size="small"
							@click=${o(this, s, O)}>
							<uui-icon name="icon-download-alt"></uui-icon> Download All
						</uui-button>
					</div>
				</div>
			</uui-box>
		</umb-body-layout>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
p = async function(t) {
  var i;
  const a = await this.getContext(m);
  if (!a) return;
  const n = await a.open(this, N, {
    data: {
      processor: u.processing.pipeline,
      strategy: t.strategy,
      progressLabel: t.label ?? "Create",
      headline: t.headline,
      options: {
        $type: "SnapshotsProcessingOptions",
        name: "",
        alias: t.alias,
        fullSnapshot: !1
      }
    }
  }).onSubmit().catch((h) => !1);
  return (i = r(this, l)) == null || i.getSnapshots(), n !== void 0;
};
S = async function() {
  return await o(this, s, p).call(this, {
    strategy: u.processing.stratageies.create,
    headline: "Create Snapshot",
    label: "Create"
  });
};
w = async function(t) {
  return await o(this, s, p).call(this, {
    strategy: u.processing.stratageies.apply,
    headline: "Apply Snapshot",
    label: "Apply",
    alias: t.detail.alias
  });
};
A = async function(t) {
  return await o(this, s, p).call(this, {
    strategy: u.processing.stratageies.report,
    headline: "Report Snapshot",
    label: "Report",
    alias: t.detail.alias
  });
};
M = async function() {
  return await o(this, s, p).call(this, {
    strategy: u.processing.stratageies.report,
    headline: "Report All Snapshots",
    label: "Report"
  });
};
C = async function() {
  return await o(this, s, p).call(this, {
    strategy: u.processing.stratageies.apply,
    headline: "Apply All Snapshots",
    label: "Apply"
  });
};
x = async function(t) {
  var a, e;
  (a = t.detail) != null && a.alias && await ((e = r(this, l)) == null ? void 0 : e.downloadSnapshot(t.detail.alias));
};
O = async function() {
  var t;
  await ((t = r(this, l)) == null ? void 0 : t.downloadAll());
};
R = async function() {
  const t = await this.getContext(m);
  if (!t) return;
  t.open(this, P, {
    data: {}
  }).onSubmit().then(async () => {
    var e;
    await ((e = r(this, l)) == null ? void 0 : e.getSnapshots());
  }).catch(() => {
  });
};
D = async function(t) {
  const a = await this.getContext(m);
  if (!a) return;
  a.open(this, L, {
    data: {
      headline: "Remove Snapshot",
      content: "Are you sure you want to remove this snapshot?",
      confirmLabel: "Remove",
      color: "danger"
    }
  }).onSubmit().then(async () => {
    var n;
    await ((n = r(this, l)) == null ? void 0 : n.remove(t.detail.alias));
  }).catch(() => {
  });
};
c.styles = $`
		uui-box {
			position: relative;
			z-index: 1;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
		}

		.buttons-right {
			display: flex;
			justify-content: flex-end;
			gap: 10px;
		}

		umb-empty-state {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			right: 0;
			margin: 0 auto;
			text-align: center;
			color: var(--uui-color-border);
			z-index: 0;
		}

		umb-empty-state h2 {
			font-size: var(--uui-type-h2-size);
		}
		umb-empty-state uui-icon {
			position: relative;
			top: var(--uui-size-4);
		}
	`;
g([
  z()
], c.prototype, "snapshots", 2);
c = g([
  U("usync-snapshot-default-veiw-element")
], c);
const J = c;
export {
  J as default,
  c as uSyncSnapshotsDefaultViewElement
};
//# sourceMappingURL=default.element-B275mLAZ.js.map
