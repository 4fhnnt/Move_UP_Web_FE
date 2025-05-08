'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
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
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
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

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
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
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
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
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

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

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// 'use client'

// import { useState } from 'react'
// import {
//     Dialog,
//     DialogBackdrop,
//     DialogPanel,
//     Disclosure,
//     DisclosureButton,
//     DisclosurePanel,
//     Menu,
//     MenuButton,
//     MenuItem,
//     MenuItems,
//     RadioGroup,
// } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
// import ProductCard from './ProductCard'
// import { shoes } from '../data/data'
// import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material'

// const sortOptions = [
//     { name: 'Price: Low to High', href: '#', current: false },
//     { name: 'Price: High to Low', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Product() {
//     const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

//     return (
//         <div className="bg-white">
//             <div>
//                 {/* Mobile filter dialog */}
//                 <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
//                     <DialogBackdrop
//                         transition
//                         className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
//                     />

//                     <div className="fixed inset-0 z-40 flex">
//                         <DialogPanel
//                             transition
//                             className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
//                         >
//                             <div className="flex items-center justify-between px-4">
//                                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                                 <button
//                                     type="button"
//                                     onClick={() => setMobileFiltersOpen(false)}
//                                     className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                                 >
//                                     <span className="sr-only">Close menu</span>
//                                     <XMarkIcon aria-hidden="true" className="size-6" />
//                                 </button>
//                             </div>

//                             {/* Filters */}
//                             <form className="mt-4 border-t border-gray-200">
//                                 <h3 className="sr-only">Categories</h3>
//                                 <ul role="list" className="px-2 py-3 font-medium text-gray-900">
//                                     {subCategories.map((category) => (
//                                         <li key={category.name}>
//                                             <a href={category.href} className="block px-2 py-3">
//                                                 {category.name}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>

//                                 {filters.map((section) => (
//                                     <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
//                                         <h3 className="-mx-2 -my-3 flow-root">
//                                             <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                                 <span className="font-medium text-gray-900">{section.name}</span>
//                                                 <span className="ml-6 flex items-center">
//                                                     <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
//                                                     <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
//                                                 </span>
//                                             </DisclosureButton>
//                                         </h3>
//                                         <DisclosurePanel className="pt-6">
//                                             <div className="space-y-6">
//                                                 {section.options.map((option, optionIdx) => (
//                                                     <div key={option.value} className="flex gap-3">
//                                                         <div className="flex h-5 shrink-0 items-center">
//                                                             <div className="group grid size-4 grid-cols-1">
//                                                                 <input
//                                                                     defaultValue={option.value}
//                                                                     id={`filter-mobile-${section.id}-${optionIdx}`}
//                                                                     name={`${section.id}[]`}
//                                                                     type="checkbox"
//                                                                     className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                                                 />
//                                                                 <svg
//                                                                     fill="none"
//                                                                     viewBox="0 0 14 14"
//                                                                     className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                                                 >
//                                                                     <path
//                                                                         d="M3 8L6 11L11 3.5"
//                                                                         strokeWidth={2}
//                                                                         strokeLinecap="round"
//                                                                         strokeLinejoin="round"
//                                                                         className="opacity-0 group-has-checked:opacity-100"
//                                                                     />
//                                                                     <path
//                                                                         d="M3 7H11"
//                                                                         strokeWidth={2}
//                                                                         strokeLinecap="round"
//                                                                         strokeLinejoin="round"
//                                                                         className="opacity-0 group-has-indeterminate:opacity-100"
//                                                                     />
//                                                                 </svg>
//                                                             </div>
//                                                         </div>
//                                                         <label
//                                                             htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                                             className="min-w-0 flex-1 text-gray-500"
//                                                         >
//                                                             {option.label}
//                                                         </label>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </DisclosurePanel>
//                                     </Disclosure>
//                                 ))}
//                             </form>
//                         </DialogPanel>
//                     </div>
//                 </Dialog>

//                 <main className="w-full px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
//                         <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

//                         <div className="flex items-center">
//                             <Menu as="div" className="relative inline-block text-left">
//                                 <div>
//                                     <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                                         Sort
//                                         <ChevronDownIcon
//                                             aria-hidden="true"
//                                             className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
//                                         />
//                                     </MenuButton>
//                                 </div>

