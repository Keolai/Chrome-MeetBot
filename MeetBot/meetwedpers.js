document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savewed');
clicky1.addEventListener('click', function() {
save_wedAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearwed');
clicky2.addEventListener('click', function() {
clear_wedAll();
});
}); 

function save_wedAll(){
alert ("Saving Wednesday"); 

var wedper1 = document.getElementById('wedper1').value;
chrome.storage.local.set({ 'wedper1': wedper1 }); 

var wedlink1 = document.getElementById('wedlink1').value;
chrome.storage.local.set({ 'wedlink1' : wedlink1 }); 
//not checked 

var wedper2 = document.getElementById('wedper2').value;
chrome.storage.local.set({'wedper2' : wedper2, }, function() {
console.log("wedper2 saved");
}); 
var wedlink2 = document.getElementById('wedlink2').value;
chrome.storage.local.set({'wedlink2' : wedlink2 }, function() {
console.log("wedlink2 saved");
}); 


var wedper3 = document.getElementById('wedper3').value;
chrome.storage.local.set({'wedper3' : wedper3 }, function() {
console.log("wedper3 saved");
}); 
var wedlink3 = document.getElementById('wedlink3').value;
chrome.storage.local.set({'wedlink3' : wedlink3 }, function() {
console.log("wedlink3 saved");
}); 


var wedper4 = document.getElementById('wedper4').value;
chrome.storage.local.set({'wedper4' : wedper4, }, function() {
console.log("wedper4 saved");
}); 
var wedlink4 = document.getElementById('wedlink4').value;
chrome.storage.local.set({'wedlink4' : wedlink4 }, function() {
console.log("wedlink4 saved");
}); 


var wedper5 = document.getElementById('wedper5').value;
chrome.storage.local.set({'wedper5' : wedper5 }, function() {
console.log("wedper5 saved");
}); 
var wedlink5 = document.getElementById('wedlink5').value;
chrome.storage.local.set({'wedlink5' : wedlink5 }, function() {
console.log("wedlink5 saved");
}); 

var wedper6 = document.getElementById('wedper6').value;
chrome.storage.local.set({'wedper6' : wedper6 }, function() {
console.log("wedper6 saved");
}); 
var wedlink6 = document.getElementById('wedlink6').value;
chrome.storage.local.set({'wedlink6' : wedlink6 }, function() {
console.log("wedlink6 saved");
}); 

var wedper7 = document.getElementById('wedper7').value;
chrome.storage.local.set({'wedper7' : wedper7 }, function() {
console.log("wedper1 saved");
}); 
var wedlink7 = document.getElementById('wedlink7').value;
chrome.storage.local.set({'wedlink7' : wedlink7 }, function() {
console.log("wedlink7 saved");
}); 

var wedper8 = document.getElementById('wedper8').value;
chrome.storage.local.set({'wedper8' : wedper8 }, function() {
console.log("wedper8 saved");
}); 
var wedlink8 = document.getElementById('wedlink8').value;
chrome.storage.local.set({'wedlink8' : wedlink8 }, function() {
console.log("wedlink8 saved");
}); 
}

function clear_wedAll(){
alert ("Wednesday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["wedper1", "wedlink1"], onRemoved);

chrome.storage.local.remove(["wedper2", "wedlink2"], onRemoved);

chrome.storage.local.remove(["wedper3", "wedlink3"], onRemoved);

chrome.storage.local.remove(["wedper4", "wedlink4"], onRemoved);

chrome.storage.local.remove(["wedper5", "wedlink5"], onRemoved);

chrome.storage.local.remove(["wedper6", "wedlink6"], onRemoved);

chrome.storage.local.remove(["wedper7", "wedlink7"], onRemoved);

chrome.storage.local.remove(["wedper8", "wedlink8"], onRemoved);

 } 
