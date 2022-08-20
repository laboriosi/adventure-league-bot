import client from '~client'
import { ready } from '~events'
import 'dotenv/config'

client.on('ready', ready);
client.login(process.env.CLIENT_TOKEN);