//                                 <MenuItems
//                                     transition
//                                     className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//                                 >
//                                     <div className="py-1">
//                                         {sortOptions.map((option) => (
//                                             <MenuItem key={option.name}>
//                                                 <a
//                                                     href={option.href}
//                                                     className={classNames(
//                                                         option.current ? 'font-medium text-gray-900' : 'text-gray-500',
//                                                         'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
//                                                     )}
//                                                 >
//                                                     {option.name}
//                                                 </a>
//                                             </MenuItem>
//                                         ))}
//                                     </div>
//                                 </MenuItems>
//                             </Menu>

//                             <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                                 <span className="sr-only">View grid</span>
//                                 <Squares2X2Icon aria-hidden="true" className="size-5" />
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={() => setMobileFiltersOpen(true)}
//                                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                             >
//                                 <span className="sr-only">Filters</span>
//                                 <FunnelIcon aria-hidden="true" className="size-5" />
//                             </button>
//                         </div>
//                     </div>

//                     <section aria-labelledby="products-heading" className="pt-6 pb-24">
//                         <h2 id="products-heading" className="sr-only">
//                             Products
//                         </h2>

//                         <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 w-full">
//                             {/* Filters */}
//                             <form className="hidden lg:block">
//                                 <h3 className="sr-only">Categories</h3>
//                                 <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
//                                     {subCategories.map((category) => (
//                                         <li key={category.name}>
//                                             <a href={category.href}>{category.name}</a>
//                                         </li>
//                                     ))}
//                                 </ul>

//                                 {filters.map((section) => (
//                                     <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
//                                         <h3 className="-my-3 flow-root">
//                                             <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                                                 <span className="font-medium text-gray-900">{section.name}</span>
//                                                 <span className="ml-6 flex items-center">
//                                                     <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
//                                                     <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
//                                                 </span>
//                                             </DisclosureButton>
//                                         </h3>
//                                         <DisclosurePanel className="pt-6">
//                                             <div className="space-y-4">
//                                                 {section.options.map((option, optionIdx) => (
//                                                     <FormControl>
//                                                     <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//                                                     <RadioGroup
//                                                       aria-labelledby="demo-radio-buttons-group-label"
//                                                       defaultValue="female"
//                                                       name="radio-buttons-group"
//                                                     >
//                                                       <FormControlLabel value="female" control={<Radio />} label="Female" />
//                                                       <FormControlLabel value="male" control={<Radio />} label="Male" />
//                                                       <FormControlLabel value="other" control={<Radio />} label="Other" />
//                                                     </RadioGroup>
//                                                   </FormControl>
//                                                     // <div key={option.value} className="flex gap-3">
//                                                     //     <div className="flex h-5 shrink-0 items-center">
//                                                     //         <div className="group grid size-4 grid-cols-1">
//                                                     //             <input
//                                                     //                 defaultValue={option.value}
//                                                     //                 defaultChecked={option.checked}
//                                                     //                 id={`filter-${section.id}-${optionIdx}`}
//                                                     //                 name={`${section.id}[]`}
//                                                     //                 type="checkbox"
//                                                     //                 className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                                     //             />
//                                                     //             <svg
//                                                     //                 fill="none"
//                                                     //                 viewBox="0 0 14 14"
//                                                     //                 className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                                     //             >
//                                                     //                 <path
//                                                     //                     d="M3 8L6 11L11 3.5"
//                                                     //                     strokeWidth={2}
//                                                     //                     strokeLinecap="round"
//                                                     //                     strokeLinejoin="round"
//                                                     //                     className="opacity-0 group-has-checked:opacity-100"
//                                                     //                 />
//                                                     //                 <path
//                                                     //                     d="M3 7H11"
//                                                     //                     strokeWidth={2}
//                                                     //                     strokeLinecap="round"
//                                                     //                     strokeLinejoin="round"
//                                                     //                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                                     //                 />
//                                                     //             </svg>
//                                                     //         </div>
//                                                     //     </div>
//                                                     //     <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
//                                                     //         {option.label}
//                                                     //     </label>
//                                                     // </div>
//                                                 ))}
//                                             </div>
//                                         </DisclosurePanel>
//                                     </Disclosure>
//                                 ))}
//                             </form>

//                             {/* Product grid */}
//                             <div className="lg:col-span-3">
//                                 <div className="flex flex-wrap w-full">
//                                     {shoes.map((item) => <ProductCard product={item} />)}
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </div>
//     )
// }

