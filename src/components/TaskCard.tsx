import { type FC } from 'react'

type TaskData = {
  id: number
  name: string
  done: boolean
}

type TaskCardProps = {
  task: TaskData
  handleToggle: () => void
  handleRemove: () => void
}

const TaskCard: FC<TaskCardProps> = ({ task, handleToggle, handleRemove }) => {
  return (
    <div className="task-card">
      <p className={`task-text ${task.done ? 'task-done' : ''}`}>
        {task.name}
      </p>
      <button className="btn-toggle" onClick={handleToggle}>
        {task.done ? 'Отменить' : 'Выполнить'}
      </button>
      <button className="btn-remove" onClick={handleRemove}>
        Удалить
      </button>
    </div>
  )
}

export default TaskCard
