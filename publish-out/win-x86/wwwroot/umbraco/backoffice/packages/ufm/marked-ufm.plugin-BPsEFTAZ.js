function m(c = []) {
  return {
    extensions: c.map(({ alias: e, marker: n, render: i }) => {
      const r = `(${e}:${n ? `|${n}` : ""})`;
      return {
        name: e,
        level: "inline",
        start: (t) => t.search(`{${r}`),
        tokenizer: (t) => {
          const s = `^\\{${r}([^}]*)\\}`, p = new RegExp(s), o = t.match(p);
          if (o) {
            const [x, u, f = ""] = o;
            return {
              type: e,
              raw: x,
              tokens: [],
              prefix: u,
              text: f.trim()
            };
          }
        },
        renderer: i
      };
    })
  };
}
export {
  m as u
};
//# sourceMappingURL=marked-ufm.plugin-BPsEFTAZ.js.map
