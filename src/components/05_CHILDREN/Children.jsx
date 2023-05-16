import { Children, cloneElement } from "react"
//versão 1
// const Supermercado = ({children, nome}) =>{
//     return(
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {children}
//         </div>
//     )
// }
//versão 2
// const Supermercado = ({children, nome}) =>{
//     return(
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {
//                 Children.map(
//                     children,
//                     (filho)=>{
//                         return(
//                             <div style={{backgroundColor:"yellow"}}>
//                                 {filho}
//                             </div>
//                         )
//                     }
//                 )
//             }
//         </div>
//     )
// }
const Supermercado = ({children, nome}) =>{
    return(
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho)=>{
                        return(
                            cloneElement(filho,{supermercado:nome})
                        )
                    }
                )
            }
        </div>
    )
}
const Legume = ({nome, supermercado}) =>{
    return(
        <div>
            <h1>Legume {nome} do Supermercado {supermercado}</h1>
        </div>
    )
}
const Fruta = ({nome}) =>{
    return(
        <div>
            <h1>Fruta {nome}</h1>
        </div>
    )
}
const Bebida = ({nome}) =>{
    return(
        <div>
            <h1>Bebida {nome}</h1>
        </div>
    )
}
export {Supermercado, Legume, Fruta, Bebida}