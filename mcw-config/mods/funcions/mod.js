module.exports = {
  mod: async (Discord, message, Config, args, client, Wait, Mini, Pannel, colors, emojis, Bridges, Doors, Fences, Furniture, Lights, Painting, Roofs, Trapdoors, Windows) => {
    message.channel.send(Wait).then(index => {
    index.react(emojis.trash[0])
    index.react(emojis.point[0])
    index.react(Bridges.emoji[0])
    index.react(Doors.emoji[0])
    index.react(Fences.emoji[0])
    index.react(Furniture.emoji[0])
    index.react(Lights.emoji[0])
    index.react(Painting.emoji[0])
    index.react(Roofs.emoji[0])
    index.react(Trapdoors.emoji[0])
    index.react(Windows.emoji[0])
    index.awaitReactions((react, user) => {
      if(user.id == client.user.id && react.emoji.id == Windows.emoji[1]){
        index.edit(Pannel)
      }
      if(message.author.id === user.id){

        switch (react.emoji.id){
          case emojis.trash[1]:
              index.edit(Mini)
            break;
          case emojis.point[1]:
              index.edit(Pannel)
            break;
          case Bridges.emoji[1]:
              Mod = Bridges
            break;
          case Doors.emoji[1]:
              Mod = Doors
            break;
          case Fences.emoji[1]:
              Mod = Fences
            break;
          case Furniture.emoji[1]:
              Mod = Furniture
            break;
          case Lights.emoji[1]:
              Mod = Lights
            break;
          case Painting.emoji[1]:
              Mod = Painting
            break;
          case Roofs.emoji[1]:
              Mod = Roofs
            break;
          case Trapdoors.emoji[1]:
              Mod = Trapdoors
            break;
          case Windows.emoji[1]:
              Mod = Windows
            break;
        }
        if(react.emoji.id == emojis.point[1]){
            react.users.remove(user.id)
          index.edit(Pannel)
        }else
        
        if(react.emoji.id == Mod.emoji[1]){
            react.users.remove(user.id)
          index.edit(
            Pannel
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
      emojis.mcw.clip+" **Links**: ["+emojis.youtube+"]("+Mod.link.youtube+") - ["+emojis.forge+"]("+Mod.link.forge+") - ["+emojis.craft+"]("+Mod.link.img.crafts[1]+")"
              )
              .setImage(Mod.link.img.banner)
          )
        }else
        if(react.emoji.id == emojis.trash[1]){
            react.users.remove(user.id)
          index.edit(Mini)
        }
      }else
      if(user.id != client.user.id){
          react.users.remove(user.id)
      }
    })
    })
  }
}