import { Typography, Container, Card, CardContent, Box, Chip } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'

const ConfirmationPage = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Card sx={{ boxShadow: 6, borderRadius: 3 }}>
          <CardContent sx={{ padding: 5, textAlign: 'center' }}>
            <Box mb={3}>
              <VerifiedIcon sx={{ fontSize: 80, color: 'success.main' }} />
            </Box>
            <Typography variant="h3" gutterBottom color="success.main" fontWeight={600}>
              Подтверждено!
            </Typography>
            <Box mt={2}>
              <Chip label="Бонус активен" color="success" size="large" />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default ConfirmationPage
