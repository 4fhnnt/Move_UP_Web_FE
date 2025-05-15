import { Button } from '@headlessui/react';
import CloseIcon from '@mui/icons-material/Close';

const product = [
    {
        // Thêm dữ liệu sản phẩm nếu cần
    }
]

export default function Cart() {
    return (
        <div className="container mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
                <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>

                    <div className="md:flex border border-gray-500 mt-5 relative">

                        <Button className="absolute top-2 right-2 text-red-500">
                            <CloseIcon fontSize="small" />
                        </Button>

                        <div className="md:w-4/12 2xl:w-1/4 w-full">
                            <img
                                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c646ad21130f4273bdbe11b95e81022f_9366/Giay_Samba_OG_Be_JI3208_01_00_standard.jpg"
                                alt="Black Leather Purse"
                                className="h-full object-center object-cover md:block hidden"
                            />
                            <img
                                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c646ad21130f4273bdbe11b95e81022f_9366/Giay_Samba_OG_Be_JI3208_01_00_standard.jpg"
                                alt="Black Leather Purse"
                                className="md:hidden w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center p-4">

                            <p className="text-base text-gray-800 mb-4">Giày Samba OG</p>

                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xs leading-3 text-gray-600">Màu:</p>
                                <p className="text-xs leading-none text-gray-600">1,000</p>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xs leading-3 text-gray-600">Kích cỡ:</p>
                                <p className="text-xs leading-none text-gray-600">1,000</p>
                            </div>

                            <p className="text-xs leading-3 text-gray-600 mb-4">Giảm giá:</p>

                            <div className="mb-4">
                                <select
                                    aria-label="Select quantity"
                                    className="py-1 px-5 border border-gray-200 mr-6 focus:outline-none"
                                >
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs leading-3 text-gray-800">Giá:</p>
                                <p className="text-base font-black leading-none text-gray-800">1,000</p>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </a>
                </div>

                <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-10 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-8 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590 đ</span>
                    </div>
                    <div className="flex justify-between text-sm mt-5 mb-5">
                        <span className="font-semibold uppercase">Giảm giá</span>
                        <span className="font-semibold">60 %</span>
                    </div>
                    <div>
                        <label
                            htmlFor="promo"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Mã giảm giá
                        </label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="Nhập mã giảm giá"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm">
                            <span className='uppercase'>Tổng tiền</span>
                            <span>600 đ</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}