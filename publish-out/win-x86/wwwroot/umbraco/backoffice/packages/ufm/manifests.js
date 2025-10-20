const e = {
  type: "globalContext",
  alias: "Umb.GlobalContext.Ufm",
  name: "UFM Context",
  api: () => import("./ufm.context-ej9QaPDH.js").then((a) => a.c)
}, t = [
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.LabelValue",
    name: "Label Value UFM Component",
    api: () => import("./label-value.component-LX5Ohqa0.js"),
    meta: { alias: "umbValue", marker: "=" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.Localize",
    name: "Localize UFM Component",
    api: () => import("./localize.component-BiX7KjGy.js"),
    meta: { alias: "umbLocalize", marker: "#" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.ContentName",
    name: "Content Name UFM Component",
    api: () => import("./content-name.component-IlSUfsTr.js"),
    meta: { alias: "umbContentName", marker: "~" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.Link",
    name: "Link UFM Component",
    api: () => import("./link.component-DUlB2PUb.js"),
    meta: { alias: "umbLink" }
  }
], i = [
  {
    type: "ufmFilter",
    alias: "Umb.Filter.Fallback",
    name: "Fallback UFM Filter",
    api: () => import("./fallback.filter-DJfvJ7jO.js"),
    meta: { alias: "fallback" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.Lowercase",
    name: "Lowercase UFM Filter",
    api: () => import("./lowercase.filter-DqJ28aVu.js"),
    meta: { alias: "lowercase" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.StripHtml",
    name: "Strip HTML UFM Filter",
    api: () => import("./strip-html.filter-DJeGiLco.js"),
    meta: { alias: "strip-html" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.TitleCase",
    name: "Title Case UFM Filter",
    api: () => import("./title-case.filter-cZNSeBkf.js"),
    meta: { alias: "title-case" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.Truncate",
    name: "Truncate UFM Filter",
    api: () => import("./truncate.filter-CEhpz1wU.js"),
    meta: { alias: "truncate" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.Uppercase",
    name: "Uppercase UFM Filter",
    api: () => import("./uppercase.filter-D8h9H1L8.js"),
    meta: { alias: "uppercase" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.WordLimit",
    name: "Word Limit UFM Filter",
    api: () => import("./word-limit.filter-DrA3oF9i.js"),
    meta: { alias: "word-limit" }
  }
], m = [e, ...t, ...i];
export {
  m as manifests
};
//# sourceMappingURL=manifests.js.map
