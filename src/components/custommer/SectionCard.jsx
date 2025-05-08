import React from 'react'

const SectionCard = ({ product }) => {
    return (
        <div className='cursor-pointer flex flex-col bg-white rounded-lg overflow-hidden w-[15rem] mx-3 border relative'>

            <div className='h-[15rem]'>
                <img className='w-full h-full object-cover object-center'
                    // src="https://assets.adidas.com/images/w_600,f_auto,q_auto/99837dbc0ca34663acad9cd544faf0dd_9366/Giay_Samba_OG_x_Liberty_London_Tre_Em_Nhieu_mau_JI0280_00_plp_standard.jpg"
                    src={product.imageSrc}
                    alt="" />
            </div>
            <div className='p-2 text-left'>
                <p className='text-sm text-red-500 line-through'>{product.discountedPrice}đ</p>
                <div className='flex items-center gap-1'>
                    <p className='text-sm text-gray-500'>{product.price}đ Giá gốc</p>
                    <p className='text-sm text-red-300'>- {product.discountPersent}%</p>
                </div>
                <p className='mt-1'>{product.title}</p>
            </div>
        </div>
    )
}

export default SectionCard;  


{/* <p className='text-sm text-black'>{product.price}đ</p><p className='text-sm text-red-300'>-{product.discountPersent}%</p> */}
{/* <h3 className='text-lg font-medium text-gray-950'>{product.brand}</h3> */}
{/* <p className='text-sm text-gray-500'>Originals</p> */}