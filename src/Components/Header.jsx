import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [ToggleMenu,setToggleMenu]  = useState(false);
    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-white" href="#">ARAVIND-TECHIE</a>
        <nav className="hidden md:block">
        <ul className="flex text-white ">
            <li><a href="/">Home</a></li>
            <li><a href="#About1">About</a></li>
            <li><a href="#Projects1">Projects</a></li>
            <li><a href="#Resume1">Resume</a></li>
            <li><a href="#Contact1">Contact</a></li>
        </ul>
        </nav>

       {ToggleMenu &&  <nav className="block md:hidden ">
        <ul onClick={() => setToggleMenu(!ToggleMenu)} className="flex flex-col text-white mobile-nav ">
            <li><a href="#">Home</a></li>
            <li><a  href="#About1">About</a></li>
            <li><a   href="#Projects1">Projects</a></li>
            <li><a href="#Resume1">Resume</a></li>
            <li><a  href="#Contact1">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!ToggleMenu)} className='block md:hidden'> <Bars3Icon className='h-5 text-white ' /></button>
    </header>




}