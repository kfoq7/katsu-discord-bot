import { Client, Collection } from 'discord.js'
import { Command } from './command'

declare module 'discord.js' {
  export interface Client extends Client {
    command: Collection<string, Command>
    event: Collection
  }
}

export * from './client'
export * from './command'
