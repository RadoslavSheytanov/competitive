function Cake(array) {
  const length = parseInt(array[0]);
  const width = parseInt(array[1]);

  let totalPieces = length * width;

  let counter = 2;

  while (counter < array.length) {
    if (array[counter] === "STOP") {
      if (totalPieces !== 0) {
        console.log(`${totalPieces} pieces are left.`);
      }
      break;
    }

    totalPieces -= parseInt(array[counter]);
    counter++;

    if (totalPieces < 0) {
      let piecesNeeded = Math.abs(totalPieces);
      console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
      break;
    }
  }
}
