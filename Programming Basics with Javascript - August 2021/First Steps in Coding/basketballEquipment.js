function basketEquip(input) {
  let priceYear = Number(input[0]);
  let priceBasketShoes = priceYear - priceYear * (40 / 100);
  let costBasketclothes = priceBasketShoes - priceBasketShoes * (20 / 100);
  let priceBasketball = costBasketclothes / 4;
  let priceBasketAccessories = priceBasketball / 5;
  let totalPriceEquipment =
    priceYear +
    priceBasketShoes +
    costBasketclothes +
    priceBasketball +
    priceBasketAccessories;

  console.log(totalPriceEquipment);
}
