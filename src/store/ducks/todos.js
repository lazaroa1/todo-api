import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  requestTodoList: [],
  successTodoList: ['data'],
  failureTodoList: [],
  requestTextAdd: ['text'],
  successTextAdd: [],
  failureTextAdd: [],
  editText: ['id', 'text'],
  successEditText: [],
  failureEditText: [],
  removeText: ['id'],
  successRemoveText: [],
  failureRemoveText: [],
});
const INITIAL_STATE = {
  data: [],
  loading: false,
  
};

console.log(Types)

const requestTodoList = (state, action) => ({
  ...state,
  loading: true,
});

const successTodoList = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
  
});

const failureTodoList = (state, action) => ({
  ...state,
  data: [],
  loading: false,
  
});

const requestTextAdd = (state, action) => ({
  ...state,
  loading: true,
});

const successTextAdd = (state, action) => ({
  ...state,
  loading: false,

});

const failureTextAdd = (state, action) => ({
  ...state,
  loading: false,
  error: true,
});

const editText = (state, action) => ({
  ...state,
  loading: true,
})

const successEditText = (state, action) => ({
  ...state,
  loading: false,
})

const failureEditText = (state, action) => ({
  ...state,
  loading: false
})

const removeText = (state, action) => ({
  ...state,
  loading: true,
})

const successRemoveText = (state, action) => ({
  ...state,
  loading: false,
})

const failureRemoveText = (state, action) => ({
  ...state,
  loading: false
})

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_TODO_LIST]: requestTodoList,
  [Types.SUCCESS_TODO_LIST]: successTodoList,
  [Types.FAILURE_TODO_LIST]: failureTodoList,
  [Types.REQUEST_TEXT_ADD]: requestTextAdd,
  [Types.SUCCESS_TEXT_ADD]: successTextAdd,
  [Types.FAILURE_TEXT_ADD]: failureTextAdd,
  [Types.EDIT_TEXT]: editText,
  [Types.SUCCESS_EDIT_TEXT]: successEditText,
  [Types.FAILURE_EDIT_TEXT]: failureEditText,
  [Types.REMOVE_TEXT]: removeText,
  [Types.SUCCESS_REMOVE_TEXT]: successRemoveText,
  [Types.FAILURE_REMOVE_TEXT]: failureRemoveText,
});
