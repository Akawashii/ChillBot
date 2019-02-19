
//Spikan was there
const Discord = require("discord.js");
const PREFIX = "/"

var bot = new Discord.Client();


bot.on("ready",function() {
	console.log("Yes.")
	bot.user.setActivity("Outage/Bot not working") ;
	bot.user.setStatus("dnd");
});
   
bot.login(bot.login(process.env.TOKEN));
