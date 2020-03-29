const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log) */

/* clima.getClima(40.419998, -3.700000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
    //Salida 
    //El clima de XXXXX es de XXXXX
    //No se pudo determinar el clima de XXXXXX
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);