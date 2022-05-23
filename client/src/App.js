import React, { Suspense } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./components/Form'))
const Teacher = React.lazy(() => import('./pages/Teacher'))

const App = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route exact path="*" name="Home Page" element={<Home />} />
          <Route exact path="/teacher" name="Teacher Page" element={<Teacher />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App