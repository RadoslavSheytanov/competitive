function examPreparation(input) {
  const poorGrades = +input.shift();
  let poorGradesCount = 0;
  let solvedTasks = 0;
  let allTasksSum = 0;
  let lastTask = "";

  while (poorGradesCount < poorGrades) {
    let taskName = input.shift();
    if (taskName === "Enough") {
      console.log(`Average score: ${(allTasksSum / solvedTasks).toFixed(2)}`);
      console.log(`Number of problems: ${solvedTasks}`);
      console.log(`Last problem: ${lastTask}`);
      break;
    }

    let grade = +input.shift();
    solvedTasks++;
    allTasksSum += grade;
    lastTask = taskName;

    if (grade <= 4) {
      poorGradesCount++;
    }
  }

  if (poorGradesCount === poorGrades) {
    console.log(`You need a break, ${poorGradesCount} poor grades.`);
  }
}
