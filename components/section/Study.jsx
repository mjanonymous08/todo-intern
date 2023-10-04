import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEllipsis} from 'react-icons/ai'
import CreateNew from './CreateNew'

const Study = ({todo,create}) => {
    const [editId, setEditId] = useState(0)
    const [editBody, setEditBody] = useState('')
    const [editTitle, setEditTitle] =useState('')
    const [category, setEditCategory] = useState('')
    const [drop, setDrop] = useState(false)
    const [editnew,seteditnew] = useState(false)
    const [study,setStudy] = useState([])
    const handleChange = (e,id) => {
        create (prev => {
            return prev.map(i => {
                if(i.id === id){
                    return {...i, done:e}
                }
                return i
            })
        })
    }
    useEffect(() => {
        const newArr = todo.filter(i => i.category === 'study')
        setStudy(newArr)
    },[todo])
    const deletes = (id, title) => {
        const newArr = work.filter(i => i.id !== id)
        create(newArr)
        toast.success(`Successfully deleted ${title}`)
    }
    const edit = (id,title,body, category) => {
        seteditnew(!editnew)
        setEditId(id)
        setEditBody(body)
        setEditTitle(title)
        setEditCategory(category)
    }
    return (
      <div className='flex gap-4 flex-wrap'>
        {study.map((i,index) => (
            <div key={index} className='bg-[#FFF9DE] shadow-lg h-full w-96 flex flex-col gap-3 p-4'>
            <div className='flex justify-between relative'>
                <p className='text-sm font-semibold'>{i.title}</p>
                <button onClick={() => setDrop(!drop)}><AiOutlineEllipsis /></button>
                { drop &&
                <div className='p-3 absolute shadow-md bg-white text-sm rounded-md right-2 top-2'>
                    <button onClick={() => edit(i.id,i.title,i.body,i.category)} className='p-2'>Edit</button>
                    <hr></hr>
                    <button className='p-2' onClick={() => deletes(i.id, i.title)}>Delete</button>
                 </div>
                }
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
        {
          editnew && 
            <div className = 'z-50 absolute top-28 left-64' >
              <CreateNew id={editId} bodyEdit={editBody} titleEdit={editTitle} categoryEdit={category}  createEdit={create} />
        </div>}
          
      </div>
    )
  
}

export default Study