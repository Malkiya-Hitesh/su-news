import Image from 'next/image'
import Link from 'next/link'
import NavButoon from './ui/NavButoon'

function Navbar() {
    return (
        <nav className='grid grid-cols-[0.8fr_1fr] h-[8rem] w-[98vw] overflow-x-hidden py-[1rem] px-[var(--cost-margin-xxl)]  items-center bg-[var(--color-bg)]  ' >
            <div>
                <Image
                    className=''
                    src='/image/logo.png'
                    width={50}
                    height={30}
                    alt='logo'
                />
                
            </div>
            <div className='flex items-center gap-3 justify-between  '>
                <NavLink h={"/"} data={"home"} />
                <NavLink h={"sport"} data={"sport"} />
                <NavLink h={"events"} data={"events"} />
                <NavLink h={"offers"} data={"offers"} />
                <NavLink h={"contact"} data={"contact"} />  
                <NavButoon theme={"dark"}>subscribe</NavButoon>
                <NavButoon theme={"light"}>login</NavButoon>

            </div>
        </nav>
    )
}

export default Navbar



export const NavLink = ({ data, h }) => {
    return (
        <Link className='text-[1.35rem] font-semibold' href={h} >{data}</Link>
    )
}