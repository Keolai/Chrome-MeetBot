document.addEventListener('DOMContentLoaded', function() {
var clicky1 = document.getElementById('Sun');
clicky1.addEventListener('click', function() {
sun();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky2 = document.getElementById('Mon');
clicky2.addEventListener('click', function() {
mon();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky3 = document.getElementById('Tues');
clicky3.addEventListener('click', function() {
tues();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky4 = document.getElementById('Wed');
clicky4.addEventListener('click', function() {
wed();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky5 = document.getElementById('Thurs');
clicky5.addEventListener('click', function() {
thurs();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky6 = document.getElementById('Fri');
clicky6.addEventListener('click', function() {
fri();
});
}); 

document.addEventListener('DOMContentLoaded', function() {
var clicky7 = document.getElementById('Sat');
clicky7.addEventListener('click', function() {
sat();
});
}); 

function sun(){ 
var sunLone; var sunTone;
var sunLtwo; var sunTtwo;
var sunLthree; var sunTthree;
var sunLfour; var sunTfour;
var sunLfive; var sunTfive;
var sunLsix; var sunTsix;
var sunLseven; var sunTseven;
var sunLeight; var sunTeight; 

loadTimeOneSun();
function loadTimeOneSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper1", function(gettimeone) {
            resolve(gettimeone.sunper1);
         })
    });
}
populateTimeOneSun(); 
function populateTimeOneSun(){
    loadTimeOneSun().then(function(value) {
        sunTone = value;
       })  
    } 

setLinkOneSun(); 
function setLinkOneSun(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink1", function(getlinkone) {
            resolve(getlinkone.sunlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        sunLone = value;
    })
} 


} //end of time1
loadTimeTwoSun();
function loadTimeTwoSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper2", function(gettimeTwo) {
            resolve(gettimeTwo.sunper2);
         })
    });
}
populateTimeTwoSun(); 
function populateTimeTwoSun(){
    loadTimeTwoSun().then(function(value) {
        sunTtwo= value;
       })
    }

setLinkTwoSun(); 
function setLinkTwoSun(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink2", function(getlinkTwo) {
            resolve(getlinkTwo.sunlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       sunLtwo = value;
    })
} 
}//end of time2
loadTimeThreeSun();
function loadTimeThreeSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper3", function(gettimeThree) {
            resolve(gettimeThree.sunper3);
         })
    });
}
populateTimeThreeSun(); 
function populateTimeThreeSun(){
    loadTimeThreeSun().then(function(value) {
        sunTthree= value;
       })
    }

setLinkThreeSun(); 
function setLinkThreeSun(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink3", function(getlinkThree) {
            resolve(getlinkThree.sunlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        sunLthree = value;
    })
} 
}//end of time3
loadTimefourSun();
function loadTimefourSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper4", function(gettimefour) {
            resolve(gettimefour.sunper4);
         })
    });
}
populateTimefourSun(); 
function populateTimefourSun(){
    loadTimefourSun().then(function(value) {
        sunTfour= value;
       })
    }

setLinkfourSun(); 
function setLinkfourSun(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink4", function(getlinkfour) {
            resolve(getlinkfour.sunlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        sunLfour = value;
    })
} 
}//end of time4
loadTimeFiveSun();
function loadTimeFiveSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper5", function(gettimeFive) {
            resolve(gettimeFive.sunper5);
         })
    });
}
populateTimeFiveSun(); 
function populateTimeFiveSun(){
    loadTimeFiveSun().then(function(value) {
        sunTfive= value;
       })
    }

setLinkFiveSun(); 
function setLinkFiveSun(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink5", function(getlinkFive) {
            resolve(getlinkFive.sunlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        sunLfive = value;
    })
} 
}//end of time5
loadTimeSixSun();
function loadTimeSixSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper6", function(gettimeSix) {
            resolve(gettimeSix.sunper6);
         })
    });
}
populateTimeSixSun(); 
function populateTimeSixSun(){
    loadTimeSixSun().then(function(value) {
        sunTsix= value;
       })
    }

setLinkSixSun(); 
function setLinkSixSun(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink6", function(getlinkSix) {
            resolve(getlinkSix.sunlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        sunLsix = value;
    })
} 
}//end of time6
loadTimeSevenSun();
function loadTimeSevenSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper7", function(gettimeSeven) {
            resolve(gettimeSeven.sunper7);
         })
    });
}
populateTimeSevenSun(); 
function populateTimeSevenSun(){
    loadTimeSevenSun().then(function(value) {
       sunTseven= value;
       setLinkSevenSun(); 
       })
    }

