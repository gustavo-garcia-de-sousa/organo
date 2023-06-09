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
      cor: '#57C278'
    },
    {
      nome: 'Argentina',
      cor: '#82CFFA'
    },
    {
      nome: 'Paraguai',
      cor: '#A6D157'
    },
    {
      nome: 'Uruguai',
      cor: '#E06B69'
    },
    {
      nome: 'Chile',
      cor: '#DB6EBF'
    },
    {
      nome: 'Peru',
      cor: '#FFBA05'
    },
    {
      nome: 'Colômbia',
      cor: '#FF8A29'
    },
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
        pais.cor = cor
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
            cor={pais.cor}
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
