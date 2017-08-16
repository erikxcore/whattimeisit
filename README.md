

<h2>What time is it?</h2>

This is a work in progress using React. The goal is to present users with a clickable world map that can display current time/timezone information.
Eventually, it would be nice to be able to also 'move' the time to any value to get the time in a different zone - so possibly setting a 'global time' value but default to current time.
Another nice to have would be the ability to select point A and point B and compare a time value in each area (e.g. I want to know what 8PM in NY is compraed to Japan time.)

Special thanks to Wikipedia for https://commons.wikimedia.org/wiki/File:World_-_time_zones_map_(2014).svg .
Also special thanks to Heather Booker (https://github.com/heatherbooker/react-world-map) for discovering SVG related caveats with React.

<hr/>

<h2>Another skeleton in the closet</h2>

This is just a frontend skeleton for kickstarting projects that will be using Gulp/Babel (ES 2015) + Browserify/SASS/Jasmine/PUG.<br />
Also included is lodash/jQuery/Bootstrap/Font Awesome ~~via Bower~~*.<br />
<br/>
React/React-Dom has been included as well as a demo component if needed. Routing has not been included. <br/>
A dummy PHP web service has also been included in the cases where Node or some other serverside solution isn't available.<br/>
Yarn has been included for the option to *not* use NPM.<br />

There are two ways to use this skeleton:<br />
<h4>Method 1 (Retains /build)</h4>

```
npm install
```

<h4>Method 2 (Use Gulp to generate a new /build)</h4>

```
npm start
```

For development Live Reload is implemented by the gulp task 'gulp webserver', however, if you run the 'gulp watch' or 'gulp watch:babel' tasks your source directories will be watched accordingly, as well.<br />
If you add a new directory, a new watch task will need to be generated. CSS/SCSS/JS/IMG/HTML(pages) folders are watched currently.<br />

Two 'methodologies' are supported - either using ES6+SASS+PUG or using regular CSS/JS files. SASS is incorporated with the regular tasks if desired, however, browserify is only implemented for the ES6 code. Using PUG is optional.
<br/>
<br/>
If you'd like to use another grid system or CSS framework feel free to just run:
```
npm uninstall bootstrap-sass
npm uninstall font-awesome
npm uninstall jquery
npm uninstall lodash
```
Note, you will have to modify gulpfile.babel.js to remove references to these libraries because they are copied over by default (bootstrap-sass & font-awesome, etc.). <br/>
source/sass/vendor.scss also contains references to these files due to imports as well as source/index.html or source/pug/_includes/head.pug and source/pug/_includes/foot.pug.<br/>

Gulp Commands:
```
gulp - builds everything from node_modules and source
gulp dirty_build - builds everything from node_modules and source without clearing the build folder
gulp diry_build_babel - builds everything from node_modules and source without clearing the build folder, also uses SASS and ES6+Browserify
gulp watch - watch source directories for changes, if detected deploy to build. Doesn't use ES6/Babel
gulp watch:babel - watch source diretories for changes, if detected deploy to build. Uses ES6/Babel.
gulp webserver - starts live reload monitoring & watching source directories for building (by default uses watch babel)
gulp noes6 - builds everything from node_modules and source, doesn't use ES6
```

Prerequisites:<br/>
[Node/NPM](https://nodejs.org/en/)<br />
[Git](https://github.com)
<br/>

*Bower is being depreciated.*
