

let REQUEST_URL = "data/datiMeteo.json";

let REQUEST = new XMLHttpRequest();

REQUEST.open("get", REQUEST_URL, true);

REQUEST.responseType = "json";

REQUEST.send();

REQUEST.onload = function () {

}

REQUEST.onload = function () {
    
    const datiMeteo = REQUEST.response;
    const TEMPERATURA = document.getElementById("TEMPERATURA");
    TEMPERATURA.innerHTML= datiMeteo.current.temperature_2m;
   
}