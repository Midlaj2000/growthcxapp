import logo from '../images/logo.svg'
import downArrow from '../images/icon-arrow-down.svg'
import upArrow from '../images/icon-arrow-up.svg'
import menuOpen from '../images/icon-menu.svg'
import closeMenu from '../images/icon-close-menu.svg'
import todoList from '../images/icon-todo.svg'
import calender from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import { useState } from 'react';
import '../index.css'

const Navbar = () => {
    const [openFeatures, setOpenFeatures] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    const handleOpen = () => {
        const navbar = document.querySelector('.navbar')
        const menuButton = document.querySelector('.menu-button')

        navbar.classList.toggle('open')

        if (navbar.classList.contains("open")) {
            menuButton.src = closeMenu
        } else {
            menuButton.src = menuOpen
        }

    }

    return (
        <header className='p-5 flex items-center justify-between'>
            <div className='lg:flex lg:items-start lg:justify-start' >
                <img src={logo} alt="" className='mr-5' />
                <nav className='navbar '>
                    <div>
                        <button onClick={() => setOpenFeatures(!openFeatures)} className='flex items-center justify-start hover:opacity-75'>
                            Features {openFeatures ? <img src={upArrow} alt="" className='ml-2' />
                                : <img src={downArrow} alt="" className='ml-2' />}
                        </button>
                        {openFeatures && <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow'>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={todoList} alt="" className='mr-2 ' />Todo List</li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={calender} alt="" className='mr-2' />Calender</li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={reminders} alt="" className='mr-2' />Reminders</li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={planning} alt="" className='mr-2' />Planning</li>
                        </ul>}
                    </div>
                    <div>
                        <button onClick={() => setOpenCompany(!openCompany)} className='flex items-center justify-start hover:opacity-75'>
                            Company {openCompany ? <img src={upArrow} alt="" className='ml-2 lg:ml-0' />
                                : <img src={downArrow} alt="" className='ml-2' />}</button>
                        {openCompany && <ul className='mt-2 ml-2 lg:p-3 lg:shadow'>
                            <li className='flex items-center justify-start text-sm mb-2'>History</li>
                            <li className='flex items-center justify-start text-sm mb-2'>Our Team</li>
                            <li className='flex items-center justify-start text-sm mb-2'>Blog</li>
                        </ul>}
                    </div>
                    <div className='mb-2 lg:mb-0'>
                        <button className='hover:opacity-75'>Careers</button>
                    </div>
                    <div>
                        <button className='hover:opacity-75'>About</button></div>
                </nav>

            </div>

            <div className='lg:hidden'>
                <button onClick={handleOpen}>
                    <img src={menuOpen} alt="" className='menu-button' />
                </button>
            </div>

            <div className='hidden lg:block'>
                <button className='mr-10 opacity-75 hover:opacity-100 ' >Login</button>
                <button className='border-2 border-black opacity-75 px-6 py-2 rounded-2xl hover:bg-black hover:text-white'>Register</button>
            </div>

        </header>
    );
}

export default Navbar;