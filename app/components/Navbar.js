import Image from 'next/image'
import Link from 'next/link'
import NavButoon from './ui/NavButoon'
import ResposiveNave from './ResposiveNave';
function Navbar() {
    return (
        <nav className='grid grid-cols-[1fr_1fr]   w-[100vw] min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem] overflow-x-hidden  pr-[2rem] max-[640px]:pr-[1.5rem] items-center bg-[var(--color-border)] fixed top-0 mb-2' >
            <div className=' '>
                <Image
                    className=' min-[1024px]:w-[40%] w-[60%] max-[640px]:w-[70%] max-[450px]:w-[85%]    min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem]  object-cover  cursor-pointer '
                    src='/image/logo.jpg'
                    width={100000000000}
                    height={100000000000}
                    alt='logo'
                />
                
            </div>
            <div className='flex items-center gap-3 justify-between max-[1024]:hidden' >
                <NavLink h={"/"} data={"home"} />
                <NavLink h={"sport"} data={"sport"} />
                <NavLink h={"events"} data={"events"} />
                <NavLink h={"offers"} data={"offers"} />
                <NavLink h={"contact"} data={"contact"} />  
                <NavButoon theme={"dark"}>subscribe</NavButoon>
                <NavButoon theme={"light"}>login</NavButoon>

            </div>
            <div className=' max-[1024px]:flex hidden justify-end  items-center gap-5 ' >
                
               <ResposiveNave />

            </div>
        </nav>
    )
}

export default Navbar



export const NavLink = ({ data, h }) => {
    return (
        <Link className='text-[1.35rem] font-semibold capitalize' href={h} >{data}</Link>
    )
}