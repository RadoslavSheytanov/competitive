function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let floor = floors; floor >= 1; floor--) {
    let floorType = "";
    if (floor === floors) {
      floorType = "L";
    } else if (floor % 2 === 0) {
      floorType = "O";
    } else {
      floorType = "A";
    }

    let output = "";
    for (let room = 0; room < rooms; room++) {
      output += `${floorType}${floor}${room} `;
    }

    console.log(output);
  }
}
