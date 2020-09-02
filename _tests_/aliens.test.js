import { alienQueen, alien, giantQueen } from "../src/aliens.js";

describe("Aliens", () => {

  // beforeEach(() => {
  //   stateControl();
  // });

  // afterEach(() => {
  //   stateControl();
  // });

  test("should determine if an object is created", () => {
    expect(alien()).toEqual({ "height": 7 });
  });

  test("should determine the supreme dominance of the queen", () => {
    expect(alienQueen.height).toEqual(7);
  });

  test("should grow the height of the queen by 2 times", () => {
    expect(giantQueen.height).toEqual(14)
  });
});

