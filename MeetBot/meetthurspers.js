document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savethurs');
clicky1.addEventListener('click', function() {
save_thursAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearthurs');
clicky2.addEventListener('click', function() {
clear_thursAll();
});
}); 


function save_thursAll(){
alert ("Saving Thursday"); 

var thursper1 = document.getElementById('thursper1').value;
chrome.storage.local.set({ 'thursper1': thursper1 }); 

var thurslink1 = document.getElementById('thurslink1').value;
chrome.storage.local.set({ 'thurslink1' : thurslink1 }); 
//not checked 

var thursper2 = document.getElementById('thursper2').value;
chrome.storage.local.set({'thursper2' : thursper2, }, function() {
console.log("thursper2 saved");
}); 
var thurslink2 = document.getElementById('thurslink2').value;
chrome.storage.local.set({'thurslink2' : thurslink2 }, function() {
console.log("thurslink2 saved");
}); 


var thursper3 = document.getElementById('thursper3').value;
chrome.storage.local.set({'thursper3' : thursper3 }, function() {
console.log("thursper3 saved");
}); 
var thurslink3 = document.getElementById('thurslink3').value;
chrome.storage.local.set({'thurslink3' : thurslink3 }, function() {
console.log("thurslink3 saved");
}); 


var thursper4 = document.getElementById('thursper4').value;
chrome.storage.local.set({'thursper4' : thursper4, }, function() {
console.log("thursper4 saved");
}); 
var thurslink4 = document.getElementById('thurslink4').value;
chrome.storage.local.set({'thurslink4' : thurslink4 }, function() {
console.log("thurslink4 saved");
}); 


var thursper5 = document.getElementById('thursper5').value;
chrome.storage.local.set({'thursper5' : thursper5 }, function() {
console.log("thursper5 saved");
}); 
var thurslink5 = document.getElementById('thurslink5').value;
chrome.storage.local.set({'thurslink5' : thurslink5 }, function() {
console.log("thurslink5 saved");
}); 

var thursper6 = document.getElementById('thursper6').value;
chrome.storage.local.set({'thursper6' : thursper6 }, function() {
console.log("thursper6 saved");
}); 
var thurslink6 = document.getElementById('thurslink6').value;
chrome.storage.local.set({'thurslink6' : thurslink6 }, function() {
console.log("thurslink6 saved");
}); 

var thursper7 = document.getElementById('thursper7').value;
chrome.storage.local.set({'thursper7' : thursper7 }, function() {
console.log("thursper1 saved");
}); 
var thurslink7 = document.getElementById('thurslink7').value;
chrome.storage.local.set({'thurslink7' : thurslink7 }, function() {
console.log("thurslink7 saved");
}); 

var thursper8 = document.getElementById('thursper8').value;
chrome.storage.local.set({'thursper8' : thursper8 }, function() {
console.log("thursper8 saved");
}); 
var thurslink8 = document.getElementById('thurslink8').value;
chrome.storage.local.set({'thurslink8' : thurslink8 }, function() {
console.log("thurslink8 saved");
}); 
}

function clear_thursAll(){
alert ("Thursday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["thursper1", "thurslink1"], onRemoved);

chrome.storage.local.remove(["thursper2", "thurslink2"], onRemoved);

chrome.storage.local.remove(["thursper3", "thurslink3"], onRemoved);

chrome.storage.local.remove(["thursper4", "thurslink4"], onRemoved);

chrome.storage.local.remove(["thursper5", "thurslink5"], onRemoved);

chrome.storage.local.remove(["thursper6", "thurslink6"], onRemoved);

chrome.storage.local.remove(["thursper7", "thurslink7"], onRemoved);

chrome.storage.local.remove(["thursper8", "thurslink8"], onRemoved);

 } 
