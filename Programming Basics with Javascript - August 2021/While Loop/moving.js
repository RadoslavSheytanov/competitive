function moving(array) {
  const width = parseInt(array[0]);
  const length = parseInt(array[1]);
  const height = parseInt(array[2]);
  let availableSpace = width * length * height;
  let presentedSpace = 0;

  let counter = 3;

  while (counter < array.length) {
    if (array[counter] === "Done") {
      if (availableSpace - presentedSpace !== 0) {
        console.log(
          `${Math.abs(availableSpace - presentedSpace)} Cubic meters left.`
        );
      }
      break;
    } else {
      const element = parseInt(array[counter]);

      if (!isNaN(element)) {
        presentedSpace += element;
        if (availableSpace - presentedSpace < 0) {
          console.log(
            `No more free space! You need ${Math.abs(
              availableSpace - presentedSpace
            )} Cubic meters more.`
          );
          break;
        }
      }
    }

    counter++;
  }
}
