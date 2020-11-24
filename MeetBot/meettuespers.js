document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savetues');
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
   alert ("Day has been saved!"); 
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('cleartues');
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
    var tuesper1 = document.getElementById('tuesper1').value;
    chrome.storage.local.set({ 'tuesper1': tuesper1 }); 

    var tueslink1 = document.getElementById('tueslink1').value;
    chrome.storage.local.set({ 'tueslink1' : tueslink1 }); 
}
function timeTwo(){
    var tuesper2 = document.getElementById('tuesper2').value;
    chrome.storage.local.set({'tuesper2' : tuesper2, }, function() {
    console.log("tuesper2 saved");
    }); 
    var tueslink2 = document.getElementById('tueslink2').value;
    chrome.storage.local.set({'tueslink2' : tueslink2 }, function() {
    console.log("tueslink2 saved");
    }); 
}
function timeThree(){
    var tuesper3 = document.getElementById('tuesper3').value;
    chrome.storage.local.set({'tuesper3' : tuesper3 }, function() {
    console.log("tuesper3 saved");
    }); 
    var tueslink3 = document.getElementById('tueslink3').value;
    chrome.storage.local.set({'tueslink3' : tueslink3 }, function() {
    console.log("tueslink3 saved");
    }); 
}
function timeFour(){ 
    var tuesper4 = document.getElementById('tuesper4').value;
    chrome.storage.local.set({'tuesper4' : tuesper4, }, function() {
    console.log("tuesper4 saved");
    }); 
    var tueslink4 = document.getElementById('tueslink4').value;
    chrome.storage.local.set({'tueslink4' : tueslink4 }, function() {
    console.log("tueslink4 saved");
    }); 
} 
function timeFive(){
    var tuesper5 = document.getElementById('tuesper5').value;
    chrome.storage.local.set({'tuesper5' : tuesper5 }, function() {
    console.log("tuesper5 saved");
    }); 
    var tueslink5 = document.getElementById('tueslink5').value;
    chrome.storage.local.set({'tueslink5' : tueslink5 }, function() {
    console.log("tueslink5 saved");
    }); 
}
function timeSix(){
    var tuesper6 = document.getElementById('tuesper6').value;
    chrome.storage.local.set({'tuesper6' : tuesper6 }, function() {
    console.log("tuesper6 saved");
    }); 
    var tueslink6 = document.getElementById('tueslink6').value;
    chrome.storage.local.set({'tueslink6' : tueslink6 }, function() {
    console.log("tueslink6 saved");
    }); 
}
    function timeSeven(){
    var tuesper7 = document.getElementById('tuesper7').value;
    chrome.storage.local.set({'tuesper7' : tuesper7 }, function() {
    console.log("tuesper1 saved");
    }); 
    var tueslink7 = document.getElementById('tueslink7').value;
    chrome.storage.local.set({'tueslink7' : tueslink7 }, function() {
    console.log("tueslink7 saved");
    }); 
}
function timeEight(){
    var tuesper8 = document.getElementById('tuesper8').value;
    chrome.storage.local.set({'tuesper8' : tuesper8 }, function() {
    console.log("tuesper8 saved");
    }); 
    var tueslink8 = document.getElementById('tueslink8').value;
    chrome.storage.local.set({'tueslink8' : tueslink8 }, function() {
    console.log("tueslink8 saved");
    }); 
}

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}
function delOne(){
    chrome.storage.local.remove(["tuesper1", "tueslink1"], onRemoved);
}
function delTwo(){
    chrome.storage.local.remove(["tuesper2", "tueslink2"], onRemoved);
}
function delThree(){
    chrome.storage.local.remove(["tuesper3", "tueslink3"], onRemoved);
}
function delFour(){ 
    chrome.storage.local.remove(["tuesper4", "tueslink4"], onRemoved);
} 
function delFive(){
    chrome.storage.local.remove(["tuesper5", "tueslink5"], onRemoved);
}
function delSix(){
    chrome.storage.local.remove(["tuesper6", "tueslink6"], onRemoved);
}
function delSeven(){
    chrome.storage.local.remove(["tuesper7", "tueslink7"], onRemoved);
}
function delEight(){
    chrome.storage.local.remove(["tuesper8", "tueslink8"], onRemoved);
 } 
