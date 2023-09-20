import React, { useState, useEffect } from 'react'
import {AiOutlineEllipsis} from 'react-icons/ai'

const Family = ({todo,create}) => {
const [fam, setFam] = useState([])
const handleChange = (e,id) => {
    create (prev => {
        return prev.map(i => {
            if(i.id === id){
                return {...i, done: e}
            }
            return i
        })
    })
}
useEffect(() => {
    const newArr = todo.filter(i => i.category === 'family')
    setFam(newArr)
},[todo])
  return (
    
    <div className='flex gap-4 flex-wrap'>
            {fam.map((i,index) => (
            <div key={index} className='bg-[#FFF9DE] shadow-lg h-full w-96 flex flex-col gap-3 p-4'>
                <div className='flex justify-between'>
                    <p className='text-sm font-semibold'>{i.title}</p>
                    <button><AiOutlineEllipsis /></button>
                </div>
                <p className='text-xs'>{i.body}</p>
                <div className='flex justify-end'>
                    <div className='flex gap-2 items-center'>
                        <input checked = {i.done} onChange={(e) => handleChange(e.target.checked, i.id)} id='dones' type='checkbox' />
                        <label className='text-sm' htmlFor='dones'>Done</label>
                    </div>
                </div>
            </div>
        ))}
        

    </div>
  )
}

export default Family