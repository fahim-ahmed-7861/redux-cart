import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import StateCounter from './components/StateCounter/StateCounter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {

  console.log(store)
  return (
    <div className="App">

<Provider store={store}>
<Cart></Cart>
      <Shop></Shop>
      <StateCounter></StateCounter>
      </Provider>
      
      
    </div>
  );
}

export default App;
