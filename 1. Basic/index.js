const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.login('MTA2NTk0MDI3MTE0NzI1Nzg2Nw.G5Svpc.hxcUNhkokt3vpOx--N6KpRygDKvtzlKxxpkogo')
