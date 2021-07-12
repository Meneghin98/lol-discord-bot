const {lol_version_url, lol_icon_url_template} = require('../defaults.json')
const axios = require('axios')

module.exports = async (iconID) => {
    const versionRes = await axios.get(lol_version_url)
    const latestVersion = versionRes.data[0]

    return lol_icon_url_template.replace("{version}", latestVersion).replace("{id}", iconID)
}