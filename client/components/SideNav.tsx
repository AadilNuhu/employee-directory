
'use client';                                                                                           import Link from "next/link"
import { usePathname } from "next/navigation"

const SideNav = () => {
    const path = usePathname()
    const navLinks = [
        {name:'Dashboard', href:'/'},
        {name:'Directory', href:'/directory'},
        {name:'Add Employee', href:'/add'},
        {name:'Reports', href:'/reports'},
        {name:'Profile', href:'/profile'},
    ]
  return (
    <div className="w-[20%] shrink-0 bg-gray-900 text-white lg:pt-3">
        <h3 className="pt-4 text-lg font-bold text-center text-gray-300 "><span className="text-green-600">E D</span> web app</h3>
        <p className="text-sm text-center text-gray-400">Employee Directory</p>
        <div className="border mx-4 my-7"></div>
        <div className="px-4">
            {navLinks.map((link) => {
                const isActive = path ===link.href;
                return(
                    <Link 
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 ${isActive ? 'bg-green-600' : 'hover:bg-gray-700'} rounded-md mb-3 cursor-pointer`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default SideNav