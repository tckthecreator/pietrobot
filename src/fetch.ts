import Twitter from 'twit'

const consumer_key = process.env.TWITTER_API_KEY ? process.env.TWITTER_API_KEY : ''
const consumer_secret = process.env.TWITTER_API_SECRET ? process.env.TWITTER_API_SECRET : ''
const access_token_key = process.env.TWITTER_ACCESS_TOKEN ? process.env.TWITTER_ACCESS_TOKEN : ''
const access_token_secret = process.env.TWITTER_ACCESS_SECRET ? process.env.TWITTER_ACCESS_SECRET : ''

const T = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token: access_token_key,
    access_token_secret: access_token_secret,
    timeout_ms:           60*1000,
})

export const postaFrase = (frase: string) => {
    T.post('statuses/update', { status: frase })
}