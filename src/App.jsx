
import './index.css';
import { Route, Routes } from 'react-router-dom'
import ApiPage from './pages/ApiPage'
import MainPage from './pages/MainPage'
import Sidebar from './components/Sidebar';
function App() {

  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800
           to-gray-900 opacity-80'/>
        </div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Api' element={<ApiPage/>}/>
      </Routes>
    </div>
  )
}

export default App
