import { DynamicRootService as k } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as q } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as P } from "@umbraco-cms/backoffice/class-api";
import { html as d, nothing as R, repeat as D, css as N, property as w, state as a, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as S } from "@umbraco-cms/backoffice/event";
import { umbConfirmModal as B } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as A } from "@umbraco-cms/backoffice/validation";
import { UMB_ANCESTORS_ENTITY_CONTEXT as z } from "@umbraco-cms/backoffice/entity";
import { UMB_DOCUMENT_ENTITY_TYPE as x } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as Y } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_ENTITY_TYPE as W } from "@umbraco-cms/backoffice/member";
import "./input-content.element-ChvwYNyr.js";
class V {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get dynamic root
   * @param {DynamicRootRequestModel} args
   * @returns {*}  {(Promise<DynamicRootResponseModel | undefined>)}
   * @memberof UmbContentPickerDynamicRootServerDataSource
   */
  async getRoot(t) {
    if (!t.context) throw new Error("Dynamic Root context is missing");
    if (!t.query) throw new Error("Dynamic Root query is missing");
    const i = {
      context: t.context,
      query: t.query
    }, { data: o } = await q(this.#t, k.postDynamicRootQuery({ body: i }));
    return o;
  }
}
const F = "00000000-0000-0000-0000-000000000000";
class G extends P {
  #t;
  constructor(t) {
    super(t), this.#t = new V(t);
  }
  /**
   * Request dynamic root
   * @param {UmbContentPickerDynamicRoot} query
   * @param {string} entityUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbContentPickerDynamicRootRepository
   */
  async requestRoot(t, i, o) {
    const n = {
      context: {
        id: i ?? null,
        parent: { id: o ?? F }
      },
      query: {
        origin: {
          alias: t.originAlias,
          id: t.originKey
        },
        steps: t.querySteps?.map((m) => ({
          alias: m.alias,
          documentTypeIds: m.anyOfDocTypeKeys
        })) || []
      }
    };
    return (await this.#t.getRoot(n))?.roots;
  }
}
var K = Object.defineProperty, L = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, s = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? L(t, i) : t, c = e.length - 1, m; c >= 0; c--)
    (m = e[c]) && (n = (o ? m(t, i, n) : m(n)) || n);
  return o && n && K(t, i, n), n;
}, g = (e, t, i) => t.has(e) || b("Cannot " + i), p = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), T = (e, t, i, o) => (g(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (g(e, t, "access private method"), i), y, _, E, f, l, v, U, C, M, $;
let r = class extends A(O, void 0) {
  constructor() {
    super(...arguments), h(this, l), h(this, y, []), this.readonly = !1, this._type = "content", this._min = 0, this._minMessage = "", this._max = 1 / 0, this._maxMessage = "", h(this, _), h(this, E, new G(this)), h(this, f, {
      content: x,
      media: Y,
      member: W
    });
  }
  set value(e) {
    T(this, y, e);
  }
  get value() {
    return p(this, y);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("startNode");
    t && (this._type = t.type, this._rootUnique = t.id, this._rootEntityType = p(this, f)[t.type], T(this, _, t.dynamicRoot), this._invalidData = p(this, y)?.filter((i) => i.type !== this._rootEntityType), this._invalidData?.length && (this.readonly = !0)), this._min = u(this, l, v).call(this, e.getValueByAlias("minNumber"), 0), this._max = u(this, l, v).call(this, e.getValueByAlias("maxNumber"), 1 / 0), this._allowedContentTypeUniques = e.getValueByAlias("filter"), this._minMessage = `${this.localize.term("validation_minCount")} ${this._min} ${this.localize.term("validation_items")}`, this._maxMessage = `${this.localize.term("validation_maxCount")} ${this._max} ${this.localize.term("validation_itemsSelected")}`, (this._min > 0 || this._max < 1 / 0) && this.checkValidity();
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-content")), u(this, l, U).call(this), this._min && this._max && this._min > this._max && console.warn(
      "Property (Content Picker) has been misconfigured, 'minNumber' is greater than 'maxNumber'. Please correct your data type configuration.",
      this
    );
  }
  focus() {
    return this.shadowRoot?.querySelector("umb-input-content")?.focus();
  }
  render() {
    const e = this._rootUnique && this._rootEntityType ? { unique: this._rootUnique, entityType: this._rootEntityType } : void 0;
    return d`
			<umb-input-content
				.selection=${this.value ?? []}
				.type=${this._type}
				.min=${this._min}
				.minMessage=${this._minMessage}
				.max=${this._max}
				.maxMessage=${this._maxMessage}
				.startNode=${e}
				.allowedContentTypeIds=${this._allowedContentTypeUniques ?? ""}
				?readonly=${this.readonly}
				@change=${u(this, l, C)}>
			</umb-input-content>
			${u(this, l, $).call(this)}
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
v = function(e, t) {
  const i = Number(e);
  return !isNaN(i) && i > 0 ? i : t;
};
U = async function() {
  if (this._rootUnique || !p(this, _)) return;
  const t = (await this.getContext(z))?.getAncestors(), [i, o] = t?.slice(-2).map((c) => c.unique) ?? [], n = await p(this, E).requestRoot(p(this, _), o, i);
  n && n.length > 0 && (this._rootUnique = n[0]);
};
C = function(e) {
  this.value = e.target.selection, this.dispatchEvent(new S());
};
M = async function() {
  await B(this, {
    color: "danger",
    headline: "#contentPicker_unsupportedRemove",
    content: "#defaultdialogs_confirmSure",
    confirmLabel: "#actions_remove"
  }), this.value = this.value?.filter((e) => e.type === this._rootEntityType), this._invalidData = void 0, this.readonly = !1;
};
$ = function() {
  if (!this._invalidData?.length) return R;
  const e = Object.groupBy(this._invalidData, (o) => o.type), t = Object.keys(e).sort((o, n) => o.localeCompare(n)).map((o) => ({ key: o, items: e[o] })), i = (o) => o === x ? "content" : o;
  return d`
			<div id="messages">
				${D(
    t,
    (o) => o.key,
    (o) => d`
						<p>
							<umb-localize key="contentPicker_unsupportedHeadline" .args=${[o.key]}>
								<strong>Unsupported ${o.key} items</strong><br />
								The following content is no longer supported in this Editor.
							</umb-localize>
						</p>
						<umb-input-content readonly .selection=${o.items} .type=${i(o.key)}></umb-input-content>
						<p>
							<umb-localize key="contentPicker_unsupportedMessage">
								If you still require this content, please contact your administrator. Otherwise you can remove it.
							</umb-localize>
						</p>
						<uui-button
							color="danger"
							look="outline"
							label=${this.localize.term("contentPicker_unsupportedRemove")}
							@click=${u(this, l, M)}></uui-button>
					`
  )}
			</div>
		`;
};
r.styles = [
  N`
			#messages {
				color: var(--uui-color-danger-standalone);
			}
		`
];
s([
  w({ type: Array })
], r.prototype, "value", 1);
s([
  w({ type: Boolean, reflect: !0 })
], r.prototype, "readonly", 2);
s([
  a()
], r.prototype, "_type", 2);
s([
  a()
], r.prototype, "_min", 2);
s([
  a()
], r.prototype, "_minMessage", 2);
s([
  a()
], r.prototype, "_max", 2);
s([
  a()
], r.prototype, "_maxMessage", 2);
s([
  a()
], r.prototype, "_allowedContentTypeUniques", 2);
s([
  a()
], r.prototype, "_rootUnique", 2);
s([
  a()
], r.prototype, "_rootEntityType", 2);
s([
  a()
], r.prototype, "_invalidData", 2);
r = s([
  I("umb-property-editor-ui-content-picker")
], r);
export {
  r as UmbPropertyEditorUIContentPickerElement,
  r as element
};
//# sourceMappingURL=property-editor-ui-content-picker.element-CChgyQid.js.map
