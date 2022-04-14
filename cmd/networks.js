module.exports = {
  use: async (Discord, message, Config) => {
  let emojis = Config.emoji
  let links  = Config.link
    
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
    .setTitle(emojis.feather.right+`Networks from Sketch Macaw's`+emojis.feather.left)
    .setURL(links.discord)
    .setColor(Config.colors.sketch)
    .addFields({
      "name": emojis.youtube+'Youtube Channel', 
      "value": '[Youtube Link]('+links.youtube+')', 
      "inline": true
    },{
      "name": emojis.planet_mc+'Planet Minecraft', 
      "value": '[Planetminecraft Link]('+links.planet_mc+')', 
      "inline": true
    },{
      "name": emojis.instagram+'Instagram Profile', 
      "value": '[Instagram Link]('+links.instagram+')', 
      "inline": true
    },{
      "name": emojis.twitter+'Twitter', 
      "value": '[Twitter Link]('+links.twitter+')', 
      "inline": true
    },{
      "name": emojis.forge+'Curse Forge', 
      "value": '[CurseForge Link]('+links.curse_forge+')', 
      "inline": true
    },{
      "name": emojis.github+'Bug Tracker', 
      "value": '[Github Link]('+links.github+')', 
      "inline": true
    },{
      "name": emojis.craft+'Crafting Recipes', 
      "value": '[Google Link]('+links.craft+')', 
      "inline": true
    })
    .setFooter('Follow Me !!', links.sketch.avatar).setTimestamp()
  message.channel.send(embed)
  }
}

/* 
 *   Patreon Field:
 *  '<:patreon:782104005118918666> Patreon:', '[Patreon Link](https://bit.ly/36eSquT)', true
 */