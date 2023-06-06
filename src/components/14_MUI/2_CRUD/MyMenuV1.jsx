import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyMenu = () => {
    const [anchorElProfessor, setAnchorElProfessor] = useState(null)
    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }
    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }
    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                    <Typography>Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to={"listarProfessor"}
                    >
                    <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }


    return (
        <AppBar position="static" sx={{ backgroundColor: "red" }}>
            <Container>
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}
                    >
                        CRUD VERSÃO_UM
                    </Typography>
                    <Box sx={{ ml: 3, display: "flex", justifyContent: "flex-end", width: "100%" }}>
                        {dropProfMenu()}
                        <Button sx={{ color: "white", my: 2 }}>
                            Alunos
                        </Button>
                        <Button sx={{ color: "white", my: 2 }}>
                            Sobre
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default MyMenu