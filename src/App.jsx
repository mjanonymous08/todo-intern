import {Routes,Route} from 'react-router-dom'
import MainNav from '../components/MainNav'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Family from '../components/section/Family'
import Entertainment from '../components/section/Entertainment'
import Study from '../components/section/Study'
import Work from '../components/section/Work'
import { useState } from 'react'

const App = () => {
const [todo, settodo] = useState([{
    id:0,
    title:" ",
    body:" ",
    category:" ",
}])
console.log(todo)

  return (
    <main>
      <div>
        <MainNav create={settodo}/>
        <div className='flex gap-16 mt-16'>
          <div>
            <Nav />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='work' element={<Work />} />
              <Route path='study' element={<Study />} />
              <Route path='entertainment' element={<Entertainment />} />
              <Route path='/family' element={<Family />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App