import {GrAdd} from 'react-icons/gr'
import CreateNew from './section/CreateNew'
import { useState } from 'react'
 
const MainNav = ({create}) => {
const [createnew, setcreatenew] = useState(false) 
  return (
    <div className='px-10 relative py-5'>
        <div className='flex justify-between'>
            <p className='text-lg'>todo</p>
            <button onClick={() => setcreatenew(!createnew)}  className='font-bold text-2xl animate-pulse'><GrAdd /></button>
            
        </div>
        { 
          createnew && 
          <div className='absolute opacity-50 top-0 left-0 w-[100%] items-center h-[90vh] flex justify-center  bg-white '>

        </div>}
        {
          createnew && 
            <div className = 'absolute top-28 left-64' >
              <CreateNew create={create} open={createnew} setopen={setcreatenew}  />
        </div>}

    </div>
  )
}

export default MainNav