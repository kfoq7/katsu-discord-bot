import { readdirSync } from 'node:fs'
import { Client, ClientEvents } from 'discord.js'

const PATH_EVENTS = `${__dirname}/../events`

export default function eventHandler(client: Client): void {
  const dirsEvents = ['client', 'guild']

  dirsEvents.forEach(eventDir => {
    readdirSync(`${PATH_EVENTS}/${eventDir}`).forEach(filename => {
      if (filename.endsWith('.js')) {
        const eventName = filename.split('.').shift() as keyof ClientEvents

        import(`../events/${eventDir}/${filename}`).then(module => {
          const eventFunc = module.default
          client.on(eventName, (...args) => eventFunc(client, ...args))
        })
      }
    })
  })
}
