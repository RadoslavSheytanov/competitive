function firstSteps(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hours = Number(input[3]);

  let nylonFinalSum = (nylon + 2) * 1.5;
  let paintFinalSum = paint * 1.1 * 14.5;
  let thinnerFinalSum = thinner * 5.0;
  let bagsFinalSum = 0.4;
  let allMaterialsFinalSum =
    nylonFinalSum + paintFinalSum + thinnerFinalSum + bagsFinalSum;
  let craftsmanFinalSum = allMaterialsFinalSum * (30 / 100) * hours;
  let finalSum = allMaterialsFinalSum + craftsmanFinalSum;

  console.log(finalSum);
}
