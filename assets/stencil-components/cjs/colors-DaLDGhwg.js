'use strict';

function colors(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

exports.colors = colors;
//# sourceMappingURL=colors-DaLDGhwg.js.map

//# sourceMappingURL=colors-DaLDGhwg.js.map