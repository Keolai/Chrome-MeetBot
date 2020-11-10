document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savetues');
clicky1.addEventListener('click', function() {
save_tuesAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('cleartues');
clicky2.addEventListener('click', function() {
clear_tuesAll();
});
}); 

function save_tuesAll(){
alert ("Saving Tuesday"); 

var tuesper1 = document.getElementById('tuesper1').value;
chrome.storage.local.set({ 'tuesper1': tuesper1 }); 

var tueslink1 = document.getElementById('tueslink1').value;
chrome.storage.local.set({ 'tueslink1' : tueslink1 }); 
//not checked 

var tuesper2 = document.getElementById('tuesper2').value;
chrome.storage.local.set({'tuesper2' : tuesper2, }, function() {
console.log("tuesper2 saved");
}); 
var tueslink2 = document.getElementById('tueslink2').value;
chrome.storage.local.set({'tueslink2' : tueslink2 }, function() {
console.log("tueslink2 saved");
}); 


var tuesper3 = document.getElementById('tuesper3').value;
chrome.storage.local.set({'tuesper3' : tuesper3 }, function() {
console.log("tuesper3 saved");
}); 
var tueslink3 = document.getElementById('tueslink3').value;
chrome.storage.local.set({'tueslink3' : tueslink3 }, function() {
console.log("tueslink3 saved");
}); 


var tuesper4 = document.getElementById('tuesper4').value;
chrome.storage.local.set({'tuesper4' : tuesper4, }, function() {
console.log("tuesper4 saved");
}); 
var tueslink4 = document.getElementById('tueslink4').value;
chrome.storage.local.set({'tueslink4' : tueslink4 }, function() {
console.log("tueslink4 saved");
}); 


var tuesper5 = document.getElementById('tuesper5').value;
chrome.storage.local.set({'tuesper5' : tuesper5 }, function() {
console.log("tuesper5 saved");
}); 
var tueslink5 = document.getElementById('tueslink5').value;
chrome.storage.local.set({'tueslink5' : tueslink5 }, function() {
console.log("tueslink5 saved");
}); 

var tuesper6 = document.getElementById('tuesper6').value;
chrome.storage.local.set({'tuesper6' : tuesper6 }, function() {
console.log("tuesper6 saved");
}); 
var tueslink6 = document.getElementById('tueslink6').value;
chrome.storage.local.set({'tueslink6' : tueslink6 }, function() {
console.log("tueslink6 saved");
}); 

var tuesper7 = document.getElementById('tuesper7').value;
chrome.storage.local.set({'tuesper7' : tuesper7 }, function() {
console.log("tuesper1 saved");
}); 
var tueslink7 = document.getElementById('tueslink7').value;
chrome.storage.local.set({'tueslink7' : tueslink7 }, function() {
console.log("tueslink7 saved");
}); 

var tuesper8 = document.getElementById('tuesper8').value;
chrome.storage.local.set({'tuesper8' : tuesper8 }, function() {
console.log("tuesper8 saved");
}); 
var tueslink8 = document.getElementById('tueslink8').value;
chrome.storage.local.set({'tueslink8' : tueslink8 }, function() {
console.log("tueslink8 saved");
}); 
}

function clear_tuesAll(){
alert ("Tuesday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["tuesper1", "tueslink1"], onRemoved);

chrome.storage.local.remove(["tuesper2", "tueslink2"], onRemoved);

chrome.storage.local.remove(["tuesper3", "tueslink3"], onRemoved);

chrome.storage.local.remove(["tuesper4", "tueslink4"], onRemoved);

chrome.storage.local.remove(["tuesper5", "tueslink5"], onRemoved);

chrome.storage.local.remove(["tuesper6", "tueslink6"], onRemoved);

chrome.storage.local.remove(["tuesper7", "tueslink7"], onRemoved);

chrome.storage.local.remove(["tuesper8", "tueslink8"], onRemoved);

 } 
