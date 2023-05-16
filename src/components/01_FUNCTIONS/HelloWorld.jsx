// Versão 1 - Função Tradicional
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Mateus Lima</h1>
//       <h2>Ciências da Computação</h2>
//     </div>
//   );
// }

//Versão 2 - Função Seta
const HelloWorld = () => {
    return (
      <div>
        <h1>Mateus Lima Rodrigues</h1>
        <h1>Ciências da Computação</h1>
      </div>
    );
  };
  
  //Versão 3 - Função Seta 2
  // const HelloWorld = () =>
  //   <div>
  //     <h1>Mateus Lima</h1>
  //     <h2>Ciências da Computação</h2>
  //   </div>
  
  //Versão 4 - Classes
  //import React from "react";
  // class HelloWorld extends React.Component{
  //   render(){
  //     return(
  //       <div>
  //         <h1>Mateus Lima</h1>
  //         <h2>Ciências da Computação</h2>
  //       </div>
  //     )
  //   }
  // }
  export default HelloWorld;