function setLinkSevenSun(){
console.log("coom"); 
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink7", function(getlinkSeven) {
            resolve(getlinkSeven.sunlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        sunLseven = value;
        loadTimeEightSun();
        message(); 
    })
} 
}//end of time7
function loadTimeEightSun() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunper8", function(gettimeEight) {
            resolve(gettimeEight.sunper8);
         })
    });
}
populateTimeEightSun(); 
function populateTimeEightSun(){
    loadTimeEightSun().then(function(value) {
        sunTeight = value;
       
       })
    }

setLinkEightSun(); 
function setLinkEightSun(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("sunlink8", function(getlinkEight) {
            resolve(getlinkEight.sunlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        sunLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Sunday\nTime One- " + sunTone + "   Link One- " + sunLone +
"\nTime Two- " + sunTtwo + "   Link Two- " + sunLtwo + "\nTime Three- " + sunTthree +
"   Link Three- " + sunLthree + "\nTime four- " + sunTfour + "   Link Four- " + sunLfour +
"\nTime Five- " + sunTfive + "   Link Five- " + sunLfive + "\nTime Six- " + sunTsix +
"   Link Six- " + sunLsix + "\nTime Seven- " + sunTseven + "   Link Seven- " + sunLseven
+ "\nTime Eight- " + sunTeight + "   Link Eight- " + sunLeight + "\n";
alert(message); } 
} 
function mon(){ 
var monLone; var monTone;
var monLtwo; var monTtwo;
var monLthree; var monTthree;
var monLfour; var monTfour;
var monLfive; var monTfive;
var monLsix; var monTsix;
var monLseven; var monTseven;
var monLeight; var monTeight; 

loadTimeOneMon();
function loadTimeOneMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper1", function(gettimeone) {
            resolve(gettimeone.monper1);
         })
    });
}
populateTimeOneMon(); 
function populateTimeOneMon(){
    loadTimeOneMon().then(function(value) {
        monTone= value;
       })
    }

setLinkOneMon(); 
function setLinkOneMon(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink1", function(getlinkone) {
            resolve(getlinkone.monlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        monLone = value;
    })
} 


} //end of time1
loadTimeTwoMon();
function loadTimeTwoMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper2", function(gettimeTwo) {
            resolve(gettimeTwo.monper2);
         })
    });
}
populateTimeTwoMon(); 
function populateTimeTwoMon(){
    loadTimeTwoMon().then(function(value) {
        monTtwo= value;
       })
    }

setLinkTwoMon(); 
function setLinkTwoMon(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink2", function(getlinkTwo) {
            resolve(getlinkTwo.monlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       monLtwo = value;
    })
} 
}//end of time2
loadTimeThreeMon();
function loadTimeThreeMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper3", function(gettimeThree) {
            resolve(gettimeThree.monper3);
         })
    });
}
populateTimeThreeMon(); 
function populateTimeThreeMon(){
    loadTimeThreeMon().then(function(value) {
        monTthree= value;
       })
    }

setLinkThreeMon(); 
function setLinkThreeMon(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink3", function(getlinkThree) {
            resolve(getlinkThree.monlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        monLthree = value;
    })
} 
}//end of time3
loadTimefourMon();
function loadTimefourMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper4", function(gettimefour) {
            resolve(gettimefour.monper4);
         })
    });
}
populateTimefourMon(); 
function populateTimefourMon(){
    loadTimefourMon().then(function(value) {
        monTfour= value;
       })
    }

setLinkfourMon(); 
function setLinkfourMon(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink4", function(getlinkfour) {
            resolve(getlinkfour.monlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        monLfour = value;
    })
} 
}//end of time4
loadTimeFiveMon();
function loadTimeFiveMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper5", function(gettimeFive) {
            resolve(gettimeFive.monper5);
         })
    });
}
populateTimeFiveMon(); 
function populateTimeFiveMon(){
    loadTimeFiveMon().then(function(value) {
        monTfive= value;
       })
    }

setLinkFiveMon(); 
function setLinkFiveMon(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink5", function(getlinkFive) {
            resolve(getlinkFive.monlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        monLfive = value;
    })
} 
}//end of time5
loadTimeSixMon();
function loadTimeSixMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper6", function(gettimeSix) {
            resolve(gettimeSix.monper6);
         })
    });
}
populateTimeSixMon(); 
function populateTimeSixMon(){
    loadTimeSixMon().then(function(value) {
        monTsix= value;
       })
    }

setLinkSixMon(); 
function setLinkSixMon(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink6", function(getlinkSix) {
            resolve(getlinkSix.monlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        monLsix = value;
    })
} 
}//end of time6
loadTimeSevenMon();
function loadTimeSevenMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper7", function(gettimeSeven) {
            resolve(gettimeSeven.monper7);
         })
    });
}
populateTimeSevenMon(); 
function populateTimeSevenMon(){
    loadTimeSevenMon().then(function(value) {
       monTseven= value;
       setLinkSevenMon(); 
       })
    }

