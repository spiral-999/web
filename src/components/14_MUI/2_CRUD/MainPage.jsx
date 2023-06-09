import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1"
import { Container } from "@mui/material"
import CadastrarProfessor from "./professor/cadastrar"
import ListarProfessor from "./professor/listar"
import EditarProfessor from "./professor/editar"
const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx = {{mt:4}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />} />
                    <Route path="listarProfessor" element={<ListarProfessor />} />
                    <Route path="editarProfessor/:id" element={<EditarProfessor />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}
export default MainPage