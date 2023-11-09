function specialNumbers(input) {
  let n = Number(input[0]);
  let output = "";

  for (let num = 1111; num <= 9999; num++) {
    let isSpecial = true;

    for (let digit = 0; digit <= 3; digit++) {
      let currentDigit = Number(num.toString()[digit]);

      if (n % currentDigit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      output += `${num} `;
    }
  }

  console.log(output);
}
