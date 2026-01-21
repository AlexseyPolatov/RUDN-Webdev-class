import { useNumberState } from '../hooks/useNumberState'
import { Box, Button, Typography, Paper } from '@mui/material'

type NumberDisplayProps = {
  startValue?: number
}

export const NumberDisplay = ({ startValue }: NumberDisplayProps) => {
  const { value, add, subtract, restore } = useNumberState(startValue)

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {startValue !== undefined 
          ? `Начало: ${startValue}` 
          : 'Без начального значения'}
      </Typography>
      <Typography variant="h3" component="div" sx={{ mb: 3, textAlign: 'center' }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={add}>
          Увеличить
        </Button>
        <Button variant="contained" color="secondary" onClick={subtract}>
          Уменьшить
        </Button>
        <Button variant="text" onClick={restore}>
          Восстановить
        </Button>
      </Box>
    </Paper>
  )
}
