//This code is a test and ONLY a test.Do not do an error like let that code if the bot is finished.
//Right now,the bot is not ready to be a real bot.If he become a real bot,CuteBot will be here for the tests.
//Spikan was there
const Discord = require("discord.js"); //No need to explain.We just require discord.js.
//const TOKEN = "Your token here" //do not share your token
const PREFIX = "/"
var hug = [
    "https://cdn.discordapp.com/attachments/330336168422014977/508702572199018506/hug-SywetdQvZ.gif",
    "https://cdn.discordapp.com/attachments/330336168422014977/508695521301364758/hug-BJ0UovdUM.gif",
    "https://cdn.discordapp.com/attachments/330336168422014977/508695441152409600/hug-rJaog0FtZ.gif",
    "https://cdn.discordapp.com/attachments/330336426451402753/506786258379341835/hug-Sk-xxs3C-.gif",
    "https://cdn.discordapp.com/attachments/330336168422014977/509761862683066379/hug-Hk0yFumwW.gif",


];
var kiss = [
  "https://cdn.discordapp.com/attachments/330336168422014977/509761578342678548/kiss-ryoW3T_vW.gif",
  "https://cdn.discordapp.com/attachments/330336168422014977/509761781951102976/kiss-H1e7nadP-.gif",
  "https://cdn.discordapp.com/attachments/330336168422014977/509762090995548161/3288198890_1_2_ubCOqOwV.gif",
  "https://cdn.discordapp.com/attachments/330336168422014977/509762168099569664/Toradora_best_scene.gif",
  "https://cdn.discordapp.com/attachments/330336168422014977/509762379156815882/kiss_1.gif",
  "https://cdn.discordapp.com/attachments/330336168422014977/509763386939146260/kiss_3.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509763000941412353/ryEvhTOwW.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509762745575407636/BydoCy9yG.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509763351824302080/H1a42auvb.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509763542359080980/kiss-BJLP3a_Pb.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509764987733147649/kiss-HJkxXNtjZ.gif",
  "https://cdn.discordapp.com/attachments/330336285870915586/509765070625046529/tenor.gif"
];
var fortunes = [
    "Yeah.I think.",
    "No.I don't think so.",
    "Maybe.I don't really know.",
    "What the fuck.No.",
    "...Hell no."
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready",function() {
	console.log("Ready to test.")
	bot.user.setActivity("i'M a NiGgEr ") ;
	bot.user.setStatus("dnd");
});

