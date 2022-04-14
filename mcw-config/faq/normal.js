module.exports = {
  req: async (Discord, message, Config, emojis) => {    
  const embed = new Discord.MessageEmbed()
    .setTitle(emojis.faq+' Frequently Asked Questions'+emojis.feather.left).setURL(Config.link.discord)
    .setDescription("_FAQ does not offer you the answer for you question? Please use <#673509938219319316> or just ask in the chat. We are here too._ "+emojis.mcw.wink)
    .addFields({
      name: emojis.question+"Where can I report bugs & other issues I have with Macaw's mods?",
      value: "> "+emojis.answer+"There are two possibilities. You can use <#871507359002947624> for reporting some serious bugs (read the rules for tickets).\nGithub is also a possibility. <#855066859636129793>"
    },{
      name: emojis.question+"Do you plan to port your mods to Fabric?",
      value: "> "+emojis.answer+"Yep, we already ported some, more should be coming soon.."
    },{
      name: emojis.question+"I can't see all the channels here. What is the problem?",
      value: "> "+emojis.answer+"You have to accept the rules in 📍│ <#831485064525250560>"
    },{
      name: emojis.question+"Do you have any plans on downporting to 1.15 and lower?",
      value: "> "+emojis.answer+"Very unlikely, but it could happen."
    },{
      name: emojis.question+"Can I use your mods in my modpack?",
      value: "> "+emojis.answer+"Yes, but if you are making it public you have to credit/list me for my mods."
    })
    .setColor(Config.colors.sketch)
    .setFooter('I hope this helps you <3', message.author.avatarURL())
    .setTimestamp(new Date('Sunday, March 13, 2022, 6:28:00'))  

    
  const embed2 = new Discord.MessageEmbed()
    .setTitle(emojis.faq+' Frequently Asked Questions'+emojis.feather.left).setURL(Config.link.discord)
    .setDescription("_FAQ does not offer you the answer for you question? Please use <#673509938219319316> or just ask in the chat. We are here too._ "+emojis.mcw.wink)
    .addFields({
      name: emojis.question+"Will you still support 1.16.5 ?",
      value: "> "+emojis.answer+"Yes, for now. Just like 1.17 and 1.18 (Fabric will be supported just for 1.18)"
    },{
      name: emojis.question+"Are you planning to include BOP addon for variations?",
      value: "> "+emojis.answer+"You should check out "+Config.link.forge+" he has done some compatibility mods with Macaw's mods"
    },{
      name: emojis.question+"Will there be any new mods?",
      value: "> "+emojis.answer+"Yes, just look in <#870681093605572688>, if you don't see this channel accept the rules in <#831485064525250560>"
    },{
      name: emojis.question+"I have a translation, will you add it?",
      value: "> "+emojis.answer+"Yes, just send it to me."
    },{
      name: emojis.question+"Can i make an article about your mod somewhere, or just post it somewhere?",
      value: "> "+emojis.answer+"You can, but you have to use my official download links from curseforge. They cannot be modified!!"
    })
    .setColor(Config.colors.sketch)
    .setFooter('I hope this helps you <3', message.author.avatarURL())
    .setTimestamp(new Date('Sunday, March 13, 2022, 6:28:00'))
    
  message.channel.send(embed).then(FAQ => {
      FAQ.react(emojis.back[0])
      FAQ.react(emojis.next[0])
      FAQ.awaitReactions((react, user) => {
        if(message.author.id === user.id){
          if(react.emoji.id == emojis.back[1]){
              FAQ.edit(embed)
            react.users.remove(user.id)
          }else
          if(react.emoji.id == emojis.next[1]){
              FAQ.edit(embed2)
            react.users.remove(user.id)
          }
        }
      })
    })
  }
}