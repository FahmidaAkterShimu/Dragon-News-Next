import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='w-full max-w-285 mx-auto flex justify-between items-center mt-5'>
            <div></div>
            <ul className='flex gap-5 justify-between items-center'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>
            <div className='flex gap-2.5 items-center'>
                <div>
                    <Image src={user} width={41} height={41} alt='User avatar'></Image>
                </div>

                <Link
                    href={'/login'}
                    className='btn bg-[#403F3F] text-xl font-semibold text-white px-8 py-6'>
                    Login
                </Link>

            </div>
        </div>
    );
};

export default Navbar;