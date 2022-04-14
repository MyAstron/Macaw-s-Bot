const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hola mundo')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const Discord = require("discord.js");
const client = new Discord.Client();

function presence() {
  client.user.setPresence({
    status: "idle",
    activity: {
      name: " Macaw's Mods || mcw!help",
      type: "PLAYING"
    }
  })
}
client.on("ready", () => {
  console.log("He we go!!");
  presence();
});

let prefix = process.env['prefix']

client.on("message", async(message) => {
  const Config = require('./config.js')
  const args = message.content.slice(prefix.length).trim().split(/ +g/);
  const command = args.shift();
  // let redes = ;
  let roles = [prefix+"rolInfo", prefix+"roleInfo", prefix+"role", prefix+"rol"];
  let bots = [prefix+"botInfo", prefix+"bot"];
  let channels = [prefix+"channelInfo", prefix+"channel"];
  let users = [prefix+"userInfo", prefix+"user"];
  let servers = [prefix+"serverInfo", prefix+"server"];
    let faqs = [prefix+"faq", prefix+"FAQ"];
  let contador = message.content.toLowerCase();
  
  /*
   *      Command Parameter's:
   *        - cmd.use(Discord, message, Config)
   *            # Client
   *            # args
   *            # %command_use%
   *            # command
   *            # prefix
   *            # %mod%
  */
  
    if (Config.redes.some(sociales => command == sociales)) { 
      //  Network's Command
        let cmd = require('./cmd/networks.js')
      cmd.use(Discord, message, Config)
    } else
    if (faqs.some(faqs => contador.includes(faqs))) { /*FAQ's Command*/
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({dynamic: true}))
        .setTitle(`**__<:feather_right:855233493365424128>  FAQ - MACAW'S - SKETCH  <:feather_left:855233831984824330>__**`).setURL(message.url)
        .addFields({
          "name": "**<:question:854384102144212992>** Do you plan to port your mods to Fabric?",
          "value": "**<:answer:854384101917196308> ** Probably yes, not very soon though."
        },
        {
          "name": "**<:question:854384102144212992>** Do you have any plans on downporting to 1.12.2 Forge?",
          "value": "**<:answer:854384101917196308> ** Not likely, since 1.12.2 is the least one played."
        },
        {
          "name": "**<:question:854384102144212992>** Can I use your mods in my modpack?",
          "value": "**<:answer:854384101917196308> ** Yes, but if you are making it public you have to credit/list me for my mods."
        },
        {
          "name": "**<:question:854384102144212992>**Why are you supporting 1.14 , 1.15 still?",
          "value": "**<:answer:854384101917196308> ** Atleast for now they are quite easy to be backported to."
        },
        {
          "name": "**<:question:854384102144212992>** Are you planning to include BOP addon for variations?",
          "value": "**<:answer:854384101917196308> ** Later in the future, yes."
        })
        .setColor('2887ff')
        .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/854381108300480542/emoji66.png?width=450&height=450")
        .setFooter('Page 1/2 • I hope this helps you ', 'https://media.discordapp.net/attachments/854373184555843594/857257190243041290/emoji80.png').setTimestamp()
      const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({dynamic: true}))
        .setTitle(`**__<:feather_right:855233493365424128>  FAQ - MACAW'S - SKETCH  <:feather_left:855233831984824330>__**`).setURL(message.url)
        .addFields({
          "name": "**<:question:854384102144212992>** Will there be any new mods?",
          "value": "**<:answer:854384101917196308> ** Yes, I have plenty of them planned."
        },
        {
          "name": "**<:question:854384102144212992>** I have a translation, will you add it?",
          "value": "**<:answer:854384101917196308> ** Of course, just send it to me."
        },
        {
          "name": "**<:question:854384102144212992>** Can i make an article about your mod somewhere, or just post it somewhere?",
          "value": "**<:answer:854384101917196308> ** You can, but you have to use my official download links from curseforge. They cannot be modified!!"
        })
        .setColor('2887ff')
        .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/854381108300480542/emoji66.png?width=450&height=450")
        .setFooter('Page 2/2 • I hope this helps you ', 'https://media.discordapp.net/attachments/854373184555843594/857257190243041290/emoji80.png').setTimestamp()
      const FAQ = await message.channel.send(embed);
      FAQ.react("⬅️");
      FAQ.react("↔️");
      FAQ.react("➡️");
      FAQ.awaitReactions((reaction, user) => {
        if(message.author.id === user.id){
          if(reaction.emoji.name === '⬅️'){
            FAQ.edit(embed);
          }else
          if(reaction.emoji.name === '➡️'){
            FAQ.edit(embed2);
          }
        }
      });
    } else
    if (message.content.startsWith(prefix + 'say')) { /*Say Command*/
      const error = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | Which is the message?! ")
        .setDescription(" ```ml\n mcw!say  'text'```").setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let texto = args.join(' ');
      if(!texto) return message.channel.send(error);
      message.delete();
      message.channel.send(texto)
    } else
    if (message.content.startsWith(prefix + 'kick')) { /*kick Command*/
      const error1 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You didn't mention anyone to kick out! ")
        .setDescription(" ```ml\n mcw!kick  '@user' razon```").setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error2 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You cannot expel yourself! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error3 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You do not have permissions to evict people! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error4 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | I do not have permissions to expel people! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      let canal = message.channel;
      let kickeado = message.mentions.users.first();
      let razon = args.slice(1).join(' ');
      if (!kickeado) return message.channel.send(error1)
      if (message.author === kickeado) return message.channel.send(error2)
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(error3)
      if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(error4)
      message.guild.member(kickeado).kick(razon);
        const embedkick = new Discord.MessageEmbed()
          .setAuthor(kickeado.username+`#${kickeado.discriminator}`, message.guild.iconURL({ dynamic: true }))
          .setDescription("**¡¡ "+kickeado.username+" • has been kicked from the server!!** \n Razon: "+razon)
          .setThumbnail(kickeado.avatarURL({ dynamic: true }))
          .setFooter("Responsible moderator: "+message.author.username, message.author.avatarURL({ dynamic: true })).setTimestamp().setColor("2887ff")
      canal.send({ embed: embedkick }); console.log(kickeado.username + " was expelled for " + message.author.username)
    } else
    if (message.content.startsWith(prefix + 'ban')) { /*ban Command*/
      const error1 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You didn't mention anyone to ban! ")
        .setDescription(" ```ml\n mcw!ban  '@user' razon```").setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error2 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You can't ban yourself! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error3 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | You do not have permissions to ban people! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      const error4 = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | I don't have permissions to ban people.! ")
        .setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png?width=450&height=450").setTimestamp()
      let canal = message.channel;
      let baneado = message.mentions.users.first();
      let razon = args.slice(1).join(' ');
      if (!baneado) return message.channel.send(error1)
      if (message.author === baneado) return message.channel.send(error2)
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(error3)
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(error4);message.guild.members.ban(baneado, { reason: razon });
        const embedban = new Discord.MessageEmbed()
          .setAuthor(baneado.username+`#${baneado.discriminator}`, message.guild.iconURL({ dynamic: true }))
          .setDescription("**¡¡ "+baneado.username+" • has been banned from the server!!** \n Razon: "+razon)
          .setThumbnail(baneado.avatarURL({ dynamic: true }))
          .setFooter("Responsible moderator: "+message.author.username, message.author.avatarURL({ dynamic: true })).setTimestamp().setColor("2887ff")
        canal.send({ embed: embedban }); console.log(baneado.username + " was banned by " + message.author.username)
    } else
    if (message.content.startsWith(prefix + 'mod doors')) { /* Mod Doors Command */
      const doors = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:door:830778107177730078>  MACAWS - MOD - DOOR")
        .setDescription("Have you ever been lost in your own house? All doors looks the same? This problem is a relic of the past now! This mod allows you to make several door styles (including vanilla minecraft styles) from different wood and materials. Excellent addon for your house.")
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files").setColor("4c82c4")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415611700150282>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4 **( for 1.12.2 v1.0.0 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files)\n[Youtube Link](https://www.youtube.com/watch?v=ZS7r7pqZzYg)",
          "inline": true
        })
        .setImage("https://images-ext-2.discordapp.net/external/xssZwMstCx0n1SELKhf9U0f822EHo8fRD6Ak0rfWqVs/https/media.discordapp.net/attachments/804038055312883732/807303661172162560/cc3LAuH.png?width=720&height=162")
        .setFooter("Page 5/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(doors);
    } else
    if (message.content.startsWith(prefix + 'mod furnitures')) { /* Mod Furnitures Command */
      const furniture = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:furniture:830778122268966922> MACAWS - MOD - FURNITURE")
        .setDescription(`Can't you find any suitable furniture for you home? Are you exhausted of looking for it? You are lucky you are here. Macaw started serious business by creating excellent furniture...just joke <:mcw_happy:680406053158256665>. Macaw offers you a mod for elegant furniture. You can "create" your own style of furniture by making different variations. Suits for every household. 11 / 10 Macaw's workers recommend <:mcw_yes:689943132393177174>.`)
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files").setColor("4c82c4")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415597892501574>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.1 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files)\n[Youtube Link](https://www.youtube.com/watch?v=Qsbxv7i8W-s)",
          "inline": true
        })
        .setImage("https://images-ext-2.discordapp.net/external/IxsfQ3U4Q3u_9irpHWkSFqkBFGvB-ncyeJAzL9-iEKs/https/media.discordapp.net/attachments/804038055312883732/807307527485653012/d3F9Frv.png?width=720&height=149")
        .setFooter("Page 4/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(furniture)
    } else
    if (message.content.startsWith(prefix + 'mod trapdoors')) { /* Mod Trapdoors Command */
      const trapdoors = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:trapdoor:830778109954883605> MACAWS - MOD - TRAPDOORS")
        .setDescription(`Are you a "master of escapes"? If your answer is "yes", trapdoors are your daily routine, but in normal Minecraft you are a bit limited. Let's make it different! This mod is similiar to Macaw's Doors. You can make more styles of trapdoors using different materials. No more fails when escaping. <:mcw_boss:680406071197958149> `)
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796008803795014>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files)\n[Youtube Link](https://www.youtube.com/watch?v=5rCpU9apUVw)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/5z3V0aCfIMtmu0Y0I1GECuIOLrR0_F1hL_1QJGuoSiY/https/media.discordapp.net/attachments/804038055312883732/807309499529560175/irYCi48.png?width=810&height=135")
        .setFooter("Page 8/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(trapdoors);
    } else
    if (message.content.startsWith(prefix + 'mod bridges')) { /* Mod Bridges Command */
      const bridges = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:bridge:830778108788342794> MACAWS - MOD - BRIDGES")
        .setDescription("Have you never liked narrow bridges made of blocks? Macaw has a solution for you! Use this mod to build interesting and smart bridges across walleys, rivers, lava traps, etc.")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415129183092757>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.12.2, 1.14.4, 1.15.2, 1.16.4**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files)\n[Youtube Link](https://www.youtube.com/watch?v=SmaaVr2LnKY&t=1s)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/cE3x7xUOOLoFikaNilTrzpTAJDlIL_IiLUCHp17z1NE/https/media.discordapp.net/attachments/804038055312883732/807310098371838012/siLvIoO.png?width=1175&height=243")
        .setFooter("Page 3/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
        message.channel.send(bridges)
      } else
      if (message.content.startsWith(prefix + 'mod paintings')) { /* Mod Paintings Command */
        const paintings = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
          .setTitle("<:painting:830778112865337355> MACAWS - MOD - PAINTINGS")
          .setDescription("Can't you see anything in minecraft paintings? Don't be ashamed. Me neither. Hopefully Macaw and his team brought us another useful and decorative addon. MORE PAINTINGS! But now, including more details in it. Every painting is beautiful pixel-art masterpiece. See for yourself.")
          .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796043620581428>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4, 1.16.5**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-paintings/files)\n[Youtube Link](https://www.youtube.com/watch?v=Tqhn7XB1ZBE)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-paintings/files").setColor("4c82c4")
        .setImage("https://images-ext-1.discordapp.net/external/ADbEFjktUfoWSO9IOnHvUzgYHEzcihv1aab1cExnSqc/https/media.discordapp.net/attachments/804038055312883732/807310632176189493/nRwTyg4.png?width=1175&height=243")
        .setFooter("Page 9/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(paintings)
      } else
      if (message.content.startsWith(prefix + 'mod windows')) { /* Mod Windows Command */
        const windows = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
          .setTitle("<:window:830778121476112415> MACAWS - MOD - WINDOWS")
          .setDescription("It doesn't depend if it's sunny or not, you can still enjoy the view from inside of your warm home. And why not to use some beautiful windows? Show your neighbourhood how well you can design your house.")
          .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415613964812381>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.1 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files)\n[Youtube Link](https://www.youtube.com/watch?v=PlVcZG-U24I&t=74s)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/Z_LgtE2Nhp61sjkc4ZMR1fjL0r7tdfTOqHaiHVCJdZI/https/media.discordapp.net/attachments/804038055312883732/807311517052960789/LUdEqDX.png?width=1175&height=243")
        .setFooter("Page 6/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(windows)
    } else
    if (message.content.startsWith(prefix + 'mod roofs')) { /* Mod Roofs Command */
      const roofs = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:roof:830778121132834828> MACAWS - MOD - ROOFS")
        .setDescription("One of the first mods made by Macaw. It allows you to build an interesting roof in many ways and styles that will suit everyone's needs.")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415470964211760>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.2 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files)\n[Youtube Link](https://www.youtube.com/watch?v=mplIsz06PDI)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files")
        .setColor("4c82c4")
        .setImage("https://images-ext-1.discordapp.net/external/5xjeD6s6CFt7wqAvhdHEl8rJ91anSqjgvCU67zs0HNE/https/media.discordapp.net/attachments/804038055312883732/807312123973730415/91xqC1l.png?width=732&height=168")
        .setFooter("Page 2/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(roofs);
    } else
    if (message.content.startsWith(prefix + 'mod fences-walls')) { /* Mod Fences&Walls Command */
      const fences = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:fence:830778118879838238> MACAWS - MOD - FENCES")
        .setDescription(`"Hey! You aren't supposed to be here! This is my property!" Tired of saying this phrase again and again? You don't need to be. Macaw's fences are made for defence of everything, where you need to keep people, entities and mobs far away. In addition, you can do it with the benefit of interesting decorative styles.`)
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796055578148864>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.12.2, 1.14.4, 1.15.2, 1.16.4, 1.16.5**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files)\n[Youtube Link](https://www.youtube.com/watch?v=g3V3lcidXmU)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files")
        .setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/0P9bkkaCUSb2iTtoft8wmIQoByEkWhMps3gxerxXnfY/https/media.discordapp.net/attachments/804038055312883732/818547009191149618/PPlc2JI.png?width=810&height=135")
        .setFooter("Page 7/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      message.channel.send(fences);
    } else
    if(message.content.startsWith(prefix+'mod')){ /* Mod Command */
      const mod = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setDescription("> **Index:** command `mod`, emoji 🏘️").setColor("4c82c4")
        .addFields({
          "name": ":one: Macaw's Roofs",
          "value": "**Command:**\n`mcw!mod roofs`",
          "inline": true
        },
        {
          "name": ":two: Macaw's Bridges",
          "value": "**Command: **\n`mcw!mod bridges`",
          "inline": true
        },
        {
          "name": ":three: Macaw's Furnitures",
          "value": "**Command:** \n`mcw!mod furniture`",
          "inline": true
        },
        {
          "name": ":four: Macaw's Doors",
          "value": "**Command:** \n`mcw!mod doors`",
          "inline": true
        },
        {
          "name": ":five: Macaw's Windows",
          "value": "**Command:** \n`mcw!mod windows`",
          "inline": true
        },
        {
          "name": ":six: Macaw's Fences & Walls",
          "value": "**Command:**\n`mcw!mod fences-walls`",
          "inline": true
        },
        {
          "name": ":seven: Macaw's Trapdoors",
          "value": "**Command:** \n`mcw!mod trapdoors`",
          "inline": true
        },
        {
          "name": ":eight: Macaw's Paintings",
          "value": "**Command:** \n`mcw!mod paintings`",
          "inline": true
        })
        .setFooter("Page 1/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const doors = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:door:830778107177730078>  MACAWS - MOD - DOOR")
        .setDescription("Have you ever been lost in your own house? All doors looks the same? This problem is a relic of the past now! This mod allows you to make several door styles (including vanilla minecraft styles) from different wood and materials. Excellent addon for your house.")
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files").setColor("4c82c4")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415611700150282>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4 **( for 1.12.2 v1.0.0 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files)\n[Youtube Link](https://www.youtube.com/watch?v=ZS7r7pqZzYg)",
          "inline": true
        })
        .setImage("https://images-ext-2.discordapp.net/external/xssZwMstCx0n1SELKhf9U0f822EHo8fRD6Ak0rfWqVs/https/media.discordapp.net/attachments/804038055312883732/807303661172162560/cc3LAuH.png?width=720&height=162")
        .setFooter("Page 5/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const furniture = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:furniture:830778122268966922> MACAWS - MOD - FURNITURE")
        .setDescription(`Can't you find any suitable furniture for you home? Are you exhausted of looking for it? You are lucky you are here. Macaw started serious business by creating excellent furniture...just joke <:mcw_happy:680406053158256665>. Macaw offers you a mod for elegant furniture. You can "create" your own style of furniture by making different variations. Suits for every household. 11 / 10 Macaw's workers recommend <:mcw_yes:689943132393177174>.`)
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files").setColor("4c82c4")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415597892501574>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.1 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files)\n[Youtube Link](https://www.youtube.com/watch?v=Qsbxv7i8W-s)",
          "inline": true
        })
        .setImage("https://images-ext-2.discordapp.net/external/IxsfQ3U4Q3u_9irpHWkSFqkBFGvB-ncyeJAzL9-iEKs/https/media.discordapp.net/attachments/804038055312883732/807307527485653012/d3F9Frv.png?width=720&height=149")
        .setFooter("Page 4/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const trapdoors = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:trapdoor:830778109954883605> MACAWS - MOD - TRAPDOORS")
        .setDescription(`Are you a "master of escapes"? If your answer is "yes", trapdoors are your daily routine, but in normal Minecraft you are a bit limited. Let's make it different! This mod is similiar to Macaw's Doors. You can make more styles of trapdoors using different materials. No more fails when escaping. <:mcw_boss:680406071197958149> `)
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796008803795014>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files)\n[Youtube Link](https://www.youtube.com/watch?v=5rCpU9apUVw)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/5z3V0aCfIMtmu0Y0I1GECuIOLrR0_F1hL_1QJGuoSiY/https/media.discordapp.net/attachments/804038055312883732/807309499529560175/irYCi48.png?width=810&height=135")
        .setFooter("Page 8/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const bridges = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:bridge:830778108788342794> MACAWS - MOD - BRIDGES")
        .setDescription("Have you never liked narrow bridges made of blocks? Macaw has a solution for you! Use this mod to build interesting and smart bridges across walleys, rivers, lava traps, etc.")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415129183092757>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.12.2, 1.14.4, 1.15.2, 1.16.4**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files)\n[Youtube Link](https://www.youtube.com/watch?v=SmaaVr2LnKY&t=1s)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/cE3x7xUOOLoFikaNilTrzpTAJDlIL_IiLUCHp17z1NE/https/media.discordapp.net/attachments/804038055312883732/807310098371838012/siLvIoO.png?width=1175&height=243")
        .setFooter("Page 3/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const paintings = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
          .setTitle("<:painting:830778112865337355> MACAWS - MOD - PAINTINGS")
          .setDescription("Can't you see anything in minecraft paintings? Don't be ashamed. Me neither. Hopefully Macaw and his team brought us another useful and decorative addon. MORE PAINTINGS! But now, including more details in it. Every painting is beautiful pixel-art masterpiece. See for yourself.")
          .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796043620581428>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4, 1.16.5**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-paintings/files)\n[Youtube Link](https://www.youtube.com/watch?v=Tqhn7XB1ZBE)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-paintings/files").setColor("4c82c4")
        .setImage("https://images-ext-1.discordapp.net/external/ADbEFjktUfoWSO9IOnHvUzgYHEzcihv1aab1cExnSqc/https/media.discordapp.net/attachments/804038055312883732/807310632176189493/nRwTyg4.png?width=1175&height=243")
        .setFooter("Page 9/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const windows = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
          .setTitle("<:window:830778121476112415> MACAWS - MOD - WINDOWS")
          .setDescription("It doesn't depend if it's sunny or not, you can still enjoy the view from inside of your warm home. And why not to use some beautiful windows? Show your neighbourhood how well you can design your house.")
          .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415613964812381>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.1 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files)\n[Youtube Link](https://www.youtube.com/watch?v=PlVcZG-U24I&t=74s)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files").setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/Z_LgtE2Nhp61sjkc4ZMR1fjL0r7tdfTOqHaiHVCJdZI/https/media.discordapp.net/attachments/804038055312883732/807311517052960789/LUdEqDX.png?width=1175&height=243")
        .setFooter("Page 6/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const roofs = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:roof:830778121132834828> MACAWS - MOD - ROOFS")
        .setDescription("One of the first mods made by Macaw. It allows you to build an interesting roof in many ways and styles that will suit everyone's needs.")
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&739415470964211760>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.14.4, 1.15.2, 1.16.4** ( for 1.12.2 v1.0.2 only)_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files)\n[Youtube Link](https://www.youtube.com/watch?v=mplIsz06PDI)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files")
        .setColor("4c82c4")
        .setImage("https://images-ext-1.discordapp.net/external/5xjeD6s6CFt7wqAvhdHEl8rJ91anSqjgvCU67zs0HNE/https/media.discordapp.net/attachments/804038055312883732/807312123973730415/91xqC1l.png?width=732&height=168")
        .setFooter("Page 2/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const fences = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setTitle("<:fence:830778118879838238> MACAWS - MOD - FENCES")
        .setDescription(`"Hey! You aren't supposed to be here! This is my property!" Tired of saying this phrase again and again? You don't need to be. Macaw's fences are made for defence of everything, where you need to keep people, entities and mobs far away. In addition, you can do it with the benefit of interesting decorative styles.`)
        .addFields({
          "name": "<:palancas_ME:844633215423479839>  Role:",
          "value": "<@&830796055578148864>",
          "inline": true
        },
        {
          "name": "<:mesas_ME:842800340910997554>  Made for Minecraft:",
          "value": "_**1.12.2, 1.14.4, 1.15.2, 1.16.4, 1.16.5**_",
          "inline": true
        },
        {
          "name": ":link: Links:",
          "value": "[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files)\n[Youtube Link](https://www.youtube.com/watch?v=g3V3lcidXmU)",
          "inline": true
        })
        .setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files")
        .setColor("4c82c4")
        .setImage("https://images-ext-2.discordapp.net/external/0P9bkkaCUSb2iTtoft8wmIQoByEkWhMps3gxerxXnfY/https/media.discordapp.net/attachments/804038055312883732/818547009191149618/PPlc2JI.png?width=810&height=135")
        .setFooter("Page 7/9 • I hope this helps you "+message.member.displayName, "https://images-ext-2.discordapp.net/external/jq2BBrYVWsiJPJ0bKA4LcTsGWMcocJCk2Pz-yx9y6Zw/%3Fwidth%3D676%26height%3D676/https/images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=608&height=608").setTimestamp()
      const index = await message.channel.send(mod);
      index.react("🏘️"); index.react("1⃣"); index.react("2⃣"); index.react("3⃣"); index.react("4⃣"); index.react("5⃣"); index.react("6⃣"); index.react("7⃣"); index.react("8⃣"); index.awaitReactions((reaction, user) => {
        if(message.author.id === user.id){
          if(reaction.emoji.name === "🏘️"){
            index.edit(mod);
          }else
          if(reaction.emoji.name === "1⃣"){
            index.edit(roofs);
          }else
          if(reaction.emoji.name === "2⃣"){
            index.edit(bridges);
          }else
          if(reaction.emoji.name === "3⃣"){
            index.edit(furniture)
          }else
          if(reaction.emoji.name === "4⃣"){
            index.edit(doors)
          }else
          if(reaction.emoji.name === "5⃣"){
            index.edit(windows)
          }else
          if(reaction.emoji.name === "6⃣"){
            index.edit(fences)
          }else
          if(reaction.emoji.name === "7⃣"){
            index.edit(trapdoors)
          }else
          if(reaction.emoji.name === "8⃣"){
            index.edit(paintings)
          }
        }
      })
    } else
    if (message.content.startsWith(prefix + 'avatar')) { /* Avatar Command */
      let user = message.mentions.users.first();
      if (user) {
        const embed = new Discord.MessageEmbed()
          .setTitle('Avatar from ' + message.mentions.users.first().username)
          .setDescription("> [**`Avatar Link Here`**]("+user.avatarURL()+")")
          .setFooter('requested by:   ' + message.member.displayName + '.')
          .setImage(user.displayAvatarURL({dynamic: true, size : 1024 }))
          .setColor('5ce1e6')
        message.channel.send(embed);
      } else{
        const embed = new Discord.MessageEmbed()
          .setTitle('Look how handsome you are  ' + message.member.displayName + '.')
          .setDescription("> [**`Avatar Link Here`**]("+message.author.avatarURL()+")")
          .setImage(message.author.avatarURL({dynamic: true, size : 1024 }))
          .setColor('5ce1e6')
        message.channel.send(embed);
      }
    } else
    if (message.content.startsWith(prefix + 'help')) { /* Help Command */
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .setDescription("My prefix is: `mcw!`")
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .addFields({
          "name": "> <:mcw_hackerman:689943134373019767>  ┋  Macaw's commands • 5",
          "value": "**`mod` | `faq` | `network` | `craft` | ~~`list`~~**"
        },
        {
          "name": "> <:util_wrech:854896616225767474> ┋ Util commands • 8",
          "value": "**~~`command`~~ | `avatar` | `say` | `botInfo` | `roleInfo` | `channelInfo` | `userInfo` | `serverInfo`**"
        },
        {
          "name": "> <:extras:854890985342369803>  ┋ Extra commands • 8",
          "value": "**~~`mine` | `fish` | `rps` | `throw` | `invite` | `8ball` | `avatarMC` | `skinMC`~~ **"
        }).setColor('4c82c4').setFooter("Use mcw!command [command]  to view command information").setTimestamp()
      message.channel.send(embed);
    } else
    if (bots.some(bots => contador.includes(bots))) { /* botInfo Command */
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .addFields({
          "name": "<:mcw_owner:855607933013196821> MacawBot Creators",
          "value": "<@709393638396002325>\n<@228951733152251904>\n<@434766056754642944>",
          "inline": true
        },
        {
          "name": "<:macaw_nickname:859954513749737472> Nick Name",
          "value": client.user.username,
          "inline": true
        },
        {
          "name": "<:bookshop:855259586000846869> Bookshop",
          "value": "**Discord.js** ^12.2.0",
          "inline": true
        },
        {
          "name": "<:macaw_servers:855262630792003585> Macaws Servers",
          "value": "I'm in **"+client.guilds.cache.size+"** servers",
          "inline": true
        },
        {
          "name": "<:macaw:666289805470203905> **Working with:**",
          "value": "**"+client.users.cache.size+"** macaws per day",
          "inline": true
        })
          .setDescription("<:macaws:855234526992007178> My mention: <@806527058284118056>").setColor('2887ff')
          .setThumbnail(client.user.avatarURL())
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(embed);
      } else
      if (roles.some(roles => contador.includes(roles))) { /* roleInfo Command */
        let desicion = { "true": "<:mcw_yes:689943132393177174> Yes", "false": "<:mcw_no:860149771070865418> No"}
      const error = new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
        .setTitle("<a:error:858140885284028446>    Error   | Be sure to mention a Role!! ")
        .setDescription(" ```ml\n mcw!rolInfo  '@rol'```").setColor("ff2828")
        .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png").setTimestamp()
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if (!role) return message.channel.send(error);
        const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true }))
          .setDescription(`<:macaws:855234526992007178> Role mention: <@&${role.id}>`)
          .addFields({
          "name": "<:macaw_nickname:859954513749737472> Name:",
          "value": role.name,
          "inline": true
        },
        {
          "name": "<:macaw_pushpin:859960958964989963> ID:",
          "value": role.id,
          "inline": true
        },
        {
          "name": "<:macaw_rol:859960410151976970> Members with Role:",
          "value": "**"+role.members.size+"** member(s)",
          "inline": true
        },
        {
          "name": "<:macaw_paintbrush:859961783846043717> HexColor:",
          "value": role.hexColor,
          "inline": true
        },
        {
          "name": "<:macaw_mention:859963298996551690> ¿Mentionable?:",
          "value": desicion[role.mentionable],
          "inline": true
        },
        {
          "name": "<:macaws_paperclips:859964360566243390>  ¿Separated?:",
          "value": desicion[role.hoist],
          "inline": true
        })
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/859968533211643924/emoji99.png").setColor("2887ff")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(embed);
      } else
      if(channels.some(channels => contador.includes(channels))){ /* channelInfo Command */
        let desicion = { "false": "**<:mcw_yes:689943132393177174> Yes**", "true": "**<:mcw_no:860149771070865418> No**"}
        let emojis = { "voice": "<:mcw_voice:860203781705433154>", "text": "<:mcw_chat:860203435697242132>", "news": "<:mcw_announcements:860203435377688626>"};
        let emoj = { "false": ":closed_lock_with_key:", "true": "<:closed_unlock_with_key:860219101548904459>"}
        var canal = message.mentions.channels.first();
        if(!canal) canal = message.channel;
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true }))
            .setDescription(`<:macaws:855234526992007178> Channel mention: <#${canal.id}>`)
            .addFields({
          "name": "<:macaw_nickname:859954513749737472> Name:",
          "value": canal.name,
          "inline": true
        },
        {
          "name": "<:macaw_pushpin:859960958964989963> ID:",
          "value": canal.id,
          "inline": true
        },
        {
          "name": `${emojis[canal.type]} Type:`,
          "value": canal.type,
          "inline": true
        },
        {
          "name": "<:mcw_category:860205925725503559> It is in the category",
          "value": canal.parent.name,
          "inline": true
        },
        {
          "name": "<:mcw_eye:860210800353476608> Everyone Visible?",
          "value": desicion[canal.viewable],
          "inline": true
        },
        {
          "name": emoj[canal.permissionsLocked]+" Permission Blocked?",
          "value": desicion[canal.permissionsLocked],
          "inline": true
        })
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/860218160028450836/emoji106.png")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp().setColor("2887ff")
        message.channel.send(embed);
      } else
      if(users.some(users => contador.includes(users))){ /* userInfo Command */
        const error = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true}))
          .setTitle("<a:error:858140885284028446>    Error   | Be sure to mention a User!! ")
          .setDescription(" ```ml\n mcw!userlInfo  '@user'```").setColor("ff2828")
          .setFooter("Fix the error for the command to run", "https://media.discordapp.net/attachments/854373184555843594/858145457192435762/emoji91.png").setTimestamp()
        let emoji  = {"online": "<:mcw_online:860347322474037258> ", "idle": "<:mcw_idle:860347322919419984> ", "dnd": "<:mcw_dnd:860347308280381491> ", "offline": "<:mcw_off:860347322868957215> "};
        let user = message.mentions.users.first();
        if(!user) return message.channel.send(error);
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username+`#${message.author.discriminator}`, message.author.avatarURL({ dynamic: true }))
            .setDescription("<:macaws:855234526992007178> User mention: <@"+user.id+">")
            .addFields({
          "name": "<:macaw_nickname:859954513749737472> Name:",
          "value": user.username,
          "inline": true
        },
        {
          "name": "<:macaw_pushpin:859960958964989963> ID:",
          "value": user.id,
          "inline": true
        },
        {
          "name": emoji[user.presence.status]+"Status",
          "value": user.presence.status,
          "inline": true
        },
        {
          "name": "<:mcw_create:860351657946382356> Account creation date",
          "value": user.createdAt.toDateString(),
          "inline": true
        },
        {
          "name": "<:mcw_enter:860353178145914909> Server Login Date",
          "value": message.member.joinedAt.toDateString(),
          "inline": true
        })
            .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/860346703587835924/emoji112.png?width=450&height=450")
            .setFooter("🦜 I hope this helps you macaw").setTimestamp().setColor("2887ff")
        message.channel.send(embed);

      } else
      if(servers.some(servers => contador.includes(servers))){
        message.reply("in progres. Sorry :pensive:")
      } else
      if(message.content.startsWith(prefix+"craft bridges")){
        const bridges = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>            MACAW'S BRIDGES MOD             <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod bridges`](https://www.youtube.com/watch?v=SmaaVr2LnKY&t=1s)").setColor("2887ff")
          .setImage("https://lh4.googleusercontent.com/aFHVPCAIZ3lNxUit-5A5NFl0K2JiZzd3fALBaig25QN3FPtELmI_vAkbrA4s5vWSx1LBg61GAJoQkZdIjCKHM05pHiezhnXV4UrDBMFTWbNtHF0f8_iHhWbxFXhiC-rq74bZutF5iw")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(bridges)
      } else
      if(message.content.startsWith(prefix+"craft roofs")){
        const roofs = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>              MACAW'S ROOFS MOD             <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod roofs`](https://www.youtube.com/watch?v=mplIsz06PDI)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/fjfEtvw12I-uGPpahEB1sEVs8ZdD9oJzE7El9JVj14KLCciQDEm8yGGuPVzHqzFr8W27pRbx9WzT9EFccxfzgA0erHFJyMEMLbUGHHotWfAPUyIHLSeTdp_LBj2KlKC9HwovygPUNw")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(roofs)
      } else
      if(message.content.startsWith(prefix+"craft windows")){
        const windows = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>           MACAW'S WINDOWS MOD         <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod windows`](https://www.youtube.com/watch?v=PlVcZG-U24I&t=74s)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/gfvVTL4oh45GZysxmSg3YiEBAsVyaF4CV8PI2qM-9mEfIT5gdUfjIzAClQ9m851dr7z1-GMyqDKwcxGxke0yr4jiZEsS-J0PJBZw9kSumPczmy_9K09e-MDUEIVSUqb0P4Mu-cii9A")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(windows)
      } else
      if(message.content.startsWith(prefix+"craft furnitures")){
        const furnitures = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>          MACAW'S FURNITURE MOD         <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod furnitures`](https://www.youtube.com/watch?v=Qsbxv7i8W-s)").setColor("2887ff")
          .setImage("https://media.discordapp.net/attachments/854373184555843594/856685409643266068/unknown.png")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(furnitures)
      } else
      if(message.content.startsWith(prefix+"craft doors")){
        const doors = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>   MACAW'S DOORS MOD  <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod doors`](https://www.youtube.com/watch?v=ZS7r7pqZzYg)").setColor("2887ff")
          .setImage("https://lh3.googleusercontent.com/Kmbb0qyZEP9W6rb1DjVKKTkKyjP2E8IQ3bgCWaCq04s3FTC4Toi3n_9iUk9ewhNMZ6saMgCDu_ljlsg_ZTNtzwYInloFQsSbi4rmdHxp47UbQ3F6aOMnmde1l30GzZsrHFOQmubzAA")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(doors)
      } else
      if(message.content.startsWith(prefix+"craft fences-walls")){
        const fences = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>    MACAW'S FENCES & WALLS MOD   <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod fences-walls`](https://www.youtube.com/watch?v=g3V3lcidXmU)").setColor("2887ff")
          .setImage("https://lh4.googleusercontent.com/d1lGxQ1ITqkF1PoCHL3UYKYiD8RDycUnVGP5u9mhBNJR9Q8NqNUucV98KOCMjnM7QSftMX9a12eja50Ej0zwvbg1jVAG0xPlgbkGahe43a9hFNdNEUR8KGYs1bDMixV7Pk1555mZmg")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(fences)
      } else
      if(message.content.startsWith(prefix+"craft trapdoors")){
        const trapdoors = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>           MACAW'S TRAPDOORS MOD     <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod fences-walls`](https://www.youtube.com/watch?v=5rCpU9apUVw)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/vDjWXFHlONeEzmvZSRCRBfPkdIBzaH1wHwGzimbrGurMj7SgZLZ9_EOCxOeb15ph2Y-F850Fp2MpR6DRoOHZGWZ-tQklufGyQS_qgl5H5GuOWhxz-0NsF5vK2qJHR-26qk3DRfCkRQ")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        message.channel.send(trapdoors)
      } else
      if(message.content.startsWith(prefix+"craft")){
        const craft = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setDescription("> **Index:** command `craft`, emoji 🏘️")
          .addFields({
          "name": ":one: Macaw's Roofs",
          "value": "**Command:**\n`mcw!craft roofs`",
          "inline": true
        },
        {
          "name": ":two: Macaw's Bridges",
          "value": "**Command: **\n`mcw!craft bridges`",
          "inline": true
        },
        {
          "name": ":three: Macaw's Furnitures",
          "value": "**Command:** \n`mcw!craft furniture`",
          "inline": true
        },
        {
          "name": ":four: Macaw's Doors",
          "value": "**Command:** \n`mcw!craft doors`",
          "inline": true
        },
        {
          "name": ":five: Macaw's Windows",
          "value": "**Command:** \n`mcw!craft windows`",
          "inline": true
        },
        {
          "name": ":six: Macaw's Fences & Walls",
          "value": "**Command:**\n`mcw!craft fences-walls`",
          "inline": true
        },
        {
          "name": ":seven: Macaw's Trapdoors",
          "value": "**Command:** \n`mcw!craft trapdoors`",
          "inline": true
        })
        .setColor("2887ff")
        .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const bridges = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>            MACAW'S BRIDGES MOD             <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod bridges`](https://www.youtube.com/watch?v=SmaaVr2LnKY&t=1s)").setColor("2887ff")
          .setImage("https://lh4.googleusercontent.com/aFHVPCAIZ3lNxUit-5A5NFl0K2JiZzd3fALBaig25QN3FPtELmI_vAkbrA4s5vWSx1LBg61GAJoQkZdIjCKHM05pHiezhnXV4UrDBMFTWbNtHF0f8_iHhWbxFXhiC-rq74bZutF5iw")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const roofs = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>              MACAW'S ROOFS MOD             <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod roofs`](https://www.youtube.com/watch?v=mplIsz06PDI)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/fjfEtvw12I-uGPpahEB1sEVs8ZdD9oJzE7El9JVj14KLCciQDEm8yGGuPVzHqzFr8W27pRbx9WzT9EFccxfzgA0erHFJyMEMLbUGHHotWfAPUyIHLSeTdp_LBj2KlKC9HwovygPUNw")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const windows = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>           MACAW'S WINDOWS MOD         <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-windows/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod windows`](https://www.youtube.com/watch?v=PlVcZG-U24I&t=74s)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/gfvVTL4oh45GZysxmSg3YiEBAsVyaF4CV8PI2qM-9mEfIT5gdUfjIzAClQ9m851dr7z1-GMyqDKwcxGxke0yr4jiZEsS-J0PJBZw9kSumPczmy_9K09e-MDUEIVSUqb0P4Mu-cii9A")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const furnitures = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>          MACAW'S FURNITURE MOD         <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod furnitures`](https://www.youtube.com/watch?v=Qsbxv7i8W-s)").setColor("2887ff")
          .setImage("https://media.discordapp.net/attachments/854373184555843594/856685409643266068/unknown.png")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const doors = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>   MACAW'S DOORS MOD  <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-doors/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod doors`](https://www.youtube.com/watch?v=ZS7r7pqZzYg)").setColor("2887ff")
          .setImage("https://lh3.googleusercontent.com/Kmbb0qyZEP9W6rb1DjVKKTkKyjP2E8IQ3bgCWaCq04s3FTC4Toi3n_9iUk9ewhNMZ6saMgCDu_ljlsg_ZTNtzwYInloFQsSbi4rmdHxp47UbQ3F6aOMnmde1l30GzZsrHFOQmubzAA")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const fences = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>    MACAW'S FENCES & WALLS MOD   <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod fences-walls`](https://www.youtube.com/watch?v=g3V3lcidXmU)").setColor("2887ff")
          .setImage("https://lh4.googleusercontent.com/d1lGxQ1ITqkF1PoCHL3UYKYiD8RDycUnVGP5u9mhBNJR9Q8NqNUucV98KOCMjnM7QSftMX9a12eja50Ej0zwvbg1jVAG0xPlgbkGahe43a9hFNdNEUR8KGYs1bDMixV7Pk1555mZmg")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const trapdoors = new Discord.MessageEmbed()
          .setAuthor(message.author.username+`#${message.member.user.discriminator}`, message.author.avatarURL({dynamic: true}))
          .setTitle("__<:feather_right:855233493365424128>           MACAW'S TRAPDOORS MOD     <:feather_left:855233831984824330>__").setURL("https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files")
          .setDescription("**<:links:855238498595110922>  Macaw's Links: **[`Download CurseForge Link`](https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files) \n **<:commands:855237797714722826> Macaw's Commands:** [`mcw!mod fences-walls`](https://www.youtube.com/watch?v=5rCpU9apUVw)").setColor("2887ff")
          .setImage("https://lh6.googleusercontent.com/vDjWXFHlONeEzmvZSRCRBfPkdIBzaH1wHwGzimbrGurMj7SgZLZ9_EOCxOeb15ph2Y-F850Fp2MpR6DRoOHZGWZ-tQklufGyQS_qgl5H5GuOWhxz-0NsF5vK2qJHR-26qk3DRfCkRQ")
          .setThumbnail("https://media.discordapp.net/attachments/854373184555843594/855234872422957066/emoji77.png?width=450&height=450")
          .setFooter("🦜 I hope this helps you macaw").setTimestamp()
        const index = await message.channel.send(craft);
      index.react("🏘️"); index.react("1⃣"); index.react("2⃣"); index.react("3⃣"); index.react("4⃣"); index.react("5⃣"); index.react("6⃣"); index.react("7⃣"); index.awaitReactions((reaction, user) => {
        if(message.author.id === user.id){
          if(reaction.emoji.name === "🏘️"){
            index.edit(craft);
          }else
          if(reaction.emoji.name === "1⃣"){
            index.edit(roofs);
          }else
          if(reaction.emoji.name === "2⃣"){
            index.edit(bridges);
          }else
          if(reaction.emoji.name === "3⃣"){
            index.edit(furnitures)
          }else
          if(reaction.emoji.name === "4⃣"){
            index.edit(doors)
          }else
          if(reaction.emoji.name === "5⃣"){
            index.edit(windows)
          }else
          if(reaction.emoji.name === "6⃣"){
            index.edit(fences)
          }else
          if(reaction.emoji.name === "7⃣"){
            index.edit(trapdoors)
          }
        }
      })
      } else
      if(message.content.startsWith(prefix+"list")){
        const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
          
      } else
      if(message.content.startsWith(prefix)){
        message.reply("Sorry about the command you want to use I still don't have it in the system, if you want it to be added write to my creator <@709393638396002325>. There are some commands that are in the process of being created, just be patient to be able to use them in <#809684181537914910>")
      }
});
client.on("guildMemberAdd", (member) => {
  consloe.log(`Ha ingresado ${memebe.name}`);
    client.channels.cache.get("645369658417086465").send('Hello '+member.user+':wave:');
  const Hello = new Discord.MessageEmbed().setTimestamp()
    .setThumbanil('https://images-ext-2.discordapp.net/external/PWUStgKeibhyAPattORN8rg49Hp09GriF9tijWm5B-w/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/228951733152251904/4de00c2c02b5caf301931ea43939b6d4.webp?width=676&height=676')
    .setAuthor(`Welcome to ${member.guild.name}`)
    .setFooter('🔮Entry time')
    .setDescription('> 🎉 With you we are `'+member.guild.memberCount + ' users`\n\n Choose your role in <#666559514346127371>')
  client.channels.cache.get("645369658417086465").send(Hello);
  member.send(Hello);
})
client.login(process.env.token);