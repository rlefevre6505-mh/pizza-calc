const form = document.getElementById("form");
const resultsDiv = document.getElementById("results");
const resultsContainer = document.getElementById("results-container");
const resultsOne = document.getElementById("resultsone");
const resultsTwo = document.getElementById("resultstwo");

if (window.screen.width >= 800) {
  const resultsLabel = document.createElement("div");
  const resultsArrow = document.createElement("div");
  resultsLabel.classList.add("results-label");
  resultsArrow.classList.add("results-arrow");
  resultsLabel.textContent = "RESULTS";
  form.appendChild(resultsLabel);
  form.appendChild(resultsArrow);
} else if (window.screen.width < 800) {
} else {
}

function fadeOut(element) {
  if (screen.width < 800) {
    let op = 1;
    const timer = setInterval(function () {
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 12);
  } else {
  }
}

function fadeIn(element) {
  var op = 0.1;
  var timer = setInterval(function () {
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 8);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formDataTemplate = new FormData(form);
  console.log(formDataTemplate);
  const formValues = Object.fromEntries(formDataTemplate);
  let radiusOne = formValues.pizzasizeone / 2;
  let areaOne = Math.PI * Math.pow(radiusOne, 2);
  let totalAreaOne = areaOne * formValues.pizzaamountone;
  let costOne = formValues.dealcostone;
  let valueO = costOne / totalAreaOne;
  let valueOne = valueO.toFixed(2);
  let circumfrenceOne = 2 * radiusOne * Math.PI * formValues.pizzaamountone;
  fadeOut(form);
  let radiusTwo = formValues.pizzasizetwo / 2;
  let circumfrenceTwo = 2 * radiusTwo * Math.PI * formValues.pizzaamounttwo;
  let areaOutputOne = document.createElement("p");
  let costOutputOne = document.createElement("p");
  areaOutputOne.classList.add("output");
  costOutputOne.classList.add("output");
  areaOutputOne.textContent = `Total pizza area: ${
    Math.round(totalAreaOne * 100) / 100
  } square inches, with ${
    Math.round(circumfrenceOne * 100) / 100
  } inches of crust`;
  costOutputOne.textContent = `Cost per square inch: £${valueOne}`;
  let areaTwo = Math.PI * Math.pow(radiusTwo, 2);
  let totalAreaTwo = areaTwo * formValues.pizzaamounttwo;
  let costTwo = formValues.dealcosttwo;
  let valueT = costTwo / totalAreaTwo;
  let valueTwo = valueT.toFixed(2);
  let areaOutputTwo = document.createElement("p");
  areaOutputTwo.classList.add("output");
  let costOutputTwo = document.createElement("p");
  costOutputTwo.classList.add("output");
  costOutputTwo.classList.add("output");
  areaOutputTwo.textContent = `Total pizza area: ${
    Math.round(totalAreaTwo * 100) / 100
  } square inches, with ${
    Math.round(circumfrenceTwo * 100) / 100
  } inches of crust`;
  costOutputTwo.textContent = `Cost per square inch: £${valueTwo}`;
  const resultsOne = document.createElement("div");
  resultsOne.classList.add("resultsDiv");
  const resultsTwo = document.createElement("div");
  resultsTwo.classList.add("resultsDiv");
  const resultsSummary = document.createElement("div");
  resultsSummary.classList.add("resultsDiv");
  const headerOne = document.createElement("h2");
  const headerTwo = document.createElement("h2");
  headerOne.textContent = "Deal 1";
  headerTwo.textContent = "Deal 2";
  resultsOne.appendChild(headerOne);
  resultsTwo.appendChild(headerTwo);
  resultsContainer.appendChild(resultsOne);
  resultsContainer.appendChild(resultsTwo);
  resultsOne.appendChild(areaOutputOne);
  if (formValues.dealcostone != "") {
    resultsOne.appendChild(costOutputOne);
  }
  resultsTwo.appendChild(areaOutputTwo);
  if (formValues.dealcosttwo != "") {
    resultsTwo.appendChild(costOutputTwo);
  }
  const clearButton = document.createElement("button");
  clearButton.id = "clear-button";
  clearButton.textContent = "Reset";
  clearButton.addEventListener("click", function () {
    resultsContainer.innerHTML = "";
    window.location.reload();
  });
  resultsDiv.appendChild(clearButton);
  if (window.screen.width < 800) {
    resultsDiv.appendChild(clearButton);
  } else if (window.screen.width >= 800) {
    const submitButton = document.getElementById("submit-button");
    form.removeChild(submitButton);
    form.appendChild(clearButton);
  }
  setTimeout(() => {
    fadeIn(resultsContainer);
  }, 400);
});
