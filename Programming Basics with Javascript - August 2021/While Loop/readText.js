function readText(input) {
  let index = 0;

  while (true) {
    if (input[index] === "Stop") {
      break;
    }

    console.log(input[index]);
    index++;
  }
}
