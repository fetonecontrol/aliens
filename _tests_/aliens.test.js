import {  greyAlienGrown, greyAlienGiant } from "../src/aliens.js";

describe("Aliens", () => {

  // beforeEach(() => {
  //   stateControl();
  // });

  // afterEach(() => {
  //   stateControl();
  // });

  // test("should determine if an object is created", () => {
  //   expect(alien()).toEqual({ "height": 14 });
  // });

  // test("should determine the supreme dominance of the queen", () => {
  //   expect(greyAlienGrown.height).toEqual(7);
  // });

  // test("should grow the height of the queen by 2 times", () => {
  //   expect(greyAlienGrown.height).toEqual(14)
  // });

  test("should grow the height of the queen by 2 times", () => {
    expect(greyAlienGiant.height).toEqual(8)
  });

});

