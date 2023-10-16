import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import { store } from './app/store';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  return (
    <Provider store={store}>
      <h1>Todo with redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
