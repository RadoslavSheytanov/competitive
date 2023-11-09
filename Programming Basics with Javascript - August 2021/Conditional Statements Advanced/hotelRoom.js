function hotelRoom(input) {
  let month = input[0];
  let numberDays = Number(input[1]);

  let studioPrice = 0;
  let aptPrice = 0;

  if (month === "May" || month === "October") {
    studioPrice = numberDays * 50;
    aptPrice = numberDays * 65;
    if (numberDays > 7 && numberDays <= 14) {
      studioPrice = studioPrice * 0.95;
    } else if (numberDays > 14) {
      studioPrice = studioPrice * 0.7;
      aptPrice = aptPrice * 0.9;
    }
  }
  if (month === "June" || month === "September") {
    studioPrice = numberDays * 75.2;
    aptPrice = numberDays * 68.7;
    if (numberDays > 14) {
      studioPrice = studioPrice * 0.8;
      aptPrice = aptPrice * 0.9;
    }
  }
  if (month === "July" || month === "August") {
    studioPrice = numberDays * 76;
    aptPrice = numberDays * 77;
    if (numberDays > 14) {
      aptPrice = aptPrice * 0.9;
    }
  }
  console.log(`Apartment: ${aptPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
