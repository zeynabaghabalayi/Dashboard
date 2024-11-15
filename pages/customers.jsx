import React from 'react'
import{BsPersonFill , BsThreeDotsVertical} from "react-icons/bs"
import {data} from '../components/data/data'
import Loader from '@/components/Loader'

import axios from 'axios'

const Customers = () => {

  
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
      setLoading(true)

      try {
          const res = await axios.get('/api/orders')
          setData(res.data)
          setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
  }


  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Customers</h2>
        <h2>Welcome to Zeynab's Dashboard</h2>
      </div>

      <div className='p-4'>
        <div className='w-full m-auto p-4 bg-white border overflow-y-auto'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 items-center justify-between cursor-pointer'>
                <span>Name</span>
                <span className='sm:text-left text-right'>Email</span>
                <span className='hidden md:grid'>Last Order</span>
                <span className='hidden sm:grid'>Method</span>

            </div>

            <ul>{ loading && <li> <Loader /> </li> }
            {data && data.data && data.data.map((order , id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <div className='flex items-center'>
                            <div className='bg-purple-100 p-3 rounded-lg'>
                                <BsPersonFill className='text-purple-800'  />
                            </div>
                            <p className='pl-4'>{order.name.first} {order.name.last}</p>
                        </div>
                        <p className='text-grey-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                        <p className='hidden md:flex'>{order.date}</p>
                        <div className='sm:flex hidden justify-between items-center'>

                        <p >{order.method} </p>
                        <BsThreeDotsVertical  />
                        </div>
                       
                    </li>
                ))}
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Customers
