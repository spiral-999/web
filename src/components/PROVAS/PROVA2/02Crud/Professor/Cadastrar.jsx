import { Box, Button, TextField, Typography } from "@mui/material"
import { FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { Checkbox, InputLabel, MenuItem, Select } from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Cadastrar = () => {
    
    const [nome,setNome] = useState("") 
    const [curso,setCurso] = useState("") 
    const [titulacao, setTitulacao] = useState("GRAD") 
    const [ai, setAi] = useState({cg:false, mc:false, al:false, es:false}) 
    let { cg, mc, al, es } = ai
    let navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        const professor = {nome, curso, titulacao, ai}
        axios.post("http://localhost:3001/professores/cadastrar", professor)
        .then (
            (response)=> {
                alert(`Professor ${response.data.nome} cadastrado com sucesso!`)
                navigate("/listarProfessor")
            }
        )
        .catch (error=>console.log(error))
    }

    function handleCheckbox (event) {
        setAi ({ 
            ...ai, [event.target.name]: event.target.checked
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
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
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Curso"

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
                </FormControl>

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
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>

    )
}
export default Cadastrar