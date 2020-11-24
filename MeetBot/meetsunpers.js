document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savesun');
clicky1.addEventListener('click', function() {
    delOne();
    delTwo();
    delThree();
    delFour();
    delFive();
    delSix();
    delSeven();
    delEight(); 
    timeOne();
    timeTwo();
    timeThree();
    timeFour();
    timeFive();
    timeSix();
    timeSeven();
    timeEight();
    alert("Day has been saved!"); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('clearsun');
clicky2.addEventListener('click', function() {
    delOne();
    delTwo();
    delThree();
    delFour();
    delFive();
    delSix();
    delSeven();
    delEight(); 
    alert("Day has been reset!");
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi1 = document.getElementById('time1');
clickyi1.addEventListener('click', function() {
    delOne();
    timeOne();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi2 = document.getElementById('time2');
clickyi2.addEventListener('click', function() {
    delTwo();
    timeTwo();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi3 = document.getElementById('time3');
clickyi3.addEventListener('click', function() {
    delThree();
    timeThree();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi4 = document.getElementById('time4');
clickyi4.addEventListener('click', function() {
    delFour();
    timeFour(); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi5 = document.getElementById('time5');
clickyi5.addEventListener('click', function() {
    delFive();
    timeFive(); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi6 = document.getElementById('time6');
clickyi6.addEventListener('click', function() {
    delSix();
    timeSix(); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi7 = document.getElementById('time7');
clickyi7.addEventListener('click', function() {
    delSeven();
    timeSeven(); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clickyi8 = document.getElementById('time8');
clickyi8.addEventListener('click', function() {
    delEight();
    timeEight(); 
});
}); 


function timeOne() {
    var sunper1 = document.getElementById('sunper1').value;
    chrome.storage.local.set({ 'sunper1': sunper1 }); 

    var sunlink1 = document.getElementById('sunlink1').value;
    chrome.storage.local.set({ 'sunlink1' : sunlink1 }); 
}
function timeTwo(){
    var sunper2 = document.getElementById('sunper2').value;
    chrome.storage.local.set({'sunper2' : sunper2, }, function() {
    console.log("sunper2 saved");
    }); 
    var sunlink2 = document.getElementById('sunlink2').value;
    chrome.storage.local.set({'sunlink2' : sunlink2 }, function() {
    console.log("sunlink2 saved");
    }); 
}
function timeThree(){
    var sunper3 = document.getElementById('sunper3').value;
    chrome.storage.local.set({'sunper3' : sunper3 }, function() {
    console.log("sunper3 saved");
    }); 
    var sunlink3 = document.getElementById('sunlink3').value;
    chrome.storage.local.set({'sunlink3' : sunlink3 }, function() {
    console.log("sunlink3 saved");
    }); 
}
function timeFour(){ 
    var sunper4 = document.getElementById('sunper4').value;
    chrome.storage.local.set({'sunper4' : sunper4, }, function() {
    console.log("sunper4 saved");
    }); 
    var sunlink4 = document.getElementById('sunlink4').value;
    chrome.storage.local.set({'sunlink4' : sunlink4 }, function() {
    console.log("sunlink4 saved");
    }); 
} 
function timeFive(){
    var sunper5 = document.getElementById('sunper5').value;
    chrome.storage.local.set({'sunper5' : sunper5 }, function() {
    console.log("sunper5 saved");
    }); 
    var sunlink5 = document.getElementById('sunlink5').value;
    chrome.storage.local.set({'sunlink5' : sunlink5 }, function() {
    console.log("sunlink5 saved");
    }); 
}
function timeSix(){
    var sunper6 = document.getElementById('sunper6').value;
    chrome.storage.local.set({'sunper6' : sunper6 }, function() {
    console.log("sunper6 saved");
    }); 
    var sunlink6 = document.getElementById('sunlink6').value;
    chrome.storage.local.set({'sunlink6' : sunlink6 }, function() {
    console.log("sunlink6 saved");
    }); 
}
    function timeSeven(){
    var sunper7 = document.getElementById('sunper7').value;
    chrome.storage.local.set({'sunper7' : sunper7 }, function() {
    console.log("sunper1 saved");
    }); 
    var sunlink7 = document.getElementById('sunlink7').value;
    chrome.storage.local.set({'sunlink7' : sunlink7 }, function() {
    console.log("sunlink7 saved");
    }); 
}
function timeEight(){
    var sunper8 = document.getElementById('sunper8').value;
    chrome.storage.local.set({'sunper8' : sunper8 }, function() {
    console.log("sunper8 saved");
    }); 
    var sunlink8 = document.getElementById('sunlink8').value;
    chrome.storage.local.set({'sunlink8' : sunlink8 }, function() {
    console.log("sunlink8 saved");
    }); 
}

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}
function delOne(){
    chrome.storage.local.remove(["sunper1", "sunlink1"], onRemoved);
}
function delTwo(){
    chrome.storage.local.remove(["sunper2", "sunlink2"], onRemoved);
}
function delThree(){
    chrome.storage.local.remove(["sunper3", "sunlink3"], onRemoved);
}
function delFour(){ 
    chrome.storage.local.remove(["sunper4", "sunlink4"], onRemoved);
} 
function delFive(){
    chrome.storage.local.remove(["sunper5", "sunlink5"], onRemoved);
}
function delSix(){
    chrome.storage.local.remove(["sunper6", "sunlink6"], onRemoved);
}
function delSeven(){
    chrome.storage.local.remove(["sunper7", "sunlink7"], onRemoved);
}
function delEight(){
    chrome.storage.local.remove(["sunper8", "sunlink8"], onRemoved);
 } 
