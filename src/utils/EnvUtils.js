import dotenv from 'dotenv'
dotenv.config()

function getEnv(envname){
    const env = process.env[envname]

    if(env === undefined) throw new Error(`Missing env variable ${envname}.`)

    return env;
}

const EnvUtils = Object.freeze({
    getEnv: getEnv,
    DISCORD_BOT_TOKEN: 'DISCORD_BOT_TOKEN'
})

export default EnvUtils;