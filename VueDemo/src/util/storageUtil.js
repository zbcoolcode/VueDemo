/*
利用storage储区
 */

const TODOS_KEY='todos_key'

export default {
  saveTodos(value){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(value));
  },
  getTodos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY)||'[]');
  }
}
