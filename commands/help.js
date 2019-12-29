const Command = require('../base/Command')

class Help extends Command{
  constructor(client){
    super(client, {
      name: "help",
      description: "shows all avaliable commands and descriptions",
      dirname: __dirname,
      enabled: true
    })
  }
}

module.exports = Help;