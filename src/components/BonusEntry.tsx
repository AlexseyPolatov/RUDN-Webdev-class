import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Box, Typography, Container, Card, CardContent } from '@mui/material'

const BonusEntry = () => {
  const [inputText, setInputText] = useState('')
  const goToPage = useNavigate()
  const secretCode = 'WINTER2026'

  useEffect(() => {
    if (inputText === secretCode) {
      goToPage('/confirmed')
    }
  }, [inputText, goToPage, secretCode])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Card sx={{ boxShadow: 4 }}>
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h4" mb={3} textAlign="center" color="primary">
              Ввод бонусного кода
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Бонусный код"
                variant="filled"
                value={inputText}
                onChange={handleChange}
                margin="normal"
                helperText="Введите код для получения бонуса"
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default BonusEntry