function setLinkSevenMon(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink7", function(getlinkSeven) {
            resolve(getlinkSeven.monlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        monLseven = value;
        loadTimeEightMon();
        message();
    })
} 
}//end of time7
function loadTimeEightMon() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monper8", function(gettimeEight) {
            resolve(gettimeEight.monper8);
         })
    });
}
populateTimeEightMon(); 
function populateTimeEightMon(){
    loadTimeEightMon().then(function(value) {
        monTeight = value;
       
       })
    }

setLinkEightMon(); 
function setLinkEightMon(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("monlink8", function(getlinkEight) {
            resolve(getlinkEight.monlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        monLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Monday\nTime One- " + monTone + "   Link One- " + monLone +
"\nTime Two- " + monTtwo + "   Link Two- " + monLtwo + "\nTime Three- " + monTthree +
"   Link Three- " + monLthree + "\nTime four- " + monTfour + "   Link Four- " + monLfour +
"\nTime Five- " + monTfive + "   Link Five- " + monLfive + "\nTime Six- " + monTsix +
"   Link Six- " + monLsix + "\nTime Seven- " + monTseven + "   Link Seven- " + monLseven
+ "\nTime Eight- " + monTeight + "   Link Eight- " + monLeight + "\n";
alert(message); } 
} 
function tues(){ 
var tuesLone; var tuesTone;
var tuesLtwo; var tuesTtwo;
var tuesLthree; var tuesTthree;
var tuesLfour; var tuesTfour;
var tuesLfive; var tuesTfive;
var tuesLsix; var tuesTsix;
var tuesLseven; var tuesTseven;
var tuesLeight; var tuesTeight; 

loadTimeOneTues();
function loadTimeOneTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper1", function(gettimeone) {
            resolve(gettimeone.tuesper1);
         })
    });
}
populateTimeOneTues(); 
function populateTimeOneTues(){
    loadTimeOneTues().then(function(value) {
        tuesTone= value;
       })
    }

setLinkOneTues(); 
function setLinkOneTues(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink1", function(getlinkone) {
            resolve(getlinkone.tueslink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        tuesLone = value;
    })
} 


} //end of time1
loadTimeTwoTues();
function loadTimeTwoTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper2", function(gettimeTwo) {
            resolve(gettimeTwo.tuesper2);
         })
    });
}
populateTimeTwoTues(); 
function populateTimeTwoTues(){
    loadTimeTwoTues().then(function(value) {
        tuesTtwo= value;
       })
    }

setLinkTwoTues(); 
function setLinkTwoTues(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink2", function(getlinkTwo) {
            resolve(getlinkTwo.tueslink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       tuesLtwo = value;
    })
} 
}//end of time2
loadTimeThreeTues();
function loadTimeThreeTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper3", function(gettimeThree) {
            resolve(gettimeThree.tuesper3);
         })
    });
}
populateTimeThreeTues(); 
function populateTimeThreeTues(){
    loadTimeThreeTues().then(function(value) {
        tuesTthree= value;
       })
    }

setLinkThreeTues(); 
function setLinkThreeTues(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink3", function(getlinkThree) {
            resolve(getlinkThree.tueslink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        tuesLthree = value;
    })
} 
}//end of time3
loadTimefourTues();
function loadTimefourTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper4", function(gettimefour) {
            resolve(gettimefour.tuesper4);
         })
    });
}
populateTimefourTues(); 
function populateTimefourTues(){
    loadTimefourTues().then(function(value) {
        tuesTfour= value;
       })
    }

setLinkfourTues(); 
function setLinkfourTues(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink4", function(getlinkfour) {
            resolve(getlinkfour.tueslink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        tuesLfour = value;
    })
} 
}//end of time4
loadTimeFiveTues();
function loadTimeFiveTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper5", function(gettimeFive) {
            resolve(gettimeFive.tuesper5);
         })
    });
}
populateTimeFiveTues(); 
function populateTimeFiveTues(){
    loadTimeFiveTues().then(function(value) {
        tuesTfive= value;
       })
    }

setLinkFiveTues(); 
function setLinkFiveTues(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink5", function(getlinkFive) {
            resolve(getlinkFive.tueslink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        tuesLfive = value;
    })
} 
}//end of time5
loadTimeSixTues();
function loadTimeSixTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper6", function(gettimeSix) {
            resolve(gettimeSix.tuesper6);
         })
    });
}
populateTimeSixTues(); 
function populateTimeSixTues(){
    loadTimeSixTues().then(function(value) {
        tuesTsix= value;
       })
    }

