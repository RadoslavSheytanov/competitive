function travel(destinations) {
  let index = 0;

  while (destinations[index] !== "End") {
    let destination = destinations[index++];
    let budget = Number(destinations[index++]);
    let savings = 0;

    while (savings < budget) {
      savings += Number(destinations[index++]);
    }

    console.log(`Going to ${destination}!`);
  }
}
