const createCandyButton = document.querySelector(".create-candies");
const buyLollipopButton = document.querySelector(".buy-lollypops");
const lollipopCollection = document.querySelectorAll("dd")[1];
const candies = document.querySelectorAll("dd")[0];
const candyProductionRate = document.querySelectorAll("dd")[2];
const candyMachine = document.querySelector(".candy-machine");

let candyCounter = 0;
let lollipopCounter = 3;
let productionRate = 0;

createCandyButton.addEventListener("click", createCandyManually);

buyLollipopButton.addEventListener("click", () => {
  if (candyCounter >= 100) {
    lollipopCollection.innerHTML += "🍭";
    candyCounter -= 100;
    candies.innerHTML = candyCounter;
    lollipopCounter++;
    console.log("lollipops:" + lollipopCounter);
  }
  if (lollipopCounter >= 10) {
    createCandyAutomatically();
    lollipopCounter = 0;
  }
});

function createCandyAutomatically() {
  let myinterval = setInterval(() => {
    if (candyCounter >= 10000) {
      stopInterval(myinterval);
    } else {
      createCandyManually();
    }
  }, 1000);
  productionRate++;
  candyProductionRate.innerHTML = productionRate;
}

function createCandyManually() {
  if (candyCounter < 10000) {
    candyCounter++;
    candies.innerHTML = candyCounter;
  }
}

function stopInterval(interval) {
  clearInterval(interval);
}

candyMachine.addEventListener("click", () => {
  if (productionRate !== 0) {
    let currentProductionRateMultipliedbyTen = productionRate * 10;
    for (let i = 0; i < currentProductionRateMultipliedbyTen; i++) {
      createCandyAutomatically();
    }
  }
});
