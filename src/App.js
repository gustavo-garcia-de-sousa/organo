import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';
import { useState } from 'react';

function App() {//App.js é o componente pai, que chama os componentes filhos

  const [cadastrados, setCadastrados] = useState([])

  const aoNovoCadastro = (cadastrado) => {
    console.log(cadastrado)
    setCadastrados([...cadastrados, cadastrado])//spread operator é usado para copiar o array cadastrados e adicionar o novo cadastrado, este ... siginifica que o array cadastrados será copiado
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Forms aoCadastrar={cadastrado => aoNovoCadastro(cadastrado)} />
      </header>
    </div>
  );
}

export default App;
