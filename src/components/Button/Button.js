import './Button.css';

const Buttons = (props) => {
    return (
        <button>{props.children}</button>//children é uma propriedade que retorna o conteúdo que está dentro do componente
    );
}

export default Buttons;