import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@mui/material'

const getWeather = async () => {
  const response = await fetch('/api/weather/Moscow?format=j1')
  if (!response.ok) {
    throw new Error('Ошибка загрузки')
  }
  return response.json()
}

const sendPost = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
  if (!response.ok) {
    throw new Error('Ошибка отправки')
  }
  return response.json()
}

export const ClimateDisplay = () => {
  const client = useQueryClient()

  const weatherQuery = useQuery({
    queryKey: ['weather'],
    queryFn: getWeather,
  })

  const postMutation = useMutation({
    mutationFn: sendPost,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['weather'] })
    },
  })

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Погода в Москве</h1>

      {weatherQuery.isLoading && <p>Загрузка...</p>}
      
      {weatherQuery.error && <p style={{ color: 'red' }}>Ошибка загрузки данных</p>}

      {weatherQuery.data && weatherQuery.data.current_condition && (
        <div style={{ marginTop: '30px' }}>
          <p><strong>Температура:</strong> {weatherQuery.data.current_condition[0].temp_C}°C</p>
          <p><strong>Погода:</strong> {weatherQuery.data.current_condition[0].weatherDesc[0].value}</p>
          <p><strong>Влажность:</strong> {weatherQuery.data.current_condition[0].humidity}%</p>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <Button
          variant="contained"
          onClick={() => postMutation.mutate()}
          disabled={postMutation.isPending}
        >
          {postMutation.isPending ? 'Отправка...' : 'Отправить запрос'}
        </Button>
      </div>
    </div>
  )
}
