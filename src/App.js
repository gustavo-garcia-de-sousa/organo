import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';
import { useState } from 'react';
import Groups from './components/Groups/Groups';
import Footer from './components/Footer/Footer';

function App() {//App.js é o componente pai, que chama os componentes filhos

  const [cadastrados, setCadastrados] = useState([])

  const [paises, setPaises] = useState([
    {
      nome: 'Brasil',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Argentina',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Chile',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Uruguai',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Paraguai',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    }
  ])

  const aoNovoCadastro = (cadastrado) => {
    console.log(cadastrado)
    setCadastrados([...cadastrados, cadastrado])//spread operator é usado para copiar o array cadastrados e adicionar o novo cadastrado, este ... siginifica que o array cadastrados será copiado
  }

  const aoRetirarCadastro = () => {
    console.log('Cadastro retirado')
  }

  const aoMudarCorPais = (cor, nome) => {
    setPaises(paises.map(pais => {
      if (pais.nome === nome) {
        pais.corPrimaria = cor
      }
      return pais;
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Forms
          paises={paises.map(pais => pais.nome)} //para o array paises, é mapeado o nome de cada país e enviado para o componente Forms
          aoCadastrar={cadastrado => aoNovoCadastro(cadastrado)}
        />
        {paises.map((pais, indice) =>
          <Groups
            key={indice}//o indice é usado para identificar cada grupo de cadastrados
            nome={pais.nome}
            corPrimaria={pais.corPrimaria}
            corSecundaria={pais.corSecundaria}
            cadastrados={cadastrados.filter(cadastrado => cadastrado.pais === pais.nome)}
            aoDeletar={aoRetirarCadastro}
            aoMudarCor={aoMudarCorPais}
          />)}
      </header>
      <Footer />
    </div>
  );
}

export default App;
