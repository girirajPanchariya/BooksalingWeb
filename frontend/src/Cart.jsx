import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const [pordect, setProdect] = useState()
  const {prodectId} = useParams()

  useEffect(() => {
    const fetchProdect = async () => {
      try {
        const res = await axios.get('http://localhost:5000/prodect/get',{
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        setProdect(res.data.prodect)

      } catch (error) {
        console.log(error)
      }
    }

    fetchProdect()
  }, []) // ✅ Add pordect to dependency array to refetch when it changes

  const OrderProdect = async (prodectId) => {
    try {
      const res = await axios.post(`http://localhost:5000/order/post/${prodectId}`,{},
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      )
      console.log(res.data);
      alert(res.data.message)

    } catch (error) {
      console.log(error);
      
      alert(error.response.data.message)
    }
  }

  return (
    // <div>
    //   {pordect && pordect.map((item) => (
    //     <div key={item._id}>
    //         <img src={`http://localhost:5000/${item.Image}`} alt={item.Image} />
    //       <h2>{item.ProdecName}</h2>
    //       <p>{item.ProdecDetail}</p>
    //       <p>${item.ProdecPrice}</p>
    //     </div>
    //   ))}
    // </div>
    <div className='bg-gray-500 h-auto  w-[100%] flex flex-wrap gap-7 justify-center items-start  pt-4'>
      {pordect && pordect.map((item)=>
      <div key={item._id} className='h-auto w-100 border bg-amber-500 rounded-2xl justify-center'>
        <img className='h-30 rounded-md w-55 mt-2' src={`http://localhost:5000/${item.Image}`} alt={item.Image} />
        <h2 className='text-xl font-bold mt-2'>Book Name: {item.ProdecName}</h2>
        <p className='text-sm mt-1 text-center'>ProdectDescription: {item.ProdecDetail}</p>
        <p className='text-lg font-semibold mt-2 text-end mr-2'>Price: ${item.ProdecPrice}</p>
      <div><p className='text-sm mt-1 text-center'>
  posted: {new Date(item.createdAt).toLocaleString()}
</p>  
          <button className='bg-green-500 text-white px-4 py-2 rounded-md mt-4 mb-4 ml-2'>Add to Cart</button>
          <button onClick={() => OrderProdect(item._id)} className='bg-red-500 text-white px-4 py-2 rounded-md mt-4 mb-4 ml-2'>Buy Now</button>
          
        </div>
      </div>
      )}

    </div>
  )
}

export default Cart