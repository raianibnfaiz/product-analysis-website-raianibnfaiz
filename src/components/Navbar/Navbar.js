import React, { useState } from 'react';
import Links from './Links';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "Review", link: "/review" },
        { id: 3, name: "Dashboard", link: "/dashboard" },
        { id: 4, name: "Blogs", link: "/blogs" },
        { id: 4, name: "About", link: "/about" }
    ]
    return (
        <div className=" p-2 bg-slate-100">
            <div onClick={() => setOpen(!open)}>
                {open ? <XIcon className="h-6 w-6 md:hidden"></XIcon> : <MenuIcon className="h-6 w-6 md:hidden "></MenuIcon>}

            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in  ${open ? 'top-6 bg-gray-300 pb-2 mt-2' : 'top-[-160px]'}`}>
                {routes.map(route => <Links key={route.id} link={route}></Links>)}
            </ul>
        </div>
    );
};

export default Navbar;