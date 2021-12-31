import cron from 'node-cron'
import { eventEmitter } from './'

cron.schedule('0 18 * * fri', () => {
    eventEmitter.emit('friday')
}, {
    timezone: "America/Sao_Paulo"
})

cron.schedule('0 18 * * sun', () => {
    eventEmitter.emit('sunday')
}, {
    timezone: "America/Sao_Paulo",
})

