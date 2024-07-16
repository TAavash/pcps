import React, { useState } from 'react'

const ProductComponent = () => {
    const [product, setProduct] = useState("");

  return (
    <>
        <div className='bg-blue-950 text-white text-2xl p-2 text-center'>Add Product</div>
        <form className='flex justify-center my-4' >
            <div >
            <h1>{product}</h1>
                <label className='text-xl text-blue-800 me-4   ' for='name'>Product Name:</label> 
                <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-blue-700 rounded-lg p-2' id='name' type="text" name="productName" placeholder='enter product name' />
            </div>
        </form>
    </>
  )
}

export default ProductComponent