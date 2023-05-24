import './Forms.css';
import TextField from '../TextField/TextField';

const Forms = () => {
    return (
        <section className='forms'>
            <form>
                <h2>Formulário de Cadastro</h2>
                <TextField label="Nome" placeholder="Digite seu nome completo" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Insira o caminho da imagem" />
            </form>
        </section>
    );
}

export default Forms;