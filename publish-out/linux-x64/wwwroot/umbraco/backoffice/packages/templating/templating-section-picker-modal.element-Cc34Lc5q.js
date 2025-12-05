import { g as y, a as v, b as g } from "./index-D0fxHn_d.js";
import { T as t } from "./types--hMpZOew.js";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { html as n, css as N, query as p, state as $, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
var x = Object.defineProperty, A = Object.getOwnPropertyDescriptor, h = (i) => {
  throw TypeError(i);
}, d = (i, e, a, u) => {
  for (var c = u > 1 ? void 0 : u ? A(e, a) : e, s = i.length - 1, m; s >= 0; s--)
    (m = i[s]) && (c = (u ? m(e, a, c) : m(c)) || c);
  return u && c && x(e, a, c), c;
}, R = (i, e, a) => e.has(i) || h("Cannot " + a), w = (i, e, a) => e.has(i) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, a), l = (i, e, a) => (R(i, e, "access private method"), a), r, b, _, f, S, k;
let o = class extends C {
  constructor() {
    super(...arguments), w(this, r), this._pickedSection = t.renderChildTemplate;
  }
  render() {
    return n`
			<umb-body-layout headline=${this.localize.term("template_insert")}>
				<uui-box>
					<div id="main">
						${l(this, r, f).call(this)} ${l(this, r, S).call(this)}
						${l(this, r, k).call(this)}
					</div>
				</uui-box>

				<div slot="actions">
					<uui-button @click=${l(this, r, b)} look="secondary" label=${this.localize.term("general_close")}></uui-button>
					<uui-button
						@click=${l(this, r, _)}
						look="primary"
						color="positive"
						label=${this.localize.term("general_submit")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
r = /* @__PURE__ */ new WeakSet();
b = function() {
  this.modalContext?.reject();
};
_ = function() {
  switch (this._pickedSection) {
    case t.renderChildTemplate:
      this.value = { value: g() };
      break;
    case t.renderANamedSection:
      this.value = {
        value: v(
          this._renderNamedSectionNameInput?.value,
          this._renderNamedSectionIsMandatoryCheckbox?.checked ?? !1
        )
      };
      break;
    case t.defineANamedSection:
      this.value = { value: y(this._defineNamedSectionNameInput?.value) };
      break;
  }
  this.modalContext?.submit();
};
f = function() {
  return n`<uui-button
			label=${this.localize.term("template_renderBody")}
			@click=${() => this._pickedSection = t.renderChildTemplate}
			look="placeholder">
			${this._pickedSection === t.renderChildTemplate ? n`<uui-badge color="positive"><uui-icon name="icon-check"></uui-icon></uui-badge>` : ""}
			<h3><umb-localize key="template_renderBody">Render Child Template</umb-localize></h3>
			<p>
				<umb-localize key="template_renderBodyDesc">
					Renders the contents of a child template, by inserting a <code>@RenderBody()</code> placeholder.
				</umb-localize>
			</p>
		</uui-button>`;
};
S = function() {
  return n`<uui-button
			label=${this.localize.term("template_renderSection")}
			@click=${() => this._pickedSection = t.renderANamedSection}
			look="placeholder">
			${this._pickedSection === t.renderANamedSection ? n`<uui-badge color="positive"><uui-icon name="icon-check"></uui-icon></uui-badge>` : ""}
			<h3><umb-localize key="template_renderSection">Render a named section</umb-localize></h3>
			<p>
				<umb-localize key="template_renderSectionDesc">
					Renders a named area of a child template, by inserting a
					<code>@RenderSection(name)</code> placeholder. This renders an area of a child template which is wrapped in a
					corresponding <code>@section [name]{ ... }</code> definition.
				</umb-localize>
			</p>
			${this._pickedSection === t.renderANamedSection ? n`<div class="section">
						<uui-label for="render-named-section-name" required>
							<umb-localize key="template_sectionName">Section Name</umb-localize>
						</uui-label>
						<uui-input id="render-named-section-name" label=${this.localize.term("template_sectionName")}></uui-input>
						<uui-checkbox
							id="render-named-section-is-mandatory"
							label=${this.localize.term("template_sectionMandatory")}></uui-checkbox>
						<small>
							<umb-localize key="template_sectionMandatoryDesc">
								If mandatory, the child template must contain a <code>@section</code> definition, otherwise an error is
								shown.
							</umb-localize>
						</small>
					</div>` : ""}
		</uui-button>`;
};
k = function() {
  return n`<uui-button
			label=${this.localize.term("template_defineSection")}
			@click=${() => this._pickedSection = t.defineANamedSection}
			look="placeholder">
			${this._pickedSection === t.defineANamedSection ? n`<uui-badge color="positive"><uui-icon name="icon-check"></uui-icon></uui-badge>` : ""}
			<h3><umb-localize key="template_defineSection">Define a named section</umb-localize></h3>
			<p>
				<umb-localize key="template_defineSectionDesc">
					Defines a part of your template as a named section by wrapping it in <code>@section { ... }</code>. This can
					be rendered in a specific area of the parent of this template, by using <code>@RenderSection</code>.
				</umb-localize>
			</p>
			${this._pickedSection === t.defineANamedSection ? n`<div class="section">
						<uui-label for="define-named-section-name" required>
							<umb-localize key="template_sectionName">Section Name</umb-localize>
						</uui-label>
						<uui-input id="define-named-section-name" label=${this.localize.term("template_sectionName")}></uui-input>
					</div>` : ""}
		</uui-button>`;
};
o.styles = [
  z,
  N`
			code {
				background-color: var(--uui-color-surface-alt);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			#main {
				display: grid;
				grid-gap: var(--uui-size-space-5);
			}

			.section {
				display: grid;
			}

			uui-button {
				text-align: left;
			}

			uui-button p {
				margin-top: 0;
			}

			uui-input,
			small {
				margin-block: var(--uui-size-space-2) var(--uui-size-space-6);
			}
		`
];
d([
  p("#render-named-section-name")
], o.prototype, "_renderNamedSectionNameInput", 2);
d([
  p("#define-named-section-name")
], o.prototype, "_defineNamedSectionNameInput", 2);
d([
  p("#render-named-section-is-mandatory")
], o.prototype, "_renderNamedSectionIsMandatoryCheckbox", 2);
d([
  $()
], o.prototype, "_pickedSection", 2);
o = d([
  T("umb-templating-section-picker-modal")
], o);
const B = o;
export {
  o as UmbTemplatingSectionPickerModalElement,
  B as default
};
//# sourceMappingURL=templating-section-picker-modal.element-Cc34Lc5q.js.map
