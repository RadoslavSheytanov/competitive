function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]);

  let volumeAquarium = length * width * height;
  let volumeLiters = volumeAquarium / 1000;
  let occupiedSpace = percentage / 100;
  let litersNeeded = volumeLiters * (1 - occupiedSpace);

  console.log(litersNeeded);
}
