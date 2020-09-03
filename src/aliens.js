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

export const multiplyState = (prop) => {
  return (value) => {
      return (state) => {
        if (state[prop] < 100000) {
            return {
          ...state,
          [prop]: (state[prop] || 0) + 100, 
            }
          }
      };
      
  };
};

export const human = storeState();
export const greyAlien = storeState();
export const greenAlien= storeState();

export const alienHeight = changeState("height")(7);
export const alientGrowth = multiplyState("height")(2);


export const greyAlienGrown = greyAlien(alienHeight);
export const greyAlienGiant = greyAlien(alientGrowth);




// export const explodesFromChest = human(alienQueen);


// // durian = food, and the properites are "stinky"

// export const notStinky = changeState("stinky")("nope");


// const objArr = {stinky: "yes", sweet: "yes", size: "large"}
// export const notStinkyDurian = stinkyDurian(notStinky);
