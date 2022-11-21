// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosItem, onDeleteTodo} = props
  const {title, id} = todosItem

  const ondeleteClick = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-item-container">
      <p>{title}</p>
      <button type="button" onClick={ondeleteClick}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
