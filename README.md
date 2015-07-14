# march_2015

Initial Commit on 7th July 2015

# requirements
- This is a README Drive Development
- Description: a stdin, stdout tote bet caculator using node.js (done)
- Easy to compile and run (done)
- Unit test 100% coverage using mocha framework
- Write a package.json within npm's specifics

# Instructions:

- Make sure node is installed on you machine. For more info please refer to: https://nodejs.org/
- Make sure mocha is installed on your machine. If not, intall the mocha package in your terminal (run as root/admin user):

		$npm install -g mocha

- Make sure that node and mocha on your machine:
		
		$node --version
		v0.12.6
		$mocha --version
		2.2.5

- You can run the program in your terminal

		$node main.js < example.data

- You can run the test using mocha in your terminal 

		$mocha

- Another way to run the unit test
	
	1) install the test command with npm:

		$npm install test

	2) run the unit test with npm:

		$npm test


# Version 0.0.1 on 10th July 2015

To-dos:
- Use Mocha framework to cover unit tests in pool.js and place_pool.js (1 day)
- Put some callback functions in my code to make it more node.js-style (1 day)
- A better README file (1h)
- (optional) A Makefile file (2h)
- (optional) Re-organize the file structure (1h)
- (optional) Making the program a executable? (#! /usr/bin/node) (1h)
- (optional) npm publish? (0.25 day)


# Version 0.0.2 on 13th July 2015
- All functions in pool.js testable
- place_pool.js is removed
- Re-organised the file structure
- should is added to the folder
- Validated package.json

To-dos:
- Use Mocha framework and should package to cover unit tests in pool.js (0.75 day)

# version 0.0.3 on 14th July 2015
- Unit tests cover all functions in utils.js and pool.js
- package.json is tested with "npm install test"
- node_modules is removed as no longer needed

