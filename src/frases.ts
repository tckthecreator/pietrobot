const frases: Array<string> = [
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

export const pegaFrase = (): string => {
    return frases[Math.floor(Math.random() * frases.length)]
}