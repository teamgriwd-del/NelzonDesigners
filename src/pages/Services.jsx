import { Hammer, ChefHat, DoorOpen, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import woodBg from "../assets/wood-bg.jpg"
import ReviewsCarousel from "../components/ReviewsCarousel"

export default function Services(){

return(

<div
className="min-h-screen bg-cover bg-center"
style={{backgroundImage:`url(${woodBg})`}}
>

<div className="bg-black/70 min-h-screen py-20 px-6">


{/* HERO */}

<motion.div
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-center text-white mb-20"
>

<h1 className="text-5xl font-bold mb-6">
Premium Interior Solutions
</h1>

<p className="max-w-2xl mx-auto text-lg text-gray-300">
Nelzon Designers creates luxury custom furniture,
modern fitted kitchens, and elegant walk-in closets
for homes across Harare.
</p>

</motion.div>



{/* SERVICES */}

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">

<motion.div whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white shadow-xl">

<Hammer size={40} className="mx-auto mb-4 text-amber-400"/>

<h3 className="text-2xl font-semibold mb-3">
Custom Furniture
</h3>

<p className="text-gray-200">
Handcrafted furniture designed to match your
home's style including TV stands, wardrobes,
office desks and dining tables.
</p>

</motion.div>



<motion.div whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white shadow-xl">

<ChefHat size={40} className="mx-auto mb-4 text-amber-400"/>

<h3 className="text-2xl font-semibold mb-3">
Fitted Kitchens
</h3>

<p className="text-gray-200">
Elegant kitchen cabinet installations with
modern layouts, storage solutions and
beautiful finishes.
</p>

</motion.div>



<motion.div whileHover={{scale:1.05}}
className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white shadow-xl">

<DoorOpen size={40} className="mx-auto mb-4 text-amber-400"/>

<h3 className="text-2xl font-semibold mb-3">
Walk-In Closets
</h3>

<p className="text-gray-200">
Luxury closet systems designed with shelves,
drawers and smart storage solutions.
</p>

</motion.div>

</div>



{/* TRUST STATS */}

<div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center text-white gap-12 mb-24">

<div>
<h2 className="text-4xl font-bold text-amber-400">100+</h2>
<p className="mt-2">Projects Completed</p>
</div>

<div>
<h2 className="text-4xl font-bold text-amber-400">98%</h2>
<p className="mt-2">Customer Satisfaction</p>
</div>

<div>
<h2 className="text-4xl font-bold text-amber-400">5★</h2>
<p className="mt-2">Client Rating</p>
</div>

</div>



{/* PROCESS */}

<div className="max-w-6xl mx-auto mb-24 text-white">

<h2 className="text-4xl font-bold text-center mb-16">
Our Process
</h2>

<div className="grid md:grid-cols-4 gap-8 text-center">

<div>
<CheckCircle className="mx-auto mb-4 text-amber-400"/>
<h3 className="font-semibold">Consultation</h3>
<p className="text-gray-300">
Understanding your design vision and needs.
</p>
</div>

<div>
<CheckCircle className="mx-auto mb-4 text-amber-400"/>
<h3 className="font-semibold">Design</h3>
<p className="text-gray-300">
Creating layouts and furniture concepts.
</p>
</div>

<div>
<CheckCircle className="mx-auto mb-4 text-amber-400"/>
<h3 className="font-semibold">Crafting</h3>
<p className="text-gray-300">
Our experts build your furniture with precision.
</p>
</div>

<div>
<CheckCircle className="mx-auto mb-4 text-amber-400"/>
<h3 className="font-semibold">Installation</h3>
<p className="text-gray-300">
Professional installation at your home.
</p>
</div>

</div>

</div>



{/* CLIENT REVIEWS */}

<ReviewsCarousel/>



{/* CTA */}

<div className="text-center text-white">

<h2 className="text-4xl font-bold mb-6">
Ready to Transform Your Space?
</h2>

<a
href="/quote"
className="bg-amber-600 px-8 py-4 rounded-lg text-white font-semibold hover:bg-amber-500 transition"
>

Request a Quote

</a>

</div>



</div>

</div>

)

}