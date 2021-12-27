import cron from 'node-cron'
import { pegaFrase } from './frases'
import { postaFrase, sextouAmigos } from './services'
import dotenv from 'dotenv'
dotenv.config()

cron.schedule('0 18 * * sun', () => {
    postaFrase(pegaFrase())
}, {
    timezone: "America/Sao_Paulo",
})

cron.schedule('0 18 * * fri', () => {
    sextouAmigos()
}, {
    timezone: "America/Sao_Paulo"
})
