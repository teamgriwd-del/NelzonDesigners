import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import contactBg from "../assets/contact-bg.jpg"

export default function Contact(){

const whatsappNumber = "263714027178"

return(


<div
className="min-h-screen py-20 px-6 bg-cover bg-center relative"
style={{ backgroundImage: `url(${contactBg})` }}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="max-w-7xl mx-auto relative z-10">
{/* HERO */}

<motion.div
initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-center mb-16"
>

<h1 className="text-5xl font-bold text-white mb-4">
Contact Nelzon Designers
</h1>

<p className="text-gray-200 text-lg max-w-2xl mx-auto">
Have a project in mind? Our team is ready to help bring your
kitchen, closet or furniture ideas to life. Reach out today
and let’s start designing your dream space.
</p>


</motion.div>


{/* CONTACT CARDS */}

<div className="grid md:grid-cols-3 gap-8 mb-16">


{/* PHONE */}

<motion.div
whileHover={{scale:1.05}}
className="bg-white p-8 rounded-xl shadow-lg text-center"
>

<Phone className="mx-auto text-blue-900 mb-4" size={32}/>

<h3 className="text-xl font-semibold mb-2">
Call Us
</h3>

<p className="text-gray-600 mb-4">
Speak directly with our team.
</p>

<a
href="tel:+263714027178"
className="text-blue-900 font-semibold"
>

+263 714 027 178

</a>

</motion.div>


{/* EMAIL */}

<motion.div
whileHover={{scale:1.05}}
className="bg-white p-8 rounded-xl shadow-lg text-center"
>

<Mail className="mx-auto text-blue-900 mb-4" size={32}/>

<h3 className="text-xl font-semibold mb-2">
Email Us
</h3>

<p className="text-gray-600 mb-4">
Send us your project details.
</p>

<a
href="mailto:nelzondesigners@gmail.com"
className="text-blue-900 font-semibold"
>

nelzondesigners@gmail.com

</a>

</motion.div>


{/* LOCATION */}

<motion.div
whileHover={{scale:1.05}}
className="bg-white p-8 rounded-xl shadow-lg text-center"
>

<MapPin className="mx-auto text-blue-900 mb-4" size={32}/>

<h3 className="text-xl font-semibold mb-2">
Our Location
</h3>

<p className="text-gray-600 mb-2">
Harare, Zimbabwe
</p>

<p className="text-gray-500 text-sm">
Serving homes and businesses across Zimbabwe
</p>

</motion.div>

</div>


{/* WHATSAPP CTA */}

<div className="text-center mb-16">

<a
href={`https://wa.me/${whatsappNumber}`}
target="_blank"
className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 transition"
>

<MessageCircle/>

Chat With Us On WhatsApp

</a>

</div>


{/* SOCIAL MEDIA */}

<div className="text-center mb-20">

<h3 className="text-5xl font-bold text-white mb-4">
Follow Nelzon Designers
</h3>

<div className="flex justify-center gap-6 text-2xl">

<a
href="#"
target="_blank"
className="bg-white p-4 rounded-full shadow hover:scale-110 transition text-blue-600"
>
<FaFacebookF/>
</a>

<a
href="#"
target="_blank"
className="bg-white p-4 rounded-full shadow hover:scale-110 transition text-pink-500"
>
<FaInstagram/>
</a>

<a
href="#"
target="_blank"
className="bg-white p-4 rounded-full shadow hover:scale-110 transition text-black"
>
<FaTiktok/>
</a>

<a
href="#"
target="_blank"
className="bg-white p-4 rounded-full shadow hover:scale-110 transition text-black"
>
<FaXTwitter/>
</a>

</div>

</div>


{/* MAP */}

<div className="rounded-xl overflow-hidden shadow-xl">

<iframe
className="w-full h-[450px]"
src="https://maps.google.com/maps?q=harare&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>

</div>

</div>

</div>

)

}