"use strict";

// *monthly expenses with valid values

let nameOfCategories;
let costs = {};
let sum = 0;
let numberOfCategories;
let sumCosts;
do {
  numberOfCategories = +prompt("Ведіть кількість категорій витрат за минулий місяць :", "");
}
while (!numberOfCategories);
for (let i = 1; i <= numberOfCategories; i++) {
  do {
    nameOfCategories = prompt(`Ведіть назву ${i} категорії :`, "");
  }
  while (!nameOfCategories);
  do {
    sumCosts = +prompt(`Ведіть скільки коштів витрачено на ${nameOfCategories} :`, "");
  }
  while (!sumCosts);
  costs[nameOfCategories] = sumCosts;
}
console.log(costs);
for (let values in costs) {
  sum += costs[values];
}
alert(`За минулий місяць Ви витратили ${sum} грн.`);