Feature: Connect 4

	Scenario: Starting a new game
	Given an API consumer is about to start a new game
	When the API consumer invokes the API endpoint to start a new game
	Then the API consumer receives a succesfull response

	# Scenario: Dropping a disc into the first column
	# Given an API consumer has started a new game
	# When the API consumer invokes the API endpoint to drop a disc into the first column
	# Then the API consumer receives a succesfull response
