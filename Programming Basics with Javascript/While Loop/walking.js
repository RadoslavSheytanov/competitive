function stepsCounter(input) {
  let sum = 0;
  let i = 0;

  while (i < input.length) {
    if (input[i] === "Going home") {
      i++;
      sum += +input[i];
      break;
    } else {
      sum += +input[i];
    }

    i++;
  }

  if (sum > 10000) {
    console.log(`Goal reached! Good job!`);
    console.log(`${sum - 10000} steps over the goal!`);
  } else {
    console.log(`${10000 - sum} more steps to reach goal.`);
  }
}
