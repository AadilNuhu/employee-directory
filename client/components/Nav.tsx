"use client"
import { Plus, MenuIcon } from "lucide-react"
import { useState } from "react"
import AddEmployee from "./AddEmployee"

type navProps = {
  menuClick : () => void
}

const Nav = ({menuClick}:navProps) => {
    const [show, setShow] = useState<Boolean>(false)
    const [showNav, SetShowNav] = useState<Boolean>(true)
  return (
    <div className="flex w-full justify-between bg-gray-100 px-6 py-5 items-center border-b border-gray-300">
        <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><span><MenuIcon onClick={menuClick} className="cursor-pointer" /></span>Team Directory</div>
        <div className="flex gap-1 bg-green-600 p-2 items-center rounded-md text-gray-100 text-sm cursor-pointer" onClick={() => setShow(true)}><Plus />Add Employee</div>
        {show && (
            <AddEmployee onClose={() => setShow(false)} />
        )}
    </div>
  )
}

export default Nav