function firstSteps(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let liters = Number(input[2]);
  let discount = Number(input[3]);

  let pensFinalPrice = pens * 5.8;
  let markersFinalPrice = markers * 7.2;
  let litersFinalPrice = liters * 1.2;
  let allMaterialsFinalPrice =
    pensFinalPrice + markersFinalPrice + litersFinalPrice;
  let discountPrice = allMaterialsFinalPrice - allMaterialsFinalPrice * 0.25;

  console.log(discountPrice);
}
