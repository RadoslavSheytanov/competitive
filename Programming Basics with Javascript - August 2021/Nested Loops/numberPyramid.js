function numberPyramid(input) {
  let n = Number(input[0]);
  let currentNumber = 1;

  for (let row = 1; row <= n; row++) {
    let rowOutput = "";

    for (let col = 1; col <= row; col++) {
      if (currentNumber > n) {
        break;
      }
      rowOutput += `${currentNumber} `;
      currentNumber++;
    }

    console.log(rowOutput);
  }
}
