import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
   /*  const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/itsSubhojit')
        .then((res) => res.json())
        .then((data) => setData(data))
    }) */
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github:
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubLoaderInfo = async() =>{
  const res = await fetch('https://api.github.com/users/itsSubhojit')
  return  res.json()
}