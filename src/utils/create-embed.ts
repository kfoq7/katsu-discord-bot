import { EmbedBuilder } from 'discord.js'
import { EmbedOptions } from '../types'

export const createMesssageEmbed = ({
  title,
  color,
  description,
  _URL,
  thumbnail,
  fields,
  image,
  timestamp,
  footer,
}: EmbedOptions): EmbedBuilder => {
  const messageEmbed = new EmbedBuilder()
  messageEmbed.setTitle(title)
  messageEmbed.setColor(color ?? '#F7EC16')

  if (description) {
    messageEmbed.setDescription(description)
  }

  if (_URL) {
    messageEmbed.setURL(_URL)
  }

  if (thumbnail) {
    messageEmbed.setThumbnail(thumbnail)
  }

  if (fields) {
    messageEmbed.setFields(...fields)
  }

  if (image) {
    messageEmbed.setImage(image)
  }

  if (timestamp) {
    messageEmbed.setTimestamp()
  }

  if (footer) {
    messageEmbed.setFooter(footer)
  }

  return messageEmbed
}
