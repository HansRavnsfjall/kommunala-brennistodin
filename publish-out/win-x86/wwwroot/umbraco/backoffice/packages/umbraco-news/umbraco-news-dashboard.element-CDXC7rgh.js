import { UmbTextStyles as d } from "@umbraco-cms/backoffice/style";
import { html as c, css as l, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as p } from "@umbraco-cms/backoffice/lit-element";
var b = Object.getOwnPropertyDescriptor, n = (e) => {
  throw TypeError(e);
}, _ = (e, r, o, m) => {
  for (var a = m > 1 ? void 0 : m ? b(r, o) : r, i = e.length - 1, u; i >= 0; i--)
    (u = e[i]) && (a = u(a) || a);
  return a;
}, v = (e, r, o) => r.has(e) || n("Cannot " + o), g = (e, r, o) => (v(e, r, "read from private field"), o ? o.call(e) : r.get(e)), f = (e, r, o) => r.has(e) ? n("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o), s;
let t = class extends p {
  constructor() {
    super(...arguments), f(this, s, [
      {
        name: this.localize.term("welcomeDashboard_documentationHeadline"),
        description: this.localize.term("welcomeDashboard_documentationDescription"),
        href: "https://docs.umbraco.com/?utm_source=core&utm_medium=dashboard&utm_campaign=docs"
      },
      {
        name: this.localize.term("welcomeDashboard_communityHeadline"),
        description: this.localize.term("welcomeDashboard_communityDescription"),
        href: "https://our.umbraco.com/?utm_source=core&utm_medium=dashboard&utm_content=text&utm_campaign=our_forum"
      },
      {
        name: this.localize.term("welcomeDashboard_resourcesHeadline"),
        description: this.localize.term("welcomeDashboard_resourcesDescription"),
        href: "https://umbraco.com/resources/?utm_source=core&utm_medium=dashboard&utm_content=text&utm_campaign=resources"
      },
      {
        name: this.localize.term("welcomeDashboard_trainingHeadline"),
        description: this.localize.term("welcomeDashboard_trainingDescription"),
        href: "https://umbraco.com/training/?utm_source=core&utm_medium=dashboard&utm_content=text&utm_campaign=training"
      }
    ]);
  }
  render() {
    return c`
			<div id="info-links" class="uui-text">
				<uui-box id="our-umbraco">
					<div>
						<h2 class="uui-h3">${this.localize.term("welcomeDashboard_ourUmbracoHeadline")}</h2>
						<p>${this.localize.term("welcomeDashboard_ourUmbracoDescription")}</p>
						<uui-button
							look="outline"
							target="_blank"
							href="https://our.umbraco.com/?utm_source=core&amp;utm_medium=dashboard&amp;utm_content=image&amp;utm_campaign=our"
							label=${this.localize.term("welcomeDashboard_ourUmbracoButton")}></uui-button>
					</div>
				</uui-box>
				${g(this, s).map(
      (e) => c`
						<a class="info-link" target="_blank" href=${e.href}>
							<h3 class="uui-h5">${e.name}</h3>
							<p>${e.description}</p>
						</a>
					`
    )}
			</div>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
t.styles = [
  d,
  l`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			p {
				position: relative;
			}

			#our-umbraco {
				grid-column-start: 1;
				grid-column-end: -1;
				margin-bottom: var(--uui-size-space-4);
			}

			#info-links {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
				grid-gap: var(--uui-size-space-4);
				max-width: 1000px;
			}

			.info-link {
				border: var(--uui-box-border-width, 0) solid
					var(--uui-box-border-color, var(--uui-color-divider-standalone, #e9e9eb));
				border-radius: var(--uui-box-border-radius, var(--uui-border-radius, 3px));
				box-shadow: var(
					--uui-box-box-shadow,
					var(--uui-shadow-depth-1, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24))
				);
				background-color: var(--uui-color-surface);
				text-decoration: none;
				line-height: 1.5;
				padding: var(--uui-size-space-4);
			}

			.info-link h3 {
				margin-top: 0;
				margin-bottom: var(--uui-size-space-1);
			}

			.info-link p {
				margin-top: 0;
				margin-bottom: 0;
			}
		`
];
t = _([
  h("umb-umbraco-news-dashboard")
], t);
const z = t;
export {
  t as UmbUmbracoNewsDashboardElement,
  z as default
};
//# sourceMappingURL=umbraco-news-dashboard.element-CDXC7rgh.js.map
