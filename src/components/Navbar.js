import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdFitness } from 'react-icons/io';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 639) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menu = (e) => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="flex flex-col text-center transition ease-in-out delay-500 bg-slate-600 text-white">
            <div className="p-2 sm:hidden ">
                <IoMdFitness size={35} />
            </div>
            <div
                className="absolute right-3 top-2 sm:hidden hover:scale-110"
                onClick={menu}>
                <AiOutlineMenu size={35} />
            </div>

            <ul
                className={
                    isOpen
                        ? 'flex flex-col w-full justify-center mx-auto transition-all ease-in duration-500 place-items-center'
                        : 'hidden'
                }>
                <li className="border-b-2 p-3 hover:text-lg transition-colors w-full">
                    Home
                </li>
                <li className="border-b-2 p-3 hover:text-lg transition-colors w-full">
                    Shop
                </li>
                <li className="border-b-2 p-3 hover:text-lg transition-colors w-full">
                    Blog
                </li>
                <li className="border-b-2 p-3 hover:text-lg transition-colors w-full">
                    Login/Register
                </li>
                <li className="p-3 hover:text-lg transition-colors">
                    <AiOutlineShoppingCart size={25} />
                </li>
            </ul>

            <div className="flex max-sm:hidden">
                <ul className="flex w-full justify-center mx-auto ">
                    <li className="p-3 hover:text-lg transition-colors">
                        Home
                    </li>
                    <li className="p-3 hover:text-lg transition-colors">
                        Shop
                    </li>
                    <li className="p-3 hover:text-lg transition-colors">
                        Blog
                    </li>
                </ul>
                <ul className="flex w-full justify-center mx-auto">
                    <li className="p-3 hover:text-lg transition-colors">
                        Login/Register
                    </li>
                    <li className="p-3 hover:text-lg transition-colors">
                        <AiOutlineShoppingCart size={25} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
