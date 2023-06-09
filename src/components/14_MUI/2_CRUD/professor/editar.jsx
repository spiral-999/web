import { TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Editar = () => {
    let { id } = useParams()
    const professores = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST", ai: { es: false, al: false, ds: true, mc: true } },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD", ai: { es: false, al: true, ds: false, mc: false } },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST", ai: { es: false, al: true, ds: false, mc: true } },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: false } },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST", ai: { es: true, al: false, ds: false, mc: true } },
    ]
    function getProfessorById(id) {
        for (let i = 0; i < professores.length; i++)
            if (id == professores[i].id) return professores[i]
        return null
    }
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({ es: false, al: false, ds: false, mc: false })
    const { es, al, ds, mc } = ai
    useEffect(
        () => {
            let professor = getProfessorById(id)
            setNome(professor.nome)
            setCurso(professor.curso)
            setTitulacao(professor.titulacao)
            setAi(professor.ai)
        }
        ,
        []
    )
    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)
    }
    function handleCheckbox(event) {
        setAi({
            ...ai,
            [event.target.name]: event.target.checked
        })
    }
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor {id}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    value={nome}
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    value={curso}
                    autoFocus
                    onChange={(event) => setCurso(event.target.value)}
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    component="fieldset"
                    variant="standart"
                    sx={{ mt: 2, ml: 2 }}
                >
                    <FormLabel
                        component="legend"
                        sx={{ fontSize: 12, mt: 2 }}
                    >
                        Áreas de Interesse
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox} />} label="Desenvolvimento de Software" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox} />} label="Matematica Computacional" />
                    </FormGroup>
                </FormControl>
                <Box sx={{ display: "flex", justifyContent: "center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 4, backgroundColor: "red" }}
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Editar