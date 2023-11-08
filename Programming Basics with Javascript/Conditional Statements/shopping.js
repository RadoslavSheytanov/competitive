function shopping(input) {
  let allBudjet = Number(input[0]);
  let numberCards = Number(input[1]);
  let numberPro = Number(input[2]);
  let numberRam = Number(input[3]);

  let allPriceCards = numberCards * 250;
  let PricePro = allPriceCards * 0.35;
  let allPricePro = PricePro * numberPro;
  let PriceRam = allPriceCards * 0.1;
  let allPriceRam = PriceRam * numberRam;
  let allSumShopping = allPriceCards + allPricePro + allPriceRam;

  if (numberCards >= numberPro) {
    allSumShopping = allSumShopping * 0.85;
  }

  let difference = Math.abs(allBudjet - allSumShopping);

  if (allBudjet >= allSumShopping) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${difference.toFixed(2)} leva more!`
    );
  }
}
