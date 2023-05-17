import { useState, useEffect } from "react"

const Populacao = () => {
    const [maiorPopulacao, setMaiorPopulacao] = useState({})
    const [menorPopulacao, setMenorPopulacao] = useState({})
    //variaveis para guardar o nome e a população dos paises com mais e menos população

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                let maiorPopulacao = data[0].population
                let menorPopulacao = data[0].population
                let Maior = Math.min // recebendo o valor máximo para assegurar a troca de valores
                let Menor = Math.max // recebendo o valor mínimo para assegurar a troca de valores
                for (let i = 0; i < data.length; i++) {
                    if (data[i].population > maiorPopulacao) {
                        maiorPopulacao = data[i].population
                        Maior = i // descobre o [i] que se encontra a capital com maior população
                    }
                    if (data[i].population < menorPopulacao) {
                        menorPopulacao = data[i].population
                        Menor = i // descobre o [i] que se encontra a capital com menor população
                    }
                }

                // criando um objeto com nome da capital e população
                setMaiorPopulacao({capital: data[Maior].capital[0], populacao: maiorPopulacao})
                setMenorPopulacao({capital: data[Menor].capital[0], populacao: menorPopulacao})

            }
        )
        .catch(error => console.log(error))
    }
    ,
    [maiorPopulacao, menorPopulacao]) // useEfect que manipula os dados de maior e menor população

    return (
        <div>
            <h1 style = {{color:"red"}}>Capital com Maior População : {maiorPopulacao.capital}</h1>
            <h1 style = {{color:"red"}}>Quantidade de Habitantes da Mais Populosa : {maiorPopulacao.populacao}</h1>
            <h1 style = {{color:"green"}}>Menor População: {menorPopulacao.capital}</h1>
            <h1 style = {{color:"green"}}>Quantidade de Habitantes da Menos Populosa : {menorPopulacao.populacao}</h1>
        </div>
    )

}

export default Populacao