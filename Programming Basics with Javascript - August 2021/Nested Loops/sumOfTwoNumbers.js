function sumofTwoNumbers(array) {
  let start = parseInt(array[0]);
  let end = parseInt(array[1]);
  let magicalNumber = parseInt(array[2]);

  let combinationNumber = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      let equation = x + y;

      combinationNumber++;

      if (equation === magicalNumber) {
        console.log(
          `Combination N:${combinationNumber} (${x} + ${y} = ${magicalNumber})`
        );

        return;
      }
    }
  }

  console.log(
    `${combinationNumber} combinations - neither equals ${magicalNumber}`
  );
}
