import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import AdminUser from '../Pages/AdminiUser'
import Statics from '../Pages/Statics'




function App() {
 

  return (



   <BrowserRouter>
   



   <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/User Admin' element={<AdminUser/>}/>
          <Route path='/Statics' element={<Statics/>}/>
    
   </Routes>


   </BrowserRouter>
   
 
  )
}

export default App