setLinkSixTues(); 
function setLinkSixTues(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink6", function(getlinkSix) {
            resolve(getlinkSix.tueslink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        tuesLsix = value;
    })
} 
}//end of time6
loadTimeSevenTues();
function loadTimeSevenTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper7", function(gettimeSeven) {
            resolve(gettimeSeven.tuesper7);
         })
    });
}
populateTimeSevenTues(); 
function populateTimeSevenTues(){
    loadTimeSevenTues().then(function(value) {
       tuesTseven= value;
       setLinkSevenTues(); 
       })
    }

function setLinkSevenTues(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink7", function(getlinkSeven) {
            resolve(getlinkSeven.tueslink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        tuesLseven = value;
        loadTimeEightTues(); 
        message(); 
    })
} 
}//end of time7
function loadTimeEightTues() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tuesper8", function(gettimeEight) {
            resolve(gettimeEight.tuesper8);
         })
    });
}
populateTimeEightTues(); 
function populateTimeEightTues(){
    loadTimeEightTues().then(function(value) {
        tuesTeight = value;
       
       })
    }

setLinkEightTues(); 
function setLinkEightTues(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("tueslink8", function(getlinkEight) {
            resolve(getlinkEight.tueslink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        tuesLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Tuesday\nTime One- " + tuesTone + "   Link One- " + tuesLone +
"\nTime Two- " + tuesTtwo + "   Link Two- " + tuesLtwo + "\nTime Three- " + tuesTthree +
"   Link Three- " + tuesLthree + "\nTime four- " + tuesTfour + "   Link Four- " + tuesLfour +
"\nTime Five- " + tuesTfive + "   Link Five- " + tuesLfive + "\nTime Six- " + tuesTsix +
"   Link Six- " + tuesLsix + "\nTime Seven- " + tuesTseven + "   Link Seven- " + tuesLseven
+ "\nTime Eight- " + tuesTeight + "   Link Eight- " + tuesLeight + "\n";
alert(message); } 
} 
function wed(){ 
var wedLone; var wedTone;
var wedLtwo; var wedTtwo;
var wedLthree; var wedTthree;
var wedLfour; var wedTfour;
var wedLfive; var wedTfive;
var wedLsix; var wedTsix;
var wedLseven; var wedTseven;
var wedLeight; var wedTeight; 

loadTimeOneWed();
function loadTimeOneWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper1", function(gettimeone) {
            resolve(gettimeone.wedper1);
         })
    });
}
populateTimeOneWed(); 
function populateTimeOneWed(){
    loadTimeOneWed().then(function(value) {
        wedTone= value;
       })
    }

setLinkOneWed(); 
function setLinkOneWed(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink1", function(getlinkone) {
            resolve(getlinkone.wedlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        wedLone = value;
    })
} 


} //end of time1
loadTimeTwoWed();
function loadTimeTwoWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper2", function(gettimeTwo) {
            resolve(gettimeTwo.wedper2);
         })
    });
}
populateTimeTwoWed(); 
function populateTimeTwoWed(){
    loadTimeTwoWed().then(function(value) {
        wedTtwo= value;
       })
    }

setLinkTwoWed(); 
function setLinkTwoWed(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink2", function(getlinkTwo) {
            resolve(getlinkTwo.wedlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       wedLtwo = value;
    })
} 
}//end of time2
loadTimeThreeWed();
function loadTimeThreeWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper3", function(gettimeThree) {
            resolve(gettimeThree.wedper3);
         })
    });
}
populateTimeThreeWed(); 
function populateTimeThreeWed(){
    loadTimeThreeWed().then(function(value) {
        wedTthree= value;
       })
    }

setLinkThreeWed(); 
function setLinkThreeWed(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink3", function(getlinkThree) {
            resolve(getlinkThree.wedlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        wedLthree = value;
    })
} 
}//end of time3
loadTimefourWed();
function loadTimefourWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper4", function(gettimefour) {
            resolve(gettimefour.wedper4);
         })
    });
}
populateTimefourWed(); 
function populateTimefourWed(){
    loadTimefourWed().then(function(value) {
        wedTfour= value;
       })
    }

setLinkfourWed(); 
function setLinkfourWed(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink4", function(getlinkfour) {
            resolve(getlinkfour.wedlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        wedLfour = value;
    })
} 
}//end of time4
loadTimeFiveWed();
function loadTimeFiveWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper5", function(gettimeFive) {
            resolve(gettimeFive.wedper5);
         })
    });
}
populateTimeFiveWed(); 
function populateTimeFiveWed(){
    loadTimeFiveWed().then(function(value) {
        wedTfive= value;
       })
    }

