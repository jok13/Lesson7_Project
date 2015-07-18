/**
* Created with LIS2360_Lesson7_jQuery.
* User: jok13
* Date: 2015-07-15
* Time: 03:53 AM
* To change this template use Tools | Templates.
*/
/*
 Program Name: Recipe Display Application
 Author: Jordan Kirkendoll
 Date: 7/15/15
 Filename: script.js
 */

header = document.createElement("h3")
enjoy = document.createTextNode("Enjoy!")
header.appendChild(enjoy)
ending4 = document.getElementsByTagName("div")[0]
ending4.appendChild(header)

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display()

/*
$("h3").click(display);
*/

function display2(event) {
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
    
}

/*
$("h3").click(display2);
*/

$("h3").hover(display2);
$("h3").hover(function() {
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "blue");
});



















define(function() {
return {};
});