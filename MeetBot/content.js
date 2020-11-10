//DESCRIPTION: Script that interacts with the meet page. 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
    var check = document.getElementsByClassName('uArJ5e UQuaGc Y5sE8d uyXBBb nS35F M9Bg4d');
    if (check.length > 0) {
    var Message = "bad URL: ";
    } else {
    var Message = "firing: ";
    openLink(); 
    }
    sendResponse(Message+JSON.stringify("request"));
});
function openLink(){

var settings = document.getElementsByClassName('x95qze');

if (settings.length > 0 ){ //checks to see if popup exists
//the settings popup on the bottom confuses the script, this gets rid of it 
document.getElementsByClassName('x95qze')[0].click(); 
    function exit(){
    document.getElementsByClassName('GmuOkf')[0].click(); 
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
