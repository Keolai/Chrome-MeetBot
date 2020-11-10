document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savemon');
clicky1.addEventListener('click', function() {
save_monAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearmon');
clicky2.addEventListener('click', function() {
clear_monAll();
});
}); 

function save_monAll(){
alert ("Saving Monday"); 

var monper1 = document.getElementById('monper1').value;
chrome.storage.local.set({ 'monper1': monper1 }); 

var monlink1 = document.getElementById('monlink1').value;
chrome.storage.local.set({ 'monlink1' : monlink1 }); 
//not checked 

var monper2 = document.getElementById('monper2').value;
chrome.storage.local.set({'monper2' : monper2, }, function() {
console.log("monper2 saved");
}); 
var monlink2 = document.getElementById('monlink2').value;
chrome.storage.local.set({'monlink2' : monlink2 }, function() {
console.log("monlink2 saved");
}); 


var monper3 = document.getElementById('monper3').value;
chrome.storage.local.set({'monper3' : monper3 }, function() {
console.log("monper3 saved");
}); 
var monlink3 = document.getElementById('monlink3').value;
chrome.storage.local.set({'monlink3' : monlink3 }, function() {
console.log("monlink3 saved");
}); 


var monper4 = document.getElementById('monper4').value;
chrome.storage.local.set({'monper4' : monper4, }, function() {
console.log("monper4 saved");
}); 
var monlink4 = document.getElementById('monlink4').value;
chrome.storage.local.set({'monlink4' : monlink4 }, function() {
console.log("monlink4 saved");
}); 


var monper5 = document.getElementById('monper5').value;
chrome.storage.local.set({'monper5' : monper5 }, function() {
console.log("monper5 saved");
}); 
var monlink5 = document.getElementById('monlink5').value;
chrome.storage.local.set({'monlink5' : monlink5 }, function() {
console.log("monlink5 saved");
}); 

var monper6 = document.getElementById('monper6').value;
chrome.storage.local.set({'monper6' : monper6 }, function() {
console.log("monper6 saved");
}); 
var monlink6 = document.getElementById('monlink6').value;
chrome.storage.local.set({'monlink6' : monlink6 }, function() {
console.log("monlink6 saved");
}); 

var monper7 = document.getElementById('monper7').value;
chrome.storage.local.set({'monper7' : monper7 }, function() {
console.log("monper1 saved");
}); 
var monlink7 = document.getElementById('monlink7').value;
chrome.storage.local.set({'monlink7' : monlink7 }, function() {
console.log("monlink7 saved");
}); 

var monper8 = document.getElementById('monper8').value;
chrome.storage.local.set({'monper8' : monper8 }, function() {
console.log("monper8 saved");
}); 
var monlink8 = document.getElementById('monlink8').value;
chrome.storage.local.set({'monlink8' : monlink8 }, function() {
console.log("monlink8 saved");
}); 
}

function clear_monAll(){
alert ("Monday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["monper1", "monlink1"], onRemoved);

chrome.storage.local.remove(["monper2", "monlink2"], onRemoved);

chrome.storage.local.remove(["monper3", "monlink3"], onRemoved);

chrome.storage.local.remove(["monper4", "monlink4"], onRemoved);

chrome.storage.local.remove(["monper5", "monlink5"], onRemoved);

chrome.storage.local.remove(["monper6", "monlink6"], onRemoved);

chrome.storage.local.remove(["monper7", "monlink7"], onRemoved);

chrome.storage.local.remove(["monper8", "monlink8"], onRemoved);

 } 
