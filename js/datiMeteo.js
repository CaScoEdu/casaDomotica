

aggiornaDatiMeteo();
setInterval(aggiornaDatiMeteo,60000);

function aggiornaDatiMeteo() {
    
    const REQUEST_URL = "data/datiMeteo.json";

    const REQUEST = new XMLHttpRequest();

    REQUEST.open("get", REQUEST_URL, true);

    REQUEST.responseType = "json";
    
    REQUEST.send();

    REQUEST.onload = function () {

        const datiMeteo = REQUEST.response;
        const TEMPERATURA = document.getElementById("TEMPERATURA");
        TEMPERATURA.innerHTML = datiMeteo.current.temperature_2m + "&#176";
    }
}