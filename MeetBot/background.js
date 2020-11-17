//DESCRIPTION: Monitors system time, retrieves, and opens (or closes) google meets 

var link; //global variables used throughout script 
var timeOne;
var timeTwo;
var timeThree;
var timeFour;
var timeFive;
var timeSix;
var timeSeven;
var timeEight; 
//controls when the script checks the time (not constant) 
chrome.runtime.onStartup.addListener(function() {
chrome.alarms.create("2min", {periodInMinutes: 2} ); 
chrome.alarms.onAlarm.addListener(function(alarm) { 
    if (alarm.name === "2min"){
    console.log("firing"); 
    getTime();
    }
}); 
})  

chrome.runtime.onInstalled.addListener(function() {
chrome.alarms.create("2Min", {periodInMinutes: 2} ); 
chrome.alarms.onAlarm.addListener(function(alarm) { 
    if (alarm.name === "2Min"){
    console.log("firing"); 
    getTime();
    }
}); 
})  
// gets numbers, converts to strings to "add" them together, then reconverts to integers 
function getTime(){

var hourLow;
var hourUp; 
var d = new Date();
var day = d.getDay(); 
var hour = d.getHours(); 
var minutes = d.getMinutes(); //check if 0-9 have 0 in front (ex- 09 or 9) 

//allows for bot to join 2-3 minutes before inputted time 
var minutesLow = minutes + 3; 
if (minutesLow > 59){ //allows for proper time formating 
minutesLow = minutesLow - 60; //minutes would be negative without
hourLow = hour + 1; 
} else {
hourLow = hour;
}

var minutesHigh = minutes + 2; 
if (minutesHigh > 59){
minutesHigh = minutesHigh - 60; //minutes would be over 59 without 
hourUp = hour + 1;
} else {
hourUp = hour; 
} 

if (minutesLow > -1 && minutesLow < 10){ //adds 0 in front of 0-9 
var aminFix = minutesLow.toString();
var bminFix = "0" + aminFix; 
var sminutesLow = bminFix; 
} else {
var sminutesLow = minutesLow.toString();
} 

if (minutesHigh > -1 && minutesHigh < 10){ 
var aminFix = minutesHigh.toString();
var bminFix = "0" + aminFix; 
var sminutesHigh = bminFix; 
} else {
var sminutesHigh = minutesHigh.toString(); 
} 

 //connects strings to allow for time format to match earlier time format
var shour = hour.toString(); 
var shourLow = hourLow.toString();
var shourUp = hourUp.toString();
var sminutes = minutes.toString(); 
var stimeUp = shourUp + sminutesHigh; 
var stimeLow = shourLow + sminutesLow; 

var timeUp = parseInt(stimeUp, 10);
var timeLow = parseInt(stimeLow, 10); 

console.log("finding day"); 

switch(day){

case 0: //sunday
console.log("sunday"); 
loadTimeOneSun();
function loadTimeOneSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper1", function(gettimeone) {
            resolve(gettimeone.sunper1);
         })
    });
}
populateTimeOneSun(); 
function populateTimeOneSun(){
    loadTimeOneSun().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneSun(); 
       } 
    })
} 


function setLinkOneSun(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink1", function(getlinkone) {
            resolve(getlinkone.sunlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 


} //end of time1
loadTimeTwoSun();
function loadTimeTwoSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper2", function(gettimeTwo) {
            resolve(gettimeTwo.sunper2);
         })
    });
}
populateTimeTwoSun(); 
function populateTimeTwoSun(){
    loadTimeTwoSun().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoSun(); 
       } 
    })
} 


function setLinkTwoSun(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink2", function(getlinkTwo) {
            resolve(getlinkTwo.sunlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeSun();
function loadTimeThreeSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper3", function(gettimeThree) {
            resolve(gettimeThree.sunper3);
         })
    });
}
populateTimeThreeSun(); 
function populateTimeThreeSun(){
    loadTimeThreeSun().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeSun(); 
       } 
    })
} 


function setLinkThreeSun(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink3", function(getlinkThree) {
            resolve(getlinkThree.sunlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourSun();
function loadTimefourSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper4", function(gettimefour) {
            resolve(gettimefour.sunper4);
         })
    });
}
populateTimefourSun(); 
function populateTimefourSun(){
    loadTimefourSun().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourSun(); 
       } 
    })
} 


