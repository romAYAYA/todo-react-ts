const TodoList: React.FC = ({ todos }) => {
  return <div className="todoList">{todos.map(t)=> (
    <li>{todos.todo}</li>
  )}</div>
}
export default TodoList
