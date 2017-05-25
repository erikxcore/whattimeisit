This is just a frontend skeleton for kickstarting projects that will be using Gulp/Babel (ES 2015) + Browserify/SASS/Jasmine.
Also included is lodash/jQuery/Bootstrap/Font Awesome ~~via Bower~~*.

Yarn has been included for the option to *not* use NPM.

There are two ways to use this skeleton:
Method 1 (Retains /build)
npm install

Method 2 (Use Gulp to generate a new /build)
npm start

For development Live Reload is implemented by the gulp task 'gulp webserver', however, if you run the 'gulp watch' or 'gulp watch:babel' tasks your source directories will be watched accordingly, as well.
If you add a new directory, a new watch task will need to be generated. CSS/SCSS/JS/IMG/HTML(pages) folders are watched currently.
Two methodolgies are supported - either using ES6+SASS or using regular CSS/JS files


If you'd like to use another grid system or CSS framework feel free to just run:
npm uninstall bootstrap-sass
npm uninstall font-awesome
npm uninstall jquery
npm uninstall lodash
Note, you will have to modify gulpfile.babel.js to remove references to these libraries because they are copied over by default (bootstrap-sass & font-awesome, etc.). 
source/sass/vendor.scss also contains references to these files due to imports as well as source/index.html

Gulp Commands:
gulp - builds everything from node_modules and source
gulp dirty_build - builds everything from node_modules and source without clearing the build folder
gulp diry_build_babel - builds everything from node_modules and source without clearing the build folder, also uses SASS and ES6+Browserify
gulp watch - watch source directories for changes, if detected deploy to build. Doesn't use ES6/Babel
gulp watch:babel - watch source diretories for changes, if detected deploy to build. Uses ES6/Babel.
gulp webserver - starts live reload monitoring & watching source directories for building (by default uses watch babel)
gulp noes6 - builds everything from node_modules and source, doesn't use ES6

Prerequisites:
Node/NPM
Git

*Bower is being depreciated.