this is an AngularJS aplication that use the Vimeo API to get the basic categories and his videos

It use gulp with css injection, wiredep, js lintern, and browser sync

Installation:
node version 4.4.1

download the repository and run:

npm install
bower install

gulp:
-gulp serve: to run the application
-gulp injectCssFiles: to inject the css files into the index.html
-gulp injectJsFiles: to inject the js files into the index.html
-gulp lint: to check for js sintax errors
-gulp styles: to process the sass files
-gulp bower: the wiredep task to inject the bower components

