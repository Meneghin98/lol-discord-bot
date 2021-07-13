const EnvUtils = require('../utils/EnvUtils.js');
const {riot_servers} = require('../defaults.json')
const axios = require('axios')

module.exports = async (summName) => {
    const requestConfig = {
        headers: {
            "X-Riot-Token": EnvUtils.RIOT_API_TOKEN
        }
    }
    
    const res = await axios.get(`https://${riot_servers.EUW1}/lol/summoner/v4/summoners/by-name/${summName}`, requestConfig)
    return res.data
}