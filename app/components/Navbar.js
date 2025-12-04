import Image from 'next/image'
import Link from 'next/link'
import NavButoon from './ui/NavButoon'
import ResposiveNave from './ResposiveNave';
import NavDropdown from './ui/NavDropdown';
function Navbar() {
    return (
        <nav className='grid grid-cols-[1fr_1fr] w-[100vw] overflow-visible min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem] pr-[2rem] max-[640px]:pr-[1.5rem] items-center bg-[var(--color-border)] fixed top-0 mb-2'>

            <div className=' '>
                <Image
                    className=' min-[1024px]:w-[40%] w-[60%] max-[640px]:w-[70%] max-[450px]:w-[85%]    min-[1024px]:h-[8rem] h-[7.5rem] max-[640px]:h-[5.5rem]  object-contain  cursor-pointer '
                    src='/image/logo.jpg'
                    width={100000000000}
                    height={100000000000}
                    alt='logo'
                />

            </div>
            <div className='flex items-center gap-3 justify-between max-[1024]:hidden' >
                <NavLink h={"/"} data={"home"} />

                <div>

                    <NavDropdown 
                    mobile={ false}
                        title="category"
                        items={ 
                           [
                { label :"politics" , href:"/category/politics"},
                { label :"sports" , href:"/category/sports"},
                { label :"business" , href:"/category/business"},
                { label :"technology" , href:"/category/tech"},
                { label :"entertainment" , href:"/category/entertainment"},
                { label :"health" , href:"/category/health"},
                { label :"science" , href:"/category/science"},
                { label :"education" , href:"/category/education"},
                { label :"crime" , href:"/category/crime"},
                { label :"world" , href:"/category/world"},
                { label :"weather" , href:"/category/weather"},
                { label :"local" , href:"/category/local"},
                { label :"other" , href:"/category/other"},
              
            ]
                        }
                    />
                </div>

                <div>
                    <NavDropdown
                    mobile={false}
                        title="city"
                        items={
                            
                            [
               { label :"chotila" , href:"/city/chotila"},
                { label :"thangadh" , href:"/city/thangadh"},
                { label :"sayla" , href:"/city/sayla"}, 
                { label :"chuda" , href:"/city/chuda"},
                { label :"dasada" , href:"/city/dasada"},
                { label :"dhrangadhra" , href:"/city/dhrangadhra"},
                { label :"halvad" , href:"/city/halvad"},
                { label :"lakhtar" , href:"/city/lakhtar"},
                { label :"limbdi" , href:"/city/limbdi"},
                { label :"muli" , href:"/city/muli"},
                { label :"sayla" , href:"/city/sayla"},
                { label :"thangadh" , href:"/city/thangadh"},
                { label :"wadhwan" , href:"/city/wadhwan"},
            ]
                           }
                    />

                </div>

                <NavLink h={"/contact"} data={"contact"} />
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