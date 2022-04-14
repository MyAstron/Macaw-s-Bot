module.exports = {
  req: async (Discord, message, Config, emojis, client) => {
    const text = new Discord.MessageEmbed()
      .setAuthor('Do you wanna see the FAQ\'s?', message.author.avatarURL({ dynamic: true}))
      .setColor(Config.colors.sketch)
    const m = await message.channel.send(text)
      m.react(emojis.yes[0])
      m.react(emojis.nop[0])
      m.awaitReactions((react, user) => {
        if(user.id != client.user.id){
          if(react.emoji.id == emojis.yes[1]){
            m.delete()
              const faq = require('./normal.js')
            faq.req(Discord, message, Config, emojis)
          }else
          if(react.emoji.id == emojis.nop[1]){
            message.reply(" Sorry to bother you..")
              .then(s => setTimeout(() =>{ s.delete() }, 2500))
            m.delete()
          }
        }
      })
  }
}