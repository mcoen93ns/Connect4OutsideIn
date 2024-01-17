/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature } from "jest-cucumber";
import { templateFunction } from "../../src/template";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Starting a new game", ({ given, when, then, and }) => {
    given("an API consumer is about to start a new game", () => {
      // nothing?
    });

    when(
      "the API consumer invokes the API endpoint to start a new game",
      () => {

      }
    );

    then("the API consumer receives a http status code 201", () => {

    });

    and(
      "the API consumer receives a response body containing a game id",
      () => {}
    );

    and(
      "the API consumer receives a response body containing a game status",
      () => {}
    );

    and(
      /^the API consumer receives a response body containing an empty (\d+)x(\d+) game board$/,
      (arg0, arg1) => {}
    );
  });
});
