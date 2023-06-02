import './Selected.css';

const Selected = (props) => {

    return (//map é um laço de repetição que percorre o array e retorna um novo array. key é um atributo obrigatório para o map
        <div className='selected'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterar(event.target.value)} value={props.value}>
                {props.itens.map(item =>
                    <option key={item}>{item}
                    </option>)}
            </select>
        </div>
    );
}

export default Selected;