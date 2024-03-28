let testtext = "whatever";
let starttime, endtime;

function starttest(){
    
    document.getElementById('inputText').value = testtext;
    // set result and timer 
    document.getElementById('output').innerHTML = "";
    starttime = new Date().getTime();

    //change button and text funtionality
    var button = document.getElementById('btn');
    button.innerHTML = "end test";
    button.onclick = endTest;


}