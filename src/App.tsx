import './App.scss';
import NavbarComponent from './components/NavbarComponent';
import RouteList from './components/RouteList';

function App() {
  return (
    <>
      <NavbarComponent title='Utility' />
      <div className="container my-3">
        <RouteList />
      </div>
    </>
  );
}

export default App;
