import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import logo from "../assets/logo.png"

export default function Footer(){

const scrollTop = () => {
window.scrollTo({top:0,behavior:"smooth"})
}

return(

<footer className="bg-blue-900 text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">


{/* BRAND */}

<div>

<div className="flex items-center gap-3 mb-4">

<img src={logo} className="w-14"/>

<span className="font-bold text-xl">
Nelzon Designers
</span>

</div>

<p className="text-gray-200 text-sm">

Creating beautiful kitchens, closets and custom furniture
with craftsmanship and passion.

</p>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="font-semibold mb-4 text-lg">
Quick Links
</h3>

<div className="flex flex-col gap-2 text-gray-200">

<a href="/">Home</a>
<a href="/services">Services</a>
<a href="/gallery">Gallery</a>
<a href="/quote">Get Quote</a>
<a href="/contact">Contact</a>

</div>

</div>


{/* CONTACT */}

<div>

<h3 className="font-semibold mb-4 text-lg">
Contact
</h3>

<div className="flex flex-col gap-3 text-gray-200 text-sm">

<div className="flex items-center gap-2">
<Phone size={16}/>
+263 714 027 178
</div>

<div className="flex items-center gap-2">
<Mail size={16}/>
nelzondesigners@gmail.com
</div>

<div className="flex items-center gap-2">
<MapPin size={16}/>
Harare, Zimbabwe
</div>

</div>

</div>


{/* SOCIAL MEDIA */}

<div>

<h3 className="font-semibold mb-4 text-lg">
Follow Us
</h3>

<div className="flex gap-4 text-xl">

<a
href="https://facebook.com/blessingmairos"
target="_blank"
className="hover:text-gray-300"
>
<FaFacebookF/>
</a>

<a
href="https://instagram.com/blessingmairos"
target="_blank"
className="hover:text-gray-300"
>
<FaInstagram/>
</a>

<a
href="https://tiktok.com/@blessingmairos"
target="_blank"
className="hover:text-gray-300"
>
<FaTiktok/>
</a>

<a
href="https://x.com"
target="_blank"
className="hover:text-gray-300"
>
<FaXTwitter/>
</a>

</div>

</div>

</div>


{/* BOTTOM BAR */}

<div className="border-t border-blue-800 py-6 text-center text-sm text-gray-300">

<p>© 2026 Nelzon Designers • All Rights Reserved</p>

</div>


{/* BACK TO TOP BUTTON */}

<button
onClick={scrollTop}
className="fixed bottom-6 left-6 bg-white text-blue-900 p-3 rounded-full shadow-lg hover:scale-110 transition"
>

<ArrowUp size={20}/>

</button>

</footer>

)

}