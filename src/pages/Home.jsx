import { motion } from "framer-motion"
import kitchen1 from "../assets/home2.jpg"
import closet1 from "../assets/home1.jpg"
import furniture1 from "../assets/furniture1.jpg"
import hero from "../assets/hero.jpg"

export default function Home(){

return(

<div className="min-h-screen">

{/* HERO */}

<section
className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
style={{backgroundImage:`url(${hero})`}}
>

{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-black/50"></div>

{/* CONTENT */}

<div className="relative z-10">

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-5xl md:text-6xl font-bold text-white"
>

Luxury Custom Furniture

</motion.h1>

<p className="mt-6 text-lg text-gray-200 max-w-xl">

Fitted kitchens, walk-in closets and bespoke furniture crafted in Harare.

</p>

<div className="mt-8 flex gap-4 justify-center">

<a
href="/quote"
className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
>

Request Quote

</a>

<a
href="/gallery"
className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
>

View Projects

</a>

</div>

</div>

</section>


{/* SERVICES */}

<section className="py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Our Services
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="shadow-lg p-8 rounded-xl">
<h3 className="text-xl font-bold">Custom Furniture</h3>
<p>TV stands, wardrobes, office desks and dining tables.</p>
</div>

<div className="shadow-lg p-8 rounded-xl">
<h3 className="text-xl font-bold">Fitted Kitchens</h3>
<p>Modern kitchen cabinets, island kitchens and storage.</p>
</div>

<div className="shadow-lg p-8 rounded-xl">
<h3 className="text-xl font-bold">Walk-in Closets</h3>
<p>Luxury closet systems with shelving and drawers.</p>
</div>

</div>

</section>


{/* FEATURED PROJECTS */}

<section className="bg-gray-100 py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Featured Projects
</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<img src={kitchen1} className="h-64 w-full object-cover rounded-xl"/>

<img src={closet1} className="h-64 w-full object-cover rounded-xl"/>

<img src={furniture1} className="h-64 w-full object-cover rounded-xl"/>

</div>

</section>


{/* WHY CHOOSE US */}

<section className="py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Why Choose Nelzon Designers
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">

<div>
<h3 className="font-bold text-xl">Quality Craftsmanship</h3>
<p>Expert furniture design and professional installation.</p>
</div>

<div>
<h3 className="font-bold text-xl">Custom Designs</h3>
<p>Every project tailored to your home and lifestyle.</p>
</div>

<div>
<h3 className="font-bold text-xl">Trusted in Harare</h3>
<p>Serving homeowners with reliable interior solutions.</p>
</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="bg-gray-100 py-20 px-6 text-center">

<h2 className="text-4xl font-bold mb-12">
What Our Clients Say
</h2>

<div className="max-w-3xl mx-auto">

<p className="italic text-lg">

“Nelzon Designers transformed our kitchen completely.
Beautiful craftsmanship and very professional service.”

</p>

<p className="mt-4 font-bold">
– Harare Client
</p>

</div>

</section>


{/* CALL TO ACTION */}

<section className="py-20 text-center bg-blue-900 text-white">

<h2 className="text-4xl font-bold mb-6">
Ready to Transform Your Home?
</h2>

<a
href="/quote"
className="bg-amber-700 px-8 py-4 rounded-lg"
>

Request a Quote

</a>

</section>

</div>

)

}