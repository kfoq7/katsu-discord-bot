import { createAudioPlayer, createAudioResource, joinVoiceChannel } from '@discordjs/voice'
import { getAudioUrl } from 'google-tts-api'
import { ApplicationError } from '../errors'
import type { Command } from '../types'

const speakCommand: Command = {
  name: 'speak',
  aliases: ['sp', 'say', 'tts'],
  description: 'Speak a messsage in voice channel',
  execute: async ({ message, args }) => {
    const voiceChannel = message.member?.voice.channel
    const messageSpeak = args.join(' ')

    if (!voiceChannel) {
      throw new ApplicationError('Your are not in voice channel')
    }

    if (!messageSpeak) {
      throw new ApplicationError('You should specify the message!')
    }

    if (messageSpeak.length > 200) {
      throw new ApplicationError('The message is too long. `max length 200`')
    }

    const audioURL = getAudioUrl(messageSpeak, {
      lang: 'es',
      slow: true,
      host: 'https://translate.google.com',
    })

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guildId,
      adapterCreator: voiceChannel.guild?.voiceAdapterCreator,
    })

    const player = createAudioPlayer()
    connection.subscribe(player)

    const resource = createAudioResource(audioURL, { inlineVolume: true })
    player.play(resource)
  },
}

export default speakCommand
