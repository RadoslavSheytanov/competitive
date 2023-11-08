function yardGreening(input) {
  let squareMeters = input[0];
  let priceSQmeter = 7.61 * squareMeters;
  let discount = Number(priceSQmeter * 0.18);
  let totalPrice = Number(priceSQmeter - discount);
  console.log(`The final price is: ${totalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
