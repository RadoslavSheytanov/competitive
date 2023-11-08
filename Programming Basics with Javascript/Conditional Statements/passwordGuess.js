function passwordGuess(input) {
  let secretPass = "s3cr3t!P@ssw0rd";
  let wrongPass = input[0];

  if (secretPass === wrongPass) {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
