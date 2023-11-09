function cinemaTickets(input) {
  let index = 0;
  let filmName = input[index];
  index++;

  let totalTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidsTickets = 0;

  while (filmName !== "Finish") {
    let seats = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let soldTickets = 0;

    while (command !== "End") {
      if (command === "student") {
        studentTickets++;
      } else if (command === "standard") {
        standardTickets++;
      } else if (command === "kid") {
        kidsTickets++;
      }

      soldTickets++;

      if (soldTickets === seats) {
        break;
      }

      command = input[index];
      index++;
    }

    let percentFull = (soldTickets / seats) * 100;
    console.log(`${filmName} - ${percentFull.toFixed(2)}% full.`);

    totalTickets += soldTickets;
    filmName = input[index];
    index++;
  }

  let studentTicketsPercent = (studentTickets / totalTickets) * 100;
  let standardTicketsPercent = (standardTickets / totalTickets) * 100;
  let kidsTicketsPercent = (kidsTickets / totalTickets) * 100;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
}
