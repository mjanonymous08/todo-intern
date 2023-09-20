import {Routes,Route} from 'react-router-dom'
import MainNav from '../components/MainNav'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Family from '../components/section/Family'
import Entertainment from '../components/section/Entertainment'
import Study from '../components/section/Study'
import Work from '../components/section/Work'
import { useEffect, useState } from 'react'

const App = ({setCount}) => {
const [todo, settodo] = useState([{
    id:{setCount},
    title:" ",
    body:" ",
    category:" ",
    done: false
}])
const [tarray, settarry] = useState ([])
const [check , setCheck] = useState(false)


const handleDone = (e) => {
  setCheck(e)
  if(e === true) {
    const newArr = todo.filter(e => e.done === false)
    return settarry
    (newArr)
  }
  return settodo(todo)
}
console.log(todo)

  return (
    <main>
      <div>
        <MainNav create ={settodo}/>
        <div className='flex gap-16 mt-16'>
          <div className='flex flex-col items-center gap-4'>
            <Nav />
            <div className='flex gap-2 items-center'>
                  <input onChange = {(e) => handleDone(e.target.checked)} id='done'  type='checkbox' />
                  <label  className='text-sm' htmlFor='done'> Hide all done </label>
            </div>
          </div>
          <div>
            <Routes>
              <Route path='/'      element={<Home />} />
              <Route path='/work'  element={<Work todo ={check === true ? tarray : todo } create = {settodo}/>} />
              <Route path='/study' element={<Study todo = {check === true ? tarray : todo } create = {settodo}/>} />
              <Route path='/entertainment' element={<Entertainment todo = {check === true ? tarray : todo} create = {settodo}/>} />
              <Route path='/family' element={<Family todo = {check === true ? tarray : todo } create = {settodo}/>} />
            </Routes>
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default App