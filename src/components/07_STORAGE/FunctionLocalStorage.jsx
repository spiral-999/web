const SaveData = () =>{
    const saveData = () =>{
        const aluno = {nome:"Mateus", curso:"CC"}
        localStorage.setItem("aluno01", JSON.stringify(aluno))
        sessionStorage.setItem("Disciplina", "Desenvolvimento de Sotware Web")
    }
    return(
        <div>
            <h1>Saving Data...</h1>
            {saveData()}
            <LoadData/>
        </div>
    )
}
const LoadData = () =>{
    const loadData = () =>{
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        return(
            <>
            <h3>Nome : {alunoCarregado.nome}</h3>
            <h3>Curso : {alunoCarregado.curso}</h3>
            </>
        )
    }
    return(
        <div>
            <h1>Loading Data...</h1>
            {loadData()}
        </div>
    )
}
export default SaveData