const Discord = require ('discord.js');
const bot = new Discord.Client();
const prefix = "/";


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "Kuroh Bot", type: 0 } });
    console.log("Bot Ready !");
});

bot.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("398894341965348874")
    var add = bot.channels.get("398900625720737792")
    if(guild1 == guild.id) {
      add.send(`Aurevoir ${member}, a quitté le serveur **"${guild.name}"** !`);
    } else {
        return 
    }
    });

    bot.on('guildMemberAdd', member => {
        const guild1 = member.guild.id;
        var guild = bot.guilds.get("398894341965348874")
        var add = bot.channels.get("398900625720737792")
        if(guild1 == guild.id) {
          add.sendMessage(`Bienvenue à toi ${member}, et amuse toi bien **${guild.name}** !`);
        } else {
            return 
        }
        });

    bot.on('message', message => {
        if (message.content.startsWith('!say')) {
        var string = (message.content)
        var result = string.replace(/^!say\s/i, " ");
        message.channel.sendMessage(result)
        console.log("Say you !")
        }
          console.log("BOT : [ON]");
    bot.user.setActivity("se reveille");
    }
bot.on("message", message => {
    if (message.content.toLowerCase() === "bonjour")
		message.channel.send("Bonjour !");
        });

bot.login("process.env.TOKEN");
