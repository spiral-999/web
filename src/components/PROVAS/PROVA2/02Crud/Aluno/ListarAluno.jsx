import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAluno = () => {
    const [alunos,setAlunos] = useState([])
    var cont = 0

    useEffect(
        ()=>{
            axios.get("http://localhost:3001/alunos/listar")
            .then(
                (response)=>{
                    //console.log(response)
                    setAlunos(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir o Aluno? " + id)){
            axios.delete(`http://localhost:3001/alunos/remover/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(alu => alu._id !== id)
                setAlunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }
    function calcularMediaIra() {
        let soma = 0
        let media = 0
        for(let i = 0; i < alunos.length;i++) {  
            soma = soma + alunos[i].ira
            // soma os iras da turma
        }
        media = soma / alunos.length
        // divide pelo total de alunos na turma 
        return media
    }
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{cont = cont + 1}</StyledTableCell>
                                            {aluno.ira < calcularMediaIra() ? <StyledTableCell style={{color:"red"}}>{aluno.nome}</StyledTableCell> : <StyledTableCell>{aluno.nome}</StyledTableCell>}
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <StyledTableCell colSpan={3}>Média dos IRAs</StyledTableCell>
                            <StyledTableCell colSpan={3}>{calcularMediaIra()}</StyledTableCell> {/*Chamo a função para exibir a média no final da tabela */}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default ListarAluno