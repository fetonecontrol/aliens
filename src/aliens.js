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

export const durian = storeState();
export const chili = storeState();
export const human = storeState();

export const alienHeight = changeState("height")("7 feet");
export const alienBb = storeState();

export const alienQueen = alienBb(alienHeight);

// export const explodesFromChest = human(alienQueen);


// // durian = food, and the properites are "stinky"

// export const notStinky = changeState("stinky")("nope");


// const objArr = {stinky: "yes", sweet: "yes", size: "large"}
// export const notStinkyDurian = stinkyDurian(notStinky);
