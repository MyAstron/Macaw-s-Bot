module.exports = {
  description: 'See My commands or Information',
  examples: '%prefix%help`\n`%prefix%help mod',
  usage: '%prefix%help [command]',
  permission: '`SEND_MESSAGES` - from the Bouth (Bot and User)',
  use: async (Discord, message, Config, args, client, Util) => {
    dmc = args[0]
    let emojis = Config.emojis
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({dynamic: true}))
      .setDescription("My prefix is: **`mcw!`**")
      .setThumbnail(message.guild.iconURL({dynamic: true}))
      .addFields({
          name: "> "+emojis.mcw.hacker+"  ┋  Macaw's commands • 5",
          value: "**`mod` | `faq` | `network` | `craft`**" 
          /* | ~~`list`~~"*/
        },
        {
          name: "> "+emojis.mcw.wrech+" ┋ Util commands • 8",
          value: "**`avatar` | `say` | `bot` | `role` | `channel` | `user` | `server`**"
        }/*,
        {
          "name": "> <:extras:854890985342369803>  ┋ Extra commands • 8",
          "value": "**~~`mine` | `fish` | `rps` | `throw` | `invite` | `8ball` | `avatarMC` | `skinMC`~~ **"
        }*/)
      .setColor(Config.colors.sketch)
      .setFooter("mcw!networks • Sketch Macaw's").setTimestamp()

  if(dmc){
    let CMD    = require("../cmd/"+dmc+".js")
      let desCMD = CMD.description
      var exaCMD = CMD.examples
      var usaCMD = CMD.usage
      var perCMD = CMD.permission

    let options = ["%server%", "%prefix%", "%user%"]
    let rep     = {
      "%server%": message.guild.name,
      "%prefix%": process.env['prefix'],
      "%user%": message.author.username
    }
    options.some(o => {
      for (let i = 0; 
           desCMD.includes(o) ||
           exaCMD.includes(o) ||
           usaCMD.includes(o) ||
           perCMD.includes(o); i++){
        desCMD = desCMD.replace(o, rep[o])
        exaCMD = exaCMD.replace(o, rep[o])
        usaCMD = usaCMD.replace(o, rep[o])
        perCMD = perCMD.replace(o, rep[o])
      }
    })
    const info = new Discord.MessageEmbed()
      .setAuthor("Command  「 "+args[0]+" 」", message.author.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .setColor(Config.colors.sketch)
      .setDescription(desCMD+"\n\n> **"+emojis.mcw.work+"Examples**\n `"+exaCMD+"`")
      .addFields({
        name: "> __"+emojis.mcw.wrech+" Usage__",
        value: "`"+usaCMD+"`",
        inline: true
      },{
        name: "> __"+emojis.emoti+" Permission's__",
        value: perCMD,
        inline: true
      })
      .setFooter("Syntax: <Require> [Option]")
    try{
      message.channel.send(info)
    }catch(e){}
  }else{
    message.channel.send(embed)
  }
    
  }
}