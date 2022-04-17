module.exports = {
  description: 'Check the %server% FAQ\'s',
  examples: '%prefix%faq` or just `faqs',
  usage: '%prefix%ban',
  permission: '`SEND_MESSAGES` - from the Bouth (Bot and User)',
  use: async (Discord, message, Config, command, client) => {
  let emojis = Config.emojis

    if(Config.faqs.some(faqs => command == faqs)){
        const faq = require('../mcw-config/faq/normal.js')
      faq.req(Discord, message, Config, emojis)
    }else{
        const faq = require('../mcw-config/faq/text.js')
      faq.req(Discord, message, Config, emojis, client)
    }
  }
}