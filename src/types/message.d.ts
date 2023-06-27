import { ColorResolvable } from 'discord.js'

interface Field {
  name: string
  value: string
  inline?: boolean
}

interface Footer {
  text: string
  iconURL?: string
}

export interface EmbedOptions {
  title: string
  color?: ColorResolvable
  _URL?: string
  description?: string
  thumbnail?: string
  fields?: Field[]
  image?: string
  timestamp?: boolean
  footer?: Footer
}
