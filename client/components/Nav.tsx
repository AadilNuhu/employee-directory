import { Plus } from "lucide-react"

const Nav = () => {
  return (
    <div className="flex w-full justify-between bg-gray-100 px-6 py-5 items-center border-b border-gray-300">
        <div className="font-bold text-xl text-gray-800">Team Directory</div>
        <div className="flex gap-1 bg-green-600 p-2 items-center rounded-md text-gray-100 text-sm cursor-pointer"><Plus />Add Employee</div>
    </div>
  )
}

export default Nav