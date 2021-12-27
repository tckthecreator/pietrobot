import cron from 'node-cron'
import { pegaFrase } from './enum'
import { postaFrase } from './fetch'
import dotenv from 'dotenv'
dotenv.config()

cron.schedule('30 19 * * sun', () => {
    postaFrase(pegaFrase())
}, {
    timezone: "America/Sao_Paulo",
})
