import { useEffect, useState } from "react"
function Questao01X() { 
//Função criada usando function
    const [medias, setMedias] = useState([]) // variável para guardar a média recebida do filho
    function mensagemParaFilho(medias) {
        setMedias(medias) //função demonstrada na primeira dica
    }
    const alunos = [
        {nome: "João", notas: {ap1: 0.6, ap2: 2.1}},
        {nome: "Sicrano", notas: {ap1: 3.2, ap2: 1.4}},
        {nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5}},
        {nome: "Fulano", notas: {ap1: 0.0, ap2: 4.2}},
        {nome: "Mateus", notas: {ap1: 9.5, ap2: 10.0}},
    ]
    return (
        <div>
            <h1>MÉDIAS UFC QUIXADA</h1>
            <Questao01Y alunos={alunos} comunica={mensagemParaFilho}/>
            <h1>Alunos com média menor que 5.0</h1>
            {medias.map( //map feito para demonstrar a segunda dica
                (media) => {
                    return media.media <= 5 ? 
                    <h1 style = {{color:"red"}}>{media.nome}</h1> : null
                }
            )
            }
        </div>
    )
}
const Questao01Y = ({alunos, comunica}) => {
//Função criada usando arrow function
    const [medias, setMedias] = useState([])
    useEffect(() => {
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2
            return {nome: aluno.nome, media}
        })
        setMedias(medias)
    }
    ,
    [alunos]
    )
    // Função que retorna as médias para o componente Pai
    function mensagemParaPai(medias) {
        comunica(medias)
    }
    return (
        <div>
            {mensagemParaPai(medias)}
        </div>
    )

}

export default Questao01X