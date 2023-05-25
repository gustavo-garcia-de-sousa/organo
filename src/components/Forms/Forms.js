import './Forms.css';
import TextField from '../TextField/TextField';
import Selected from '../Selected/Selected';
import Buttons from '../Button/Button';

function saving(event) {
    event.preventDefault();//previne o comportamento padrão do formulário
    console.log('formulário submetido');
}

const Forms = () => {
    return (
        <section className='forms'>
            <form onSubmit={() => saving()}> {/*onSubmit é um evento que é disparado quando o formulário é submetido*/}
                <h2>Formulário de Cadastro</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome completo" />
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField required={true} label="Imagem" placeholder="Insira o caminho da imagem" />
                <Selected label="País" itens={['Brasil', 'Argentina', 'Chile', 'Uruguai', 'Paraguai']} />
                <Buttons> Criar Card </Buttons>
            </form>
        </section>
    );
}

export default Forms;