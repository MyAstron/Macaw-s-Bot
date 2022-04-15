module.exports = {
  use: async (Discord, message, Config, args) => {
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
    message.channel.send(embed);
  }
}