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
                <NavDropdown title="category" onClick={toggleMenu} mobile={true} items={[
                    { label: "Politics", href: "/category/politics" },
                    { label: "Sports", href: "/category/sports" },
                    { label: "Business", href: "/category/business" },
                    { label: "Technology", href: "/category/tech" },
                ]} />
                <div onClick={toggleMenu}>
                    <NavLink h={"/"} data={"home"} />
                </div>
                <div onClick={toggleMenu}>
                    <NavLink h={"/sport"} data={"sport"} />
                </div>
                <div onClick={toggleMenu}>
                    <NavLink h={"/events"} data={"events"} />
                </div>
                <div onClick={toggleMenu}>
                    <NavLink h={"/offers"} data={"offers"} />
                </div>

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



function MobileDropdown({ title, items }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full px-6'>
            <button
                onClick={() => setOpen(!open)}
                className='w-full text-left py-2 text-[1.1rem] font-medium flex justify-between items-center'
            >
                {title}
                <span>{open ? "▲" : "▼"}</span>
            </button>

            <div
                className={`
                    flex flex-col gap-2 pl-4 pr-2 transition-all
                    ${open ? "max-h-[300px] opacity-100 py-2" : "max-h-0 opacity-0 overflow-hidden"}
                `}
            >
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        h={item.href}
                        data={item.label}
                    />
                ))}
            </div>
        </div>
    );
}
