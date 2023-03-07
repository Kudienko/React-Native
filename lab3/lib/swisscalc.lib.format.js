//
// Eric Morgan
// Copyright (c) 2014. 
//

global.swisscalc = global.swisscalc || {};
global.swisscalc.lib = global.swisscalc.lib || {};
global.swisscalc.lib.format = function() {};

// Adds commas to the given numeric-string to group digits.
global.swisscalc.lib.format.groupDigits = function(number) {
	// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript/2901298#2901298
	var parts = number.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

// Formats the given number as a US currency string
global.swisscalc.lib.format.asUSCurrency = function(number) {
	var s = number.toFixed(2);
	s = global.swisscalc.lib.format.groupDigits(s);
	return (s.charAt(0) == "-")	? "-$" + s.substring(1)	: "$" + s;
};