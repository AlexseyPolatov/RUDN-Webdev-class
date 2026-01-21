import { Container, Typography, Box, Stack } from '@mui/material'
import { NumberDisplay } from './components/NumberDisplay'
import { TaskSearchList } from './components/TaskSearchList'
import './App.css'

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Работа с хуками React
      </Typography>
      
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 2 }}>
            Хук для работы с числом
          </Typography>
          <NumberDisplay startValue={5} />
          <NumberDisplay />
        </Box>

        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 2 }}>
            Фильтрация списка задач
          </Typography>
          <TaskSearchList />
        </Box>
      </Stack>
    </Container>
  )
}

export default App
