import { Client, Collection, GatewayIntentBits } from 'discord.js'

class DiscordClient {
  private client: Client
  private options = {
    handlers: ['command-handler', 'event-handler']
  }

  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    })

    this.createCollections()
    this.loadHandlers()
  }

  private createCollections() {
    this.client.command = new Collection()
    this.client.event = new Collection()
  }

  private loadHandlers(): void {
    this.options.handlers.forEach(handler => {
      import(`../handlers/${handler}`).then(module => {
        const handler = module.default
        handler(this.client)
      })
    })
  }

  public login(token: string): void {
    this.client.login(token)
  }
}

export default DiscordClient
