const FilhoC = ({meuVetor,enviarMedia}) =>{
    const calcularMedia = () =>{
        let media = 0
        for(let i=0;i<meuVetor.length;i++) media += meuVetor[i]
        enviarMedia(media/meuVetor.length)
    }
    return(
        <>
            <h1>Componente Filho C</h1>
            <button onClick={calcularMedia}>
                Média
            </button>
        </>
    )
}
export default FilhoC