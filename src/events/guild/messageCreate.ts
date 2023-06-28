import type { Client, Message } from 'discord.js'
import { handleError } from '../../utils/handleErrors'
import { ApplicationError } from '../../errors'

export default async function messageCreate(client: Client, message: Message) {
  const prefix = process.env.PREFIX ?? ''

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const cmd = args.shift()?.toLowerCase() ?? ''

  const command =
    client.command.get(cmd) || client.command.find(c => c.aliases && c.aliases.includes(cmd))

  try {
    if (!command) {
      throw new ApplicationError('Missing command')
    }

    await command.execute({ client, message, args, cmd })
  } catch (err) {
    handleError(err, message)
  }
}
