import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';

function App() {//App.js é o componente pai, que chama os componentes filhos
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Forms />
      </header>
    </div>
  );
}

export default App;
