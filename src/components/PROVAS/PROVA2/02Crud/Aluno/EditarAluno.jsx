import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
const EditarAluno = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    const [nome,setNome] = useState("")                
    const [curso,setCurso] = useState("")                                  
    const [ira, setIra] = useState("0.0")                                  

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.put(`http://localhost:3001/alunos/atualizar/${id}`,aluno)
        .then((response)=>{
            navigate("/listarAluno")
        })
        .catch(error=>console.log(error))
    }

    useEffect(
        () => {
            //let professor = getProfessorById(id)
            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setIra(response.data.ira)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        [id]
    )

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno
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
                    value={nome}
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
                        Editar
                    </Button>
                </Box>
            </Box>
        </>

    )
}
export default EditarAluno