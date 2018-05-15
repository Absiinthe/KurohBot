const Discord = require("discord.js");

const client = new Discord.Client();
var prefix = "<";


client.on("ready" , () => {
    console.log("BOT : [ON]");
    client.user.setActivity("se reveille");
});

client.on("message", message => {
    if (message.content.toLowerCase() === "bonjour") message.channel.send("Bonjour !");
}


});

client.login(process.env.TOKEN)