setLinkFiveWed(); 
function setLinkFiveWed(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink5", function(getlinkFive) {
            resolve(getlinkFive.wedlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        wedLfive = value;
    })
} 
}//end of time5
loadTimeSixWed();
function loadTimeSixWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper6", function(gettimeSix) {
            resolve(gettimeSix.wedper6);
         })
    });
}
populateTimeSixWed(); 
function populateTimeSixWed(){
    loadTimeSixWed().then(function(value) {
        wedTsix= value;
       })
    }

setLinkSixWed(); 
function setLinkSixWed(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink6", function(getlinkSix) {
            resolve(getlinkSix.wedlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        wedLsix = value;
    })
} 
}//end of time6
loadTimeSevenWed();
function loadTimeSevenWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper7", function(gettimeSeven) {
            resolve(gettimeSeven.wedper7);
         })
    });
}
populateTimeSevenWed(); 
function populateTimeSevenWed(){
    loadTimeSevenWed().then(function(value) {
       wedTseven= value;
       setLinkSevenWed(); 
       })
    }

function setLinkSevenWed(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink7", function(getlinkSeven) {
            resolve(getlinkSeven.wedlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        wedLseven = value;
        loadTimeEightWed();
        message(); 
    })
} 
}//end of time7

function loadTimeEightWed() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedper8", function(gettimeEight) {
            resolve(gettimeEight.wedper8);
         })
    });
}
populateTimeEightWed(); 
function populateTimeEightWed(){
    loadTimeEightWed().then(function(value) {
        wedTeight = value;
       
       })
    }

setLinkEightWed(); 
function setLinkEightWed(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("wedlink8", function(getlinkEight) {
            resolve(getlinkEight.wedlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        wedLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Wednesday\nTime One- " + wedTone + "   Link One- " + wedLone +
"\nTime Two- " + wedTtwo + "   Link Two- " + wedLtwo + "\nTime Three- " + wedTthree +
"   Link Three- " + wedLthree + "\nTime four- " + wedTfour + "   Link Four- " + wedLfour +
"\nTime Five- " + wedTfive + "   Link Five- " + wedLfive + "\nTime Six- " + wedTsix +
"   Link Six- " + wedLsix + "\nTime Seven- " + wedTseven + "   Link Seven- " + wedLseven
+ "\nTime Eight- " + wedTeight + "   Link Eight- " + wedLeight + "\n";
alert(message); } 
} 
function thurs(){ 
var thursLone; var thursTone;
var thursLtwo; var thursTtwo;
var thursLthree; var thursTthree;
var thursLfour; var thursTfour;
var thursLfive; var thursTfive;
var thursLsix; var thursTsix;
var thursLseven; var thursTseven;
var thursLeight; var thursTeight; 

loadTimeOneThurs();
function loadTimeOneThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper1", function(gettimeone) {
            resolve(gettimeone.thursper1);
         })
    });
}
populateTimeOneThurs(); 
function populateTimeOneThurs(){
    loadTimeOneThurs().then(function(value) {
        thursTone= value;
       })
    }

setLinkOneThurs(); 
function setLinkOneThurs(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink1", function(getlinkone) {
            resolve(getlinkone.thurslink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        thursLone = value;
    })
} 


} //end of time1
loadTimeTwoThurs();
function loadTimeTwoThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper2", function(gettimeTwo) {
            resolve(gettimeTwo.thursper2);
         })
    });
}
populateTimeTwoThurs(); 
function populateTimeTwoThurs(){
    loadTimeTwoThurs().then(function(value) {
        thursTtwo= value;
       })
    }

setLinkTwoThurs(); 
function setLinkTwoThurs(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink2", function(getlinkTwo) {
            resolve(getlinkTwo.thurslink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       thursLtwo = value;
    })
} 
}//end of time2
loadTimeThreeThurs();
function loadTimeThreeThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper3", function(gettimeThree) {
            resolve(gettimeThree.thursper3);
         })
    });
}
populateTimeThreeThurs(); 
function populateTimeThreeThurs(){
    loadTimeThreeThurs().then(function(value) {
        thursTthree= value;
       })
    }

setLinkThreeThurs(); 
function setLinkThreeThurs(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink3", function(getlinkThree) {
            resolve(getlinkThree.thurslink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        thursLthree = value;
    })
} 
}//end of time3
loadTimefourThurs();
function loadTimefourThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper4", function(gettimefour) {
            resolve(gettimefour.thursper4);
         })
    });
}
populateTimefourThurs(); 
function populateTimefourThurs(){
    loadTimefourThurs().then(function(value) {
        thursTfour= value;
       })
    }

