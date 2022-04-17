const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hola mundo')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
/////////////////////////////////     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const Discord = require("discord.js");
const { Util } = require("discord.js")
const client = new Discord.Client();

function presence() {
  client.user.setPresence({
    status: "idle",
    activity: {
      name: " Macaw's Mods || mcw!help",
      type: "WATCHING"
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
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift();
  let roles = [prefix+"rolInfo", prefix+"roleInfo", prefix+"role", prefix+"rol"];
  let bots = [prefix+"botInfo", prefix+"bot"];
  let channels = [prefix+"channelInfo", prefix+"channel"];
  let users = [prefix+"userInfo", prefix+"user"];
  let servers = [prefix+"serverInfo", prefix+"server"];
  let contador = message.content.toLowerCase();
  
  /*
   *      Command Parameter's:
   *        - cmd.use(Discord, message, Config)
   *            # command
   *            # Client
   *            # args
   *            # Util *
   *            # prefix
   *            # %command_use% 
   *            # %mod%
  */
  
    if (Config.net.some(cmd => command == cmd)) { 
      //  Network's Command
        let cmd = require('./cmd/networks.js')
      cmd.use(Discord, message, Config)
      
    } else
    if (Config.faqs.some(cmd => contador.includes(cmd))) { 
      // FAQ's Command
        let cmd = require('./cmd/faqs.js')
      cmd.use(Discord, message, Config, command, client)
      
    } else
    if (message.content.startsWith(prefix+'say')) { 
      // Say Command
        let cmd = require('./cmd/say.js')
      cmd.use(Discord, message, Config, client, args)
      
    } else
    if (message.content.startsWith(prefix + 'kick')) { 
      // Kick Command
        let cmd = require('./cmd/kick.js')
      cmd.use(Discord, message, Config, args)
      
    } else
    if (message.content.startsWith(prefix + 'ban')) { 
      // Ban Command
        let cmd = require('./cmd/ban.js')
      cmd.use(Discord, message, Config, args)
      
    } else
    if(Config.dom.some(cmd => command == cmd)){ 
      // Mod Command
        let cmd = require('./cmd/mod.js')
      cmd.use(Discord, message, Config, args, client)
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
    if (message.content.startsWith(prefix + 'help')) { 
      // Help Command 
        let cmd = require('./cmd/help.js')
      cmd.use(Discord, message, Config, args, client, Util)
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
          "name": Config.emojis.mcw.work+" **Working with:**",
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
  console.log(`${member} Ingreso a ${member.guild.name}`);
  
  if(member.guild.id == '822536864668844093'){
    canal = client.channels.cache.get("823242411949031476")
  }else
  if(member.guild.id == '645360921673465857'){
    canal = client.channels.cache.get("645369658417086465")
  }
  canal.send('> <@'+member+'> Welcome to '+member.guild.name/* +"\nUse `mcw!info` from know's the general info!"*/);
  const Hello = new Discord.MessageEmbed().setTimestamp()
    .setThumbnail(require('./config.js').link.sketch.avatar)
    .setAuthor(`Welcome to ${member.guild.name}`, member.guild.iconURL({ dynamic: true }), require('./config.js').link.discord)
    .setFooter('🔮Entry time')
    .setColor(require('./config.js').colors.sketch)
    .setDescription('> 🎉 With you we are `'+member.guild.memberCount + ' users`\n\n **Choose you\'r role** in <#952530009472520242>\n **Read the Rule\'s** in <#831485064525250560>\n Or Use **`mcw!help`** in <#809684181537914910> from see my commands and information.')
  // client.channels.cache.get("645360922252148759").send(Hello);
  member.send(Hello);
})

client.login(process.env.token);