import { DocumentVariantStateModel as w } from "@umbraco-cms/backoffice/external/backend-api";
import { i as g } from "./utils-DhnAT8B6.js";
import { U as G } from "./document-variant-language-picker.element-azTXCKTU.js";
import { html as c, when as _, repeat as H, ref as D, css as Y, state as m, customElement as j } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as J } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as K } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as Q } from "@umbraco-cms/backoffice/utils";
import { UmbValidationContext as X, umbBindToValidation as y } from "@umbraco-cms/backoffice/validation";
var Z = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, V = (t) => {
  throw TypeError(t);
}, h = (t, e, i, a) => {
  for (var n = a > 1 ? void 0 : a ? tt(e, i) : e, f = t.length - 1, p; f >= 0; f--)
    (p = t[f]) && (n = (a ? p(e, i, n) : p(n)) || n);
  return a && n && Z(e, i, n), n;
}, z = (t, e, i) => e.has(t) || V("Cannot " + i), u = (t, e, i) => (z(t, e, "read from private field"), i ? i.call(t) : e.get(t)), v = (t, e, i) => e.has(t) ? V("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), s = (t, e, i) => (z(t, e, "access private method"), i), r, d, b, l, U, T, x, $, M, k, E, C, P, A, B, O, N, F, I, S, L, W, q;
let o = class extends J {
  constructor() {
    super(), v(this, l), v(this, r, new Q(this)), this._options = [], this._selection = [], this._isAllSelected = !1, this._internalValues = [], v(this, d, new X(this)), v(this, b, (t) => g(t) ? !0 : !t.variant || t.variant.state === w.NOT_CREATED ? !1 : this.data?.pickableFilter ? this.data.pickableFilter(t) : !0), this.observe(
      u(this, r).selection,
      (t) => {
        if (!this._options && !t) return;
        this._selection.length = 0;
        for (const i of t) {
          const a = this._internalValues.find((n) => n.unique === i);
          a && this._selection.push(a);
        }
        this._isAllSelected = s(this, l, k).call(this);
        const e = this._options.filter(g);
        this._hasNotSelectedMandatory = e.some((i) => !t.includes(i.unique)), this.requestUpdate();
      },
      "_selection"
    );
  }
  firstUpdated() {
    this._internalValues = this.data?.prevalues ? [...this.data.prevalues] : [], s(this, l, U).call(this);
  }
  render() {
    return c`<uui-dialog-layout headline=${this.localize.term("general_scheduledPublishing")}>
			${s(this, l, E).call(this)}

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${s(this, l, x)}></uui-button>
				<uui-button
					.state=${this._submitButtonState}
					label="${this.localize.term("buttons_schedulePublish")}"
					look="primary"
					color="positive"
					?disabled=${!this._selection.length || this._hasNotSelectedMandatory}
					@click=${s(this, l, T)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
r = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
U = async function() {
  u(this, r).setMultiple(!0), u(this, r).setSelectable(!0), u(this, r).setAllowLimitation((i) => {
    const a = this._options.find((n) => n.unique === i);
    return a ? u(this, b).call(this, a) : !0;
  }), this._options = this.data?.options.filter(
    (i) => i.variant && i.variant.state === null || g(i) || i.variant?.state !== w.NOT_CREATED
  ) ?? [];
  let t = this.data?.activeVariants ?? [];
  const e = this._options.filter((i) => u(this, b).call(this, i));
  t = t.filter((i) => e.some((a) => a.unique === i)), u(this, r).setSelection(t);
};
T = async function() {
  this._submitButtonState = "waiting";
  try {
    await u(this, d).validate(), this._submitButtonState = "success", this.value = {
      selection: this._selection
    }, this.modalContext?.submit();
  } catch {
    this._submitButtonState = "failed";
  } finally {
    this._submitButtonState = void 0;
  }
};
x = function() {
  this.modalContext?.reject();
};
$ = function(t) {
  return this._selection.some((e) => e.unique === t);
};
M = function(t) {
  const e = this._options.map((n) => n.unique), i = u(this, r).getAllowLimitation(), a = e.filter((n) => i(n));
  t.target.checked ? u(this, r).setSelection(a) : u(this, r).setSelection([]);
};
k = function() {
  const t = this._options.map((a) => a.unique), e = u(this, r).getAllowLimitation(), i = t.filter((a) => e(a));
  return this._selection.length !== 0 && this._selection.length === i.length;
};
E = function() {
  return c`
			${_(
    this._options.length > 1,
    () => c`
					<uui-checkbox
						@change=${s(this, l, M)}
						label=${this.localize.term("general_selectAll")}
						.checked=${this._isAllSelected}></uui-checkbox>
				`
  )}
			${H(
    this._options,
    (t) => t.unique,
    (t) => s(this, l, C).call(this, t)
  )}
		`;
};
C = function(t) {
  const e = u(this, b).call(this, t), i = s(this, l, O).call(this, t.unique), a = s(this, l, N).call(this, t.unique), n = i !== t.variant?.scheduledPublishDate || a !== t.variant?.scheduledUnpublishDate;
  return c`
			<uui-menu-item
				?selectable=${e}
				?disabled=${!e}
				label=${t.variant?.name ?? t.language.name}
				@selected=${() => u(this, r).select(t.unique)}
				@deselected=${() => u(this, r).deselect(t.unique)}
				?selected=${s(this, l, $).call(this, t.unique)}>
				<uui-icon slot="icon" name="icon-globe"></uui-icon>
				${G.renderLabel(t)}
			</uui-menu-item>
			${_(s(this, l, $).call(this, t.unique), () => s(this, l, B).call(this, t, i, a))}
			${_(
    n,
    () => c`<p>
						${this.localize.term("content_scheduledPendingChanges", this.localize.term("buttons_schedulePublish"))}
					</p>`
  )}
		`;
};
P = function(t) {
  t && t.addValidator(
    "badInput",
    () => this.localize.term("speechBubbles_scheduleErrReleaseDate1"),
    () => {
      const e = t.value.toString();
      return e ? new Date(e) < /* @__PURE__ */ new Date() : !1;
    }
  );
};
A = function(t, e) {
  t && (t.addValidator(
    "badInput",
    () => this.localize.term("speechBubbles_scheduleErrExpireDate1"),
    () => {
      const i = t.value.toString();
      return i ? new Date(i) < /* @__PURE__ */ new Date() : !1;
    }
  ), t.addValidator(
    "customError",
    () => this.localize.term("speechBubbles_scheduleErrExpireDate2"),
    () => {
      const i = t.value.toString();
      if (!i) return !1;
      const a = this._internalValues.find((R) => R.unique === e);
      if (!a) return !1;
      const n = a.schedule?.publishTime;
      if (!n) return !1;
      const f = new Date(i), p = new Date(n);
      return f < p;
    }
  ));
};
B = function(t, e, i) {
  return c`
			<div class="publish-date">
				<uui-form-layout-item>
					<uui-label slot="label"><umb-localize key="content_releaseDate">Publish at</umb-localize></uui-label>
					<div>
						<umb-input-date
							${D((a) => s(this, l, P).call(this, a))}
							${y(this)}
							type="datetime-local"
							.value=${s(this, l, S).call(this, e)}
							@change=${(a) => s(this, l, L).call(this, a, t.unique)}
							label=${this.localize.term("general_publishDate")}>
							<div slot="append">
								${_(
    e,
    () => c`
										<uui-button
											compact
											label=${this.localize.term("general_clear")}
											title=${this.localize.term("general_clear")}
											@click=${() => s(this, l, F).call(this, t.unique)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									`
  )}
							</div>
						</umb-input-date>
					</div>
				</uui-form-layout-item>

				<uui-form-layout-item>
					<uui-label slot="label"><umb-localize key="content_unpublishDate">Unpublish at</umb-localize></uui-label>
					<div>
						<umb-input-date
							${D((a) => s(this, l, A).call(this, a, t.unique))}
							${y(this)}
							type="datetime-local"
							.value=${s(this, l, S).call(this, i)}
							@change=${(a) => s(this, l, W).call(this, a, t.unique)}
							label=${this.localize.term("general_publishDate")}>
							<div slot="append">
								${_(
    i,
    () => c`
										<uui-button
											compact
											label=${this.localize.term("general_clear")}
											title=${this.localize.term("general_clear")}
											@click=${() => s(this, l, I).call(this, t.unique)}>
											<uui-icon name="remove"></uui-icon>
										</uui-button>
									`
  )}
							</div>
						</umb-input-date>
					</div>
				</uui-form-layout-item>
			</div>
		`;
};
O = function(t) {
  return this._internalValues.find((i) => i.unique === t)?.schedule?.publishTime ?? null;
};
N = function(t) {
  return this._internalValues.find((i) => i.unique === t)?.schedule?.unpublishTime ?? null;
};
F = function(t) {
  const e = this._internalValues.find((i) => i.unique === t);
  e && (e.schedule = {
    ...e.schedule,
    publishTime: null
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
I = function(t) {
  const e = this._internalValues.find((i) => i.unique === t);
  e && (e.schedule = {
    ...e.schedule,
    unpublishTime: null
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
S = function(t) {
  if (!t) return "";
  const e = new Date(t);
  return isNaN(e.getTime()) ? (console.warn("[Schedule]: Invalid date:", t), "") : e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0");
};
L = function(t, e) {
  const i = this._internalValues.find((a) => a.unique === e);
  i && (i.schedule = {
    ...i.schedule,
    publishTime: s(this, l, q).call(this, t)
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
W = function(t, e) {
  const i = this._internalValues.find((a) => a.unique === e);
  i && (i.schedule = {
    ...i.schedule,
    unpublishTime: s(this, l, q).call(this, t)
  }, u(this, d).validate(), this.requestUpdate("_internalValues"));
};
q = function(t) {
  const e = t.target.value.toString();
  return e.length ? e : null;
};
o.styles = [
  K,
  Y`
			:host {
				display: block;
				min-width: 600px;
				max-width: 90vw;
			}

			.label {
				padding: 0.5rem 0;
			}
			.label-status {
				font-size: 0.8rem;
			}

			.publish-date {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				gap: 1rem;
				border-top: 1px solid var(--uui-color-border);
				border-bottom: 1px solid var(--uui-color-border);
				margin-top: var(--uui-size-space-4);
			}

			.publish-date > uui-form-layout-item {
				flex: 1;
				margin: 0;
				padding: 0.5rem 0 1rem;
			}

			.publish-date > uui-form-layout-item:first-child {
				border-right: 1px dashed var(--uui-color-border);
			}

			uui-checkbox {
				margin-bottom: var(--uui-size-space-3);
			}

			uui-menu-item {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
h([
  m()
], o.prototype, "_options", 2);
h([
  m()
], o.prototype, "_hasNotSelectedMandatory", 2);
h([
  m()
], o.prototype, "_selection", 2);
h([
  m()
], o.prototype, "_isAllSelected", 2);
h([
  m()
], o.prototype, "_internalValues", 2);
h([
  m()
], o.prototype, "_submitButtonState", 2);
o = h([
  j("umb-document-schedule-modal")
], o);
const ot = o;
export {
  o as UmbDocumentScheduleModalElement,
  ot as default
};
//# sourceMappingURL=document-schedule-modal.element-C4WypZk2.js.map
