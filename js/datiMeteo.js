

aggiornaDatiMeteo();
setInterval(aggiornaDatiMeteo, 60000);

function aggiornaDatiMeteo() {

    const REQUEST_URL = "https://api.open-meteo.com/v1/forecast?latitude=45.6486&longitude=9.3073&current=temperature_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1";

    const REQUEST = new XMLHttpRequest();

    REQUEST.open("get", REQUEST_URL, true);

    REQUEST.responseType = "json";

    REQUEST.send();

    REQUEST.onload = function () {

        const datiMeteo = REQUEST.response;
        const TEMPERATURA = document.getElementById("TEMPERATURA");
        TEMPERATURA.innerHTML = datiMeteo.current.temperature_2m + "&#176";
        const WEATHER_CODE = document.getElementById("WEATHER_CODE");
        WEATHER_CODE.innerHTML = testoMeteo(datiMeteo.current.weather_code);
        const SUNRISE = document.getElementById("SUNRISE");
        SUNRISE.innerHTML = datiMeteo.daily.sunrise[0].substring(11, 16);
        const SUNSET = document.getElementById("SUNSET");
        SUNSET.innerHTML = datiMeteo.daily.sunset[0].substring(11, 16);
        const WIND_SPEED = document.getElementById("WIND_SPEED");
        WIND_SPEED.innerHTML = datiMeteo.current.wind_speed_10m + " m/s";
    }
}

function testoMeteo(weatherCode) {
    let testo = "";
    switch (weatherCode) {
        case 0: testo = "sereno";
            break;
        case 1:
        case 2: testo = "parz.coperto";
            break;
        case 3: testo = "coperto";
            break;
        case 45:
        case 48: testo = "nebbia";
            break;
        case 51:
        case 53:
        case 55: testo = "pioviggina";
            break;
        case 56:
        case 57: testo = "pioviggina gelata";
            break;
        case 61:
        case 63:
        case 65: testo = "pioggia";
            break;
        case 66:
        case 67: testo = "pioggia gelata";
            break;
        case 71:
        case 73:
        case 75: testo = "neve";
            break;
        case 77: testo = "granelli neve";
            break;
        case 80:
        case 81:
        case 82: testo = "rovesci pioggia";
            break;
        case 85:
        case 86: testo = "rovesci neve";
            break;
        case 95: testo = "temporali";
            break;
        case 96:
        case 99: testo = "grandine";
            break;
        default: testo = "n.p.";
    }
    return testo;
}