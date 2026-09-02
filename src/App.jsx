import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import './styles/global.css'

function App() {
  return (
    <BrowserRouter basename="/carebythehour">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App