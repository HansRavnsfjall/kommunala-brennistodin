var R = (r) => {
  throw TypeError(r);
};
var _ = (r, o, e) => o.has(r) || R("Cannot " + e);
var n = (r, o, e) => (_(r, o, "read from private field"), e ? e.call(r) : o.get(r)), d = (r, o, e) => o.has(r) ? R("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(r) : o.set(r, e), g = (r, o, e, t) => (_(r, o, "write to private field"), t ? t.call(r, e) : o.set(r, e), e), E = (r, o, e) => (_(r, o, "access private method"), e);
import { c as U, u as A, v as D, w as x, x as M, y as z, G as V, z as B } from "./index.js";
import { tryExecute as L } from "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { FormsPrevalueSourceCollectionRepository as G } from "./prevaluesource-collection.repository.js";
import { UmbElementMixin as $ } from "@umbraco-cms/backoffice/element-api";
import { LitElement as X, html as Y, css as H, state as K, property as j, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { UmbSubmittableWorkspaceContextBase as Q } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as Z } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as ee } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as te, UmbRequestReloadStructureForEntityEvent as se } from "@umbraco-cms/backoffice/entity-action";
import { UmbPropertyEditorConfigCollection as ie } from "@umbraco-cms/backoffice/property-editor";
import { UMB_NOTIFICATION_CONTEXT as re } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as oe } from "@umbraco-cms/backoffice/localization-api";
var ae = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, O = (r) => {
  throw TypeError(r);
}, q = (r, o, e, t) => {
  for (var s = t > 1 ? void 0 : t ? ne(o, e) : o, i = r.length - 1, a; i >= 0; i--)
    (a = r[i]) && (s = (t ? a(o, e, s) : a(s)) || s);
  return t && s && ae(o, e, s), s;
}, W = (r, o, e) => o.has(r) || O("Cannot " + e), P = (r, o, e) => (W(r, o, "read from private field"), o.get(r)), N = (r, o, e) => o.has(r) ? O("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(r) : o.set(r, e), le = (r, o, e, t) => (W(r, o, "write to private field"), o.set(r, e), e), k = (r, o, e) => (W(r, o, "access private method"), e), y, S, b, I;
const ue = "forms-form-workspace-editor";
let f = class extends $(
  X
) {
  constructor() {
    super(), N(this, S), this._formName = "", N(this, y), this.consumeContext(U, (r) => {
      le(this, y, r), k(this, S, b).call(this);
    });
  }
  render() {
    return Y` <umb-workspace-editor alias="Forms.Workspace.Form">
      <uui-input
        slot="header"
        id="nameInput"
        label=${this.localize.term("placeholders_entername")}
        placeholder=${this.localize.term("placeholders_entername")}
        required
        .value=${this._formName}
        @input="${k(this, S, I)}"
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
y = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
b = function() {
  P(this, y) && this.observe(
    P(this, y).data,
    (r) => this._formName = (r == null ? void 0 : r.name) ?? ""
  );
};
I = function(r) {
  var o;
  (o = P(this, y)) == null || o.setName(r.target.value.toString());
};
f.styles = [
  H`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      #nameInput {
        flex: 1 1 auto;
      }
    `
];
q([
  K()
], f.prototype, "_formName", 2);
q([
  j({ type: String, attribute: !1 })
], f.prototype, "workspaceAlias", 2);
f = q([
  J(ue)
], f);
var m, l, w, v, F, T;
class pe extends Q {
  constructor(e) {
    super(e, A);
    d(this, F);
    d(this, m);
    d(this, l);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    d(this, w);
    d(this, v);
    this.formRepository = new D(this), this.fieldTypeRepository = new x(
      this
    ), this.workflowTypeRepository = new M(this), this.prevalueSourceCollectionRepository = new G(this), g(this, l, new Z(void 0)), this.data = n(this, l).asObservable(), this.unique = n(this, l).asObservablePart((t) => t == null ? void 0 : t.unique), this.name = n(this, l).asObservablePart((t) => t == null ? void 0 : t.name), this.id = n(this, l).asObservablePart((t) => t == null ? void 0 : t.unique), g(this, v, async (t, s) => {
      const i = s.match.params.parentEntityType, a = s.match.params.parentUnique === "null" ? null : s.match.params.parentUnique, u = s.match.params.template;
      await this.create(
        { entityType: i, unique: a },
        u
      );
    }), this.getConditionActionTypes = [
      {
        name: "Show",
        value: "Show"
      },
      {
        name: "Hide",
        value: "Hide"
      }
    ], this.getConditionLogicTypes = [
      {
        name: "all",
        value: "All"
      },
      {
        name: "any",
        value: "Any"
      }
    ], this.getConditionOperators = [
      {
        name: "is",
        value: "Is"
      },
      {
        name: "is not",
        value: "IsNot"
      },
      {
        name: "is greater than",
        value: "GreaterThen"
      },
      {
        name: "is less than",
        value: "LessThen"
      },
      {
        name: "contains (case-sensitive)",
        value: "Contains"
      },
      {
        name: "contains (case-insensitive)",
        value: "ContainsIgnoreCase"
      },
      {
        name: "starts with (case-sensitive)",
        value: "StartsWith"
      },
      {
        name: "starts with (case-insensitive)",
        value: "StartsWithIgnoreCase"
      },
      {
        name: "ends with",
        value: "EndsWith"
      },
      {
        name: "ends with (case-insensitive)",
        value: "EndsWithIgnoreCase"
      },
      {
        name: "does not contain (case-sensitive)",
        value: "NotContains"
      },
      {
        name: "does not contain (case-insensitive)",
        value: "NotContainsIgnoreCase"
      },
      {
        name: "does not start with (case-sensitive)",
        value: "NotStartsWith"
      },
      {
        name: "does not start with (case-insensitive)",
        value: "NotStartsWithIgnoreCase"
      },
      {
        name: "does not end with (case-sensitive)",
        value: "NotEndsWith"
      },
      {
        name: "does not end with (case-insensitive)",
        value: "NotEndsWithIgnoreCase"
      }
    ], this.routes.setRoutes([
      {
        path: "create/parent/:parentEntityType/:parentUnique",
        component: f,
        setup: n(this, v)
      },
      {
        path: "createFromTemplate/parent/:parentEntityType/:parentUnique/:template",
        component: f,
        setup: n(this, v)
      },
      {
        path: "edit/:unique",
        component: f,
        setup: (t, s) => {
          const i = s.match.params.unique;
          this.load(i);
        }
      }
    ]);
  }
  async load(e) {
    var s;
    g(this, w, (s = this.formRepository) == null ? void 0 : s.requestByUnique(e));
    const { data: t } = await n(this, w);
    t && (this.setIsNew(!1), n(this, l).update(t));
  }
  async create(e, t) {
    g(this, m, e);
    let i = (await this.formRepository.requestFormScaffold(
      t || ""
    )).data;
    if (!i) throw new Error("Form design data is missing");
    return i.folderId = e.unique, this.modalContext && (i = {
      ...i,
      ...this.modalContext.data.preset
    }), this.setIsNew(!0), n(this, l).setValue(i), { data: i };
  }
  async requestSave() {
    await this.submit();
  }
  async submit() {
    var t, s;
    if (!n(this, l).value || !n(this, l).value.unique) return;
    if (n(this, l).value.name.trim().length === 0) {
      const i = await this.getContext(
        re
      ), a = new oe(this);
      return i == null || i.peek("danger", {
        data: {
          message: a.term("formEdit_noNameForForm")
        }
      }), Promise.reject();
    }
    const e = await this.getContext(ee);
    if (this.getIsNew()) {
      if (!n(this, m)) throw new Error("Parent is not set");
      await ((t = this.formRepository) == null ? void 0 : t.create(n(this, l).value, n(this, m).unique));
      const i = new te({
        entityType: n(this, m).entityType,
        unique: n(this, m).unique
      });
      e == null || e.dispatchEvent(i), this.setIsNew(!1);
    } else {
      await ((s = this.formRepository) == null ? void 0 : s.save(n(this, l).value));
      const i = new se({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      e == null || e.dispatchEvent(i);
    }
  }
  async loadFieldType(e) {
    const { data: t } = await this.fieldTypeRepository.requestByUnique(e);
    return t;
  }
  async loadWorkflowType(e) {
    const { data: t } = await this.workflowTypeRepository.requestByUnique(e);
    return t;
  }
  async loadValidationPatterns() {
    const { data: e } = await this.fieldTypeRepository.requestValidationPatterns();
    return e;
  }
  async loadPrevalueSources() {
    const { data: e } = await this.prevalueSourceCollectionRepository.requestCollection({});
    return e == null ? void 0 : e.items;
  }
  getData() {
    return n(this, l).getValue();
  }
  getUnique() {
    var e;
    return ((e = this.getData()) == null ? void 0 : e.unique) || "";
  }
  getEntityType() {
    return z;
  }
  getName() {
    var e;
    return (e = n(this, l).getValue()) == null ? void 0 : e.name;
  }
  setName(e) {
    n(this, l).update({ name: e });
  }
  setFormProperty(e, t) {
    n(this, l).update({ [e]: t });
  }
  getFormProperty(e) {
    var t;
    return (t = this.getData()) == null ? void 0 : t[e];
  }
  setPageProperty(e, t, s) {
    var a;
    const i = (a = n(this, l).value) == null ? void 0 : a.pages.map((u, p) => ({
      ...u,
      ...p === e && {
        [t]: s
      }
    }));
    this.setFormProperty("pages", i);
  }
  setFieldsetProperty(e, t, s, i) {
    var u;
    const a = (u = n(this, l).value) == null ? void 0 : u.pages[e].fieldSets.map(
      (p, c) => ({
        ...p,
        ...c === t && {
          [s]: i
        }
      })
    );
    this.setPageProperty(e, "fieldSets", a);
  }
  setContainerProperty(e, t, s, i, a) {
    var p;
    const u = (p = n(this, l).value) == null ? void 0 : p.pages[e].fieldSets[t].containers.map((c, h) => ({
      ...c,
      ...h === s && {
        [i]: a
      }
    }));
    this.setFieldsetProperty(
      e,
      t,
      "containers",
      u
    );
  }
  setFieldProperty(e, t, s, i, a, u) {
    var c;
    const p = (c = n(this, l).value) == null ? void 0 : c.pages[e].fieldSets[t].containers[s].fields.map((h, C) => ({
      ...h,
      ...C === i && {
        [a]: u
      }
    }));
    this.setContainerProperty(
      e,
      t,
      s,
      "fields",
      p
    );
  }
  setWorkflowProperty(e, t, s, i) {
    var u;
    const a = structuredClone((u = n(this, l).value) == null ? void 0 : u.formWorkflows);
    a && (a[e][t][s] = i, this.setFormProperty("formWorkflows", a));
  }
  moveFieldSet(e, t, s) {
    var a;
    if (s === e) return;
    const i = structuredClone((a = n(this, l).value) == null ? void 0 : a.pages);
    if (i) {
      const p = i[e].fieldSets.splice(t, 1)[0];
      i[s].fieldSets.push(p), this.setFormProperty("pages", i);
    }
  }
  moveField(e, t, s) {
    var a;
    if (t === s) return;
    const i = structuredClone((a = n(this, l).value) == null ? void 0 : a.pages);
    if (i) {
      const u = E(this, F, T).call(this, i, t), p = E(this, F, T).call(this, i, s), c = u.fields.findIndex(
        (C) => C.id == e
      ), h = u.fields.splice(c, 1)[0];
      p.fields.push(h), this.setFormProperty("pages", i);
    }
  }
  moveWorkflow(e, t, s) {
    if (!n(this, l).value) return;
    const i = structuredClone(n(this, l).value.formWorkflows), u = i[t].splice(e, 1)[0];
    i[s].push(u), this.setFormProperty("formWorkflows", i);
  }
  getAllPages() {
    const e = this.getData();
    if (!e) return [];
    const t = [];
    return e.pages.forEach((s) => {
      t.push(s);
    }), t;
  }
  getAllContainers() {
    const e = this.getData();
    if (!e) return [];
    const t = [];
    return e.pages.forEach((s) => {
      s.fieldSets.forEach((i) => {
        i.containers.forEach((a) => {
          t.push(a);
        });
      });
    }), t;
  }
  getAllFields() {
    const e = this.getAllContainers(), t = [];
    return e.forEach((s) => {
      s.fields.forEach((i) => {
        t.push(i);
      });
    }), t;
  }
  getAllFieldAliases() {
    return this.getAllFields().map((e) => e.alias);
  }
  getFieldsWithPrevalues() {
    return this.getAllFields().filter(
      (s) => s.preValues.length > 0 || s.prevalueSourceId !== V
    ).map((s) => ({
      id: s.id,
      prevalues: s.preValues,
      prevalueSourceId: s.prevalueSourceId
    }));
  }
  getContainerIndexPathForField(e) {
    const t = this.getData();
    if (!t) return "";
    for (let s = 0; s < t.pages.length; s++) {
      const i = t.pages[s];
      for (let a = 0; a < i.fieldSets.length; a++) {
        const u = i.fieldSets[a];
        for (let p = 0; p < u.containers.length; p++) {
          const c = u.containers[p];
          for (let h = 0; h < c.fields.length; h++)
            if (c.fields[h].id === e)
              return s + "_" + a + "_" + p;
        }
      }
    }
    return "";
  }
  async getRichTextConfiguration() {
    const e = new ie([]), { data: t, error: s } = await L(
      this,
      B.getFieldTypeRichtextDatatype()
    );
    return s || (e.push({
      alias: "maxImageSize",
      value: t.configurationData.maxImageSize
    }), e.push({
      alias: "overlaySize",
      value: t.configurationData.overlaySize
    }), e.push({
      alias: "toolbar",
      value: t.configurationData.toolbar
    }), e.push({
      alias: "extensions",
      value: t.configurationData.extensions
    })), e;
  }
  destroy() {
    n(this, l).destroy(), super.destroy();
  }
}
m = new WeakMap(), l = new WeakMap(), w = new WeakMap(), v = new WeakMap(), F = new WeakSet(), T = function(e, t) {
  const s = t.split("_").map((i) => parseInt(i));
  return e[s[0]].fieldSets[s[1]].containers[s[2]];
};
const Te = pe;
export {
  pe as FormsFormWorkspaceContext,
  Te as api
};
//# sourceMappingURL=form-workspace.context.js.map
