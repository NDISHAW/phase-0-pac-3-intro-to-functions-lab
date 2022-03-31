const { VirtualConsole } = require("jsdom");

function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string) {
   // return string.toUpperCase();
    
    console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string){
    
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string ===string.toLowerCase()){
        return(`I can\'t hear you!` );
    }
    else if (string===string.toUpperCase()) {
        return("YES INDEED!")
    }
    else if (string==="Let's have dinner together!") {
        return("I would love to!")
    }
}
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate(`Let\'s have dinner together!`);


