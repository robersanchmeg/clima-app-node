const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4f8557ba6f2bf0bd11a905fabaf3bbfe&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}