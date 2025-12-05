import { C as m } from "./types--hMpZOew.js";
import { U as g } from "./templating-page-field-builder-modal.token-BA7RzHZB.js";
import { UMB_PARTIAL_VIEW_PICKER_MODAL as P } from "@umbraco-cms/backoffice/partial-view";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { html as u, css as I, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as z, UMB_MODAL_MANAGER_CONTEXT as C } from "@umbraco-cms/backoffice/modal";
import { UMB_DICTIONARY_PICKER_MODAL as D } from "@umbraco-cms/backoffice/dictionary";
var x = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, E = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? x(t, i) : t, c = e.length - 1, h; c >= 0; c--)
    (h = e[c]) && (r = h(r) || r);
  return r;
}, p = (e, t, i) => t.has(e) || b("Cannot " + i), d = (e, t, i) => (p(e, t, "read from private field"), t.get(e)), _ = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), A = (e, t, i, o) => (p(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (p(e, t, "access private method"), i), l, a, f, v, y, k;
let s = class extends z {
  constructor() {
    super(), _(this, a), _(this, l), this.consumeContext(C, (e) => {
      A(this, l, e);
    });
  }
  _close() {
    this.modalContext?.reject();
  }
  render() {
    return u`
			<umb-body-layout headline=${this.localize.term("template_insert")}>
				<uui-box> ${n(this, a, k).call(this)} </uui-box>
				<uui-button
					slot="actions"
					@click=${this._close}
					look="secondary"
					label=${this.localize.term("general_close")}></uui-button>
			</umb-body-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = async function() {
  const e = d(this, l)?.open(this, g);
  if (await e?.onSubmit().catch(() => {
  }) === void 0) return;
  const i = e?.getValue().output;
  i && (this.value = { value: i, type: m.pageField }, this.modalContext?.submit());
};
v = async function() {
  const e = d(this, l)?.open(this, P);
  if (await e?.onSubmit().catch(() => {
  }) === void 0) return;
  const i = e?.getValue().selection[0];
  i && (this.value = {
    value: i,
    type: m.partialView
  }, this.modalContext?.submit());
};
y = async function() {
  const e = d(this, l)?.open(this, D, {
    data: {
      pickableFilter: (o) => o.unique !== null
    }
  });
  if (await e?.onSubmit().catch(() => {
  }) === void 0) return;
  const i = e?.getValue().selection[0];
  i && (this.value = { value: i, type: m.dictionaryItem }, this.modalContext?.submit());
};
k = function() {
  return u`<div id="main">
			<uui-button
				@click=${n(this, a, f)}
				look="placeholder"
				label=${this.localize.term("template_insert")}>
				<h3><umb-localize key="template_insertPageField">Value</umb-localize></h3>
				<p>
					<umb-localize key="template_insertPageFieldDesc">
						Displays the value of a named field from the current page, with options to modify the value or fallback to
						alternative values.
					</umb-localize>
				</p>
			</uui-button>
			${this.data?.hidePartialViews ? "" : u`<uui-button
						@click=${n(this, a, v)}
						look="placeholder"
						label=${this.localize.term("template_insert")}>
						<h3><umb-localize key="template_insertPartialView">Partial view</umb-localize></h3>
						<p>
							<umb-localize key="template_insertPartialViewDesc">
								A partial view is a separate template file which can be rendered inside another template, it's great for
								reusing markup or for separating complex templates into separate files.
							</umb-localize>
						</p>
					</uui-button>`}
			<uui-button
				@click=${n(this, a, y)}
				look="placeholder"
				label=${this.localize.term("template_insertDictionaryItem")}>
				<h3><umb-localize key="template_insertDictionaryItem">Dictionary Item</umb-localize></h3>
				<p>
					<umb-localize key="template_insertDictionaryItemDesc">
						A dictionary item is a placeholder for a translatable piece of text, which makes it easy to create designs
						for multilingual websites.
					</umb-localize>
				</p>
			</uui-button>
		</div>`;
};
s.styles = [
  w,
  I`
			#main uui-button:not(:last-of-type) {
				display: block;
				margin-bottom: var(--uui-size-space-5);
			}

			h3,
			p {
				text-align: left;
			}
		`
];
s = E([
  M("umb-templating-item-picker-modal")
], s);
const B = s;
export {
  s as UmbTemplatingItemPickerModalElement,
  B as default
};
//# sourceMappingURL=templating-item-picker-modal.element-DVIPccZC.js.map
