import { UmbTextStyles as l } from "@umbraco-cms/backoffice/style";
import { html as n, css as b, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
var d = Object.getOwnPropertyDescriptor, h = (o, a, u, s) => {
  for (var t = s > 1 ? void 0 : s ? d(a, u) : a, i = o.length - 1, r; i >= 0; i--)
    (r = o[i]) && (t = r(t) || t);
  return t;
};
let e = class extends c {
  render() {
    return n`
			<section id="settings-dashboard" class="uui-text">
				<uui-box headline=${this.localize.term("settingsDashboard_documentationHeader")}>
					<p>
						<umb-localize key="settingsDashboard_documentationDescription">
							Read more about working with the items in Settings in our Documentation.
						</umb-localize>
					</p>
					<uui-button
						look="outline"
						href="https://docs.umbraco.com/umbraco-cms"
						label=${this.localize.term("settingsDashboard_getHelp")}
						target="_blank"></uui-button>
				</uui-box>

				<uui-box headline=${this.localize.term("settingsDashboard_communityHeader")}>
					<p>
						<umb-localize key="settingsDashboard_communityDescription">
							Ask a question in the community forum or our Discord community
						</umb-localize>
					</p>
					<div class="button-group">
						<uui-button
							look="outline"
							href="https://forum.umbraco.com/"
							label=${this.localize.term("settingsDashboard_goForum")}
							target="_blank"></uui-button>
						<uui-button
							look="outline"
							href="https://discord.umbraco.com"
							label=${this.localize.term("settingsDashboard_chatWithCommunity")}
							target="_blank"></uui-button>
					</div>
				</uui-box>

				<uui-box headline=${this.localize.term("settingsDashboard_trainingHeader")}>
					<p>
						<umb-localize key="settingsDashboard_trainingDescription">
							Find out about real-life training and certification opportunities
						</umb-localize>
					</p>
					<uui-button
						look="outline"
						href="https://umbraco.com/training/"
						label=${this.localize.term("settingsDashboard_getCertified")}
						target="_blank"></uui-button>
				</uui-box>

				<uui-box headline=${this.localize.term("settingsDashboard_supportHeader")}>
					<p>
						<umb-localize key="settingsDashboard_supportDescription">
							Extend your team with a highly skilled and passionate bunch of Umbraco know-it-alls
						</umb-localize>
					</p>
					<uui-button
						look="outline"
						href="https://umbraco.com/support/"
						label=${this.localize.term("settingsDashboard_getHelp")}
						target="_blank"></uui-button>
				</uui-box>

				<uui-box headline=${this.localize.term("settingsDashboard_videosHeader")}>
					<p>
						<umb-localize key="settingsDashboard_videosDescription">
							Watch our free tutorial videos on the Umbraco Learning Base YouTube channel, to get upto speed quickly
							with Umbraco.
						</umb-localize>
					</p>
					<uui-button
						look="outline"
						href="https://www.youtube.com/c/UmbracoLearningBase"
						label=${this.localize.term("settingsDashboard_watchVideos")}
						target="_blank"></uui-button>
				</uui-box>
			</section>
		`;
  }
};
e.styles = [
  l,
  b`
			#settings-dashboard {
				display: grid;
				grid-gap: var(--uui-size-7);
				grid-template-columns: repeat(3, 1fr);
				padding: var(--uui-size-layout-1);
			}

			uui-box {
				p:first-child {
					margin-top: 0;
				}
			}

			@media (max-width: 1200px) {
				#settings-dashboard {
					grid-template-columns: repeat(2, 1fr);
				}
			}

			@media (max-width: 800px) {
				#settings-dashboard {
					grid-template-columns: repeat(1, 1fr);
				}
			}

			.button-group {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-space-2);
			}
		`
];
e = h([
  m("umb-settings-welcome-dashboard")
], e);
const _ = e;
export {
  e as UmbSettingsWelcomeDashboardElement,
  _ as default
};
//# sourceMappingURL=settings-welcome-dashboard.element-DWBgq25j.js.map
