import { createGameGrid } from "../../src/connect4";

describe("Connect 4 is played on a board. To play the game, we need to be able to create a brand spanking new game board. Namely:", () => {
  it("A 6 by 7 grid that is as empty as the beer refrigerator at Johans house after next weeks party", () => {
    const createdGameGrid = createGameGrid();

    expect(createdGameGrid).toEqual([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);
  });
});
