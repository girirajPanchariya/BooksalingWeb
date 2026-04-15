import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'

const UserPosted = () => {

  const [prodects, setProdects] = useState()

  const [order, setOrder] = useState()

  var count;
  useEffect(() => {
    
    const fetchUserByOrder = async () => {
      try {
        const res = await axios.get("http://localhost:5000/order/userOrder", {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })

        console.log(res.data.order);
        setOrder(res.data.order)

      } catch (error) {
        console.log(error);

      }
    }

    const fetchProdects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/prodect/userProdect', {
          headers: {
            Content_Type: 'application/json'
          },
          withCredentials: true
        })

        // console.log(res.data.post);
        setProdects(res.data.post)

      } catch (error) {
        console.error('Error fetching products:', error)
        alert('Failed to fetch products. Please try again later.')
      }
    }
    fetchProdects()
    fetchUserByOrder()

  }, [])


  return (
    <div>
      <Header />
      <h1 className='text-2xl font-bold text-center mt-10'>Your Posted Products and Orders</h1>
      <div className=' grid grid-cols-2 bg-amber-800 h-134'>
        <div className='border-r-2 border-gray-300 bg-cyan-600 pl-20 justify-center overflow-y-scroll  '>
          <h2 className='text-xl font-bold text-center mt-5'>Your Posted Products</h2>
    
          {prodects && prodects.map((item,index) =>
          
        
            <div key={item._id} className='h-auto w-100  border bg-white rounded-2xl mt-2 py-7 px-5 '>
              <img className='h-30 rounded-md w-72 mt-2' src={`http://localhost:5000/${item.Image}`} alt="" />
              <h2 className='text-xl font-bold mt-2'>Book Name: {item.ProdecName}</h2>
              <p className='text-sm mt-1 text-center'>ProdectDescription: {item.ProdecDetail}</p>
              <p className='text-lg font-semibold mt-2 text-end mr-2'>Price: ${item.ProdecPrice}</p>
              <div>
                <p>{index +1}</p>
                <p className='text-sm mt-1 text-center'>
                posted: {new Date(item.createdAt).toLocaleString()}
              </p>

                <div className='flex justify-between mt-7'>

                  <button className=' border h-12 w-32 bg-green-500 rounded-sm' onClick={item._id}>View Prodect Detail</button>
                  <button className=' border h-12 w-32 bg-red-500 rounded-sm text-white border-black'>Delete Prodect</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='border-r-2 border-gray-300 bg-cyan-600 pr-10 justify-center overflow-y-scroll overflow-hidden '>
          <h2 className='text-xl font-bold text-center mt-5'>You Orders</h2>

          {order && order.map((item) =>
            <div className='h-auto w-145  border bg-amber-100 ml-5 rounded-2xl mt-2 py-7 px-7 ' key={item._id}>
              <img className='h-30 rounded-md w-72 mt-2' src={`http://localhost:5000/${item.ProdecOrder?.Image}`} alt="" />
              <h2 className='text-xl font-bold mt-2'>Book Name: {item.ProdecOrder?.ProdecName}</h2>
              <p className='text-sm mt-1 text-center'>ProdectDescription: {item.ProdecOrder?.ProdecDetail}</p>
              <p className='text-lg font-semibold mt-2 text-end mr-2'>Price: ${item.ProdecOrder?.ProdecPrice}</p>
              {/* you order prodec */}
              <p className='ml-10'><strong className='pl-1 relative right-7'>OrderDeliverData</strong>

                {new Date(item?.OrderDeliverData).toLocaleDateString()}</p>
              <p
                className={`text-end border w-24 italic rounded-sm px-2 py-1 ${item?.OrderStatus === "Delivered"
                    ? "bg-green-200"
                    : item?.OrderStatus === "Pending"
                      ? "bg-yellow-200"
                      : "bg-red-200"
                  }`}
              >
                {item?.OrderStatus || "Pending"}
              </p>            </div>
          )}
          

        </div>
      </div>
    </div>
  )
}

export default UserPosted 