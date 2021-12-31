import EventEmitter from 'events'
import { postaFrase, sextouAmigos } from './services'
import { pegaFrase } from './frases'

import dotenv from 'dotenv'
dotenv.config()

export const eventEmitter = new EventEmitter()

eventEmitter.on("friday", () => {
    sextouAmigos()
})

eventEmitter.on("sunday", () => {
    postaFrase(pegaFrase())
})