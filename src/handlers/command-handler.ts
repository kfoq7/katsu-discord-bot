import { readdirSync } from 'node:fs'
import { Client } from 'discord.js'
import type { Command } from '../types'

const PATH_COMMANDS = `${__dirname}/../commands`

export default function commandHandler(client: Client): void {
  const loadCommand = (filename: string, command: Command) => {
    const commandName = filename.split('.').shift() ?? ''
    client.command.set(commandName, command)
  }

  readdirSync(PATH_COMMANDS).forEach(filename => {
    if (filename.endsWith('.js')) {
      import(`../commands/${filename}`).then(module => {
        const command = module.default
        loadCommand(filename, command)
      })
    }
  })
}
