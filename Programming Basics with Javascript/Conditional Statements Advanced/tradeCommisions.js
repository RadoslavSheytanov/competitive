function tradeCommissions(input) {
  let town = input[0];
  let capacitySales = Number(input[1]);

  switch (town) {
    case "Sofia":
      if (0 <= capacitySales && capacitySales <= 500) {
        console.log((capacitySales * 0.05).toFixed(2));
      } else if (500 < capacitySales && capacitySales <= 1000) {
        console.log((capacitySales * 0.07).toFixed(2));
      } else if (1000 < capacitySales && capacitySales <= 10000) {
        console.log((capacitySales * 0.08).toFixed(2));
      } else if (capacitySales > 10000) {
        console.log((capacitySales * 0.12).toFixed(2));
      } else if (-Math.abs(capacitySales)) {
        console.log("error");
      }
      break;
    case "Varna":
      if (0 <= capacitySales && capacitySales <= 500) {
        console.log((capacitySales * 0.045).toFixed(2));
      } else if (500 < capacitySales && capacitySales <= 1000) {
        console.log((capacitySales * 0.075).toFixed(2));
      } else if (1000 < capacitySales && capacitySales <= 10000) {
        console.log((capacitySales * 0.1).toFixed(2));
      } else if (capacitySales > 1000) {
        console.log((capacitySales * 0.13).toFixed(2));
      } else if (-Math.abs(capacitySales)) {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (0 <= capacitySales && capacitySales <= 500) {
        console.log((capacitySales * 0.055).toFixed(2));
      } else if (500 < capacitySales && capacitySales <= 1000) {
        console.log((capacitySales * 0.08).toFixed(2));
      } else if (1000 < capacitySales && capacitySales <= 10000) {
        console.log((capacitySales * 0.12).toFixed(2));
      } else if (capacitySales > 1000) {
        console.log((capacitySales * 0.145).toFixed(2));
      } else if (-Math.abs(capacitySales)) {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
}
