import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
const navbarItem = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Cars",
        sublink: [
            { name: "Tüm Kiralık Araçlar", link: "/allcars" },
            { name: "Ekonomik Araçlar", link: "/araclar/ekonomik" },
            { name: "Konfor Araçlar", link: "/araclar/konfor" },
            { name: "Prestij Araçlar", link: "/" },
            { name: "Premium Araçlar", link: "/" },
            { name: "Lüks Araçlar", link: "/" },
            { name: "Van Araçlar", link: "/" }
        ],
        path: "#"
    },
    {
        id: 3,
        title: "About",
        sublink:[
            {name:"Biz Kimiz",link:"/"},
            {name:"Misyon",link:"/"},
            {name:"Vizyon",link:"/"},
        ],
        path: "#"
    },
    {
        id: 4,
        title: "Booking",
        path: "#"
    },
]

const Navbar = () => {
    return (
        <nav className='shadow-md'>
            <div className='flex justify-between px-20 py-5 bg-white items-center'>

                <div>
                    <h1 className='navbar-title'>Car Rental</h1>
                </div>

                <div className='hidden lg:block'>
                    <div className='flex'>
                        <ul className='navbar-item flex gap-12 text-black pr-12 '>
                            {
                                navbarItem.map((item) => (
                                    <li key={item.id} className='relative group'>
                                        <a href={item.path} className='inline-block relative group'>
                                            <div className='hover:text-yellow-400 duration-500'>{item.title}</div>
                                            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out origin-bottom-left group-hover:origin-bottom-left'></span>
                                        </a>
                                        {item.sublink && (
                                            <ul className='absolute  hidden group-hover:block bg-white shadow-lg rounded mt-2'>
                                                {item.sublink.map((subItem, index) => (
                                                    <li key={index} className='px-4 py-2 hover:bg-gray-200'>
                                                        <Link to={subItem.link}>{subItem.name}</Link>
                                                        {/* <a href={subItem.link} className='block font-normal text-black'>{subItem.name}</a> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <button>
                        <IoMdMenu className='text-4xl' />
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar