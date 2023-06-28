import {BrowserRouter, Route, Routes} from "react-router-dom"
import MyMenu from "./MyMenu";
import Signin from "../01Signin/Signin";
import { Container } from "@mui/material";
import CadastrarProfessor from "./Professor/Cadastrar";
import ListarProfessor from "./Professor/Listar";
import EditarProfessor from "./Professor/Editar";
import CadastrarAluno from "./Aluno/CadastrarAluno";
import ListarAluno from "./Aluno/ListarAluno";
import EditarAluno from "./Aluno/EditarAluno";
import ListarAlunosAprovados from "./Aluno/ListarAlunosAprovados";

const MainPage = () => {
    return(
        <BrowserRouter>
            <MyMenu />
            <Container sx = {{mt:10, display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Routes>

                    <Route path = "cadastrarProfessor" element = {<CadastrarProfessor/>}/>
                    <Route path = "listarProfessor" element = {<ListarProfessor/>}/>
                    <Route path = "editarProfessor/:id" element = {<EditarProfessor/>}/>

                    <Route path = "cadastrarAluno" element = {<CadastrarAluno/>}/>
                    <Route path = "listarAluno" element = {<ListarAluno/>}/>
                    <Route path = "editarAluno/:id" element = {<EditarAluno/>}/>
                    <Route path = "listaralunosAprovados" element = {<ListarAlunosAprovados/>}/>

                    <Route path = "signin" element = {<Signin/>}/>

                </Routes>
            </Container>
            
        </BrowserRouter>
    );
}
export default MainPage