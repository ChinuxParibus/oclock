var $ = require('minified').$, _ = require('minified')._;

/*Inicio configuración typewrite.js*/
typewriter.Typewriter.cycle("typewriter", ["Just in time... Always!", "Just read the clock... Nothing else", "TL;DR... if you don't have time", "Oh C'mon, don't waste my time!", "God's time is perfect!", "But now it's time to say goodbye, time flows like tears...", "Perfect timing like a swiss clock ;)", "Three Sweden swingers switch their swiss swatches for watch time swift...", "It's Tea Time, muthafucka...", "Here goes the time for Lorem Ipsum", "I... I dont have time for this...", "I don't wrote this in \"Times New Roman\" letter", "Did you notice that all phrases have a time on it? Even this! LOL", "There is no spoon... I mean... time...",  "Still there? Just keep focus with your time!"]);
/*Final configuración*/

function oclock () {
	$("#clock").fill(_.formatValue("N, w d hh:mm:ss a", new Date()));
}
