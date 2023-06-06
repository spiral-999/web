import { Box, Button, Container, Link, TextField, Typography } from "@mui/material"

const Signin = () => {
    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection:"column",
                        alignItens:"center",
                        marginTop:8,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h4"
                    >
                        Sign In
                    </Typography>
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        autoFocus
                        label="Endereço de E-mail"
                        id="email"
                        name="email"
                        type="email"
                    />
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        autoFocus
                        label="Senha"
                        id="password"
                        name="password"
                        type="password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            my: 2
                        }}
                    >
                        Sign In
                    </Button>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width:"100%"
                        }}
                    >
                        <Link
                            underline="none"
                            href="#"
                        >
                            Esqueceu a Senha?
                        </Link>
                        <Link
                            underline="none"
                            href="#"
                        >
                            Cadastre-se!
                        </Link>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Signin