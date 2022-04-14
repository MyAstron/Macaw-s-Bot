module.exports = {
  use: async (Discord, message, Config, command) => {
  let emojis = Config.emojis

    if(command){
        const faq = require('../mcw-config/faq/normal.js')
      faq.req(Discord, message, Config, emojis)
    }else{
        const faq = require('../mcw-config/faq/text.js')
      faq.req(Discord, message, Config, emojis)
    }
  }
}