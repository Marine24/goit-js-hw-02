"use strict";

function formatString(string) {
  const word = string.length > 40 ? `${string.slice(0, 39)}...` : `${string}`;
  return word;
}
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
