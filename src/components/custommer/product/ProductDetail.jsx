'use client'

import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import ModalComponent from '../Modal'
import { Rating } from '@mui/material'

const product = {
    name: 'Giày Samba OG',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: '36', inStock: true },
        { name: '37', inStock: true },
        { name: '38', inStock: true },
        { name: '39', inStock: true },
        { name: '40', inStock: true },
        { name: '41', inStock: true },
        { name: '42', inStock: true },
        { name: '43', inStock: true },
    ],
    description:
        'Với bề dày lịch sử suốt hơn 70 năm qua, giày Samba OG là một biểu tượng. Thân giày bằng da mượt mà và đế ngoài bằng cao su cho phong cách vừa thời thượng vừa đa năng. Bất kể đi chơi tối hay ra đường cuối tuần như bao ngày, đôi giày này sẽ là điểm nhấn tôn lên mọi outfit. Thiết kế thanh thoát và thuôn gọn mang đậm dấu ấn lịch sử, từ sân bóng đá đến sân trượt ván, khẳng định vị thế đẳng cấp của logo Ba Lá. Đã qua rồi thời còn là đôi giày tập trong nhà — ngày nay dòng giày Originals này tiếp tục viết thêm chương mới trong văn hóa và giới streetwear.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Detail() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const [showModal, setShowModal] = useState(false)
    const [value, setValue] = React.useState(4)

    return (
        <div className="bg-white w-full">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex items-center space-x-2 px-4 sm:px-6">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="flex flex-col lg:flex-row w-full px-4 sm:px-6 lg:px-8 pt-10">
                    {/* Left Column: Images and Description (75%) */}
                    <div className="w-full lg:w-3/4 pr-0 lg:pr-8 border-r border-gray-200 mb-2">
                        {/* Section 1: Image Gallery */}
                        <div className="mx-auto grid grid-cols-2 gap-4 lg:gap-4">
                            {product.images.slice(0, 4).map((image, index) => (
                                <img
                                    key={index}
                                    alt={image.alt}
                                    src={image.src}
                                    className="aspect-square w-full rounded-lg object-cover"
                                />
                            ))}
                        </div>

                        {/* Section 3: Description, Highlights, Details */}
                        <div className="mt-10 mb-10">
                            {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1> */}
                            <div className="mt-6">
                                <h3 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl mb-1">Mô tả</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl mb-1">Thông tin chi tiết</h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Column: Product Options (25%) */}
                    <div className="w-full lg:w-1/4 pl-0 lg:pl-8 mt-10 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        <p className="text-3xl tracking-tight text-gray-900 mt-2">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <Rating name="read-only" value={value} readOnly />
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigothemed:hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                                        {product.colors.map((color) => (
                                            <Radio
                                                key={color.name}
                                                value={color}
                                                aria-label={color.name}
                                                className={classNames(
                                                    color.selectedClass,
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(color.class, 'size-8 rounded-full border border-black/10')}
                                                />
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div
                                    className="flex items-center justify-between"
                                    onClick={() => setShowModal(!showModal)}
                                >
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <span className="underline text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Hướng dẫn chọn size
                                    </span>
                                </div>

                                {showModal && (
                                    <ModalComponent
                                        check={false}
                                        isVisible={showModal}
                                        onClose={() => setShowModal(false)}
                                    >
                                        <section className="bg-gray-50">
                                            <img
                                                src="https://cdn.luongsport.com/wp-content/uploads/2019/01/u2Yau01.png.webp"
                                                alt="Size guide"
                                                className="w-full h-auto object-contain"
                                            />
                                        </section>
                                    </ModalComponent>
                                )}

                                <fieldset aria-label="Choose a size" className="mt-4">
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="grid grid-cols-4 gap-4"
                                    >
                                        {product.sizes.map((size) => (
                                            <Radio
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={classNames(
                                                    size.inStock
                                                        ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500',
                                                )}
                                            >
                                                <span>{size.name}</span>
                                                {size.inStock ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                        >
                                                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <button
                                type="submit"
                                className="uppercase mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}