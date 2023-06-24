import { Client } from 'discord.js'

export default function ready(client: Client) {
  console.log(`Logged as in ${client.user?.tag}`)
}
