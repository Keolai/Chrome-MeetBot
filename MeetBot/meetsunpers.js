document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savesun');
clicky1.addEventListener('click', function() {
save_sunAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearsun');
clicky2.addEventListener('click', function() {
clear_sunAll();
});
}); 

function save_sunAll(){
alert ("Saving Sunday"); 

var sunper1 = document.getElementById('sunper1').value;
chrome.storage.local.set({ 'sunper1': sunper1 }); 

var sunlink1 = document.getElementById('sunlink1').value;
chrome.storage.local.set({ 'sunlink1' : sunlink1 }); 

var sunper2 = document.getElementById('sunper2').value;
chrome.storage.local.set({'sunper2' : sunper2, }, function() {
console.log("sunper2 saved");
}); 
var sunlink2 = document.getElementById('sunlink2').value;
chrome.storage.local.set({'sunlink2' : sunlink2 }, function() {
console.log("sunlink2 saved");
}); 


var sunper3 = document.getElementById('sunper3').value;
chrome.storage.local.set({'sunper3' : sunper3 }, function() {
console.log("sunper3 saved");
}); 
var sunlink3 = document.getElementById('sunlink3').value;
chrome.storage.local.set({'sunlink3' : sunlink3 }, function() {
console.log("sunlink3 saved");
}); 


var sunper4 = document.getElementById('sunper4').value;
chrome.storage.local.set({'sunper4' : sunper4, }, function() {
console.log("sunper4 saved");
}); 
var sunlink4 = document.getElementById('sunlink4').value;
chrome.storage.local.set({'sunlink4' : sunlink4 }, function() {
console.log("sunlink4 saved");
}); 


var sunper5 = document.getElementById('sunper5').value;
chrome.storage.local.set({'sunper5' : sunper5 }, function() {
console.log("sunper5 saved");
}); 
var sunlink5 = document.getElementById('sunlink5').value;
chrome.storage.local.set({'sunlink5' : sunlink5 }, function() {
console.log("sunlink5 saved");
}); 

var sunper6 = document.getElementById('sunper6').value;
chrome.storage.local.set({'sunper6' : sunper6 }, function() {
console.log("sunper6 saved");
}); 
var sunlink6 = document.getElementById('sunlink6').value;
chrome.storage.local.set({'sunlink6' : sunlink6 }, function() {
console.log("sunlink6 saved");
}); 

var sunper7 = document.getElementById('sunper7').value;
chrome.storage.local.set({'sunper7' : sunper7 }, function() {
console.log("sunper1 saved");
}); 
var sunlink7 = document.getElementById('sunlink7').value;
chrome.storage.local.set({'sunlink7' : sunlink7 }, function() {
console.log("sunlink7 saved");
}); 

var sunper8 = document.getElementById('sunper8').value;
chrome.storage.local.set({'sunper8' : sunper8 }, function() {
console.log("sunper8 saved");
}); 
var sunlink8 = document.getElementById('sunlink8').value;
chrome.storage.local.set({'sunlink8' : sunlink8 }, function() {
console.log("sunlink8 saved");
}); 
}

function clear_sunAll(){
alert ("Sunday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["sunper1", "sunlink1"], onRemoved);

chrome.storage.local.remove(["sunper2", "sunlink2"], onRemoved);

chrome.storage.local.remove(["sunper3", "sunlink3"], onRemoved);

chrome.storage.local.remove(["sunper4", "sunlink4"], onRemoved);

chrome.storage.local.remove(["sunper5", "sunlink5"], onRemoved);

chrome.storage.local.remove(["sunper6", "sunlink6"], onRemoved);

chrome.storage.local.remove(["sunper7", "sunlink7"], onRemoved);

chrome.storage.local.remove(["sunper8", "sunlink8"], onRemoved);

 } 
