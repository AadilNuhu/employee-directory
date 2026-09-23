
'use client'; import Link from "next/link"
import { usePathname } from "next/navigation"

type close = {
    onClose: () => void
}

const SideNav = ({ onClose }: close) => {
    const path = usePathname()
    const navLinks = [
        { name: 'Dashboard', href: '/' },
        { name: 'Profile', href: '/profile' },
    ]
    return (
        <div className="w-[20%] shrink-0 bg-gray-900 text-white lg:pt-3 min-h-screen flex flex-col">
            <div className="flex justify-around items-center">
                <div>
                    <h3 className="pt-4 text-lg font-bold text-center text-gray-300">
                        <span className="text-green-600">E D</span> web app
                    </h3>

                    <p className="text-sm text-center text-gray-400">
                        Employee Directory
                    </p>
                </div>
                <button className="font-bold text-xl cursor-pointer hover:text-gray-400" onClick={onClose}>X</button>
            </div>

            <div className="border mx-4 my-7"></div>

            <div className="px-4 flex flex-col justify-between flex-1">

                {/* Navigation */}
                <div>
                    {navLinks.map((link) => {
                        const isActive = path === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-3 ${isActive
                                    ? 'bg-green-600'
                                    : 'hover:bg-gray-700'
                                    } rounded-md mb-3 cursor-pointer`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Logout */}
                <a
                    href=""
                    className="block px-4 py-3 text-red-600 hover:bg-red-700 hover:text-white rounded-md mb-3 cursor-pointer"
                >
                    Logout
                </a>

            </div>
        </div>
    )
}

export default SideNav