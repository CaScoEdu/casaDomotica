let datiLampade;

let stanzaSelezionata;

const BASE_URL = "https://cadomotica.free.beeceptor.com"

function displayLampade(stanza) {

    stanzaSelezionata = stanza;

    fetch(BASE_URL + "/lampade")
        .then (response => response.json())
        .then(data => {
            datiLampade = data;

            const DIV_TABLE_DISPOSITIVI = document.getElementById("tableDispositivi");
            DIV_TABLE_DISPOSITIVI.innerHTML = "";

            datiLampade.forEach((LAMPADA, index) => {
                if (LAMPADA.stanza == stanzaSelezionata) {
                    const DIV_LAMPADA = document.createElement("div");
                    DIV_LAMPADA.addEventListener("click", function () {
                        switchLampada(index);
                    });
                    DIV_LAMPADA.setAttribute("class", "dispositivi");
                    const DIV_IMMAGINE = document.createElement("div");
                    const IMG_LAMPADA = document.createElement("img");
                    if (LAMPADA.accesa)
                        IMG_LAMPADA.src = "img/lightBulb_ON.png";
                    else
                        IMG_LAMPADA.src = "img/lightBulb_OFF.png";
                    DIV_IMMAGINE.appendChild(IMG_LAMPADA);
                    DIV_LAMPADA.appendChild(DIV_IMMAGINE);
                    const DIV_NOME = document.createElement("div");
                    DIV_NOME.innerText = LAMPADA.nome;
                    DIV_LAMPADA.appendChild(DIV_NOME);
                    DIV_TABLE_DISPOSITIVI.appendChild(DIV_LAMPADA);
                }
            });
        });
}


async function switchLampada(index) {
    let datiLampada = datiLampade[index];
    datiLampada.accesa = !datiLampada.accesa;

    const url = BASE_URL + '/lampade/' + datiLampada.id;

    const datiLampadaJson = JSON.stringify(datiLampada);

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: datiLampadaJson,
    });

    const text = await response.text();

    console.log(text);

    displayLampade(stanzaSelezionata);
}
