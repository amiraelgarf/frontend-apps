function colors(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

export { colors as c };
//# sourceMappingURL=colors-CJG58WzC.js.map

//# sourceMappingURL=colors-CJG58WzC.js.map