module.exports = {
    botname: process.env.TWITCH_BOTNAME || 'YeahunterBOT',
    password: process.env.TWITCH_PASSWORD || 'lajos',
    channels: [process.env.TWITCH_CHANNEL || '#yeahunter'],
    twitchApi: {
        clientId: process.env.TWITCH_API_CLIENTID || 'lajos'
    },
    yeahunterApi: {
        url: process.env.YEAHUNTER_API_URL || 'http://localhost:8080'
    }
};