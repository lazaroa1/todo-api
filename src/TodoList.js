import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from './store/ducks/todos';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({id: null, text: ''});
  
  useEffect(() => {dispatch(Creators.requestTodoList());},[dispatch])
  
  function add() {
      if(todo.id) {
        dispatch(Creators.editText(todo.id, todo.text))
      }else {
        dispatch(Creators.requestTextAdd(todo.text))
      }
      setTodo({id: null, text: ''})
  }

  function edit(item) {
     setTodo({id:item.id ,text:item.text}) 
  }

  function remove(id) {
    dispatch(Creators.removeText(id))
  }

  return (
    <div>
      <input value={todo.text} onChange={e => setTodo({...todo, text: e.target.value})}/>
      
  <button onClick={add}>{todo.id ? "editar" : "adicionar"}</button>
            
      {todos.loading && <p>Carregando...</p>}
      <ul>
      {todos.data.map((item) => (
          <li key={item.id}>{item.id} - {item.text} 
          <button onClick={() => edit(item)}>editar</button>
          <button onClick={() => remove(item.id)}>remover</button></li>        
      ))}
      </ul>
    </div>
  );
}

export default TodoList;