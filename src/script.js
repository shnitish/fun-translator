var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output"); 

// var customURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function contructURL(text)
{
    return serverURL + "?text=" + text;
};

// Handle the click event of the translate button
function clickHandler()
{
    var input = txtInput.value;
    
    fetch(contructURL(input))
    .then(function(response){
        let responsePromise = response.json();
        return responsePromise;
    })
    .then(function(json){

        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        console.log(translatedText);
    })
    .catch(function(error){
        alert("Something wrong with the server! Try again after some time");
        console.log(error);
    })
};

// call the click handler on the translate button
btnTranslate.addEventListener("click", clickHandler)