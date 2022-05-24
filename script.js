"use strict";

//Elements selected
const billInput = document.querySelector(".input-bill");
const buttonsTip = document.querySelectorAll(".btn-tip");
const customTip = document.querySelector(".custom-tip");
const peopleNum = document.querySelector(".num-people");
const tipDisplay = document.querySelector(".output-tip");
const totalDisplay = document.querySelector(".output-total");
const perPerson = document.querySelectorAll(".per");

//Hide per person if only 1 person
for (const p of perPerson) {
  p.style.visibility = "hidden";
}

var bill,
  custom,
  num = 1;

//Calcuate tip and total
function Sum(billAmount, tipAmount) {
  let percent, sum, tips, billFloat;
  percent = parseFloat(tipAmount);
  billFloat = parseFloat(billAmount);
  sum = (billFloat + percent * billFloat) / num;
  tips = (billFloat * percent) / num;
  totalDisplay.textContent = `$${sum.toFixed(2)}`;
  tipDisplay.textContent = `$${tips.toFixed(2)}`;
}

//Calculator
billInput.addEventListener("input", function Bill() {
  bill = billInput.value;

  peopleNum.addEventListener("input", function () {
    num = peopleNum.value;
    if (num > 1) {
      for (const p of perPerson) {
        p.style.visibility = "visible";
      }
    }
  });
  customTip.addEventListener("input", function () {
    custom = parseFloat(customTip.value) * 0.01;
  });
  for (const button of buttonsTip) {
    let percent, sum, tips, billFloat;
    button.addEventListener("click", function () {
      Sum(bill, button.value);
    });
  }
  customTip.addEventListener("input", function () {
    Sum(bill, custom);
  });
});
