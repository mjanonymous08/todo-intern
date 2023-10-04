import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEllipsis} from 'react-icons/ai'

const Entertainment = ({todo,create}) => {
    const [drop, setDrop] = useState(false)
    const [entertain , setEntertain] = useState([])
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
        const newArr = todo.filter(i => i.category === 'entertainment')
        setEntertain(newArr)
    },[todo])
    const deletes = (id, title) => {
        const newArr = work.filter(i => i.id !== id)
        create(newArr)
        toast.success(`Successfully deleted ${title}`)
    }
  return (
    <div className='flex gap-4 flex-wrap'>
    {entertain.map((i,index) => (
        <div key={index} className='bg-[#FFF9DE] shadow-lg h-full w-96 flex flex-col gap-3 p-4'>
            <div className='flex justify-between relative'>
                <p className='text-sm font-semibold'>{i.title}</p>
                <button onClick={() => setDrop(!drop)}><AiOutlineEllipsis /></button>
                {drop &&
                <div className='p-3 absolute shadow-md bg-white text-sm rounded-md right-2 top-2'>
                    <button className='p-2'>Edit</button>
                    <hr></hr>
                    <button className='p-2' onClick={() => deletes(i.id, i.title)}>Delete</button>
                </div>
                }
            </div>
            <p className='text-xs'>{i.body}</p>
            <div className='flex justify-end'>
                <div className='flex gap-2 items-center'>
                    <input checked={i.done} onChange={(e) => handleChange(e.target.checked, i.id)} id='dones'  type='checkbox' />
                    <label className='text-sm' htmlFor='dones'>Done</label>
                </div>
            </div>
        </div>
    ))}
    
 </div>
  )
}

export default Entertainment