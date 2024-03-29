"use strict";

function checkForSpam(str) {
  return (
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam")
  );
}
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
