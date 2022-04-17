module.exports = {
  use: async (Discord, message, Config, args, client, Util) => {
    let CMD    = require("./"+args[1]+".js")
      var desCMD = CMD.description
      var exaCMD = CMD.example
      var usaCMD = CMD.usage
      var perCMD = CMD.permission
    let emojis = Config.emojis

    let options = ["%server%", "%prefix%", "%user%"]
    let rep     = {
      "%server%": message.guild.name,
      "%prefix%": process.env['prefix'],
      "%user%": message.author.username
    }
    let texts   = [desCMD, exaCMD, usaCMD, perCMD]
    options.some(o => {
      texts.some(t => {
        if(t.includes(`${o}`)){
          t = t.replace(o, rep[o])
        }
        message.channel.send(Util.cleanContent(t, t)).catch(e => e)
      })
    })
    // for (let i = 0; desCMD.includes("%user%"))
    
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
    const info = new Discord.MessageEmbed()
      .setAuthor(args[1], client.user.avatarURL())
      .setColor(Config.colors.sketch)
      .setDescription(description)

    
    message.channel.send(embed);
  }
}