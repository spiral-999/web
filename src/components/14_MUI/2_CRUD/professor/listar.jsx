import { TableContainer, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell , Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
const Listar = () => {
    const professores = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" },
    ]
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {
                        professores.map(
                            (professor) => {
                                return (
                                    <StyledTableRow key={professor.id}>
                                        <StyledTableCell>{professor.id}</StyledTableCell>
                                        <StyledTableCell>{professor.nome}</StyledTableCell>
                                        <StyledTableCell>{professor.curso}</StyledTableCell>
                                        <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                        <StyledTableCell>
                                            <Box>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            }
                        )
                    }
                    <TableBody>
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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default Listar