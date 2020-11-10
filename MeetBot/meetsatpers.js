document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savesat');
clicky1.addEventListener('click', function() {
save_satAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearsat');
clicky2.addEventListener('click', function() {
clear_satAll();
});
}); 

function save_satAll(){
alert ("Saving Saturday"); 

var satper1 = document.getElementById('satper1').value;
chrome.storage.local.set({ 'satper1': satper1 }); 

var satlink1 = document.getElementById('satlink1').value;
chrome.storage.local.set({ 'satlink1' : satlink1 }); 

var satper2 = document.getElementById('satper2').value;
chrome.storage.local.set({'satper2' : satper2, }, function() {
console.log("satper2 saved");
}); 
var satlink2 = document.getElementById('satlink2').value;
chrome.storage.local.set({'satlink2' : satlink2 }, function() {
console.log("satlink2 saved");
}); 


var satper3 = document.getElementById('satper3').value;
chrome.storage.local.set({'satper3' : satper3 }, function() {
console.log("satper3 saved");
}); 
var satlink3 = document.getElementById('satlink3').value;
chrome.storage.local.set({'satlink3' : satlink3 }, function() {
console.log("satlink3 saved");
}); 


var satper4 = document.getElementById('satper4').value;
chrome.storage.local.set({'satper4' : satper4, }, function() {
console.log("satper4 saved");
}); 
var satlink4 = document.getElementById('satlink4').value;
chrome.storage.local.set({'satlink4' : satlink4 }, function() {
console.log("satlink4 saved");
}); 


var satper5 = document.getElementById('satper5').value;
chrome.storage.local.set({'satper5' : satper5 }, function() {
console.log("satper5 saved");
}); 
var satlink5 = document.getElementById('satlink5').value;
chrome.storage.local.set({'satlink5' : satlink5 }, function() {
console.log("satlink5 saved");
}); 

var satper6 = document.getElementById('satper6').value;
chrome.storage.local.set({'satper6' : satper6 }, function() {
console.log("satper6 saved");
}); 
var satlink6 = document.getElementById('satlink6').value;
chrome.storage.local.set({'satlink6' : satlink6 }, function() {
console.log("satlink6 saved");
}); 

var satper7 = document.getElementById('satper7').value;
chrome.storage.local.set({'satper7' : satper7 }, function() {
console.log("satper1 saved");
}); 
var satlink7 = document.getElementById('satlink7').value;
chrome.storage.local.set({'satlink7' : satlink7 }, function() {
console.log("satlink7 saved");
}); 

var satper8 = document.getElementById('satper8').value;
chrome.storage.local.set({'satper8' : satper8 }, function() {
console.log("satper8 saved");
}); 
var satlink8 = document.getElementById('satlink8').value;
chrome.storage.local.set({'satlink8' : satlink8 }, function() {
console.log("satlink8 saved");
}); 
}

function clear_satAll(){
alert ("Saturday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["satper1", "satlink1"], onRemoved);

chrome.storage.local.remove(["satper2", "satlink2"], onRemoved);

chrome.storage.local.remove(["satper3", "satlink3"], onRemoved);

chrome.storage.local.remove(["satper4", "satlink4"], onRemoved);

chrome.storage.local.remove(["satper5", "satlink5"], onRemoved);

chrome.storage.local.remove(["satper6", "satlink6"], onRemoved);

chrome.storage.local.remove(["satper7", "satlink7"], onRemoved);

chrome.storage.local.remove(["satper8", "satlink8"], onRemoved);

 } 