function setLinkfourSun(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink4", function(getlinkfour) {
            resolve(getlinkfour.sunlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveSun();
function loadTimeFiveSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper5", function(gettimeFive) {
            resolve(gettimeFive.sunper5);
         })
    });
}
populateTimeFiveSun(); 
function populateTimeFiveSun(){
    loadTimeFiveSun().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveSun(); 
       } 
    })
} 


function setLinkFiveSun(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink5", function(getlinkFive) {
            resolve(getlinkFive.sunlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixSun();
function loadTimeSixSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper6", function(gettimeSix) {
            resolve(gettimeSix.sunper6);
         })
    });
}
populateTimeSixSun(); 
function populateTimeSixSun(){
    loadTimeSixSun().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixSun(); 
       } 
    })
} 


function setLinkSixSun(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink6", function(getlinkSix) {
            resolve(getlinkSix.sunlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenSun();
function loadTimeSevenSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper7", function(gettimeSeven) {
            resolve(gettimeSeven.sunper7);
         })
    });
}
populateTimeSevenSun(); 
function populateTimeSevenSun(){
    loadTimeSevenSun().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenSun(); 
       } 
    })
} 


function setLinkSevenSun(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink7", function(getlinkSeven) {
            resolve(getlinkSeven.sunlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightSun();
function loadTimeEightSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper8", function(gettimeEight) {
            resolve(gettimeEight.sunper8);
         })
    });
}
populateTimeEightSun(); 
function populateTimeEightSun(){
    loadTimeEightSun().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightSun(); 
       } 
    })
} 


function setLinkEightSun(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink8", function(getlinkEight) {
            resolve(getlinkEight.sunlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 1: //monday
console.log("monday"); 
loadTimeOneM();
function loadTimeOneM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper1", function(gettimeone) {
            resolve(gettimeone.monper1);
         })
    });
}
populateTimeOne(); 
function populateTimeOne(){
    loadTimeOneM().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneM(); 
       } 
    })
} 


function setLinkOneM(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink1", function(getlinkone) {
            resolve(getlinkone.monlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 


}//end of time1 UNDEFINED -> 
loadTimeTwoM();
function loadTimeTwoM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper2", function(gettimeTwo) {
            resolve(gettimeTwo.monper2);
         })
    });
}
populateTimeTwoM(); 
function populateTimeTwoM(){
    loadTimeTwoM().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoM(); 
       } 
    })
} 


function setLinkTwoM(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink2", function(getlinkTwo) {
            resolve(getlinkTwo.monlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeM();
function loadTimeThreeM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper3", function(gettimeThree) {
            resolve(gettimeThree.monper3);
         })
    });
}
populateTimeThreeM(); 
function populateTimeThreeM(){
    loadTimeThreeM().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeM(); 
       } 
    })
} 


function setLinkThreeM(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink3", function(getlinkThree) {
            resolve(getlinkThree.monlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourM();
function loadTimefourM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper4", function(gettimefour) {
            resolve(gettimefour.monper4);
         })
    });
}
populateTimefourM(); 
function populateTimefourM(){
    loadTimefourM().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourM(); 
       } 
    })
} 


function setLinkfourM(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink4", function(getlinkfour) {
            resolve(getlinkfour.monlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveM();
function loadTimeFiveM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper5", function(gettimeFive) {
            resolve(gettimeFive.monper5);
         })
    });
}
populateTimeFiveM(); 
function populateTimeFiveM(){
    loadTimeFiveM().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveM(); 
       } 
    })
} 


function setLinkFiveM(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink5", function(getlinkFive) {
            resolve(getlinkFive.monlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixM();
function loadTimeSixM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper6", function(gettimeSix) {
            resolve(gettimeSix.monper6);
         })
    });
}
populateTimeSixM(); 
function populateTimeSixM(){
    loadTimeSixM().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixM(); 
       } 
    })
} 


