import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Loader from '@/components/Loader'

import axios from 'axios'

const Orders = () => {

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
        <div className='bg-grey-100 min-h-screen'>
            <div className='flex justify-between p-4 px-4'>
                <h2>Orders</h2>
                <h2>Welcome Back, Client</h2>
            </div>

            <div className='p-4'>
                <div className='w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Order</span>
                        <span className="sm:text-left text-right">Status</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>

                    </div>

                    <ul>

                        { loading && <li> <Loader /> </li> }
                        {data && data.data && data.data.map((order, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800' size={20} />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='font-bold text-gray-800'>{order.total.toLocaleString()}</p>
                                        <p className='text-sm text-gray-800'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>
                                    <span className={`rounded-full px-2 text-xs ${order.status === 'Processing' ? 'bg-green-200' : order.status === 'Success' ? 'bg-green-400' : 'bg-yellow-200'}`}>
                                        {order.status}</span>
                                </p>
                                <p className='hidden md:flex'>{order.date}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Orders
