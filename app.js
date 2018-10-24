const argv = require('./config/yargs').argv;


const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${direccion} es de ${ temperatura}`;
    } catch (e) {
        return `No se puedo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));