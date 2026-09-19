import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center items-center w-full rounded-xl bg-white p-6 ">


            <form className="space-y-4 w-120">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                    Add Employee
                </h2>
            </div>
                <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                    type="text"
                    placeholder="Role"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                    type="text"
                    placeholder="Department"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                />

                <input
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
                />

                <button
                    type="submit"
                    className="w-full rounded-lg cursor-pointer bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700"
                >
                    Add Employee
                </button>
            </form>
        </div>
    )
}

export default page