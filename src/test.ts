import { postaFrase } from './services'
import { pegaFrase } from './frases'
import { CronJob } from "cron"

console.log("inicio")
const testeCron = new CronJob("1 * * * * * ", () => {
    console.log("teste")
})
testeCron.start()

console.log("fim")


