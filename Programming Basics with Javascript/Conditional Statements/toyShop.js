function toyShop(input) {
  let holidayPrice = Number(input[0]);
  let puzzlesCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let toyCount =
    puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
  let money =
    puzzlesCount * 2.6 +
    dollsCount * 3.0 +
    bearsCount * 4.1 +
    minionsCount * 8.2 +
    trucksCount * 2.0;

  if (toyCount >= 50) {
    money = money * 0.75;
  }
  money = money * 0.9;

  if (money >= holidayPrice) {
    let diff = money - holidayPrice;
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    let diff = holidayPrice - money;
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
