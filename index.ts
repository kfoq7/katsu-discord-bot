/* eslint @typescript-eslint/no-empty-function: 0 */
import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`)
})

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('pong')
  }
})

client.login(process.env.DISCORD_TOKEN)
