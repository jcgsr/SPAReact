import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Contato() {
   return (
     <div className="home" id="contato">
       <h1>Entre em contato</h1>
       <h2>Telefone: (xx) 8888888888</h2>
       <h3>Endereço: rua adjaldahfl, aldfalka</h3>
       <Link smooth to="#home">Home</Link>
     </div>
   );
 }
 
export default Contato;
 