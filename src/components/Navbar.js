import React from 'react';
import "../app/globals.css";

import MenuIcon from '../../public/icons/menu.svg';
import AvatarIcon from '../../public/icons/avatar.svg';
import LWSIcon from '../../public/icons/lws-logo-black.svg';
import ShoppingCartIcon from '../../public/icons/shopping-Cart.svg';
import Link from "next/link";


const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
                <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                    <div className="flex items-center gap-2">

                        <MenuIcon
                            className="lg:hidden w-5 h-5"
                            alt="Menu"
                        />

                        <Link href="/">
                            <LWSIcon
                                // className="w-12 h-12"
                                alt="lws-icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">

                    <AvatarIcon
                        className="hidden lg:block w-[18px] h-[18px]"
                        alt="login acount avatar"
                    />

                    <ShoppingCartIcon
                        className="block w-5 h-5"
                        alt="shopping cart icon"
                    />
                </div>
            </nav>
            {/* <!-- Navbar END --> */}
        </>
    );
}

export default Navbar;
