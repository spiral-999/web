import { Container, Box, Button, Link, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
const Signin = () => {
    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const user = {usuario, senha}
        axios.post("http://localhost:3001/users/auth", user)
        .then (
            (response)=> {
                console.log(response.data.res)
                if (response.data.res === "true") {
                    // Se a response conter o valor true, então o usuário e senha estão corretos
                    localStorage.setItem("res", response.data.res) // Aqui salvamos o valor true no localStorage
                }
            }
        )
        .catch (error=>console.log(error))
    }
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 8,
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography
                    component="h1"
                    variant="h5"
                > {/*colocar textos mais importantes}*/}
                    Signin 
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus

                    label="Usuario"
                    id = "usuario"
                    name = "usuario"
                    type = "usuario"
                    onChange={(event)=>setUsuario(event.target.value)}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Senha"
                    id = "password"
                    name = "password"   
                    type = "password"
                    onChange={(event)=>setSenha(event.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    type='submit'
                    sx={{
                        mt: 3,mb: 2,
                    }}
                >
                    Sign In
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Link
                        underline="none"
                        href="#"
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline="none"
                        href="#"
                    >
                        Não tem uma conta? Registre-se
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}
export default Signin