/* eslint @typescript-eslint/no-empty-function: 0 */
import 'dotenv/config'
import DiscordClient from './src/config/client'

const DISCORD_TOKEN = process.env.DISCORD_TOKEN ?? ''

const client = new DiscordClient()
client.login(DISCORD_TOKEN)
