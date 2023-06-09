import { FaWindowClose } from 'react-icons/fa';
import './Card.css';

const Card = ({ nome, posicao, imagem, cor, aoDeletar }) => {//ao invés de utilizar o props, eu desestruturei o objeto props e já passei os valores que eu quero utilizar
    return (
        <div className='card'>
            <FaWindowClose size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: cor }}>
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