setLinkfourThurs(); 
function setLinkfourThurs(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink4", function(getlinkfour) {
            resolve(getlinkfour.thurslink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        thursLfour = value;
    })
} 
}//end of time4
loadTimeFiveThurs();
function loadTimeFiveThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper5", function(gettimeFive) {
            resolve(gettimeFive.thursper5);
         })
    });
}
populateTimeFiveThurs(); 
function populateTimeFiveThurs(){
    loadTimeFiveThurs().then(function(value) {
        thursTfive= value;
       })
    }

setLinkFiveThurs(); 
function setLinkFiveThurs(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink5", function(getlinkFive) {
            resolve(getlinkFive.thurslink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        thursLfive = value;
    })
} 
}//end of time5
loadTimeSixThurs();
function loadTimeSixThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper6", function(gettimeSix) {
            resolve(gettimeSix.thursper6);
         })
    });
}
populateTimeSixThurs(); 
function populateTimeSixThurs(){
    loadTimeSixThurs().then(function(value) {
        thursTsix= value;
       })
    }

setLinkSixThurs(); 
function setLinkSixThurs(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink6", function(getlinkSix) {
            resolve(getlinkSix.thurslink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        thursLsix = value;
    })
} 
}//end of time6
loadTimeSevenThurs();
function loadTimeSevenThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper7", function(gettimeSeven) {
            resolve(gettimeSeven.thursper7);
         })
    });
}
populateTimeSevenThurs(); 
function populateTimeSevenThurs(){
    loadTimeSevenThurs().then(function(value) {
       thursTseven= value;
       setLinkSevenThurs(); 
       })
    }

function setLinkSevenThurs(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink7", function(getlinkSeven) {
            resolve(getlinkSeven.thurslink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        thursLseven = value;
        loadTimeEightThurs();
        message(); 
    })
} 
}//end of time7
function loadTimeEightThurs() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thursper8", function(gettimeEight) {
            resolve(gettimeEight.thursper8);
         })
    });
}
populateTimeEightThurs(); 
function populateTimeEightThurs(){
    loadTimeEightThurs().then(function(value) {
        thursTeight = value;
       
       })
    }

setLinkEightThurs(); 
function setLinkEightThurs(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("thurslink8", function(getlinkEight) {
            resolve(getlinkEight.thurslink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        thursLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Thursday\nTime One- " + thursTone + "   Link One- " + thursLone +
"\nTime Two- " + thursTtwo + "   Link Two- " + thursLtwo + "\nTime Three- " + thursTthree +
"   Link Three- " + thursLthree + "\nTime four- " + thursTfour + "   Link Four- " + thursLfour +
"\nTime Five- " + thursTfive + "   Link Five- " + thursLfive + "\nTime Six- " + thursTsix +
"   Link Six- " + thursLsix + "\nTime Seven- " + thursTseven + "   Link Seven- " + thursLseven
+ "\nTime Eight- " + thursTeight + "   Link Eight- " + thursLeight + "\n";
alert(message); } 
}
function fri(){ 
var friLone; var friTone;
var friLtwo; var friTtwo;
var friLthree; var friTthree;
var friLfour; var friTfour;
var friLfive; var friTfive;
var friLsix; var friTsix;
var friLseven; var friTseven;
var friLeight; var friTeight; 

loadTimeOneFri();
function loadTimeOneFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper1", function(gettimeone) {
            resolve(gettimeone.friper1);
         })
    });
}
populateTimeOneFri(); 
function populateTimeOneFri(){
    loadTimeOneFri().then(function(value) {
        friTone= value;
       })
    }

setLinkOneFri(); 
function setLinkOneFri(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink1", function(getlinkone) {
            resolve(getlinkone.frilink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        friLone = value;
    })
} 


} //end of time1
loadTimeTwoFri();
function loadTimeTwoFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper2", function(gettimeTwo) {
            resolve(gettimeTwo.friper2);
         })
    });
}
populateTimeTwoFri(); 
function populateTimeTwoFri(){
    loadTimeTwoFri().then(function(value) {
        friTtwo= value;
       })
    }

setLinkTwoFri(); 
function setLinkTwoFri(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink2", function(getlinkTwo) {
            resolve(getlinkTwo.frilink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       friLtwo = value;
    })
} 
}//end of time2
loadTimeThreeFri();
function loadTimeThreeFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper3", function(gettimeThree) {
            resolve(gettimeThree.friper3);
         })
    });
}
populateTimeThreeFri(); 
function populateTimeThreeFri(){
    loadTimeThreeFri().then(function(value) {
        friTthree= value;
       })
    }

setLinkThreeFri(); 
function setLinkThreeFri(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink3", function(getlinkThree) {
            resolve(getlinkThree.frilink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        friLthree = value;
    })
} 
}//end of time3
loadTimefourFri();
function loadTimefourFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper4", function(gettimefour) {
            resolve(gettimefour.friper4);
         })
    });
}
populateTimefourFri(); 
function populateTimefourFri(){
    loadTimefourFri().then(function(value) {
        friTfour= value;
       })
    }

