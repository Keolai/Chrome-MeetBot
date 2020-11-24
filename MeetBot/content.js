//DESCRIPTION: Script that interacts with the meet page. 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    var check = document.getElementsByClassName('uArJ5e UQuaGc Y5sE8d uyXBBb nS35F M9Bg4d');
    if (check.length > 0) {
        var Message = "bad: ";
    } else {
        var Message = "firing: ";
        main(); 
    }
    sendResponse(Message+JSON.stringify("request"));
}); 
function main(){
     var joinButton;
     onLoad(); 
    
    function onLoad(){
       joinButton = document.getElementsByClassName('NPEfkd RveJvd snByac');
      }

    if (joinButton.length < 2){
       setTimeout(onLoad, 2000); 
        } else {
        click();
    }

function click(){
    
    var settings = document.getElementsByClassName('x95qze');
    if (settings.length > 0 ){ //checks to see if popup exists
       document.getElementsByClassName('x95qze')[0].click(); 
       function exit(){
            document.getElementsByClassName('U26fgb mUbCce fKz7Od Wtw8H kHssdc pPQgvf M9Bg4d')[0].click();
        }
        setTimeout(exit, 1000); 
    }

    document.getElementsByClassName('DPvwYc JnDFsc dMzo5')[0].click(); 
    document.getElementsByClassName('DPvwYc JnDFsc dMzo5')[1].click(); 

    function join(){
     document.getElementsByClassName('NPEfkd RveJvd snByac')[0].click(); 
    }

    setTimeout(join, 1000); 

    } 
}
