document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savefri');
clicky1.addEventListener('click', function() {
save_friAll();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearfri');
clicky2.addEventListener('click', function() {
clear_friAll();
});
}); 

function save_friAll(){
alert ("Saving Friday"); 

var friper1 = document.getElementById('friper1').value;
chrome.storage.local.set({ 'friper1': friper1 }); 
var frilink1 = document.getElementById('frilink1').value;
chrome.storage.local.set({ 'frilink1' : frilink1 }); 
 
var friper2 = document.getElementById('friper2').value;
chrome.storage.local.set({'friper2' : friper2, }); 
var frilink2 = document.getElementById('frilink2').value;
chrome.storage.local.set({'frilink2' : frilink2 }); 

var friper3 = document.getElementById('friper3').value;
chrome.storage.local.set({'friper3' : friper3 }); 
var frilink3 = document.getElementById('frilink3').value;
chrome.storage.local.set({'frilink3' : frilink3 }); 


var friper4 = document.getElementById('friper4').value;
chrome.storage.local.set({'friper4' : friper4, }); 
var frilink4 = document.getElementById('frilink4').value;
chrome.storage.local.set({'frilink4' : frilink4 }); 


var friper5 = document.getElementById('friper5').value;
chrome.storage.local.set({'friper5' : friper5 }); 
var frilink5 = document.getElementById('frilink5').value;
chrome.storage.local.set({'frilink5' : frilink5 }); 

var friper6 = document.getElementById('friper6').value;
chrome.storage.local.set({'friper6' : friper6 }); 
var frilink6 = document.getElementById('frilink6').value;
chrome.storage.local.set({'frilink6' : frilink6 }); 

var friper7 = document.getElementById('friper7').value;
chrome.storage.local.set({'friper7' : friper7 }); 
var frilink7 = document.getElementById('frilink7').value;
chrome.storage.local.set({'frilink7' : frilink7 }); 

var friper8 = document.getElementById('friper8').value;
chrome.storage.local.set({'friper8' : friper8 }); 
var frilink8 = document.getElementById('frilink8').value;
chrome.storage.local.set({'frilink8' : frilink8 }); 
}

function clear_friAll(){
alert ("Friday has been reset"); 

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}

chrome.storage.local.remove(["friper1", "frilink1"], onRemoved);

chrome.storage.local.remove(["friper2", "frilink2"], onRemoved);

chrome.storage.local.remove(["friper3", "frilink3"], onRemoved);

chrome.storage.local.remove(["friper4", "frilink4"], onRemoved);

chrome.storage.local.remove(["friper5", "frilink5"], onRemoved);

chrome.storage.local.remove(["friper6", "frilink6"], onRemoved);

chrome.storage.local.remove(["friper7", "frilink7"], onRemoved);

chrome.storage.local.remove(["friper8", "frilink8"], onRemoved);

 } 
