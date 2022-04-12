const Discord = require("discord.js")

const TOKEN = "OTYzMTk3NzI2NDY2NjU0Mjg5.YlSlyQ.h1FB1B6FrotqDizfSo4dbgQ2H-s"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World")
    }
})

client.login(TOKEN)