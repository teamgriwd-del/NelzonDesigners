import { useState } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipeable } from "react-swipeable"
import CountUp from "react-countup"

import showroom from "../assets/showroom-bg.jpg"

const kitchens = import.meta.glob("../assets/kitchen*.jpg",{eager:true})
const closets = import.meta.glob("../assets/closet*.jpg",{eager:true})
const furniture = import.meta.glob("../assets/furniture*.jpg",{eager:true})

export default function Gallery(){

const kitchenImages = Object.values(kitchens).map(img=>({src:img.default,category:"kitchen"}))
const closetImages = Object.values(closets).map(img=>({src:img.default,category:"closet"}))
const furnitureImages = Object.values(furniture).map(img=>({src:img.default,category:"furniture"}))

const gallery = [...kitchenImages,...closetImages,...furnitureImages]

const [filter,setFilter] = useState("all")
const [selectedIndex,setSelectedIndex] = useState(null)

const filtered =
filter === "all"
? gallery
: gallery.filter(img=>img.category===filter)

const next = ()=> setSelectedIndex((selectedIndex+1)%filtered.length)
const prev = ()=> setSelectedIndex((selectedIndex-1+filtered.length)%filtered.length)

const swipe = useSwipeable({
onSwipedLeft:next,
onSwipedRight:prev
})

return(

<div
className="min-h-screen bg-cover bg-center"
style={{backgroundImage:`url(${showroom})`}}
>

<div className="bg-black/80 min-h-screen px-6 py-20">

{/* HERO */}

<div className="text-center text-white mb-16">

<h1 className="text-5xl font-bold mb-6">
Our Craftsmanship Gallery
</h1>

<p className="max-w-3xl mx-auto text-gray-300 text-lg">
Explore kitchens, wardrobes and furniture designed
with precision, elegance and passion. Every piece
is built to transform a house into a beautiful home.
</p>

</div>


{/* COUNTERS */}

<div className="grid md:grid-cols-3 text-center text-white max-w-5xl mx-auto mb-20 gap-10">

<div>
<h2 className="text-5xl font-bold text-amber-400">
<CountUp end={gallery.length} duration={3}/>+
</h2>
<p>Projects</p>
</div>

<div>
<h2 className="text-5xl font-bold text-amber-400">
<CountUp end={closetImages.length} duration={3}/>
</h2>
<p>Closets</p>
</div>

<div>
<h2 className="text-5xl font-bold text-amber-400">
<CountUp end={furnitureImages.length} duration={3}/>
</h2>
<p>Furniture Pieces</p>
</div>

</div>


{/* FILTERS */}

<div className="flex justify-center gap-4 mb-16 flex-wrap">

<button
onClick={()=>setFilter("all")}
className={`px-6 py-2 rounded-lg ${
filter==="all"
?"bg-blue-900 text-white"
:"bg-white/20 text-white backdrop-blur"
}`}
>
All ({gallery.length})
</button>

<button
onClick={()=>setFilter("kitchen")}
className="px-6 py-2 bg-white/20 text-white rounded-lg backdrop-blur"
>
Kitchens ({kitchenImages.length})
</button>

<button
onClick={()=>setFilter("closet")}
className="px-6 py-2 bg-white/20 text-white rounded-lg backdrop-blur"
>
Closets ({closetImages.length})
</button>

<button
onClick={()=>setFilter("furniture")}
className="px-6 py-2 bg-white/20 text-white rounded-lg backdrop-blur"
>
Furniture ({furnitureImages.length})
</button>

</div>


{/* PINTEREST MASONRY GALLERY */}

<div className="columns-2 md:columns-3 lg:columns-4 gap-8 max-w-7xl mx-auto">

{filtered.map((img,i)=>(

<motion.div
key={i}
whileHover={{scale:1.03,y:-4}}
transition={{duration:0.3}}
className="mb-8 break-inside-avoid cursor-pointer relative"
onClick={()=>setSelectedIndex(i)}
>

{/* THIN LUXURY FRAME */}

<div className="bg-white p-[5px] rounded-lg shadow-xl hover:shadow-2xl transition duration-300">

<img
src={img.src}
loading="lazy"
className="w-full rounded-md object-cover
contrast-105 brightness-105
hover:scale-[1.03]
transition duration-500"
/>

</div>


{/* FLOATING PROJECT LABEL */}

<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs tracking-wider px-3 py-1 rounded">

{img.category.toUpperCase()} PROJECT

</div>

</motion.div>

))}

</div>


{/* FULLSCREEN LIGHTBOX */}

{selectedIndex!==null &&(

<div
className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
{...swipe}
>

<X
size={35}
className="absolute top-6 right-6 text-white cursor-pointer"
onClick={()=>setSelectedIndex(null)}
/>

<ChevronLeft
size={40}
className="absolute left-6 text-white cursor-pointer"
onClick={prev}
/>

<img
src={filtered[selectedIndex].src}
className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl"
/>

<p className="absolute bottom-10 text-white text-sm">
{selectedIndex+1} / {filtered.length}
</p>

<ChevronRight
size={40}
className="absolute right-6 text-white cursor-pointer"
onClick={next}
/>

</div>

)}

</div>

</div>

)

}