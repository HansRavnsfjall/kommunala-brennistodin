import { nothing as n, html as o, css as p, property as u, state as c, query as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as y } from "@umbraco-cms/backoffice/content";
import { UmbDataTypeDetailRepository as _ } from "@umbraco-cms/backoffice/data-type";
var b = Object.defineProperty, d = (a, i, e, g) => {
  for (var t = void 0, s = a.length - 1, r; s >= 0; s--)
    (r = a[s]) && (t = r(i, e, t) || t);
  return t && b(i, e, t), t;
};
class l extends h {
  constructor() {
    super(), this.value = "", this._expanded = !1, this._dataTypeDetailRepository = new _(this), this._titleKey = "", this._detailsDescriptionKey = "", this._displayPropertyEditorUi = !0, this.consumeContext(y, (i) => {
      i?.dataType && this.observe(i.dataType, (e) => {
        e?.unique && this._updateEditorAlias(e);
      });
    });
  }
  async _updateEditorAlias(i) {
    this.observe(await this._dataTypeDetailRepository.byUnique(i.unique), (e) => {
      this._dataTypeDetailModel = e;
    });
  }
  async #i() {
    this._expanded = !this._expanded, this._expanded && (await this.updateComplete, this.focalPointElement?.focus());
  }
  render() {
    return o`<uui-box id="info">
			<div slot="headline"><uui-icon id="alert" name="alert"></uui-icon>${this.localize.term(this._titleKey)}</div>
			<div id="content">
				<umb-localize key="missingEditor_description"></umb-localize>
				${this._expanded ? this._renderDetails() : n}
			</div>

			<uui-button
				id="details-button"
				compact
				label="${this.localize.term(this._expanded ? "missingEditor_detailsHide" : "missingEditor_detailsShow")}"
				@click=${this.#i}>
				<span>${this.localize.term(this._expanded ? "missingEditor_detailsHide" : "missingEditor_detailsShow")}</span
				><uui-symbol-expand id="expand-symbol" .open=${this._expanded}></uui-symbol-expand>
			</uui-button>
		</uui-box>`;
  }
  _renderDetails() {
    return o` <div id="details" tabindex="0">
			<umb-localize id="details-title" key="missingEditor_detailsTitle"></umb-localize>
			<p>
				<umb-localize key=${this._detailsDescriptionKey}></umb-localize>
			</p>
			<p>
				<strong><umb-localize key="missingEditor_detailsDataType"></umb-localize></strong>:
				<code>${this._dataTypeDetailModel?.name}</code><br />
				<strong><umb-localize key="missingEditor_detailsPropertyEditor"></umb-localize></strong>:
				<code>${this._dataTypeDetailModel?.editorAlias}</code>
				${this._displayPropertyEditorUi ? o`
							<br />
							<strong><umb-localize key="missingEditor_detailsPropertyEditorUi"></umb-localize></strong>:
							<code>${this._dataTypeDetailModel?.editorUiAlias}</code>
						` : n}
			</p>
			<umb-code-block id="codeblock" copy language="${this.localize.term("missingEditor_detailsData")}"
				>${typeof this.value == "object" ? JSON.stringify(this.value, null, 2) : String(this.value)}</umb-code-block
			>
		</div>`;
  }
  static {
    this.styles = [
      p`
			:host {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-3);
				--uui-box-default-padding: 0;
			}
			#content {
				padding: var(--uui-size-space-5);
				padding-bottom: var(--uui-size-space-3);
			}
			#alert {
				padding-right: var(--uui-size-space-2);
			}
			#details-button {
				float: right;
			}
			#details {
				margin-top: var(--uui-size-space-5);
			}
			#details-title {
				font-weight: 800;
			}
			#expand-symbol {
				transform: rotate(90deg);
			}
			#expand-symbol[open] {
				transform: rotate(180deg);
			}
			#codeblock {
				max-height: 400px;
				display: flex;
				flex-direction: column;
			}
		`
    ];
  }
}
d([
  u()
], l.prototype, "value");
d([
  c()
], l.prototype, "_expanded");
d([
  m("#details")
], l.prototype, "focalPointElement");
export {
  l as U
};
//# sourceMappingURL=property-editor-ui-missing-base.element-CjVjCvCs.js.map
