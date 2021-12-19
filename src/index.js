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

const frases = [
  'Estou precisando de uma namorada',
  'A procura de uma namorada',
  'Só queria uma namoradinha',
  'Não aguento mais dormir sozinho',
  'Prometi pra mim que a próxima que beijasse ia namorar, por enquanto tô cumprindo a risca',
  'Não aguento mais ser solteiro',
  'Já é domingo. Alguém p namorar comigo até às 23h59????',
  'hoje eu vou arrumar uma namorada',
  'Preciso arrumar uma namorada',
  'Não vai ter jeito, vou ter que começar a namorar',
  'Essa vida de solteiro não dá mais não',
  'Começar a namorar já virou questão de saúde pública, não dá mais'
]

cron.schedule('30 19 * * sun', () => {
  T.post('statuses/update', { status: `${frases[Math.floor(Math.random() * frases.length)]}`})
}, {
  timezone: "America/Sao_Paulo",
  scheduled: true,
});

cron.schedule('0 18 * * sun', () => {
  T.post('statuses/update', { status: 'Amigos, o que farão hoje?'})
}, {
  timezone: "America/Sao_Paulo",
  scheduled: true,
})