bot.on("message", function(message) {
    if (message.author .equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

//tests

        case "ping":
             message.channel.sendMessage("PoOoOOoOoOOoOonNnnNnNgGgGGgGgG");
        break;
        case "test" :
            message.channel.sendMessage("Only working for Akawashii.")
            break; 
            //Info?
            case "invite" :
            message.channel.send("Put some chill vibes in your server.")
            case "userinfo" :

            //Music
        case "play" :
            message.channel.sendMessage("Can't play music.")
        case "stop":
        message.channel.sendMessage("Can't play music.")


        //Mod commands
        case "ban":
        var mem = message.mentions.members.first();
        if (!message.member.hasPermission("BAN_MEMBERS"))
            send.message.sendmmessage("You can't use that."); 
            if(!mem)
            return message.channel.send({"embed": { 
                "color": 14393835,
                "footer": {
                "icon_url": "https://cdn.discordapp.com/avatars/496375401585704961/f75c0ad7134c670da350f9c61aa55a6c.png?size=2048",
                "text": "Ban command | ChillBot | Created by Akawashii."
                },
                 
                "author": {
                "name": "Ban command"
               },
               "fields": [
                {
                  "name": "Usage:",
                  "value": "/ban @user"
                },
                {
                    "name": "Example:",
                    "value": "/ban @ChillBot#8803 deviant"
                  },
                  {
                    "name": "Permissions required:",
                    "value": "Ban members."
                  }
                ]
              }
            });
        

            if (message.member.hasPermission("BAN_MEMBERS"))
        var mem = message.mentions.members.first();
        var mc = message.content.split(" ")[30];
       mem.ban(mc).then (() => {
           message.channel.sendMessage("**" + mem.displayName + "** is succesfully banned from the server.Reason:`` " + mc +"``. Byebye.")
       }).catch(e => {
           message.channel.sendMessage("I can't ban this guy,please verify if I can ban before retrying.[ban members permission]If I can,you have to dm my creator. ``/info`` for know how contact her.")
       });
            break;

        case "kick": 
        if (!message.member.hasPermission("KICK_MEMBERS"))
           return message.channel.send("You can't use that.");
           var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 14393835,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/496375401585704961/f75c0ad7134c670da350f9c61aa55a6c.png?size=2048",
               "text": "Kick command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Kick command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/kick @user"
               },
               {
                   "name": "Example:",
                   "value": "/kick @ChillBot#8803 deviant"
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Kick members."
                 }
               ]
             }
           });
        if (message.member.hasPermission("KICK_MEMBERS"))

        var mem = message.mentions.members.first();
       mem.kick().then (() => {
           message.channel.sendMessage("**" + mem.displayName + "** is succesfully kicked from the server.Byebye.")
       }).catch(e => {
           message.channel.sendMessage("I can't kick this guy,please verify if I can kick before retrying.[kick members permission]If I can,you have to dm my creator. ``/info`` for know how contact her.")
       });
            break;
           
            case "mute":
            if (!message.member.hasPermission("MANAGE_ROLES"))
            return message.channel.sendMessage("You can't use that.");
            var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 14393835,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/496375401585704961/f75c0ad7134c670da350f9c61aa55a6c.png?size=2048",
               "text": "Mute command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Mute command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/mute @user"
               },
               {
                   "name": "Example:",
                   "value": "/mute @ChillBot#8803 spam"
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Manage roles."
                 }
               ]
             }
           });
            if (message.member.hasPermission("MANAGE_ROLES"))
        var mem = message.mentions.members.first();
        if(message.guild.roles.find("name", "mute")) {
            mem.addRole(message.guild.roles.find("name", 'mute'));
            message.channel.sendMessage(mem.displayName + " is now muted.").then(() => {

            }).catch(e => {
                message.channel.send("I can't mute this guy,please verify if I can mute before retrying.[manage roles permisson]If I can,you have to dm my creator. ``/info`` for know how contact her.")
            })
        }
            break;
            case "unmute":
            if (!message.member.hasPermission("MANAGE_ROLES"))
           return send.message.sendMessage("You can't use that.");
           var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 14393835,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/496375401585704961/f75c0ad7134c670da350f9c61aa55a6c.png?size=2048",
               "text": "Unmute command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Unmute command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/unmute @user"
               },
               {
                   "name": "Example:",
                   "value": "/unmute @ChillBot#8803 now he's nice."
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Manage roles."
                 }
               ]
             }
           });

            
            if(message.guild.roles.find("name", "mute")) {
                var mem = message.mentions.members.first();
                mem.removeRole(message.guild.roles.find("name", 'mute'));
                message.channel.sendMessage(mem.displayName + " is now unmuted.").then(() => {
    
                }).catch(e => {
                    message.channel.send("I can't unmute this guy,please verify if I can unmute before retrying.[Manage roles permisson].If I can,you have to dm my creator. ``/info`` for know how contact her.")
                });
            };
            
                break;

            case "purge":
            if (!message.author.hasPermission("DELETE_MESSAGES")) {
              return  message.channel.sendMessage("You can't use that.");
            };
            
            //if the user can
            if (message.member.hasPermission("DELETE_MESSAGES")) {
           
                var mc = message.content.split(" ")[1];
                message.channel.bulkDelete(mc);
                break;

            };
                //Other commands
            case "help" :
            message.channel.send({"embed": {
                      "color": 14393835,
                      "footer": {
                        "icon_url": "https://cdn.discordapp.com/avatars/496375401585704961/f75c0ad7134c670da350f9c61aa55a6c.png?size=2048",
                        "text": "Help | ChillBot | Created by Akawashii."
                      },
                      
                      "author": {
                        "name": "Asked for help?There you go."
                      },
                      "fields": [
                        {
                          "name": "Mod commands :",
                          "value": "``ban``,``unban``,``kick``,``mute``,``unmute``,``purge``"
                        },
                        {
                          "name": "Info commands :",
                          "value": "``info``,``help``,``avatar``,``token``,``invite``,``auditlog``,"
                        },
                        {
                          "name": "Other commands idk?",
                          "value": "``hug``,``kiss``,``marry``,``ping``,``test``,``bae``,``chill``,``8ball``,"
                        },
                        {
                          "name": " Music commands (Still in work,wont work.)",
                          "value": "``play``,``skip``,``stop``,``join ``,``leave``",
                          "inline": false
                        }
                      ]
                    }
                  });
            break;
  
              case "avatar":
		    const member = message.mentions.members.first();
			if (!member) return message.channel.send("Here,your beautiful avatar,like you asked. " + message.author.avatarURL);
				
			  message.channel.send("Here,**" + member.displayName + "**'s avatar." + member.user.avatarURL);
            break; 
            
        case "bae": 
        message.channel.sendMessage("That's bae. https://www.youtube.com/watch?v=Woorod1gJ_w")
        break;
        case "info":
        var mem = message.author
        var author = message.author
        message.channel.send({"embed": { 
            "description": "My creator,Akawashii,own a [Nitro Discord server](https://discord.gg/uucWDrP).She have a [Youtube Channel](https://www.youtube.com/channel/UCLewV8AA2hLpti5QiqbgKZg?view_as=subscriber) too.  For some support,dm her [here](https://twitter.com/akawashii).",
            "color": 14393835,
            "footer": {
              "icon_url": "",
              "text": "ChillBot | Created by Akawashii."
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/442795664632446978/506492319466520587/unknown.png"
            },
            "author": {
              "name": "Asked for infos,"+ (message.author.username) + "?",
              "icon_url": (author.avatarURL)
            },
            "fields": [
              {
                "name": "Who is ChillBot? Why **ChillBot**?",
                "value": "ChillBot is a Chill Bot.He can ban and kick you,without any doubts.Why ChillBot?Because Chill music>all music."
              },
              {
                "name": "Who is Akawashii?",
                "value": "Akawashii is a person who is the dev of the bot."
              },
              {
                "name": "Who helped Akawashii to dev this bot?",
                "value": "[Spikan](https://www.twitch.tv/spikan26) helped Akawashii to dev ChillBot.Also,[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) documentation helped her a lot too."
              },
              {
                "name": "Want to help me?",
                "value": "Dm me [here](https://twitter.com/akawashii).",
                "inline": false
              },
              {
                "name": "Want to let me know some ideas ?",
                "value": "Watch the 'Want to help me?' section. ",
                "inline": false
              }
            ]
        
        }});
        break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that.")
       break;
   case "hug":
   var mem = message.mentions.members.first();
   if (!mem) return message.channel.sendMessage("Please mention a member.")
              if (args[1]) message.channel.sendMessage("**" + mem.displayName + "**, you have been hugged by **" + message.author.username  + "** " + hug[Math.floor(Math.random() * hug.length)]);
       break;
       case "kiss" : 
       var mem = message.mentions.members.first();
       if (!mem) return message.channel.sendMessage("Please mention a member.")
                  if (args[1]) message.channel.sendMessage("**" + mem.displayName + "**, you have been kissed by **" + message.author.username  + "** " + kiss[Math.floor(Math.random() * kiss.length)]);
           break;
   case "chill" :
       message.channel.sendMessage("Here,some good music.https://www.youtube.com/playlist?list=PLPdz_b9o4gwWvB7q3E9-OvtaalZHVa3jM");
       break; 
        case "marry" :
        message.channel.sendMessage("Chill.I can't marry you now.");
        break;
        case "emotelist" :
        var server = servers[message.guild.id];
        message.channel.sendMessage("There is a list of the emotes for this server.Enjoy.");
        message.channel.sendMessage(server.emojis);
        break;
        case "token" :
        message.channel.sendMessage("No.")
        //audit log
        case "auditlog" :
        message.channel.sendMessage("-Added ``kiss`` and ``hug`` command.Going to be upgrade soon.")
   
        break;

        //default
        default:
        message.channel.sendMessage("It's not a command.Maybe try ``/help``?")


    };

});
//bot.login(TOKEN); //(TOKEN) will be our token.
bot.login(bot.login(process.env.TOKEN));
