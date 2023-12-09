import type { ColorResolvable, ButtonStyle, ComponentEmojiResolvable } from 'discord.js'

export interface Field {
  name: string
  value: string
  inline?: boolean
}

export interface Footer {
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

export interface Button {
  id: string
  label: string
  style: ButtonStyle
  disabled?: boolean
  URL?: string
  emoji?: ComponentEmojiResolvable
}

export type ComponentType = 'buttons' | 'select-menu'

export type ActionRowOptions = ButtonsOptions
