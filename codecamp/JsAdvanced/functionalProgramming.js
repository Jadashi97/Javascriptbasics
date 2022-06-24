// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

//Function that returns a string representing a cup of green tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// const tea4TeamFCC = getTea(40);

// console.log(tea4TeamFCC); //this gets the teacups


// using same above example to Understand Functional Programming Terminology

//we pass the prepareGreenTea and prepareBlackTea as call back functions for the getTea functions
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); 
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);