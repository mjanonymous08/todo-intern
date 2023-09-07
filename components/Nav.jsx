import {Link, NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
const Nav = () => {
  return (
    <div className="flex flex-col gap-8 px-10">
        <div className="flex gap-2 items-center">
            <span className="bg-[#d2ceff] w-7 h-7 rounded-full"></span>
            <Link to='/work' ><p className="text-sm">work</p></Link>
        </div>
        <div className="flex gap-2 items-center">
            <span className="bg-[#d1e5f7] w-7 h-7 rounded-full"></span>
            <Link to='/study' ><p className="text-sm">study</p></Link>
        </div>
        <div className="flex gap-2 items-center">
            <span className="bg-[#ffcece] w-7 h-7 rounded-full"></span>
            <NavLink to='/entertainment' ><p className="text-sm">entertainment</p></NavLink>
        </div>
        <div className="flex gap-2 items-center">
            <span className="bg-[#daf2d6] w-7 h-7 rounded-full"></span>
            <Link to='/family' ><p className="text-sm">family</p></Link>
        </div>
    </div>
  )
}

export default Nav