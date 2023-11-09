function cinemaTicket(input) {
  let dayOfTheWeek = input[0];

  price = 0;
  switch (dayOfTheWeek) {
    case "Monday":
    case "Tuesday":
      price = 12;

      break;
    case "Wednesday":
    case "Thursday":
      price = 14;

      break;
    case "Friday":
      price = 12;

      break;
    case "Saturday":
    case "Sunday":
      price = 16;

    default:
      break;
  }
  console.log(price);
}
