import bonsai_logo from '../assets/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between relative overflow-x-clip'>
      <img src={bonsai_logo} alt='bonsai_logo' className='pt-4 pl-4' />

      <button type='button' onClick={() => setIsOpen(!isOpen)} className='pr-4 z-1'>
        { isOpen ?
        <AiOutlineClose className='text-4xl text-grey-custom' /> :
        <GiHamburgerMenu className='text-4xl text-grey-custom' /> }
      </button>

      <div className={`w-full flex flex-col items-center px-6 bg-amber-200 h-screen absolute ${ isOpen ? 'right-0' : '-right-full' } transition-all duration-700`}>
        <ul className='w-full pt-28'>
          <li className='font-proximanova text-grey-custom flex justify-between items-center border-b border-grey-custom mb-4 pb-4'>Product<span><IoIosArrowDown /></span></li>
          <li className='font-proximanova text-grey-custom flex justify-between items-center border-b border-grey-custom mb-4 pb-4'>Templates<span><IoIosArrowDown /></span></li>
          <li className='font-proximanova text-grey-custom border-b border-grey-custom mb-4 pb-4'>Pricing</li>
          <li className='font-proximanova text-grey-custom border-b border-grey-custom mb-6 pb-4'>Reviews</li>
        </ul>

        <button type='button' className='font-proximanova text-mint-custom w-full rounded-sm py-3 uppercase font-bold border border-mint-custom mb-4 text-sm tracking-widest'>Log in</button>
        <button type='button' className='font-proximanova bg-mint-custom text-white w-full rounded-sm py-3 uppercase font-bold text-sm tracking-widest'>Start free</button>
      </div>
    </nav>
  );
}

export default Navbar;
