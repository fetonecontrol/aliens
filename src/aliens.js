export const storeState = () => {  // food //
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }; //creates things that will accept different abilities (made below)
};

// start of Change State

export const changeState = (prop) => { //adds abilities to the things (made with code above) // property //
  // soil is property
  return (value) => {
    // 5 is passed in here
    return (state) => ({
      //
      ...state, // spread operator, creating a new version, state -
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const multiplyState = (prop) => { //adds abilities to the things (made with code above) // property //
  // soil is property

  return (value) => {
    // 5 is passed in here
      return (state) => ({
        //
        ...state, // spread operator, creating a new version, state -
        [prop]: (state[prop] || 0) * value,
      });
  };
};

export const multiplyForever = (thing) => {
  if (thing.height >= 100) {
    return thing;
  } else {
    return multiplyForever(thing.height * 2);
  }
}

// 

// export const multiplyForever = (thing) => {
//   // This is the termination condition.
//   if (isNaN(thing)) {
//     return;
//   }
//   if (thing >= 100) {  // base
//     return thing;
//   } else {
//     return multiplyForever(thing * 2); // recursion
//   }
// }

export const durian = storeState();
export const chili = storeState();
export const human = storeState();

export const alienHeight = changeState("height")(7);
export const alienGrowth = multiplyState("height")(2);

export const alien = storeState();
export const alien2 = storeState();

export const greenAlien = alien2(alienHeight);

export const alienQueen = alien(alienHeight);
export const giantQueen = alien(alienGrowth);



// export const explodesFromChest = human(alienQueen);


// // durian = food, and the properites are "stinky"

// export const notStinky = changeState("stinky")("nope");


// const objArr = {stinky: "yes", sweet: "yes", size: "large"}
// export const notStinkyDurian = stinkyDurian(notStinky);
