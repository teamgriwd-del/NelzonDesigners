import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

export default function Navbar(){

const [mobileOpen,setMobileOpen] = useState(false)
const [scrolled,setScrolled] = useState(false)

const location = useLocation()

useEffect(()=>{

const handleScroll = ()=>{
setScrolled(window.scrollY > 50)
}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

const navLinks = [
{path:"/",label:"Home"},
{path:"/services",label:"Services"},
{path:"/gallery",label:"Gallery"},
{path:"/contact",label:"Contact"}
]

return(

<header
className={`fixed w-full z-50 transition duration-300 ${
scrolled
? "bg-black-900 shadow-lg"
: "bg-transparent"
}`}
>

<nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">

{/* LOGO */}

<div className="flex items-center gap-3">

<img src={logo} className="w-30 md:w-20"/>

<span className="font-bold text-xl">
Nelzon Designers
</span>

</div>


{/* DESKTOP NAV */}

<div className="hidden md:flex items-center gap-10 text-lg">

{navLinks.map((link)=>{

const active = location.pathname === link.path

return(

<Link
key={link.path}
to={link.path}
className={`relative transition ${
active ? "text-amber-400" : "hover:text-gray-200"
}`}
>

{link.label}

{/* underline slider */}

<span
className={`absolute left-0 -bottom-1 h-[2px] bg-amber-400 transition-all duration-300 ${
active ? "w-full" : "w-0 group-hover:w-full"
}`}
></span>

</Link>

)

})}


{/* QUOTE BUTTON */}

<Link
to="/quote"
className="bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
>

Get Quote

</Link>

</div>


{/* MOBILE MENU BUTTON */}

<div className="md:hidden">

<button onClick={()=>setMobileOpen(!mobileOpen)}>

{mobileOpen ? <X size={30}/> : <Menu size={30}/>}

</button>

</div>

</nav>


{/* MOBILE MENU */}

{mobileOpen && (

<div className="md:hidden bg-blue-900 text-white px-6 pb-6 flex flex-col gap-6 text-lg">

{navLinks.map(link =>(

<Link
key={link.path}
to={link.path}
onClick={()=>setMobileOpen(false)}
className={`${
location.pathname === link.path
? "text-amber-400"
: ""
}`}
>

{link.label}

</Link>

))}

<Link
to="/quote"
onClick={()=>setMobileOpen(false)}
className="bg-white text-blue-900 text-center py-2 rounded-lg font-semibold"
>

Get Quote

</Link>

</div>

)}

</header>

)

}