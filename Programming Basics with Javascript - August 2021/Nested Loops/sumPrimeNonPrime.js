function sumPrimesAndNonPrimes(input) {
  let index = 0;
  let primeSum = 0;
  let nonPrimeSum = 0;

  while (input[index] !== "stop") {
    let number = Number(input[index]);

    if (number < 0) {
      console.log("Number is negative.");
      index++;
      continue;
    }

    let isPrime = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeSum += number;
    } else {
      nonPrimeSum += number;
    }

    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
