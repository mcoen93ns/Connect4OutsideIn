/* eslint-disable @typescript-eslint/no-use-before-define */
export function startNewGameOfConnect4() {
  const gameGrid = createGameGrid();
  const response = {
    gameId: "1234",
    status: "started",
    board: gameGrid,
  };
  return response;
}

export function createGameGrid() {
  return [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
}
