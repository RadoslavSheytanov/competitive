function calculateAverageGrade(input) {
  let studentName = input.shift();
  let currentGrade = parseFloat(input.shift());
  let totalGrades = currentGrade;
  let year = 1;

  while (year < 12) {
    if (currentGrade < 4.0) {
      console.log(`${studentName} has been excluded at ${year} grade`);
      return;
    }

    year++;
    currentGrade = parseFloat(input.shift());
    totalGrades += currentGrade;
  }

  let averageGrade = totalGrades / 12;
  console.log(
    `${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`
  );
}
