import React from 'react'
import { data } from './data/data'
import  {FaShoppingBag} from 'react-icons/fa'
import axios from 'axios';
import Loader from './Loader';

const RecentOrders = () => {


  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
    // loader for improve UI
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
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <ul>
      { loading && <li> <Loader /> </li> }
      {data && data.data && data.data.map((order , id) => (
        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
          <div className='bg-purple-100 p-3 rounded-lg'>
            <FaShoppingBag className='text-purple-800' size={23} />
          </div>
          <div className='pl-4'>
            <p className='font-bold'>{order.name.first} {order.name.last}</p>
            <p className='text-sm text-gray-400'>{order.total}</p>
          </div>
          <p className='ml-auto text-sm font-semibold text-gray-400'>
            
            
          <span className={`rounded-full px-2 text-xs ${order.status === 'Processing' ? 'bg-green-200' : order.status === 'Success' ? 'bg-green-400' : 'bg-yellow-200'}`}>
          {order.status}</span>
            
            
            
            </p>
        </li> 
       ))}
      </ul>
    </div>
  )
}

export default RecentOrders
