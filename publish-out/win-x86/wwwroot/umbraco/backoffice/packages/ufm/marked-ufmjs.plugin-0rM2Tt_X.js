function o() {
  return {
    extensions: [
      {
        name: "ufmjs",
        level: "inline",
        start: (e) => e.search(/(?<!\\)\$\{/),
        tokenizer: (e) => {
          const n = /^\$\{((?:[^{}]|\{[^{}]*\})*)\}/, r = new RegExp(n), t = e.match(r);
          if (t) {
            const [s, u] = t;
            return {
              type: "ufmjs",
              raw: s,
              tokens: [],
              text: u.trim()
            };
          }
        },
        renderer: (e) => `<umb-ufm-js-expression>${e.text}</umb-ufm-js-expression>`
      }
    ]
  };
}
export {
  o as u
};
//# sourceMappingURL=marked-ufmjs.plugin-0rM2Tt_X.js.map
