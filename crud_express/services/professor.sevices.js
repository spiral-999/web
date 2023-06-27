const ProfessorModel = require("../models/professor.models")

let professores = [
    { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST", ai: { es: false, al: false, ds: true, mc: true } },
    { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD", ai: { es: false, al: true, ds: false, mc: false } },
    { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST", ai: { es: false, al: true, ds: false, mc: true } },
    { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT", ai: { es: true, al: false, ds: false, mc: false } },
    { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST", ai: { es: true, al: false, ds: false, mc: true } },
]
let id = 5

class ProfessorService {
    static list (){
        return professores
    }
}
module.exports = ProfessorService