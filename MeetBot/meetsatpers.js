document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savesat');
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
var clicky2 = document.getElementById('clearsat');
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
    var satper1 = document.getElementById('satper1').value;
    chrome.storage.local.set({ 'satper1': satper1 }); 

    var satlink1 = document.getElementById('satlink1').value;
    chrome.storage.local.set({ 'satlink1' : satlink1 }); 
}
function timeTwo(){
    var satper2 = document.getElementById('satper2').value;
    chrome.storage.local.set({'satper2' : satper2, }, function() {
    console.log("satper2 saved");
    }); 
    var satlink2 = document.getElementById('satlink2').value;
    chrome.storage.local.set({'satlink2' : satlink2 }, function() {
    console.log("satlink2 saved");
    }); 
}
function timeThree(){
    var satper3 = document.getElementById('satper3').value;
    chrome.storage.local.set({'satper3' : satper3 }, function() {
    console.log("satper3 saved");
    }); 
    var satlink3 = document.getElementById('satlink3').value;
    chrome.storage.local.set({'satlink3' : satlink3 }, function() {
    console.log("satlink3 saved");
    }); 
}
function timeFour(){ 
    var satper4 = document.getElementById('satper4').value;
    chrome.storage.local.set({'satper4' : satper4, }, function() {
    console.log("satper4 saved");
    }); 
    var satlink4 = document.getElementById('satlink4').value;
    chrome.storage.local.set({'satlink4' : satlink4 }, function() {
    console.log("satlink4 saved");
    }); 
} 
function timeFive(){
    var satper5 = document.getElementById('satper5').value;
    chrome.storage.local.set({'satper5' : satper5 }, function() {
    console.log("satper5 saved");
    }); 
    var satlink5 = document.getElementById('satlink5').value;
    chrome.storage.local.set({'satlink5' : satlink5 }, function() {
    console.log("satlink5 saved");
    }); 
}
function timeSix(){
    var satper6 = document.getElementById('satper6').value;
    chrome.storage.local.set({'satper6' : satper6 }, function() {
    console.log("satper6 saved");
    }); 
    var satlink6 = document.getElementById('satlink6').value;
    chrome.storage.local.set({'satlink6' : satlink6 }, function() {
    console.log("satlink6 saved");
    }); 
}
    function timeSeven(){
    var satper7 = document.getElementById('satper7').value;
    chrome.storage.local.set({'satper7' : satper7 }, function() {
    console.log("satper1 saved");
    }); 
    var satlink7 = document.getElementById('satlink7').value;
    chrome.storage.local.set({'satlink7' : satlink7 }, function() {
    console.log("satlink7 saved");
    }); 
}
function timeEight(){
    var satper8 = document.getElementById('satper8').value;
    chrome.storage.local.set({'satper8' : satper8 }, function() {
    console.log("satper8 saved");
    }); 
    var satlink8 = document.getElementById('satlink8').value;
    chrome.storage.local.set({'satlink8' : satlink8 }, function() {
    console.log("satlink8 saved");
    }); 
}

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}
function delOne(){
    chrome.storage.local.remove(["satper1", "satlink1"], onRemoved);
}
function delTwo(){
    chrome.storage.local.remove(["satper2", "satlink2"], onRemoved);
}
function delThree(){
    chrome.storage.local.remove(["satper3", "satlink3"], onRemoved);
}
function delFour(){ 
    chrome.storage.local.remove(["satper4", "satlink4"], onRemoved);
} 
function delFive(){
    chrome.storage.local.remove(["satper5", "satlink5"], onRemoved);
}
function delSix(){
    chrome.storage.local.remove(["satper6", "satlink6"], onRemoved);
}
function delSeven(){
    chrome.storage.local.remove(["satper7", "satlink7"], onRemoved);
}
function delEight(){
    chrome.storage.local.remove(["satper8", "satlink8"], onRemoved);
 } 
