import { Todo } from '../../model'

import { AiFillEdit, AiFillDelete, AiFillSave } from 'react-icons/ai'

import './SingleTodo.css'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="singleTodo">
      <p className="singleTodo__text">{todo.todo}</p>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <AiFillSave />
        </span>
      </div>
    </form>
  )
}
export default SingleTodo
