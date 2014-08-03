var coolFace = require('cool-ascii-faces')

cool.help = '!face - print a cool ascii face'

module.exports = cool

function cool(ziggy) {
  ziggy.on('message', parseMessage)

  function parseMessage(user, channel, message) {
    if(message === '!face') ziggy.say(channel, coolFace())
  }
}
