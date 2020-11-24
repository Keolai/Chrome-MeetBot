document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savewed');
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
var clicky2 = document.getElementById('clearwed');
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
    var wedper1 = document.getElementById('wedper1').value;
    chrome.storage.local.set({ 'wedper1': wedper1 }); 

    var wedlink1 = document.getElementById('wedlink1').value;
    chrome.storage.local.set({ 'wedlink1' : wedlink1 }); 
}
function timeTwo(){
    var wedper2 = document.getElementById('wedper2').value;
    chrome.storage.local.set({'wedper2' : wedper2, }, function() {
    console.log("wedper2 saved");
    }); 
    var wedlink2 = document.getElementById('wedlink2').value;
    chrome.storage.local.set({'wedlink2' : wedlink2 }, function() {
    console.log("wedlink2 saved");
    }); 
}
function timeThree(){
    var wedper3 = document.getElementById('wedper3').value;
    chrome.storage.local.set({'wedper3' : wedper3 }, function() {
    console.log("wedper3 saved");
    }); 
    var wedlink3 = document.getElementById('wedlink3').value;
    chrome.storage.local.set({'wedlink3' : wedlink3 }, function() {
    console.log("wedlink3 saved");
    }); 
}
function timeFour(){ 
    var wedper4 = document.getElementById('wedper4').value;
    chrome.storage.local.set({'wedper4' : wedper4, }, function() {
    console.log("wedper4 saved");
    }); 
    var wedlink4 = document.getElementById('wedlink4').value;
    chrome.storage.local.set({'wedlink4' : wedlink4 }, function() {
    console.log("wedlink4 saved");
    }); 
} 
function timeFive(){
    var wedper5 = document.getElementById('wedper5').value;
    chrome.storage.local.set({'wedper5' : wedper5 }, function() {
    console.log("wedper5 saved");
    }); 
    var wedlink5 = document.getElementById('wedlink5').value;
    chrome.storage.local.set({'wedlink5' : wedlink5 }, function() {
    console.log("wedlink5 saved");
    }); 
}
function timeSix(){
    var wedper6 = document.getElementById('wedper6').value;
    chrome.storage.local.set({'wedper6' : wedper6 }, function() {
    console.log("wedper6 saved");
    }); 
    var wedlink6 = document.getElementById('wedlink6').value;
    chrome.storage.local.set({'wedlink6' : wedlink6 }, function() {
    console.log("wedlink6 saved");
    }); 
}
    function timeSeven(){
    var wedper7 = document.getElementById('wedper7').value;
    chrome.storage.local.set({'wedper7' : wedper7 }, function() {
    console.log("wedper1 saved");
    }); 
    var wedlink7 = document.getElementById('wedlink7').value;
    chrome.storage.local.set({'wedlink7' : wedlink7 }, function() {
    console.log("wedlink7 saved");
    }); 
}
function timeEight(){
    var wedper8 = document.getElementById('wedper8').value;
    chrome.storage.local.set({'wedper8' : wedper8 }, function() {
    console.log("wedper8 saved");
    }); 
    var wedlink8 = document.getElementById('wedlink8').value;
    chrome.storage.local.set({'wedlink8' : wedlink8 }, function() {
    console.log("wedlink8 saved");
    }); 
}

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}
function delOne(){
    chrome.storage.local.remove(["wedper1", "wedlink1"], onRemoved);
}
function delTwo(){
    chrome.storage.local.remove(["wedper2", "wedlink2"], onRemoved);
}
function delThree(){
    chrome.storage.local.remove(["wedper3", "wedlink3"], onRemoved);
}
function delFour(){ 
    chrome.storage.local.remove(["wedper4", "wedlink4"], onRemoved);
} 
function delFive(){
    chrome.storage.local.remove(["wedper5", "wedlink5"], onRemoved);
}
function delSix(){
    chrome.storage.local.remove(["wedper6", "wedlink6"], onRemoved);
}
function delSeven(){
    chrome.storage.local.remove(["wedper7", "wedlink7"], onRemoved);
}
function delEight(){
    chrome.storage.local.remove(["wedper8", "wedlink8"], onRemoved);
 } 
