import axios from 'axios'
import React, { useState } from 'react'

const ProdectPost = () => {

    const [prodect, setProdect] = useState({
        Image: null,
        ProdecName: '',
        ProdecPrice: '',
        ProdecDetail: '',
    })

    // handle text input
    const handleChange = (e) => {
        setProdect({
            ...prodect,
            [e.target.name]: e.target.value
        })
    }

    // ✅ handle file separately
    const handleFileChange = (e) => {
        setProdect({
            ...prodect,
            Image: e.target.files[0]
        })
    }

    const handelSumbit = async (e) => {
        e.preventDefault()

        try {
            // ✅ use FormData
            const formData = new FormData()
            formData.append("ProdecName", prodect.ProdecName)
            formData.append("ProdecPrice", prodect.ProdecPrice)
            formData.append("ProdecDetail", prodect.ProdecDetail)
            formData.append("Image", prodect.Image)

            const res = await axios.post(
                `http://localhost:5000/prodect/post`, // ✅ FIX URL
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }   
            )

            alert(res.data.message)

            setProdect({
                Image: null,
                ProdecName: '',
                ProdecPrice: '',
                ProdecDetail: '',
            })

        } catch (error) {
            console.log(error)
            alert(error.response?.data?.message || "Error")
        }
    }

    return (
        <div className="flex justify-center mt-10">
            <form
                onSubmit={handelSumbit}
                className='h-auto w-1/3 bg-gray-300 flex flex-col gap-2 px-4 py-4 rounded-sm'
            >
                <h1 className='font-bold text-lg text-center'>
                    Post Product Form
                </h1>

                <label className='font-semibold'>Image</label>
                <input
                    type="file"
                    name="Image"
                    onChange={handleFileChange} // ✅ FIX
                    className='border border-gray-400 rounded-sm p-2'
                />

                <label className='font-semibold'>Product Name</label>
                <input
                    type="text"
                    name="ProdecName"
                    value={prodect.ProdecName}
                    onChange={handleChange}
                    className='border border-gray-400 rounded-sm p-2'
                />

                <label className='font-semibold'>Product Price</label>
                <input
                    type="text"
                    name="ProdecPrice"
                    value={prodect.ProdecPrice}
                    onChange={handleChange}
                    className='border border-gray-400 rounded-sm p-2'
                />

                <label className='font-semibold'>Product Detail</label>
                <textarea
                    name="ProdecDetail"
                    value={prodect.ProdecDetail}
                    onChange={handleChange}
                    className='border border-gray-400 rounded-sm p-2'
                />

                <button
                    type="submit"
                    className='bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ProdectPost