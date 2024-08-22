import Descricao from "./Descricao";
import Titulo from "./Titulo";
import Imagem from "./Imagem";
import Texto from "./Texto";
import './Card.css';

function Card({titulo,descricao,imgUrl}) {
    return (
      <div class="card">
        <Titulo titulo={titulo}/>
        <Descricao descricao={descricao}/>
        <Imagem imgUrl={imgUrl}/>
      </div>
    );
  }
  
  export default Card;