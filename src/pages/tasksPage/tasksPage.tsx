import { useState } from 'react'

import InputField from '../../components/InputField'
// import TodoList from '../../components/TodoList'

import { Todo } from '../../model'

import './TasksPage.css'

const TasksPage: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }

  return (
    <div className="tasksPage">
      <p className="heading">Taskify</p>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoList todos={todos} /> */}
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  )
}
export default TasksPage
