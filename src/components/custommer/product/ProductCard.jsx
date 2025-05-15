import React from 'react'
import "./ProductCard.css"
const ProductCard = ({ product }) => {
    return (
        <div className='productCard w-[20rem] m-3 transition-all cursor-pointer rounded-lg overflow-hidden'>
            <div className='h-[20rem]'>
                <img className='w-full h-full object-cover object-left-top'
                    src={product.imageSrc}
                    // src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/18947f357590438bada090d22e6ce6f2_9366/giay-samba-og.jpg"
                    alt="" />
            </div>

            <div className='textPart bg-white p-3'>
                <div className='mb-2'>
                    <p className='text-sm text-gray-950'>{product.price}đ</p>
                </div>
                <div className=''>
                    <p className='text-gray-600'>{product.title}</p>
                    <p className='text-gray-500'>{product.brand}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
