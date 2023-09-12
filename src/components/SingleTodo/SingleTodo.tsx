import { useRef, useState, useEffect } from 'react'

import { Todo } from '../../model'

import { AiFillEdit, AiFillDelete, AiFillSave } from 'react-icons/ai'

import './SingleTodo.css'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )

    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className="singleTodo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="singleTodo__input--edit"
          type="text"
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="singleTodo__text">{todo.todo}</s>
      ) : (
        <p className="singleTodo__text">{todo.todo}</p>
      )}

      <div>
        <span
          className="icon"
          onClick={() =>
            !edit && !todo.isDone ? setEdit(!edit) : setEdit(edit)
          }
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiFillSave />
        </span>
      </div>
    </form>
  )
}
export default SingleTodo
