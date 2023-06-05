import './Groups.css'

const Groups = (props) => {//o props são as propriedades que o componente pai passa para o componente filho, exemplo: o App.js passa o props 

    const css = { borderColor: props.corPrimaria }//css é um objeto que recebe a propriedade borderColor com o valor da propriedade corPrimaria

    return (
        <section className='groups' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={css}>{props.nome}</h3>
        </section>
    )

}

export default Groups;