setLinkfourFri(); 
function setLinkfourFri(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink4", function(getlinkfour) {
            resolve(getlinkfour.frilink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        friLfour = value;
    })
} 
}//end of time4
loadTimeFiveFri();
function loadTimeFiveFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper5", function(gettimeFive) {
            resolve(gettimeFive.friper5);
         })
    });
}
populateTimeFiveFri(); 
function populateTimeFiveFri(){
    loadTimeFiveFri().then(function(value) {
        friTfive= value;
       })
    }

setLinkFiveFri(); 
function setLinkFiveFri(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink5", function(getlinkFive) {
            resolve(getlinkFive.frilink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        friLfive = value;
    })
} 
}//end of time5
loadTimeSixFri();
function loadTimeSixFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper6", function(gettimeSix) {
            resolve(gettimeSix.friper6);
         })
    });
}
populateTimeSixFri(); 
function populateTimeSixFri(){
    loadTimeSixFri().then(function(value) {
        friTsix= value;
       })
    }

setLinkSixFri(); 
function setLinkSixFri(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink6", function(getlinkSix) {
            resolve(getlinkSix.frilink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        friLsix = value;
    })
} 
}//end of time6
loadTimeSevenFri();
function loadTimeSevenFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper7", function(gettimeSeven) {
            resolve(gettimeSeven.friper7);
         })
    });
}
populateTimeSevenFri(); 
function populateTimeSevenFri(){
    loadTimeSevenFri().then(function(value) {
       friTseven= value;
       setLinkSevenFri(); 
       })
    }

function setLinkSevenFri(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink7", function(getlinkSeven) {
            resolve(getlinkSeven.frilink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        friLseven = value;
        loadTimeEightFri();
        message(); 
    })
} 
}//end of time7
function loadTimeEightFri() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("friper8", function(gettimeEight) {
            resolve(gettimeEight.friper8);
         })
    });
}
populateTimeEightFri(); 
function populateTimeEightFri(){
    loadTimeEightFri().then(function(value) {
        friTeight = value;
       
       })
    }

setLinkEightFri(); 
function setLinkEightFri(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("frilink8", function(getlinkEight) {
            resolve(getlinkEight.frilink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        friLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Friday\nTime One- " + friTone + "   Link One- " + friLone +
"\nTime Two- " + friTtwo + "   Link Two- " + friLtwo + "\nTime Three- " + friTthree +
"   Link Three- " + friLthree + "\nTime four- " + friTfour + "   Link Four- " + friLfour +
"\nTime Five- " + friTfive + "   Link Five- " + friLfive + "\nTime Six- " + friTsix +
"   Link Six- " + friLsix + "\nTime Seven- " + friTseven + "   Link Seven- " + friLseven
+ "\nTime Eight- " + friTeight + "   Link Eight- " + friLeight + "\n";
alert(message); } 
}
function sat(){ 
var satLone; var satTone;
var satLtwo; var satTtwo;
var satLthree; var satTthree;
var satLfour; var satTfour;
var satLfive; var satTfive;
var satLsix; var satTsix;
var satLseven; var satTseven;
var satLeight; var satTeight; 

loadTimeOneSat();
function loadTimeOneSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper1", function(gettimeone) {
            resolve(gettimeone.satper1);
         })
    });
}
populateTimeOneSat(); 
function populateTimeOneSat(){
    loadTimeOneSat().then(function(value) {
        satTone= value;
       })
    }

setLinkOneSat(); 
function setLinkOneSat(){
loadLinkOne(); 
function loadLinkOne() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink1", function(getlinkone) {
            resolve(getlinkone.satlink1);
         })
    });
}
populateLinkOne(); 
function populateLinkOne(){
    loadLinkOne().then(function(value) {
        satLone = value;
    })
} 


} //end of time1
loadTimeTwoSat();
function loadTimeTwoSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper2", function(gettimeTwo) {
            resolve(gettimeTwo.satper2);
         })
    });
}
populateTimeTwoSat(); 
function populateTimeTwoSat(){
    loadTimeTwoSat().then(function(value) {
        satTtwo= value;
       })
    }

setLinkTwoSat(); 
function setLinkTwoSat(){
loadLinkTwo(); 
function loadLinkTwo() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink2", function(getlinkTwo) {
            resolve(getlinkTwo.satlink2);
         })
    });
}
populateLinkTwo(); 
function populateLinkTwo(){
    loadLinkTwo().then(function(value) {
       satLtwo = value;
    })
} 
}//end of time2
loadTimeThreeSat();
function loadTimeThreeSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper3", function(gettimeThree) {
            resolve(gettimeThree.satper3);
         })
    });
}
populateTimeThreeSat(); 
function populateTimeThreeSat(){
    loadTimeThreeSat().then(function(value) {
        satTthree= value;
       })
    }

