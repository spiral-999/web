const FilhoA = ({meuVetor,enviarMaior}) =>{
    const maiorElemento = () =>{
        const maior = Math.max(...meuVetor)
        enviarMaior(maior)
    }
    return(
        <>
            <h1>Componente Filho A</h1>
            <button onClick={maiorElemento}>
                Maior Elemento
            </button>
        </>
    )
}
export default FilhoA