function setLinkSixM(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink6", function(getlinkSix) {
            resolve(getlinkSix.monlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenM();
function loadTimeSevenM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper7", function(gettimeSeven) {
            resolve(gettimeSeven.monper7);
         })
    });
}
populateTimeSevenM(); 
function populateTimeSevenM(){
    loadTimeSevenM().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenM(); 
       } 
    })
} 


function setLinkSevenM(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink7", function(getlinkSeven) {
            resolve(getlinkSeven.monlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightM();
function loadTimeEightM() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper8", function(gettimeEight) {
            resolve(gettimeEight.monper8);
         })
    });
}
populateTimeEightM(); 
function populateTimeEightM(){
    loadTimeEightM().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightM(); 
       } 
    })
} 


function setLinkEightM(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink8", function(getlinkEight) {
            resolve(getlinkEight.monlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 2: //tuesday
console.log("tuesday"); 
loadTimeOneT();
function loadTimeOneT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper1", function(gettimeone) {
            resolve(gettimeone.tuesper1);
         })
    });
}
populateTimeOneT(); 
function populateTimeOneT(){
    loadTimeOneT().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneT(); 
       } 
    })
} 


function setLinkOneT(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink1", function(getlinkone) {
            resolve(getlinkone.tueslink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 
} 
//end of time1 
loadTimeTwoT();
function loadTimeTwoT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper2", function(gettimeTwo) {
            resolve(gettimeTwo.tuesper2);
         })
    });
}
populateTimeTwoT(); 
function populateTimeTwoT(){
    loadTimeTwoT().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoT(); 
       } 
    })
} 


function setLinkTwoT(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink2", function(getlinkTwo) {
            resolve(getlinkTwo.tueslink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeT();
function loadTimeThreeT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper3", function(gettimeThree) {
            resolve(gettimeThree.tuesper3);
         })
    });
}
populateTimeThreeT(); 
function populateTimeThreeT(){
    loadTimeThreeT().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeT(); 
       } 
    })
} 


function setLinkThreeT(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink3", function(getlinkThree) {
            resolve(getlinkThree.tueslink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourT();
function loadTimefourT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper4", function(gettimefour) {
            resolve(gettimefour.tuesper4);
         })
    });
}
populateTimefourT(); 
function populateTimefourT(){
    loadTimefourT().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourT(); 
       } 
    })
} 


function setLinkfourT(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink4", function(getlinkfour) {
            resolve(getlinkfour.tueslink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveT();
function loadTimeFiveT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper5", function(gettimeFive) {
            resolve(gettimeFive.tuesper5);
         })
    });
}
populateTimeFiveT(); 
function populateTimeFiveT(){
    loadTimeFiveT().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveT(); 
       } 
    })
} 


function setLinkFiveT(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink5", function(getlinkFive) {
            resolve(getlinkFive.tueslink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixT();
function loadTimeSixT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper6", function(gettimeSix) {
            resolve(gettimeSix.tuesper6);
         })
    });
}
populateTimeSixT(); 
function populateTimeSixT(){
    loadTimeSixT().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixT(); 
       } 
    })
} 


function setLinkSixT(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink6", function(getlinkSix) {
            resolve(getlinkSix.tueslink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenT();
function loadTimeSevenT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper7", function(gettimeSeven) {
            resolve(gettimeSeven.tuesper7);
         })
    });
}
populateTimeSevenT(); 
function populateTimeSevenT(){
    loadTimeSevenT().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenT(); 
       } 
    })
} 


function setLinkSevenT(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink7", function(getlinkSeven) {
            resolve(getlinkSeven.tueslink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightT();
function loadTimeEightT() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper8", function(gettimeEight) {
            resolve(gettimeEight.tuesper8);
         })
    });
}
populateTimeEightT(); 
function populateTimeEightT(){
    loadTimeEightT().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightT(); 
       } 
    })
} 


function setLinkEightT(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink8", function(getlinkEight) {
            resolve(getlinkEight.tueslink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 3: //wednesday
console.log("wednesday"); 
loadTimeOneW();
function loadTimeOneW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper1", function(gettimeone) {
            resolve(gettimeone.wedper1);
         })
    });
}
populateTimeOneW(); 
function populateTimeOneW(){
    loadTimeOneW().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneW(); 
       } 
    })
} 


