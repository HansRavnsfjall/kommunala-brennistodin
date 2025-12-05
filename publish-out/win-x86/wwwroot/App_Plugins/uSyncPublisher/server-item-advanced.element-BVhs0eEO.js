import { UmbElementMixin as P } from "@umbraco-cms/backoffice/element-api";
import { LitElement as _, nothing as v, html as a, css as C, state as x, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { b as E } from "./index-DFDZ_Jke.js";
var I = Object.defineProperty, O = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, g = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? O(t, i) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (o = (s ? c(t, i, o) : c(o)) || o);
  return s && o && I(t, i, o), o;
}, f = (e, t, i) => t.has(e) || k("Cannot " + i), b = (e, t, i) => (f(e, t, "read from private field"), t.get(e)), $ = (e, t, i) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), R = (e, t, i, s) => (f(e, t, "write to private field"), t.set(e, i), i), r = (e, t, i) => (f(e, t, "access private method"), i), d, n, y, u, h, m;
let p = class extends P(_) {
  constructor() {
    super(), $(this, n), $(this, d), this.publishers = [], this.consumeContext(E, async (e) => {
      e && (R(this, d, e), this.observe(e.data, (t) => {
        this.data = t;
      }), this.publishers = await e.getPublishers());
    });
  }
  renderDefaultBox() {
    var e;
    return ((e = this.data) == null ? void 0 : e.alias) != "__default__" ? v : a`<div class="default-box">
					<umb-localize key="usyncpublish_defaultSettings"></umb-localize>
				</div>`;
  }
  renderContentOptions() {
    var e, t, i, s, o, l;
    return a`
			<uui-box headline="Content options">
				<umb-property-layout
					label="Include children"
					description="Include the children of the selected item">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeChildren"
							label="includeChildren"
							@value-change=${r(this, n, u)}
							.value=${(t = (e = this.data) == null ? void 0 : e.sendSettings) == null ? void 0 : t.includeChildren}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Include media"
					description="Include media items used in selected items">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeMedia"
							label="includeMedia"
							@value-change=${r(this, n, u)}
							.value=${(s = (i = this.data) == null ? void 0 : i.sendSettings) == null ? void 0 : s.includeMedia}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Delete missing items"
					description="Remove any items on the target site that are not children of the selected item">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="deleteMissing"
							label="deleteMissing"
							@value-change=${r(this, n, u)}
							.value=${(l = (o = this.data) == null ? void 0 : o.sendSettings) == null ? void 0 : l.deleteMissing}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
  renderDeveloperSettings() {
    var e, t, i, s, o, l;
    return a`
			<uui-box headline="Developer settings">
				<umb-property-layout
					label="Include content config"
					description="Configuration on content, such as public access settings, culture and hostnames">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeConfig"
							label="includeConfig"
							@value-change=${r(this, n, u)}
							.value=${(t = (e = this.data) == null ? void 0 : e.sendSettings) == null ? void 0 : t.includeConfig}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Include dependencies"
					description="Include settings including doctypes and datatypes">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeDependencies"
							label="includeDependencies"
							@value-change=${r(this, n, u)}
							.value=${(s = (i = this.data) == null ? void 0 : i.sendSettings) == null ? void 0 : s.includeDependencies}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Include files"
					description="Include required templates, stylesheets and script files">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeFiles"
							label="includeFiles"
							@value-change=${r(this, n, u)}
							.value=${(l = (o = this.data) == null ? void 0 : o.sendSettings) == null ? void 0 : l.includeFiles}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
  renderPublishSteps() {
    var e, t, i, s, o, l, c, S;
    return a`
			<uui-box headline="Push/Pull Behaviour">
				<umb-property-layout
					label="Schedule publish"
					description="Allow user to schedule the publish time">
					<div slot="editor">
						<uui-checkbox
							id="canSchedule"
							label="canSchedule"
							.checked=${(e = this.data) == null ? void 0 : e.publisherSettings.canSchedule}
							@change=${r(this, n, m)}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Variant publish"
					description="Allow user to select the variant (culture) the publish time">
					<div slot="editor">
						<uui-checkbox
							id="selectVariants"
							label="Select variants"
							.checked=${(t = this.data) == null ? void 0 : t.publisherSettings.selectVariants}
							@change=${r(this, n, m)}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Ignore content/media sort order"
					description="Ignore the sort order (position) of content and media items during the sync">
					<div slot="editor">
						<uui-checkbox
							id="ignoreSortOrder"
							name="ignore sort order"
							label="Ignore sort order"
							@change=${r(this, n, h)}
							.checked=${((s = (i = this.data) == null ? void 0 : i.sendSettings) == null ? void 0 : s.ignoreSortOrder) ?? !1}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Send edited value"
					description="When syncing send the edited value for a content item, as opposed to the 'published' one.">
					<div slot="editor">
						<uui-checkbox
							id="sendEditedValue"
							name="Send Edited value"
							label="Send Edited value"
							@change=${r(this, n, h)}
							.checked=${((l = (o = this.data) == null ? void 0 : o.sendSettings) == null ? void 0 : l.sendEditedValue) ?? !1}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Fallback to edited values"
					description="If the content being pushed is not published, fallback to using the last 'saved' value for a property">
					<div slot="editor">
						<uui-checkbox
							id="publishFallback"
							name="Publish Fallback"
							label="Publish Fallback"
							@change=${r(this, n, h)}
							.checked=${((S = (c = this.data) == null ? void 0 : c.sendSettings) == null ? void 0 : S.publishFallback) ?? !1}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
  renderAdditionalOptions() {
    var e, t, i, s;
    return a`
			<uui-box headline="Additional options">
				<small
					>The following settings can result in a large amount of extra content or media
					being sent during a publish. Most of the time you won't want a user to select
					these settings.</small
				>

				<umb-property-layout
					label="Include ancestors"
					description="Include the parents of selected items">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeAncestors"
							label="includeAncestors"
							@value-change=${r(this, n, u)}
							.value=${(t = (e = this.data) == null ? void 0 : e.sendSettings) == null ? void 0 : t.includeAncestors}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Include 'linked pages'"
					description="Include content pages linked to from selected items">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="includeLinked"
							label="includeLinked"
							@value-change=${r(this, n, u)}
							.value=${(s = (i = this.data) == null ? void 0 : i.sendSettings) == null ? void 0 : s.includeLinked}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
  renderRestorePoints() {
    var e, t, i, s;
    return a`
			<uui-box headline="Restore points">
				<umb-property-layout
					label="Create restore points"
					description="Create a restore point before making any changes">
					<div slot="editor">
						<usync-publisher-yes-no-server-option
							id="createRestorePoint"
							label="createRestorePoint"
							@value-change=${r(this, n, u)}
							.value=${(t = (e = this.data) == null ? void 0 : e.sendSettings) == null ? void 0 : t.createRestorePoint}></usync-publisher-yes-no-server-option>
					</div>
				</umb-property-layout>

				<umb-property-layout
					label="Restore detection"
					description="Prompt to create a restore point when potential 'damaging' sync operations are performed">
					<div slot="editor">
						<uui-checkbox
							id="detectRestorePoint"
							name="ignore sort order"
							label="Detect restore point"
							@change=${r(this, n, h)}
							.checked=${((s = (i = this.data) == null ? void 0 : i.sendSettings) == null ? void 0 : s.detectRestorePoint) ?? !1}>
							<div slot="label"></div
						></uui-checkbox>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
  renderPublisherOptions() {
    var e;
    return a` <uui-box>
			<umb-property-layout label="Publisher" description="publisher to use">
				<div slot="editor">${this.renderPublishers()}</div>
			</umb-property-layout>

			<umb-property-layout label="Base URL" description="Override URL in request">
				<div slot="editor">
					<uui-input
						type="text"
						label="Base URL"
						id="baseUrl"
						.value=${((e = this.data) == null ? void 0 : e.baseUrl) ?? ""}
						@input=${r(this, n, y)}></uui-input>
				</div>
			</umb-property-layout>
		</uui-box>`;
  }
  render() {
    return a`
			${this.renderDefaultBox()}
			<umb-body-layout>
				<div class="wrapper">
					<div class="two-by-two">
						${this.renderContentOptions()} ${this.renderDeveloperSettings()}
						${this.renderPublishSteps()} ${this.renderAdditionalOptions()}
					</div>

					${this.renderPublisherOptions()}${this.renderPublisherConfig()}
					${this.renderRestorePoints()}
				</div>
			</umb-body-layout>
		`;
  }
  renderPublisherConfig() {
    var t;
    if (!((t = this.data) != null && t.publisher)) return v;
    const e = this.publishers.find((i) => {
      var s;
      return i.alias === ((s = this.data) == null ? void 0 : s.publisher);
    });
    return !e || !e.configElement ? v : a`<uui-box .headline="${e.name} settings">
			<umb-extension-slot
				type="usync-publisher-config"
				.filter=${(i) => i.elementName === e.configElement}
				.props=${{ options: this.data }}></umb-extension-slot>
		</uui-box> `;
  }
  renderPublishers() {
    var t;
    const e = this.publishers.map((i) => {
      var s;
      return {
        name: i.name,
        value: i.alias,
        selected: i.alias === ((s = this.data) == null ? void 0 : s.publisher)
      };
    });
    return a` <uui-select
			id="publisher"
			label="publisher"
			.value="${(t = this.data) == null ? void 0 : t.publisher}"
			.options="${e}"
			@change=${r(this, n, y)}></uui-select>`;
  }
};
d = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
y = function(e) {
  var i;
  const t = e.target;
  t && ((i = b(this, d)) == null || i.set({ [t.id]: t.value }));
};
u = function(e) {
  var t;
  e.detail && ((t = b(this, d)) == null || t.setSyncOption(e.detail.id, {
    value: e.detail.checked,
    editable: e.detail.editable
  }));
};
h = function(e) {
  var i;
  const t = e.target;
  t && ((i = b(this, d)) == null || i.setSyncBoolOption(t.id, t.checked));
};
m = function(e) {
  var i;
  const t = e.target;
  t && ((i = b(this, d)) == null || i.setPublisherSetting(t.id, t.checked));
};
p.styles = C`
		.wrapper {
			display: flex;
			gap: var(--uui-size-space-4);
			flex-direction: column;
		}

		.two-by-two {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: var(--uui-size-space-4);
		}

		uui-input {
			width: 100%;
		}

		uui-select {
			width: 100%;
		}

		.default-box {
			text-align: center;
			padding: 10px;
			background-color: var(--uui-color-border);
		}
	`;
g([
  x()
], p.prototype, "data", 2);
g([
  x()
], p.prototype, "publishers", 2);
p = g([
  w("usync-publisher-server-advanced-view")
], p);
const B = p;
export {
  B as default,
  p as uSyncPublisherServerAdvancedElement
};
//# sourceMappingURL=server-item-advanced.element-BVhs0eEO.js.map
