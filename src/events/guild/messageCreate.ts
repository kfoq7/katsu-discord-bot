import { Client, Message } from 'discord.js'

export default function messageCreate(client: Client, message: Message) {
  const prefix = process.env.PREFIX ?? ''

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const cmd = args.shift()?.toLowerCase() ?? ''

  const command =
    client.command.get(cmd) || client.command.find(c => c.aliases && c.aliases.includes(cmd))

  try {
    command?.execute({ client, message, args, cmd })
  } catch (err) {
    message.channel.send('There was an error trying to execute this command')
    console.log(err)
  }
}
