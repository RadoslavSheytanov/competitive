function trainTheTrainers(input) {
  let juryCount = Number(input[0]);
  let index = 1;
  let presentation = input[index];
  let totalGradeSum = 0;
  let presentationCount = 0;

  while (presentation !== "Finish") {
    let gradeSum = 0;

    for (let i = 1; i <= juryCount; i++) {
      let grade = Number(input[index + i]);
      gradeSum += grade;
    }

    let averageGrade = gradeSum / juryCount;
    console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
    totalGradeSum += averageGrade;
    presentationCount++;

    index += juryCount + 1;
    presentation = input[index];
  }

  let finalAssessment = totalGradeSum / presentationCount;
  console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}
