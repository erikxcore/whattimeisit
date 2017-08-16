import * as _ from '../../node_modules/lodash/lodash.js';
import $ from '../../node_modules/jquery/dist/jquery.min.js';
window.jQuery = window.$ = $;
//import bootstrapjs from '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js';
//Require is used here because import will not work with bootstrap's JS files due to the global jQuery requirement.
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
jQuery.noConflict(true);
//const bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
//console.log("Bootstrap enabled? " + bootstrap3_enabled);
//All this is only neccesary for Bootstrap - being that it isn't actually a requirement for this project, expect this to be removed in the future.