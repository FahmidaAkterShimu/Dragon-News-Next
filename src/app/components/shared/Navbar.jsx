import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='w-full max-w-285 mx-auto flex flex-wrap-reverse md:grid md:grid-cols-3 justify-center md:justify-between items-center gap-4 mt-5'>
            <div></div>
            <ul className='flex gap-5 justify-center items-center'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>
            <div className='flex gap-2.5 justify-center md:justify-end items-center'>
                <div>
                    <Image src={user} width={41} height={41} alt='User avatar'></Image>
                </div>

                <Link
                    href={'/login'}
                    className='btn bg-[#403F3F] text-xl font-semibold text-white px-11 py-6'>
                    Login
                </Link>

            </div>
        </div>
    );
};

export default Navbar;