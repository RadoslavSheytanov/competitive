function vacation(input) {
  let necessaryMoney = +input[0];
  let availableMoney = +input[1];

  let counter = 2;
  let consecutiveSpendingDays = 0;
  let totalDays = 0;

  while (availableMoney < necessaryMoney) {
    let action = input[counter++];
    let amount = +input[counter++];

    if (action === "spend") {
      availableMoney -= amount;
      consecutiveSpendingDays++;
    } else if (action === "save") {
      availableMoney += amount;
      consecutiveSpendingDays = 0;
    }

    if (availableMoney < 0) {
      availableMoney = 0;
    }

    totalDays++;

    if (consecutiveSpendingDays === 5) {
      break;
    }
  }

  if (consecutiveSpendingDays === 5) {
    console.log("You can't save the money.");
    console.log(totalDays);
  } else {
    console.log(`You saved the money for ${totalDays} days.`);
  }
}
