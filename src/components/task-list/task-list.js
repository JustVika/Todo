import PropTypes from 'prop-types'

import Task from '../task/task'
import TaskEdit from '../task-edit/task-edit'
import './task-list.css'

function TaskList({ todoData, onDeleted, onEditing, onToggleDone }) {
  const tasks = todoData.map((item) => {
    if (!item.edit) {
      return (
        <li key={item.id} className="task-list__item">
          <Task
            task={item}
            onDeleted={() => onDeleted(item.id)}
            onEditing={(label) => onEditing(item.id, label)}
            onToggleDone={() => onToggleDone(item.id)}
          />
        </li>
      )
    }
    return (
      <li key={item.id} className="task-list__item">
        <TaskEdit key={item.id} task={item} onEditing={(label) => onEditing(item.id, label)} />
      </li>
    )
  })

  return <ul className="task-list">{tasks}</ul>
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onEditing: () => {},
  onToggleDone: () => {},
  todoData: [],
}
TaskList.propTypes = {
  onDeleted: PropTypes.func,
  onEditing: PropTypes.func,
  onToggleDone: PropTypes.func,
  todoData: PropTypes.arrayOf(PropTypes.objectOf),
}
export default TaskList