function setLinkOneW(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink1", function(getlinkone) {
            resolve(getlinkone.wedlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 
} 

//end of time1
loadTimeTwoW();
function loadTimeTwoW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper2", function(gettimeTwo) {
            resolve(gettimeTwo.wedper2);
         })
    });
}
populateTimeTwoW(); 
function populateTimeTwoW(){
    loadTimeTwoW().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoW(); 
       } 
    })
} 


function setLinkTwoW(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink2", function(getlinkTwo) {
            resolve(getlinkTwo.wedlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeW();
function loadTimeThreeW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper3", function(gettimeThree) {
            resolve(gettimeThree.wedper3);
         })
    });
}
populateTimeThreeW(); 
function populateTimeThreeW(){
    loadTimeThreeW().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeW(); 
       } 
    })
} 


function setLinkThreeW(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink3", function(getlinkThree) {
            resolve(getlinkThree.wedlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourW();
function loadTimefourW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper4", function(gettimefour) {
            resolve(gettimefour.wedper4);
         })
    });
}
populateTimefourW(); 
function populateTimefourW(){
    loadTimefourW().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourW(); 
       } 
    })
} 


function setLinkfourW(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink4", function(getlinkfour) {
            resolve(getlinkfour.wedlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveW();
function loadTimeFiveW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper5", function(gettimeFive) {
            resolve(gettimeFive.wedper5);
         })
    });
}
populateTimeFiveW(); 
function populateTimeFiveW(){
    loadTimeFiveW().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveW(); 
       } 
    })
} 


function setLinkFiveW(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink5", function(getlinkFive) {
            resolve(getlinkFive.wedlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixW();
function loadTimeSixW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper6", function(gettimeSix) {
            resolve(gettimeSix.wedper6);
         })
    });
}
populateTimeSixW(); 
function populateTimeSixW(){
    loadTimeSixW().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixW(); 
       } 
    })
} 


function setLinkSixW(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink6", function(getlinkSix) {
            resolve(getlinkSix.wedlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenW();
function loadTimeSevenW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper7", function(gettimeSeven) {
            resolve(gettimeSeven.wedper7);
         })
    });
}
populateTimeSevenW(); 
function populateTimeSevenW(){
    loadTimeSevenW().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenW(); 
       } 
    })
} 


function setLinkSevenW(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink7", function(getlinkSeven) {
            resolve(getlinkSeven.wedlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightW();
function loadTimeEightW() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper8", function(gettimeEight) {
            resolve(gettimeEight.wedper8);
         })
    });
}
populateTimeEightW(); 
function populateTimeEightW(){
    loadTimeEightW().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightW(); 
       } 
    })
} 


function setLinkEightW(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink8", function(getlinkEight) {
            resolve(getlinkEight.wedlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 4: //thursday
console.log("thursday"); 
loadTimeOneTh();
function loadTimeOneTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper1", function(gettimeone) {
            resolve(gettimeone.thursper1);
         })
    });
}
populateTimeOneTh(); 
function populateTimeOneTh(){
    loadTimeOneTh().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneTh(); 
       } 
    })
} 


function setLinkOneTh(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink1", function(getlinkone) {
            resolve(getlinkone.thurslink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 
} 
//end of time1
loadTimeTwoTh();
function loadTimeTwoTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper2", function(gettimeTwo) {
            resolve(gettimeTwo.thursper2);
         })
    });
}
populateTimeTwoTh(); 
function populateTimeTwoTh(){
    loadTimeTwoTh().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoTh(); 
       } 
    })
} 


function setLinkTwoTh(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink2", function(getlinkTwo) {
            resolve(getlinkTwo.thurslink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeTh();
function loadTimeThreeTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper3", function(gettimeThree) {
            resolve(gettimeThree.thursper3);
         })
    });
}
populateTimeThreeTh(); 
function populateTimeThreeTh(){
    loadTimeThreeTh().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeTh(); 
       } 
    })
} 


