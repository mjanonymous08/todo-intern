import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEllipsis} from 'react-icons/ai'

const Work = ({todo, create}) => {
const [drop, setDrop] = useState(false)
const [work, setWork] = useState([])
const [id, setId] = useState(0)
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
    const newArr = todo.filter(i => i.category === 'work')
    setWork(newArr)
},[todo])

const deletes = (id, title) => {
    const newArr = work.filter(i => i.id !== id)
    create(newArr)
    toast.success(`Successfully deleted ${title}`)
}

  return (
    <div className='flex gap-4 flex-wrap'>
        {work.map((i,index) => (
            <div key={index} className='bg-[#FFF9DE] shadow-lg h-full w-96 flex flex-col gap-3 p-4'>
                <div className='flex justify-between relative'>
                    <p className='text-sm font-semibold'>{i.title}</p>
                    <button onClick={() => {
                        setId(i.id);
                        setDrop(!drop)
                    }}><AiOutlineEllipsis /></button>
                    { drop &&
                    <div className={`p-3 ${i.id === id ? '' : 'hidden'} absolute shadow-md bg-white text-sm rounded-md right-2 top-2`}>
                        <button className='p-2'>Edit</button>
                        <hr></hr>
                        <button onClick={() => deletes(i.id, i.title)} className='p-2'>Delete</button>
                    </div>
                    }
                </div>
                <p className='text-xs'>{i.body}</p>
                <div className='flex justify-end'>
                    <div className='flex gap-2 items-center'>
                        <input checked = {i.done} onChange = {(e) => handleChange(e.target.checked, i.id)} id='done' type='checkbox' />
                        <label className='text-sm' htmlFor='done'>Done</label>
                    </div>
                </div>
            </div>
        ))}
        
     </div>
  )
}

export default Work