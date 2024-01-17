import { startNewGameOfConnect4 } from "../../src/connect4";

describe("The first step in Connect 4 is being able to start a new game, so we can start playing", () => {
  describe(`A new game contains the following information:
    - gameId
    - status (e.g. started)
    - a board`, () => {
    it("So when this function is invoked, a new game will be created that contains all this information", () => {
      const outputStartNewGameOfConnect4 = startNewGameOfConnect4();

      expect(outputStartNewGameOfConnect4).toEqual({
        gameId: "1234",
        status: "started",
        board: [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
        ],
      });
    });
  });
});
