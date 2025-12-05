import { html as d, when as M, nothing as $, css as I, state as g, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { USYNC_EXPORTER_WORKSPACE_CONTEXT as R } from "./workspace.context-ChaniE6s.js";
import { C as G, D as h } from "./types.gen-Brf3tXUm.js";
import { u as f } from "./index-CPaPWJuU.js";
import { UMB_MODAL_MANAGER_CONTEXT as v } from "@umbraco-cms/backoffice/modal";
import { JUMOO_PROCESSING_DIALOG_MODAL as U } from "@jumoo/processing";
var k = Object.defineProperty, F = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, y = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? F(t, i) : t, c = e.length - 1, o; c >= 0; c--)
    (o = e[c]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && k(t, i, r), r;
}, _ = (e, t, i) => t.has(e) || C("Cannot " + i), x = (e, t, i) => (_(e, t, "read from private field"), i ? i.call(e) : t.get(e)), E = (e, t, i) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), W = (e, t, i, n) => (_(e, t, "write to private field"), t.set(e, i), i), m = (e, t, i) => (_(e, t, "access private method"), i), p, u, D, b, w, L;
let l = class extends A {
  constructor() {
    super(), E(this, u), E(this, p), this.exporters = [], this.itemList = [], this.consumeContext(R, (e) => {
      e && (W(this, p, e), x(this, p).GetSettings(), x(this, p).GetExporters().then((t) => {
        this.exporters = t ?? [];
      }));
    });
  }
  render() {
    const e = this.exporters.map((t) => {
      var n;
      const i = (n = t.exporters) == null ? void 0 : n.map((r) => d`<div>
					<uui-button
						.label=${r.name}
						color="default"
						look="secondary"
						@click=${() => m(this, u, D).call(this, r)}>
						<div><umb-icon .name=${r.icon}></umb-icon> ${r.name}</div>
					</uui-button>
				</div>`);
      return d`<div class="export-group">
				<h3>${t.group ?? "group"}</h3>
				<div class="group">${i}</div>
			</div>`;
    });
    return d` <umb-body-layout>
			<usync-licence-notice></usync-licence-notice>${M(
      e.length > 0,
      () => d`<uui-box>
						<div slot="headline" id="header">
							<h3>Export</h3>
							<small>Choose the things you want to export</small>
						</div>
						${e}</uui-box
					>`
    )}
			${this.itemList.length > 0 ? d`
						<uui-box headline="Contents">
							<usync-exporter-selection
								.selection=${this.itemList}
								@remove=${m(this, u, L)}>
							</usync-exporter-selection>

							<uui-button
								label="Export"
								color="default"
								look="primary"
								size="small"
								@click=${m(this, u, b)}></uui-button>
						</uui-box>
					` : $}
		</umb-body-layout>`;
  }
};
p = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
D = async function(e) {
  var o;
  const t = f.modals.find((s) => s.entityType == e.entityType);
  if (!t) {
    alert("No modal found for [" + e.entityType + "]");
    return;
  }
  const i = await this.getContext(v);
  if (!i) return;
  const r = await i.open(this, t.modal, {
    data: {
      hideTreeRoot: !0,
      multiple: !0
    }
  }).onSubmit();
  if (!r) return;
  const c = r.selection.map((s) => ({
    entityType: e.entityType ?? "",
    id: s ?? ""
  }));
  (o = x(this, p)) == null || o.GetItemInfo(c).then((s) => {
    if (s) {
      var S = s.map((a) => ({
        udi: a.udi,
        name: a.name,
        icon: a.icon,
        entityType: a.entityType,
        includeChildren: !0,
        includeDependencies: !0,
        includeAncestors: !0
      }));
      this.itemList = [...this.itemList, ...S].filter((a, T, O) => T === O.findIndex((N) => N.udi === a.udi));
    }
  });
};
b = async function() {
  const e = await this.getContext(v);
  !e || await e.open(this, U, {
    data: {
      processor: f.process.pipeline,
      strategy: f.process.export,
      progressLabel: "Export",
      options: {
        $type: "ExporterSyncPackProcessingOptions",
        items: this.itemList.map((n) => ({
          udi: n.udi,
          name: n.name,
          // flags: DependencyFlags.INCLUDE_CHILDREN,
          flags: m(this, u, w).call(this, n),
          change: G.EXPORT,
          entityType: n.entityType
        })),
        createRestorePoint: !1,
        includeFiles: !1,
        includeMediaFiles: !1
      },
      headline: "Export Sync-Pack"
    }
  }).onSubmit().catch((n) => !1);
};
w = function(e) {
  let t = [];
  return t.push(h.INCLUDE_MEDIA), e.includeChildren && t.push(h.INCLUDE_CHILDREN), e.includeDependencies && t.push(h.INCLUDE_DEPENDENCIES), e.includeAncestors && t.push(h.INCLUDE_ANCESTORS), t.length === 0 && t.push(h.NONE), t.join(",");
};
L = async function(e) {
  const t = e.detail;
  this.itemList = this.itemList.filter((i) => i.udi !== t.udi);
};
l.styles = I`
		#header h3 {
			margin: 0;
		}

		uui-box {
			margin-bottom: 10px;
		}

		.export-group {
			margin-bottom: 20px;
		}

		.export-group h3 {
			margin: 0 -20px 15px;
			padding: 0 20px 5px;
			border-bottom: 1px solid var(--uui-color-border);
		}

		.group {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
		}

		uui-button > div {
			display: flex;
			gap: 10px;
			min-width: 200px;
			align-items: center;
			font-size: 12pt;
			padding: 10px;
		}
	`;
y([
  g()
], l.prototype, "exporters", 2);
y([
  g()
], l.prototype, "itemList", 2);
l = y([
  P("usync-exporter-default-view-element")
], l);
const Y = l;
export {
  Y as default,
  l as uSyncExporterDefaultViewElement
};
//# sourceMappingURL=default.element-D3PNVpMP.js.map
