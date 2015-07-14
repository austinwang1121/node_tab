# node_tab
author: Austin Wang
email: wanghan33@gmail.com

Initial Commit on 7th July 2015

# Requirements
- This is a README Drive Development
- Description: a stdin, stdout tote bet caculator using node.js (done)
- Easy to compile and run (done)
- Unit test 100% coverage using mocha framework
- Write a package.json within npm's specifics

# Instructions

- You need node installed on you machine. For more info please refer to: https://nodejs.org/
- You need mocha (node test framework) installed on your machine. If not, you can intall the mocha package in your terminal (run as root/admin user):

		$npm install -g mocha

- Verify that node and mocha on your machine in your terminal:
		
		$node --version
		v0.12.6
		$mocha --version
		2.2.5

- Clone the git repo into you machine:

		$git clone git@github.com:akirosai/node_tab.git


- You can run the program in your terminal:

		$cd node_tab
		$node main.js < data/example.data

- Expected output of main.js in your terminal:

		Win:2:$2.61
		Place:2:$1.06
		Place:3:$1.27
		Place:1:$2.13
		Exacta:2,3:$2.43


- You can run the test using mocha in your terminal 

		$mocha

- Another way to run the unit test
	
	1) install the test command with npm:

		$npm install test

		npm WARN package.json node_tab@0.0.3 No repository field.
		test@0.6.0 node_modules/test
		└── ansi-font@0.0.2

	2) run the unit test with npm:

		$npm test

- Expected output of unit test on your terminal:

		  Utils
		    #isValidBet()
		      ✓ it should be true
		Stake for a bet should be whole dollar, where stake = -30
		Invalid Input as a Bet, possibly because of an unknown bet type, where type is given: D
		Stake for a bet should be whole dollar, where stake = 30.0
		Invalid Input as a Bet, possibly because of an unknown bet type, where type is given: EW
		      ✓ it should be false
		    #isValidResult()
		      ✓ isValidResult method test
		    #isPositiveInt()
		      ✓ isPositiveInt method test

		  Pool
		    #win_pool.updatePool()
		Stake for a bet should be whole dollar, where stake = -3
		      ✓ win_pool objects can update pool with a valid bet and return BAD code as invalid input
		    #exacta_pool.updatePool()
		      ✓ exacta_pool objects can update pool with a valid bet and return BAD code as invalid input
		    #place_pool.updatePool()
		      ✓ place_pool objects can update pool with a valid bet and return BAD code as invalid input
		    #calculateDividend()
		      ✓ pool objects can calculateDividend with a given results


		  8 passing (16ms)


# Commit logs
## Version 0.0.1 on 10th July 2015

To-dos:
- Use Mocha framework to cover unit tests in pool.js and place_pool.js (1 day)
- Put some callback functions in my code to make it more node.js-style (1 day)
- A better README file (1h)
- (optional) A Makefile file (2h)
- (optional) Re-organize the file structure (1h)
- (optional) Making the program a executable? (#! /usr/bin/node) (1h)
- (optional) npm publish? (0.25 day)


## Version 0.0.2 on 13th July 2015
- All functions in pool.js testable
- place_pool.js is removed
- Re-organised the file structure
- should is added to the folder
- Validated package.json

To-dos:
- Use Mocha framework and should package to cover unit tests in pool.js (0.75 day)

## version 0.0.3 on 14th July 2015
- Unit tests cover all functions in utils.js and pool.js
- ./package.json is tested with "npm install test"
- ./node_modules is removed as no longer needed
- Terminal print of stdin is turned off

# Future Improvements

- A Makefile file is a good idea
- Instructions to make main.js a executable

		$ chmod -x ./main.js
		$ sudo ln -s /Users/austinwang/node_tab/main.js /usr/local/bin/tote_bet_caculator
		$ tote_bet_caculator < data/example.data 
		Win:2:$2.61
		Place:2:$1.06
		Place:3:$1.27
		Place:1:$2.13
		Exacta:2,3:$2.43

- npm publish this package? Grap a good package name first
- Put some callback functions in my code to make it more node.js-style
