import { useEffect, useState } from "react"

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const vetor = [
                    {id:1,nome: "Sicrano", ira: 4.5 },
                    {id:2,nome: "Fulano", ira: 8.2 },
                    {id:3,nome: "Beltrano", ira: 7.3 }
                ]
                const meuInt = Math.floor((Math.random() * 10)) + 1
                if (meuInt === 1) reject({ id: 1, msg: "ERRO DE CONEXÃO" })
                else if (meuInt === 2) reject({ id: 2, msg: "ERRO DE DADOS" })
                else resolve({ id: meuInt, msg: "OK", vetor })
            }
            ,
            3000
        )
    }
)
const Questao01 = () => {
    const [meusDados, setMeusDados] = useState([])
    useEffect(
        () => {
            MinhaPromessa
                .then(
                    (data) => {
                        console.log("ID : " + data.id)
                        console.log("MSG : " + data.vetor)
                        setMeusDados(data.vetor)
                    }
                )
                .catch(
                    (error) => {
                        console.log("ID : " + error.id)
                        console.log("MSG : " + error.msg)
                    }
                )
        }
        ,
        []
    )
    return (
        <>
            <h1>Questão 01</h1>
            {
                meusDados.map(
                    (dado, index) => <h3 key={index + dado.nome}>{dado.nome} - {dado.ira}</h3>
                )
            }
        </>
    )
}
export default Questao01