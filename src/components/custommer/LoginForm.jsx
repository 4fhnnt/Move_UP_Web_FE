import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <div className="flex items-center justify-center bg-white">
            <main className="w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-x-8 xl:gap-x-24">
                    {/* Login Form Section */}
                    <div className="mt-10 xl:mt-2">
                        <a href="#">
                            <h1 className="text-center text-4xl font-bold text-gray-800 py-4 border-b border-gray-300">
                                MOVE UP
                            </h1>
                        </a>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                            Đăng nhập ngay
                        </h2>
                        <form className="space-y-6 mt-4">
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-blue-50 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Mật khẩu*
                                </label>
                                <input
                                    type="password"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-blue-50 text-gray-900 placeholder-gray-400 shadow-sm focus:border-green-600 focus:outline-none focus:ring-green-600 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-green-600">
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <div className="mb-3 flex justify-center">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-black text-white py-2 px-10 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                >
                                    Đăng nhập
                                </button>
                            </div>

                            <div className="flex items-center justify-between">

                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Bạn chưa có tài khoản?</p>
                            <button to="" className="text-sm font-medium text-blue-600 hover:text-green-600">
                                Tạo tài khoản →
                            </button>
                        </div>
                    </div>

                    {/* Registration Prompt Section */}
                    <div className="mt-10 xl:mt-2 py-4">
                        <div className="justify-center items-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                Khách hàng đăng ký mới
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Bằng cách tạo tài khoản với Move Up, bạn sẽ có thể di
                                chuyển qua quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ
                                giao hàng, xem và theo dõi đơn hàng của bạn trong tài khoản của
                                bạn và hơn thế nữa.
                            </p>
                            <div className="mt-6">
                                <button to="">
                                    <button
                                        type="button"
                                        className="w-full rounded-md bg-black text-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                    >
                                        Đăng ký ngay
                                    </button>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}