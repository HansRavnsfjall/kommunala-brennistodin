const a = {
  type: "globalContext",
  alias: "Umb.GlobalContext.Ufm",
  name: "UFM Context",
  api: () => import("./ufm.context-CodmBAew.js")
}, e = [
  {
    type: "markedExtension",
    alias: "Umb.MarkedExtension.Ufm",
    name: "UFM Marked Extension",
    api: () => import("./ufm-marked-extension.api-BdhvEn6Q.js"),
    meta: {
      alias: "ufm"
    }
  },
  {
    type: "markedExtension",
    alias: "Umb.MarkedExtension.Ufmjs",
    name: "UFM JS Marked Extension",
    api: () => import("./ufmjs-marked-extension.api-CO_MxLqy.js"),
    meta: {
      alias: "ufmjs"
    }
  }
], t = [
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.LabelValue",
    name: "Label Value UFM Component",
    api: () => import("./label-value.component-DnyEchJR.js"),
    meta: { alias: "umbValue", marker: "=" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.Localize",
    name: "Localize UFM Component",
    api: () => import("./localize.component-BwM1svir.js"),
    meta: { alias: "umbLocalize", marker: "#" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.ContentName",
    name: "Content Name UFM Component",
    api: () => import("./content-name.component-CyOZlvWB.js"),
    meta: { alias: "umbContentName", marker: "~" }
  },
  {
    type: "ufmComponent",
    alias: "Umb.Markdown.Link",
    name: "Link UFM Component",
    api: () => import("./link.component-CBoNPvyv.js"),
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
    alias: "Umb.Filter.Bytes",
    name: "Bytes UFM Filter",
    api: () => import("./bytes.filter-BIwZ1NYL.js"),
    meta: { alias: "bytes" }
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
    api: () => import("./strip-html.filter-CWhlOC0x.js"),
    meta: { alias: "strip-html" }
  },
  // TODO: Remove in V18 - replaced by camelCase alias below for UFMJS compatibility
  {
    type: "ufmFilter",
    alias: "Umb.Filter.StripHtmlCamelCase",
    name: "Strip HTML UFM Filter (camelCase)",
    api: () => import("./strip-html.filter-CWhlOC0x.js"),
    meta: { alias: "stripHtml" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.TitleCase",
    name: "Title Case UFM Filter",
    api: () => import("./title-case.filter-cZNSeBkf.js"),
    meta: { alias: "title-case" }
  },
  // TODO: Remove in V18 - replaced by camelCase alias below for UFMJS compatibility
  {
    type: "ufmFilter",
    alias: "Umb.Filter.TitleCaseCamelCase",
    name: "Title Case UFM Filter (camelCase)",
    api: () => import("./title-case.filter-cZNSeBkf.js"),
    meta: { alias: "titleCase" }
  },
  {
    type: "ufmFilter",
    alias: "Umb.Filter.Truncate",
    name: "Truncate UFM Filter",
    api: () => import("./truncate.filter-tuGfYtWH.js"),
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
  },
  // TODO: Remove in V18 - replaced by camelCase alias below for UFMJS compatibility
  {
    type: "ufmFilter",
    alias: "Umb.Filter.WordLimitCamelCase",
    name: "Word Limit UFM Filter (camelCase)",
    api: () => import("./word-limit.filter-DrA3oF9i.js"),
    meta: { alias: "wordLimit" }
  }
], m = [
  a,
  ...e,
  ...t,
  ...i
];
export {
  m as manifests
};
//# sourceMappingURL=manifests.js.map
