import { Client, Message } from 'discord.js'

interface CommandArgs {
  client: Client
  message: Message
  args: string[]
  cmd: string
}

export interface Command {
  name: string
  description: string
  aliases: string[]
  execute: (args: CommandArgs) => Promise<void>
}
