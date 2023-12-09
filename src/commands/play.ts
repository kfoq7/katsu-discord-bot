import type { Command } from '../types'

const playCommand: Command = {
  name: 'play',
  aliases: [],
  description: 'Play a command to ',
  execute: async ({ message }) => {
    message.channel.send("Hello I'm ready to play any song")
  },
}

export default playCommand
