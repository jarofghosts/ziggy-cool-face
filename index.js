var coolFace = require('cool-ascii-faces')

var lookup = /^\!face \d+$/

cool.help = '!face - print a cool ascii face'

module.exports = cool

function cool(ziggy) {
  ziggy.on('message', parseMessage)

  function parseMessage(user, channel, message) {
    if(message === '!face') ziggy.say(channel, coolFace())
    if(lookup.test(message)) {
      ziggy.say(channel, coolFace.faces[+message.slice(6)])
    }
  }
}
