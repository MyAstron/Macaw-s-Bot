module.exports = {
  use: async(Discord, message, Config, args, client) => {
  let colors = Config.colors
  let emojis = Config.emojis
    let Roofs = require('../mcw-config/mods/roofs.js')
    let Doors = require('../mcw-config/mods/doors.js')
    let Bridges = require('../mcw-config/mods/bridges.js')
    let Fences = require('../mcw-config/mods/fences.js')
    let Furniture = require('../mcw-config/mods/furniture.js')
    let Lights = require('../mcw-config/mods/lights.js')
    let Painting = require('../mcw-config/mods/paintings.js')
    let Trapdoors = require('../mcw-config/mods/trapdoors.js')
    let Windows = require('../mcw-config/mods/windows.js')

  const Wait = new Discord.MessageEmbed()
    .setAuthor('Wait the Reactions', Config.link.loading)
    .setColor(colors.sketch)
  const Mini = new Discord.MessageEmbed()
    .setAuthor('Dashboard minimized', message.author.avatarURL())
    .setColor(colors.sketch)
  const Pannel = new Discord.MessageEmbed()
    .setAuthor(message.member.user.tag, 
        message.author.avatarURL({dynamic: true}))
    .setDescription(
      "**╭— Select The Mod —╮**\n"+
      "> ⇒ "+Bridges.emoji[0]+" 〃 Bridge's \n"+
      "> ⇒ "+Doors.emoji[0]+" 〃 Door's \n"+
      "> ⇒ "+Fences.emoji[0]+" 〃 Fence's \n"+
      "> ⇒ "+Furniture.emoji[0]+" 〃 Furniture's \n"+
      "> ⇒ "+Lights.emoji[0]+" 〃 Light's \n"+
      "> ⇒ "+Painting.emoji[0]+" 〃 Painting's \n"+
      "> ⇒ "+Roofs.emoji[0]+" 〃 Roof's \n"+
      "> ⇒ "+Trapdoors.emoji[0]+" 〃 Trapdoor's \n"+
      "> ⇒ "+Windows.emoji[0]+" 〃 Window's \n"+
      "**╰——————————╯**")
    .setFooter("*React to see it").setTimestamp()
    .setColor(colors.sketch)

    if(!args[0]){
        let Mod = require('../mcw-config/mods/funcions/mod.js')
      Mod.mod(Discord, message, Config, args, client, Wait, Mini, Pannel, colors, emojis, Bridges, Doors, Fences, Furniture, Lights, Painting, Roofs, Trapdoors, Windows)
    }else{
        let Mod = require('../mcw-config/mods/funcions/special.js')
      Mod.mod(Discord, message, Config, args, client, Wait, Mini, Pannel, colors, emojis, Bridges, Doors, Fences, Furniture, Lights, Painting, Roofs, Trapdoors, Windows)
    }
  }
}