import { Outlet, Link, NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

const NavigationWrapper = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <AppBar position="static" color="primary">
        <Toolbar component="nav" sx={{ gap: 3 }}>
          <IconButton component={Link} to="/" color="inherit" edge="start">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Приложение
          </Typography>
          <IconButton component={NavLink} to="/" color="inherit">
            <LocalOfferIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, overflow: 'auto', padding: 3, width: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default NavigationWrapper
