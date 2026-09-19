"use client"
import { Plus } from "lucide-react"
import { useState } from "react"
import AddEmployee from "./AddEmployee"

const Nav = () => {
    const [show, setShow] = useState<Boolean>(false)
  return (
    <div className="flex w-full justify-between bg-gray-100 px-6 py-5 items-center border-b border-gray-300">
        <div className="font-bold text-xl text-gray-800">Team Directory</div>
        <div className="flex gap-1 bg-green-600 p-2 items-center rounded-md text-gray-100 text-sm cursor-pointer" onClick={() => setShow(true)}><Plus />Add Employee</div>
        {show && (
            <AddEmployee onClose={() => setShow(false)} />
        )}
    </div>
  )
}

export default Nav