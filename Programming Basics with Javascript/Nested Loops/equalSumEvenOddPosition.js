function equalSums(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);

  let output = "";

  for (let i = num1; i <= num2; i++) {
    let currentNum = i.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let j = 0; j < currentNum.length; j++) {
      let digit = Number(currentNum[j]);

      if (j % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }

    if (evenSum === oddSum) {
      output += `${currentNum} `;
    }
  }

  console.log(output.trim());
}
