function coinsCounter(array) {
  let count = 0;
  let realToInt = Math.round(+array[0] * 100);

  while (realToInt !== 0) {
    switch (true) {
      case realToInt >= 200:
        realToInt -= 200;
        count++;
        break;
      case realToInt >= 100:
        realToInt -= 100;
        count++;
        break;
      case realToInt >= 50:
        realToInt -= 50;
        count++;
        break;
      case realToInt >= 20:
        realToInt -= 20;
        count++;
        break;
      case realToInt >= 10:
        realToInt -= 10;
        count++;
        break;
      case realToInt >= 5:
        realToInt -= 5;
        count++;
        break;
      case realToInt >= 2:
        realToInt -= 2;
        count++;
        break;
      case realToInt >= 1:
        realToInt -= 1;
        count++;
        break;
      default:
        break;
    }
  }

  console.log(count);
}
