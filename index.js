// Instructions
// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result
function randomNumberGenrator() {
    let randomNumberSelected = [];
    console.log("Random Number: ", randomNumberSelected);
    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 101);
      console.log("Random Numbers: ", randomNumber);
      randomNumberSelected.push(randomNumber)
    }
    return randomNumberSelected;
  }
  const checkRandomNumber = randomNumberGenrator();
  console.log("Check Random Number: ", checkRandomNumber);
  alert(checkRandomNumber)