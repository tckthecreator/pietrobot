import Twitter from 'twit'
import dotenv from 'dotenv'
dotenv.config()

const consumer_key = process.env.consumer_key ? process.env.consumer_key : ''
const consumer_secret = process.env.consumer_secret ? process.env.consumer_secret : ''
const access_token = process.env.access_token ? process.env.access_token : ''
const access_token_secret = process.env.access_token_secret ? process.env.access_token_secret : ''

const T = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token: access_token,
    access_token_secret: access_token_secret,
})

export const postaFrase = (frase: string) => {
    T.post('statuses/update', { status: frase })
}

export const sextouAmigos = () => {
    T.post('statuses/update', { status: 'Amigos, o que farão hoje?' })
}
