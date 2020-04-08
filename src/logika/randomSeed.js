//generisanje random brojeva za mete

const randomSeed = () => {
    let randomVelicina = Math.floor(Math.random() * 60 + 30)
    let randomPozicijaX = Math.floor(Math.random() * (900 - randomVelicina) + randomVelicina)
    let randomPozicijaY = Math.floor(Math.random() * (500 - randomVelicina) + randomVelicina)

    return [randomVelicina, randomPozicijaX, randomPozicijaY]
}

export default randomSeed;