const form = document.getElementById("form");
const resultsDiv = document.getElementById("results");
const clearButton = document.getElementById("clear-button");

form.addEventListener("submit", calculate);

function calculate(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(form);
  const formValues = Object.fromEntries(formDataTemplate);
  resultsDiv.innerHTML = "";
  let radiusOne = formValues.pizzasizeone / 2;
  let areaOne = Math.PI * Math.pow(radiusOne, 2);
  let totalAreaOne = areaOne * formValues.pizzaamountone;
  let costOne = formValues.dealcostone;
  let valueOne = costOne / totalAreaOne;
  let areaOutputOne = document.createElement("p");
  let costOutputOne = document.createElement("p");
  areaOutputOne.classList.add("output");
  costOutputOne.classList.add("output");
  areaOutputOne.textContent = `Deal 1 total pizza area: ${
    Math.round(totalAreaOne * 100) / 100
  } sqIn`;
  costOutputOne.textContent = `Deal 1 cost per area: £${
    Math.round(valueOne * 100) / 100
  } per sqIn`;
  let radiusTwo = formValues.pizzasizetwo / 2;
  let areaTwo = Math.PI * Math.pow(radiusTwo, 2);
  let totalAreaTwo = areaTwo * formValues.pizzaamounttwo;
  let costTwo = formValues.dealcosttwo;
  let valueTwo = costTwo / totalAreaTwo;
  let areaOutputTwo = document.createElement("p");
  areaOutputTwo.classList.add("output");
  let costOutputTwo = document.createElement("p");
  costOutputTwo.classList.add("output");
  areaOutputTwo.textContent = `Deal 2 total pizza area: ${
    Math.round(totalAreaTwo * 100) / 100
  }sqIn`;
  costOutputTwo.textContent = `Deal 2 cost per area: £${
    Math.round(valueTwo * 100) / 100
  } per sqIn`;
  resultsDiv.appendChild(areaOutputOne);
  if (formValues.dealcostone != "") {
    resultsDiv.appendChild(costOutputOne);
  }
  resultsDiv.appendChild(areaOutputTwo);
  if (formValues.dealcosttwo != "") {
    resultsDiv.appendChild(costOutputTwo);
  }
}

clearButton.addEventListener("click", function () {
  resultsDiv.innerHTML = "";
});
