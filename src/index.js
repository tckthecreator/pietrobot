require('dotenv').config()
const Twit = require('twit')
const cron = require('node-cron')
 
const T = new Twit({
  consumer_key:         process.env.TWITTER_API_KEY,
  consumer_secret:      process.env.TWITTER_API_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_SECRET,
  timeout_ms:           60*1000,     
})

cron.schedule('0 0 18 ? * SUN *', () => {
    T.post('statuses/update', { status: 'Estou precisando de uma namorada amigos'})
});