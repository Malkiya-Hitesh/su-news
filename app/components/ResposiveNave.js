'use client'
import { useState } from 'react';
import NavButoon from './ui/NavButoon'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiXMark } from "react-icons/hi2";
import { NavLink } from './Navbar';
import NavDropdown from './ui/NavDropdown';

function ResposiveNave() {
    let [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className='max-[640px]:hidden'> <NavButoon theme={"dark"}>subscribe</NavButoon></div>
            <div className='max-[640px]:hidden'>   <NavButoon theme={"light"}>login</NavButoon></div>
            <GiHamburgerMenu
                onClick={toggleMenu}
                className='text-[1.35rem] max-[640px]:text-[1.8rem] cursor-pointer'
            />

            {/* BACKDROP */}
            <div
                className={`
                    fixed inset-0 bg-black/40 backdrop-blur-sm z-40
                    transition-opacity duration-300
                    ${menu ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                onClick={toggleMenu}
            ></div>

            {/* MENU PANEL */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-[60%]
                    bg-[var(--color-bg)]
                    flex flex-col items-center py-10 gap-6 z-50
                    transition-all duration-300 ease-in-out
                    ${menu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
                `}
            >
                <HiXMark
                    onClick={toggleMenu}
                    className='text-[2.35rem] cursor-pointer absolute top-3 right-5'
                />


                <div onClick={toggleMenu}>
                    <NavLink h={"/"} data={"home"} />
                </div>
                <NavDropdown title="category" onClick={toggleMenu} mobile={true} items={[
                    { label: "politics", href: "/category/politics" },
                    { label: "sports", href: "/category/sports" },
                    { label: "business", href: "/category/business" },
                    { label: "technology", href: "/category/tech" },
                    { label: "entertainment", href: "/category/entertainment" },
                    { label: "health", href: "/category/health" },
                    { label: "science", href: "/category/science" },
                    { label: "education", href: "/category/education" },
                    { label: "crime", href: "/category/crime" },
                    { label: "world", href: "/category/world" },
                    { label: "weather", href: "/category/weather" },
                    { label: "local", href: "/category/local" },
                    { label: "other", href: "/category/other" },
                ]} />

                <NavDropdown title="city" onClick={toggleMenu} mobile={true} items={[

                    { label: "chotila", href: "/city/chotila" },
                    { label: "thangadh", href: "/city/thangadh" },
                    { label: "sayla", href: "/city/sayla" },
                    { label: "chuda", href: "/city/chuda" },
                    { label: "dasada", href: "/city/dasada" },
                    { label: "dhrangadhra", href: "/city/dhrangadhra" },
                    { label: "halvad", href: "/city/halvad" },
                    { label: "lakhtar", href: "/city/lakhtar" },
                    { label: "limbdi", href: "/city/limbdi" },
                    { label: "muli", href: "/city/muli" },
                    { label: "sayla", href: "/city/sayla" },
                    { label: "thangadh", href: "/city/thangadh" },
                    { label: "wadhwan", href: "/city/wadhwan" },

                ]} />



                <div onClick={toggleMenu}>
                    <NavLink h={"/contact"} data={"contact"} />
                </div>
                <div onClick={toggleMenu}>
                    <NavButoon theme={"dark"}>subscribe</NavButoon>
                </div>

                <div onClick={toggleMenu}>
                    <NavButoon theme={"light"}>login</NavButoon>
                </div>
            </div>
        </>
    )
}

export default ResposiveNave;




