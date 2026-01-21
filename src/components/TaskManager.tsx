import { useState, type FC } from 'react'
import TaskCard from './TaskCard'

type TaskData = {
  id: number
  name: string
  done: boolean
}

const TaskManager: FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [taskName, setTaskName] = useState<string>('')

  const handleSubmit = () => {
    const trimmedName = taskName.trim()
    if (trimmedName.length > 0) {
      const newTask: TaskData = {
        id: performance.now(),
        name: trimmedName,
        done: false
      }
      setTasks(prev => [...prev, newTask])
      setTaskName('')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const toggleTaskStatus = (taskId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, done: !task.done } : task
    ))
  }

  const removeTask = (taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  return (
    <section className="task-manager">
      <header className="task-header">
        <h2>Мои задачи</h2>
      </header>
      <div className="task-form">
        <input
          className="task-input"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Новая задача..."
        />
        <button className="btn-add" onClick={handleSubmit}>
          Добавить
        </button>
      </div>
      <div className="task-container">
        {tasks.length === 0 ? (
          <p className="empty-state">Нет задач</p>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              handleToggle={() => toggleTaskStatus(task.id)}
              handleRemove={() => removeTask(task.id)}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default TaskManager
