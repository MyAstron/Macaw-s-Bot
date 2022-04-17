module.exports = {
  mod: async (Discord, message, Config, args, client, Wait, Mini, Pannel, colors, emojis, Bridges, Doors, Fences, Furniture, Lights, Painting, Roofs, Trapdoors, Windows) => {
    if(Config.mod.bridg.some(mod => args[0] == mod)){
      Mod = Bridges
    }else
      if(Config.mod.door.some(mod => args[0] == mod)){
        Mod = Doors
    }else
      if(Config.mod.fences.some(mod => args[0] == mod)){
        Mod = Fences
    }else
      if(Config.mod.furn.some(mod => args[0] == mod)){
        Mod = Furniture
    }else
      if(Config.mod.light.some(mod => args[0] == mod)){
        Mod = Lights
    }else
      if(Config.mod.paint.some(mod => args[0] == mod)){
        Mod = Painting
    }else
      if(Config.mod.roofs.some(mod => args[0] == mod)){
        Mod = Roofs
    }else
      if(Config.mod.trap.some(mod => args[0] == mod)){
        Mod = Trapdoors
    }else
      if(Config.mod.window.some(mod => args[0] == mod)){
        Mod = Windows
    }
      const Dash = new Discord.MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
        .setTitle(Mod.emoji[0]+" Macaw's 「 "+Mod.mod+"'s 」 Mod ")
        .setURL(Mod.link.forge)
        .setDescription(
            Mod.description+"\n"+
              "**╭——— Versions ———** \n"+
              "> **Mod**: `"+Mod.version+"` \n"+
              "> - Minecraft Compatibility - \n"+
              "> **Fabric**: `"+Mod.mc.fabric+"` \n"+ 
              "> **Forge**: `"+Mod.mc.forge+"` \n"+
              "**╰——————————**\n"+
      emojis.mcw.clip+" **Links**: ["+emojis.youtube+"]("+Mod.link.youtube+") - ["+emojis.forge+"]("+Mod.link.forge+") - ["+emojis.craft+"]("+Mod.link.img.crafts[1]+")")
        .setImage(Mod.link.img.banner)
        .setColor(colors.sketch)
    message.channel.send(Dash)
  }
}