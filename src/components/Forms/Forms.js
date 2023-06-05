import './Forms.css';
import TextField from '../TextField/TextField';
import Selected from '../Selected/Selected';
import Buttons from '../Button/Button';
import { useState } from 'react';

const Forms = (props) => {

    const [nome, setNome] = useState('')//useState é um hook que permite que o componente tenha estado
    const [posicao, setPosicao] = useState('')
    const [imagem, setImagem] = useState('')
    const [pais, setPais] = useState('Brasil')

    const aoSalvar = (event) => {
        event.preventDefault();//previne o comportamento padrão do formulário de recarregar a página
        props.aoCadastrar({ nome, posicao, imagem, pais })

        setNome('')
        setPosicao('')
        setImagem('')
        setPais('Brasil')
    }

    return (
        <section className='forms'>
            <form onSubmit={aoSalvar}> {/*onSubmit é um evento que é disparado quando o formulário é submetido*/}
                <h2>Cadastro dos Jogadores da Seleções</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    value={nome}
                    aoAlterar={value => setNome(value)}
                />
                <TextField
                    required={true}
                    label="Posição"
                    placeholder="Digite sua posição"
                    value={posicao}
                    aoAlterar={value => setPosicao(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Insira o caminho da imagem"
                    value={imagem}
                    aoAlterar={value => setImagem(value)}
                />
                <Selected
                    label="País"
                    itens={props.paises}
                    value={pais}
                    aoAlterar={value => setPais(value)}
                />
                <Buttons> Criar Card </Buttons>
            </form>
        </section>
    );
}

export default Forms;