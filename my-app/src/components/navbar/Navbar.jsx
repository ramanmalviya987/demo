import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import "./navbar.css"
const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false)
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt={logo} />
                </div>
                <div className="gpt3_navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button"><span>Sign Up</span></button> 
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine  color="#fff" size={27} onClick={() => SetToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => SetToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar