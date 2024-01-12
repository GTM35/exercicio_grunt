const btnSortear = document.getElementById("sortear");
const btnLimpar = document.getElementById("limpar");
const qtdNumbers = document.getElementById("qtdNumber");
const range1 = document.getElementById("rangenumber1");
const range2 = document.getElementById("rangenumber2");

btnLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  Limpar();
});

btnSortear.addEventListener("click", (e) => {
  e.preventDefault();

  Sortear(
    parseInt(qtdNumbers.value),
    parseInt(range1.value),
    parseInt(range2.value)
  );
});

function Limpar() {
  const results = document.querySelector(".showResults");

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  range1.value = "";
  range2.value = "";
  qtdNumbers.value = "";
}

function Sortear(qtdNumbers, range1, range2) {
  let maxNumber = "";
  let minNumber = "";
  let sortedNumber = "";
  let numbers = [];

  if (range1 < range2) {
    maxNumber = range2;
    minNumber = range1;
  } else {
    maxNumber = range1;
    minNumber = range2;
  }

  for (let i = 0; i < qtdNumbers; i++) {
    sortedNumber = Math.round(Math.random() * maxNumber);

    if (sortedNumber <= maxNumber && sortedNumber >= minNumber) {
      numbers.push(sortedNumber);
    }
  }

  while (qtdNumbers > numbers.length) {
    for (let i = 0; i < qtdNumbers - numbers.length; i++) {
      sortedNumber = Math.round(Math.random() * maxNumber);

      if (sortedNumber <= maxNumber && sortedNumber >= minNumber) {
        numbers.push(sortedNumber);
      }
    }
  }

  numbers.sort();

  showInfo(numbers);
}

function showInfo(arr) {
  const elResult = document.querySelector(".showResults");
  let element = "";

  arr.forEach((el) => {
    element += `<p class="results">${el}</p>`;
  });

  elResult.innerHTML = element;
}
