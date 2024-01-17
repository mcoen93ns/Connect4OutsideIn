/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature } from "jest-cucumber";
import request from "supertest";
import { app } from "../../src/api";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Starting a new game", ({ given, when, then }) => {
    let response: request.Response;

    given("an API consumer is about to start a new game", () => {
      // No setup needed
    });

    when(
      "the API consumer invokes the API endpoint to start a new game",
      async () => {
        response = await request(app).post("/startNewGame");
      }
    );

    then("the API consumer receives a succesfull response", () => {
      expect(response.status).toBe(200);
    });
  });
});

//   test("Dropping a disc into the first column", ({ given, when, then }) => {
//     let newGameOfConnect4: Connect4Game;
//     given("an API consumer has started a new game", () => {
//       newGameOfConnect4 = startNewGameOfConnect4();
//     });

//     when(
//       "the API consumer invokes the API endpoint to drop a disc into the first column",
//       () => {
//         dropDiscIntoColumn(newGameOfConnect4, 0);
//       }
//     );

//     then("the API consumer receives a succesfull response", () => {
//       expect(response.status).toBe(200);
//     });
//   });
// });
