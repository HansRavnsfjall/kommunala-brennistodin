const l = [
  { alias: "text", varName: "--uui-color-text" },
  { alias: "yellow", varName: "--uui-palette-sunglow" },
  { alias: "pink", varName: "--uui-palette-spanish-pink" },
  { alias: "blue", varName: "--uui-palette-violet-blue" },
  { alias: "light-blue", varName: "--uui-palette-malibu" },
  { alias: "red", varName: "--uui-palette-maroon-flush" },
  { alias: "green", varName: "--uui-palette-jungle-green" },
  { alias: "brown", varName: "--uui-palette-chamoisee" },
  { alias: "grey", varName: "--uui-palette-dusty-grey" },
  { alias: "black", legacy: !0, varName: "--uui-color-text" },
  { alias: "blue-grey", legacy: !0, varName: "--uui-palette-dusty-grey" },
  { alias: "indigo", legacy: !0, varName: "--uui-palette-malibu" },
  { alias: "purple", legacy: !0, varName: "--uui-palette-space-cadet" },
  { alias: "deep-purple", legacy: !0, varName: "--uui-palette-space-cadet" },
  { alias: "cyan", legacy: !0, varName: "-uui-palette-jungle-green" },
  { alias: "light-green", legacy: !0, varName: "-uui-palette-jungle-green" },
  { alias: "lime", legacy: !0, varName: "-uui-palette-jungle-green" },
  { alias: "amber", legacy: !0, varName: "--uui-palette-chamoisee" },
  { alias: "orange", legacy: !0, varName: "--uui-palette-chamoisee" },
  { alias: "deep-orange", legacy: !0, varName: "--uui-palette-cocoa-brown" }
];
function t(a) {
  return l.find((e) => e.alias === a)?.varName;
}
export {
  t as e,
  l as u
};
//# sourceMappingURL=extractUmbColorVariable.function-C_Z99zyW.js.map
