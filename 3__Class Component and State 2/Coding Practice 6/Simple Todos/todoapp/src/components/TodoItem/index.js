import './index.css'

const TodoItem = props => {
  const { todo, deleteTodo } = props
  const { title, id } = todo
  
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className='todo-item'>
      <p className='todo-title'>{title}</p>
      <button type='button' className='btn' onClick={onDelete}>Delete</button>
    </li>
  )
}

export default TodoItem