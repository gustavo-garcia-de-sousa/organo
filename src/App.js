import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';
import { useState } from 'react';
import Groups from './components/Groups/Groups';

function App() {//App.js é o componente pai, que chama os componentes filhos

  const [cadastrados, setCadastrados] = useState([])

  const aoNovoCadastro = (cadastrado) => {
    console.log(cadastrado)
    setCadastrados([...cadastrados, cadastrado])//spread operator é usado para copiar o array cadastrados e adicionar o novo cadastrado, este ... siginifica que o array cadastrados será copiado
  }

  const paises = [
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
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Forms aoCadastrar={cadastrado => aoNovoCadastro(cadastrado)} />
        {paises.map(pais => <Groups key={pais.nome} nome={pais.nome} corPrimaria={pais.corPrimaria} corSecundaria={pais.corSecundaria} />)}
      </header>
    </div>
  );
}

export default App;
