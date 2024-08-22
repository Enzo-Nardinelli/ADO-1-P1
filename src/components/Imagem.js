
function Imagem(props) {
    return (
    
      //<img src={require('../resources/img_tenis-primeiraado.jpg')} alt="Imagem do produto" width="250" height="250"></img>
      <img src={props.imgUrl} alt="Imagem do produto" width="250" height="250"></img>
    );
  }
  
  export default Imagem;