function setLinkThreeTh(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink3", function(getlinkThree) {
            resolve(getlinkThree.thurslink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourTh();
function loadTimefourTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper4", function(gettimefour) {
            resolve(gettimefour.thursper4);
         })
    });
}
populateTimefourTh(); 
function populateTimefourTh(){
    loadTimefourTh().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourTh(); 
       } 
    })
} 


function setLinkfourTh(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink4", function(getlinkfour) {
            resolve(getlinkfour.thurslink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveTh();
function loadTimeFiveTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper5", function(gettimeFive) {
            resolve(gettimeFive.thursper5);
         })
    });
}
populateTimeFiveTh(); 
function populateTimeFiveTh(){
    loadTimeFiveTh().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveTh(); 
       } 
    })
} 


function setLinkFiveTh(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink5", function(getlinkFive) {
            resolve(getlinkFive.thurslink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixTh();
function loadTimeSixTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper6", function(gettimeSix) {
            resolve(gettimeSix.thursper6);
         })
    });
}
populateTimeSixTh(); 
function populateTimeSixTh(){
    loadTimeSixTh().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixTh(); 
       } 
    })
} 


function setLinkSixTh(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink6", function(getlinkSix) {
            resolve(getlinkSix.thurslink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenTh();
function loadTimeSevenTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper7", function(gettimeSeven) {
            resolve(gettimeSeven.thursper7);
         })
    });
}
populateTimeSevenTh(); 
function populateTimeSevenTh(){
    loadTimeSevenTh().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenTh(); 
       } 
    })
} 


function setLinkSevenTh(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink7", function(getlinkSeven) {
            resolve(getlinkSeven.thurslink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightTh();
function loadTimeEightTh() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper8", function(gettimeEight) {
            resolve(gettimeEight.thursper8);
         })
    });
}
populateTimeEightTh(); 
function populateTimeEightTh(){
    loadTimeEightTh().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightTh(); 
       } 
    })
} 


function setLinkEightTh(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink8", function(getlinkEight) {
            resolve(getlinkEight.thurslink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 5: //friday
console.log("friday"); 
loadTimeOneF();
function loadTimeOneF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper1", function(gettimeone) {
            resolve(gettimeone.friper1);
         })
    });
}
populateTimeOneF(); 
function populateTimeOneF(){
    loadTimeOneF().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneF(); 
       } 
    })
} 


function setLinkOneF(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink1", function(getlinkone) {
            resolve(getlinkone.frilink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 
} 
//end of time1
loadTimeTwoF();
function loadTimeTwoF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper2", function(gettimeTwo) {
            resolve(gettimeTwo.friper2);
         })
    });
}
populateTimeTwoF(); 
function populateTimeTwoF(){
    loadTimeTwoF().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoF(); 
       } 
    })
} 


function setLinkTwoF(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink2", function(getlinkTwo) {
            resolve(getlinkTwo.frilink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeF();
function loadTimeThreeF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper3", function(gettimeThree) {
            resolve(gettimeThree.friper3);
         })
    });
}
populateTimeThreeF(); 
function populateTimeThreeF(){
    loadTimeThreeF().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeF(); 
       } 
    })
} 


function setLinkThreeF(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink3", function(getlinkThree) {
            resolve(getlinkThree.frilink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourF();
function loadTimefourF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper4", function(gettimefour) {
            resolve(gettimefour.friper4);
         })
    });
}
populateTimefourF(); 
function populateTimefourF(){
    loadTimefourF().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourF(); 
       } 
    })
} 


function setLinkfourF(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink4", function(getlinkfour) {
            resolve(getlinkfour.frilink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeFiveF();
function loadTimeFiveF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper5", function(gettimeFive) {
            resolve(gettimeFive.friper5);
         })
    });
}
populateTimeFiveF(); 
function populateTimeFiveF(){
    loadTimeFiveF().then(function(value) {
        timeFive = value;
       if (timeFive == timeLow || timeFive == timeUp){
       setLinkFiveF(); 
       } 
    })
} 


function setLinkFiveF(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink5", function(getlinkFive) {
            resolve(getlinkFive.frilink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixF();
function loadTimeSixF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper6", function(gettimeSix) {
            resolve(gettimeSix.friper6);
         })
    });
}
populateTimeSixF(); 
function populateTimeSixF(){
    loadTimeSixF().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixF(); 
       } 
    })
} 


