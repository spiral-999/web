import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Editar = () => {

    let { id } = useParams()
    const navigate = useNavigate()
    const [nome,setNome] = useState("")                              
    const [curso,setCurso] = useState("")                                  
    const [titulacao, setTitulacao] = useState("GRAD")                     
    const [ai, setAi] = useState({cg:false, mc:false, al:false, es:false}) 
    let { cg, mc, al, es } = ai

    function handleSubmit(event) {
        event.preventDefault()
        const professor = {nome,curso,titulacao,ai}
        axios.put(`http://localhost:3001/professores/atualizar/${id}`,professor)
        .then((response)=>{
            navigate("/listarProfessor")
        })
        .catch(error=>console.log(error))
    }

    useEffect(
        () => {
            axios.get(`http://localhost:3001/professores/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setTitulacao(response.data.titulacao)
                        setAi(response.data.ai)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleCheckbox (event) {
        setAi ({ 
            ...ai, [event.target.name]: event.target.checked
        })
    }
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
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
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Curso"
                    value={curso}
                    id="curso"
                    name="curso"
                    onChange={(event)=>setCurso(event.target.value)}
                />
                <FormControl sx={{marginTop: 2, width:"100%"}}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD"> Graduação</MenuItem>
                        <MenuItem value="MEST"> Mestrado</MenuItem>
                        <MenuItem value="DOUT"> Doutorado</MenuItem>
                    </Select>
                </FormControl>S
                <FormControl sx={{mt: 2, ml: 2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize: 12, mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox} />} label="Engenharia de Sofware" />
                    </FormGroup>
                </FormControl>
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
export default Editar