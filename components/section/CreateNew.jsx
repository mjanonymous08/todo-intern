import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {motion} from "framer-motion"


const CreateNew = ({open,setopen,create}) => {
const Navigate = useNavigate()
const [title, settitle] = useState('')
const [body, setbody] = useState('')
const [category, setcategory] = useState('')
const [count, setCount] = useState(1)

function myFunction(){
setCount(id + 1 )
}    
function handlesubmit(){
    // if(!title){
    //     toast.error('Please input a Title ')
    //     return false
    // }
    // if(!body) {
    //     toast.error('Please input a Body ')
    //     return false
    // }
    // if(!title && !body) {
    //     toast.error('Please Input Somethhing ')
    //     return false
    // }
    if(!category) {
        toast.error('Please select a category  ')
        return false
    }
     console.log()

    try {
        setopen(!open)
        create(prev => [...prev,{
            id: {setCount},
            title:title,
            body:body,
            category:category
        }
        ])
        toast.success('Todo created')
    } catch (error) {
        console.log(error)
    } finally {
        Navigate(`/${category}`)
    }
        
}

  return (
    <div className='shadow-lg w-[700px] border opacity-100 opa bg-white rounded-md p-6 flex flex-col gap-3'>
        <div className='flex justify-between'>
            <button onClick={() => setopen(!open)} className='text-lg text-red-700 hover:text-2xl'><AiOutlineClose /></button>
            <button onClick ={handlesubmit} className={`bg-[#69665C] ${title && body && category ? '' : ' pointer-events-none opacity-50'} text-white text-sm  px-7 rounded-md py-1`}>Add</button>
             {/* <button onClick ={handlesubmit} {...(e) => setCount(e.target.value)} className={`bg-[#69665C] text-white text-sm  px-7 rounded-md py-1`} >Add</button>  */}
        </div>
        <div className='flex flex-col gap-1'>
            <p className=' text-base font-semibold' >Title</p>
            <input onChange= { (e) => settitle(e.target.value)} type='text' placeholder='add a title' className='rounded-md p-2 outline-none bg-[#F9F9F8]' />
        </div>
        <div className='flex flex-col gap-1'>
            <p className=' text-base font-semibold'>Body</p>
            <textarea onChange= { (e) => setbody(e.target.value)} type='text' placeholder='add a descripton' className='rounded-md h-20 p-2 outline-none bg-[#F9F9F8]' />
        </div>
        <div className='flex flex-col gap-1'>
        <p className=' text-base font-semibold'>Tags</p>
        <div className="flex gap-8">
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick= {(e) => setcategory('work')}className="bg-[#d2ceff] w-5 h-5 rounded-full"/>
                <p className='text-sm'>work</p>
            </div>
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick= {(e) => setcategory('study')}className="bg-[#d1e5f7] w-5 h-5 rounded-full"/>
                <p className='text-sm'>study</p>
            </div>
            <div className="flex hover:bg-[#FAF9F8] p-2 cursor-pointer rounded-md gap-2 items-center">
                <input onClick= {(e) => setcategory('entertainment')} className="bg-[#ffcece] w-5 h-5 rounded-full"/>
                <p className='text-sm'>entertainment</p>
            </div>
            <div className="flex p-2   hover:bg-[#FAF9F8] cursor-pointer rounded-md gap-2 items-center">
                <input onClick= {(e) => setcategory('family') } className="bg-[#daf2d6] w-5 h-5 rounded-full "/>
                <p className='text-sm'>family</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CreateNew