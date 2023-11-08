function newHouse(input) {
  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);

  let flowerTotalPrice = 0;

  switch (flowerType) {
    case "Roses":
      if (flowerCount > 80) {
        flowerTotalPrice = 5 * flowerCount * 0.9;
      } else {
        flowerTotalPrice = 5 * flowerCount;
      }
      break;
    case "Dahlias":
      if (flowerCount > 90) {
        flowerTotalPrice = 3.8 * flowerCount * 0.85;
      } else {
        flowerTotalPrice = 3.8 * flowerCount;
      }
      break;
    case "Tulips":
      if (flowerCount > 80) {
        flowerTotalPrice = 2.8 * flowerCount * 0.85;
      } else {
        flowerTotalPrice = 2.8 * flowerCount;
      }
      break;
    case "Narcissus":
      if (flowerCount < 120) {
        flowerTotalPrice = 3 * flowerCount * 1.15;
      } else {
        flowerTotalPrice = 3 * flowerCount;
      }
      break;
    case "Gladiolus":
      if (flowerCount < 80) {
        flowerTotalPrice = 2.5 * flowerCount * 1.2;
      } else {
        flowerTotalPrice = 2.5 * flowerCount;
      }
      break;
  }

  diff = Math.abs(budget - flowerTotalPrice);

  if (budget >= flowerTotalPrice) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
