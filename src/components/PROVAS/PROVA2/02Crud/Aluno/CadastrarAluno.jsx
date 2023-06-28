import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const CadastrarAluno = () => {
    
    const [nome,setNome] = useState("")
    // setando o nome
    const [curso,setCurso] = useState("") 
    //setando o curso
    const [ira, setIra] = useState("0.0") 
    //setando o ira

    let navigate = useNavigate()
    
    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome, curso, ira}
        axios.post("http://localhost:3001/alunos/cadastrar", aluno)
        .then (
            (response)=> {
                alert(`Aluno ${response.data.nome} cadastrado!`)
                navigate("/listarAluno")
                //cadastra o aluno e mostra na lista
            }
        )
        .catch (error=>console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    id="nome"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                    
                />
               <FormControl sx={{marginTop: 2, width:"100%"}}>
                    <InputLabel id="select-tit-label">Curso</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="DD"> Design Digital</MenuItem>
                        <MenuItem value="SI"> Sistemas de Informação</MenuItem>
                        <MenuItem value="CC"> Ciência da Computação</MenuItem>
                        <MenuItem value="ES"> Engenharia de Software</MenuItem>
                        <MenuItem value="EC"> Engenharia da Computação</MenuItem>
                        <MenuItem value="RC"> Redes de Computadores</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) =>setIra(parseFloat(e.target.value))}
                />

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>

    )
}

export default CadastrarAluno