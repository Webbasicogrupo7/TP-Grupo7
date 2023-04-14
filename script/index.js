/*const URL = 'https://ws.smn.gob.ar/map_items/weather';*/
const URL = 'https://ws.smn.gob.ar/map_items/weather';
fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data[21].weather.tempDesc);
        const tempActual = data[21].weather.tempDesc;
        const temp = document.querySelector("#temperatura");
        console.log(temp.textContent);
        temp.textContent = temp.textContent + " " + tempActual;

    })