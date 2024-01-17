Feature: Connect 4

	Scenario: Starting a new game
	Given an API consumer is about to start a new game
	When the API consumer invokes the API endpoint to start a new game
	Then the API consumer receives a http status code 201
	And the API consumer receives a response body containing a game id
	And the API consumer receives a response body containing a game status
	And the API consumer receives a response body containing an empty 6x7 game board
