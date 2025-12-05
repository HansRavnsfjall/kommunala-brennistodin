import { html as n, nothing as C, repeat as v, css as M, state as _, customElement as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as I, umbConfirmModal as P } from "@umbraco-cms/backoffice/modal";
import { UmbExtensionApiInitializer as A } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as R } from "@umbraco-cms/backoffice/extension-registry";
var S = Object.defineProperty, U = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, p = (e, i, t, s) => {
  for (var o = s > 1 ? void 0 : s ? U(i, t) : i, c = e.length - 1, b; c >= 0; c--)
    (b = e[c]) && (o = (s ? b(i, t, o) : b(o)) || o);
  return s && o && S(i, t, o), o;
}, g = (e, i, t) => i.has(e) || w("Cannot " + t), a = (e, i, t) => (g(e, i, "read from private field"), t ? t.call(e) : i.get(e)), f = (e, i, t) => i.has(e) ? w("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), y = (e, i, t, s) => (g(e, i, "write to private field"), i.set(e, t), t), u = (e, i, t) => (g(e, i, "access private method"), t), m, h, d, r, z, $, E, k, x, T, q;
let l = class extends I {
  constructor() {
    super(...arguments), f(this, r), f(this, m), f(this, h, null), f(this, d), this._references = [], this._selection = [], this._usedForInheritance = [], this._usedForComposition = [];
  }
  connectedCallback() {
    super.connectedCallback();
    const e = this.data?.compositionRepositoryAlias;
    if (e)
      y(this, d, new A(this, R, e, [this], (t, s) => {
        y(this, m, t ? s.api : void 0);
      }).asPromise());
    else
      throw new Error("No composition repository alias provided");
    this._selection = this.data?.selection ?? [], this._usedForInheritance = this.data?.usedForInheritance ?? [], this._usedForComposition = this.data?.usedForComposition ?? [], this.modalContext?.setValue({ selection: this._selection });
    const i = this.data.isNew;
    y(this, h, i ? null : this.data.unique), u(this, r, z).call(this), u(this, r, $).call(this);
  }
  async _submitModal() {
    const e = this.data?.selection ?? [], i = this._selection, t = new Set(i);
    !e.every((o) => t.has(o)) && await P(this, {
      headline: this.localize.term("general_remove"),
      content: n`<div style="max-width:400px">
					${this.localize.term("contentTypeEditor_compositionRemoveWarning")}
				</div>`,
      confirmLabel: this.localize.term("general_submit"),
      color: "danger"
    }), super._submitModal();
  }
  render() {
    return n`
			<umb-body-layout headline="${this.localize.term("contentTypeEditor_compositions")}">
				<uui-box>
					${this._references.length ? u(this, r, x).call(this) : u(this, r, T).call(this)}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					${this._references.length ? C : n`
								<uui-button
									label=${this.localize.term("general_submit")}
									look="primary"
									color="positive"
									@click=${this._submitModal}></uui-button>
							`}
				</div>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
z = async function() {
  if (await a(this, d), !a(this, h) || !a(this, m)) return;
  const { data: e } = await a(this, m).getReferences(a(this, h));
  this._references = e ?? [];
};
$ = async function() {
  if (await a(this, d), !a(this, m)) return;
  const e = this.data?.isElement ?? void 0, i = this.data?.currentPropertyAliases ?? [], { data: t } = await a(this, m).availableCompositions({
    unique: a(this, h),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: isElement is not available on all types that can be composed.
    isElement: e,
    currentCompositeUniques: this._selection,
    currentPropertyAliases: i
  });
  if (!t) return;
  const s = Object.groupBy(t, (o) => "/" + o.folderPath.join("/"));
  this._compatibleCompositions = Object.keys(s).sort((o, c) => o.localeCompare(c)).map((o) => ({ path: o, compositions: s[o] }));
};
E = function(e) {
  this._selection = [...this._selection, e], this.modalContext?.setValue({ selection: this._selection });
};
k = function(e) {
  this._selection = this._selection.filter((i) => i !== e), this.modalContext?.setValue({ selection: this._selection });
};
x = function() {
  return n`
			<umb-localize key="contentTypeEditor_compositionInUse">
				This Content Type is used in a composition, and therefore cannot be composed itself.
			</umb-localize>
			<h4>
				<umb-localize key="contentTypeEditor_compositionUsageHeading">Where is this composition used?</umb-localize>
			</h4>
			<umb-localize key="contentTypeEditor_compositionUsageSpecification">
				This composition is currently used in the composition of the following Content Types:
			</umb-localize>
			<div class="reference-list">
				${v(
    this._references,
    (e) => e.unique,
    (e) => n`
						<uui-ref-node-document-type
							href=${"/section/settings/workspace/document-type/edit/" + e.unique}
							name=${this.localize.string(e.name)}>
							<umb-icon slot="icon" name=${e.icon}></umb-icon>
						</uui-ref-node-document-type>
					`
  )}
			</div>
		`;
};
T = function() {
  return this._compatibleCompositions ? n`
				<umb-localize key="contentTypeEditor_compositionsDescription">
					Inherit tabs and properties from an existing Document Type. New tabs will be<br />added to the current
					Document Type or merged if a tab with an identical name exists.<br />
				</umb-localize>
				<!--- TODO: Implement search functionality
				<uui-input id="search" placeholder=this.localize.term('placeholders_filter')>
					<uui-icon name="icon-search" slot="prepend"></uui-icon>
				</uui-input> -->
				<div class="compositions-list">
					${v(
    this._compatibleCompositions,
    (e) => e.path,
    (e) => n`${this._compatibleCompositions.length > 1 ? n`<strong><umb-icon name="icon-folder"></umb-icon>${e.path}</strong>` : C}
							${u(this, r, q).call(this, e.compositions)}`
  )}
				</div>
			` : n`
				<umb-localize key="contentTypeEditor_noAvailableCompositions">
					There are no Content Types available to use as a composition
				</umb-localize>
			`;
};
q = function(e) {
  return v(
    e,
    (i) => i.unique,
    (i) => {
      const t = this._usedForInheritance.includes(i.unique), s = this._usedForComposition.includes(i.unique), o = t || i.isCompatible === !1 && !s;
      return n`
					<uui-menu-item
						label=${this.localize.string(i.name)}
						?selectable=${!t}
						?disabled=${o}
						@selected=${() => u(this, r, E).call(this, i.unique)}
						@deselected=${() => u(this, r, k).call(this, i.unique)}
						?selected=${this._selection.find((c) => c === i.unique)}>
						<umb-icon name=${i.icon} slot="icon"></umb-icon>
					</uui-menu-item>
				`;
    }
  );
};
l.styles = [
  M`
			uui-input {
				margin: var(--uui-size-6) 0;
				display: flex;
				align-items: center;
			}

			#search uui-icon {
				padding-left: var(--uui-size-3);
			}

			.reference-list {
				margin-block: var(--uui-size-3);
				display: grid;
				gap: var(--uui-size-1);
			}

			.compositions-list strong {
				display: flex;
				align-items: center;
				gap: var(--uui-size-3);
			}

			.compositions-list {
				margin-block: var(--uui-size-3);
			}
		`
];
p([
  _()
], l.prototype, "_references", 2);
p([
  _()
], l.prototype, "_compatibleCompositions", 2);
p([
  _()
], l.prototype, "_selection", 2);
p([
  _()
], l.prototype, "_usedForInheritance", 2);
p([
  _()
], l.prototype, "_usedForComposition", 2);
l = p([
  F("umb-composition-picker-modal")
], l);
const H = l;
export {
  l as UmbCompositionPickerModalElement,
  H as default
};
//# sourceMappingURL=composition-picker-modal.element-DRrNdxot.js.map
