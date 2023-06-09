import Card from '../Card/Card';
import './Groups.css'
import hexToRgba from 'hex-to-rgba';//hex-to-rgba é uma biblioteca que converte o valor hexadecimal para rgba, pois o react não aceita o valor hexadecimal

const Groups = ({ nome, cadastrados, cor, aoDeletar, aoMudarCor }) => {//o props são as propriedades que o componente pai passa para o componente filho, exemplo: o App.js passa o props 

    const css = { borderColor: cor }//css é um objeto que recebe a propriedade borderColor com o valor da propriedade cor

    return (//se o array cadastrados for maior que 0, então eu retorno o section, se não, não retorno nada. Também pode ser feito com operador ternário
        (cadastrados.length > 0) && <section className='groups' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(cor, '0.25') }}>

            <input className='input-color' value={cor} type='color' onChange={e => aoMudarCor(e.target.value, nome)} />
            <h3 style={css}>{nome}</h3>

            <div className='cadastrados'>
                {cadastrados.map(cadastrado => {
                    return <Card /**para cada cadastrado eu retorno um component card */
                        key={cadastrado.nome}
                        nome={cadastrado.nome}
                        posicao={cadastrado.posicao}
                        imagem={cadastrado.imagem}
                        cor={cor}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )

}

export default Groups;