import './Card.css';

const Card = ({nome, posicao, imagem, corPrimaria}) => {//ao invés de utilizar o props, eu desestruturei o objeto props e já passei os valores que eu quero utilizar
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
    )
}

export default Card;