function setLinkSixF(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink6", function(getlinkSix) {
            resolve(getlinkSix.frilink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenF();
function loadTimeSevenF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper7", function(gettimeSeven) {
            resolve(gettimeSeven.friper7);
         })
    });
}
populateTimeSevenF(); 
function populateTimeSevenF(){
    loadTimeSevenF().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenF(); 
       } 
    })
} 


function setLinkSevenF(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink7", function(getlinkSeven) {
            resolve(getlinkSeven.frilink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightF();
function loadTimeEightF() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper8", function(gettimeEight) {
            resolve(gettimeEight.friper8);
         })
    });
}
populateTimeEightF(); 
function populateTimeEightF(){
    loadTimeEightF().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightF(); 
       } 
    })
} 


function setLinkEightF(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink8", function(getlinkEight) {
            resolve(getlinkEight.frilink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break;
case 6: //saturday
console.log("saturday"); 
loadTimeOneSa();
function loadTimeOneSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper1", function(gettimeone) {
            resolve(gettimeone.satper1);
         })
    });
}
populateTimeOneSa(); 
function populateTimeOneSa(){
    loadTimeOneSa().then(function(value) {
        timeOne = value;
       if (timeOne == timeLow || timeOne == timeUp){
       setLinkOneSa(); 
       } 
    })
} 


function setLinkOneSa(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink1", function(getlinkone) {
            resolve(getlinkone.satlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        link = value;
        openLink(); 
    })
} 
} 
//end of time1
loadTimeTwoSa();
function loadTimeTwoSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper2", function(gettimeTwo) {
            resolve(gettimeTwo.satper2);
         })
    });
}
populateTimeTwoSa(); 
function populateTimeTwoSa(){
    loadTimeTwoSa().then(function(value) {
        timeTwo = value;
       if (timeTwo == timeLow || timeTwo == timeUp){
       setLinkTwoSa(); 
       } 
    })
} 


function setLinkTwoSa(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink2", function(getlinkTwo) {
            resolve(getlinkTwo.satlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time2
loadTimeThreeSa();
function loadTimeThreeSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper3", function(gettimeThree) {
            resolve(gettimeThree.satper3);
         })
    });
}
populateTimeThreeSa(); 
function populateTimeThreeSa(){
    loadTimeThreeSa().then(function(value) {
        timeThree = value;
       if (timeThree == timeLow || timeThree == timeUp){
       setLinkThreeSa(); 
       } 
    })
} 


function setLinkThreeSa(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink3", function(getlinkThree) {
            resolve(getlinkThree.satlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time3
loadTimefourSa();
function loadTimefourSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper4", function(gettimefour) {
            resolve(gettimefour.satper4);
         })
    });
}
populateTimefourSa(); 
function populateTimefourSa(){
    loadTimefourSa().then(function(value) {
        timefour = value;
       if (timefour == timeLow || timefour == timeUp){
       setLinkfourSa(); 
       } 
    })
} 


function setLinkfourSa(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink4", function(getlinkfour) {
            resolve(getlinkfour.satlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time4
loadTimeSaiveSa();
function loadTimeSaiveSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper5", function(gettimeSaive) {
            resolve(gettimeSaive.satper5);
         })
    });
}
populateTimeSaiveSa(); 
function populateTimeSaiveSa(){
    loadTimeSaiveSa().then(function(value) {
        timeSaive = value;
       if (timeSaive == timeLow || timeSaive == timeUp){
       setLinkSaiveSa(); 
       } 
    })
} 


function setLinkSaiveSa(){
loadLinkSaive(); 
function loadLinkSaive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink5", function(getlinkSaive) {
            resolve(getlinkSaive.satlink5); //FIX NAMES!!!!!!!
         })
    });
}
populateLinkSaive(); 
function populateLinkSaive(){
    loadLinkSaive().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time5
loadTimeSixSa();
function loadTimeSixSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper6", function(gettimeSix) {
            resolve(gettimeSix.satper6);
         })
    });
}
populateTimeSixSa(); 
function populateTimeSixSa(){
    loadTimeSixSa().then(function(value) {
        timeSix = value;
       if (timeSix == timeLow || timeSix == timeUp){
       setLinkSixSa(); 
       } 
    })
} 


