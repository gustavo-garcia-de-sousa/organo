import './TextField.css';

const TextField = (props) => {//props são as propriedades que são passadas para o componente

    //let value = '';

    //const [value, setValue] = useState('');//useState é um hook que permite que o componente tenha estado

    const aoDigitar = (event) => {//função que é disparada quando o usuário digita no input
        //value = event.target.value;
        //setValue(event.target.value);//alterando o valor da variável value
        //console.log(value);

        props.aoAlterar(event.target.value);//disparando a função que foi passada como propriedade          

    }

    return (//acessando o label e o placeholder que foi passado como propriedade
        <div className='text-field' >
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={aoDigitar}//onChange é um evento que é disparado quando o usuário digita no input
                required={props.required}
                placeholder={props.placeholder}
            />
        </div >
    );
}

export default TextField;   