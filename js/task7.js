"use strict";

function sumNumbers() {
  let input;
  const numbers = [];
  let total = 0;
  while (input !== null) {
    input = prompt("Enter the number");
    if (input === null) {
      break;
    }
    if (!Number.isNaN(Number(input))) {
      numbers.push(Number(input));
    } else {
      alert("This in not a number, try again");
    }
  }
  if (numbers.length !== 0) {
    for (let number of numbers) {
      total += number;
    }
    return alert(`Summa of numbers ${total}`);
  } else {
    return alert("Nothing to count!");
  }
}
console.log(sumNumbers());
