import {takeLatest, put, call} from 'redux-saga/effects';
import {Types, Creators} from '../ducks/todos';
import api from '../../service/api'

function* getTodoList() {
  
  try {
    const {data} = yield call(api.get, '/todos')
    yield put(Creators.successTodoList(data));
  } catch (error) {
    yield put(Creators.failureTodoList(error));
  }
}

function* addTextAdd({text}) {
  try {
    yield call(api.post, '/todos', {text})
    yield put(Creators.successTextAdd(text))
  } catch (error) {
    yield put(Creators.failureTextAdd(error))
  }
}

function* textEdit({id, text}) {
  try {
    yield call(api.put, `/todos/${id}`, {text})
    yield put(Creators.successEditText())
  } catch (error) {
    yield put(Creators.failureEditText(error))
  }
}

function* removeTodo({id}) {
  try {
    yield call(api.delete, `/todos/${id}`)
    yield put(Creators.successRemoveText())
  } catch {
    yield put(Creators.failureRemoveText())
  }
}

export default [takeLatest([Types.REQUEST_TODO_LIST, Types.SUCCESS_TEXT_ADD, Types.SUCCESS_EDIT_TEXT, Types.SUCCESS_REMOVE_TEXT], getTodoList),
 takeLatest(Types.REQUEST_TEXT_ADD, addTextAdd), takeLatest(Types.EDIT_TEXT, textEdit), takeLatest(Types.REMOVE_TEXT, removeTodo)];
