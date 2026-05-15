import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-8'>
            <Image src={logo} width={300} height={200} alt="Logo" className='mx-auto' />
            <p className='text-lg text-[#706F6F] mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#706F6F] mt-2.5'>
                <span className='text-[#403F3F]'>{format(new Date(), "eeee")},</span> {format(new Date(), "MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;