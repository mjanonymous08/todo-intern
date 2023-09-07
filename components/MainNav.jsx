import {GrAdd} from 'react-icons/gr'
import CreateNew from './section/CreateNew'
const MainNav = () => {
  return (
    <div className='px-10 relative py-5'>
        <div className='flex justify-between'>
            <p className='text-lg'>todo</p>
            <button className='font-bold text-2xl animate-pulse'><GrAdd /></button>
        </div>
        <div className='absolute opacity-50 top-0 left-0 w-[100%] items-center h-[90vh] flex justify-center  bg-white '>
          
        </div>
        <div className='absolute top-28 left-64'>
          <CreateNew />
        </div>
    </div>
  )
}

export default MainNav