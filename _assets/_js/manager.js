// doesn't work in IE...

var script = $script.noConflict();

/**
 * Breaks absolute path links and sets no .ext requirement
 */
 
//script.path = '_assets/';

/**
 * jQuery
 *
 * @dep             jquery
 */

script(['https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js'], 'jquery');

/**
 * main.js
 *
 * @deps            jquery
 */
 
script('_assets/_js/main.js');
