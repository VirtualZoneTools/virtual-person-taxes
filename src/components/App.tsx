import { FC } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Dividend from './Dividend'
import Declaration from './Declaration'
import DeclarationInstructions from './DeclarationInstructions'

const App: FC = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/declaration/instructions')
  }

  return (
    <Routes>
      <Route path="/dividend" element={<Dividend />} />
      <Route path="/declaration/instructions" element={<DeclarationInstructions />} />
      <Route path="/declaration" element={<Declaration onSubmit={handleSubmit} />} />

      <Route path="/" element={<Navigate to="/declaration" />} />
    </Routes>
  )
}

export default App
