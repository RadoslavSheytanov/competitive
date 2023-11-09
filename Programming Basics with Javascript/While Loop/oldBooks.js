function searchBook(library) {
  const wantedBook = library[0];
  let counter = 0;
  let foundBook = false;

  while (counter < library.length - 1) {
    counter++;

    if (library[counter] === wantedBook) {
      foundBook = true;
      break;
    } else if (library[counter] === "No More Books") {
      counter -= 1;
      break;
    }
  }

  if (foundBook) {
    console.log(`You checked ${counter - 1} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
  }
}
