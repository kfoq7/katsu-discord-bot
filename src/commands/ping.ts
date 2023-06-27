import type { Command } from '../types'

const pingCommand: Command = {
  name: 'ping',
  aliases: [],
  description: 'Response ping to pong',
  execute: async ({ message }) => {
    message.reply('Pong!')
  },
}

export default pingCommand
