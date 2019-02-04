/*
	Each module has 3 parts
		1. imports (dependencies)
			* when a module needs aonther module, it can import that module as a depencies
		2. The actual code
		3. Exports
			* The interface to the module
			* Whatever export from a module will be available to whoever imports that module

	IIFE Module Pattern - Imediately Invokde Function Expression
		* wrap the function in parens
		* end with a set of parens outside the wrapping parens
			* This invokes the function
		(function () {
			console.log('Pronounced IF-EE')
		})()

		Downsides
			* We have to remember to wrap every file in an IFEE
			* Still have single property on global namespace
				* This can cause collisions
			* Order of the script tags in HTML still matter

	CommonJS Module Patter - 
		* Pros:
			* Node - this is baked into node
		* Cons:
			* Browsers don't support this out of the box
			* Syncronous
		* Module Bundler
			* Examines code base, looks at require statements and exports, and bundles all
			modules together in a single file your browser understands
		* app.js   --> |           |  
		  users.js --> |  Bundler  | -->  bundle.js
		  dom.js   --> |           |
		* Setting up a webpack
			* npm init -y
			* npm install the following
				* wepack
				* webpack-cli
			* Create a webpack.config.js file in root of app
				* var path = require('path')
				* module.exports ={}
					* entry: array -  gives webpack the entry point for our module system
						* declare the file name path
						* our case here is './dom.js'
					* output: object - where to put the single bundle it is going to create
						* path: path.resolve(__dirname), -- location, root
						* filename: 'bundel.js' -- file name, this will create on it's own
					* mode: 'development'
		* module.exports = {}
			* Now we can export what we want to expose from our module files
			* module.exports = {
				getUsers: getUsers
			}
				* getUsers: - this is what we expose (this could be named anything, 
					but it is was we are able to acceess)
				* : getUsers - this is what is being made available by what 
					was exposed (what is actually called when we request our accessible property)
		* How to tell webpack to run and compile our code, and bundle our modules together
			* package.json
				* under "scripts": {}
					* "start": "webpack"

	ES Modules - now baked into the JavaScript language
		* Supports Async
		* "import" and "export"
		* we can declare export on specific functions
			* named: imports We can then import just one function: import { myFunc } from './filename'
			* We can import all functions using '*': import * as utils from './utils'
			* default exports: import leftpad from './leftpad'
			* we no longer need: webpack.config.js, bundle.js, package.json
		* In index.html, we can now add one script to the body
			* <script type='module' src='dom.js'></script>

*/
