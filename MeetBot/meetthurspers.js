document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('savethurs');
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
var clicky2 = document.getElementById('clearthurs');
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
    var thursper1 = document.getElementById('thursper1').value;
    chrome.storage.local.set({ 'thursper1': thursper1 }); 

    var thurslink1 = document.getElementById('thurslink1').value;
    chrome.storage.local.set({ 'thurslink1' : thurslink1 }); 
}
function timeTwo(){
    var thursper2 = document.getElementById('thursper2').value;
    chrome.storage.local.set({'thursper2' : thursper2, }, function() {
    console.log("thursper2 saved");
    }); 
    var thurslink2 = document.getElementById('thurslink2').value;
    chrome.storage.local.set({'thurslink2' : thurslink2 }, function() {
    console.log("thurslink2 saved");
    }); 
}
function timeThree(){
    var thursper3 = document.getElementById('thursper3').value;
    chrome.storage.local.set({'thursper3' : thursper3 }, function() {
    console.log("thursper3 saved");
    }); 
    var thurslink3 = document.getElementById('thurslink3').value;
    chrome.storage.local.set({'thurslink3' : thurslink3 }, function() {
    console.log("thurslink3 saved");
    }); 
}
function timeFour(){ 
    var thursper4 = document.getElementById('thursper4').value;
    chrome.storage.local.set({'thursper4' : thursper4, }, function() {
    console.log("thursper4 saved");
    }); 
    var thurslink4 = document.getElementById('thurslink4').value;
    chrome.storage.local.set({'thurslink4' : thurslink4 }, function() {
    console.log("thurslink4 saved");
    }); 
} 
function timeFive(){
    var thursper5 = document.getElementById('thursper5').value;
    chrome.storage.local.set({'thursper5' : thursper5 }, function() {
    console.log("thursper5 saved");
    }); 
    var thurslink5 = document.getElementById('thurslink5').value;
    chrome.storage.local.set({'thurslink5' : thurslink5 }, function() {
    console.log("thurslink5 saved");
    }); 
}
function timeSix(){
    var thursper6 = document.getElementById('thursper6').value;
    chrome.storage.local.set({'thursper6' : thursper6 }, function() {
    console.log("thursper6 saved");
    }); 
    var thurslink6 = document.getElementById('thurslink6').value;
    chrome.storage.local.set({'thurslink6' : thurslink6 }, function() {
    console.log("thurslink6 saved");
    }); 
}
    function timeSeven(){
    var thursper7 = document.getElementById('thursper7').value;
    chrome.storage.local.set({'thursper7' : thursper7 }, function() {
    console.log("thursper1 saved");
    }); 
    var thurslink7 = document.getElementById('thurslink7').value;
    chrome.storage.local.set({'thurslink7' : thurslink7 }, function() {
    console.log("thurslink7 saved");
    }); 
}
function timeEight(){
    var thursper8 = document.getElementById('thursper8').value;
    chrome.storage.local.set({'thursper8' : thursper8 }, function() {
    console.log("thursper8 saved");
    }); 
    var thurslink8 = document.getElementById('thurslink8').value;
    chrome.storage.local.set({'thurslink8' : thurslink8 }, function() {
    console.log("thurslink8 saved");
    }); 
}

function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  }
}
function delOne(){
    chrome.storage.local.remove(["thursper1", "thurslink1"], onRemoved);
}
function delTwo(){
    chrome.storage.local.remove(["thursper2", "thurslink2"], onRemoved);
}
function delThree(){
    chrome.storage.local.remove(["thursper3", "thurslink3"], onRemoved);
}
function delFour(){ 
    chrome.storage.local.remove(["thursper4", "thurslink4"], onRemoved);
} 
function delFive(){
    chrome.storage.local.remove(["thursper5", "thurslink5"], onRemoved);
}
function delSix(){
    chrome.storage.local.remove(["thursper6", "thurslink6"], onRemoved);
}
function delSeven(){
    chrome.storage.local.remove(["thursper7", "thurslink7"], onRemoved);
}
function delEight(){
    chrome.storage.local.remove(["thursper8", "thurslink8"], onRemoved);
 } 
