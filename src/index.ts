import EventEmitter from 'events'
import { postaFrase, sextouAmigos } from './services'
import { pegaFrase } from './frases'
import { CronJob } from "cron"

const fridayCron = new CronJob("0 18 * * fri", () => {
    sextouAmigos();
}, null, false, "America/Sao_Paulo")

const sundayCron = new CronJob("0 18 * * sun", () => {
    postaFrase(pegaFrase())
}, null, false, "America/Sao_Paulo")

fridayCron.start();
sundayCron.start();