import { Command } from '../types'

export default {
  name: 'ping',
  description: 'Response ping to pong',
  execute: async ({ message }) => {
    message.channel.send('Pong!')
  }
} as Command