function setLinkSixSa(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink6", function(getlinkSix) {
            resolve(getlinkSix.satlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time6
loadTimeSevenSa();
function loadTimeSevenSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper7", function(gettimeSeven) {
            resolve(gettimeSeven.satper7);
         })
    });
}
populateTimeSevenSa(); 
function populateTimeSevenSa(){
    loadTimeSevenSa().then(function(value) {
        timeSeven = value;
       if (timeSeven == timeLow || timeSeven == timeUp){
       setLinkSevenSa(); 
       } 
    })
} 


function setLinkSevenSa(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink7", function(getlinkSeven) {
            resolve(getlinkSeven.satlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time7
loadTimeEightSa();
function loadTimeEightSa() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper8", function(gettimeEight) {
            resolve(gettimeEight.satper8);
         })
    });
}
populateTimeEightSa(); 
function populateTimeEightSa(){
    loadTimeEightSa().then(function(value) {
        timeEight = value;
       if (timeEight == timeLow || timeEight == timeUp){
       setLinkEightSa(); 
       } 
    })
} 


function setLinkEightSa(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink8", function(getlinkEight) {
            resolve(getlinkEight.satlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        link = value;
        openLink(); 
    })
} 
}//end of time8
break; 
default: //incase it doesn't get time correctly (bug catcher) 
console.log("[ERROR] : I can't find the day, help!"); 

} 

function openLink(){ //opens selected link 

var stringchecker; 
var stringcheckerTwo; 

stringchecker = link.includes('meet');
stringcheckerTwo = link.includes('none'); 

if (stringchecker == true && stringcheckerTwo == false) {

getURLS();  
function getURLS() { // S for SEE o-o
    return new Promise(function(resolve, reject) {
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},function(tab) {
    resolve(tab[0].url); //gets url of tab 0 to see if our meet is already open 
         })
    });
}

setURLS(); 
function setURLS(){
    getURLS().then(function(value) {
        taburl = value;
        var checktab = taburl.includes("meet"); 
        if (checktab == true){
            console.log("meet detected in tab[0], failing..."); 
            fail();
            } 
       }) 
    }

chrome.tabs.create({ url: link, index: 0 }); //opens in tab 0 
setTimeout(controlUrl, 5000); //gives time for page to lead 

} else {

fail();
} 
}

var currentUrl; 

function controlUrl(){

console.log("checking url..."); 

getURLF();  
function getURLF() { // get URL function
    return new Promise(function(resolve, reject) {
        chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},function(tab) {
    resolve(tab[0].url); //gets url of tab 0 to check it 
         })
    });
}
setURLF(); 
function setURLF(){
    getURLF().then(function(value) {
        currentUrl = value;
        checkUrl(); 
        
       }) 
    }

}

function checkUrl(){ //checks url 

console.log("url found, checking contents"); 

var contains1 = currentUrl.includes("whoops"); //bad urls (meet hasn't started) 
var contains2 = currentUrl.includes("lookup"); 
var contains3 = currentUrl.includes("signin"); //sign in 

if (contains1 == true || contains2 == true){

console.log("bad url found!"); 

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
var current = tabs[0]; 
chrome.tabs.remove(current.id, function() { });
}); //exits out of bad webpage 

setTimeout(openLink, 20000); //gives time for the page to update/for meet to start (30 secs) 

} else if (contains3 == true){ 

console.log("sign-in required to procede, failing..."); 

fail(); 

} else { 
//triggers content script to run by messaging it
console.log("triggering content script"); 

chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response);
      var rcheck = response.includes("bad");
      if (rcheck == true){
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentB = tabs[0]; 
        chrome.tabs.remove(currentB.id, function() { });
        }); 
      setTimeout(openLink, 15000); 
      
      } else {
      link = "none"; 
      console.clear(); 
      }
  });
});
} 
} 

function fail(){
console.log("unable to join meet"); 
} 
} //end of main function 
