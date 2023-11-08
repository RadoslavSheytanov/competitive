function firstSteps(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegetarianMenu = Number(input[2]);

  let chickenMenuPrice = chickenMenu * 10.35;
  let fishMenuPrice = fishMenu * 12.4;
  let vegetarianMenuPrice = vegetarianMenu * 8.15;
  let allMenusFinalPrice =
    chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

  let dessertPrice = allMenusFinalPrice * 0.2;

  let deliveryPrice = 2.5;
  let orderFinalSum = allMenusFinalPrice + dessertPrice + deliveryPrice;

  console.log(orderFinalSum);
}
