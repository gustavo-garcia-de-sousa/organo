import Card from '../Card/Card';
import './Groups.css'

const Groups = ({ nome, cadastrados, corPrimaria, corSecundaria, aoDeletar, aoMudarCor }) => {//o props são as propriedades que o componente pai passa para o componente filho, exemplo: o App.js passa o props 

    const css = { borderColor: corPrimaria }//css é um objeto que recebe a propriedade borderColor com o valor da propriedade corPrimaria

    return (

        //se o array cadastrados for maior que 0, então eu retorno o section, se não, não retorno nada. Também pode ser feito com operador ternário
        (cadastrados.length > 0) && <section className='groups' style={{ backgroundColor: corSecundaria }}>

            <input className='input-color' value={corPrimaria} type='color' onChange={e => aoMudarCor(e.target.value, nome)} />
            <h3 style={css}>{nome}</h3>

            <div className='cadastrados'>
                {cadastrados.map(cadastrado => {
                    return <Card /**para cada cadastrado eu retorno um component card */
                        key={cadastrado.nome}
                        nome={cadastrado.nome}
                        posicao={cadastrado.posicao}
                        imagem={cadastrado.imagem}
                        corPrimaria={corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )

}

export default Groups;