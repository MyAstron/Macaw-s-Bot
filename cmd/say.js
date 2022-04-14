module.exports = {
  use: async (Discord, message, Config, args) => {    
    const error = new Discord.MessageEmbed()
      // .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setTitle(Config.emojis.mcw.what+"| Which is the message?! ")
      .setColor(Config.colors.mal)
      .setAuthor("mcw!say  <text>", Config.link.feather_red).setTimestamp()

    if(message.mentions.channels.first()){
      canal = message.mentions.channels.first()
        texto = args.slice(1).join(" ")
    }else
    if(message.mentions.users.first()){
      canal = message.mentions.users.first()
        texto = args.slice(1).join(" ")
    }else{
      canal = message.channel
        texto = args.join(" ")
    }


    try{
    canal.send(!texto ? error : texto)
    !texto ? '' : message.delete()
    }catch(e){
      console.log(e)
    }
  }
}