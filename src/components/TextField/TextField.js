import './TextField.css';

const TextField = (props) => {//props são as propriedades que são passadas para o componente
    return (//acessando o label e o placeholder que foi passado como propriedade
        <div className='text-field'>
            <label>{props.label}</label> 
            <input type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default TextField;   