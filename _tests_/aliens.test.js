import { storeState } from "../src/js/aliens.js";
import { changeState } from "../src/js/aliens.js";

import { alienQueen } from "../src/js/aliens.jss";

describe("Aliens", () => {

  // beforeEach(() => {
  //   stateControl();
  // });

  // afterEach(() => {
  //   stateControl();
  // });

  test("should determine if an object is created", () => {
    expect(alienQueen()).toEqual({});
  });

  test("should determine if durian now has a property of stinky", () => {
    expect(alienQueen.height).toEqual("7 feet");
  });
});
