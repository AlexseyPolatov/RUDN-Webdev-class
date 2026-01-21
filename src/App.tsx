import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationWrapper from './components/NavigationWrapper'
import BonusEntry from './components/BonusEntry'
import ConfirmationPage from './components/ConfirmationPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationWrapper />}>
        <Route index element={<BonusEntry />} />
        <Route path="confirmed" element={<ConfirmationPage />} />
        <Route path="activated" element={<Navigate to="/confirmed" replace />} />
      </Route>
    </Routes>
  )
}

export default App
