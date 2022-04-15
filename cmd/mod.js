module.expors = {
  use: async() => {
  let colors = Config.colors
  let emojis = Config.emojis

    
  const Pannel = new Discord.MessageEmbed()
    .setAuthor(message.member.user.tag, message.author.avatarURL({dynamic: true}))
    .setDescription("> **Index:** command `mod`, emoji 🏘️")
    .setColor(colors.sketch)
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
  }
}