function goodzillaVsKong(input) {
  let budget = Number(input[0]);
  let statists = Number(input[1]);
  let price = Number(input[2]);

  let decorePrice = budget * 0.1;
  let clothPrice = statists * price;

  if (statists > 150) {
    clothPrice = clothPrice - clothPrice * 0.1;
  }

  let finalPrice = decorePrice + clothPrice;
  let diff = Math.abs(budget - finalPrice).toFixed(2);

  if (finalPrice <= budget) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff} leva left.`);
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff} leva more.`);
  }
}
