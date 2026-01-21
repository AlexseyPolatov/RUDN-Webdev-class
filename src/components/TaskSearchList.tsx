import { useState, useRef } from 'react'
import { 
  Box, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  Paper 
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const initialTasks = [
  'Заказать пиццу',
  'Посмотреть новый сериал',
  'Сходить в кино',
  'Встретиться с друзьями',
  'Сыграть в видеоигру',
  'Приготовить ужин',
  'Погулять в парке',
  'Послушать музыку',
  'Почитать комиксы',
  'Сделать зарядку'
]

export const TaskSearchList = () => {
  const [tasks] = useState<string[]>(initialTasks)
  const [filterText, setFilterText] = useState('')
  const searchFieldRef = useRef<HTMLInputElement>(null)

  const visibleTasks = tasks.filter(task => 
    task.toLowerCase().includes(filterText.toLowerCase())
  )

  const clearSearch = () => {
    setFilterText('')
    searchFieldRef.current?.focus()
  }

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Поиск задач
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <TextField
          inputRef={searchFieldRef}
          label="Введите текст для поиска"
          variant="outlined"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          fullWidth
          autoFocus
        />
        <Button
          variant="contained"
          onClick={clearSearch}
          startIcon={<ClearIcon />}
          sx={{ minWidth: 120 }}
        >
          Очистить
        </Button>
      </Box>
      <List>
        {visibleTasks.length > 0 ? (
          visibleTasks.map((task, idx) => (
            <ListItem key={idx} divider>
              <ListItemText primary={task} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText 
              primary="Задачи не найдены" 
              secondary="Попробуйте изменить запрос"
            />
          </ListItem>
        )}
      </List>
    </Paper>
  )
}
