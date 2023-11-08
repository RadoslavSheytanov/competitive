function trekkingMania(input) {
  let groups = 0;
  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let index = 1; index < input.length; index++) {
    let groupMembers = Number(input[index]);
    groups += groupMembers;

    if (groupMembers <= 5) {
      musala += groupMembers;
    } else if (groupMembers <= 12) {
      monblan += groupMembers;
    } else if (groupMembers <= 25) {
      kilimanjaro += groupMembers;
    } else if (groupMembers <= 40) {
      k2 += groupMembers;
    } else {
      everest += groupMembers;
    }
  }
  console.log(`${((musala / groups) * 100).toFixed(2)}%`);
  console.log(`${((monblan / groups) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaro / groups) * 100).toFixed(2)}%`);
  console.log(`${((k2 / groups) * 100).toFixed(2)}%`);
  console.log(`${((everest / groups) * 100).toFixed(2)}%`);
}
