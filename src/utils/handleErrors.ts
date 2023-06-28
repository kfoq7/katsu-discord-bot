import { Message } from 'discord.js'

export function handleError(error: unknown, message: Message) {
  if (error instanceof Error) {
    message.channel.send(error.message)
    console.log({ error: error.message })
  }
}
