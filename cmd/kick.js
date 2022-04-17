module.exports = {
  use: async(Discord, message, Config, args) => {
    let emojis = Config.emojis
    let link   = Config.link
    let colors = Config.colors
    
    const error1 = new Discord.MessageEmbed()
      .setAuthor('mcw!kick  \'@user\' reason', link.feather_red)
      .setTitle(emojis.mcw.what+"| You didn't mention anyone to kick out! ")
      .setColor(colors.mal)
      .setFooter("Are You Sure to Kick Out some one?").setTimestamp()
    const error2 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setTitle(emojis.mcw.heh+"| You can't Kick Out yourself! ")
      .setColor(colors.peachy)
    const error3 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setTitle(emojis.mcw.knife+"| You do not have permissions to Kick Out people! ")
      .setColor(colors.mal)
      .setTimestamp()
    const error4 = new Discord.MessageEmbed()
      .setAuthor('Give Me the permissions for `Kick Members`', message.author.avatarURL({ dynamic: true}))
      .setTitle(emojis.mcw.angry+"| I do not have permissions to Kick Out people! ")
      .setColor(colors.mal)
      .setTimestamp()
    const error5 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .addField(emojis.mcw.work+"Remember...", "> "+emojis.dnd[0]+" I need a Role to Stay on the Top from the Role's\n> "+emojis.online[0]+' My Beast Role need the permission `KICK_MEMBERS`\n If any of these **Requirement\'s** are not met, the command does\'t work')
      .setColor(colors.medio)
    const error6 = new Discord.MessageEmbed()
      .setAuthor('mcw!kick  @user \'reason\'', link.feather_red)
      .setTitle(emojis.mcw.what+"| You didn't say a reason for kick out! ")
      .setColor(colors.mal)
      .setFooter("Are You Sure to Kick Out some one?").setTimestamp()

    const role = message.guild.roles.cache.find((role) => role.name == 'MacawBot');
    
    let canal = message.channel;
    let kickeado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
      if(role.position < 5) return message.channel.send(error5)
      if (!kickeado) return message.channel.send(error1)
      if (!razon) return message.channel.send(error6)
      if (message.author === kickeado) return message.channel.send(error2)
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(error3)
      if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(error4)
    const embedkick = new Discord.MessageEmbed()
      .setAuthor(kickeado.username+`#${kickeado.discriminator}`, message.guild.iconURL({ dynamic: true }))
      .setDescription("**"+kickeado.username+" • has been kicked from "+message.guild.name+"!!** \n> **Razon**: "+razon)
      .setThumbnail(kickeado.avatarURL({ dynamic: true }))
      .setFooter("Moderation: "+message.member.user.tag, message.author.avatarURL({ dynamic: true })).setTimestamp().setColor(colors.peachy)

    try {
      message.guild.member(kickeado).kick(razon);
      canal.send(embedkick)
    }catch(e){
      canal.send(error5)
    }
  }
}