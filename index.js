"use strict";

// Include the Alexa SDK
var Alexa = require("aws-sdk");

// "handler" object handles the Alexa requests
var handler = {

 // functions in here mapped to intents in the Alexa Skill

"Calculate": function () {
  var speechOutput = "";

  switch(this.event.request.intent.slots.Op.value){
    case "add":
      speechOutput = "" + (this.event.request.intent.slots.A.value + this.event.request.intent.slots.B.value)
    break;
    case "subtract":
      speechOutput = "" + (this.event.request.intent.slots.A.value - this.event.request.intent.slots.B.value)
    break
    case "divide":
      speechOutput = "" + (this.event.request.intent.slots.A.value / this.event.request.intent.slots.B.value)
    break;
    case "multiply":
      speechOutput = "" + (this.event.request.intent.slots.A.value * this.event.request.intent.slots.B.value)
    break;
  }
  this.emit(':tellWithCard', speechOutput);

},

 "Authors": function ()
 {
   // response.speak accepts string response
   this.response.speak("Joseph Peaden and Haniel Diaz.");
   // sends the response from response.speak
   this.emit(":responseReady");
 },

 "LaunchRequest": function ()
 {
   this.response.speak("Welcome to Echo Calculator.");
   this.emit(":responseReady");
 }
};



/*
* It would be pretty cool to do some recursive kinda stuff; like each parameter really
* represents an expression of it's own (functional programming!). Also, depending on
* how complex we're getting, may need to use a stack to get order of operations correct.
*/

function addTwo(a, b)
{
 return a + b;
}

function subTwo(a, b)
{
 return a - b;
}

function multTwo(a, b)
{
 return a * b;
}

function divTwo(a, b)
{
 return a / b;
}

/* Can request response from skill using 2 styles:
 #1: "Alexa, tell {skillname} {intent}"
   INTENT REQUEST
   Basically, alexa recognizes that a specific intent is being requested,
   and maps to that intent.
 #2: "Alexa, open {skillname}"
   LAUNCH REQUEST
   U know what this does bruh
   SPECIFIC HANDLER FUNCTION
*/

// Lambda function triggers this every time
// request is made. Callback is optional. ex: function(event, context)
exports.handler = function(event, context, callback)
{
 // setting up alexa object
 var alexa = Alexa.handler(event, context);

 // registers the handler object
 alexa.registerHandlers(handler);

 // executes the code
 alexa.execute();
}
