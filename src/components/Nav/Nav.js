import { Link } from 'react-router-dom'
import Logo from './logo.svg'
import './Nav.css'
import { useState } from 'react'

export function Naving() {
    const [SideBar, setSideBar] = useState("close")
    const ShowNav = () => {
        console.log("SideNav");
        if (SideBar === "SideNav") {
            setSideBar("close")
        } else if (SideBar === "close") {
            setSideBar("SideNav")
        }
    }
    return (
        <div className="Naving">
            <div className='Inside_Naving'>
                <img src={Logo} alt='Logo' />
                <div className='Naving_links'>
                    <Link className='animated'>Features</Link>
                    <Link className='animated'>Pricing</Link>
                    <Link className='animated'>Resources</Link>
                </div>
            </div>
            <div className="SideBar" onClick={ShowNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='Naving_buttons'>
                <Link className='animated'>Login</Link>
                <button className='btn'>Sign up</button>
            </div>
            <div className={SideBar}>
                <div className='SideNav_pt1'>
                    <Link className='animated'>Pricing</Link>
                    <Link className='animated'>Resources</Link>
                    <button className='btn'>Resources</button>
                </div>
                <div className='SideNav_pt2'>
                    <button className='btn'>Login</button>
                    <button className='btn'>Sign up</button>
                </div>
            </div>
        </div>
    )
}