setLinkThreeSat(); 
function setLinkThreeSat(){
loadLinkThree(); 
function loadLinkThree() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink3", function(getlinkThree) {
            resolve(getlinkThree.satlink3);
         })
    });
}
populateLinkThree(); 
function populateLinkThree(){
    loadLinkThree().then(function(value) {
        satLthree = value;
    })
} 
}//end of time3
loadTimefourSat();
function loadTimefourSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper4", function(gettimefour) {
            resolve(gettimefour.satper4);
         })
    });
}
populateTimefourSat(); 
function populateTimefourSat(){
    loadTimefourSat().then(function(value) {
        satTfour= value;
       })
    }

setLinkfourSat(); 
function setLinkfourSat(){
loadLinkfour(); 
function loadLinkfour() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink4", function(getlinkfour) {
            resolve(getlinkfour.satlink4);
         })
    });
}
populateLinkfour(); 
function populateLinkfour(){
    loadLinkfour().then(function(value) {
        satLfour = value;
    })
} 
}//end of time4
loadTimeFiveSat();
function loadTimeFiveSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper5", function(gettimeFive) {
            resolve(gettimeFive.satper5);
         })
    });
}
populateTimeFiveSat(); 
function populateTimeFiveSat(){
    loadTimeFiveSat().then(function(value) {
        satTfive= value;
       })
    }

setLinkFiveSat(); 
function setLinkFiveSat(){
loadLinkFive(); 
function loadLinkFive() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink5", function(getlinkFive) {
            resolve(getlinkFive.satlink5);
         })
    });
}
populateLinkFive(); 
function populateLinkFive(){
    loadLinkFive().then(function(value) {
        satLfive = value;
    })
} 
}//end of time5
loadTimeSixSat();
function loadTimeSixSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper6", function(gettimeSix) {
            resolve(gettimeSix.satper6);
         })
    });
}
populateTimeSixSat(); 
function populateTimeSixSat(){
    loadTimeSixSat().then(function(value) {
        satTsix= value;
       })
    }

setLinkSixSat(); 
function setLinkSixSat(){
loadLinkSix(); 
function loadLinkSix() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink6", function(getlinkSix) {
            resolve(getlinkSix.satlink6);
         })
    });
}
populateLinkSix(); 
function populateLinkSix(){
    loadLinkSix().then(function(value) {
        satLsix = value;
    })
} 
}//end of time6
loadTimeSevenSat();
function loadTimeSevenSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper7", function(gettimeSeven) {
            resolve(gettimeSeven.satper7);
         })
    });
}
populateTimeSevenSat(); 
function populateTimeSevenSat(){
    loadTimeSevenSat().then(function(value) {
       satTseven= value;
       setLinkSevenSat(); 
       })
    }

function setLinkSevenSat(){
loadLinkSeven(); 
function loadLinkSeven() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink7", function(getlinkSeven) {
            resolve(getlinkSeven.satlink7);
         })
    });
}
populateLinkSeven(); 
function populateLinkSeven(){
    loadLinkSeven().then(function(value) {
        satLseven = value;
        loadTimeEightSat();
        message(); 
    })
} 
}//end of time7
function loadTimeEightSat() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satper8", function(gettimeEight) {
            resolve(gettimeEight.satper8);
         })
    });
}
populateTimeEightSat(); 
function populateTimeEightSat(){
    loadTimeEightSat().then(function(value) {
        satTeight = value;
       
       })
    }

setLinkEightSat(); 
function setLinkEightSat(){
loadLinkEight(); 
function loadLinkEight() {
    return new Promise(function(resolve, reject) {
        chrome.storage.local.get("satlink8", function(getlinkEight) {
            resolve(getlinkEight.satlink8);
         })
    });
}
populateLinkEight(); 
function populateLinkEight(){
    loadLinkEight().then(function(value) {
        satLeight = value;
    })
} 
}//end of time8
function message(){
var message = "Saturday\nTime One- " + satTone + "   Link One- " + satLone +
"\nTime Two- " + satTtwo + "   Link Two- " + satLtwo + "\nTime Three- " + satTthree +
"   Link Three- " + satLthree + "\nTime four- " + satTfour + "   Link Four- " + satLfour +
"\nTime Five- " + satTfive + "   Link Five- " + satLfive + "\nTime Six- " + satTsix +
"   Link Six- " + satLsix + "\nTime Seven- " + satTseven + "   Link Seven- " + satLseven
+ "\nTime Eight- " + satTeight + "   Link Eight- " + satLeight + "\n";
alert(message); } 
}  
