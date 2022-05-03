import logo from './logo.svg';
import './App.css';
import MyTodos from './Components/MyTodos'
import TodoForm from './Components/TodoForm'

import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <MyTodos />
      <TodoForm />
    </div>
    </Provider>

  );
}

export default App;
