import { Children} from "react"
const Hero = ({nome}) =>{
    return(
        <div>
            <h1>Nome do Herói : {nome}</h1>
            <img
                src = "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-225x300.png"
                alt = "Aragão"
                style = {{width:"225px"}}
            />
        </div>
    )
}
const Enemy = ({nome}) =>{
    return(
        <div>
            <h1>Nome do Vilão : {nome}</h1>
            <img
                src = "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Valdemir-Pereira-de-Queiroz-Neto1-225x300.png"
                alt = "Valdemar"
                style = {{width:"225px"}}
            />
        </div>
    )
}
const Arena = ({nome}) =>{
    return(
        <div>
            <h1>Arena : {nome}</h1>
            <Hero nome = "Super Ararão"/>
            <Enemy nome = "Valdemaldade"/>
        </div>
    )
}
const Arena2 = ({nome,children}) =>{
    return(
        <div>
            <h1>Arena : {nome}</h1>
            {
                Children.map(
                    children,
                    (child)=>{
                        return(child)
                    }
                )
            }
        </div>
    )
}
const World = (props) =>{
    return(
        <div>
            {props.children}
        </div>
    )
}
export {Hero, Enemy, Arena,Arena2, World}