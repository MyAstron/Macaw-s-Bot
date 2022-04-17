module.exports = {
  description: 'Say Somthing in a Channel',
  examples: '%prefix%ntw`, `%prefix%networks',
  usage: '%prefix%net',
  permission: '`MANAGE_MESSAGES` - from the User)',
  use: async (Discord, message, Config, client, args) => {    
    const error = new Discord.MessageEmbed()
      // .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setTitle(Config.emojis.mcw.what+"| Which is the message?! ")
      .setColor(Config.colors.mal)
      .setAuthor("mcw!say  <text>", Config.link.feather_red).setTimestamp() 
    const not = new Discord.MessageEmbed()
      .setTitle(Config.emojis.mcw.what+"| You do not have permissions To use the Command!")
      .setColor(Config.colors.mal)
      .setAuthor(message.member.user.tag, Config.link.feather_red).setTimestamp()

    if(!message.member.hasPermission("MANAGE_MESSAGES")){
      canal = client.channels.cache.get("942949642352599082")
        texto = message.author.username+' Try Say: ```'+args.join(" ")+'```'
      message.channel.send(not)
    }else
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