import client from '~client'
import { ChannelType } from '~types'

export default async () => {
    const channel = client.channels.cache.get(process.env.CHARACTER_CREATION_CHANNEL_ID);

    if (channel.type === ChannelType.GuildText) {
        channel.send('Olá, mundo!')
    }
}