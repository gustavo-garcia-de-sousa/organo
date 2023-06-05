import Card from '../Card/Card';
import './Groups.css'

const Groups = (props) => {//o props são as propriedades que o componente pai passa para o componente filho, exemplo: o App.js passa o props 

    const css = { borderColor: props.corPrimaria }//css é um objeto que recebe a propriedade borderColor com o valor da propriedade corPrimaria

    return (

        //se o array cadastrados for maior que 0, então eu retorno o section, se não, não retorno nada. Também pode ser feito com operador ternário
        (props.cadastrados.length > 0) && <section className='groups' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={css}>{props.nome}</h3>

            <div className='cadastrados'>
                {props.cadastrados.map(cadastrado =>/**para cada cadastrado eu retorno um component card */
                    <Card
                        key={cadastrado.nome}
                        nome={cadastrado.nome}
                        posicao={cadastrado.posicao}
                        imagem={cadastrado.imagem}
                        corPrimaria={props.corPrimaria}
                    />)}
            </div>
        </section>
    )

}

export default Groups;