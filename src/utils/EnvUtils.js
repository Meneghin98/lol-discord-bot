const dotenv = require('dotenv');
dotenv.config()

function getEnv(envname){
    const env = process.env[envname]

    if(env === undefined) throw new Error(`Missing env variable ${envname}.`)

    return env;
}

module.exports = Object.freeze({
    DISCORD_BOT_TOKEN: getEnv('DISCORD_BOT_TOKEN'),
    RIOT_API_TOKEN: getEnv('RIOT_API_TOKEN')
})